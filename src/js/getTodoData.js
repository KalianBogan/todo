function makeCounter() {
  let currentCount = 1;
  return () => { return currentCount++ }
}

let counter = makeCounter();

const form = document.querySelector('.todoCreator'),
      nameInput = form.querySelector('.todoCreator__name'),
      discInput = form.querySelector('.todoCreator__discription');

form.addEventListener('submit', onSubmitHeandler);

function onSubmitHeandler(e) {
  e.preventDefault();
  let todo = {
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

