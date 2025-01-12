const input = document.getElementById("taskText");
const noItemsAlert = document.getElementById("alert");
const listContainer = document.getElementById("task-items");
const todo = [];

// On page load
document.addEventListener("DOMContentLoaded", () => {
    todo.forEach((taskItem) => {
        addTask(taskItem);
    });
});

function createTask() {
    const task = input.value.trim();
    const categorySelect = document.getElementById("taskCategory"); // Fixed id
    const category = categorySelect.value; // Assign selected category

    // Validate input and category
    if (task === "") {
        alertMessage("Please write down a task");
        return;
    }
    if (category === "") {
        alertMessage("Please select a category");
        return;
    }

    // Check for duplicate tasks
    if (todo.some((taskItem) => taskItem.text === task)) {
        alertMessage("This task is already in the list");
        return;
    }

    // Create and store the task
    const listTask = { text: task, category: category, completed: false };
    todo.push(listTask);
    addTask(listTask);
    alertMessage("Task added!");
    input.value = ""; // Clear input field

}

function addTask(taskItem) {


    const listItem = document.createElement("li");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = taskItem.completed;

    // Create task text
    const taskText = document.createElement("span");
    taskText.textContent = `${taskItem.text} [${taskItem.category}]`; // Fixed template literal

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => {
        listContainer.removeChild(listItem);
        const index = todo.findIndex((t) => t.text === taskItem.text);
        if (index > -1) {
            todo.splice(index, 1);
        }
    };

    // Append elements to list item
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);

    // Add list item to the container
    listContainer.appendChild(listItem);
}

function alertMessage(message) {
    noItemsAlert.innerText = message;
    setTimeout(() => { noItemsAlert.innerText = ""; }, 2500);
}
