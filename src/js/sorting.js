const sortBtns = todoContainer.querySelectorAll('.sort-btn');


sortBtns.forEach( (btn) => {
  btn.addEventListener('click', onSortClickHeandler);
}); 

function onSortClickHeandler() {
  let sortFun;
  if ( this.classList.contains('name-sort-btn') ) {
    sortFun = (a, b) => { 
      return ( a.name > b.name) ? 1 : -1;
    }
  } else if ( this.classList.contains('num-sort-btn') ) {
    sortFun = (a, b) => { 
      return ( a.num > b.num) ? 1 : -1;
    }
  }
  
  todoList.sort( sortFun );
  render();
}