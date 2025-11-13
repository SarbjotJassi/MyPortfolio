/* ====== Typing animation for name ====== */
const typedNameEl = document.getElementById('typed-name');
const nameText = "Sarbjot Jassi";
let idx = 0;

function typeName() {
  if (idx <= nameText.length) {
    typedNameEl.innerHTML = `<span class="cursor">${nameText.slice(0, idx)}</span>`;
    idx++;
    setTimeout(typeName, 90);
  } else {
    // after typing complete, remove cursor
    typedNameEl.innerHTML = nameText;
  }
}
document.addEventListener('DOMContentLoaded', typeName);

/* ====== Intersection observer for reveal animations ====== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.section, .project-card, .skill').forEach(el => {
  observer.observe(el);
});

/* ====== Theme Toggle (dark / light) ====== */
const themeBtn = document.getElementById('themeToggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  document.documentElement.classList.add('light');
  themeBtn.textContent = '☀️';
}

themeBtn.addEventListener('click', () => {
  const isLight = document.documentElement.classList.toggle('light');
  themeBtn.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

/* ====== Smooth scroll for anchor links ====== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ====== Small UX: download CV button confirms ====== */
const downloadBtn = document.getElementById('downloadCv');
if (downloadBtn) {
  downloadBtn.addEventListener('click', (e) => {
    // Let default download happen. Optionally show a quick toast — for simplicity, we console.log
    console.log('CV download started');
  });
}

