/**
 * FAQ acordeón — apertura/cierre de preguntas con animación
 */
(function () {
  const triggers = document.querySelectorAll("[data-faq-trigger]");
  if (!triggers.length) return;

  triggers.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const item = btn.closest("[data-faq-item]");
      const answer = item && item.querySelector("[role='region']");
      if (!item || !answer) return;

      const isOpen = item.hasAttribute("data-faq-open");

      if (isOpen) {
        item.removeAttribute("data-faq-open");
        answer.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
      } else {
        item.setAttribute("data-faq-open", "");
        answer.removeAttribute("hidden");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
})();
