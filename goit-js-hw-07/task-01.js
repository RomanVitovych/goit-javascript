// const allCategories = document.querySelector('ul'); //звернення через тег

// const allCategories = document.querySelector('#categories'); //зверненння через ідентифікатор// console.log(allCategories);

// const allCategories = document.querySelector('ul[data-action="action"]'); //звернення через дата-атрибут// console.log(allCategories);

// const allCategories = document.querySelector('.categories'); //звернення через клас
// console.log(allCategories);
// console.dir(allCategories);

const countCategories = document.querySelector('.categories');
console.dir(countCategories);
console.log(`У списку ${countCategories.children.length} категорії.`);

const itemCategories = document.querySelectorAll('.item');

const nameCategories = function (colection) {
    for (let element of colection) {
        console.log(`Категорія: ${element.children[0].textContent}`);
        console.log(`Кількість елементів: ${element.children[1].children.length}`);
    }
    return
}
nameCategories(itemCategories);