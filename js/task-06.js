const inputEl = document.querySelector('#validation-input');

const checkInputLength = () => {
    const inputValueLength = Number(inputEl.value.length);
    const dataLength = Number(inputEl.getAttribute('data-length'));
    if (dataLength === inputValueLength && !inputEl.classList.contains('invalid'))
    { inputEl.classList.add('valid') }
    else if (dataLength === inputValueLength && inputEl.classList.contains('invalid')) {
        inputEl.classList.replace('invalid', 'valid')
    }
    else {
    inputEl.classList.add('invalid')
    }
    console.log(inputValueLength)
}

inputEl.addEventListener('blur', checkInputLength);


console.dir(inputEl)