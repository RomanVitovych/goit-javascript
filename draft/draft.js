// let drawCats = function (howManyTimes) {
//     for ( i = 0; i < howManyTimes; i++) {
//        console.log(i + '=^.^=');
//        }
//     };
//  drawCats(10);


// ===================================================================================
// ЗМІННІ


// let myString = 'heLlo THERE, HOW ARE yOu doINg?';
// let lowerString = myString.toLowerCase();
// let cutString = lowerString.slice(1)
// let firstLitter = lowerString[0];
// let upperfirstLitter = firstLitter.toUpperCase();
// console.log(upperfirstLitter+cutString);
// let newString = myString[0].toUpperCase() + myString.slice(1).toLowerCase();
// console.log(newString);



// let age = 10;  
// let accompanied = true;
// let allowAge = 13;
// let goodAge = age >= allowAge;
// let allowWatch = goodAge || accompanied;
// console.log(allowWatch);


// ========================================================================================
// МЕТОДИ

// let randomBodyParts = ['face', 'nose', 'hair', 'leg', 'head', 'stomach', 'dig'];
// let randomAdjactives = ['smelly', 'boring', 'stupid', 'tired', 'funny'];
// let randomAnimalBodyParts = ['face', 'nose', 'hair', 'leg', 'head', 'stomach', 'dig'];
// let randomWords = ['fly', 'marmot', 'stick', 'monkey', 'rat', 'bad'];
// let randomBodyPart = randomBodyParts [Math.floor(Math.random()*randomBodyParts.length)];
// let randomAdjactive = randomAdjactives [Math.floor(Math.random()*randomAdjactives.length)];
// let randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random()*randomAnimalBodyParts.length)];
// let randomWord = randomWords [Math.floor(Math.random()*randomWords.length)];
// let randomInsult = 'Your ' + randomBodyPart + ' is more ' + randomAdjactive + ' than ' + randomWord + '!!!';
// console.log(randomInsult);  

// let randomBodyParts = ['face', 'nose', 'hair', 'leg', 'head', 'stomach', 'dig'];
// let randomAdjactives = ['smelly', 'boring', 'stupid', 'tired', 'funny'];
// let randomAnimalBodyParts = ['face', 'nose', 'hair', 'leg', 'head', 'stomach', 'dig'];
// let randomWords = ['fly', 'marmot', 'stick', 'monkey', 'rat', 'bad'];
// let randomBodyPart = randomBodyParts [Math.floor(Math.random()*randomBodyParts.length)];
// let randomAdjactive = randomAdjactives [Math.floor(Math.random()*randomAdjactives.length)];
// let randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random()*randomAnimalBodyParts.length)];
// let randomWord = randomWords [Math.floor(Math.random()*randomWords.length)];
// let randomInsult = ['Your ', randomBodyPart, 'is more', randomAdjactive, 'than', randomWord, '!!!'].join(' ');
// console.log(randomInsult);  



// let arrayNumbers = [3, 2, 1];
// let arrayString = [arrayNumbers[0], 'is bigger than', arrayNumbers[1], 'is bigger than', arrayNumbers[2]].join(' ');
// console.log(arrayString);

// Альтернатива
// let arrayNumbers = [3, 2, 1];
// arrayNumbers = [3, 2, 1 ].join(' is bigger than ');
// console.log(arrayNumbers);



// ===========================================================================================
//ОБ'ЄКТИ

// let scores = {
//     David: 0,
//     Clara: 0,
//     Monica: 0
// };
// scores.David += 5;
// scores.Clara += 8;
// scores.Monica +=12;
// scores.David += 9;
// console.log(scores);



// let myCraizyObject = {
//     'name': 'A ridiculous Object',
//     'some array': [7, 9, {purpose: 'confusion', number: 123}, 3.3], 
//     'random animal': 'Banana shark'
// };
// let array = myCraizyObject['some array'];
// console.log(array[2].number);



// ========================================================================================
// УМОВНІ ВИРАЗИ ТА ЦИКЛИ

// let name = 'Nich';
// console.log(`Hello ${name}`);
// if (name.length > 7) {
//     console.log('You have REALLY long name!');
// }else {
//     console.log('Your name is not very long');
// }

// let lemonChicken = false;
// let beefWithBlackBeen = false;
// let sweetAndSourPork = true;
// if (lemonChicken) {
//     console.log('Great! I am having lemon chicken!');
// }else if (beefWithBlackBeen) {
//     console.log('I am having the beef');
// }else if (sweetAndSourPork) {
//     console.log('OK, I will have the pork');
// }else {
//     console.log('Well, I guess I will have rice then');
// }

// let name = 'Volodymyr';
// if (name === 'Roman') {
//     console.log('Hello me!');
// }else if (name === 'Oksana') {
//     console.log('Hello mother');
// }else if (name === 'Yuriy') {
//     console.log('Hello father');
// }else if (name === 'Volodymyr') {
//     console.log('Hello brother');
// }else {
//     console.log('Hello stranger!');
// }

// let sheepCounted = 0;
// while (sheepCounted < 20) {
//     console.log(`I have counted ${sheepCounted} sheep!`);
//     sheepCounted ++;
// }
// console.log('Zzzzzzzzzzzzzzzzzz');

// for (let sheepCounted = 0; sheepCounted < 20; sheepCounted += 1) {
//     console.log(`I have counted ${sheepCounted} sheep!`);
// }
// console.log('Zzzzzzzzzzzzzzzzzzzzzzzzzzzz');

// let timeToSayHello = 3;
// for (let i = 0; i < timeToSayHello; i +=1) {
//     console.log('hello');
// }

// let animals = ['Lion', 'Flamingo', 'Polar Bear', 'Boa Constrictor'];
// for (let i = 0; i < animals.length; i +=1) {
//     console.log(`This zoo contains ${animals[i]}. `);
// }

// let name = 'Nicholas';
// for (let i = 0; i < name.length; i += 1) {
//     console.log(`My name contains the letter ${name[i]}`);
// }

// for (let i = 0; i < 100; i += i * 3) {
//     console.log(i);
// }

// let numberCounted = 0;
// while (numberCounted < 100) {
//     numberCounted += 3;
//     console.log(numberCounted);
// }

// let animal = ['Cat', 'Fish', 'Lemur', 'Komodo Dragon'];
// for (let i = 0; i < animal.length; i += 1) {
//     console.log(`Awesome ${animal[i]}`);
// }

// let alphabet = 'abcdefghijklmnopqrstuvwxyz';
// let randomString = '';
// let alphabetRandom = alphabet [Math.floor(Math.random() * alphabet.length)];
// let letterRandom = alphabetRandom [0];
// while (randomString.length < 10) {
//     randomString += letterRandom;
// }
// console.log(randomString);

// let input = 'javascript is awesome';
// let output = '';
// for (let i = 0; i < input.length; i += 1) {
//     if (input[i] === 'a') {
//         output += 4;
//     }else if (input[i] === 'e') {
//         output += 3;
//     }else if (input[i] === 'i') {
//         output += 1;
//     }else if (input[i] === 'o') {
//         output += 0;
//     }else {
//         output += input[i];
//     }
// }
// console.log(output);    


// ===== ПІДРАХУНОК ЧИСЕЛ ІЗ КНОПКАМИ =====
// const numberInput = document.querySelector('.js-value');
// const numberValueBtn = document.querySelector('.js-add-value');
// const numberTotalBtn = document.querySelector('.js-calculate');
// const numbers = [];
// let total = 0;

// numberValueBtn.addEventListener('click', function () {
//     const value = Number(numberInput.value);
//     numbers.push(value);
//     numberInput.value = '';
//     console.log(numbers);
// });
// numberTotalBtn.addEventListener('click', function () {
//     for(let number of numbers) {
//         total += number;
//     }
//     console.log(total);
// });
// ==========================================



// =====================================================================================
// СТВОРЕННЯ ГРИ

// const name = prompt('What is your name?');
// console.log(`Hello ${name}`);

// let likesCats = confirm('Do you like cats?');
// // if (likesCats) {
// //     console.log('You are cool cat!');
// // }else {
// //     console.log('Year that is fine. You are still cool!');
// // }
// confirm('Do you like cats?') ? console.log('You are cool cat!') : console.log('Year that is fine. You are still cool!')

// alert('Javascript is awesome!')

// ================================
// let randomWords = [
//     'javascript', 
//     'monkey', 
//     'amazing', 
//     'pancace', 
//     'concat', 
//     'repositotry', 
//     'mamba'
// ];
// let word = randomWords[Math.floor(Math.random() * randomWords.length)];
// let answerArray = [];
// for ( let i = 0; i < word.length; i +=1) {
//     answerArray[i] = '_';
// }
// let remainingLetters = word.length;
// let numberOfAttempts = 0;
// while(remainingLetters > 0 && numberOfAttempts < 3) {
//     alert(answerArray.join(' '));
//     let guess = prompt('Guess a letter, or click Cancel to stop paling');
//         if (guess === null) {
//             break;
//         }else if (guess.length !== 1) {
//             alert('Pleas enter a single letter!');
//         }else {
//             for (let k = 0; k < word.length; k += 1) {
//                 if (word[k] === guess) {
//                     answerArray[k] = guess;
//                     remainingLetters --;
//                 }
//             }
//         }
// }
// alert(answerArray.join(' '));
// alert(`God job, the answer was ${word}`);








  
  
  
  
  
  
  
  
  



    


