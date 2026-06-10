# 🔍 Plan SEO Completo — Portfolio Astro Multilingüe

> **Fecha del análisis:** Junio 2026  
> **Branch sugerida:** `refactor/seo-optimization`  
> **Prioridad:** Alta — Implementar antes de registrar en Google Search Console  
> **Estimado:** ~4-6 horas de trabajo total (todas las fases)

---

## Tabla de Contenidos

- [Auditoría del Estado Actual](#auditoría-del-estado-actual)
- [Fase 1 — JSON-LD Structured Data](#fase-1--json-ld-structured-data-mayor-impacto-en-google)
- [Fase 2 — Sitemap Avanzado](#fase-2--sitemap-avanzado)
- [Fase 3 — Content Schema & SEO Enhancements](#fase-3--content-schema--seo-component-enhancements)
- [Fase 4 — Technical SEO & Performance](#fase-4--technical-seo--performance)
- [Fase 5 — Google News & Discover Eligibility](#fase-5--google-news--discover-eligibility)
- [Fase 6 — Google Search Console & Monitoring](#fase-6--google-search-console--monitoring)
- [Resumen de Archivos por Fase](#resumen-de-archivos-por-fase)
- [Verification Plan](#verification-plan)
- [Preguntas Abiertas](#preguntas-abiertas)

---

## Auditoría del Estado Actual

### ✅ Lo que ya está bien hecho

| Feature                                                          | Status | Archivo                                         |
| ---------------------------------------------------------------- | ------ | ----------------------------------------------- |
| Meta `<title>` dinámico por tipo de página                       | ✅     | `src/components/SEO.astro`                      |
| Meta `description` localizada                                    | ✅     | `src/components/SEO.astro`                      |
| Canonical URL                                                    | ✅     | `src/components/SEO.astro` (línea ~30)          |
| `hreflang` alternates (con filtrado inteligente para blog posts) | ✅     | `src/components/SEO.astro` (líneas 82-111)      |
| `x-default` hreflang                                             | ✅     | `src/components/SEO.astro` (línea 134)          |
| Open Graph completo (og:type, og:image, og:locale)               | ✅     | `src/components/SEO.astro` (líneas 144-159)     |
| Twitter/X cards (`summary_large_image`)                          | ✅     | `src/components/SEO.astro` (líneas 180-188)     |
| `article:published_time`, `article:author`, `article:tag`        | ✅     | `src/components/SEO.astro` (líneas 161-178)     |
| RSS feeds multilingüe (`/en/rss.xml`, `/es/rss.xml`, etc.)       | ✅     | `src/pages/[lang]/rss.xml.ts`                   |
| RSS autodiscovery `<link>` en `<head>`                           | ✅     | `src/components/SEO.astro` (líneas 136-142)     |
| `robots.txt` con sitemap                                         | ✅     | `public/robots.txt`                             |
| `@astrojs/sitemap` integrado                                     | ✅     | `astro.config.mjs` (línea 10)                   |
| `og:locale:alternate` para idiomas alternativos                  | ✅     | `src/components/SEO.astro` (líneas 152-158)     |
| Blog post pasa `type="article"` al Layout                        | ✅     | `src/pages/[lang]/blog/[slug].astro` (línea 27) |

### 🔴 Lo que falta (crítico para Google News/Discover/indexación individual)

| Gap                                                                                                  | Impacto    | Prioridad | Fase |
| ---------------------------------------------------------------------------------------------------- | ---------- | --------- | ---- |
| **Zero JSON-LD structured data** — No hay `<script type="application/ld+json">` en ninguna página    | 🔴 Crítico | Máxima    | 1    |
| **Sin `BlogPosting` schema** — Google no puede identificar posts como artículos de blog individuales | 🔴 Crítico | Máxima    | 1    |
| **Sin `BreadcrumbList` schema** — No hay migas de pan estructuradas para resultados de búsqueda      | 🟡 Alto    | Alta      | 1    |
| **Sin `Person`/`ProfilePage` schema** — Google no identifica el Home como página de autor            | 🟡 Alto    | Alta      | 1    |
| **Sin `WebSite` schema con `SearchAction`** — No habilita sitelinks search box en Google             | 🟢 Medio   | Media     | 1    |
| **Sitemap sin customización** — Usa `sitemap()` sin `serialize`, no controla `lastmod`/`priority`    | 🟡 Alto    | Alta      | 2    |
| **Sin `updatedDate` en blog schema** — No hay `article:modified_time` (freshness signal)             | 🟡 Alto    | Alta      | 3    |
| **Sin `author` field en blog frontmatter** — Google valora autor explícito por post                  | 🟢 Medio   | Media     | 3    |
| **Sin Web App Manifest** — No hay `site.webmanifest` para PWA signals                                | 🟢 Medio   | Media     | 4    |
| **Sin headers de seguridad** — No se configuran para el hosting provider                             | 🟢 Medio   | Media     | 4    |
| **Header `<header>` sin `<nav>` semántico** — La navegación no usa `<nav>` wrapper                   | 🟢 Medio   | Media     | 4    |
| **Sin Google News Sitemap** — Sitemap especial para ser considerado fuente de noticias               | 🟡 Alto    | Alta      | 5    |
| **Sin `article:modified_time`** — Falta en SEO.astro para artículos                                  | 🟡 Alto    | Alta      | 3    |
| **Sin `og:image:width`/`og:image:height`** — Social crawlers no saben tamaño de imagen               | 🟢 Medio   | Baja      | 3    |
| **Sin `max-image-preview:large`** — Google Discover no muestra thumbnails grandes                    | 🟡 Alto    | Alta      | 5    |

---

## Fase 1 — JSON-LD Structured Data (Mayor Impacto en Google)

> ⚠️ **Esta fase es la más crítica.** Sin JSON-LD, Google no puede mostrar blog posts como rich results,
> no aparecen como artículos individuales en Google News/Discover, y pierdes el Knowledge Panel potencial.

### ¿Qué es JSON-LD y por qué importa?

JSON-LD (JavaScript Object Notation for Linked Data) es el formato que Google recomienda para datos estructurados.
Se inserta como `<script type="application/ld+json">` en el `<head>` de cada página. Google lee este script
para entender **qué tipo de contenido es la página** y mostrar rich results (snippets enriquecidos) en la búsqueda.

**Sin JSON-LD:** Google trata tu blog como una SPA genérica.  
**Con JSON-LD:** Google identifica cada post como un artículo individual indexable con autor, fecha, imagen, etc.

### Archivo NUEVO: `src/components/StructuredData.astro`

Crear un componente que genere `<script type="application/ld+json">` dinámicamente según el tipo de página.
Se insertará dentro de `<head>` vía el Layout.

El componente debe recibir props para determinar el tipo de schema y generará los siguientes schemas:

#### 1. `BlogPosting` — Para cada `/[lang]/blog/[slug]`

Este schema es **el más importante** para que tus blogs aparezcan como artículos individuales en Google.

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Web Security Best Practices Every Developer Should Know",
  "description": "Essential security practices for web developers...",
  "image": "https://cristianarando.vercel.app/_astro/security-best-practices.xxx.png",
  "datePublished": "2025-03-10T00:00:00.000Z",
  "dateModified": "2025-03-15T00:00:00.000Z",
  "author": {
    "@type": "Person",
    "name": "Cristian Arando",
    "url": "https://cristianarando.vercel.app/en/",
    "sameAs": [
      "https://github.com/iamcristian",
      "https://linkedin.com/in/cristianarando"
    ]
  },
  "publisher": {
    "@type": "Person",
    "name": "Cristian Arando",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cristianarando.vercel.app/favicon.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://cristianarando.vercel.app/en/blog/web-security-best-practices/"
  },
  "wordCount": 1200,
  "articleSection": "Technology",
  "keywords": ["security", "owasp", "backend", "best-practices"],
  "inLanguage": "en"
}
```

> **¿Por qué esto es clave para aparecer como BBC/noticias?** Google usa `BlogPosting` / `NewsArticle` schema
> para identificar contenido individual indexable. Sin esto, Google trata tu blog como una página genérica
> en lugar de una fuente de artículos individuales.

#### 2. `BreadcrumbList` — Para TODAS las páginas

Genera migas de pan visibles en los resultados de Google (ej: `Home > Blog > Web Security Best Practices`).

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://cristianarando.vercel.app/en/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://cristianarando.vercel.app/en/blog/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Web Security Best Practices"
    }
  ]
}
```

Lógica de generación según la ruta:

- **Home** (`/en/`): Solo `Home`
- **Blog index** (`/en/blog/`): `Home > Blog`
- **Blog post** (`/en/blog/slug/`): `Home > Blog > Título del Post`
- **Projects** (`/en/projects/`): `Home > Projects`

#### 3. `ProfilePage` + `Person` — Para el Home (`/[lang]/`)

Identifica tu Home como una página de perfil profesional con toda tu info.

```json
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Cristian Arando",
    "jobTitle": "Full Stack Software Developer",
    "url": "https://cristianarando.vercel.app",
    "email": "crisarandosyse@gmail.com",
    "sameAs": [
      "https://github.com/iamcristian",
      "https://linkedin.com/in/cristianarando"
    ],
    "knowsLanguage": ["en", "es", "de"],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Universidad Mayor de San Simón"
    }
  }
}
```

#### 4. `CollectionPage` — Para `/[lang]/blog` y `/[lang]/projects`

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Blog",
  "description": "Articles about web development, security, and technology",
  "url": "https://cristianarando.vercel.app/en/blog/",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Cristian Arando"
  }
}
```

#### 5. `WebSite` con `SearchAction` — Solo en Home

Habilita la posibilidad de que Google muestre un search box directamente en los sitelinks.

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Cristian Arando",
  "url": "https://cristianarando.vercel.app",
  "inLanguage": ["en", "es", "de", "ru", "ja"],
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://cristianarando.vercel.app/en/blog/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### Archivos a MODIFICAR en esta fase

**`src/layouts/Layout.astro`:**

- Importar y renderizar `<StructuredData />` en el `<head>`, pasándole las mismas props que `<SEO />`
- Agregar nuevas props al interface: `structuredDataType`, `wordCount`, `updatedDate`

**`src/pages/[lang]/blog/[slug].astro`:**

- Calcular `wordCount` del body del post y pasarlo como prop
- Pasar `updatedDate` del frontmatter (si existe)

**`src/pages/[lang]/index.astro`:**

- No necesita cambios de props, el componente StructuredData detecta el Home automáticamente

**`src/pages/[lang]/blog/index.astro` y `src/pages/[lang]/projects/index.astro`:**

- No necesitan cambios de props, StructuredData detecta CollectionPage por la URL

---

## Fase 2 — Sitemap Avanzado

### ¿Qué mejora?

Actualmente `@astrojs/sitemap` genera un sitemap básico sin `priority`, `changefreq`, ni `lastmod`.
Esto significa que Google trata todas las páginas con la misma importancia.

### Archivo a MODIFICAR: `astro.config.mjs`

Configurar `@astrojs/sitemap` con opciones avanzadas:

```js
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://cristianarando.vercel.app",
  integrations: [
    mdx(),
    sitemap({
      // Filtrar páginas que no deben aparecer en el sitemap
      filter: (page) =>
        !page.includes("/rss.xml") && !page.includes("/news-sitemap"),

      // Personalizar cada entrada del sitemap
      serialize: (item) => {
        // Blog posts individuales: alta prioridad
        if (
          item.url.includes("/blog/") &&
          !item.url.endsWith("/blog/") &&
          !item.url.endsWith("/blog")
        ) {
          return { ...item, changefreq: "monthly", priority: 0.8 };
        }
        // Home pages: máxima prioridad
        if (item.url.match(/\/[a-z]{2}\/$/)) {
          return { ...item, changefreq: "weekly", priority: 1.0 };
        }
        // Blog index, projects listing
        if (
          item.url.endsWith("/blog") ||
          item.url.endsWith("/blog/") ||
          item.url.endsWith("/projects") ||
          item.url.endsWith("/projects/")
        ) {
          return { ...item, changefreq: "weekly", priority: 0.7 };
        }
        // Resto
        return { ...item, priority: 0.5 };
      },

      // Configuración i18n para generar <xhtml:link rel="alternate" hreflang="...">
      // dentro del sitemap XML automáticamente
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          es: "es-ES",
          de: "de-DE",
          ru: "ru-RU",
          ja: "ja-JP",
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "de", "ru", "ja"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});
```

> **Nota:** `changefreq` y `priority` son señales para crawlers. Google oficialmente dice que los ignora,
> pero **Bing, Yandex, y otros** sí los usan. El `i18n` option genera automáticamente
> `<xhtml:link rel="alternate" hreflang="...">` dentro del sitemap XML, reforzando tus hreflang tags.

---

## Fase 3 — Content Schema & SEO Component Enhancements

### Archivo a MODIFICAR: `src/content.config.ts`

Agregar campos opcionales al schema del blog:

```ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/blog",
    generateId: ({ entry }) => {
      return entry.replace(/\.[^/.]+$/, "");
    },
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      updatedDate: z.coerce.date().optional(), // NUEVO: señal de frescura para Google
      author: z.string().default("Cristian Arando"), // NUEVO: autor explícito por post
      tags: z.array(z.string()).default([]),
      image: image(),
      imageAlt: z.string().optional(), // NUEVO: alt text explícito para OG
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
      lang: z.string(),
      slug: z.string(),
    }),
});

export const collections = { blog };
```

### Archivo a MODIFICAR: `src/components/SEO.astro`

Agregar las siguientes mejoras al componente SEO:

1. **`article:modified_time`** — Cuando se pasa `updatedDate`:

```html
{type === "article" && updatedDate && (
<meta property="article:modified_time" content="{updatedDate.toISOString()}" />
)}
```

2. **`og:image:width` / `og:image:height`** — Dimensiones de la imagen OG:

```html
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

3. Agregar `updatedDate` al interface de Props y destructurarlo

### Archivos a MODIFICAR: Todos los blog posts existentes

Agregar `updatedDate` y `imageAlt` al frontmatter de los 4 posts × 5 idiomas (20 archivos):

Ejemplo para `src/content/blog/en/web-security-best-practices.mdx`:

```yaml
---
title: "Web Security Best Practices Every Developer Should Know"
description: "Essential security practices for web developers..."
date: 2025-03-10
updatedDate: 2025-03-15 # NUEVO — solo si realmente fue actualizado
author: "Cristian Arando" # NUEVO — explícito (tiene default, pero es buena práctica)
imageAlt: "Shield icon representing web security best practices" # NUEVO
tags: ["security", "owasp", "backend", "best-practices"]
image: "../../../assets/images/blog/security-best-practices.png"
featured: true
draft: false
lang: en
slug: web-security-best-practices
---
```

Posts a actualizar:

- `src/content/blog/{en,es,de,ru,ja}/hello-world.mdx`
- `src/content/blog/{en,es,de,ru,ja}/astro-vs-nextjs.mdx`
- `src/content/blog/{en,es,de,ru,ja}/my-final-project.mdx`
- `src/content/blog/{en,es,de,ru,ja}/web-security-best-practices.mdx`

---

## Fase 4 — Technical SEO & Performance

### Archivo a MODIFICAR: `src/components/Header.astro`

El `<header>` contiene la navegación pero no está envuelta en un `<nav>` semántico.
Google y lectores de pantalla usan `<nav>` para identificar la navegación principal.

**Cambio:** Reemplazar el `<div class="navbar ...">` por `<nav class="navbar ...">`:

```astro
<header class="sticky top-0 z-50 backdrop-blur-md bg-base-100/20 border-b border-base-content/5 w-full">
  <nav class="navbar max-w-6xl mx-auto px-4 md:px-8" aria-label="Main navigation">
    <!-- todo el contenido existente del navbar se mantiene igual -->
  </nav>
</header>
```

### Archivo NUEVO: `public/site.webmanifest`

Web App Manifest para señales PWA y mejor indexación mobile:

```json
{
  "name": "Cristian Arando — Full Stack Developer",
  "short_name": "Cristian Arando",
  "description": "Portfolio and tech blog by Cristian Arando",
  "start_url": "/en/",
  "display": "standalone",
  "background_color": "#1d232a",
  "theme_color": "#570df8",
  "icons": [
    { "src": "/favicon.svg", "sizes": "any", "type": "image/svg+xml" },
    { "src": "/favicon.ico", "sizes": "32x32", "type": "image/x-icon" }
  ]
}
```

### Archivo a MODIFICAR: `src/layouts/Layout.astro`

Agregar al `<head>`:

```html
<link rel="manifest" href="/site.webmanifest" />
<meta name="theme-color" content="#570df8" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
```

### Sobre los Headers de Seguridad (Aclaración Importante)

> ⚠️ **Los headers de seguridad/performance son específicos del hosting provider.** No son parte del código de Astro.
>
> - **Si usas Vercel:** Crear un archivo `vercel.json` en la raíz del proyecto
> - **Si usas Netlify:** Crear un archivo `public/_headers` o `netlify.toml`
> - **Si usas Cloudflare Pages:** Configurar en `public/_headers` o el dashboard
> - **Si usas un servidor propio (Nginx/Apache):** Configurar en el servidor directamente
>
> **Estos headers NO son obligatorios para SEO**, pero mejoran la seguridad del sitio y Google
> los valora positivamente (especialmente HTTPS, que ya tienes con Vercel).

#### Ejemplo para Vercel (`vercel.json` en la raíz del proyecto):

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    },
    {
      "source": "/_astro/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

#### Ejemplo para Netlify (`public/_headers`):

```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin

/_astro/*
  Cache-Control: public, max-age=31536000, immutable
```

#### ¿Qué hacen estos headers?

| Header                                   | Función                                                               |
| ---------------------------------------- | --------------------------------------------------------------------- |
| `X-Content-Type-Options: nosniff`        | Previene MIME-type sniffing                                           |
| `X-Frame-Options: DENY`                  | Previene que tu sitio sea embebido en iframes (clickjacking)          |
| `X-XSS-Protection`                       | Protección XSS del navegador                                          |
| `Referrer-Policy`                        | Controla qué info del referrer se envía                               |
| `Permissions-Policy`                     | Deshabilita APIs del navegador que no usas                            |
| `Cache-Control: immutable` en `/_astro/` | Los assets de Astro tienen hash en el nombre, se cachean para siempre |

---

## Fase 5 — Google News & Discover Eligibility

> ⚠️ **Para que tus blogs individuales aparezcan en Google como "canales de noticias" (como BBC),
> necesitas cumplir ciertos requisitos de Google News y Google Discover.**

### Requisitos para Google News/Discover — Checklist

| Requisito                                      | Estado          | Solución                          |
| ---------------------------------------------- | --------------- | --------------------------------- |
| Artículos individuales con URLs únicas         | ✅ Ya lo tienes | `/en/blog/hello-world/`           |
| Metadatos de artículo (published_time, author) | ✅ Ya lo tienes | `SEO.astro`                       |
| JSON-LD `BlogPosting` o `NewsArticle`          | 🔴 Falta        | Fase 1                            |
| Imágenes grandes ≥1200px de ancho              | ⚠️ Verificar    | Revisar `src/assets/images/blog/` |
| RSS Feed                                       | ✅ Ya lo tienes | `[lang]/rss.xml`                  |
| Google News Sitemap                            | 🔴 Falta        | Esta fase                         |
| `max-image-preview:large` meta tag             | 🔴 Falta        | Esta fase                         |
| Registro en Google News Publisher Center       | 🔴 Falta        | Fase 6 (manual)                   |

### Archivo NUEVO: `src/pages/[lang]/news-sitemap.xml.ts`

Sitemap especial para Google News. Solo incluye artículos de los últimos 2 días (requisito de Google News):

```ts
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { languages } from "../../i18n/ui";

export async function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}

export const GET: APIRoute = async (context) => {
  const { lang } = context.params;
  if (!lang || !(lang in languages)) {
    return new Response("Not Found", { status: 404 });
  }

  const siteUrl =
    context.site?.toString() || "https://cristianarando.vercel.app";
  const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);

  const posts = await getCollection("blog", (entry) => {
    return (
      entry.data.lang === lang &&
      !entry.data.draft &&
      entry.data.date >= twoDaysAgo
    );
  });

  posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const newsItems = posts
    .map(
      (post) => `
    <url>
      <loc>${siteUrl}/${lang}/blog/${post.data.slug}/</loc>
      <news:news>
        <news:publication>
          <news:name>Cristian Arando</news:name>
          <news:language>${lang}</news:language>
        </news:publication>
        <news:publication_date>${post.data.date.toISOString()}</news:publication_date>
        <news:title>${escapeXml(post.data.title)}</news:title>
        <news:keywords>${post.data.tags.join(", ")}</news:keywords>
      </news:news>
    </url>
  `,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${newsItems}
</urlset>`;

  return new Response(xml.trim(), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
```

### Archivo a MODIFICAR: `public/robots.txt`

Agregar referencia a los news sitemaps:

```txt
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Host
Host: https://cristianarando.vercel.app

# Sitemaps
Sitemap: https://cristianarando.vercel.app/sitemap-index.xml
Sitemap: https://cristianarando.vercel.app/en/news-sitemap.xml
Sitemap: https://cristianarando.vercel.app/es/news-sitemap.xml
```

### Archivo a MODIFICAR: `src/components/SEO.astro`

Agregar meta tag para Google Discover thumbnails grandes:

```html
<!-- Enable large image previews in Google Discover -->
<meta
  name="robots"
  content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
/>
```

Este meta tag le dice a Google:

- `max-image-preview:large` — Usar thumbnails grandes en Discover (CRÍTICO)
- `max-snippet:-1` — Sin límite de longitud para el snippet de texto
- `max-video-preview:-1` — Sin límite de duración para preview de video

### Sobre las imágenes de blog

Para Google Discover, las imágenes de los blog posts deben cumplir:

- **Mínimo 1200px de ancho** (idealmente 1200×630 para OG)
- Formato WebP o PNG preferido
- Sin texto excesivo dentro de la imagen
- Relevantes al contenido del artículo

**Verificar**: Revisar cada imagen en `src/assets/images/blog/` y asegurarse de que cumplen con estos requisitos.

---

## Fase 6 — Google Search Console & Monitoring (Pasos Manuales)

> Estos pasos no requieren cambios de código, pero son **esenciales** para que Google indexe tu sitio correctamente.

### 1. Registrar en Google Search Console

1. Ir a [Google Search Console](https://search.google.com/search-console/about)
2. Agregar propiedad: `https://cristianarando.vercel.app`
3. Verificar propiedad usando uno de estos métodos:
   - **DNS TXT record** (recomendado si tienes dominio propio)
   - **HTML meta tag** — Agregar `<meta name="google-site-verification" content="TU_CÓDIGO" />` al `<head>` en `Layout.astro`
4. Enviar sitemaps:
   - `sitemap-index.xml`
   - `en/news-sitemap.xml`
   - `es/news-sitemap.xml`

### 2. Registrar en Google News Publisher Center

1. Ir a [Google News Publisher Center](https://publishercenter.google.com)
2. Registrar `cristianarando.vercel.app` como publicación
3. Configurar secciones de contenido (Technology, Web Development, etc.)
4. **Nota:** La revisión de Google puede tardar días o semanas

### 3. Inspeccionar URLs clave

Usar "URL Inspection" en Search Console para verificar que Google detecta correctamente:

- `https://cristianarando.vercel.app/en/` (Home)
- `https://cristianarando.vercel.app/en/blog/` (Blog listing)
- `https://cristianarando.vercel.app/en/blog/web-security-best-practices/` (Blog post individual)
- `https://cristianarando.vercel.app/es/` (Home español)

### 4. Monitorear Core Web Vitals

- En Search Console → Experience → Core Web Vitals
- Astro genera HTML estático, así que debería tener scores excelentes
- Métricas clave: LCP (Largest Contentful Paint), INP (Interaction to Next Paint), CLS (Cumulative Layout Shift)

### 5. (Opcional) Google Analytics / Plausible

Considerar agregar analytics para trackear:

- Qué posts reciben más tráfico orgánico
- De qué países/idiomas vienen los visitantes
- Qué queries de búsqueda los llevan a tu sitio

---

## Resumen de Archivos por Fase

| Fase       | Archivo                                          | Tipo            | Estimado |
| ---------- | ------------------------------------------------ | --------------- | -------- |
| **Fase 1** | `src/components/StructuredData.astro`            | NEW             | ~1.5h    |
|            | `src/layouts/Layout.astro`                       | MODIFY          |          |
|            | `src/pages/[lang]/blog/[slug].astro`             | MODIFY          |          |
|            | `src/pages/[lang]/index.astro`                   | MODIFY (mínimo) |          |
|            | `src/pages/[lang]/blog/index.astro`              | MODIFY (mínimo) |          |
|            | `src/pages/[lang]/projects/index.astro`          | MODIFY (mínimo) |          |
| **Fase 2** | `astro.config.mjs`                               | MODIFY          | ~20min   |
| **Fase 3** | `src/content.config.ts`                          | MODIFY          | ~1h      |
|            | `src/components/SEO.astro`                       | MODIFY          |          |
|            | `src/content/blog/**/*.mdx` (20 archivos)        | MODIFY          |          |
| **Fase 4** | `src/components/Header.astro`                    | MODIFY          | ~30min   |
|            | `public/site.webmanifest`                        | NEW             |          |
|            | `src/layouts/Layout.astro`                       | MODIFY          |          |
|            | `vercel.json` O equivalente del hosting          | NEW (opcional)  |          |
| **Fase 5** | `src/pages/[lang]/news-sitemap.xml.ts`           | NEW             | ~45min   |
|            | `public/robots.txt`                              | MODIFY          |          |
|            | `src/components/SEO.astro`                       | MODIFY          |          |
| **Fase 6** | Manual (Google Search Console, Publisher Center) | N/A             | ~30min   |

---

## Verification Plan

### Build & Verificación Automática

```bash
# Build completo para verificar que no hay errores
pnpm build

# Verificar sitemap generado
cat dist/sitemap-index.xml
cat dist/sitemap-0.xml

# Verificar RSS feeds
cat dist/en/rss.xml

# Verificar que JSON-LD se genera correctamente en el HTML
grep -l "application/ld+json" dist/en/blog/*/index.html
```

### Verificación Manual con Herramientas de Google

1. **[Google Rich Results Test](https://search.google.com/test/rich-results)** — Pegar URL de un blog post para verificar que Google detecta `BlogPosting`
2. **[Schema Markup Validator](https://validator.schema.org/)** — Verificar JSON-LD sin errores
3. **[Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)** — Verificar OG tags
4. **[X Card Validator](https://cards-dev.twitter.com/validator)** — Verificar Twitter cards
5. **Lighthouse SEO Audit** — Abrir DevTools → Lighthouse → marcar "SEO" → Generar reporte (objetivo: score 100)
6. **[Google PageSpeed Insights](https://pagespeed.web.dev/)** — Verificar Core Web Vitals

---

## Preguntas Abiertas (Resolver Antes de Implementar)

### 1. ¿Dominio propio?

Para Google News es **fuertemente recomendado** tener un dominio personalizado (ej. `cristianarando.dev`).
Vercel y otros hosting providers ofrecen custom domains gratis o baratos.
Un dominio propio mejora significativamente la credibilidad para Google News Publisher Center.

### 2. ¿Imágenes de blog cumplen 1200px?

Verificar que las imágenes en `src/assets/images/blog/` son de al menos 1200px de ancho.
Si no, regenerarlas antes de implementar la Fase 5.

### 3. ¿Qué hosting provider usarás?

La Fase 4 (headers de seguridad) depende del provider:

- **Vercel**: `vercel.json`
- **Netlify**: `public/_headers`
- **Cloudflare Pages**: `public/_headers`
- **Otro**: Configurar en el servidor

### 4. ¿Analytics?

¿Quieres agregar Google Analytics, Plausible, o Umami para trackear tráfico orgánico?
Esto es opcional pero muy útil para medir el impacto de estas optimizaciones SEO.
