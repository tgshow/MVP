// Animação
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  images.forEach(image => {
    observer.observe(image);
  });
});

// Carrossel
document.addEventListener('DOMContentLoaded', function() {
  var courseCarousel = new bootstrap.Carousel(document.getElementById('courseCarousel'), {
     interval: 3000, 
     wrap: true 
  });
});
