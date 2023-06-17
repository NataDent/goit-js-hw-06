
const selectors = {
  spanEl: document.querySelector('.color'),
  buttonEl: document.querySelector('.change-color'),
  bodyEl: document.querySelector('body'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClick() {
  selectors.bodyEl.style.backgroundColor = ''
  selectors.spanEl.textContent = getRandomHexColor
}
console.log(getRandomHexColor)
// buttonEl.addEventListener('click', onClick);
