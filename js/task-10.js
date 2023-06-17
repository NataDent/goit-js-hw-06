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
btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', boxEl.innerHTML(''));
function createBoxes(amount) {
  const size = 30;
 const markup = `<div width=${size}px heigt =${size}px></div>`
  for (let index = 1; index <= amount; index += 1) {
    boxEl.insertAdjacentHTML('beforeend', markup)
  }
  console.log(markup)
}
