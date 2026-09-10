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

// Dynamic copyright year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Contact form submission via Formspree
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Disable button while sending
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    formStatus.textContent = "🚀 Sending your message...";
    formStatus.className = "form__status form__status--sending";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        formStatus.textContent = "✅ Message sent! I'll get back to you soon.";
        formStatus.className = "form__status form__status--success";
        contactForm.reset();
      } else {
        throw new Error("Formspree response not ok");
      }
    } catch (err) {
      formStatus.textContent = "⚠️ Something went wrong. Please try again or email me directly.";
      formStatus.className = "form__status form__status--error";
    } finally {
      submitBtn.disabled = false;
    }
  });
}

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Hero container
ScrollReveal().reveal(".hero__badge", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".hero__title", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".hero__subtitle", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".hero__desc", {
  ...scrollRevealOption,
  delay: 600,
});

ScrollReveal().reveal(".hero__actions", {
  ...scrollRevealOption,
  delay: 800,
});

ScrollReveal().reveal(".hero__stats", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".hero__visual", {
  ...scrollRevealOption,
  origin: "right",
  delay: 500,
});

// About container
ScrollReveal().reveal(".about__visual", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__tag", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 600,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 800,
});

// Service container
ScrollReveal().reveal(".service__container .section__tag", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".service__container .section__header", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".service__container .section__description", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 200,
  delay: 500,
});

// Projects container
ScrollReveal().reveal("#projects .section__tag", {
  ...scrollRevealOption,
});

ScrollReveal().reveal("#projects .section__header", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal("#projects .section__description", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".filter-container", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".project-item", {
  ...scrollRevealOption,
  interval: 200,
  delay: 600,
});

// Technologies container
ScrollReveal().reveal("#technologies .section__tag", {
  ...scrollRevealOption,
});

ScrollReveal().reveal("#technologies .section__header", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal("#technologies .section__description", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".tech__card", {
  ...scrollRevealOption,
  interval: 150,
  delay: 500,
});

// Portfolio container
ScrollReveal().reveal(".portfolio__container .section__tag", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".portfolio__container .section__header", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".portfolio__container .section__description", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".portfolio__gallery-card", {
  duration: 1000,
  interval: 200,
  delay: 500,
});

// Contact container
ScrollReveal().reveal(".contact__card", {
  ...scrollRevealOption,
  duration: 1000,
});