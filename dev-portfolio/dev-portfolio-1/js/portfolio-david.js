/* =============================================
   portfolio-david.js
   Interacciones para el portafolio de David Luna
============================================= */

document.addEventListener('DOMContentLoaded', function () {

  // ===== ANIMACIÓN DE ENTRADA DE LA CARD =====
  const davidCard = document.getElementById('dev-card-david');
  if (davidCard) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    davidCard.style.opacity = '0';
    davidCard.style.transform = 'translateY(30px)';
    davidCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(davidCard);
  }

  // ===== TOOLTIP EN TECH TAGS =====
  const techTagsDavid = document.querySelectorAll('#dev-card-david .tech-tag');
  techTagsDavid.forEach(tag => {
    tag.setAttribute('title', tag.textContent.trim());
    tag.style.cursor = 'default';
  });

  // ===== HOVER EN SERVICIOS =====
  const serviceTagsDavid = document.querySelectorAll('#dev-card-david .dev-service-tag');
  serviceTagsDavid.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
      tag.style.background = '#dce9ff';
      tag.style.borderColor = '#3483FA';
    });
    tag.addEventListener('mouseleave', () => {
      tag.style.background = '#f0f4ff';
      tag.style.borderColor = '#d0deff';
    });
  });

});
