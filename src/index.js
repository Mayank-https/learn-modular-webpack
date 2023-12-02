import './main.css';
import home from './sections/home/home.js';
import menu from './sections/menu/menu.js';
import contact from './sections/contact/contact.js';


const $ = (s) => document.querySelector(s);

void function main() {
  $('#home-link').onclick = home;
  $('#menu-link').onclick = menu;
  $('#contact-link').onclick = contact;
  $('#home-link').click();
}();