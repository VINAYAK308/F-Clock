let ongoingTasks = []; // Array to store ongoing tasks
let completedTasks = []; // Array to store completed tasks

// Function to add a task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim(); // Get task value and remove leading/trailing whitespace

    if (task !== "") { // Check if task is not empty
        ongoingTasks.push(task); // Add task to the ongoing tasks array
        displayTasks(); // Display tasks
        taskInput.value = ""; // Clear input field
    }
}

// Function to display tasks
function displayTasks() {
    let ongoingTasksList = document.getElementById("ongoingTasks");
    ongoingTasksList.innerHTML = ""; // Clear previous ongoing tasks
    let completedTasksList = document.getElementById("completedTasks");
    completedTasksList.innerHTML = ""; // Clear previous completed tasks

    ongoingTasks.forEach(function(task, index) {
        let li = document.createElement("li");
        li.textContent = task;
        let tickButton = document.createElement("button");
        tickButton.textContent = "✔️";
        tickButton.onclick = function() {
            completeTask(index);
        };
        li.appendChild(tickButton);
        ongoingTasksList.appendChild(li);
    });

    completedTasks.forEach(function(task) {
        let li = document.createElement("li");
        li.textContent = task;
        completedTasksList.appendChild(li);
    });
}

// Function to mark a task as completed
function completeTask(index) {
    let completedTask = ongoingTasks.splice(index, 1)[0]; // Remove task from ongoing tasks and get the removed task
    completedTasks.push(completedTask); // Add task to completed tasks array
    displayTasks(); // Update task display
}

displayTasks(); // Display tasks initially