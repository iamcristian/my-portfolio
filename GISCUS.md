# Plan de Integración de Giscus en el Blog

Este documento detalla la viabilidad, los requisitos previos y los pasos técnicos necesarios para integrar **Giscus** como sistema de comentarios en las publicaciones de tu blog.

---

## 1. Viabilidad y Análisis de Giscus

Integrar **Giscus** es una solución **altamente viable y recomendada** para un portafolio estático construido con Astro por las siguientes razones:

- **Sin Base de Datos Propia:** Giscus utiliza las _Discusiones de GitHub_ (GitHub Discussions) de tu propio repositorio como motor de almacenamiento de comentarios. No necesitas configurar servidores, bases de datos (como PostgreSQL o MongoDB) ni servicios de backend adicionales.
- **Seguridad y Autenticación:** Los usuarios se autentican con su cuenta de GitHub. Esto reduce drásticamente el spam sin necesidad de captchas complicados.
- **Rendimiento Óptimo:** Puedes configurarlo para cargarse de forma diferida (_lazy loading_), lo que significa que el widget no afectará el tiempo de carga inicial de tu blog y solo se descargará cuando el usuario haga scroll hacia la sección de comentarios.
- **Totalmente Gratuito y de Código Abierto:** No tiene anuncios, planes de pago ni límites artificiales.
- **Soporte Multilingüe (i18n):** Giscus soporta todos los idiomas de tu portafolio (`en`, `es`, `de`, `ja`, `ru`), permitiendo mostrar el widget de comentarios en el idioma activo del usuario de forma nativa.

---

## 2. Requisitos Previos (Configuración de GitHub)

Antes de escribir código, debes realizar la configuración inicial en GitHub para habilitar las discusiones en tu repositorio:

1.  **Repositorio Público:** El repositorio de tu portafolio en GitHub **debe ser público**. Si actualmente es privado, las discusiones no serán accesibles para los lectores del blog y Giscus no funcionará.
2.  **Habilitar GitHub Discussions:**
    - Ve a la página de tu repositorio en GitHub.
    - Haz clic en **Settings** (Configuración).
    - Desplázate hacia abajo hasta la sección **Features** (Características).
    - Marca la casilla **Discussions** (Discusiones).
3.  **Instalar la App de Giscus:**
    - Visita [github.com/apps/giscus](https://github.com/apps/giscus).
    - Haz clic en **Install** y selecciona el repositorio de tu portafolio.
4.  **Obtener los Parámetros de Configuración:**
    - Visita [giscus.app](https://giscus.app/).
    - Ingresa el enlace de tu repositorio público en la sección **Repositorio** (ej. `tu-usuario/tu-repositorio`).
    - Giscus validará que el repositorio cumple con los requisitos y te proporcionará:
      - `Repository ID` (ID del repositorio)
      - `Category ID` (ID de la categoría, ej. "Announcements" o "General")
      - `Category Name` (Nombre de la categoría, se recomienda usar una categoría dedicada a comentarios)

---

## 3. Guía de Integración Técnica en Astro

La integración se puede hacer utilizando el **Web Component de Giscus**, que es la manera más limpia y compatible con Astro (incluyendo soporte para **Page Transitions** o transiciones de página).

### Paso 1: Crear el componente `Giscus.astro`

Crea el archivo `src/components/blog/Giscus.astro` con la estructura necesaria para renderizar el widget, manejar el cambio dinámico de tema y soportar i18n.

```astro
---
interface Props {
  lang: string;
}

const { lang } = Astro.props;

// Mapeo de idiomas soportados por tu portafolio a los códigos de idioma de Giscus
const giscusLangMap: Record<string, string> = {
  en: "en",
  es: "es",
  de: "de",
  ja: "ja",
  ru: "ru",
};
const giscusLang = giscusLangMap[lang] || "en";
---

<div class="giscus-wrapper mt-16 pt-8 border-t border-base-300">
  <h2 class="text-xl font-bold mb-6 text-base-content/90">
    {lang === "es" ? "Comentarios" : lang === "de" ? "Kommentare" : lang === "ja" ? "コメント" : lang === "ru" ? "Комментарии" : "Comments"}
  </h2>

  <!-- Carga del script del Web Component de Giscus -->
  <script src="https://giscus.app/element.js" defer></script>

  <!-- Elemento personalizado de Giscus -->
  <giscus-widget
    id="comments-widget"
    repo="[TU_USUARIO_DE_GITHUB]/[TU_REPOSITORIO]"
    repoid="[TU_REPO_ID]"
    category="Announcements"
    categoryid="[TU_CATEGORY_ID]"
    mapping="pathname"
    strict="0"
    reactionsenabled="1"
    emitmetadata="0"
    inputposition="bottom"
    theme="light"
    lang={giscusLang}
    loading="lazy"
  ></giscus-widget>
</div>

<script>
  function setupGiscusTheme() {
    const widget = document.getElementById("comments-widget");
    if (!widget) return;

    // Detectar el tema actual de la página (leyendo data-theme en el <html>)
    const currentTheme = document.documentElement.getAttribute("data-theme");

    // Mapear el tema de DaisyUI al tema de Giscus (oscuro o claro)
    // En tu proyecto usas 'business' como tema oscuro
    const isDark = currentTheme === "business" || currentTheme === "dark";
    const giscusTheme = isDark ? "dark" : "light";

    widget.setAttribute("theme", giscusTheme);
  }

  // Inicializar al cargar el componente
  setupGiscusTheme();

  // Escuchar cambios de tema (MutationObserver) para cuando el usuario cambia el interruptor de luz/oscuridad
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "data-theme") {
        setupGiscusTheme();
      }
    });
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  // Asegurar compatibilidad con transiciones de página de Astro (Astro Page Transitions)
  document.addEventListener("astro:page-load", () => {
    setupGiscusTheme();
  });
</script>
```

> [!NOTE]
> Reemplaza `repo`, `repoid` y `categoryid` con las credenciales que obtengas de [giscus.app](https://giscus.app/).

---

### Paso 2: Integrar en la visualización del artículo

Edita tu componente principal de renderizado de artículos, en este caso [BlogPostDetail.astro](file:///c:/Users/crisa/Workspace/astro/my-portfolio/src/components/blog/BlogPostDetail.astro), para importar y colocar el nuevo componente `<Giscus />` justo antes de la navegación de posts anteriores/siguientes.

```diff
---
import type { CollectionEntry } from "astro:content";
import { render, getCollection } from "astro:content";
import { getRelativeLocaleUrl } from "astro:i18n";
import { getLang, useTranslations } from "../../i18n/utils";
import { getReadTime } from "../../utils/blog";
import { Image } from "astro:assets";
+ import Giscus from "./Giscus.astro";

// SVGs
import CalendarIcon from "../../assets/icons/calendar.svg";
// ...
---

<main class="max-w-6xl mx-auto px-4 md:px-8 pt-8 md:pt-12 pb-16 md:pb-24 min-h-screen">
  <!-- ... Contenido del Artículo ... -->

+  <!-- Componente de Comentarios (Giscus) -->
+  <Giscus lang={lang} />

  <!-- Previous / Next Post Sibling Navigation -->
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 pt-8 border-t border-base-300">
    <!-- ... -->
  </div>
</main>
```

---

## 4. Pruebas y Despliegue en el Futuro

Una vez que decidas implementar este plan en producción, considera lo siguiente:

1.  **Despliegue a Producción:** Giscus necesita poder resolver los pathnames en tu dominio público (por ejemplo, `https://tu-portfolio.com/es/blog/mi-post`). Sin embargo, funcionará localmente siempre y cuando el repositorio configurado sea el público.
2.  **Primera Discusión:** Cuando un usuario escribe el primer comentario en una publicación del blog, Giscus creará automáticamente la discusión correspondiente en tu sección de _Discussions_ en GitHub con el título y la ruta del artículo.
3.  **Moderación:** Puedes moderar los comentarios directamente desde la pestaña **Discussions** de tu repositorio en GitHub (borrar comentarios ofensivos, bloquear usuarios, etc.).
