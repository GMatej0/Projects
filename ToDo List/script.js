let taskInput = document.getElementById('new-task');
let allTasks = document.querySelector('.all-tasks');
const btnAdd = document.getElementById('create-task');

function addTask(event) {
    event.preventDefault();

    let inputValue = taskInput.value;

    if (inputValue === '') {
        alert(`Please write a task before clicking on "ADD TASK"`);
    } else {
        allTasks.innerHTML += `<li class="task">
                                    <p class="task-name">${inputValue}</p>
                                    <button class="delete" title="Delete">X</button>
                                </li>`;
        taskInput.value = '';
        taskInput.focus();

        let tasks = document.querySelectorAll('.task');
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle('done');
            }
        }

        let activeTasks = document.querySelectorAll('.delete');
        for (let i = 0; i < activeTasks.length; i++) {
            activeTasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}

function writeOnEnter(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        btnAdd.click();
        taskInput.focus();
    }
}

btnAdd.addEventListener('click', addTask);

taskInput.addEventListener('keyup', writeOnEnter);