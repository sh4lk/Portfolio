window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY;
  var docHeight = document.documentElement.scrollHeight - window.innerHeight;
  var scrolled = (scrollTop / docHeight) * 100;
  document.getElementById('progress-bar').style.width = scrolled + '%';
});

// experience-slider.js

document.addEventListener("DOMContentLoaded", function() {
  const leftBtn = document.querySelector('.exp-arrow.left');
  const rightBtn = document.querySelector('.exp-arrow.right');
  const slider = document.querySelector('.exp-slider');

  leftBtn.addEventListener('click', function() {
    slider.scrollBy({ left: -320, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', function() {
    slider.scrollBy({ left: 320, behavior: 'smooth' });
  });
});

// Récupérer le thème sauvegardé ou utiliser violet par défaut
const currentTheme = localStorage.getItem('theme') || 'violet';
document.documentElement.setAttribute('data-theme', currentTheme === 'orange' ? 'orange' : '');

// Bouton de toggle
const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'orange' ? 'violet' : 'orange';
  
  // Changer le thème
  document.documentElement.setAttribute('data-theme', newTheme === 'orange' ? 'orange' : '');
  
  // Sauvegarder dans localStorage
  localStorage.setItem('theme', newTheme);
  
  // Animation du bouton
  toggleButton.style.transform = 'rotate(360deg)';
  setTimeout(() => {
    toggleButton.style.transform = '';
  }, 300);
});