const removeBtns = document.querySelectorAll('.remove-btn-wrap');

todoContainer.addEventListener('click', onRemoveClickHeandler);

function onRemoveClickHeandler(e) {
  if ( !e.target.classList.contains('remove-btn-wrap') ) return false;
  
  let currentNum = +e.target.parentElement.querySelectorAll('td')[0].innerHTML;
  
  todoList.forEach( (todo, i, arr) => {
    if ( todo.num === currentNum) {
      arr.splice(i, 1);
      render();
    }
  });
}