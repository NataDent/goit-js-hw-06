const inputEl = document.querySelector('#name-input');

const userName = document.querySelector('#name-output');

inputEl.addEventListener('input', (evt) => {
    if (!evt.currentTarget.value) {
        userName.textContent = 'Anonimus'
    } else
       { userName.textContent = evt.currentTarget.value};
});


