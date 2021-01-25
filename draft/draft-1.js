// ========== TASK-01 ==========

// let name = 'Генератор захисного поля,';
// let price = 2000;
// console.log('Обрано', name, 'ціна за штуку', price, 'кредитів');



// ========== TASK-02 ==========

// const total = 100;
// const ordered = 130;
// if(ordered > total) {
//     console.log("На складі недостатньо товарів!");
// }else {
//     console.log("Замовлення оформлено, з вами зв'яжеться менеджер");
// };



// ========== TASK-03 ==========

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// const exit = prompt('Please enter paswword');
// if(exit === null) {
//     message = 'Скасовано користувачем!';
// }else if(exit === ADMIN_PASSWORD) {
//     message = 'Ласкаво просимо!';
// }else if(exit !== ADMIN_PASSWORD) {
//     message = 'Доступ заборонений, невірний пароль!';
// }
// alert(message);



// ========== TASK-04 ==========

// const credits = 23580;
// const pricePerDroid = 3000;
// const numberOfDroids = prompt('How many droids do you wish?');
// const totalPrice = numberOfDroids * pricePerDroid;
// let message;
// if(numberOfDroids === null) {
//     message = 'Скасовано користувачем!';
// }else if(totalPrice > credits) {
//     message = 'Недостатньо коштів на рахунку!'
// }else if(totalPrice <= credits) {
//     message = `Ви купили ${numberOfDroids} дроїдів, на рахунку залишилося ${credits - totalPrice} кредитів.`
// }
// alert(message);



// ========== TASK-05 ==========

// const deliveryCountry = prompt('Please enter your country');
// const country = deliveryCountry.toUpperCase();
// let price;
// switch(country) {

//     case 'КИТАЙ':
//     price = 100;
//     break;

//     case 'ЧІЛІ':
//     price = 250;
//     break;

//     case 'АВСТРАЛІЯ':
//     price = 170;
//     break;

//     case 'ІНДІЯ':
//     price = 80;
//     break;

//     case 'ЯМАЙКА':
//     price = 120;
//     break;

//     default:
//     alert('У вашій країні доставка недоступна');
// };
// console.log(`Доставка в ${country} буде коштувати ${price} кредитів`);



// ========== TASK-06 ==========

// let input;
// let total = 0;
// let message;

// while(input !== null) {
//     input = prompt('Please enter number');
//     let number = Number(input);
//     if (input === null) {
//         message = 'Відмінено користувачем';
//         break;
//     }else if(Number.isNaN(number)) {
//         message = 'Було написано не число, спробуйте ще раз';
//         continue;
//     }else {
//         total += number;
//     };
// };
// console.log(`Загальна сума чисел дорівнює ${total}`);
// alert(message)











