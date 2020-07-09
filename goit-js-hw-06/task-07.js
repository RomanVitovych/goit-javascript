import * as allUsers from './users.js';
let users = allUsers.default;

const calculateTotalBalance = users => {
    // твій код
    return users.reduce((amount, user) => amount + user.balance, 0);
  };
  
  console.log(calculateTotalBalance(users)); // 20916