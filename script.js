/* ==============================
   PRELOADER
============================== */
window.addEventListener('load', ()=>{
    const preloader = document.getElementById('preloader');
    if(preloader){
        preloader.style.opacity='0';
        setTimeout(()=>{preloader.style.display='none';},500);
    }
});

/* ==============================
   CUSTOM CURSOR
============================== */
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);
document.addEventListener('mousemove', e=>{
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

/* ==============================
   NAVBAR BURGER MENU + SCROLL
============================== */
const burger=document.querySelector('.burger');
if(burger){
    burger.addEventListener('click', ()=>{
        document.querySelector('.nav-links').classList.toggle('active');
        burger.classList.toggle('toggle');
    });
}
let lastScroll=0;
const navbar=document.querySelector('.navbar');
window.addEventListener('scroll', ()=>{
    const currentScroll=window.pageYOffset;
    if(currentScroll>lastScroll){navbar.style.top='-100px';}
    else{navbar.style.top='0';}
    lastScroll=currentScroll;
});

/* ==============================
   LOGIN FORM & SESSION
============================== */
const loginForm = document.getElementById('loginForm');
if(loginForm){
    loginForm.addEventListener('submit', e=>{
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const errorMsg = document.getElementById('errorMsg');
        if(username==='alkha' && password==='12345'){
            sessionStorage.setItem('loggedIn','true');
            errorMsg.textContent='';
            window.location.href='index.html';
        } else {
            errorMsg.textContent='Username atau password salah';
        }
    });
}

// redirect ke login jika belum login
if(!window.location.href.includes("login.html")){
    if(sessionStorage.getItem('loggedIn') !== 'true'){
        window.location.href='login.html';
    }
}

/* ==============================
   LOGOUT BUTTON
============================== */
const logoutBtn = document.getElementById('logoutBtn');
if(logoutBtn){
    logoutBtn.addEventListener('click', ()=>{
        sessionStorage.removeItem('loggedIn');
        window.location.href='login.html';
    });
}

/* ==============================
   MEDIA GRID INTERACTION
============================== */
document.querySelectorAll('.media-item').forEach(item=>{
    const media=item.querySelector('img, video');
    item.addEventListener('mousemove', e=>{
        const rect=item.getBoundingClientRect();
        const x=(e.clientX-rect.left)/rect.width;
        const y=(e.clientY-rect.top)/rect.height;
        media.style.transform=`scale(1.1) translate(${(x-0.5)*15}px, ${(y-0.5)*15}px)`;
    });
    item.addEventListener('mouseleave', ()=>{
        media.style.transform='scale(1) translate(0,0)';
    });
});

/* ==============================
   SMOOTH SCROLL NAV LINKS
============================== */
document.querySelectorAll('.nav-links a').forEach(link=>{
    link.addEventListener('click', e=>{
        e.preventDefault();
        const target=document.querySelector(link.getAttribute('href'));
        if(target){
            target.scrollIntoView({behavior:'smooth'});
        }
    });
});

/* ==============================
   HOVER BUTTONS & SOCIAL ICONS
============================== */
document.querySelectorAll('.btn').forEach(btn=>{
    btn.addEventListener('mouseenter', ()=>{
        btn.style.transform='scale(1.1)';
        btn.style.boxShadow='0 0 30px #00ffff,0 0 50px #00ffff';
    });
    btn.addEventListener('mouseleave', ()=>{
        btn.style.transform='scale(1)';
        btn.style.boxShadow='0 0 15px #00ffff,0 0 30px #00ffff';
    });
});
document.querySelectorAll('footer .social-icons img').forEach(icon=>{
    icon.addEventListener('mouseenter', ()=>{icon.style.transform='scale(1.3)';});
    icon.addEventListener('mouseleave', ()=>{icon.style.transform='scale(1)';});
});

/* ==============================
   FADE IN ANIMATION ON SCROLL
============================== */
const faders=document.querySelectorAll('.hidden');
const appearOptions={threshold:0.2, rootMargin:"0px 0px -50px 0px"};
const appearOnScroll = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);
faders.forEach(fader=>{appearOnScroll.observe(fader);});
