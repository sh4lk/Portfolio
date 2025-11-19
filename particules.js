window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY;
  var docHeight = document.documentElement.scrollHeight - window.innerHeight;
  var scrolled = (scrollTop / docHeight) * 100;
  document.getElementById('progress-bar').style.width = scrolled + '%';
});
