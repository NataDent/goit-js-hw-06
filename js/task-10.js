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
  const arr = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${30+10*i}px`
    div.style.height = `${30+10*i}px`
    div.style.backgroundColor = getRandomHexColor()
    arr.push(div);
  } 
  boxEl.append(...arr)
}

function onBtnDestroyClick(e) {
  
  destoyBoxes();
  inputEl.value = '';
  console.log(e)
}
function destoyBoxes() { 
  boxEl.innerHTML = '';
}

 
  
  
