import * as allUsers from './users.js';
let users = allUsers.default;


const getUsersWithGender = (users, gender) => {
    // твій код
    return users.filter(user => user.gender === gender).map(user => user.name);
  };
  
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]