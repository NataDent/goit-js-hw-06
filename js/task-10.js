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
btnCreate.addEventListener('click', onBtnCreateClick)
btnDestroy.addEventListener('click', onBtnDestroyClick);

function onBtnCreateClick(evt) {
  const amount = inputEl.value;
  
   createBoxes(amount);
    console.log(evt);
  }

function createBoxes(amount) {
  const size = 30;
  const arr = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement(div);
    div.style.width = `${size}px`
    div.style.height = `${size}px`
    div.style.backgroundColor = getRandomHexColor()
    arr.push(div);
    size += 10;
  } 
  boxEl.append(...arr)
}

function onBtnDestroyClick(e) {
  destoyBoxes();
  console.log(e)
}
function destoyBoxes() {
  boxEl.innerHTML('');
}
  
  
