/**
 * PRICING TOGGLE: Alternar entre precios mensual y anual
 * Este archivo cambia los precios cuando haces click en mensual/anual
 */
(function () {
  // Buscamos la sección de precios y los botones
  const section = document.querySelector(".pricing");
  const monthlyBtn = section && section.querySelector("[data-pricing-period='monthly']");
  const annualBtn = section && section.querySelector("[data-pricing-period='annual']");

  if (!section || !monthlyBtn || !annualBtn) return;

  // Función: Cambia el periodo de precios (mensual o anual)
  function setPeriod(period) {
    const isAnnual = period === "annual";
    // Agregamos o quitamos la clase según el periodo
    section.classList.toggle("pricing--annual", isAnnual);
    // Actualizamos los estados de los botones
    monthlyBtn.setAttribute("aria-pressed", String(!isAnnual));
    annualBtn.setAttribute("aria-pressed", String(isAnnual));
  }

  // Evento: Click en botón mensual
  monthlyBtn.addEventListener("click", function () {
    setPeriod("monthly");
  });

  // Evento: Click en botón anual
  annualBtn.addEventListener("click", function () {
    setPeriod("annual");
  });
})();
