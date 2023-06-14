const inputEl = document.querySelector('#name-input');

const userName = document.querySelector('#name-output');

inputEl.addEventListener('input', (evt) => userName.textContent = evt.currentTarget.value);


