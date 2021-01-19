//// SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



// EVENT LISTENERS
todoButton.addEventListener('click,' addTodo);








//FUNCTIONS


function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDive.classList.add('todo')
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    ///buttons
    const completedButton = document.createElement('button');
    completedButton.innerText = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerText = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('complete-btn');
    todoDiv.appendChild(trashButton);
    ///append to ist
    todoList.appendChild(todoDiv);
};
tod 