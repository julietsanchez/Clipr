/**
 * Resolución de código de idioma para el selector del navbar.
 * @param {unknown} code
 * @returns {'es' | 'en'}
 */
export function resolveDocumentLang(code) {
  if (typeof code !== "string") {
    return "es";
  }
  const c = code.trim().toLowerCase();
  return c === "en" ? "en" : "es";
}

/**
 * @param {unknown} code
 * @returns {'es' | 'en'}
 */
export function resolveLangLabel(code) {
  return resolveDocumentLang(code) === "en" ? "en" : "es";
}
