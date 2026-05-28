const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

function buildMessage() {
  const form = document.querySelector('#quoteForm');
  if (!form) return '';
  const data = new FormData(form);
  const name = data.get('name') || '';
  const phone = data.get('phone') || '';
  const service = data.get('service') || '';
  const message = data.get('message') || '';
  return `Hello ShieldMint, I want insurance guidance.\n\nName: ${name}\nMobile: ${phone}\nInsurance Type: ${service}\nMessage: ${message}`;
}

const quoteForm = document.querySelector('#quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!quoteForm.reportValidity()) return;
    const text = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/918460868264?text=${text}`, '_blank', 'noopener');
  });
}

const emailButton = document.querySelector('#emailButton');
if (emailButton) {
  emailButton.addEventListener('click', () => {
    const form = document.querySelector('#quoteForm');
    if (form && !form.reportValidity()) return;
    const subject = encodeURIComponent('Insurance Consultation Request');
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:shieldmint@outlook.com?subject=${subject}&body=${body}`;
  });
}
