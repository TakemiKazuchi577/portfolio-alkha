/* ===================================
   LOGIN FORM
=================================== */
const loginForm = document.getElementById('loginForm');
if(loginForm){
  loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    const username = loginForm[0].value.trim();
    const password = loginForm[1].value.trim();

    // Ganti username/password sesuai keinginan
    if(username === "alkha" && password === "12345"){
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
if(logoutBtn){
  logoutBtn.addEventListener('click', function(e){
    e.preventDefault();
    localStorage.removeItem('loggedIn');
    alert("Anda logout!");
    window.location.href = "login.html";
  });
}

/* ===================================
   CEK LOGIN OTOMATIS
=================================== */
if(window.location.pathname.indexOf("login.html") === -1){
  if(localStorage.getItem('loggedIn') !== 'true'){
    window.location.href = "login.html";
  }
}

/* ===================================
   NAVBAR HIDE/SHOW ON SCROLL
=================================== */
let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector('.navbar');
window.onscroll = function(){
  let currentScrollPos = window.pageYOffset;
  if(prevScrollPos > currentScrollPos){
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-80px";
  }
  prevScrollPos = currentScrollPos;
}

/* ===================================
   GALLERY & PROJECTS HOVER EFFECT
=================================== */
const galleryItems = document.querySelectorAll('.gallery-grid img, .projects-grid img, .projects-grid video');
galleryItems.forEach(item => {
  item.addEventListener('mousemove', ()=>{ item.style.transform='scale(1.05)'; });
  item.addEventListener('mouseleave', ()=>{ item.style.transform='scale(1)'; });
});

/* ===================================
   LOADING SCREEN
=================================== */
document.addEventListener("DOMContentLoaded", function(){
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
  loader.innerText = "Loading...";
  loader.style.zIndex = "10000";
  document.body.appendChild(loader);

  setTimeout(()=>{ loader.style.display="none"; },1500);
});
