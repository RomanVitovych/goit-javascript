import * as allUsers from './users.js';
let users = allUsers.default;


const getUserWithEmail = (users, email) => {
    // твій код
    return users.find(user => user.email === email);
  };
  
  console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
  console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}