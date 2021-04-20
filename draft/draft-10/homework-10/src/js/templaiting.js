import menuTemplate from '../templates/menu-items.hbs';
import menu from '../menu.json';


const markup = menuTemplate(menu);

const menuList = document.querySelector('.js-menu');
menuList.insertAdjacentHTML('beforeend', markup);