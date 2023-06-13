fetch('https://dummyjson.com/todos')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    displayTodos(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


axios.get('https://dummyjson.com/todos')
  .then(response => {
    
    console.log(response.data);

    displayTodos(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });





function displayTodos(todos) {
    const container = document.getElementById('todoContainer');

    todos.forEach(todo => {
      const todoItem = document.createElement('div');
      todoItem.innerHTML = `
        <input type="checkbox" id="${todo.id}" ${todo.completed ? 'checked' : ''}>
        <label for="${todo.id}">${todo.title}</label>
      `;
      container.appendChild(todoItem);
    });
  }
  document.addEventListener('change', event => {
    if (event.target.type === 'checkbox') {
      const todoId = event.target.id;
      const completed = event.target.checked;}})

      const addTodoForm = document.getElementById('addTodoForm');

addTodoForm.addEventListener('submit', event => {
  event.preventDefault();

  const title = document.getElementById('todoTitle').value;
  const userId = document.getElementById('userId').value;
})

document.addEventListener('click', event => {
    if (event.target.classList.contains('deleteTodo')) {
      const todoId = event.target.dataset.todoId;}})


      function displayTodos(todos) {
        const todoContainer = document.getElementById('todoContainer');
        const doingContainer = document.getElementById('doingContainer');
        const doneContainer = document.getElementById('doneContainer');}
      
        // Clear existing todos from containers
        todoContainer.innerHTML = '';
        doingContainer.innerHTML = '';
        doneContainer.innerHTML = '';
      
        todos.forEach(todo => {
          const todoItem = document.createElement('div');
          todoItem.classList.add('todo-item');
        })