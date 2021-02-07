// ========== TASK-01 ==========

// const Account = function ({ login, email }) {
//     this.login = login;
//     this.email = email;
// };

// Account.prototype.getInfo = function () {
//     console.log(`Login: ${this.login}, Email: ${this.email}`);
// };

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//     login: 'Mangozedog',
//     email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com





// ========== TASK-02 ==========

// class User {
//     constructor(object) {
//         this.name = object.name;
//         this.age = object.age;
//         this.followers = object.followers;
//     };    
//     getInfo = function () {
//         console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
//     };
// };


// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers





// ========== TASK-03 ==========

// class Storage {
//     constructor ([...items]) {
//         this.items = items
//     };
    
//     getItems = function () {
//         return this.items;
//     };
    
//     addItem = function (item) {
//         this.items.includes(item)
//         ? alert('This name is already available!!!')
//         : this.items.push(item);
//     };
    
//     removeItem = function (item) {
//         const res = this.items.indexOf(item);
//         for (let i = 0; i < this.items.length; i += 1) {
//             if (i === res) {
//                 this.items.splice(i, 1)
//             };
//         };
//     };
// }; 

// const storage = new Storage([
//   'Нанітоіди',
//   'Пролонгер',
//   'Залізні жупи',
//   'Антигравітатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

// storage.addItem('Дроїд');
// console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]





// ========== TASK-04 ==========

// class StringBuilder {
//     constructor(str) {
//         this._value = str;
//     };

//     get value() {
//         return this._value;
//     };

//     append(str) {
//         this._value = this._value + str;
//     };

//     prepend(str) {
//         this._value = str + this._value;
//     };

//     pad(str) {
//         this._value = str + this._value + str;
//     };
// };

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='





// ========== TASK-05 ==========

// class Car {
//   /*
//    * Додай статичний метод `getSpecs(car)`,
//    * який приймає об'єкт-машину як параметр і виводить
//    * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
//    */
//     static getSpecs( car ) {
//         console.log(`maxSpeed: ${car._maxSpeed}, speed: ${car._speed}, isOn: ${car._isOn}, distance: ${car._distance}, price: ${car._price}`);
//     };

//   /*
//    * Конструктор отримує об'єкт налаштувань.
//    *
//    * Додай властивості майбутнього екземпляра класу:
//    *  speed - поточна швидкість, початкова 0
//    *  price - ціна автомобіля
//    *  maxSpeed - максимальна швидкість
//    *  isOn - заведений автомобіль, значення true або false. Спочатку false
//    *  distance - загальний кілометраж, спочатку 0
//    */
//     constructor({speed = 0, price, maxSpeed, isOn = false, distance = 0}) {
//         this._speed = speed;
//         this._price = price;
//         this._maxSpeed = maxSpeed;
//         this._isOn = isOn;
//         this._distance = distance;
//     };

//   /*
//    * Додай геттер і сеттер для властивості price,
//    * який буде працювати з властивістю ціни автомобіля.
//    */
//     get price() {
//         return this._price;
//     };

//     set price(value) {
//         this._price = value
//     };

//   /*
//    * Додай код для того, щоб завести автомобіль
//    * Записує у властивість isOn значення true
//    */
//     turnOn() {
//         return this._isOn = true;
//     };

//   /*
//    * Додай код для того, щоб заглушити автомобіль
//    * Записує у властивість isOn значення false,
//    * і скидає поточну швидкість в 0
//    */
//     turnOff() {
//         return this._isOn = false, this._speed = 0;
//     };

//   /*
//    * Додає до властивості speed отримане значення,
//    * за умови, що результуюча швидкість
//    * не більше, ніж значення властивості maxSpeed
//    */
//     accelerate(value) {
//         if (this._speed <= this._maxSpeed) {
//             this._speed += value;
//         };
//     };

//   /*
//    * Забирає від властивості speed отримане значення,
//    * за умови, що результуюча швидкість не менше нуля
//    */
//     decelerate(value) {
//         if (this._speed > 0) {
//             this._speed -= value;
//         };
//     };

//   /*
//    * Додає в поле distance кілометраж (hours * speed),
//    * але тільки в тому випадку, якщо машина заведена!
//    */
//     drive(hours) {
//         if (this._isOn) {
//             this._distance += this._speed * hours;
//         };
//     };
// };

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000


















// ===================================================================================

// !!! Властивість об'єкта __proto__

// !!! Властивість функції prototype

// ===================================================================================

// ===== ООП =====

// const employee = {
//     baseSalary: 30000,
//     overTime: 10,
//     rate: 20,
//     getWage () {
//         return this.baseSalary + this.overTime * this.rate;
//     },
// };
// console.log(employee.getWage());



// ===== конструктори =====

// const Hotel = function (name, stars, capacity) {
//     this.name = name;
//     this.stars = stars;
//     this.capacity = capacity;
// };
// const hotel = new Hotel('Resort Hotel', 5, 100);
// console.log(hotel);
// const motel = new Hotel('Sunset Motel', 2, 300);
// console.log(motel);


// const Hotel = function (name, stars, capacity) {
//     this.name = name;
//     this.stars = stars;
//     this.capacity = capacity;
//     this.guestCount = 0;
//     this.greet = function (guestName) {
//         console.log(`Hello ${guestName}, welcome to ${this.name}`);
//     };
//     this.addGuest = function (amount) {
//         this.guestCount += amount;
//     };
//     this.removeGuest = function (amount) {
//         this.guestCount -= amount;
//     };
// };
// const hotel = new Hotel('Sunrise Hotel', 5, 200);
// console.log(hotel);
// hotel.greet('Mango');
// hotel.addGuest(50);
// hotel.removeGuest(30);
// console.log(hotel.guestCount);


// const Manager = function (name = 'manager', sales = 0,) {
//     this.name = name;
//     this.sales = sales;
//     this.sell = function (product) {
//         this.sales += 1;
//         return `Manager ${this.name} sold ${product}`;
//     };
// };
// const mango = new Manager('Mango', 5);
// console.log(mango);
// console.log(mango.sales);
// console.log(mango.sell('TV'));
// console.log(mango.sell('Microwave'));
// console.log(mango.sales);
// const poly = new Manager('Poly', 10);
// console.log(poly);
// console.log(poly.sales);
// console.log(poly.sell('TV'));
// console.log(poly.sell('Microwave'));
// console.log(poly.sales);



// === прототипи ===

// const animals = { eats: true };
// const dog = { barks: true };
// dog.__proto__ = animals;
// console.log(dog.barks);
// console.log(dog.eats);


// = Object.create(obj) =

// const animals = { eats: true };
// const dog = Object.create(animals);
// dog.barks = true;
// console.log(dog.barks);
// console.log(dog.eats);
// console.log(dog);
// // for (const one in dog) {
// //     console.log(one);
// // }


// = obj.hasOwnProperty(prop) =

// const animals = { eats: true };
// const dog = Object.create(animals);
// dog.barks = true;
// // for (const one in dog) {
// //     console.log(one);
// //     if (!dog.hasOwnProperty(one)) {
// //         continue
// //     };
// //     console.log(one);
// // };
// const dogKeys = Object.keys(dog);
// console.log(dogKeys);


// = Function.prototype(саме так потрібно добавляти методи!!!) =

// const Guest = function (name, room) {
//     this.name = name;
//     this.room = room;
// };
// console.dir(Guest);
// // console.log(Guest.prototype);
// // const mango = new Guest('Mango', 28);
// // console.log(mango);
// Guest.prototype.showGuestInfo = function () {
//     console.log(`name: ${this.name}, room: ${this.room}`);
// };
// const mango = new Guest ('Mango', 28);
// const poly = new Guest ('Poly', 35);
// mango.showGuestInfo();
// poly.showGuestInfo();
// console.log(mango);


// = прототипне наслідування!!! =

// const Hero = function (name, xp) {
//     this.name = name;
//     this.xp = xp;
// };
// Hero.prototype.gainXp = function (amount) {
//     console.log(`${this.name} gained ${amount} experience points`);
//     this.xp += amount;
// };
// const mango = new Hero('Mango', 1000);
// console.log(mango);
// mango.gainXp(1500);
// console.log(mango);
// const Warrior = function (name, xp, weapon) {
//     Hero.call(this, name, xp);
//     this.weapon = weapon;
// };
// // Warrior.prototype.attack = function () {
// //     console.log(`${this.name} attack with ${this.weapon}`);
// // };
// // const poly = new Warrior('Poly', 2500, 'sword');
// // console.log(poly);
// // poly.attack();
// Warrior.prototype = Object.create(Hero.prototype);
// console.log(Warrior.prototype);
// Warrior.prototype.constructor = Warrior;
// console.log(Warrior);
// Warrior.prototype.attack = function () {
//     console.log(`${this.name} attack with ${this.weapon}`);
// };
// const poly = new Warrior('Poly', 2500, 'sword');
// console.log(poly);
// poly.attack();
// poly.gainXp(300);



// === ES6 класи ===

// class Guest { };
// console.log(typeof Guest);
// console.log(Guest.prototype);
// const guest = new Guest();
// console.log(guest);


// class Guest {
//     constructor(name, roomNumber) {
//         this.name = name;
//         this.roomNumber = roomNumber;
//     };
// };
// const mango = new Guest('Mango', 268);
// console.log(mango);
// console.log(mango instanceof Guest);
// console.log(mango instanceof Object);


// class Guest {
//     constructor(name, roomNumber) {
//         this.name = name;
//         this.roomNumber = roomNumber;
//     };
//     getFullInfo() {
//         console.log(`Guest ${this.name}, Room number ${this.roomNumber}`);
//     };
// };
// const mango = new Guest('Mango', 268);
// mango.getFullInfo();


// = геттери і сеттери =

// class Guest  {
//     constructor(name, roomNumber) {
//         this._name = name;
//         this._roomNumber = roomNumber;
//     };
//     get name() {
//         return this._name;
//     };
//     set name(value) {
//         this._name = value;
//     };
// };
// const mango = new Guest('Mango', 268);
// console.log(mango);
// console.log(mango.name);
// mango.name = 'Mango the Fluffy';
// console.log(mango.name);


// = статичні властивості методу =

// class Calc {
//     constructor() { };
//     static get PI() {
//         return 3.14;
//     };
//     static add(...args) {
//         return args.reduce((acc, next) => acc + next, 0);
//     };
//     static mult(...args) {
//         return args.reduce((acc, next) => acc * next, 1);
//     };
// };
// console.log(Calc.PI);
// console.log(Calc.add(1, 2, 3));
// console.log(Calc.mult(4, 5, 6));


// = спадкування =

// class Animal {
//     constructor(name) {
//         this.name = name;
//     };
//     move() {
//         console.log(`I ${this.name} am moving!`);
//     };
// };
// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     };
//     bark() {
//         console.log('Wooof!');
//     };
//     moveAndMakeSound() {
//         super.move();
//         this.bark();
//     };
// };
// const dog = new Dog ('Mango', 'shepherd');
// console.log(dog); 
// dog.move();
// dog.bark();
// dog.moveAndMakeSound();

