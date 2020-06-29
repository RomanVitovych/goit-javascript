const ADMIN_PASSWORD = 'jqueryismyjam';

let message;

const password = prompt('please enter password');

if (password === null) {
    message = 'Скасовано користувачем!';    
} else if (ADMIN_PASSWORD === password) {
    message = 'Ласкаво просимо!';
} else {
    message = 'Доступ заборонений, невірний пароль!';
}

console.log(message)









