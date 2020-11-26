//All Selectors
const filterOption = document.querySelector('.filter-todo')

//All Event Listeners
filterOption.addEventListener('click', filterTodo)

//All Functions
function addTodo(event) {
  //Create DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create LI
  const newTodo = document.createElement("li");
  newTodo.innerHTML = $('.todo-input').val();
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //Create completed btn
  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = '<i class="fa fa-check"></i>';
  completeBtn.classList.add("complete-btn");
  completeBtn.addEventListener('click', () => complete(todoDiv));
  todoDiv.appendChild(completeBtn);
  //Create delete btn
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener('click', () => remove(todoDiv));
  todoDiv.appendChild(deleteBtn);
  //Append to list
  $('.todo-list').append(todoDiv);
  
  //Clear input
  $('.todo-input').val('');
  return false; // do not reload
}

// Handles removing & completing actions
function remove(todo) {
  todo.classList.add("removing")
  todo.addEventListener("transitionend", function() {
    todo.remove();
  });
}

// Handles removing & completing actions
function complete(todo) {
  todo.classList.toggle("completed")
}

// Handles filter
function filterTodo (e) {
  $('.todo-list').children().each(function(i, todo) {
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