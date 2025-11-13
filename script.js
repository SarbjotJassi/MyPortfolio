// Typing-like effect for name (simple, non-blocking)
const typedNameEl = document.getElementById('typed-name');
const nameText = "Sarbjot Jassi";
let i = 0;
function typeName(){
  if(!typedNameEl) return;
  if(i <= nameText.length){
    typedNameEl.innerText = nameText.slice(0, i);
    i++;
    setTimeout(typeName, 80);
  } else { typedNameEl.innerText = nameText; }
}
document.addEventListener('DOMContentLoaded', typeName);

// Intersection Observer for reveal animations
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('visible');
  });
},{threshold:0.2});
document.querySelectorAll('.project-card, .skill, .photo-card').forEach(el=>observer.observe(el));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',(e)=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// Theme toggle + persist
const themeBtn = document.getElementById('themeToggle');
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if(saved === 'light') root.classList.add('light'), themeBtn.textContent = '☀️';
themeBtn && themeBtn.addEventListener('click', ()=>{
  const isLight = root.classList.toggle('light');
  themeBtn.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
