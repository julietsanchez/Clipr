/**
 * Clipr dashboard mockup – textos EN/ES (opcional)
 * Incluye el script después del HTML del mockup.
 */
(function () {
  const STRINGS = {
    en: {
      '.clipr-mini-stat:nth-child(1) .clipr-mini-stat-label': 'Total plays',
      '.clipr-mini-stat:nth-child(2) .clipr-mini-stat-label': 'Clips cut',
      '.clipr-clip-card:nth-child(1) .clipr-clip-title': 'Ace + spray transfer — ranked',
      '.clipr-clip-card:nth-child(1) .clipr-clip-meta': 'Highlight · 2.3K plays',
      '.clipr-clip-card:nth-child(2) .clipr-clip-title': 'Facecam tilt → insane comeback',
      '.clipr-clip-card:nth-child(2) .clipr-clip-meta': '9:16 clip · 5.1K',
      '.clipr-clip-card:nth-child(3) .clipr-clip-title': '1v4 clutch — OT steal',
      '.clipr-clip-card:nth-child(3) .clipr-clip-meta': 'Shorts viral · 8.7K',
      '.clipr-floating-card--1 .clipr-floating-text': 'Live on TikTok FYP',
      '.clipr-floating-card--2 .clipr-floating-text': '+12.4K in 24h',
      '.clipr-floating-card--3 .clipr-floating-text': 'Export 9:16 · ready',
    },
    es: {
      '.clipr-mini-stat:nth-child(1) .clipr-mini-stat-label': 'Plays totales',
      '.clipr-mini-stat:nth-child(2) .clipr-mini-stat-label': 'Clips cortados',
      '.clipr-clip-card:nth-child(1) .clipr-clip-title': 'Ace + spray — ranked',
      '.clipr-clip-card:nth-child(1) .clipr-clip-meta': 'Highlight ranked · 2.3K',
      '.clipr-clip-card:nth-child(2) .clipr-clip-title': 'Facecam: tilt → comeback',
      '.clipr-clip-card:nth-child(2) .clipr-clip-meta': 'Clip vertical 9:16 · 5.1K',
      '.clipr-clip-card:nth-child(3) .clipr-clip-title': 'Clutch 1v4 en overtime',
      '.clipr-clip-card:nth-child(3) .clipr-clip-meta': 'Short viral · 8.7K',
      '.clipr-floating-card--1 .clipr-floating-text': 'En el FYP de TikTok',
      '.clipr-floating-card--2 .clipr-floating-text': '+12.4K en 24h',
      '.clipr-floating-card--3 .clipr-floating-text': 'Export 9:16 listo',
    },
  };

  function applyLang(lang) {
    const pack = STRINGS[lang] || STRINGS.en;
    Object.entries(pack).forEach(function ([selector, text]) {
      const el = document.querySelector(selector);
      if (el) el.textContent = text;
    });
  }

  window.cliprDashboardMockup = {
    setLang: applyLang,
  };

  const saved = (function () {
    try {
      return localStorage.getItem('clipr_mockup_lang');
    } catch {
      return null;
    }
  })();

  const browser =
    (navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en';
  applyLang(saved === 'es' || saved === 'en' ? saved : browser);
})();
