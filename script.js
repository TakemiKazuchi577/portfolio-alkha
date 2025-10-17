/* ===================================
   LOADING SCREEN
=================================== */
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.createElement('div');
  loader.id = "loader";
  loader.style.position = "fixed";
  loader.style.top = "0";
  loader.style.left = "0";
  loader.style.width = "100%";
  loader.style.height = "100%";
  loader.style.background = "#000";
  loader.style.color = "#fff";
  loader.style.display = "flex";
  loader.style.alignItems = "center";
  loader.style.justifyContent = "center";
  loader.style.fontSize = "32px";
  loader.style.zIndex = "10000";
  loader.innerText = "Loading...";
  document.body.appendChild(loader);

  setTimeout(() => { loader.style.display = "none"; }, 1500);
});

/* ===================================
   CUSTOM CURSOR
=================================== */
const cursor = document.createElement('div');
cursor.id = "customCursor";
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* ===================================
   LOGIN FORM
=================================== */
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  const passwordInput = loginForm.querySelector('input[type="password"]');
  const toggleBtn = document.createElement('span');
  toggleBtn.classList.add('toggle-password');
  toggleBtn.innerText = "Show";
  passwordInput.parentNode.appendChild(toggleBtn);

  toggleBtn.addEventListener('click', () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleBtn.innerText = "Hide";
    } else {
      passwordInput.type = "password";
      toggleBtn.innerText = "Show";
    }
  });

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = loginForm[0].value.trim();
    const password = loginForm[1].value.trim();

    if (username === "alkha" && password === "12345") {
      localStorage.setItem('loggedIn', 'true');
      alert("Login berhasil!");
      window.location.href = "index.html";
    } else {
      alert("Username atau password salah!");
    }
  });
}

/* ===================================
   LOGOUT BUTTON
=================================== */
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.removeItem('loggedIn');
    alert("Anda logout!");
    window.location.href = "login.html";
  });
}

/* ===================================
   CEK LOGIN OTOMATIS
=================================== */
if (window.location.pathname.indexOf("login.html") === -1) {
  if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = "login.html";
  }
}

/* ===================================
   NAVBAR HIDE/SHOW ON SCROLL
=================================== */
let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector('.navbar');
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-80px";
  }
  prevScrollPos = currentScrollPos;
};

/* ===================================
   GALLERY & PROJECTS HOVER INTERAKTIF
=================================== */
const hoverItems = document.querySelectorAll('.gallery-grid img, .projects-grid img, .projects-grid video');

hoverItems.forEach(item => {
  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 5;
    const rotateY = ((x - centerX) / centerX) * 5;

    item.style.transform = `scale(1.08) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    item.style.transition = 'transform 0.1s ease-out';
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
    item.style.transition = 'transform 0.4s ease';
  });
});

/* ===================================
   CONTACT FORM
=================================== */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm[0].value.trim();
    const email = contactForm[1].value.trim();
    const message = contactForm[2].value.trim();

    if (name && email && message) {
      alert(`Terima kasih ${name}, pesanmu telah terkirim!`);
      contactForm.reset();
    } else {
      alert("Silakan lengkapi semua kolom!");
    }
  });
}

/* ===================================
   RGB ANIMASI DI TEPI LAYAR
=================================== */
const edgeEffect = document.createElement('div');
edgeEffect.style.position = 'fixed';
edgeEffect.style.top = 0;
edgeEffect.style.left = 0;
edgeEffect.style.width = '100%';
edgeEffect.style.height = '100%';
edgeEffect.style.pointerEvents = 'none';
edgeEffect.style.background = 'radial-gradient(circle at 50% 50%, rgba(0,255,255,0.15), transparent 70%)';
edgeEffect.style.zIndex = 9998;
edgeEffect.style.transition = 'background 0.3s';
document.body.appendChild(edgeEffect);

document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  edgeEffect.style.background = `radial-gradient(circle at ${x*100}% ${y*100}%, rgba(0,255,255,0.15), transparent 70%)`;
});
