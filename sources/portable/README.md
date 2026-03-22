# Clipr – Dashboard mockup (portable)

Incluye el **mockup del panel** (header tipo ventana, sidebar, mini-stats, lista de clips) y las **3 tarjetas flotantes** (TikTok, Instagram, YouTube), listo para otro proyecto.

## Archivos

| Archivo | Uso |
|---------|-----|
| `clipr-dashboard-mockup.html` | Demo completa (abre en el navegador) |
| `clipr-dashboard-mockup.css` | Estilos (prefijo `clipr-` para no chocar con tu CSS) |
| `clipr-dashboard-mockup.js` | Opcional: textos EN/ES y `window.cliprDashboardMockup.setLang('en'|'es')` |

## Integración rápida

1. Copia **CSS** y **JS** a tu proyecto (o pega el contenido en tus bundles).
2. En el `<head>` de tu página, enlaza **Font Awesome 6** (igual que en el HTML de demo).
3. Copia el bloque HTML entre los comentarios `COPIA DESDE AQUÍ` / `FIN COPIA` de `clipr-dashboard-mockup.html`.
4. Ajusta rutas: `href="./clipr-dashboard-mockup.css"` y `src="./clipr-dashboard-mockup.js"`.

## Dependencias

- **Font Awesome 6.5+** (clases `fas`, `fab`).
- Imágenes de clips: URLs de Pexels por defecto; sustituye por las tuyas.

## Notas

- Las clases usan prefijo **`clipr-`** para no pisar `.hero-visual`, `.mini-stat`, etc. de otros sitios.
- En pantallas &lt; 640px las floating cards pasan a flujo vertical (sin solapamiento).
- Si no necesitas i18n, **no** incluyas el JS; deja los textos fijos en el HTML.
