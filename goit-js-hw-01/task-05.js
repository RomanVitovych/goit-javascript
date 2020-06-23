const country = prompt('Please enter your country');
const destination = country.toLowerCase();
let price;
let message;

switch (destination) {
    case 'китай':
        price = 100
        message = `Доставка в ${destination} буде коштувати ${price} кредитів`;
        break;

    case 'чілі':
        price = 250 
        message = `Доставка в ${destination} буде коштувати ${price} кредитів`;
        break;

    case 'австралія':
        price = 170 
        message = `Доставка в ${destination} буде коштувати ${price} кредитів`;
        break;

    case 'індія':
        price = 80 
        message = `Доставка в ${destination} буде коштувати ${price} кредитів`;
        break;
        
    case 'ямайка':
        price = 120 
        message = `Доставка в ${destination} буде коштувати ${price} кредитів`;
        break;

    default:
        message = 'У вашій країні доставка недоступна';   

}


console.log(message);
 