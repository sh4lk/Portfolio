// --- 1. Barre de Progression ---
window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY;
  var docHeight = document.documentElement.scrollHeight - window.innerHeight;
  var scrolled = (scrollTop / docHeight) * 100;
  document.getElementById('progress-bar').style.width = scrolled + '%';
});

document.addEventListener("DOMContentLoaded", function() {
  
  // --- 2. Slider Projets ---
  const leftBtn = document.querySelector('.exp-arrow.left');
  const rightBtn = document.querySelector('.exp-arrow.right');
  const slider = document.querySelector('.exp-slider');

  if(leftBtn && rightBtn && slider) {
    leftBtn.addEventListener('click', function() {
      slider.scrollBy({ left: -320, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', function() {
      slider.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }

  // --- 3. Gestion du Thème (Dark/Light) ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn.querySelector('i');
  const body = document.body;

  // Vérifier si un thème est sauvegardé dans le navigateur
  const savedTheme = localStorage.getItem('theme');
  
  // Appliquer le thème sauvegardé
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }

  themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Changer l'icône et sauvegarder la préférence
    if (body.classList.contains('dark-mode')) {
      themeIcon.classList.replace('fa-moon', 'fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      themeIcon.classList.replace('fa-sun', 'fa-moon');
      localStorage.setItem('theme', 'light');
    }
  });

  // --- 4. Menu Burger (Mobile) ---
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change l'icône du burger en croix
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
      icon.classList.replace('fa-bars', 'fa-times');
    } else {
      icon.classList.replace('fa-times', 'fa-bars');
    }
  });

  // Fermer le menu quand on clique sur un lien
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
  });
});