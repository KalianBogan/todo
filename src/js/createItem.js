function createItem(data) {
  let item = document.createElement('tr');
  
  for (let key in data) {
    item.appendChild( createTd(data[key]) );
  }
  item.appendChild( createRemoveBtn() );
  return item;
}

function createTd(data) {
  let td = document.createElement('td');
  td.innerHTML = data;
  return td;
}

function createRemoveBtn() {
  let td = document.createElement('td');
  td.classList.add('remove-btn-wrap');
  return td;
}

