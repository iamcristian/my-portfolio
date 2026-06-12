# 🚀 Plan de Mejoras — cristianarando.dev

> Documento vivo de mejoras técnicas, nuevas funcionalidades, corrección de errores potenciales y refactorización
> para mantener el proyecto escalable, profesional y hermoso a futuro.
>
> **Última revisión:** 2026-06-12
> **Estado:** ✅ Plan aprobado por el usuario — listo para desarrollo

---

## 📋 Leyenda de estados

| Icono | Estado     | Significado                                       |
| ----- | ---------- | ------------------------------------------------- |
| ✅    | Aprobado   | Aprobado para implementar                         |
| ❌    | Descartado | Descartado por el usuario                         |
| ⏸️    | Pospuesto  | Interesante pero dejado para después              |
| 🔍    | Investigar | Requiere investigación o pruebas antes de decidir |
| ✔️    | Ya existe  | Ya está implementado o resuelto                   |

---

## 📋 Tabla de contenidos

- [🔧 Refactorización & Violaciones DRY](#-refactorización--violaciones-dry)
- [🐛 Bugs Potenciales & Problemas Técnicos](#-bugs-potenciales--problemas-técnicos)
- [🏗️ Arquitectura & Estructura](#️-arquitectura--estructura)
- [🔍 SEO & Performance](#-seo--performance)
- [✨ Nuevas Funcionalidades](#-nuevas-funcionalidades)
- [🎨 UI/UX Enhancements](#-uiux-enhancements)
- [🌐 i18n & Contenido](#-i18n--contenido)
- [🛡️ Seguridad & DevOps](#️-seguridad--devops)
- [📱 PWA & Mobile](#-pwa--mobile)

---

## 🔧 Refactorización & Violaciones DRY

### 1. ✅ `getLang()` repetido en TODOS los componentes (Prioridad: Alta)

El patrón `getLang(Astro.currentLocale || Astro.params.lang)` se repite en **22 archivos** (cada componente lo calcula por su cuenta). Esto es una violación DRY significativa.

**Solución aprobada:** Usar middleware con `Astro.locals`:

```ts
// src/middleware.ts
export function onRequest({ locals, currentLocale }, next) {
  locals.lang = getLang(currentLocale);
  return next();
}
```

Luego cada componente usaría `Astro.locals.lang` en vez de recalcularlo.

**Archivos afectados:** `Header.astro`, `Footer.astro`, `SEO.astro`, `StructuredData.astro`, `Hero.astro`, `About.astro`, `Blog.astro`, `Education.astro`, `Experience.astro`, `Projects.astro`, `Skills.astro`, `ThemeController.astro`, `LanguageController.astro`, `LagrangeSimulation.astro`, `BlogCard.astro`, `ProjectCard.astro`, `AcademicCard.astro`, `CertificationCard.astro`, `TimelineItem.astro`

---

### 2. ✅ Lógica duplicada en `SEO.astro` y `StructuredData.astro` (Prioridad: Alta)

Ambos componentes calculan **exactamente las mismas cosas** de forma independiente:

- `siteUrl`, `cleanSiteUrl`, `canonicalUrl`
- `isHome`, `isProjects`, `isBlogIndex` (detección de tipo de página)
- Resolución de `title` y `description` con fallbacks
- Resolución de `imageUrl`

**Solución aprobada:** Extraer la lógica compartida a un helper `src/utils/seo.ts`:

```ts
// src/utils/seo.ts
export function resolveSEOData(props, astroContext) {
  // Calcula siteUrl, canonicalUrl, isHome, isProjects, etc.
  // Resuelve title, description, imageUrl con fallbacks
  return { title, description, canonicalUrl, ... };
}
```

---

### 3. ✅ "Cristian Arando" hardcodeado en múltiples archivos (Prioridad: Media)

El nombre aparece hardcodeado en **17 instancias** fuera de `site.ts`:

- `StructuredData.astro` (líneas 148, 176, 194, 203) — debería usar `SITE.name`
- `news-sitemap.xml.ts` (línea 36) — debería usar `SITE.name`
- `content.config.ts` (línea 19) — debería usar `SITE.name`
- `rss.xml.ts` (línea 29) — fallback que debería usar `SITE.name`
- `StructuredData.astro` email hardcodeado (línea 151) — debería usar `SITE.email`

**Solución:** Reemplazar todas las instancias hardcodeadas con `SITE.name`, `SITE.email`, etc.

---

### 4. ✅ URL `"https://cristianarando.dev"` como fallback redundante (Prioridad: Baja)

Aparece como tercer fallback en `SEO.astro:30` y `StructuredData.astro:30`:

```ts
const siteUrl = Astro.site?.origin || SITE.url || "https://cristianarando.dev";
```

`SITE.url` ya contiene esa URL. El tercer fallback es innecesario. Eliminar.

---

### 5. ✅ Mapa de locales duplicado (Prioridad: Media)

La lista de locales `["en", "es", "de", "ru", "ja"]` está hardcodeada en:

- `SEO.astro` (línea 85)
- `StructuredData.astro` (línea 79)
- `astro.config.mjs` (línea 62)
- Sitemap i18n config (línea 47-53)

**Solución:** Importar `locales` del módulo `i18n/ui.ts` (ya exporta `locales`) en vez de redeclarar la lista.

---

### 6. ✅ `OG_LOCALES` map duplicable (Prioridad: Baja)

El mapping `en → en_US`, `es → es_ES`, etc. en `SEO.astro` es el mismo que se usa en el sitemap. Mover a `config/site.ts` o `i18n/ui.ts` (el que sea más viable).

---

### 7. ✅ Sorting logic duplicada en Blog y Projects (Prioridad: Media)

La lógica de sort featured-first + date-desc aparece en:

- `BlogManager.astro` (líneas 25-30)
- `ProjectsManager.astro` (líneas 18-23)
- `list-manager.ts` (líneas 200-226)

La lógica del server-side sort es redundante cuando `list-manager.ts` ya re-ordena client-side.

---

### 8. ✅ `getStaticPaths()` inconsistente entre páginas (Prioridad: Baja)

- `[lang]/rss.xml.ts` y `[lang]/news-sitemap.xml.ts` definen `getStaticPaths()` manualmente con `Object.keys(languages).map(...)`.
- Las demás páginas usan `getLocaleStaticPaths()` de `config/paths.ts`.

**Solución:** Usar `getLocaleStaticPaths()` consistentemente en todos los archivos.

---

## 🐛 Bugs Potenciales & Problemas Técnicos

### 1. ✅ ⚠️ Event Listeners no se limpian en View Transitions (Prioridad: Alta)

Los scripts en `Hero.astro`, `Blog.astro`, `BlogPostDetail.astro`, y `LagrangeSimulation.astro` usan `addEventListener` en `astro:after-swap` para re-inicializar, pero **nunca limpian** los listeners previos. Con navegación SPA via View Transitions:

- `Hero.astro`: El mousemove handler se acumula cada vez que se navega de vuelta al home.
- `Blog.astro`: El carousel autoplay crea intervalos duplicados.
- `BlogPostDetail.astro`: Usa `astro:page-load` en vez de `astro:after-swap` (inconsistente con los demás componentes).

> **Instrucción del usuario:** Implementar la solución más viable y profesional.

**Solución aprobada:** Usar `AbortController` para cleanup:

```ts
let cleanup: (() => void) | null = null;
function init() {
  cleanup?.();
  const controller = new AbortController();
  hero.addEventListener("mousemove", handler, { signal: controller.signal });
  cleanup = () => controller.abort();
}
```

---

### 2. ✅ ⚠️ `ProjectCard.astro` imagen fallback no tipada (Prioridad: Media)

Cuando `imageImport` es `undefined` (imagen no encontrada en glob), el fallback pasa `project.image` (string) directamente a `<Image>`, lo cual fallaría en build porque Astro's Image component requiere `ImageMetadata` para imágenes locales. Solo funciona si la string es una URL absoluta externa.

**Solución:** Agregar validación explícita o usar un placeholder image como fallback:

```ts
const resolvedImage = imageImport
  ? await imageImport()
  : { default: fallbackImage };
```

---

### 3. ✅ ⚠️ `list-manager.ts` modifica el DOM al re-ordenar (Prioridad: Media)

`container.appendChild(c)` en línea 248 mueve los nodos DOM al final del container. Si un usuario filtra, cambia de página y vuelve, el orden DOM original se pierde. Esto afecta la reproducibilidad del estado.

**Solución:** Clonar el array inicial o usar `display: none/block` + CSS `order` en vez de mover nodos.

---

### 4. ✅ Giscus hardcodea título "Comments" inline (Prioridad: Baja)

`Giscus.astro` tiene un ternario inline para el título "Comments/Comentarios/Kommentare/...". Debería usar el sistema i18n existente con `t("blog.comments")`.

---

### 5. ✅ `webmanifest` tiene `theme_color` discrepante (Prioridad: Baja)

`site.webmanifest` tiene `theme_color: "#570df8"` (violeta daisyUI default), pero el theme del sitio usa una paleta monocromática. El `Layout.astro` también tiene `<meta name="theme-color" content="#570df8">`. Debería coincidir con los colores reales del tema.

---

### 6. ❌ `pnpm-workspace.yaml` sin propósito claro (Prioridad: Baja)

> **Decisión:** No tocar. El sistema lo creó al instalar un paquete y es útil.

---

### 7. ✔️ `README.md` es el template default de Astro (Prioridad: Media)

> **Estado:** Ya resuelto. El README ya fue actualizado con documentación real del proyecto.

---

## 🏗️ Arquitectura & Estructura

### 1. ✔️ Agregar path aliases en `tsconfig.json` (Prioridad: Alta)

Los imports son relativos y profundos (`../../../i18n/utils`, `../../../config/site`). Agregar aliases:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@layouts/*": ["./src/layouts/*"],
      "@i18n/*": ["./src/i18n/*"],
      "@config/*": ["./src/config/*"],
      "@utils/*": ["./src/utils/*"],
      "@types/*": ["./src/types/*"],
      "@assets/*": ["./src/assets/*"]
    }
  }
}
```

---

### 2. ✔️ Separar la lógica i18n de imports manuales (Prioridad: Media)

`i18n/utils.ts` importa **manualmente** cada archivo de locale (30+ imports). Cuando se añada un nuevo módulo de traducción, hay que editarlo en 2+ archivos.

**Solución aprobada:** Usar `import.meta.glob` para auto-importar los módulos. ~~Barrel files~~ descartados por mala práctica.

> **Condición:** Solo si no afecta rendimiento ni trae problemas.

---

### 3. ✔️ Crear un `BlogLayout.astro` (Prioridad: Media) ⚠️

Actualmente `[slug].astro` arma la estructura `Layout > Header > BlogPostDetail > Footer` manualmente. Crear un layout dedicado para blog posts reduce duplicación y facilita cambios globales.

> **⚠️ Precaución:** Proceder con cuidado en la separación para no romper nada.

---

### 4. ❌ Mover proyectos a Content Collections (Prioridad: Alta → Descartado)

Los proyectos están definidos como arrays TypeScript en archivos de locale. La propuesta era migrar a Content Collections con MDX.

> **Decisión:** Descartado. Para cards simples con redirección directa a GitHub, no tiene sentido crear MDX como el blog. Los arrays TS son la solución correcta para este caso de uso.

---

### 5. ✔️ Considerar Astro View Transitions (Prioridad: Media)

El proyecto registra eventos `astro:after-swap` pero **no usa `<ViewTransitions />`** en el layout. Esto significa que esos event listeners nunca se disparan (la navegación es full-page reload).

**Solución aprobada:** Añadir `<ViewTransitions />` en `Layout.astro` para SPA-like navigation (más beneficioso que simplemente eliminar código muerto, y los listeners ya están escritos).

---

## 🔍 SEO & Performance

### 1. ✅ Implementar `astro:check` en CI/CD (Prioridad: Alta)

Agregar `pnpm astro check` al pipeline de build para detectar errores de tipos y HTML inválido antes del deploy.

Agregar al `package.json`:

```json
"scripts": {
  "check": "astro check",
  "lint": "prettier --check .",
  "lint:fix": "prettier --write ."
}
```

---

### 2. ✅ Agregar un `404.astro` personalizado (Prioridad: Alta)

No existe una página 404 personalizada. Crear `src/pages/404.astro` con diseño que mantenga la marca, link al home, y sugerencias útiles.

> **Instrucción del usuario:** Hacer algo genial y profesional. 🎉

---

### 3. ✅ Optimizar LCP con `<link rel="preload">` (Prioridad: Media)

La imagen hero (`me.webp`) y la fuente principal deberían tener preload hints:

```html
<link rel="preload" as="image" href="/me.webp" />
<link rel="preload" as="font" href="/fonts/..." crossorigin />
```

---

### 4. ✅ Agregar Google Fonts — Inter (Prioridad: Media)

> **Decisión:** Usar **Inter** como fuente principal.

El sitio actualmente usa fuentes por defecto del sistema/daisyUI. Agregar Inter para dar una identidad tipográfica más premium.

---

### 5. ✅ Schema.org: Agregar `FAQPage` schema para blog posts con H2s (Prioridad: Baja)

Los blog posts con múltiples H2 se podrían enriquecer con `FAQPage` structured data para ganar rich snippets en Google.

---

### 6. ✅ Agregar `Content-Security-Policy` header (Prioridad: Media)

`vercel.json` tiene buenos headers de seguridad pero falta CSP. Agregar uno restrictivo:

```json
{
  "key": "Content-Security-Policy",
  "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://esm.sh https://giscus.app; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-src https://giscus.app;"
}
```

---

### 7. 🔍 Lazy loading para Giscus (Prioridad: Baja)

El script de Giscus se carga con `async` pero no con un IntersectionObserver. Cargar solo cuando el usuario scrollea hasta los comentarios para mejorar TTI.

> **Nota:** La configuración actual la sugiere Giscus. Implementar solo si es viable técnicamente sin romper la integración.

---

### 8. ✅ Agregar meta tag de `last-modified` en blog posts (Prioridad: Baja)

Para blog posts con `updatedDate`, agregar:

```html
<meta http-equiv="last-modified" content="{updatedDate.toISOString()}" />
```

---

## ✨ Nuevas Funcionalidades

### 1. ✔️ 🔥 Reading Progress Bar (Prioridad: Alta)

Una barra de progreso de lectura en la parte superior de los blog posts. Sutil, premium, anclada al header con animación suave.

```astro
<!-- ReadingProgress.astro -->
<div class="fixed top-0 left-0 h-0.5 bg-primary z-100 transition-all"
     id="reading-progress" style="width: 0%"></div>
```

---

### 2. ✔️ 🔥 Blog Post Share Buttons (Prioridad: Alta)

Botones para compartir artículos en Twitter/X, LinkedIn, WhatsApp, y copiar link. Con animación de "copiado!" cuando se copia el enlace.

---

### 3. ❌ Newsletter / "Subscribe" CTA (Prioridad: Alta → Descartado)

> **Decisión:** Descartado. Las apps de newsletter solo tienen pruebas gratuitas, no es escalable. La opción de `mailto:` con subject pre-llenado sería aceptable si se quiere en el futuro.

---

### 4. ✔️ 🔥 "Related Posts" al final de cada blog post (Prioridad: Alta)

Mostrar 2-3 posts relacionados basados en tags comunes al final de cada artículo. Aumenta el tiempo en sitio y page views.

```ts
const relatedPosts = langPosts
  .filter((p) => p.id !== post.id)
  .filter((p) => p.data.tags.some((tag) => post.data.tags.includes(tag)))
  .slice(0, 3);
```

---

### 5. 🔍 Búsqueda Global con `pagefind` (Prioridad: Alta)

> **Condición del usuario:** Solo implementar si se pueden incluir filtros avanzados para un blog profesional. Si solo es un buscador simple sin filtros, no implementar.

**Pendiente:** Investigar si Pagefind soporta filtros avanzados (por tags, fecha, categoría) compatibles con el sistema actual del `list-manager.ts`.

---

### 6. 🔍 Theme System Enhancement — Auto mode (Prioridad: Media)

Agregar un "Auto" theme option que sigue `prefers-color-scheme` del sistema.

> **Nota:** El usuario ya intentó implementarlo. Verificar si funciona correctamente antes de trabajar en ello.

---

### 7. 🔍 Blog Post "Estimated Reading Time" visual (Prioridad: Media)

Agregar un indicador visual del tiempo de lectura estimado en las cards de blog.

> **Nota:** Verificar si ya está implementado antes de proceder.

---

### 8. ✔️ Página de `/uses` (Prioridad: Media)

Una página estilo `/uses` donde documentar setup, herramientas, hardware, software, y configuraciones. Muy popular en la comunidad dev y excelente para SEO de long-tail keywords.

---

### 9. ✔️ Animaciones de Scroll con `IntersectionObserver` (Prioridad: Media)

Agregar animaciones de entrada (fade-in, slide-up) a las secciones del home page cuando entran en viewport:

```css
.scroll-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}
.scroll-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

### 10. ✔️ "Achievements / Stats" counter animado (Prioridad: Baja)

Los stat values en `About.astro` (years, projects, etc.) podrían tener una animación de counter tipo "counting up" cuando entran en viewport.

---

### 11. ✅ Blog Post Series/Categories (Prioridad: Media)

Permitir agrupar posts en "series" (ej: "Astro Deep Dive Part 1, 2, 3...") con navegación de serie en cada post.

---

### 12. ❌ Testimonials / Recommendations Section (Prioridad: Baja → Descartado)

> **Decisión:** Evitar por ahora. Sin relevancia como junior sin experiencia.

---

### 13. ⏸️ "Now" page (Prioridad: Baja → Pospuesto)

Inspirado en [nownownow.com](https://nownownow.com/about) — una página `/now`.

> **Decisión:** Suena bien pero dejarlo por ahora, es innecesario.

---

### 14. ✔️ Blog Post Copy Code Button (Prioridad: Media)

Agregar un botón "Copy" en cada bloque de código dentro de los blog posts MDX.

---

### 15. ✅ Open Graph Image Generation (Prioridad: Media)

Generar automáticamente OG images dinámicas para cada blog post usando `satori` + `@resvg/resvg-js`.

Cada imagen OG incluirá:

- El título del post
- Los tags
- La imagen hero del post (si existe) como fondo o thumbnail
- El branding del sitio (logo, nombre)

El flujo: en build time, para cada blog post, generar un PNG que combine el diseño con la imagen del post. Si el post no tiene imagen, usar un diseño branded genérico.

> **Decisión del usuario:** "Me encanta, hagámoslo" 🎉

---

### 16. ✔️ RSS Feed mejorado con contenido completo (Prioridad: Baja)

Agregar `content:encoded` con el HTML completo del post para lectores RSS.

> **Nota:** No afecta al rendimiento — el RSS se genera en build time como archivo estático.

---

### 17. ❌ Keyboard Shortcuts (Prioridad: Baja → Descartado)

> **Decisión:** No es necesario.

---

### 18. ❌ JSON Resume Integration (Prioridad: Baja → Descartado)

> **Decisión:** Ya tiene PDFs del CV traducidos a cada idioma. No mejora sobre la solución actual.

---

## 🎨 UI/UX Enhancements

### 1. ✅ Skip Navigation Link (Prioridad: Alta — Accesibilidad)

Agregar un "Skip to main content" link para screen readers y navegación por teclado. **Con i18n** — el texto debe cambiar según el idioma.

```html
<a
  href="#main"
  class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-999 btn btn-primary"
>
  {t("accessibility.skipToContent")}
</a>
```

---

### 2. ❌ Active Nav Link Highlighting (Prioridad: Media → Descartado)

> **Decisión:** No es necesario.

---

### 3. ✅ Smooth Scroll Behavior global (Prioridad: Baja)

Agregar scroll suave. Implementar la opción que técnicamente sea mejor (CSS global o selectivo con `scroll-padding-top`).

---

### 4. ✅ Mejorar la accesibilidad del dropdown (Prioridad: Media)

Los dropdowns de `ThemeController` y `LanguageController` no gestionan el cierre con `Escape` ni el focus trapping.

---

### 5. ✅ Toast/Snackbar para acciones (Prioridad: Baja)

Cuando el usuario copia un link, descarga el CV, o realiza alguna acción, mostrar un toast sutil confirmando la acción.

---

### 6. ✅ Header shrink on scroll (Prioridad: Baja)

Reducir ligeramente la altura del header al hacer scroll hacia abajo para ganar espacio de lectura sin perder la navegación.

---

### 7. ✅ Animación de entrada para el Hero (Prioridad: Baja)

Agregar stagger animations para los elementos del hero (título, subtítulo, CTAs, social links) que aparezcan secuencialmente al cargar la página.

> **⚠️ Condición:** Que no afecte al rendimiento. Debe verse elegante. Si afecta al rendimiento, no implementar.

---

## 🌐 i18n & Contenido

### 1. ✅ Verificar traducciones faltantes por idioma (Prioridad: Alta)

No hay un sistema de validación que detecte si falta una key de traducción en algún idioma.

**Solución:** Crear un script de CI que compare las keys de cada locale contra `en` y reporte las faltantes:

```ts
// scripts/check-i18n.ts
const enKeys = Object.keys(enTranslations);
const missingKeys = enKeys.filter((k) => !deTranslations[k]);
```

---

### 2. ✔️ Blog content faltante en DE, RU, JA (Prioridad: Media)

> **Estado:** Ya resuelto. El usuario obliga a incluir todos los idiomas antes de publicar un post.

---

### 3. ✅ Agregar un indicador de "contenido no disponible en tu idioma" (Prioridad: Media)

Cuando un post no existe en el idioma del usuario, mostrar un banner que sugiera leerlo en el idioma disponible más cercano.

---

### 4. ❌ Soporte RTL futuro (Prioridad: Baja → Descartado)

> **Decisión:** Nunca se necesitará soporte para idiomas RTL.

---

## 🛡️ Seguridad & DevOps

### 1. ❌ Agregar `.env` handling para Giscus (Prioridad: Media → Descartado)

> **Decisión:** Los valores de Giscus son públicos por naturaleza (visibles en el HTML del cliente). Moverlos a `.env` no añade seguridad real. No implementar.

---

### 2. ✅ Implementar CI/CD checks (Prioridad: Alta)

Agregar un pipeline de CI mínimo.

**Solución aprobada:**

```json
// package.json
"scripts": {
  "check": "astro check",
  "lint": "prettier --check .",
  "lint:fix": "prettier --write ."
}
```

En CI usar `pnpm lint` (que internamente ejecuta prettier a través de pnpm).

---

### 3. ❌ Agregar renovate/dependabot (Prioridad: Media → Descartado)

> **Decisión:** No es necesario.

---

### 4. ✔️ Agregar `CONTRIBUTING.md` (Prioridad: Baja)

> **Estado:** Ya existe.

---

## 📱 PWA & Mobile

### 1. ✅ Completar el Web App Manifest (Prioridad: Media)

`site.webmanifest` le faltan:

- Iconos en múltiples tamaños (192x192, 512x512)
- `scope` property
- `screenshots` para la instalación mejorada
- `categories`

```json
{
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" },
    { "src": "/favicon.svg", "sizes": "any", "type": "image/svg+xml" }
  ],
  "scope": "/",
  "categories": ["portfolio", "blog", "technology"]
}
```

---

### 2. ❌ Service Worker básico para offline (Prioridad: Baja → Descartado)

> **Decisión:** No es necesario. Para un sitio estático en Vercel con CDN global, el beneficio es marginal.

---

### 3. ✅ Mejorar responsive del Lagrange Simulation en tablets (Prioridad: Baja)

Actualmente se oculta con `hidden lg:flex`. Considerar mostrar una versión compacta en tablets (md breakpoint).

---

## 📊 Priorización Resumen Final

### ✅ Aprobados — Alta Prioridad (11 items)

| #   | Item                                            | Esfuerzo |
| --- | ----------------------------------------------- | -------- |
| 1   | Refactorizar `getLang()` con middleware         | 🟢 Bajo  |
| 2   | Extraer lógica SEO duplicada a `utils/seo.ts`   | 🟢 Bajo  |
| 3   | Reemplazar strings hardcodeados con `SITE.*`    | 🟢 Bajo  |
| 4   | Path aliases en `tsconfig.json`                 | 🟢 Bajo  |
| 5   | Fix event listeners cleanup (AbortController)   | 🟡 Medio |
| 6   | Página 404 personalizada (genial y profesional) | 🟡 Medio |
| 7   | Reading Progress Bar                            | 🟢 Bajo  |
| 8   | Blog Post Share Buttons                         | 🟡 Medio |
| 9   | Related Posts                                   | 🟡 Medio |
| 10  | CI/CD pipeline (`pnpm lint`)                    | 🟡 Medio |
| 11  | Script validación i18n keys                     | 🟢 Bajo  |

### ✅ Aprobados — Media Prioridad (16 items)

| #   | Item                                                | Esfuerzo |
| --- | --------------------------------------------------- | -------- |
| 12  | Locales map unificado                               | 🟢 Bajo  |
| 13  | Sorting logic deduplication                         | 🟢 Bajo  |
| 14  | `BlogLayout.astro` (⚠️ con cuidado)                 | 🟡 Medio |
| 15  | View Transitions                                    | 🟡 Medio |
| 16  | Google Font Inter                                   | 🟢 Bajo  |
| 17  | Preload hints LCP                                   | 🟢 Bajo  |
| 18  | CSP header                                          | 🟢 Bajo  |
| 19  | Página `/uses`                                      | 🟡 Medio |
| 20  | Scroll animations                                   | 🟡 Medio |
| 21  | Blog Post Series/Categories                         | 🔴 Alto  |
| 22  | Copy Code Button                                    | 🟡 Medio |
| 23  | Skip Navigation i18n                                | 🟢 Bajo  |
| 24  | Dropdown accessibility                              | 🟡 Medio |
| 25  | Contenido no disponible banner                      | 🟡 Medio |
| 26  | `import.meta.glob` para i18n (si no trae problemas) | 🟡 Medio |
| 27  | OG Image Generation (con `satori`)                  | 🟡 Medio |

### ✅ Aprobados — Baja Prioridad (16 items)

| #   | Item                                                  | Esfuerzo |
| --- | ----------------------------------------------------- | -------- |
| 28  | Eliminar fallback URL redundante                      | 🟢 Bajo  |
| 29  | `OG_LOCALES` centralizado                             | 🟢 Bajo  |
| 30  | `getStaticPaths` consistente                          | 🟢 Bajo  |
| 31  | Giscus i18n title                                     | 🟢 Bajo  |
| 32  | Theme color fix                                       | 🟢 Bajo  |
| 33  | FAQPage schema                                        | 🟡 Medio |
| 34  | Last-modified meta                                    | 🟢 Bajo  |
| 35  | RSS con contenido completo                            | 🟡 Medio |
| 36  | Counter animations                                    | 🟡 Medio |
| 37  | Smooth scroll                                         | 🟢 Bajo  |
| 38  | Toast/Snackbar                                        | 🟡 Medio |
| 39  | Header shrink                                         | 🟡 Medio |
| 40  | Hero stagger animations (⚠️ si no afecta rendimiento) | 🟡 Medio |
| 41  | Lagrange tablet responsive                            | 🟢 Bajo  |
| 42  | ProjectCard fallback fix                              | 🟢 Bajo  |
| 43  | list-manager DOM fix                                  | 🟡 Medio |
| 44  | Web App Manifest completo                             | 🟢 Bajo  |

### 🔍 Requieren Investigación (3 items)

| #   | Item                           | Pendiente                                         |
| --- | ------------------------------ | ------------------------------------------------- |
| 1   | Pagefind con filtros avanzados | Implementar solo si soporta filtros profesionales |
| 2   | Theme Auto mode                | Verificar si la implementación existente funciona |
| 3   | Reading Time visual            | Verificar si ya está implementado                 |

### ❌ Descartados (11 items)

| #   | Item                                | Razón                                         |
| --- | ----------------------------------- | --------------------------------------------- |
| 1   | Newsletter/Subscribe CTA            | Apps de pago, no escalable                    |
| 2   | Testimonials Section                | Sin relevancia como junior                    |
| 3   | Keyboard Shortcuts                  | Sin necesidad percibida                       |
| 4   | JSON Resume                         | Ya tiene PDFs por idioma                      |
| 5   | Active Nav Highlighting             | No necesario                                  |
| 6   | Soporte RTL                         | Nunca se necesitará                           |
| 7   | Renovate/Dependabot                 | No necesario                                  |
| 8   | Proyectos a Content Collections MDX | Overkill para cards simples con link a GitHub |
| 9   | Giscus `.env` handling              | Valores ya públicos, sin valor añadido        |
| 10  | Service Worker offline              | Beneficio marginal con Vercel CDN             |
| 11  | pnpm-workspace.yaml                 | No tocar — útil y creado por el sistema       |

### ⏸️ Pospuestos (1 item)

| #   | Item          | Razón                                  |
| --- | ------------- | -------------------------------------- |
| 1   | Página `/now` | Interesante pero innecesario por ahora |

### ✔️ Ya Resueltos (15 items)

| #   | Item                                                                 |
| --- | -------------------------------------------------------------------- |
| 1   | README.md actualizado                                                |
| 2   | Blog content en todos los idiomas                                    |
| 3   | CONTRIBUTING.md                                                      |
| 4   | Path aliases en `tsconfig.json`                                      |
| 5   | Separación de lógica i18n con `import.meta.glob`                     |
| 6   | Creación de `BlogLayout.astro`                                       |
| 7   | Integración de Astro ClientRouter (View Transitions)                 |
| 8   | Reading Progress Bar en artículos de blog                            |
| 9   | Botones para compartir en redes sociales y copiar enlace             |
| 10  | Artículos relacionados en base a etiquetas en BlogPostDetail         |
| 11  | Botón de copiar código automático en bloques de código               |
| 12  | Animaciones de Scroll con IntersectionObserver                       |
| 13  | Animación de conteo ascendente en tarjetas de logros/estadísticas    |
| 14  | Creación de página dinámica de herramientas/configuración `/uses`    |
| 15  | Feed RSS mejorado con contenido HTML completo compilado y sanitizado |

---

## ✅ Quick Wins (Se pueden hacer hoy)

1. [x] Reemplazar todos los `"Cristian Arando"` hardcodeados con `SITE.name`
2. [x] Reemplazar emails hardcodeados con `SITE.email` en StructuredData
3. [x] Eliminar el tercer fallback URL redundante en SEO y StructuredData
4. [x] Importar `locales` de `i18n/ui.ts` en vez de redeclarar el array
5. [x] Usar `getLocaleStaticPaths()` en `rss.xml.ts` y `news-sitemap.xml.ts`
6. [ ] Agregar `scroll-behavior: smooth` al CSS global
7. [ ] Agregar Skip Navigation link en `Layout.astro` (con i18n)
8. [x] Mover el título de "Comments" en Giscus al sistema i18n
9. [x] Corregir `theme_color` en webmanifest para que coincida con el tema real

---

> 💡 Este documento debe actualizarse conforme se implementen las mejoras.
> Marcar items como completados `[x]` y agregar nuevas ideas conforme surjan.
