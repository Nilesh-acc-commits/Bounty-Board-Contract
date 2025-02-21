# Bounty Board Contract

Welcome to the **Bounty Board Contract** project! This smart contract provides a decentralized bounty board system where tasks can be created with specific rewards, and users can claim rewards after completing tasks.

## Features

- **Task Creation**: Anyone can create a task with a description and a reward in ETH (measured in wei).
- **Task Completion**: Anyone can mark a task as completed and claim the associated reward.
- **Simple and Lightweight**: The contract has no constructors and requires no input during deployment, making it easy to deploy and use.
- **Event Logging**: Events are emitted when tasks are created and completed, providing transparency.
- **Receive Ether**: The contract can accept ETH, allowing it to fund tasks with rewards.

## Deployed Contract Address

The contract has been deployed on the **EDU Chain** at the following address:

**Deployed Address**: `0x57C3f14b433f9E2AC7f49da8C4C8ecB6FBF2C680`

You can interact with this contract on the EDU Chain using your Ethereum-compatible wallet or through dApp interfaces.

## Contract Functions

### 1. **createTask**
   - **Description**: Allows anyone to create a task by providing a description and a reward (in wei).
   - **Parameters**: 
     - `description`: A string that describes the task.
     - `reward`: The reward (in wei) given upon completion of the task.

### 2. **completeTask**
   - **Description**: Allows anyone to mark a task as completed and claim the reward.
   - **Parameters**:
     - `taskId`: The ID of the task to be completed.

### 3. **receive() external payable**
   - **Description**: A fallback function that allows the contract to accept ETH.
   - **Use**: Sends ETH to the contract to fund task rewards.

## Contract Events

- **TaskCreated**: Emitted when a new task is created.
  - Parameters: `taskId` (ID of the task), `description` (task description), `reward` (reward for the task).
  
- **TaskCompleted**: Emitted when a task is marked as completed and the reward is transferred.
  - Parameters: `taskId` (ID of the completed task), `completedBy` (address of the user who completed the task).

## Example Use Cases

1. **Creating a Task**
   - Use the `createTask` function to add a new task. You provide a description and a reward (in wei).
   - Example:
     - Description: "Fix the bug in the UI."
     - Reward: 1 Ether (1e18 wei).
   
2. **Completing a Task**
   - Call `completeTask` and specify the task ID. After marking the task as completed, the reward will be transferred to the caller's address.

## How to Interact with the Contract

1. **Using Remix IDE**:
   - Go to [Remix](https://remix.ethereum.org).
   - Connect Remix to the EDU Chain network.
   - Paste the contract code into Remix and deploy it.
   - Use the deployed contract address `0x57C3f14b433f9E2AC7f49da8C4C8ecB6FBF2C680` to interact with it.

2. **Using a Web3 Wallet (e.g., MetaMask)**:
   - Add the contract's address to your Web3 wallet.
   - Interact with the deployed contract using your wallet’s interface.

## Notes
- Ensure that the contract has enough funds to pay out the rewards. You can send ETH to the contract address `0x57C3f14b433f9E2AC7f49da8C4C8ecB6FBF2C680` to fund the contract.
- The contract does not require a constructor and can be deployed and used without any initial inputs.

## License

This project is open-source and available under the MIT License. Feel free to contribute and make improvements to the contract.

## Contact

For more information or if you have any questions, feel free to reach out.

- **GitHub Repository**: [link to your repository]
- **Deployed Address**: `0x57C3f14b433f9E2AC7f49da8C4C8ecB6FBF2C680`
