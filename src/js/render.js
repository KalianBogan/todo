function render() {
  const tbody = document.createElement('tbody');
  
  todoList.forEach((todo) => {
    let tr = createItem(todo);
    tbody.appendChild(tr);
  });
  
  let removedBody = todoContainer.querySelector('tbody');
  if (removedBody) {
    todoContainer.removeChild( removedBody );
  }
  
  todoContainer.appendChild(tbody);
  
  console.log(todoList);
}