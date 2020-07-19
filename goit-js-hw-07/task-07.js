const mainInput = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');
textSpan.style.fontSize = '16px';
console.dir(textSpan);


mainInput.addEventListener('input', () => {
    textSpan.style.fontSize = mainInput.value + 'px';
    console.log(mainInput.value);
});