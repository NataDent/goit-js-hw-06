function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector('input');
console.dir(inputEl);
const btnCreate = document.querySelector('button[data-create]');
console.log(btnCreate);
const btnDestroy = document.querySelector('button[data-destroy]');
console.log(btnDestroy);
const boxEl = document.querySelector('#boxes');
console.log(boxEl);
btnCreate.addEventListener('click', onBtnCreateClick);
btnDestroy.addEventListener('click', onBtndestroyClick);

function onBtnCreateClick(evt) {
  evt.currentTarget.value = amount;
return boxEl.createBoxes(amount)
}

function createBoxes(amount) {
  const size = 30;
  const arr = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement(div);
    arr.push(el[i]);
    size += 10;
  } 
  boxEl.insertAdjacentHTML('beforeend', `<div width="${size}" height="${size}" background-color="${getRandomHexColor()}"></div>`)
}

function onBtnDestroyClick() {
  boxEl.destoyBoxes();
}
function destoyBoxes() {
  boxEl.innerHTML('');
}
  
  
