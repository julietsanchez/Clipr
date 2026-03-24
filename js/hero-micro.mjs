/**
 * HERO PARALLAX: Animación sutil del mockup hero
 * Este archivo hace que el mockup se mueva un poco cuando haces scroll
 */

// Función helper: verifica si un elemento es HTML válido
function isHTMLElement(el) {
  return el instanceof HTMLElement;
}

// Buscamos el contenedor del mockup hero
const root = document.querySelector("[data-hero-mockup-root]");
if (isHTMLElement(root)) {
  // Buscamos el elemento que se va a mover
  const parallax = root.querySelector("[data-hero-parallax]");
  if (isHTMLElement(parallax)) {
    // Variables para optimizar el scroll
    let ticking = false;
    let lastKnownScrollY = 0;
    
    // Función: Actualiza la posición del parallax
    function updateParallax() {
      // Calculamos el desplazamiento (0.08 = velocidad del parallax)
      const offset = lastKnownScrollY * 0.08;
      // Aplicamos la transformación con GPU acceleration
      parallax.style.transform = `translate3d(0, ${offset}px, 0)`;
      ticking = false;
    }
    
    // Evento: Scroll de la ventana (optimizado con requestAnimationFrame)
    window.addEventListener("scroll", function () {
      lastKnownScrollY = window.scrollY || window.pageYOffset || 0;
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateParallax);
      }
    }, { passive: true });
  }
}
