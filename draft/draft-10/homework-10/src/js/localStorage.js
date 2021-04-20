import '../sass/styles.scss';

const togleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

togleRef.addEventListener('change', handleSwitchToggle);

function handleSwitchToggle() {
    // console.dir(togleRef.checked);
    togleRef.checked
        ? (localStorage.setItem('colorTheme', Theme.DARK),
            bodyRef.classList.add(Theme.DARK),
            bodyRef.classList.remove(Theme.LIGHT))
        : (localStorage.setItem('colorTheme', Theme.LIGHT),
            bodyRef.classList.add(Theme.LIGHT),
            bodyRef.classList.remove(Theme.DARK))        
};

const savedTheme = localStorage.getItem('colorTheme');
if (savedTheme) {
    bodyRef.classList.add(Theme.DARK);
    togleRef.checked = false
};