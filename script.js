// Mobile nav toggle
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Intersection Observer for animations
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Parallax hero background
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY * 0.25;
    heroBg.style.transform = `translateY(${y}px) scale(1.02)`;
  });
}

// Contact form handling
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name')?.trim();
    const email = data.get('email')?.trim();
    const service = data.get('service')?.trim();
    const message = data.get('message')?.trim();

    if (!name || !email || !service || !message) {
      statusEl.textContent = 'Please fill in all fields.';
      statusEl.style.color = '#f5c542'; // gold accent for warning
      return;
    }

    statusEl.textContent = 'Thanks! We’ll get back to you within one business day.';
    statusEl.style.color = '#25d366'; // WhatsApp green for success
    form.reset();
  });
}
