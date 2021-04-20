// import itemsTemplate from '../templates/gallery-items.hbs';
// console.log(itemsTemplate);

import countriesTemplate from '../templates/countries-items.hbs';
import countries from '../countries.json';



const markup = countriesTemplate(countries);
// console.log(markup);

const galleryRef = document.querySelector('.js-gallery');
galleryRef.insertAdjacentHTML('beforeend', markup);






// const tech = ['HTML', 'CSS', 'JS', 'React'];
// const markup = itemsTemplate({ items: tech});
// console.log(markup);





// const tech = ['HTML', 'CSS', 'JS', 'React'];

// const galleryRef = document.querySelector('.js-gallery');

// const markup = tech.map(el => `<li><a href="">${el}</a></li>`).join('');

// // galleryRef.innerHTML = element;
// galleryRef.insertAdjacentHTML("beforeend", markup);