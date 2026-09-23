# Rutas de Trujillo

App web de turismo local para Trujillo, Valle del Cauca — Fase 2, curso Aplicaciones Multimedia (UNAD, código 213026).

## Estado actual

- 14 páginas HTML (mínimo exigido: 12) ✅
- 4 rutas × 2 subsecciones cada una ✅
- Bilingüe ES/EN con botón de toggle (persistente por navegador) ✅
- Mapa interactivo (Leaflet + OpenStreetMap) en cada ruta, con marcadores ✅
- Sistema de "sellos" (logros) por experiencia visitada, con barra de progreso ✅
- Página de créditos con referencias en APA ✅

## Pendiente antes de entregar

1. Revisar ortografía y traducción al inglés una vez confirmes el contenido final.
2. Ajustar el zoom/centro del mapa si algún marcador queda muy en el borde de la vista inicial.

## Cómo probarlo localmente

Abre `index.html` directamente en el navegador, o si tienes Python instalado:

```
python3 -m http.server 8000
```

y entra a `http://localhost:8000`.

## Cómo publicarlo (URL pública, requisito del cliente)

### Opción A — GitHub Pages
1. Crea un repositorio nuevo en GitHub y sube todo el contenido de esta carpeta.
2. Ve a **Settings → Pages**, en "Source" elige la rama `main` y la carpeta `/root`.
3. Guarda; GitHub te dará una URL tipo `https://tuusuario.github.io/tu-repo/`.

### Opción B — Netlify
1. Entra a netlify.com, arrastra esta carpeta completa al área de "Deploy manually".
2. Netlify te da una URL pública al instante (puedes personalizar el subdominio).

Cualquiera de las dos cumple el requisito de "acceso libre y sin registros" del cliente.
