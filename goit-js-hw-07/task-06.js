const mainInput = document.querySelector('#validation-input');
console.dir(mainInput);
const inputLength = +mainInput.getAttribute('data-length');
// const inputLength = Number(mainInput.getAttribute('data-length'));
mainInput.addEventListener('blur', () => {
    // console.log(mainInput);
    // console.log(mainInput.value);
    // console.log(mainInput.value.length);
    mainInput.classList.add('invalid');
    if (mainInput.value.length === inputLength) {
        mainInput.classList.remove('invalid');
        mainInput.classList.add('valid');
    } 
});