import * as allUsers from './users.js';
let users = allUsers.default;


const getUserNames = users => {
    // твій код
        return users.map(user => user.name); 
  };
  
  console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]