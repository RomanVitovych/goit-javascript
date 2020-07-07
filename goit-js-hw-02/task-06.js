
let input;
const numbers = [];
let total = 0;

while (input !== null) {

    input = prompt ('Enter your number');

    if (input === null) {

        if (numbers.length > 0) {
        for (let number of numbers) {
            total += number;
        } 
        console.log(`Загальна сума чисел дорівнює ${total}`); 

        } else {
            console.log('Не введено жодного числа');
        } 
        
        if (input !== Number) {
            console.log('Було введено не число, попробуйте ще раз' )
        }        
    }    
    numbers.push(Number(input));        
}

