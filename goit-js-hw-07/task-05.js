const mainInput = document.querySelector('#name-input');
const nameInSpan = document.querySelector('#name-output');

mainInput.addEventListener('input', () => {
    // if (mainInput.value === '') {
    //     nameInSpan.textContent = 'Незнайомець';
    // } else {
    //     nameInSpan.textContent = mainInput.value;
    // }
    mainInput.value === ''? nameInSpan.textContent = 'Незнайомець' : nameInSpan.textContent = mainInput.value;
});




