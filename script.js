// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Modal open/close
const cards = document.querySelectorAll('.service-card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    const service = card.getAttribute('data-service');
    const modal = document.getElementById('modal-' + service);
    if (modal) {
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('no-scroll');
      // Accessibility: focus the close button when modal opens
      const closeBtn = modal.querySelector('.modal-close');
      if (closeBtn) closeBtn.focus();
    }
  });
});

// Close buttons
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    if (modal) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('no-scroll');
    }
  });
});

// Click outside to close
window.addEventListener('click', (e) => {
  if (e.target.classList && e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
    e.target.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
  }
});

// Contact form handler
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message');

    if (!name || !email || !service || !message) {
      formStatus.textContent = 'Please fill all fields.';
      formStatus.classList.add('error');
      formStatus.classList.remove('success');
      return;
    }

    formStatus.textContent = 'Thank you! We will contact you within one business day.';
    formStatus.classList.remove('error');
    formStatus.classList.add('success');
    contactForm.reset();
  });
}

// Reveal animations (fix hidden content)
const reveal = () => {
  document.querySelectorAll('.animate').forEach(el => {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight - 60;
    if (inView) el.classList.add('in');
  });
};
window.addEventListener('load', reveal);
window.addEventListener('scroll', reveal);
