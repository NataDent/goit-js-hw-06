const inputEl = document.querySelector('#validation-input');
console.dir(inputEl);
const dataLength = inputEl.getAttribute('data-length');
const inputValueLength = inputEl.value.length;
const checkInputValueLength = () => {
    if (Number(dataLength) === Number(inputValueLength && !inputEl.classList.contains('.invalid'))) {
        inputEl.classList.replace('invalid', 'valid');
        
    }
    else
    
    {inputEl.classList.add('invalid')}
}

inputEl.addEventListener('blur', checkInputValueLength);

console.dir(dataLength);
console.log(inputEl.dataset.length);
console.log(inputEl.dataset);
