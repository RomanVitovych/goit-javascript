const book = {
    name: 'Полювання на фазана',
    author: 'Марта Кетра',
    genre: 'детектив',
    pageCount: 724,
    publisher: 'ТОВ Астрель'
};

console.log(book);

const string = JSON.stringify(book);
console.log(string);

const parsed = JSON.parse(string);
console.log(parsed);