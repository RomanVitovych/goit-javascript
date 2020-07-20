import gallery from './gallery-items.js';

const galleryList = document.querySelector('.js-gallery');

const lightBox = document.querySelector('.js-lightbox');
const lightBoxImage = document.querySelector('.lightbox__image');
const lightBoxBtn = document.querySelector('button[data-action="close-lightbox"]');
console.log(galleryList);

const generateItems = (array, place) => {
    array.map(element => {
        const galleryItem = document.createElement('li');
        const galleryLink = document.createElement('a');
        const galleryImage = document.createElement('img');
        galleryImage.setAttribute('alt', element.description);
        galleryImage.setAttribute('src', element.preview);
        galleryImage.setAttribute('data-source', element.original);
        galleryImage.classList.add('gallery__image');
        galleryLink.classList.add('gallery__link');
        galleryItem.classList.add('gallery__item')
        galleryLink.appendChild(galleryImage);
        galleryItem.appendChild(galleryLink);
        place.appendChild(galleryItem);
    })
};
generateItems(gallery, galleryList);

galleryList.addEventListener ('click', openModal);
function openModal (event)  {
    console.dir(event);
    console.log(event.target);
    console.log(event.target.nodeName);
    if (event.target.nodeName === 'IMG') {
        lightBox.classList.add('is-open');
        // console.dir(lightBoxImage);
        lightBoxImage.src = event.target.getAttribute('data-source');  
    }   
    return;
};

lightBoxBtn.addEventListener ('click', closeModal);
function closeModal () {
    lightBox.classList.remove('is-open');
    lightBoxImage.src = '';
};





































































































// const galleryItems = document.querySelector('js-lightbox');

// const photoElements = function (array, ul) {
//     for(let element of array) {
//         const imgForGallery = document.createElement('img');
//         imgForGallery.classList.add('gallery__image');
//         imgForGallery.setAttribute('alt', element.discription);
//         imgForGallery.setAttribute('src', element.preview);
//         imgForGallery.setAttribute('data-source', element.original);

//         const imgForLink = document.createElement('a');
//         imgForLink.appendChild(imgForGallery);

//         const imgForLi = document.createElement('li');
//         imgForLi.appendChild(imgForLink);

//         ul.appendChild(imgForLi);
//     }
// }
// photoElements(gallery, galleryItems);