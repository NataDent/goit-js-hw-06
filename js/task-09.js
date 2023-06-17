
const selectors = {
  spanEl: document.querySelector('.color'),
  buttonEl: document.querySelector('.change-color'),
  bodyEl: document.body,
};
selectors.buttonEl.addEventListener('click', onClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClick() {
  selectors.bodyEl.style.backgroundColor = getRandomHexColor();
  selectors.spanEl.textContent = `${getRandomHexColor()}`;
}
console.log(getRandomHexColor)

