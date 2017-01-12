'use strict';

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