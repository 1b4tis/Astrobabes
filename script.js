const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-items");

function addTask() {
    const task = inputBox.value.trim();
    if (!task) { // If blank input, then show alert
        alert("Please write down a task");
        return;
    }

    // Create a new list item element
    const listItem = document.createElement("li");

    // Create a checkbox input
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create a span to hold the task text
    const taskText = document.createElement("span");
    taskText.textContent = task;

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px"; // Optional: Add some spacing
    deleteButton.onclick = () => {
        listContainer.removeChild(listItem);
    };

    // Append the checkbox, task text, and delete button to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);

    // Append the list item to the list container
    listContainer.appendChild(listItem);

    // Clear the input box for the next task
    inputBox.value = "";
}
