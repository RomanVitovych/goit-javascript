// ============================================================= 01

// ========== 01/01

// let name = 'Генератор захисного поля';
// let price = '2000';
// console.log(`Обрано ${name}, ціна за штуку ${price} кредитів`);



// ========== 02/01

// let total = 100;
// let ordered = 130;
// if (ordered <= total) {
//     console.log(`"Замовлення оформлено, з вами зв'яжеться менеджер"`);
// } else {
//     console.log(`"На складі недостатньо товарів!"`);
// }



// ========== 03/01

// let message;
// const ADMIN_PASSWORD = 'jqueryismyjam';
// const password = prompt('Enter your password');
// if (password === null) {
//     message = 'Скасовано користувачем!';
//     console.log(message);
// } else if (password === ADMIN_PASSWORD) {
//     message = 'Ласкаво просимо!';
//     console.log(message);
// } else {
//     message = 'Доступ заборонений, невірний пароль!';
//     console.log(message);
// }



// ========== 04/01

// let message;
// let credits = 23500;
// let pricePerDroid = 3000;
// let amountDroid = prompt('How many droids do you want');
// let totaPrice = amountDroid * pricePerDroid;
// if (amountDroid === null) {
//     message = 'Скасовано користувачем!';
//     console.log(message);
// } else if (totaPrice > credits) {
//     message = 'Недостатньо коштів на рахунку!';
//     console.log(message);
// } else {
//     message = `'Ви купили ${amountDroid} дроїдів, на рахунку залишилося ${credits - totaPrice} кредитів.'`
//     console.log(message);
// }



// ========== 05/01

// let deliveryCountry = prompt('What is your country');
// let countryName = deliveryCountry.toUpperCase();
// let price;
// let message;
// switch(countryName) {
//     case 'КИТАЙ':
//          price = 100;
//          break;
//     case 'ЧІЛІ':
//          price = 250;
//          break;
//     case 'АВСТРАЛІЯ':
//         price = 170;
//         break;   
//     case 'ІНДІЯ':
//         price = 80;
//         break;
//     case 'ЯМАЙКА':
//         price = 120;
//         break;   
//     default:
//         message = 'У вашій країні доставка недоступна';
//         console.log(message);                
// }
// message = `'Доставка в ${countryName} буде коштувати ${price} кредитів'`
// console.log(message);



// ========== 06/01

// let input;
// let total = 0;
// let message;    
// while (true) {
//     input = prompt('Please enter your number');
//     if (input === null) {
//         break;
//     }
//     input = Number(input);
//     total += input;
//     if (input !== Number) {
//         message = 'Було написано не число, спробуйте ще раз';
//         console.log(message);
//     }       
// }   
// message = `Загальна сума чисел дорівнює ${total}`;
// console.log(message);





// ==================================================================== 02

// ========== 01/02

// const logItems = function (array) {
//     for (let i =0; i < array.length; i +=1) {
//         console.log(`${i + 1} - ${array[i]}`);
//     }
//   };
  
//   /*
//    * Виклич функції для перевірки працездатності твоєї реалізації.
//    */
//   logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  
//   logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);



// ========== 02/02

// const calculateEngravingPrice = function (message, pricePerWord) {
//     let arr = message.split(' ');
//     return arr.length * pricePerWord
//   };
  
//   /*
//    * Виклич функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus', 10,),
//   ); // 80
  
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus', 20,),
//   ); // 160
  
//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
//   ); // 240
  
//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
//   ); // 120



// ========== 03/02

// const findLongestWord = function (string) {
//     let biggestWord = string[0];
//     let array = string.split(' ');
//     // console.log(array);
//     for (let i = 0; i < array.length; i += 1) {
//         // console.log(array[i].length);
//         if (array[i].length > biggestWord.length) {
//             biggestWord = array[i];
//         }
//     }
//     return biggestWord
//   };
  
//   /*
//    * Виклич функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
//   console.log(findLongestWord('Google do a roll')); // 'Google'
  
//   console.log(findLongestWord('May the force be with you')); // 'force'


//  const numbers = [1, 2, 3, 8, 20, 4, -5, 90, 56, 78, 52];

//  const biggestNumber = function (string) {
//      let biggest = string[0];
//      let array = string.length;
//     //  console.log(array);
//      for (let i = 0; i < array; i += 1) {
//         //  console.log(string[i]);
//         if (string[i] < biggest) {
//             biggest = string[i];            
//         }
//     }
//     return biggest
//  }
//  console.log(biggestNumber(numbers));



// ========== 04/02

// const formatString = function (string) {
//     const newString = string.split(' ');
//     const cutString = newString.splice(0, 40);
//     if (string.length <= 40) {
//         return (string);
//     }else {
//         return (`${cutString} ...`);
//     }
//   };
  
//   /*
//    * Виклич функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//   // повернеться оригінальний рядок
  
//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//   // повернеться форматований рядок
  
//   console.log(formatString('Curabitur ligula sapien.'));
//   // повернеться оригінальний рядок
  
//   console.log(
//     formatString(
//       'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     ),
//   );
//   // повернеться форматований рядок


//   const stringer = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum hic minus, cupiditate assumenda illum optio sed. Ducimus voluptatum corrupti sequi, libero voluptas, amet voluptatibus, similique debitis molestiae dolore eius maxime numquam quod. Nisi cum modi, laborum quos sequi repudiandae! Aut aliquam rerum nam vero nobis repellendus odio nemo rem eius. Rem eius magnam hic suscipit sequi voluptas fuga esse adipisci, maiores porro, delectus minima quam.'
//   const newStringer = stringer.split(' ');
//   const cutStringer = newStringer.splice(0, 20);
//   console.log(cutStringer);



// ========== 05/06

// const checkForSpam = function (message) {
//     const newMessage = message.toUpperCase();
//     const oneWord = newMessage.includes('SALE') || newMessage.includes('SPAM');
//     return oneWord;
//   };
    
// //   /*
// //    * Викличи функції для перевірки працездатності твоєї реалізації.
// //    */
//   console.log(checkForSpam('Latest technology news')); // false
  
//   console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
//   console.log(checkForSpam('Get best sale offers now!')); // true
  
//   console.log(checkForSpam('[SPAM] How to earn fast money?')); // true



// ========== 06/06

// const numbers = [];
// let total = 0;
// while (true) {
//     let input = prompt('Enter your number!!!');
//     // input = Number(input);
//     console.log(numbers);
//     if (input === null) {
//         numbers.push(input);
//         for(let number of numbers) {
//             total += number; 
//             console.log(`Загальна сума чисел дорівнює ${total}`);
//         }
//         break;
//     } 
// }

// let input;
// let total = 0;
// let message;    
// while (true) {
//     input = prompt('Please enter your number');
//     if (input === null) {
//         break;
//     }
//     input = Number(input);
//     total += input;
//     if (input !== Number) {
//         message = 'Було написано не число, спробуйте ще раз';
//         console.log(message);
//     }       
// }   
// message = `Загальна сума чисел дорівнює ${total}`;
// console.log(message);





// ===================================================================== 03

// ========== 01/03

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//   };
//   user.mood = 'happy';
//   user.hobby = 'skydiving';
//   user.premium = false;
//   console.log(user);
//   const keys = Object.keys(user);
//   for (let key of keys) {
//       console.log(`${key} :  ${user[key]}` );
//   }



// ========== 02/03

// const countProps = function (obj) {
//     const values = Object.values(obj);
//     return values.length;
// };
  
//   /*
//    * Викличи функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(countProps({})); // 0
  
//   console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
//   console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3



// ========== 03/03

// const findBestEmployee = function (employees) {
//     const values = Object.values(employees);
//     // console.log(value);
//     // const bestValue = Math.max(...value);
//     // console.log(bestValue);
//     for (let value of values) {
//         if(value > values[0]) {
//             values[0] = value;
//         }
//     }
//     // console.log(values[0]);
//     const keys = Object.keys(employees);
//     // console.log(keys);
//     const name = [];
//     for ( let key of keys) {
//         // console.log(key);
//         if (values[0]) {
//             name.push(key);
//         }
//         return `${name} : ${values[0]} `;
//     }
// };
  
//   /*
//    * Викличи функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(
//     findBestEmployee({
//       ann: 29,
//       david: 35,
//       helen: 1,
//       lorence: 99,
//     }),
//   ); // lorence
  
//   console.log(
//     findBestEmployee({
//       poly: 12,
//       mango: 17,
//       ajax: 4,
//     }),
//   ); // mango
  
//   console.log(
//     findBestEmployee({
//       lux: 147,
//       david: 21,
//       kiwi: 19,
//       chelsy: 38,
//     }),
//   ); // lux



// ========== 04/03

// const countTotalSalary = function (employees) {
//     let total = 0;
//     const values = Object.values(employees)
//     // console.log(values);
//     for (let value of values) {
//         // console.log(value);
//         total += value;
//     }
//     return `Total salery: ${total}`;
//   };
  
//   /*
//    * Викличи функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(countTotalSalary({})); // 0
  
//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80,
//     }),
//   ); // 330
  
//   console.log(
//     countTotalSalary({
//       kiwi: 200,
//       lux: 50,
//       chelsy: 150,
//     }),
//   ); // 400



// ========== 05/03

//   const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроїд', price: 400, quantity: 7 },
//     { name: 'Захоплення', price: 1200, quantity: 2 },
//   ];
  
//   const getAllPropValues = function (arr, prop) {
//   const val = [];
//     for (let product of arr) {
//         const keys = Object.keys(product)
//         for(let key of keys) {
//             if(key === prop) {                
//                 val.push(product[prop])
//             }
//         }
//     }
//     return val
// };
  
//   /*
//    * Викличи функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
  
//   console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
  
//   console.log(getAllPropValues(products, 'category')); // []



// ========== 06/03

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроїд', price: 400, quantity: 7 },
//     { name: 'Захоплення', price: 1200, quantity: 2 },
//   ];
  
//   const calculateTotalPrice = function (allProdcuts, productName) {
//       let total = 0;
//       for(let product of allProdcuts) {
//         //   console.log(product);
//           if(product.name === productName) {
//             //   console.log(productName);
//               total = product.price * product.quantity;
//               return `TOTAL: ${total}`;
//             }
//       }    
//   };
  
//   /*
//    * Викличи функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(calculateTotalPrice(products, 'Радар')); // 5200
  
//   console.log(calculateTotalPrice(products, 'Дроїд')); // 2800





// ==========================================================================

// ========== 01/04

// const account = {
//     owner: 'Mango',
//     balance: 24000,
//     discount: 0.1,
//     orders: ['order-1', 'order-2', 'order-3'],
//     changeDiscount(value) {
//       this.discount = value;
//     },
//     showOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost;
//       this.orders.push(order);
//     },
//   };
  
//   account.changeDiscount(0.15);
//   console.log(account.discount); // 0.15
  
//   console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']
  
//   account.addOrder(5000, 'order-4');
//   console.log(account.balance); // 19000
//   console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']



// ========== 02/04

const inventory = {
    items: ['Knife', 'Gas mask'],
    add(itemName) {
        console.log(`Adding ${itemName} to inventory`);
        
        this.items.push(itemName);
    },
    remove(itemName) {
      console.log(`Removing ${itemName} from inventory`);
  
      this.items = this.items.filter(item => item !== itemName);
    },
  };
  
  const invokeInventoryAction = function (itemName, action) {
    console.log(`Invoking action on ${itemName}`);
    action(itemName);
  };
  
  invokeInventoryAction('Medkit', inventory.add);
  
  // Invoking action on Medkit
  // Adding Medkit to inventory
  
  console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
  
  invokeInventoryAction('Gas mask', inventory.remove);
  // Invoking action on Gas mask
  // Removing Gas mask from inventory
  
  console.log(inventory.items); // ['Knife', 'Medkit']








