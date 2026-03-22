# Clipr — landing (estático)

## Vista previa

Los módulos ES (`type="module"`) requieren servir los archivos por HTTP (no abrir `index.html` como `file://`).

```bash
cd /ruta/al/proyecto
python3 -m http.server 8080
```

Abre `http://localhost:8080`.

## Verificación

```bash
./scripts/verify.sh
```

## Estructura

- `index.html` — navbar y contenedor principal
- `css/landing.css` — estilos
- `js/navbar-entry.mjs` — menú móvil e idioma
- `js/i18n-nav.mjs` — helpers de idioma (testeados)
