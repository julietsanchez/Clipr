/**
 * Carrusel 3D decorativo: solo rotación automática, sin capturar puntero.
 */
import { HERO_IMAGE_SOURCES, buildHeroImageList } from "./hero-sources.mjs";

const ROTATE_SECONDS = 52;

function isHTMLElement(el) {
  return el instanceof HTMLElement;
}

/**
 * @returns {{ radius: number; imgWidth: number; imgHeight: number }}
 */
function computeLayout() {
  const w = typeof window !== "undefined" ? window.innerWidth : 1024;
  const radius = Math.round(Math.min(300, Math.max(160, w * 0.2)));
  const imgWidth = Math.round(Math.min(130, Math.max(88, w * 0.072)));
  const imgHeight = Math.round(imgWidth * (170 / 120));
  return { radius, imgWidth, imgHeight };
}

/**
 * @param {HTMLElement[]} elements
 * @param {number} radius
 * @param {{ stagger?: boolean }} [opts]
 */
function layoutPanels(elements, radius, opts) {
  const stagger = opts && opts.stagger === true;
  const n = elements.length;
  for (let i = 0; i < n; i += 1) {
    const el = elements[i];
    const deg = i * (360 / n);
    el.style.transform = `rotateY(${deg}deg) translateZ(${radius}px)`;
    el.style.transition = "transform 1s";
    el.style.transitionDelay = stagger ? `${(n - i) / 4}s` : "0s";
  }
}

/**
 * @param {HTMLElement} root
 */
export function initHeroCarousel(root) {
  if (!isHTMLElement(root)) return;

  const drag = root.querySelector("[data-hero-drag]");
  const spin = root.querySelector("[data-hero-spin]");
  const ground = root.querySelector("[data-hero-ground]");
  if (!isHTMLElement(drag) || !isHTMLElement(spin) || !isHTMLElement(ground)) {
    return;
  }

  const urls = buildHeroImageList(HERO_IMAGE_SOURCES);
  if (urls.length === 0) return;

  spin.replaceChildren();
  const elements = urls.map(function (src) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    img.decoding = "async";
    img.loading = "lazy";
    spin.appendChild(img);
    return img;
  });

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function applyLayout(stagger) {
    const { radius, imgWidth, imgHeight } = computeLayout();
    spin.style.width = `${imgWidth}px`;
    spin.style.height = `${imgHeight}px`;
    ground.style.width = `${radius * 3}px`;
    ground.style.height = `${radius * 3}px`;
    layoutPanels(elements, radius, { stagger });
  }

  applyLayout(true);

  if (!prefersReduced) {
    spin.style.animation = `hero-carousel-spin ${ROTATE_SECONDS}s infinite linear`;
  } else {
    spin.style.animation = "none";
  }

  let resizeTimer = 0;
  window.addEventListener("resize", function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(function () {
      applyLayout(false);
    }, 120);
  });
}

const root = document.querySelector("[data-hero-carousel-root]");
if (isHTMLElement(root)) {
  window.requestAnimationFrame(function () {
    setTimeout(function () {
      initHeroCarousel(root);
    }, 320);
  });
}
