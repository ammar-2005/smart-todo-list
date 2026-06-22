// dark & light mood
let toggleDark = document.querySelector("#themeToggle");
let themeIcon = toggleDark.querySelector("#themeIcon");
// add &  load todo
let todoInput = document.querySelector('#todoInput');
let searchInput = document.querySelector('#searchInput') ;
let addBtn = document.querySelector('#addBtn') ;
// display
let todoList = document.querySelector('#todoList') ;
// selectedPriority
let PrioritySelected = document.querySelector('#prioritySelector');
let priorities = PrioritySelected.querySelectorAll('button');
// DeleteTodos
let DeleteTodos = document.querySelector('#btn-delete'); 
// Update
let updateBtn = document.querySelector('#updateBtn') ;

// states

var storedDark = localStorage.getItem('isDark') === 'true';
let isDark = storedDark;
let todos = loadTodos();
let selectedPriority = 'medium' ;
let editingIndex = null;

if(isDark){
    document.body.classList.add('dark');
    themeIcon.innerHTML = '☀️';
}else{
    document.body.classList.remove('dark');
    themeIcon.innerHTML = '🌑';
}
displayTodos ();




// logic

// dark mood
function toggoleTheme(){

    isDark = !isDark
    localStorage.setItem('isDark' , JSON.stringify(isDark))
  document.body.classList.toggle('dark');
  if(isDark){
    themeIcon.innerHTML = '☀️'
  }else{
    themeIcon.innerHTML = '🌑' ;
  }

}

// load
function loadTodos(){
    var stored = localStorage.getItem('todos');
    if(stored === null){
        return[];
    }else{
        return JSON.parse(stored);
    }
}

// add
function addTodo(){
 var todo = {
  text : todoInput.value,
  priority: selectedPriority,
 };
 todos.push(todo);
 localStorage.setItem('todos' , JSON.stringify(todos));
 displayTodos () ;
 resetInputs () ;
}

// displayTodos
function displayTodos (){
    var filteredTodos = [] ;

    for( var i =0; i < todos.length; i++ ){
        // search
     if(todos[i].text.toLowerCase().includes(searchInput.value.toLowerCase()))
      {
      filteredTodos.push(`
     <li class="todo-item priority-${todos[i].priority}" data-index="${i}">
          <div class="todo-content">
            <div class="todo-text">${todos[i].text}</div>
            <span class="priority-badge ${todos[i].priority}">${todos[i].priority}</span>
          </div>
          <div class="todo-actions">
            <button class="btn btn-edit" data-role="update">Edit</button>
            <button class="btn btn-delete " data-role="delete">Delete</button>
          </div>
     </li>
     `);
     }
    }
    todoList.innerHTML = filteredTodos.join('');
}
// DeleteTodos
function deleteTodos(index){
  todos.splice(index , 1) ;
  localStorage.setItem('todos' , JSON.stringify(todos));
  displayTodos();
  resetInputs();
  addBtn.classList.remove('d-none');
  updateBtn.classList.add('d-none');
}

// resetInputs
function resetInputs (){
  todoInput.value ='';
  selectedPriority = 'medium';

  for( var i=0 ; i < priorities.length; i++){
    if(i === 1){
      priorities[i].classList.add('active');
    }else{
      priorities[i].classList.remove('active');
    }
  }
  editingIndex = null;
}

function setPriority(priority){
  selectedPriority = priority;
  for(var j=0; j < priorities.length; j++){
    if(priorities[j].dataset.priority === priority){
      priorities[j].classList.add('active');
    } else {
      priorities[j].classList.remove('active');
    }
  }
}

// Update
function upDate(index){
  editingIndex = index;
  todoInput.value = todos[index].text;
  setPriority(todos[index].priority);
  addBtn.classList.add('d-none');
  updateBtn.classList.remove('d-none');
}

function saveUpdate(){
  if (editingIndex === null) return;
  todos[editingIndex].text = todoInput.value;
  todos[editingIndex].priority = selectedPriority;
  localStorage.setItem('todos', JSON.stringify(todos));
  displayTodos();
  resetInputs();
  addBtn.classList.remove('d-none');
  updateBtn.classList.add('d-none');
  editingIndex = null;
}




// add event
 
toggleDark.addEventListener('click' , toggoleTheme) ;
addBtn.addEventListener('click' , addTodo);
updateBtn.addEventListener('click', saveUpdate);

for(var i=0; i < priorities.length; i++){
  priorities[i].addEventListener('click', function(){
    selectedPriority = this.dataset.priority;
    
    
  for(var j=0; j < priorities.length; j++){
    priorities[j].classList.remove('active');
  }
  
  this.classList.add('active');
  })
  
}
// delete && Update
todoList.addEventListener('click', function(e){
  if(e.target.dataset.role === 'delete'){
    var liTarget = e.target.closest('li.todo-item');
    deleteTodos(liTarget.dataset.index);
    } 
   
    if(e.target.dataset.role === 'update'){
    var liTarget = e.target.closest('li.todo-item');
    upDate(liTarget.dataset.index);
    }


})

searchInput.addEventListener('input' , function(){
  displayTodos();
} );
todoInput.addEventListener('keypress' , function(e){
  if(e.key === 'Enter'){ 
    if(editingIndex === null){
      addTodo();
    } else {
      saveUpdate();
    }
  }
})