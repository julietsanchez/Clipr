/**
 * FAQ ACORDEÓN: Apertura/cierre de preguntas
 * Este archivo hace que las preguntas se abran y cierren con click
 */
(function () {
  // Buscamos todos los botones de preguntas
  const triggers = document.querySelectorAll("[data-faq-trigger]");
  if (!triggers.length) return;

  // Para cada botón, agregamos el evento de click
  triggers.forEach(function (btn) {
    btn.addEventListener("click", function () {
      // Buscamos el item y la respuesta
      const item = btn.closest("[data-faq-item]");
      const answer = item && item.querySelector("[role='region']");
      if (!item || !answer) return;

      // Verificamos si ya está abierto
      const isOpen = item.hasAttribute("data-faq-open");

      if (isOpen) {
        // Si está abierto, lo cerramos
        item.removeAttribute("data-faq-open");
        answer.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
      } else {
        // Si está cerrado, lo abrimos
        item.setAttribute("data-faq-open", "");
        answer.removeAttribute("hidden");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
})();
