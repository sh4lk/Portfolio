window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY;
  var docHeight = document.documentElement.scrollHeight - window.innerHeight;
  var scrolled = (scrollTop / docHeight) * 100;
  document.getElementById('progress-bar').style.width = scrolled + '%';
  
  // --- BOUTON RETOUR EN HAUT ---
  const backToTop = document.getElementById('back-to-top');
  if (scrollTop > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

document.addEventListener("DOMContentLoaded", function() {

  // --- PAGE LOADER ---
  const loader = document.getElementById('page-loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 800);
  });
  // Fallback si load déjà passé
  if (document.readyState === 'complete') {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 800);
  }

  // --- BOUTON RETOUR EN HAUT ---
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- REVEAL TEXT LETTRE PAR LETTRE ---
  const revealText = document.querySelector('.reveal-text');
  if (revealText) {
    const text = revealText.getAttribute('data-text');
    revealText.innerHTML = '';
    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.animationDelay = `${0.8 + i * 0.08}s`;
      revealText.appendChild(span);
    });
    revealText.style.opacity = '1';
  }
  
  // --- EFFET TYPING ---
  const typingText = document.getElementById('typing-text');
  const words = ['cybersécurité', 'pentesting', 'CTF', 'réseaux sécurisés'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typingText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      typingText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typeSpeed = 2000; // Pause avant de supprimer
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500; // Pause avant le prochain mot
    }

    setTimeout(type, typeSpeed);
  }

  if (typingText) {
    type();
  }

  // --- ANIMATIONS FADE-IN AU SCROLL ---
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => fadeObserver.observe(el));

  // --- FORMULAIRE DE CONTACT ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Créer le lien mailto avec les données du formulaire
      const mailtoLink = `mailto:sh4lk.profesional@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      
      window.location.href = mailtoLink;
    });
  }

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

  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn.querySelector('i');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Appliquer le thème: priorité au choix sauvegardé, sinon préférence système
  if (savedTheme === 'dark' || (savedTheme === null && prefersDark)) {
    body.classList.add('dark-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  } else if (savedTheme === 'light') {
    body.classList.remove('dark-mode');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  }

  // Écouter les changements de préférence système
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (localStorage.getItem('theme') === null) {
      if (e.matches) {
        body.classList.add('dark-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
      } else {
        body.classList.remove('dark-mode');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
      }
    }
  });

  themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
      themeIcon.classList.replace('fa-moon', 'fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      themeIcon.classList.replace('fa-sun', 'fa-moon');
      localStorage.setItem('theme', 'light');
    }
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
      icon.classList.replace('fa-bars', 'fa-times');
    } else {
      icon.classList.replace('fa-times', 'fa-bars');
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
  });
});