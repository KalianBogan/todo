'use strict';

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