
// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const $todoListOutput = $('.todo');
const $inProgressListOutput = $('.inprogress');
const $doneListOutput = $('.done');



// Todo: create a function to generate a unique task id
function generateTaskId() {
    const min = Math.pow(10, 14); //minimum 15 digit number
    const max = Math.pow(10, 15) - 1; // maximum 15-digit number
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const taskId = generateTaskId();

// Todo: create a function to create a task card
function createTaskCard(task) {
    
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
const $addtaskBtn = $('#add-task');

function getTaskData() {
    const rawTaskData = localStorage.getItem('tasks');
    const tasks = JSON.parse(rawTaskData) || [];

    return tasks;
}

function outputTasks() {
    // Retrieve tasks from localStorage
    const tasks = getTaskData();

    // Clear existing tasks before rendering
    $todoListOutput.empty();
    $inProgressListOutput.empty();
    $doneListOutput.empty();

    // Iterate through tasks and create task cards
    tasks.forEach(function(taskObj) {
        const $taskEl = $(`
            <article>
                <h5>${taskObj.title}</h5>
                <p>${taskObj.dueDate}</p>
                <p>${taskObj.taskDescription}</p>
                <button data-id="${taskObj.id}" class="btn bg-danger text-light delete-btn">Delete</button>
            </article>
        `);

        // Append task card to the appropriate list based on task status
        if (taskObj.todo) {
            $todoListOutput.append($taskEl);
        } else if (taskObj.inprogress) {
            $inProgressListOutput.append($taskEl);
        } else {
            $doneListOutput.append($taskEl);
        }
    });
}




/* This will be the event listener for the add task button */
function addTask() {
    const $titleInput = $('#task-title');
    const $dateInput = $('#due-date');
    const $taskInput = $('#task-description');

    const task = {
        id: taskId,
        title: $titleInput.val(),
        dueDate: $dateInput.val(),
        taskDescription: $taskInput.val(),
        completed: false
    };
    const tasks = getTaskData();

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    $titleInput.val('');
    $dateInput.val('');
    $taskInput.val('');

    outputTasks();
};
$addtaskBtn.on('click', addTask);     //EVENT LISTENER FOR ADDING TASK============================

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {


    /* This will be the due date picker and event listeners */
    function addDueDate() {
        $('#due-date').datepicker();
    }

    addDueDate();
});


