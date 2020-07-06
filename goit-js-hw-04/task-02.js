// Функція вищого порядку

const fruits = [
    {name: 'oranges', price: 100},
    {name: 'bananas', price: 30},
    {name: 'apples', price: 50},
]

const toByProducts = function (list, cb) {
    console.log(list);
    cb(list);
}

// function 1

const goToMarket = function (object) {
    const totalPrice = 0;
    for(const item of object) {
        const keys = object.keys(item);
    
        console.log(keys);

    }
}
