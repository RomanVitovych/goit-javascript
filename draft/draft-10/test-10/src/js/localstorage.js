import '../sass/feedback-form.scss';

// ==================================================================================================

// localStorage.setItem('test', 'my test value');
// const value = localStorage.getItem('test');
// console.log(value);

// const settings = {
//     theme: 'dark',
//     fontSize: 14,
// };

// localStorage.setItem('settings', JSON.stringify(settings));
// const valueSettinge = localStorage.getItem('settings');
// console.log(JSON.parse(valueSettinge));
// // localStorage.removeItem('settings');

// // localStorage.clear();

// =======================================================================================================





const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
};

populateMesage();

refs.form.addEventListener('submit', handleFormSubmit);
refs.textarea.addEventListener('input', handleTextareaInput);

function handleFormSubmit(e) {
    e.preventDefault();
    localStorage.removeItem('feedback-message');
    e.currentTarget.reset();
};

function handleTextareaInput(e) {
    const message = e.currentTarget.value;
    localStorage.setItem('feedback-message', message);
};

function populateMesage() {
    const savedMessage = localStorage.getItem('feedback-message');

    if (savedMessage) {
        refs.textarea.value = savedMessage;
    };
};