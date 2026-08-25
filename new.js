const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


// Add Task
todoForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task");
        return;
    }

    createTask(taskValue);

    taskInput.value = "";
});


// Create Task
function createTask(taskText) {

    const li = document.createElement("li");

    li.className = "list-group-item task-item";

    li.innerHTML = `
        <span class="task-text">${taskText}</span>

        <div class="button-group">

            <button
                class="btn btn-success btn-sm complete-btn">
                Complete
            </button>

            <button
                class="btn btn-warning btn-sm edit-btn">
                Edit
            </button>

            <button
                class="btn btn-danger btn-sm delete-btn">
                Delete
            </button>

        </div>
    `;


    // Complete button
    const completeButton = li.querySelector(".complete-btn");

    completeButton.addEventListener("click", function () {

        const task = li.querySelector(".task-text");

        task.classList.toggle("completed");

        if (task.classList.contains("completed")) {
            completeButton.textContent = "Undo";
        } else {
            completeButton.textContent = "Complete";
        }

    });


    // Edit button
    const editButton = li.querySelector(".edit-btn");

    editButton.addEventListener("click", function () {

        const task = li.querySelector(".task-text");

        const newTask = prompt(
            "Edit your task:",
            task.textContent
        );

        if (newTask !== null && newTask.trim() !== "") {
            task.textContent = newTask.trim();
        }

    });


    // Delete button
    const deleteButton = li.querySelector(".delete-btn");

    deleteButton.addEventListener("click", function () {

        const confirmDelete = confirm(
            "Are you sure you want to delete this task?"
        );

        if (confirmDelete) {
            li.remove();
        }

    });


    // Add task to list
    taskList.appendChild(li);
}