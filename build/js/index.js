'use strict';

var todoContainer = document.querySelector('.todo-container'),
    todoList = [];

function makeCounter() {
  var currentCount = 1;
  return function () {
    return currentCount++;
  };
}

var counter = makeCounter();

var form = document.querySelector('.todoCreator'),
    nameInput = form.querySelector('.todoCreator__name'),
    discInput = form.querySelector('.todoCreator__discription');

form.addEventListener('submit', onSubmitHeandler);

function onSubmitHeandler(e) {
  e.preventDefault();
  var todo = {
    num: counter(),
    name: nameInput.value,
    discription: discInput.value
  };

  todoList.push(todo);
  render();

  cleanForm();
}

function cleanForm() {
  nameInput.value = discInput.value = '';
}
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
function createItem(data) {
  var item = document.createElement('tr');

  for (var key in data) {
    item.appendChild(createTd(data[key]));
  }
  item.appendChild(createRemoveBtn());
  return item;
}

function createTd(data) {
  var td = document.createElement('td');
  td.innerHTML = data;
  return td;
}

function createRemoveBtn() {
  var td = document.createElement('td');
  td.classList.add('remove-btn-wrap');
  return td;
}
var sortBtns = todoContainer.querySelectorAll('.sort-btn');

sortBtns.forEach(function (btn) {
  btn.addEventListener('click', onSortClickHeandler);
});

function onSortClickHeandler() {
  var sortFun = void 0;
  if (this.classList.contains('name-sort-btn')) {
    sortFun = function sortFun(a, b) {
      return a.name > b.name ? 1 : -1;
    };
  } else if (this.classList.contains('num-sort-btn')) {
    sortFun = function sortFun(a, b) {
      return a.num > b.num ? 1 : -1;
    };
  }

  todoList.sort(sortFun);
  render();
}
var removeBtns = document.querySelectorAll('.remove-btn-wrap');

todoContainer.addEventListener('click', onRemoveClickHeandler);

function onRemoveClickHeandler(e) {
  if (!e.target.classList.contains('remove-btn-wrap')) return false;

  var currentNum = +e.target.parentElement.querySelectorAll('td')[0].innerHTML;

  todoList.forEach(function (todo, i, arr) {
    if (todo.num === currentNum) {
      arr.splice(i, 1);
      render();
    }
  });
}