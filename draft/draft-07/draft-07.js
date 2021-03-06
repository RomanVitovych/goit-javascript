// ========== TASK-01 ==========

// const allCategoriesRef = document.querySelector('#categories');
// console.log(`У списку ${allCategoriesRef.children.length} категорії`);

// const categoriesItemsRef = allCategoriesRef.querySelectorAll('.item');;
// categoriesItemsRef.forEach(el => {
//   const title = el.querySelector('h2');
//   console.log(`Категорія: ${title.textContent}`);
//   const items = el.querySelector('ul');
//   console.log(`Кількість елементів: ${items.children.length}`);
// });



// ========== TASK-02 ==========

// const ingredients = [
//   'Картопля',
//   'Гриби',
//   'Часник',
//   'Помідори',
//   'Зелень',
//   'Приправи',
// ];
// const createItems = arrayIng => {
//   const allIngredientsRef = document.querySelector('#ingredients');
//   arrayIng.map(ing => {
//     const ingItem = document.createElement('li');
//     ingItem.textContent = ing;
//     allIngredientsRef.append(ingItem);
//   });
// };
// createItems(ingredients);



// ========== TASK-03 ==========

// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const createItems = arrayImg => {
//   const galleryRef = document.querySelector('#gallery');
//   arrayImg.map(el => {
//     const imgItem = document.createElement('li');
//     const img = `<img src=${el.url} alt=${el.alt} width=320 height=240>`
//     imgItem.insertAdjacentHTML('beforeend', img)
//     galleryRef.append(imgItem)
//   });
// };
// createItems(images);



// ========== TASK-04 ==========

// const decrBtnRef = document.querySelector('#counter button[data-action="decrement"]');
// const incrBtnRef = document.querySelector('#counter button[data-action="increment"]');
// const counterRef = document.querySelector('#value')
// let total = 0;

// decrBtnRef.addEventListener('click', () => {
//   counterRef.textContent = total -= 1;
//   if (total < 0) {
//     alert('ERROR!!!');
//     counterRef.textContent = 0;
//   };
// });
// incrBtnRef.addEventListener('click', () => {
//   counterRef.textContent = total += 1;
// });



// ========== TASK-05 ==========

// const inputRef = document.querySelector('#name-input');
// const nameRef = document.querySelector('h1 > #name-output');

// inputRef.addEventListener('input', handleInput);

// function handleInput(e) {
//    inputRef.value === '' 
//   ? nameRef.textContent = 'незнайомець'
//   : nameRef.textContent = e.target.value;
// };



// ========== TASK-06 ==========

// const inputRef = document.querySelector('#validation-input');

// inputRef.addEventListener('blur', handleValidation);

// function handleValidation(e) {
//   const value = e.target.value.length;
//   const atrLength = Number(inputRef.getAttribute('data-length'));
//   inputRef.classList.add('invalid');
//   value === atrLength
//   ? inputRef.classList.add('valid')
//   : inputRef.classList.remove('invalid');
//   inputRef.value = '';
// };



// ========== TASK-07 ==========

// const inputRef = document.querySelector('#font-size-control');
// const textRef = document.querySelector('#text');
// textRef.style.fontSize = '48px';

// inputRef.addEventListener('input', () => {
//   textRef.style.fontSize = inputRef.value + 'px';
// });



// ========== TASK-08 ==========

// const inputRef = document.querySelector('#controls > input');
// const createBtn = document.querySelector('button[data-action="render"]');
// const deleteBtn = document.querySelector('button[data-action="destroy"]');
// const box = document.querySelector('#boxes');

// createBtn.addEventListener('click', createBoxes);
// deleteBtn.addEventListener('click', destroyBoxes);

// function createBoxes(amount) {
//   amount = Number(inputRef.value);
//   const size = 30;
//   for (let i = 0; i < amount; i += 1){
//     let newSize = size + i * 10;
//     const newElement = document.createElement('div');
//     newElement.classList.add('boxItem');
//     // newElement.style.backgroundColor = getRandomColor();
//     newElement.setAttribute('style',
//       `width: ${newSize}px; height: ${newSize}px; background: ${getRandomColor()}`)
//     box.append(newElement);  
//     inputRef.value = '';
//   };
//   console.log(box);
// };

// function destroyBoxes() {
//   const node = box.querySelector('#boxes > div');
//   // очищає всі елементи зразу
//   // box.remove(node)

//   // очищає по одному елемент
//   node.remove();
// };

// function getRandomColor() {
//   let letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i += 1){
//     color += letters[Math.floor(Math.random() * 16)];
//   };
//   return color;
// };
// // function getRandomColor() {
// //     return Math.floor(Math.random() * 256);
// // }


























// ===== пошук DOM вузлів =====

// const selectedById = document.querySelector('#menu');
// selectedById.style.textTransform = 'uppercase';
// selectedById.style.fontSize = '2rem';
// console.log(selectedById); // ...
// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName); // ...
// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass); // ...
// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = '#BF4E30';
// console.log(firstMenuItem); // ...


// ===== атрибути, які стають властивостями =====

// //===================================================
// const text = document.getElementById("text");
// text.hidden = true; // текст стал невидимым
// //===================================================
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message
// //===================================================
// const link = document.querySelector(".active");
// console.log(link.href); // https://s.codepen.io/about
// //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';


// ===== властивість textContent =====

// const text = document.querySelector(".article-text");
// console.log(text.textContent); // текстовый контент внутри p.article-text
// const title = document.querySelector(".article-title");
// title.textContent = 'Welcome to Bahamas!';


// ===== властивість classList =====

// const elem = document.querySelector("#paragraph");
// console.log(elem.classList); // ["text", "red", "big", value: "text red big"]
// console.log(elem.classList.contains("red")); // true
// elem.classList.remove("big");
// console.log(elem.classList); // ["text", "red", value: "text red"]
// elem.classList.add("new-class");
// console.log(elem.classList); // ["text", "red", "new-class", value: "text red new-class"]
// // можно добавлять множественные классы
// elem.classList.add("a", "b", "c");
// console.log(elem.classList);
// elem.classList.toggle("hidden"); // спрячется, добавился класс hidden
// elem.classList.toggle("hidden"); // покажется, удалили класс hidden
// // classList – это псевдо-массив, в прототипе которого есть метод forEach,
// // поэтому можно перебрать классы в цикле
// elem.classList.forEach(cls => {
//   console.log(cls); // text, red, new-class
// });


// ===== атрибути =====

// const image = document.querySelector(".image");
// console.log(image.attributes); // обьект всех аттрибутов елемента 
// // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}
// console.log(image.hasAttribute("src")); // true
// console.log(image.getAttribute("alt")); // lake and clouds
// image.setAttribute("alt", "amazing lake and clouds");
// console.log(image.getAttribute("alt")); // amazing lake and clouds


// ===== data-атрибути =====

// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');
// // Для получения значения data-атрибута используется
// // свойство dataset, после коготого идет свойство
// // data-action это action, data=close это close
// // то есть data- отбрасывается, а остальное имя записывается
// // как ключ объекта
// const saveBtnAction = saveBtn.dataset.action;
// console.log(saveBtnAction); //save
// const closeBtnAction = closeBtn.dataset.action;
// console.log(closeBtnAction); //close



// ===== Створення  DOM-вузла =====

// const heading = document.createElement('h1');
// console.log(heading);
// heading.textContent = 'This is heading';
// console.log(heading);
// const image = document.createElement('img');
// image.setAttribute('src', 'https://placeimg.com/640/480/nature');
// image.setAttribute('alt', 'nature');
// console.log(image);


// ===== Додавання DOM-вузла =====

// // Создадим еще один li и вставим его в конец списка
// const item = document.createElement("a");
// item.href = "#";
// item.classList.add("btn");
// item.textContent = "item 4";
// const nav = document.querySelector(".nav");
// nav.appendChild(item);
// // Создадим заголовок и вставим его в container перед списком
// const heading = document.createElement("h1");
// heading.textContent = "Nav heading";
// const container = document.querySelector(".container");
// container.insertBefore(heading, nav);


// ===== Методи append/prepend, before/after, replaceWith =====

// const list = document.querySelector(".list");
// // Добавлем элемент в конец списка
// const item = document.createElement("li");
// item.textContent = "Poly";
// list.append(item);
// // Добавляем элемент в начало списка
// const clone = item.cloneNode(true);
// clone.textContent = "Ajax";
// list.prepend(clone);
// // Добавляет заголовок перед списком
// const title = document.createElement("h2");
// title.textContent = "Список клиентов";
// list.before(title);
// // Добавляет абзац после списка
// const text = document.createElement("p");
// text.textContent =
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
// list.after(text);


// ===== Видалення DOM-вузла =====

// const article = document.querySelector('.article'); 
// const text = article.querySelector('.text');
// article.removeChild(text);
// const link = article.querySelector('.link');
// link.remove();


// ===== Клонування =====

// const parent = document.querySelector('.parent');
// const article = document.querySelector('.article');
// // Создает точную глубокую копию всей статьи
// const clone = article.cloneNode(true);
// clone.classList.add('blue-text');
// parent.appendChild(clone);



// ===== створення вузлів innerHTML =====

// const article = document.querySelector(".article");
// const htmlString =
//   `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;
// // Уберите += и поставьте =, видите результат? заголовок удаляется,
// // еще раз перечитайте сноску о работе innerHTML, о том как содержимое перезаписывается
// // Если необходимо добавить к уже существующей разметке, то используем +=
// article.innerHTML += htmlString;
// // Можно делать множественные вставки, для этого мы конкатенируем
// // всю необходимую разметку в одну строку, после чего присваиваем ее
// // innerHTML родителя. 
// // Почему именно так, а не поэлементно? Об этом мы поговорим далее.
// const list = document.querySelector(".list");
// const tech = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const markup = tech.reduce(
//   (string, item) => string + `<li>${item}</li>`,
//   ""
// );
// // Посмотрите что будет в консоли, одна длинная строка с "тегами"
// console.log(markup);
// // Вешаем всю разметку за одно обращение к DOM
// list.innerHTML = markup;


// ===== Метод insertAdjacentHTML() =====

// const list = document.querySelector('#list');
// list.insertAdjacentHTML('beforebegin', '<h2>beforebegin заголовок</h2>');
// list.insertAdjacentHTML('afterbegin', '<li>afterbegin item</li>');
// list.insertAdjacentHTML('beforeend', '<li>beforeend item</li>');
// list.insertAdjacentHTML('afterend', '<p>afterend текст</p>');


// ===== ПОДІЇ Метод elem.addEventListener() =====

// const singleBtn = document.querySelector('#single');
// // Для обработчика события можно (и желательно) 
// // использовать отдельную функцию, ссылку на которую 
// // передаем вторым аргументом в addEventListener
// const handleClick = () => alert('CLICK!');
// singleBtn.addEventListener('click', handleClick);
// //========================================================
// // Можно вешать более одного обработчика на элемент, 
// // даже на одно и тоже событие
// const multiBtn = document.querySelector('#multiple');
// const firstCallback = () => alert('First callback!');
// const secondCallback = () => alert('Second callback!');
// const thirdCallback = () => alert('Third callback!');
// multiBtn.addEventListener('click', firstCallback);
// multiBtn.addEventListener('click', secondCallback);
// multiBtn.addEventListener('click', thirdCallback);


// ===== ПОДІЇ Метод elem.removeEventListener() =====

// const addBtn = document.querySelector('button[data-action="add"]');
// const removeBtn = document.querySelector('button[data-action="remove"]');
// const btn = document.querySelector("#btn");
// const handleClick = () => {
//   alert("CLICK EVENT LISTENER ALERT!");
// };
// addBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
// });
// removeBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
// });


// ===== Об'єкт події =====

// const btn = document.querySelector("#btn");
// // event - это и есть обьект события который автоматически 
// // передается первым аргументом, мы можем называть его как угодно, 
// // хоть qwerty, но чаще всего он называется или e, evt или event
// const handleClick = event => {
//   console.log("event: ", event); //откройте консоль чтобы увидеть весь объект целиком
//   console.log("event type: ", event.type); // event type:  click
//   // будет window, так как мы используем стрелочную функцию, 
//   // которая использует внешний контекст 
//   // Если использовать обычную функцию то this будет самим элементом 
//   // button и равен currentTarget
//   console.log("this: ", this); 
//   console.log("target: ", event.target); // <button id="btn">CLICK ME!</button>
// };
// btn.addEventListener("click", handleClick);


// ===== Подія submit =====

// const form = document.querySelector(".form");
// const loginInput = form.querySelector('input[type="text"]');
// const passInput = form.querySelector('input[type="password"]');
// form.addEventListener("submit", handleSubmit);
// function handleSubmit(event) {
//   // Предотвращаем поведение по умолчанию
//   event.preventDefault();
//   const login = loginInput.value.trim();
//   const password = passInput.value.trim(); 
//   if(login === '' || password === '') {
//     return alert('Пожалуйста введите валидную информацию!')
//   }
//   form.reset(); 
//   alert(`
//     Спасибо за регистрацию!
//     Логин: ${login} 
//     Пароль: ${password}
//   `);
// }


// ===== KeyboardEvent.key і KeyboardEvent.code =====

// const clearLogBtn = document.querySelector('button[data-action="clear"]');
// const logList = document.querySelector(".log-list");
// window.addEventListener("keydown", logMessage);
// window.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", e => {
//   logList.innerHTML = "";
// });
// function logMessage({type, key, code}) {
//   const message = document.createElement("section");
//   const title = document.createElement('h2');
//   title.textContent = `${type} event`;
//   const text = document.createElement('p');
//   text.textContent = `key value is "${key}" | code value is "${code}"`
//   message.append(title, text);
//   logList.appendChild(message);
// }


// ==========================================================================

// const products = [
//     {
//     name: 'Сервоприводи',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sint excepturi architecto possimus nemo consequatur cum ullam suscipit non officiis',
//     price: 2000,
//     available: true,
//     },
//     {
//     name: 'Генератор поля',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sint excepturi architecto possimus nemo consequatur cum ullam suscipit non officiis',
//     price: 3000,
//     available: false,
//     },
//     {
//     name: 'Нульовий елемент',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sint excepturi architecto possimus nemo consequatur cum ullam suscipit non officiis',
//     price: 1500,
//     available: true,
//     },
// ];
// console.table(products);
// const createProductCard = product => {

//     const containerRef = document.createElement('div');
//     containerRef.classList.add('product-card');

//     const titleRef = document.createElement('h2');
//     titleRef.textContent = product.name;
//     const inStockClass = product.available
//         ? 'product-card__name--available'
//         : 'product-card__name--not-available';
//     titleRef.classList.add('product-card__name', inStockClass);
    
//     const descrRef = document.createElement('p');
//     descrRef.textContent = product.description;

//     const priceRef = document.createElement('p');
//     priceRef.textContent = `Ціна: ${product.price}`;
//     // containerRef.appendChild(titleRef);
//     // containerRef.appendChild(descrRef);
//     // containerRef.appendChild(priceRef);
//     containerRef.append(titleRef, descrRef, priceRef);
//     console.log(containerRef);

//     return containerRef;
// };
// const productCards = products.map(product => createProductCard(product));
// console.log(productCards);
// const productsListRef = document.querySelector('.js-products');
// productsListRef.append(...productCards);



// ===== події сабміту форми =====

// const formRef = document.querySelector('.js-register-form');
// formRef.addEventListener('submit', event => {
//   event.preventDefault();

//   // const formElements = event.target.elements;
//   // console.log(formElements.subscription.value);

//   const formRef = event.target;
//   const formData = new FormData(formRef);
//   const submitedData = {};
//   formData.forEach((value, key) => {
//     console.log('value:', value);
//     console.log('key:', key);
//     submitedData[key] = value;
//   });
//   console.log(submitedData);
// });



// ===== події input =====

// const inputRef = document.querySelector('.js-input');
// const nameLabelRef = document.querySelector('.js-button > span');
// const licenseRef = document.querySelector('.js-license');
// const btnRef = document.querySelector('.js-button');

// inputRef.addEventListener('focus', handleInputFocus);
// inputRef.addEventListener('blur', handleInputBlur);
// inputRef.addEventListener('input', handleInputChange);
// licenseRef.addEventListener('change', handleLicenseChange);

// function handleInputFocus ()  {
//   console.log('Focus');
// };
// function handleInputBlur ()  {
//   console.log('Blur');
// };
// function handleInputChange(e) {
//   console.log(e.target.value);
//   nameLabelRef.textContent = e.target.value;
// };
// function handleLicenseChange(e) {
//   btnRef.disabled = !e.target.checked;
// };



// ===== події клавіатури =====

// const outputRefRef = document.querySelector('.js-output');
// const btnClearRef = document.querySelector('.js-clear');

// window.addEventListener('keydown', handleKeyPress);
// btnClearRef.addEventListener('click', handleClearOutput);

// function handleKeyPress(e) {
//   console.log('event key:', e.key);
//   console.log('event code:', e.code);
//   if (e.code === 'Escape') {
//     console.log('Yes, ESCAPE!!!');
//   };
//   outputRefRef.textContent += e.key;
// };
// function handleClearOutput() {
//   outputRefRef.textContent = '';
// };



// ===== МОДАЛЬНЕ ВІКНО =====

// const openModalBtn = document.querySelector('button[data-action="open-modal"]');
// const closeModalBtn = document.querySelector('button[data-action="close-modal"]');
// const backdropRef = document.querySelector('.js-backdrop');

// openModalBtn.addEventListener('click', handleOpenMadal);
// closeModalBtn.addEventListener('click', handleCloseModal);
// backdropRef.addEventListener('click', handleBackdropClick);

// function handleOpenMadal () {
//   document.body.classList.add('show-modal');
//   window.addEventListener('keydown', handleESCPress);
// };
// function handleCloseModal () {
//   document.body.classList.remove('show-modal');
//   window.removeEventListener('keydown', handleESCPress);
// };
// function handleBackdropClick (e) {
//   console.log('event target:', e.target);
//   console.log('event CurrentTarget:', e.currentTarget);
//   if (e.target === e.currentTarget) {
//     handleCloseModal();
//   };
// };
// function handleESCPress (e) {
//   if (e.code === 'Escape') {
//       handleCloseModal();
//     };
// };
























