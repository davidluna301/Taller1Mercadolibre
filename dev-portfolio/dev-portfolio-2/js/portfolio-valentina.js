/* =============================================
   portfolio-valentina.js
   Interacciones para el portafolio de Valentina Burbano
============================================= */

document.addEventListener('DOMContentLoaded', function () {

  // ===== ANIMACIÓN DE ENTRADA DE LA CARD =====
  const valentinaCard = document.getElementById('dev-card-valentina');
  if (valentinaCard) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    valentinaCard.style.opacity = '0';
    valentinaCard.style.transform = 'translateY(30px)';
    valentinaCard.style.transition = 'opacity 0.5s ease 0.15s, transform 0.5s ease 0.15s';
    observer.observe(valentinaCard);
  }

  // ===== TOOLTIP EN TECH TAGS =====
  const techTagsValentina = document.querySelectorAll('#dev-card-valentina .tech-tag');
  techTagsValentina.forEach(tag => {
    tag.setAttribute('title', tag.textContent.trim());
    tag.style.cursor = 'default';
  });

  // ===== HOVER EN SERVICIOS =====
  const serviceTagsValentina = document.querySelectorAll('#dev-card-valentina .dev-service-tag');
  serviceTagsValentina.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
      tag.style.background = '#e1bee7';
      tag.style.borderColor = '#7b1fa2';
    });
    tag.addEventListener('mouseleave', () => {
      tag.style.background = '#f3e5f5';
      tag.style.borderColor = '#ce93d8';
    });
  });

});
