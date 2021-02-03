// ========== TASK-01 ==========

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// console.log(user);
// user.mood = 'happy';
// user['hobby'] = 'skydiving';
// user.premium = false;
// console.log(user);
// const newObject = Object.keys(user);
// console.log(newObject); 
// for (const one of newObject) {
//     console.log(`${one} -- ${user[one]}`);
// };
// console.log(user);





// ========== TASK-02 ==========

// const countProps = function (obj) {
//   // твій код
//     const object = Object.entries(obj);
//     return object.length;
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3





// ========== TASK-03 ==========

// const findBestEmployee = function (employees) {
//   // твій код
//   const values = Object.values(employees);
//   // console.log(values);
//   const keys = Object.keys(employees);
//   // console.log(keys);
//   let bestEmployeeValue = values[0];
//   let bestEmployeeName = keys[0];
//   for (let i = 0; i < values.length; i += 1){
//     // console.log(values[i]);
//     if (values[i] > bestEmployeeValue) {
//       bestEmployeeValue = values[i];
//       bestEmployeeName = keys[i];
//     };
//   };
//   return `${bestEmployeeName}: ${bestEmployeeValue}`;
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux





// ==========TASK-04 ==========

// const countTotalSalary = function (employees) {
//   // твій код
//     let total = 0;
//     const sum = Object.values(employees);
//     for (const one of sum) {
//         total += one;
//     };
//     return total;
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400





// ========== TASK-05 ==========

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроїд', price: 400, quantity: 7 },
//   { name: 'Захоплення', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   // твій код
//   const newArr = [];
//   for (const obj of arr) {
//     // console.log(obj);
//     const newObj = Object.keys(obj);
//     // console.log(newObj);
//     for (const key of newObj) {
//       // console.log(key);
//       if (key === prop) {        
//         newArr.push(obj[prop]);
//       };
//     };
//   };
//   return newArr;
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []





// ========== TASK-06 ==========

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроїд', price: 400, quantity: 7 },
//   { name: 'Захоплення', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   // твій код
//   let totalPrice = 0;
//   // for (const product of allProdcuts) {
//   //   // console.log(product);
//   //   const newProduct = Object.values(product);
//   //   // console.log(newProduct);
//   //   for (const key of newProduct) {
//   //     // console.log(key);
//   //     if (key === productName) {
//   //       totalPrice = newProduct[1] * newProduct[2];
//   //       return totalPrice;
//   //     };
//   //   };
//   // }
//   // ===== альтернативний варіант =====
//   for (const product of allProdcuts) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     };
//   };
//   return totalPrice;
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроїд')); // 2800





// ========== TASK-07 ==========

/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Кожна транзакція - це об'єкт з властивостями: id, type і amount
//  */

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   getTransactions() {
//     return this.transactions;
//   },

//   /*
//    * Метод створює і повертає об'єкт транзакції.
//    * Приймає суму і тип транзакції.
//    */
//   createTransaction(amount, type) {
//     const newTransactoin = {
//       id: this.transactions.length + 1,
//       amount,
//       type,
//     };
//     return newTransactoin;
//   },

//   /*
//    * Метод відповідає за додавання суми до балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій
//    */
//   deposit(amount) {
//     this.transactions.push(this.createTransaction(amount, 'deposit'));
//     this.balance += amount;
//     return ;
//   },

//   /*
//    * Метод відповідає за зняття суми з балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій.
//    *
//    * Якщо amount більше, ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливо, недостатньо коштів.
//    */
//   withdraw(amount) {
//     this.transactions.push(this.createTransaction(amount, 'withdraw'));
//     if (amount > this.balance) {
//       return alert('Withdraw of such an amount is imposible, not enough money');
//     } else {
//       this.balance -= amount
//     };
//     return ;
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance
//   },

//   /*
//    * Метод шукає і повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       };
//     };
//     return alert('id not find!!!')
//   },
  
//   /*
//   * Метод повертає кількість коштів
//   * певного типу транзакції з усієї історії транзакцій
//   */
//   getTransactionTotal(type) {
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       };
//     };
//     return total;
//   },
// };
// // console.table(account.getTransactions());
// // console.log(account.createTransaction(1500, 'deposit'));
// // console.log(account.createTransaction(3000, 'deposit'));
// // console.table(account.getTransactions());
// account.deposit(10000);
// account.deposit(5000);
// account.deposit(8000);
// // console.table(account.getTransactions());
// account.withdraw(3000);
// account.withdraw(5000);
// console.table(account.getTransactions());
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(2));
// console.log(account.getTransactionTotal("deposit"));

















// ===== основні методи(Object) + перебір циклом for...in(тільки для об'єкта) та for...of =====

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };
// const keys = Object.keys(hotel);
// console.log(keys);
// const values = Object.values(hotel);
// console.log(values);
// const entries = Object.entries(hotel);
// console.log(entries);

// for (const key in hotel) {
//       console.log('Value:', hotel[key]);
// };
  
// for (const entry of entries) {
//       const key = entry[0];
//       const value = entry[1];
//       console.log(`${key}: ${value}`);
// };
    
// const goods = {
//     apples: 6,
//     grapes: 3,
//     bread: 4,
//     cheese: 7
// };
// const values = Object.values(goods);
// console.log(values);
// let total = 0;
// for (const value of values) {
//     total += value;
// };
// console.log(total);



// ===== обчислювальні властивості =====
    
// const key = 'person';
// const getKey = function () {
//   return 'age'
// }
// const object = {
//   [key]: 'Mango',
//   [getKey()]: 2
// }
// console.log(object);



// ===== операція spread(розпилення аргументів, масивів та об'єктів) =====

// const temperatures = [12, 45, 6, 3, 8, 14, 19, 5, 13];
// console.log(Math.min(...temperatures));

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const copyOfHouses = [...houses, 'Targaryen'];
// console.log(houses);
// console.log(copyOfHouses);
// console.log(houses === copyOfHouses);
// const sliceOfHouses = houses.slice(2, 4);
// console.log(sliceOfHouses);
// const firstBatch = ['Arryn', 'Frey', 'Greyjoy'];
// const secondBatch = ['Stark', 'Lannister', 'Tyrell'];
// const together = [...firstBatch, ...secondBatch]
// console.log(together);
// const families = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const familiesInDebt = [...families.slice(0, 4), ...families.slice(5)];
// console.log(familiesInDebt);
// const newArray = [...houses, 'Alarm!!!', ...temperatures];
// console.log(newArray);

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };
// const c = Object.assign({}, a, b);
// console.log(c);
// const d = { ...a, ...b };
// console.log(d);
// const e = { x: 5, j: 10, ...a, z: 15, ...b };
// console.log(e);



// ===== операція rest =====

// const add = function (value, value2, ...args) {
//   console.log(value);
//   console.log(value2);
//   console.log(args);
// };
// add(15, 1, 2, 3);
// add(20, 1, 2, 3, 4, 5);



// ===== деструктуризація об'єктів =====

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };
// const { name: hotelName, stars, capacity, status: hotelStatus = 'empty' } = hotel;
// console.log(hotelName, stars, capacity, hotelStatus);

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//     status: 'empty'
// };
// const { name, ...rest } = hotel;
// console.log(name);
// console.log(rest);



// ===== деструктуризація масивів =====

// const rgb = [200, 255, 100];

// const [red, green, blue, alfa = 0.3] = rgb;
// console.log(`${red}-red ${green}-green ${blue}-blue ${alfa}-alfa`);

// const [red, ...colors] = rgb;
// console.log(`Red: ${red} Colors: ${colors}`);



// === глибока деструктуризація ===

// const profile = {
//   name: 'Jasques Glike',
//   tag: 'jgluke',
//   // location: 'Ocho Rios, Jamaika',
//   location: undefined,
//   // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg',
//   avatar: undefined,
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// // =================================
// // const { name, tag, location, avatar, stats: { stats, followers, views, likes } } = profile;
// // // const { followers, views, likes } = stats;
// // console.log(name, tag, location, avatar, followers, views, likes);

// // const { name, tag, location, ...restProps } = profile;
// // console.log(name, tag, location);
// // console.log(restProps);
// // console.log(profile);
// // ================================
// const makeProfileMarkup = function ({
//   name,
//   tag,
//   location = 'Planet Earth',
//   avatar = 'https://i.pravatar.cc/200?img=6',
//   stats: { followers, views, likes } }) {
//   return `<div>
//       <img src="${avatar}" alt="user name">
//       <p>${name}<span>@${tag}</span></p>
//       <p>Location: ${location}</p>
//       <ul>
//          <li>Followers: ${followers}</li>
//          <li>Views: ${views}</li>
//          <li>Likes: ${likes}</li>
//       </ul>
//     </div>`;
// };
// const markup = makeProfileMarkup(profile);
// console.log(markup);
// document.body.insertAdjacentHTML('afterbegin', markup);



// ===== ключове слово this =====

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
//   showName() {
//     console.log(this.name);
//   },
//   changeCapacity(value) {
//     this.capacity = value
//   },
// };
// hotel.showName(); 
// hotel.changeCapacity(200);
// console.log(hotel.capacity);




// ===========================================================================================================

// const arr = ['a', 'b', 'c'];
// arr.hello = ':)';
// console.log(arr);



// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: true },
//   { name: 'Bingo', online: false },
// ];

// // console.table(friends);
// // console.log(friends[2]);
// // for (const friend of friends) {
// //   console.log(friend.name);
// //   if (friend.name === 'ajax') {
// //     console.log('Great!!!');
// //     break;
// //   };
// //   console.log('(((');
// // };

// const getAllNames = function (allFriends) {
//   const array = [];
//   for (const friend of allFriends) {
//     console.log(friend);
//     array.push(friend.name);
//   };
//   return array
// };
// console.log(getAllNames(friends));



// === кошик товарів ===

// const cart = {
//   items: [
//     { name: 'apple', price: 50, quantity: 1 },
//     { name: 'lemon', price: 60, quantity: 1 },
//     { name: 'chery', price: 90, quantity: 1 },
//   ],
//   getItems() {
//     return this.items
//   },
//   add(product) {
//     for (const item of this.items) {
//       // console.log(item);
//       if (item.name === product.name) {
//         console.log('Такий продукт вже є! Збільшуємо кількість');
//         item.quantity += 1;
//         return;
//       }
//     }
//     product.quantity = 1;
//     console.log('Продукт додаємо до кошика');
//     this.items.push(product);
//   },
//   remove(productName) {
//     // console.log(productName);
//     for (let i = 0; i < this.items.length; i += 1) {
//       // console.log(this.items[i].name);
//       const item = this.items[i];
//       if (productName === item.name) {
//         console.log('Find!!!');
//         console.log('index for remove', i);
//         this.items.splice(i, 1);
//       };
//     };
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let total = 0;
//     for (const item of this.items) {
//       // console.log(item);
//       total += item.price * item.quantity
//     }
//     return total;
//   },
//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       // console.log(item);
//       if (productName === item.name) {
//         item.quantity += 1;
//       };
//     };
//   },
//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       // console.log(item);
//       if (productName === item.name) {
//         if (item.quantity - 1 === 0) {
//           this.remove(productName)
//           return;
//         };
//         item.quantity -= 1;
//       };
//     };
//   },
// };

// console.table(cart.getItems());
// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'orange', price: 100 });
// cart.add({ name: 'chery', price: 90 });
// console.table(cart.getItems());
// // cart.remove('apple');
// // console.table(cart.getItems());
// // cart.clear()
// // console.table(cart.getItems());
// cart.increaseQuantity('lemon');
// console.table(cart.getItems());
// cart.decreaseQuantity('apple');
// // cart.decreaseQuantity('apple');
// // cart.decreaseQuantity('apple');
// console.table(cart.getItems());
// console.log('Total:', cart.countTotalPrice());

