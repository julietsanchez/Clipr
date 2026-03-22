/**
 * Imágenes del carrusel: archivos en la carpeta `sources/` (rutas relativas al index).
 */
export const HERO_IMAGE_SOURCES = [
  "sources/clip1.png",
  "sources/clip2.png",
  "sources/clip3.png",
  "sources/clip4.png",
  "sources/fondodehero.png",
];

const MIN_PANELS = 8;

/**
 * @param {readonly string[]} sources
 * @param {number} [minCount]
 * @returns {string[]}
 */
export function buildHeroImageList(sources, minCount = MIN_PANELS) {
  if (!Array.isArray(sources) || sources.length === 0) {
    return [];
  }
  const n = Math.max(minCount, sources.length);
  const out = [];
  for (let i = 0; i < n; i += 1) {
    out.push(sources[i % sources.length]);
  }
  return out;
}
