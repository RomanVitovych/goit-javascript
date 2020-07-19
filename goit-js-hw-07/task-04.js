let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
// console.log(decrementBtn);
const incrementBtn = document.querySelector('button[data-action="increment"]');
// console.log(incrementBtn);

const valueSpan = document.querySelector('#value');
// console.log(valueSpan);

decrementBtn.addEventListener('click', () => {
    if (counterValue > 0) {
    counterValue -=1;
    valueSpan.textContent = counterValue;
    }
});

incrementBtn.addEventListener('click', () => {
    counterValue +=1;
    valueSpan.textContent = counterValue;
});
