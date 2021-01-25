// ========== TASK-01 ==========

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// user.mood = 'happy';
// user['hobby'] = 'skydiving';
// user.premium = false;
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

const findBestEmployee = function (employees) {
  // твій код
    const array = Object.values(employees); 
    console.log(array);
    const bestEmployee = Math.max(...array);
    return bestEmployee;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux





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
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []
















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
// for (const key of keys) {
//     console.log('Value:', hotel[key]);
// };
// for (const entry of entries) {
//     const key = entry[0];
//     const value = entry[1];
//     console.log(`${key}: ${value}`);
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

// const temperatures = [12, 45, 6, 3, 8, 14, 19, 5, 13];
// console.log(Math.min(...temperatures));

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const copyOfHouses = [...houses, 'Targaryen'];
// console.log(houses);
// console.log(copyOfHouses);
// console.log(houses === copyOfHouses);
// const sliceOfHouses = houses.slice(2, 4);
// console.log(sliceOfHouses);
// const newArray = [...houses, 'Alarm!!!', ...temperatures];
// console.log(newArray);

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };
// const c = Object.assign({}, a, b);
// console.log(c);
// const d = { ...a, ...b };
// console.log(d);

// const add = function (value, ...args) {
//     console.log(value);
//     console.log(args);
// };
// add(15, 1, 2, 3);
// add(20, 1, 2, 3, 4, 5);

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

// const rgb = [255, 255, 100];
// const [red, green, blue] = rgb;
// console.log(`${red}-red ${green}-green ${blue}-blue`);