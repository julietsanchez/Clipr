/**
 * Hero: parallax muy suave en el mockup (solo desktop, sin reduced motion).
 */
function isHTMLElement(el) {
  return el instanceof HTMLElement;
}

function initHeroParallax() {
  const hero = document.querySelector(".hero");
  const target = document.querySelector("[data-hero-parallax]");
  if (!isHTMLElement(hero) || !isHTMLElement(target)) {
    return;
  }

  const reduceMotion =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    return;
  }

  const mqDesktop = window.matchMedia("(min-width: 901px)");
  let raf = 0;
  const maxPx = 11;

  function apply(clientX, clientY) {
    if (!mqDesktop.matches) {
      target.style.transform = "";
      return;
    }
    const rect = hero.getBoundingClientRect();
    const nx = (clientX - rect.left) / rect.width - 0.5;
    const ny = (clientY - rect.top) / rect.height - 0.5;
    const tx = Math.round(nx * maxPx * 2);
    const ty = Math.round(ny * maxPx * 2);
    target.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
  }

  function onMove(e) {
    if (!mqDesktop.matches) return;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(function () {
      apply(e.clientX, e.clientY);
    });
  }

  function reset() {
    cancelAnimationFrame(raf);
    target.style.transform = "";
  }

  hero.addEventListener("pointermove", onMove, { passive: true });
  hero.addEventListener("pointerleave", reset);

  if (typeof mqDesktop.addEventListener === "function") {
    mqDesktop.addEventListener("change", reset);
  } else if (typeof mqDesktop.addListener === "function") {
    mqDesktop.addListener(reset);
  }
}

initHeroParallax();
