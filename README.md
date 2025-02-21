# Bounty Board Smart Contract

A simple smart contract for a bounty board system on the blockchain, where tasks can be created with specific rewards, and users can claim rewards upon completing tasks.

## Features
- **Task Creation**: Anyone can create tasks with a description and a specified reward amount (in ETH).
- **Task Completion**: Users can mark tasks as completed and claim the reward associated with that task.
- **Task Listing**: The contract maintains a list of tasks, and anyone can view them by task ID.
- **Event Logging**: Tasks creation and completion are logged via events.
- **Receive Ether**: The contract can accept ETH for transferring rewards.

## Contract Details

- **Contract Address**: `0x57C3f14b433f9E2AC7f49da8C4C8ecB6FBF2C680`
- **Blockchain**: Deployed on the EDU Chain (compatible with Ethereum).
- **Solidity Version**: `^0.8.19`

### Functions
1. **createTask(string memory description, uint256 reward)**: Allows anyone to create a task with a description and reward. 
   - _Description_: A string representing the task description.
   - _Reward_: The reward (in wei) that will be given upon task completion.

2. **completeTask(uint256 taskId)**: Allows anyone to complete a task and claim the reward. 
   - _taskId_: The ID of the task that is being completed.

3. **receive() external payable**: The contract accepts ETH to fund the rewards.

### Events
- **TaskCreated(uint256 taskId, string description, uint256 reward)**: Emits when a task is created.
- **TaskCompleted(uint256 taskId, address completedBy)**: Emits when a task is completed.

## Example Usage

1. **Creating a Task**
   - Use the `createTask` function to add a task by providing a description and reward (in wei).

2. **Completing a Task**
   - Call `completeTask` and provide the task ID. After completion, the reward will be transferred to the caller's address.

## Deployment Address

This contract has been deployed to the EDU Chain at the following address:

**Deployed Address**: `0x57C3f14b433f9E2AC7f49da8C4C8ecB6FBF2C680`

You can interact with this contract on the EDU Chain using your Ethereum wallet.

## How to Interact with the Contract

You can interact with the contract via an Ethereum wallet like MetaMask or through a web interface such as Remix or a dApp that supports interacting with smart contracts.

### Interacting via Remix:
1. Go to [Remix IDE](https://remix.ethereum.org).
2. Connect Remix to the EDU Chain network.
3. Paste the contract code in Remix and deploy it.
4. Use the deployed contract address `0x57C3f14b433f9E2AC7f49da8C4C8ecB6FBF2C680` to interact with it.

## Notes
- Ensure that the contract has enough balance to fund the rewards. You can fund the contract by sending ETH to its address.
- The contract does not have a constructor, and there are no input fields required during deployment. The task creation and completion actions are carried out after deployment.
  
## License

This project is open-source and available under the MIT License. Feel free to contribute!
