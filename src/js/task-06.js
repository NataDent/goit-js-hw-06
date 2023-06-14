const inputEl = document.querySelector('#validation-input')
console.log(inputEl);
const dataLengthEl = inputEl.getAttribute('data-length')
console.log(dataLengthEl);
const checkInputLength = () => {
    if (Number(dataLengthEl) === Number(inputEl.value.length) & !inputEl.classList.contains('invalid'))
    { inputEl.classList.add('valid') }
    else if (Number(dataLengthEl) === Number(inputEl.value.length) & inputEl.classList.contains('invalid')) {
        inputEl.classList.replace('invalid','valid')
    }
    else {
    inputEl.classList.add('invalid')
    }
}