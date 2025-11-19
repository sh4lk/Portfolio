particlesJS("particles-js", {
  "particles": {
    "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#00d2ff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3 },
    "line_linked": { "enable": true, "distance": 150, "color": "#00d2ff", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 12 }
  },
  "interactivity": {
    "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } },
    "modes": { "repulse": { "distance": 70 }, "push": { "particles_nb": 4 } }
  },
  "retina_detect": true
});

window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY;
  var docHeight = document.documentElement.scrollHeight - window.innerHeight;
  var scrolled = (scrollTop / docHeight) * 100;
  document.getElementById('progress-bar').style.width = scrolled + '%';
});
