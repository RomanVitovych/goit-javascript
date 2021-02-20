



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

const text = document.querySelector(".article-text");
console.log(text.textContent); // текстовый контент внутри p.article-text

const title = document.querySelector(".article-title");
title.textContent = 'Welcome to Bahamas!';


const max = 10;
let count = 0;
while (count < max) {
    count += 1;
    console.log(count);
};
































