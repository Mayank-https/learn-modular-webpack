import homeHtml from './home.html';
import './home.css';

export default function () {
  document.querySelector('#content').innerHTML = homeHtml;
}