// ========== TASK ==========

import allGallery from './gallery-items.js';


const refs = {
    gallery: document.querySelector('.js-gallery'),
    lightBox: document.querySelector('.js-lightbox'),
    largeImg: document.querySelector('.lightbox__image'),
    closeModalBtn: document.querySelector('[data-action="close-lightbox"]'),
    backdrop: document.querySelector('.lightbox__overlay'),
    btnPrev: document.querySelector('.js-prev'),
    btnNext: document.querySelector('.js-next'),
};


refs.gallery.addEventListener('click', handleImgClick);
refs.closeModalBtn.addEventListener('click', handleCloseModal);
refs.backdrop.addEventListener('click', handleCloseModal);
refs.gallery.addEventListener('keydown', keyPress);
refs.btnPrev.addEventListener('click', handleBtnPrevClick);
refs.btnNext.addEventListener('click', handleBtnNextClick);


const createItems = arrayGallery => {

    arrayGallery.map((arr, index) => {

        const galleryItem = document.createElement('li');
        galleryItem.classList.add('gallery__item');

        const galleryItemLink = document.createElement('a');
        galleryItemLink.classList.add('gallery__link');
        galleryItemLink.setAttribute('href', arr.original);
        galleryItem.appendChild(galleryItemLink);

        const galleryItemImage = document.createElement('img');
        galleryItemImage.classList.add('gallery__image');
        galleryItemImage.setAttribute('src', arr.preview);
        galleryItemImage.setAttribute('data-source', arr.original);
        galleryItemImage.setAttribute('alt', arr.description);
        galleryItemImage.setAttribute('data-index', index);
        galleryItemLink.appendChild(galleryItemImage);

        refs.gallery.append(galleryItem);

    });    
    // console.log(refs.gallery);
};
createItems(allGallery);


function handleImgClick(e) {

    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return ;
    };

    const largeImgURL = e.target.dataset.source;
    const largeImgALT = e.target.alt;
    const largeImgINDEX = e.target.dataset.index;

    setLargeImg(largeImgURL, largeImgALT, largeImgINDEX);
    // console.log(largeImgURL, largeImgALT, largeImgINDEX);
};

function setLargeImg( src, alt, index ) {
    refs.largeImg.src = src;
    refs.largeImg.alt = alt;
    refs.largeImg.setAttribute('data-index', index);
    // console.log(refs.largeImg);

    // if (!refs.lightBox.classList.contains('is-open')) { 
    //     refs.lightBox.classList.add('is-open'); 
    // };
    if (refs.lightBox.classList !== 'is-open') {
        refs.lightBox.classList.add('is-open');
    };
};

function handleCloseModal() {
    refs.lightBox.classList.remove('is-open');
    refs.largeImg.src = '';
    refs.largeImg.alt = '';
    // console.log(refs.largeImg);
};

function keyPress(e) {
    if(e.code === 'Escape') {
        handleCloseModal();
    } else if (e.code === 'ArrowLeft') {
        // const ind = Number(refs.largeImg.dataset.index) - 1;
        // // console.log(ind);
        // const newImg = allGallery[ind];
        // // console.log(newImg);
        // (ind >= 0)
        //     ? setLargeImg(newImg.original, newImg.description, ind)
        //     : alert('This is the first image!');
        handleBtnPrevClick();
    } else if (e.code === 'ArrowRight') {
        // const ind = Number(refs.largeImg.dataset.index) + 1;
        // const newImg = allGallery[ind];
        // (ind < allGallery.length)
        //     ? setLargeImg(newImg.original, newImg.description, ind)
        //     : alert('This is the end!!!');
        handleBtnNextClick();
    };
};

function handleBtnPrevClick() {
        const ind = Number(refs.largeImg.dataset.index) - 1;
        const newImg = allGallery[ind];
        (ind >= 0)
            ? setLargeImg(newImg.original, newImg.description, ind)
            : alert('This is the first image!');
};

function handleBtnNextClick() {
        const ind = Number(refs.largeImg.dataset.index) + 1;
        const newImg = allGallery[ind];
        (ind < allGallery.length)
            ? setLargeImg(newImg.original, newImg.description, ind)
            : alert('This is the end!!!');
};


// ===================================================================

// function handleImgClick(e) {
//     e.preventDefault();
//     // console.log(e.target);
//     // console.log(e.currentTarget);
//     if (e.target.nodeName !== 'IMG') {
//         return ;
//     };
//     const largeImgURL = e.target.dataset.source;
//     const largeImgAlt =  e.target.alt;
//     const largeImgIndex = e.target.dataset.index;
//     // console.log(largeImgURL);
//     // console.log(largeImgAlt);
//     // console.log(largeImgIndex);
    
//     refs.lightBox.classList.add('is-open');
    
//     refs.largeImg.src = largeImgURL;
//     refs.largeImg.alt = largeImgAlt;
//     refs.largeImg.setAttribute('data-index', largeImgIndex);
//     // console.log(refs.largeImg);
// };

// =====================================================================



















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



// =============================================================================

// ===== подія mousemove(throttle) =====
// const coordsOutputRef = document.querySelector('.js-coords');
// let mouseMoveCallbackCounter = 0;
// const throttledMousemoveCallback = _.throttle(e => {
//     mouseMoveCallbackCounter += 1;
//     coordsOutputRef.textContent = `
//     Кількість викликів callback функції: ${mouseMoveCallbackCounter},
//     X: ${e.clientX},
//     Y: ${e.clientY}
//     `;
// }, 200);
// window.addEventListener('mousemove', throttledMousemoveCallback);


// ===== подія input(debounce) =====
// const inputRef = document.querySelector('.js-input');
// const outputRef = document.querySelector('.js-output');
// let inputCallbackCounter = 0;
// const debouncedInputCallback = _.debounce(e => {
//     inputCallbackCounter += 1;
//     outputRef.textContent = `
//     Кількість викликів callback функції: ${inputCallbackCounter},
//     Значення: ${e.target.value}`;
// }, 300);
// inputRef.addEventListener('input', debouncedInputCallback);



// ========== Intersection Observer API ==========

// const OnEntry = (entries, observer) => {
//     entries.forEach(entry => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             console.log(`Box ${entry.target.textContent} перетинає root`);
//             // observer.disconnect();
//         }
//     });
// };
// const options = {
//     rootMargin: '100px',
//     threshold: [0, 0.25, 0.5, 0.75, 1],
// };
// const io = new IntersectionObserver(OnEntry, options);
// const boxRef = document.querySelector('.js-box');
// io.observe(boxRef);





// ========== ліниве завантаження зображеннь ==========

// const images = document.querySelectorAll('.feed img');
// const options = {
//     rootMargin: '100px',
// };
// const onEntry = (entries, observer) => {
//     console.log('!');
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             // console.log(entry.target);
//             const image = entry.target;
//             const src = image.dataset.lazy;
//             image.src = src;
//             image.classList.add('appear');

//             observer.unobserve(image);
//         }
//     });
// };
// const io = new IntersectionObserver(onEntry, options)
// images.forEach(image => io.observe(image));

