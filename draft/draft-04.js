// ========== TASK-01 ==========

// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']





// ========== TASK-02 ==========

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction('Medkit', inventory.add.bind(inventory));
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']



















// === функції зворотнього виклику ===


// const printMessage = function (message) {
//     console.log(message);
// };
// const higherOrderFunction = function (callback) {
//     const string = 'HOCs are awasome';
//     console.log(string);
// };
// higherOrderFunction(printMessage);


// const repeatLog = function (n) {
//     for (let i = 0; i < n; i += 1) {
//         console.log(i);
//     };
// };
// repeatLog(5);



// === передача callback функцій ===

// const printValue = function (value) {
//     console.log(value);
// };
// const prettyPrint = function (value) {
//     console.log('Logging value: ', value);
// };
// const repeat = function (n, action) {
//     for (let i = 0; i < n; i += 1) {
//         action(i);
//     };
// };
// repeat(5, printValue);
// repeat(3, prettyPrint);



// === передача анонімної callback функцій ===

// const repeat = function (n, action) {
//     for (let i = 0; i < n; i += 1) {
//         action(i);
//     };
// };
// const label = [];
// repeat(5, value => {
//     label.push(`Label: ${value + 1}`);
// });
// console.log(label);



// ==== фільтрація масиву ===

// const filter = function (array, test) {
//     const filteredElements = [];
//     for (const arr of array) {
//         const passed = test(arr);
//         if (passed) {
//             filteredElements.push(arr);
//         };
//     };
//     return filteredElements;
// };
// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];
// // const freshFruits = filter(fruits, fruit => fruit.isFresh);
// // console.log(freshFruits);
// const freshFruits = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(freshFruits);



// === замикання ===

// const createCounter = function () {
//     let privateValue = 0;
//     const increment = function () {
//         privateValue += 1;
//         console.log(privateValue);
//     };
//     const decrement = function () {
//         privateValue -= 2;
//         console.log(privateValue);
//     }
//     return { increment, decrement, };
// };
// const counterA = createCounter();
// counterA.increment();
// counterA.increment();
// counterA.increment();
// const counterB = createCounter();
// counterB.increment();
// counterB.increment();
// const counterC = createCounter();
// counterC.decrement();
// counterC.decrement();
// counterC.decrement();
// console.dir(counterA.increment);
// console.dir(counterB.increment);
// console.dir(counterC.decrement);


// const makeShef = function (name) {
//     return function makeDish(dish) {
//         console.log(`${name} is cooking: ${dish}`);
//     };
// };
// const mango = makeShef('Mango');
// mango('apple pie');
// mango('fish');
// mango('beef stew');
// const poly = makeShef('Poly')
// poly('maffins');
// poly('pork chps');
// poly('roast beef');
// console.dir(mango);


// const fnA = function (a) {
//     return function fnB (b) {
//         return function fnC (c) {
//             console.log(a + b + c);
//         };
//     };
// };
// const res = fnA(5)(10);
// res(15);
// console.dir(res);



// === this ===

// const showThis = function () {
//     console.log('This in showThis:', this);
// };
// showThis();
// const user = { name: 'Mango', };
// user.showContext = showThis;
// user.showContext();



// === this у функціх зворотнього виклику(undefined) ===

// const hotel = {
//     name: 'Mango',
//     showThis() {
//         console.log('This in showThis;', this);
//     },
// };
// const fn = function (callback) {
//     callback()
// };
// fn(hotel.showThis);



// === this у стрілкових функціях(undefined і другий варіант) ===

// const showThis = () => {
//     console.log('This in showThis:', this);
// };
// showThis();
// const user = { name: 'Mango' };
// user.showContext = showThis;
// user.showContext();


// const hotel = {
//     name: 'Hotel Resort',
//     showThis() {
//         const fn = () => {
//             console.log('This in fn:', this);
//         };
//         fn();
//         console.log('This in showThis:', this);
//     },
// };
// hotel.showThis();



// === методи функцій call, apply, bind ===

// const showTag = function (arg1, arg2, arg3) {
//     console.log(arg1, arg2, arg3);
//     console.log('this:', this);
//     console.log('this.tag:', this.tag);
// };
// const mango = {
//     tag: 'Mango',
// };
// const poly = {
//     tag: 'Poly',
// };
// showTag.call(mango, 1, 2, 3);
// showTag.call(poly, 5, 10, 15);

// showTag.apply(mango, [1, 2, 3]);
// showTag.apply(poly, [5, 10, 15]);

// const showMangoTag = showTag.bind(mango);
// const showPolyTag = showTag.bind(poly);
// showMangoTag();
// showMangoTag(1, 2, 3);

// = apply =

// const greet = function (guest, stars) {
//     console.log(`${guest} welcom to ${stars} - stars ${this.name}`);
// };
// const hotel = { name: 'Resort Hotel', };
// const motel = { name: 'Sunlight Motel' };
// greet.call(hotel, 'Mango', 5);
// greet.call(motel, 'Poly', 3);

// = bind =

// const hotel = {
//     name: 'Resort Hotel',
//     showThis() {
//         console.log('This in hotel:', this);
//     },
// };
// const fn = function (callback) {
//     callback();
// };
// fn(hotel.showThis.bind(hotel));



// =====================================================================

// const handlerFetchSuccess = function (data) {
//     console.log(data);
// };
// console.log('перед fetch');
// fetch('https://swapi.dev/api/people/1/')
//     .then(res => res.json())
//     .then(handlerFetchSuccess);
// console.log('після fetch');  




