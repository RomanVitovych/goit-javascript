// ========== TASK ==========

import allGallery from './gallery-items.js';

const createItems = arrayGallery => {
    const galleryRefs = document.querySelector('.js-gallery');
    arrayGallery.map(arr => {
        const galleryItem = document.createElement('li');
        const img = `<img src=${arr.preview} alt=${arr.description} width=380 height=240>`;
        galleryItem.insertAdjacentHTML('beforeend', img);
        galleryRefs.append(galleryItem);
    });
};
createItems(allGallery);






// =======================================

    // <li class="gallery__item">
    //     <a 
    //     class="gallery__link" 
    //     href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
    //     >
    //         <img 
    //         class="gallery__image" 
    //         src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
    //         data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg" 
    //         alt="Tulips" 
    //         />
    //     </a>
    // </li>

// =======================================




















// ========== Спливання події ==========

// const refs = {
//     parent: document.querySelector('#parent'),
//     child: document.querySelector('#child'),
//     innerChild: document.querySelector('#inner-child'),
// };

// const parentClickHandler = (e) => {
//     console.log('PARENT click handler');
//     console.log('Target:', e.target);
//     console.log('CurrentTarget:', e.currentTarget);
// };
// const childClickHandler = (e) => {
//     console.log('CHILD click handler');
//     console.log('Target:', e.target);
//     console.log('CurrentTarget:', e.currentTarget);
// };
// const innerClickChildHandler = (e) => {
//     console.log('INNER CHILD click handler')
//     console.log('Target:', e.target);
//     console.log('CurrentTarget:', e.currentTarget);

//     // === припинення спливання(майже ніколи) ===
//     // e.stopPropagation()
// };

// refs.parent.addEventListener('click', parentClickHandler);
// refs.child.addEventListener('click', childClickHandler);
// refs.innerChild.addEventListener('click', innerClickChildHandler);




// ========== Делегування ==========

// const nav = document.querySelector('.js-nav');
// const activeTagOutput = document.querySelector('.js-active-tag');

// nav.addEventListener('click', handleNavClick);

// function handleNavClick(e) {
//     e.preventDefault();
//     const target = e.target;
//     const activeLinlValue = target.dataset.value;
//     console.log('event target:', target);
//     console.log(target.nodeName);
//     if (target.nodeName !== 'A') {
//         return;
//     };
//     setActiveLink(target);
//     updateOutput(activeLinlValue)
// };

// function setActiveLink (nextActiveLink) {
//     const currentActiveLink = nav.querySelector('a.active');
//     if (currentActiveLink) {
//         console.log(currentActiveLink);
//         currentActiveLink.classList.remove('active');
//     };
//     nextActiveLink.classList.add('active');
//     console.log(nextActiveLink.dataset);
// };

// function updateOutput(value) {
//     activeTagOutput.textContent = value;
// };




