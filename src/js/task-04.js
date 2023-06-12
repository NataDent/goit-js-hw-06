const counterValue = {
  value: 0,
  increment() { this.value += 1; },
  decrement() { this.value -= 1; },
};

const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
const valuEl = document.querySelector('#value');

decBtn.addEventListener('click', function () {
  counterValue.decrement();
  valuEl.textContent = counterValue.value; 
});
incBtn.addEventListener('click', function () {
  counterValue.increment();
  valuEl.textContent = counterValue.value;
});

