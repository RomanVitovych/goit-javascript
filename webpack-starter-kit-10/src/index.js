import './styles.css';
import menu from './menu.json';
import itemTemplate from './templates/item.hbs';
// console.log(itemTemplate);

const newItem = itemTemplate (menu)
console.log(newItem);

const menuList = document.querySelector('.js-menu');
menuList.insertAdjacentHTML('afterbegin', newItem);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const body = document.querySelector('body');
const mainInput = document.querySelector('.js-switch-input');
mainInput.addEventListener('change', () => {
    console.dir(mainInput.checked);
    mainInput.checked ? (localStorage.setItem('colorTheme', ' '),body.classList.add(Theme.DARK), body.classList.remove(Theme.LIGHT)) :
    (localStorage.removeItem('colorTheme'),body.classList.add(Theme.LIGHT), body.classList.remove(Theme.DARK));
})

if (localStorage.getItem('colorTheme')) {
    body.classList.add(Theme.DARK);
    mainInput.checked = true;
}




