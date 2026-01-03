function showLogin() { 
  const box = document.querySelector("#login-box"); 
  box.style.display = box.style.display === "block" ? "none" : "block"; 
}

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("#navbar");
  const loginContainer = document.querySelector("#login-container");
  navbar.innerHTML = `
    <div class="logo-wrapper">
      <a href="index.html">
        <img src="images/logo.png" alt="SugarLab Logo" class="logo">
      </a>
    </div>
    <nav class="navbar-full">
      <div class="menu-wrapper">
        <ul class="menu">
          <li><a href="index.html">Начало</a></li>
          <li><a href="about.html">За нас</a></li>
          <li><a href="products.html">Изделия</a></li>
          <li><a href="catering.html">Кетъринг</a></li>
          <li><a href="news.html">Новини</a></li>
          <li><a href="gallery.html">Галерия</a></li>
          <li><a href="contacts.html">Контакти</a></li>
        </ul>
      </div>
      <div class="nav-icons">
        <span class="nav-fav">&#129655;</span>
        <span class="icon-cart">&#128722;</span>
        <span class="icon-profile" onclick="showLogin()">&#128100;</span>
      </div>
    </nav>
  `;

  loginContainer.innerHTML = `
    <div id="login-box" class="login-popup">
      <form>
        <h3>Вход в профила</h3>
        <label>Имейл:</label>
        <input type="email" placeholder="Въведете вашия имейл" required>
        <label>Парола:</label>
        <input type="password" placeholder="Въведете вашата парола" required>
        <button type="submit">Вход</button>
        <div class="login-links"> 
            <a href="#">Регистрация</a>
            <br> 
            <a href="#">Забравена парола?</a> 
        </div>
      </form>
    </div>
  `;

const footer = document.querySelector("#footer");
if (footer) {
  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-col footer-logo-col">
        <a href="index.html">
          <img src="images/logo.png" class="footer-logo" alt="SugarLab Logo">
        </a>
      </div>
      <div class="footer-col">
        <h3>Бързи връзки</h3>
        <ul>
          <li><a href="index.html">Начало</a></li>
          <li><a href="about.html">За нас</a></li>
          <li><a href="products.html">Изделия</a></li>
          <li><a href="catering.html">Кетъринг</a></li>
          <li><a href="news.html">Новини</a></li>
          <li><a href="gallery.html">Галерия</a></li>
          <li><a href="contacts.html">Контакти</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Последвайте ни</h3>
        <div class="social-icons">
          <a href="https://www.instagram.com/" target="_blank"><img src="images/instagram.png" alt="Instagram"></a>
          <a href="https://www.facebook.com/" target="_blank"><img src="images/facebook.png" alt="Facebook"></a>
          <a href="https://www.youtube.com/" target="_blank"><img src="images/youtube.png" alt="YouTube"></a>
        </div>
      </div>
      <div class="footer-col">
        <h3>Нашите партньори</h3>
        <ul>
          <li><a href="https://fabrikasvoge.com/" target="_blank">Своге</a></li>
          <li><a href="https://zaharnizavodi.com/" target="_blank">Захарни заводи</a></li>
          <li><a href="https://eventbg.com/" target="_blank">EventBG</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Контакт с нас</h3>
        <p>&#128205; гр. Варна, ул. „Брегалница“ 1</p>
        <p>&#128222; 0888 123 456</p>
        <p>&#128231; info@sugarlab.bg</p>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2025 SugarLab. Всички права запазени.
    </div>
  `;
}

  const form = document.querySelector("#newsletter-form");
  if (form) { 
    form.addEventListener("submit", function (e) { 
      e.preventDefault(); 
      alert("Благодарим! Успешно се абонирахте за нашия бюлетин."); 
      form.reset(); 
    }); 
  } 

document.querySelectorAll('.faq-question').forEach(btn => { 
  btn.addEventListener('click', () => { 
    const item = btn.parentElement; 
    item.classList.toggle('active'); 
  }); 
});
});

const slides = document.querySelectorAll('.fade-slide');
let index = 0;
setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 4000);
