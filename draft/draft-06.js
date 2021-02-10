import * as allUsers from './users-06.js';
let users = allUsers.default;

// ========== TASK-01 ==========

// const getUserNames = users => {
//   // твій код
//   return users.map(user => user.name)  
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]





// ========== TASK-02 ==========

// const getUsersWithEyeColor = (users, color) => {
//   // твій код
//     return users.filter(user => user.eyeColor === color)
// };

// console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]





// ========== TASK-03 ==========

// const getUsersWithGender = (users, gender) => {
//   // твій код
//     return users
//         .filter(user => user.gender === gender)
//         .map(one => one.name);
// };

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]





// ========== TASK-04 ==========

// const getInactiveUsers = users => {
//   // твій код
//     return users.filter(user => !user.isActive)
// };

// console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]





// ========== TASK-05 ==========

// const getUserWithEmail = (users, email) => {
//   // твій код
//     return users.find(user => user.email === email)
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}





// ========== TASK-06 ==========

// const getUsersWithAge = (users, min, max) => {
//   // твій код
//     return users.filter(user => user.age >= min & user.age <= max)
// };

// console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]





// ========== TASK-07 ==========

// const calculateTotalBalance = users => {
//   // твій код
//     return users.reduce((totalBalance, userBalance) => totalBalance + userBalance.balance, 0)
// };

// console.log(calculateTotalBalance(users)); // 20916





// ========== TASK-08 ==========

// const getUsersWithFriend = (users, friendName) => {
//   // твій код
//     return users
//         .filter(user => user.friends
//         .some(friend => friend === friendName))
//         .map(one => one.name)
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]





// ========== TASK-09 ==========

// const getNamesSortedByFriendsCount = users => {
//   // твій код
//     return users
//         .sort((a, b) => a.friends.length - b.friends.length)
//         .map(user => user.name)
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]





// ========== TASK-10 ==========

// const getSortedUniqueSkills = users => {
//     // твій код
//     return users.reduce((allSkills, user) => {
//         allSkills.push(...user.skills)
//         return allSkills.sort();
//     }, [])
//     .filter((el, i, arr) => arr.indexOf(el) === i);
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]





















// ===== імперативний і декларативний код =====

// = імперативний =

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const filteredNumbers = [];
// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] > 3) {
//         filteredNumbers.push(numbers[i]);
//     };
// };
// console.log(filteredNumbers);

// = декларативний =

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const filteredNumbers = numbers.filter(value => {
//     return value > 3;
// });
// console.log(filteredNumbers);



// === функція з побічними ефектами ===

// const dirtyMultiply = (array, value) => {
//     for (let i = 0; i < array.length; i += 1) {
//         array[i] = array[i] * value;
//     };
// };
// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// console.log(numbers);


// === чиста фунція ===

// const pureMultiply = (array, value) => {
//     const result = [];
//     for (let i = 0; i < array.length; i += 1) {
//         result.push(array[i] * value);
//     };
//     return result;
// };
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const doubleNumbers = pureMultiply(numbers, 2);
// console.log(numbers);
// console.log(doubleNumbers);



// ===== ПЕРЕБИРАЮЧІ МЕТОДИ МАСИВУ =====


// === forEach() ===

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => console.log(num));
// numbers.forEach((num, ind, numbers) => console.log(`index: ${ind}, number: ${num} --- ${numbers}`));


// === map() ===

// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = numbers.map(num => num * 2);
// console.log(numbers);
// console.log(doubleNumbers);


// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];
// const names = users.map(user => user.name);
// console.log(names);


// === filter() ===

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.filter(num => num > 5));
// console.log(numbers.filter(num => num < 5));
// console.log(numbers.filter(num => num === 5));


// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
//   { name: 'Chelsey', isActive: false },
// ];
// const activeUsers = users.filter(user => user.isActive);
// const inactiveUsers = users.filter(user => !user.isActive);
// console.log(activeUsers);
// console.log(inactiveUsers);


// === find() ===

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.find(num => num > 5));
// console.log(numbers.find(num => num < 5));
// console.log(numbers.find(num => num === 5));


// const users = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];
// const userId = users.find(user => user.id === '002');
// console.log(userId);
// const getUserById = (arr, id) => arr.find(x => x.id === id);
// console.log(getUserById(users, '001'));
// console.log(getUserById(users, '003'));


// === every() & some() ===

// const isBigEnough = val => val >= 10;
// console.log([12, 45, 78, 89, 56, 23].every(isBigEnough));
// console.log([12, 45, 78, 9, 56, 23].every(isBigEnough));
// console.log([1, 4, 7, 9, 5, 3].some(isBigEnough));
// console.log([12, 5, 8, 9, 6, 2].some(isBigEnough));

// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 0 },
//   { name: 'grapes', amount: 50 },
// ];
// console.log(fruits.every(fruit => fruit.amount > 0));
// console.log(fruits.some(fruit => fruit.amount > 0));


// === reduce() ===

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sum = numbers.reduce((acc, value) => acc + value, 0);
// console.log(sum);

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(likes);
// const countLikes = tweets => tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(countLikes(tweets));

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];
// // const tags = tweets.reduce((allTags, tweet) => {
// //     allTags.push(...tweet.tags);
// //     return allTags;
// // }, []);
// // console.log(tags);
// const getTegs = tweets => tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
// }, []);
// const tags = getTegs(tweets);
// console.log(tags);
// const getTegStats = (acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {
//         acc[tag] = 0;
//     };
//     acc[tag] += 1;
//     return acc;
// };
// const countTags = tags => tags.reduce(getTegStats, {});
// const tagCount = countTags(tags);
// console.log(tagCount);


// === sort() & reverse() ===

// const numbers = [2, 1, 4, 3, 5];
// console.log('Before sort:', numbers);
// console.log('After sort:', numbers.sort());
// console.log('Reverse sort:', numbers.sort((a, b) => b - a));

// const clients = ['Mango', 'Ajax', 'Poly', 'Chelsey'];
// console.log('Before sort:', clients);
// console.log('After sort:', clients.sort());

// console.log('Reverse sort:', clients.reverse());

// const users = [
//   { name: 'Mango', daysActive: 15 },
//   { name: 'Poly', daysActive: 4 },
//   { name: 'Ajax', daysActive: 27 },
//   { name: 'Chelsey', daysActive: 2 },
// ];
// console.log(users.sort((a, b) => a.daysActive - b.daysActive));


// === ланцюжки методів масиву ===

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const even = numbers.filter(x => x % 2 !== 0);
// console.log(even);
// const double = even.map(x => x * 2);
// console.log(double);
// const reversed = double.reverse();
// console.log(reversed);

// = короткий запис =

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNumbers = numbers
//     .filter(x => x % 2 === 0)
//     .map(x => x * 2)
//     .reverse();
// console.log(newNumbers);    

// ===================================================================================

// const numbers = [12, 45, 78, 89, 56, 23];
// numbers.forEach(function (element, index, array) {
//     console.log(element);
//     console.log(index);
//     console.log(array);
// });


// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// =================================

// const playersNames = players.map(player => player.name);
// console.log(playersNames);

// const updatedPlayers = players.map(player => player.points + (player.points * 0.1));
// console.log(updatedPlayers);

// const playerId = 'player-3';
// const updatedValue = players.map(player => {
//     if (player.id === playerId) {
//         player.timePlayed += 50;
//     };
//     return player
// });
// console.table(updatedValue);

// ==================================

// const isOnline = players.filter(player => !player.online);
// console.table(isOnline);

// const timesPlayer = players.filter(player => player.timePlayed > 200);
// console.table(timesPlayer);

// ===================================

// const playerId = 'player-4';
// const findPlayer = players.find(player => player.id === playerId);
// console.log(findPlayer);

// ===================================

// const playerOnline = players.every(player => player.online);
// console.log(playerOnline);

// const averagedInPlatTime = players.every(player => player.timePlayed > 50);
// console.log(averagedInPlatTime);

// ===================================

// const playerIsOnline = players.some(player => player.online);
// console.log(playerIsOnline);

// const playTime = players.some(player => player.timePlayed < 50);
// console.log(playTime);

// === ПИШЕМО САМОСТІЙНО МЕТОД map() ===

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const map = function (array, callback) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i += 1){
//         const result = callback(array[i], i, array);
//         newArray.push(result);
//     };
//     return newArray
// };
// const doubleNumbers = map(numbers, function (number, index, array) {
//     console.log(number);
//     console.log(index);
//     console.log(array);
//     return number
// });
// console.log(doubleNumbers);

// === ПИШЕМО САМОСТІЙНО МЕТОД filter() ===

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filter = function (array, callback) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i += 1){
//         const passed = callback(array[i], i, array);
//         if (passed) {
//             newArray.push(array[i])
//         };
//     };
//     return newArray;
// };
// const filteredNumbers = filter(numbers, function (number, index, array) {
//     console.log(number);
//     console.log(index);
//     console.log(array);
//     return number > 5;
// });
// console.log(filteredNumbers);

// ==================================================

// === ланцжки методів для jquery ===

// const element = {
//     class: '',
//     hovered: false,
//     changeClass(cls) {
//         this.class = cls;
//         return this;
//     },
//     toggleHovered() {
//         this.hovered = !this.hovered;
//         return this;
//     },
// };
// element.toggleHovered().changeClass('open');
// console.log(element);

