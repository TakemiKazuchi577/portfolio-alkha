/* ===================================
   LOGIN FORM
=================================== */
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  const passwordInput = loginForm.querySelector('input[type="password"]');

  // Tambah tombol show/hide password
  const toggleBtn = document.createElement('button');
  toggleBtn.type = "button";
  toggleBtn.textContent = "👁";
  toggleBtn.style.position = "absolute";
  toggleBtn.style.right = "15px";
  toggleBtn.style.top = "50%";
  toggleBtn.style.transform = "translateY(-50%)";
  toggleBtn.style.background = "transparent";
  toggleBtn.style.border = "none";
  toggleBtn.style.cursor = "pointer";
  toggleBtn.style.color = "#fff";
  toggleBtn.style.fontSize = "16px";
  toggleBtn.style.outline = "none";
  toggleBtn.addEventListener('click', () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });
  passwordInput.parentElement.style.position = "relative";
  passwordInput.parentElement.appendChild(toggleBtn);

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
   (membesar & mengikuti cursor)
=================================== */
const hoverItems = document.querySelectorAll('.gallery-grid img, .projects-grid img, .projects-grid video');

hoverItems.forEach(item => {
  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left; // posisi cursor di elemen
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 5; // rotasi max 5deg
    const rotateY = ((x - centerX) / centerX) * 5;

    item.style.transform = `scale(1.08) rotateX(${ -rotateX }deg) rotateY(${ rotateY }deg)`;
    item.style.transition = 'transform 0.1s ease-out';
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
    item.style.transition = 'transform 0.4s ease';
  });
});

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
  loader.style.fontSize = "30px";
  loader.style.zIndex = "10000";
  loader.innerText = "Loading...";
  document.body.appendChild(loader);

  setTimeout(() => { loader.style.display = "none"; }, 1500);
});

/* ===================================
   CUSTOM CURSOR
=================================== */
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
