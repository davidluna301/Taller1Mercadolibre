/* =============================================
   js-interactions.js - MercadoLibre Clone
   Lógica de búsqueda, interacciones UI,
   smooth scroll y animaciones
============================================= */

// ===== BÚSQUEDA =====
function doSearch() {
  const nav = document.getElementById('navSearch');
  const main = document.getElementById('mainSearch');
  const q = (main ? main.value : '') || (nav ? nav.value : '');
  if (q.trim()) {
    alert('Buscando: "' + q + '"\n\n(En producción esto redirigiría a los resultados de búsqueda)');
  }
}

// Sincronizar ambos campos de búsqueda
document.addEventListener('DOMContentLoaded', function () {
  const navSearch = document.getElementById('navSearch');
  const mainSearch = document.getElementById('mainSearch');

  if (navSearch && mainSearch) {
    navSearch.addEventListener('input', () => { mainSearch.value = navSearch.value; });
    mainSearch.addEventListener('input', () => { navSearch.value = mainSearch.value; });
  }

  // Enter en barra de búsqueda del navbar
  if (navSearch) {
    navSearch.addEventListener('keydown', (e) => { if (e.key === 'Enter') doSearch(); });
  }

  // Enter en buscador principal
  if (mainSearch) {
    mainSearch.addEventListener('keydown', (e) => { if (e.key === 'Enter') doSearch(); });
  }

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===== ANIMACIÓN SCROLL (Intersection Observer) =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.product-card, .service-card, .dev-card, .category-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    observer.observe(el);
  });

  // ===== NAVBAR SCROLL EFFECT =====
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > 100) {
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)';
    } else {
      navbar.style.boxShadow = '0 2px 6px rgba(0,0,0,0.15)';
    }
    lastScroll = current;
  });

  // ===== SEARCH TAGS click =====
  document.querySelectorAll('.search-tag').forEach(tag => {
    tag.addEventListener('click', (e) => {
      e.preventDefault();
      const text = tag.textContent.trim().replace(/^[^\w]+/, '').trim();
      if (mainSearch) mainSearch.value = text;
      if (navSearch) navSearch.value = text;
      // Scroll a la sección de búsqueda
      const searchSection = document.getElementById('buscador');
      if (searchSection) searchSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
