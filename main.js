const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");
const projectFilters = document.querySelectorAll('.project-filter');
const projectItems = document.querySelectorAll('.project-item');

projectFilters.forEach(filter => {
  filter.addEventListener('click', () => {
    // Remove active class from all filters
    projectFilters.forEach(f => f.classList.remove('active'));
    // Add active class to clicked filter
    filter.classList.add('active');
    
    const category = filter.getAttribute('data-filter');
    
    projectItems.forEach(item => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});

// Technologies container
ScrollReveal().reveal(".tech__card", {
  ...scrollRevealOption,
  interval: 200,
  delay: 200,
});

// Dynamic Stars Generator (Opsional)
function createStars(count = 50) {
  const container = document.querySelector('.stars-container');
  if (!container) return;
  
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Random properties
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const size = Math.random() * 2 + 1; // 1-3px
    const duration = Math.random() * 3 + 2; // 2-5s
    const delay = Math.random() * 5;
    const opacity = Math.random() * 0.5 + 0.3; // 0.3-0.8
    
    star.style.cssText = `
      top: ${top}%;
      left: ${left}%;
      width: ${size}px;
      height: ${size}px;
      --duration: ${duration}s;
      --delay: ${delay}s;
      --opacity: ${opacity};
    `;
    
    container.appendChild(star);
  }
}

// Initialize stars after DOM loads
document.addEventListener('DOMContentLoaded', () => {
  createStars(50); // Generate 50 stars
});

// Meteor Effect Generator
function createMeteor() {
  const meteor = document.createElement('div');
  meteor.classList.add('meteor');
  
  // Posisi awal acak (lebih sering muncul di area kanan/atas agar terlihat natural)
  const startY = Math.random() * (window.innerHeight * 0.6);
  const startX = Math.random() * window.innerWidth;
  
  meteor.style.top = `${startY}px`;
  meteor.style.left = `${startX}px`;
  
  // Durasi acak agar tidak monoton (2s - 5s)
  const duration = 2 + Math.random() * 3;
  meteor.style.animationDuration = `${duration}s`;
  
  document.body.appendChild(meteor);
  
  // Hapus elemen setelah animasi selesai agar tidak membebani DOM
  setTimeout(() => {
    if (meteor.parentNode) meteor.remove();
  }, duration * 1000);
}

// Jalankan meteor secara berkala
function startMeteors() {
  // Munculkan 2 meteor pertama saat load
  setTimeout(createMeteor, 1500);
  setTimeout(createMeteor, 4000);
  
  // Lanjutkan dengan interval acak (4s - 8s)
  setInterval(() => {
    createMeteor();
  }, 4000 + Math.random() * 4000);
}

// Pastikan DOM sudah siap
document.addEventListener('DOMContentLoaded', startMeteors);