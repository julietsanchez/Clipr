/**
 * Navbar: menú móvil y switch de idioma ES/EN.
 */
import { resolveDocumentLang } from "./i18n-nav.mjs";
import "./hero-carousel.mjs";
import "./hero-micro.mjs";

function isHTMLElement(el) {
  return el instanceof HTMLElement;
}

/**
 * @param {HTMLElement} header
 * @param {boolean} open
 */
function setNavOpen(header, open) {
  if (!isHTMLElement(header)) return;
  header.dataset.navOpen = open ? "true" : "false";
  const toggle = header.querySelector("[data-nav-toggle]");
  if (isHTMLElement(toggle)) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute(
      "aria-label",
      open ? "Cerrar menú de navegación" : "Abrir menú de navegación"
    );
  }
  document.body.style.overflow = open ? "hidden" : "";
}

/**
 * @param {HTMLElement} wrap
 * @param {MouseEvent} event
 */
function closeNavIfClickOutside(wrap, event) {
  const header = document.querySelector("[data-site-header]");
  const toggle = header && header.querySelector("[data-nav-toggle]");
  if (
    !isHTMLElement(header) ||
    !isHTMLElement(toggle) ||
    header.dataset.navOpen !== "true"
  ) {
    return;
  }
  const target = event.target;
  if (!(target instanceof Node)) return;
  if (!wrap.contains(target) && !toggle.contains(target)) {
    setNavOpen(header, false);
  }
}

function initMobileNav() {
  const header = document.querySelector("[data-site-header]");
  const toggle = header && header.querySelector("[data-nav-toggle]");
  const wrap = header && header.querySelector("[data-nav-wrap]");
  if (!isHTMLElement(header) || !isHTMLElement(toggle) || !isHTMLElement(wrap)) {
    return;
  }

  toggle.addEventListener("click", function () {
    const open = header.dataset.navOpen !== "true";
    setNavOpen(header, open);
  });

  wrap.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.matchMedia("(max-width: 900px)").matches) {
        setNavOpen(header, false);
      }
    });
  });

  document.addEventListener("click", function (e) {
    closeNavIfClickOutside(wrap, e);
  });

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && header.dataset.navOpen === "true") {
      setNavOpen(header, false);
      toggle.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 900 && header.dataset.navOpen === "true") {
      setNavOpen(header, false);
    }
  });
}

/**
 * @param {HTMLElement} root
 * @param {'es' | 'en'} lang
 */
function setLangSwitchState(root, lang) {
  const thumb = root.querySelector("[data-lang-thumb]");
  const buttons = root.querySelectorAll("[data-lang-value]");
  if (!isHTMLElement(thumb)) return;

  root.dataset.langActive = lang;
  document.documentElement.lang = lang;

  buttons.forEach(function (btn) {
    if (!isHTMLElement(btn)) return;
    const value = btn.getAttribute("data-lang-value");
    const active = resolveDocumentLang(value || "") === lang;
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  thumb.classList.toggle("lang-switch__thumb--en", lang === "en");
}

function initLangSwitch() {
  const root = document.querySelector("[data-lang-switch]");
  if (!isHTMLElement(root)) return;

  const initial =
    document.documentElement.lang && document.documentElement.lang.slice(0, 2) === "en"
      ? "en"
      : "es";
  setLangSwitchState(root, initial);

  root.querySelectorAll("[data-lang-value]").forEach(function (btn) {
    if (!isHTMLElement(btn)) return;
    btn.addEventListener("click", function () {
      const value = btn.getAttribute("data-lang-value");
      if (value == null || typeof value !== "string") return;
      const lang = resolveDocumentLang(value);
      const next = lang === "en" ? "en" : "es";
      setLangSwitchState(root, next);
      btn.focus();
    });
    btn.addEventListener("keydown", function (e) {
      const v = btn.getAttribute("data-lang-value");
      if (e.key === "ArrowRight" && v === "es") {
        e.preventDefault();
        setLangSwitchState(root, "en");
        const enBtn = root.querySelector('[data-lang-value="en"]');
        if (isHTMLElement(enBtn)) enBtn.focus();
      } else if (e.key === "ArrowLeft" && v === "en") {
        e.preventDefault();
        setLangSwitchState(root, "es");
        const esBtn = root.querySelector('[data-lang-value="es"]');
        if (isHTMLElement(esBtn)) esBtn.focus();
      }
    });
  });
}

initMobileNav();
initLangSwitch();
