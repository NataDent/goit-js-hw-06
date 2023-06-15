const inputEl = document.querySelector('#font-size-control');
console.dir(inputEl);
const textEl = document.querySelector('#text');
console.dir(textEl);

const onInputHandler = (evt) => { 
    
    textEl.style.fontSize = `${evt.currentTarget.value}px`;
   
    console.log(textEl.style.fontSize)
    console.dir(evt.currentTarget.value)
}

inputEl.addEventListener('input', onInputHandler);
