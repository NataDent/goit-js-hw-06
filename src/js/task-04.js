for (let i = 0; i < 5; i++) {
  console.log('Hello world!');
}
for (let i = 0; i < 5; i++) {
  console.log('Hello world!');
}

const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
let counterValue = document.querySelector('#value');
counterValue = 0;
const addCount = () => counterValue += 1;
const removeCount = () => counterValue -= 1;
decBtn.addEventListener('click', removeCount);
incBtn.addEventListener('click', addCount);
console.log(decBtn);
console.log(removeCount);
incBtn.addEventListener("click", () => {
