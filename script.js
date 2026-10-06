const nav = document.getElementById('nav');
const menu = document.querySelector('.menu-btn');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

menu.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.manifesto-copy, .experience-content, .gallery-item, .contact-content');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach(item => {
  item.classList.add('reveal');
  observer.observe(item);
});
