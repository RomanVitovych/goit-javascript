
const logItems = function (array) {
    let str = array.length;


    for (let i = 0; i < str; i += 1) {

        console.log(`${i + 1} - ${array[i]}`);
    }
    
};

// 


/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


