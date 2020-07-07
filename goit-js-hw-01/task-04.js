const credits = 23500;
const pricePerDroid = 3000;
const amountDroids = prompt('How many droids do you want to buy?');
let message;
const totalPrice = pricePerDroid * amountDroids;
const value = credits - totalPrice


if (amountDroids === null) {
    message = 'Скасовано користувачем!'; 
} else if (totalPrice > credits) {
    message = 'Недостатньо коштів на рахунку!';
} else  {
    message = `Ви купили ${amountDroids} дроїдів, на рахунку залишилося ${value} кредитів.`;
}

console.log(message);