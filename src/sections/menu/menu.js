import menuHtml from './menu.html'
import './menu.css';

export default function () {
  document.querySelector('#content').innerHTML = menuHtml;
}