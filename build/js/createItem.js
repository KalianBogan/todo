'use strict';

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