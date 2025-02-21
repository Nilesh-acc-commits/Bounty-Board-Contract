// BountyBoard Contract ABI (simplified)
const bountyBoardABI = [
    [
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "taskId",
					"type": "uint256"
				}
			],
			"name": "completeTask",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "description",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "reward",
					"type": "uint256"
				}
			],
			"name": "createTask",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "taskId",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "completedBy",
					"type": "address"
				}
			],
			"name": "TaskCompleted",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "taskId",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "description",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "reward",
					"type": "uint256"
				}
			],
			"name": "TaskCreated",
			"type": "event"
		},
		{
			"stateMutability": "payable",
			"type": "receive"
		},
		{
			"inputs": [],
			"name": "taskCount",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "tasks",
			"outputs": [
				{
					"internalType": "string",
					"name": "description",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "reward",
					"type": "uint256"
				},
				{
					"internalType": "bool",
					"name": "completed",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	]
];

// Replace with your BountyBoard contract address
const contractAddress = "0x57C3f14b433f9E2AC7f49da8C4C8ecB6FBF2C680"; 

// Elements
const connectWalletBtn = document.getElementById('connectWalletBtn');
const userAddress = document.getElementById('userAddress');
const createTaskForm = document.getElementById('createTaskForm');
const taskDescriptionInput = document.getElementById('taskDescription');
const taskRewardInput = document.getElementById('taskReward');
const taskList = document.getElementById('taskList');
const createTaskSection = document.getElementById('createTaskSection');

let provider;
let signer;
let contract;
let userAccount;

connectWalletBtn.addEventListener('click', connectWallet);
createTaskForm.addEventListener('submit', createTask);

// Function to connect the user's wallet
async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        // MetaMask (or Ethereum wallet) is available
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        
        try {
            // Request the user's wallet address (connect to MetaMask)
            await provider.send("eth_requestAccounts", []);
            userAccount = await signer.getAddress();
            userAddress.innerHTML = `Connected: ${userAccount}`;

            // Connect to the contract
            contract = new ethers.Contract(contractAddress, bountyBoardABI, signer);

            // Hide the Connect Wallet button
            connectWalletBtn.style.display = 'none';
            createTaskSection.classList.remove('hidden');
            
            // Fetch and display tasks after wallet is connected
            fetchTasks();
        } catch (error) {
            // Handle error (e.g., user rejected wallet connection)
            console.error("Error connecting wallet:", error);
            alert('Connection failed. Please try again.');
        }
    } else {
        // MetaMask (or any Ethereum wallet) is not detected
        alert('Please install MetaMask or another Ethereum wallet to connect.');
    }
}

// Fetch tasks from the smart contract
async function fetchTasks() {
    const taskCount = await contract.taskCount();
    taskList.innerHTML = ''; // Clear the list before adding new tasks

    for (let i = 0; i < taskCount; i++) {
        const task = await contract.tasks(i);
        const taskElement = document.createElement('div');
        taskElement.classList.add('task-card');
        taskElement.innerHTML = `
            <h3>Task ${i + 1}</h3>
            <p>${task.description}</p>
            <p>Reward: ${ethers.utils.formatEther(task.reward)} ETH</p>
            <button onclick="completeTask(${i})" class="btn-secondary w-full ${task.completed ? 'opacity-50 cursor-not-allowed' : ''}">
                ${task.completed ? 'Completed' : 'Complete Task'}
            </button>
        `;
        taskList.appendChild(taskElement);
    }
}

// Function to create a new task
async function createTask(event) {
    event.preventDefault();

    const description = taskDescriptionInput.value;
    const rewardInWei = ethers.utils.parseEther(taskRewardInput.value);

    try {
        await contract.createTask(description, rewardInWei);
        taskDescriptionInput.value = '';
        taskRewardInput.value = '';
        fetchTasks();
    } catch (error) {
        console.error("Error creating task:", error);
    }
}

// Function to mark a task as completed
async function completeTask(taskId) {
    try {
        await contract.completeTask(taskId);
        fetchTasks();
    } catch (error) {
        console.error("Error completing task:", error);
    }
}
