// ========== TASK-01 ==========

// const logItems = function (array) {
//     // твій код
//     for(let i = 0; i < array.length; i += 1) {
//         console.log(`${i + 1} - ${array[i]}`);
//     }
//   };
  
//   /*
//    * Виклич функції для перевірки працездатності твоєї реалізації.
//    */
//   logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  
//   logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);





//   ========== TASK-02 ==========

// const calculateEngravingPrice = function (message, pricePerWord) {
//     // твій код
//     const array = message.split(' ');
//     const price = array.length * pricePerWord;
//     return price;
//   };
  
//   /*
//    * Виклич функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       10,
//     ),
//   ); // 80
  
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       20,
//     ),
//   ); // 160
  
//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
//   ); // 240
  
//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
//   ); // 120





// ========== TASK-03 ==========

// const findLongestWord = function (string) {
//     // твій код
//     const array = string.split(' ');
//     // console.log(array);
//     let longestWord = array[0];
//     // console.log(longestWord.length);
//     for (let i = 1; i < array.length; i += 1) {
//         // console.log(array[i].length);
//         if (array[i].length > longestWord.length) {
//             longestWord = array[i]
//         };
//     };
//     return longestWord;
// };
  
//   /*
//    * Виклич функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
//   console.log(findLongestWord('Google do a roll')); // 'Google'
  
// console.log(findLongestWord('May the force be with you')); // 'force'





// ========== TASK-04 ==========

// const formatString = function (string) {
//   // твій код
//     if (string.length <= 40) {
//         return string;
//     };
//     return `${string.slice(0, 40)} ...`;
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // повернеться оригінальний рядок

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // повернеться форматований рядок

// console.log(formatString('Curabitur ligula sapien.'));
// // повернеться оригінальний рядок

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// // повернеться форматований рядок





// ========== TASK-05 ==========

// const checkForSpam = function (message) {
//     // твій код
//     const newMessage = message.toLowerCase();
//     const check = newMessage.includes('sale') || newMessage.includes('spam')
//     if (check) { 
//         return check;
//     };
//     return check;
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true





// ========== TASK-06 ==========

// let input;
// const numbers = [];
// let total = 0;

// while (input !== null) {
//     input = prompt('Please, enter number!');
//     const value = Number(input);
//     if (Number.isNaN(value)) {
//         alert('Було введено не число, cпробуйте ще раз');
//         break;
//     } else if (input) {
//         numbers.push(value);
//         // console.log(numbers);
//     } else {
//         for (const numb of numbers) {
//             total += numb;
//         };
//     };
// };
// console.log(`Загальна сума чисел дорівнює ${total}`);



// ===== варіант з input!!! =====

// const valueInputRef = document.querySelector('.js-value');
// const addValueBtn = document.querySelector('.js-add-value');
// const calculateBtn = document.querySelector('.js-calculate');
// const array = [];
// let total = 0;

// addValueBtn.addEventListener('click', () => {
//     const value = Number(valueInputRef.value);
//     if (Number.isNaN(value)) {
//         alert('Було введено не число, cпробуйте ще раз');
//         valueInputRef.value = '';
//     } else {        
//         array.push(value);
//         valueInputRef.value = '';
//         console.log(array);
//     };
// });

// calculateBtn.addEventListener('click', () => {
//     for (const arr of array) {
//         total += arr;
//     };
//     console.log(`Загальна сума чисел дорівнює ${total}`);
// });





// ========== TASK-07 ==========

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//   // твій код
//     const logLength = login.length >= 4 && login.length <= 16;
//     if (login = logLength) {
//         return logLength;
//     };
//     return logLength;
// };

// const isLoginUnique = function (allLogins, login) {
//   // твій код
//     const newLogin = allLogins.includes(login);
//     return !newLogin
// };

// const addLogin = function (allLogins, login) {
//   // твій код
//     if (!isLoginValid(login)) {
//         return 'Помилка! Логін повинен бути від 4 до 16 символів';
//     } else if (isLoginUnique(allLogins, login)) {
//         return 'Логін успішно доданий!';
//     } else {
//         return 'Такий логін уже використовується!';
//     };
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
// console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'




















// const friends = ['Poly', 'Alex', 'Mango', 'Ajax', 'Dingo'];
// const numbers = [1, 2, 3, 4, 5];
// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item);
//     };
// };
// logItems(friends);
// logItems(numbers);



// const friends = ['Poly', 'Alex', 'Mango', 'Ajax', 'Dingo'];
// // const findName = 'Ajax';
// const find = function (allFriends, name) {
//     // console.log(allFriends);
//     // console.log(name);   
//     //     if (allFriends.includes(name)) {
//     //         return 'FIND!!!';
//     //     };        
//     // return 'NOT FIND(((';
//     const result = allFriends.includes(name) ? 'FIND!!!' : 'NOT FIND(((';
//     return result;
// };
// const r1 = find(friends, 'Ajax');
// console.log(r1);
// const r2 = find(friends, 'Baly');
// console.log(r2);



// const slugyString = function (string) {
//     const words = string.toLowerCase().split(' ');
//     const slug = words.join('___');
//     return slug;
// };
// const articles = [
//     'Lorem ipsum dolor sit',
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit',
//     'Lorem ipsum dolor sit amet consectetur',
//     'Lorem ipsum dolor sit amet',
//     'Lorem ipsum dolor sit amet consectetur adipisicing'
// ];
// const newArticles = [];
// for (const article of articles) {
//     const art = slugyString(article);
//     console.log(art);
//     newArticles.push(art);
// };
// console.log(newArticles);



// const friends = ['Poly', 'Alex', 'Mango', 'Ajax', 'Dingo', 'Baly', 'Flex'];
// console.log(friends);
// const removeFriend = function (allFriend, removeOneFriend) {
//     const index = allFriend.indexOf(removeOneFriend);
//     // console.log(index);
//     allFriend.splice(index, 1);
// };
// console.log(removeFriend(friends, 'Ajax'));
// console.log(friends);



// const fn = function (...args) {
//     console.log(args);
// };
// fn(1, 2, 3, 4, 5, 6, 7);



// const strings = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, assumenda.'
// // console.log(strings);
// // const upper = strings.toUpperCase();
// // console.log(upper);
// // const arrays = upper.split(' ');
// // console.log(arrays);
// // const slugs = arrays.join('___');
// // console.log(slugs);
// const words = strings.toUpperCase().split(' ')
// let slugs = '';
// console.log(slugs);



// for (let i = 0; i < words.length; i += 1) {
//     // if (i !== words.length - 1) {
//     //     slugs += words[i] + '___';
//     // } else {
//     //     slugs += words[i]
//     //     console.log(slugs);
//     // }
//     const isNotLastWord = i !== words.length - 1;
//     slugs += isNotLastWord ? words[i] + '___' : words[i];
// }
// console.log(slugs);



// const theString = 'Lorem ipsum dolor sit amet consectetur adipisicing elit';
// const arrayString = theString.split(' ');
// console.log(arrayString);
// const word = 'dolor';
// const index = arrayString.indexOf(word);
// console.log(index);
// const del = arrayString.splice(index, 5);
// console.log(arrayString);




  
   




  







  



