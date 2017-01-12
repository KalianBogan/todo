'use strict';

function render() {
  var tbody = document.createElement('tbody');

  todoList.forEach(function (todo) {
    var tr = createItem(todo);
    tbody.appendChild(tr);
  });

  var removedBody = todoContainer.querySelector('tbody');
  if (removedBody) {
    todoContainer.removeChild(removedBody);
  }

  todoContainer.appendChild(tbody);

  console.log(todoList);
}