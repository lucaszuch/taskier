//All Selectors
const todoInput = document.querySelector('.todo-input');
// const todoCheck = document.querySelector('.todo-input').value;
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')


//All Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', delAndComp);
filterOption.addEventListener('click', filterTodo)

//All Functions
function addTodo(event) {
  //Check if valid input
  var todoCheck = document.querySelector('.todo-input').value;
  if(todoCheck != '') {
    //prevents form submitting
    event.preventDefault()
    //Create DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Create completed btn
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<i class="fa fa-check"></i>';
    completeBtn.classList.add("complete-btn");
    todoDiv.appendChild(completeBtn);
    //Create delete btn
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
    deleteBtn.classList.add("delete-btn");
    todoDiv.appendChild(deleteBtn);
    //Append to list
    todoList.appendChild(todoDiv);
    //Clear input
    todoInput.value = "";
  } else {
    alert("Ops! That's not a valid task.")
  }
}

// Handles removing & completing actions
function delAndComp(e) {
  const item = e.target;
  //Delete
  if(item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.classList.add("removing")
    todo.addEventListener("transitionend", function() {
      todo.remove();
    });
  }

  //Complete
  if(item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed")
  }
}

// Handles filter
function filterTodo (e) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
    switch(e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if(todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display =  "none"
        }
        break;
      case "uncompleted":
        if(!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none"
        }
        break;
    }
  })
}

//Saves todo list to the memory - tbc
/* function savingList(todo) {
  //Checks if there's something already in memory
  let todos;
  if(localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
} */