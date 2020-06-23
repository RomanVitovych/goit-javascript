let total = 0;

do {
    let input = prompt('please enter default nomber');

    if (input === null) {
        console.log(`Загальна сума чисел дорівнює ${total}`)
        break; 
    }

    input = Number(input);
    total += input;
} while (true) {
    
}

console.log(`Total ${total}`);