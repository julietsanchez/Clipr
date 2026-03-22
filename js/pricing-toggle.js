/**
 * Pricing toggle — alternar entre precios mensual y anual
 */
(function () {
  const section = document.querySelector(".pricing");
  const monthlyBtn = section && section.querySelector("[data-pricing-period='monthly']");
  const annualBtn = section && section.querySelector("[data-pricing-period='annual']");

  if (!section || !monthlyBtn || !annualBtn) return;

  function setPeriod(period) {
    const isAnnual = period === "annual";
    section.classList.toggle("pricing--annual", isAnnual);
    monthlyBtn.setAttribute("aria-pressed", String(!isAnnual));
    annualBtn.setAttribute("aria-pressed", String(isAnnual));
  }

  monthlyBtn.addEventListener("click", function () {
    setPeriod("monthly");
  });

  annualBtn.addEventListener("click", function () {
    setPeriod("annual");
  });
})();
