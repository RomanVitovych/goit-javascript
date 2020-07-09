import * as allUsers from './users.js';
let users = allUsers.default;


const getInactiveUsers = users => {
    // твій код
    return users.filter(user => !user.isActive);
  };
  
  console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]