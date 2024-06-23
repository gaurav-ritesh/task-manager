document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('new-task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', function() {
        addTask(taskInput.value);
        taskInput.value = '';
    });

    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask(taskInput.value);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        if (taskText.trim() === '') return;

        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            li.classList.toggle('completed');
        });

        const span = document.createElement('span');
        span.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(removeButton);
        taskList.appendChild(li);
    }
});
