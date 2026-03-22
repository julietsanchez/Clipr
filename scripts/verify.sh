#!/usr/bin/env bash
# Verificación manual/automática del navbar (archivos + tests).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

required=(
  "index.html"
  "favicon.svg"
  "css/landing.css"
  "js/navbar-entry.mjs"
  "js/hero-micro.mjs"
  "js/i18n-nav.mjs"
  "js/hero-sources.mjs"
  "js/hero-carousel.mjs"
  "sources/clip1.png"
  "sources/clip2.png"
  "sources/clip3.png"
  "sources/clip4.png"
  "sources/fondodehero.png"
  "sources/portable/clipr-dashboard-mockup.css"
  "sources/portable/clipr-dashboard-mockup.js"
)

for f in "${required[@]}"; do
  if [[ ! -f "$f" ]]; then
    echo "ERROR: falta $f"
    exit 1
  fi
  echo "OK: $f"
done

echo "Ejecutando tests Node..."
node --test tests/i18n-nav.test.mjs tests/hero-carousel.test.mjs
echo "Verificación completada."
