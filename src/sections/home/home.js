import ownerimg from './owner.png'
import './home.css'

export default function () {
  document.querySelector('#content').innerHTML =
    `<section id="home">
    <article>
      <h2>Famous since 1922, loved by many ❤️</h2>
      <p>Always at service of our dear customers</p>
      <img src="${ownerimg}" alt="Owner's picture" height="200">
      <p>Need Help ? <a href="tel:+9184484884">Call us 📞</a></p>
    </article>
  </section>`;
}