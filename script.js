// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.style.background = 'rgba(15,34,64,1)';
    nav.style.boxShadow = '0 4px 24px rgba(0,0,0,.25)';
  } else {
    nav.style.background = 'rgba(15,34,64,.95)';
    nav.style.boxShadow = 'none';
  }
});

// Mobile hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Form submit (placeholder — wire to backend/Formspree/EmailJS as needed)
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('form-success').style.display = 'block';
    e.target.reset();
    btn.textContent = 'Send My Request';
    btn.disabled = false;
  }, 1000);
}

// Scroll-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.service-card, .review-card, .gallery-card, .ba-featured').forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

// Inject fade-up CSS dynamically
const style = document.createElement('style');
style.textContent = `
  .fade-up { opacity: 0; transform: translateY(28px); transition: opacity .5s ease, transform .5s ease; }
  .fade-up.visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);
