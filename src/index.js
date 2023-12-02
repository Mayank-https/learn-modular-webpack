import html from './mock.html';
import homeDisplay from './sections/home/home.js';
import './main.css';

const $ = (s) => document.querySelector(s);

void function main() {
  $('#home-link').onclick = homeDisplay;
  $('#home-link').click();
}();