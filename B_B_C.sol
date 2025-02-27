contract BountyBoard {

    // Struct to represent a task
    struct Task {
        string description;
        uint256 reward;
        bool completed;
    }

    // Mapping to store tasks with taskId
    mapping(uint256 => Task) public tasks;
    uint256 public taskCount;

    // Event to log task creation
    event TaskCreated(uint256 taskId, string description, uint256 reward);

    // Event to log task completion
    event TaskCompleted(uint256 taskId, address completedBy);

    // Function to create a new task with description and reward
    function createTask(string memory description, uint256 reward) public {
        tasks[taskCount] = Task({
            description: description,
            reward: reward,
            completed: false
        });
        emit TaskCreated(taskCount, description, reward);
        taskCount++;
    }

    // Function to mark a task as completed and transfer the reward
    function completeTask(uint256 taskId) public {
        Task storage task = tasks[taskId];

        require(taskId < taskCount, "Task does not exist.");
        require(!task.completed, "Task already completed.");

        // Mark task as completed
        task.completed = true;

        // Transfer reward (assuming sufficient balance)
        payable(msg.sender).transfer(task.reward);

        emit TaskCompleted(taskId, msg.sender);
    }

    // Fallback function to accept ETH into the contract
    receive() external payable {}

}
