export interface BlogPost {
  slug: string;
  title: Record<string, string>;
  content: Record<string, string>;
  date: string;
}

export interface Project {
  id: string;
  title: Record<string, string>;
  description: Record<string, string>;
  tech: string[];
}

export const MOCK_BLOGS: BlogPost[] = [
  {
    slug: "hello-world",
    title: {
      en: "Hello World",
      es: "Hola Mundo",
      de: "Hallo Welt",
      ru: "Привет мир",
      ja: "ハローワールド"
    },
    content: {
      en: "Welcome",
      es: "Bienvenido",
      de: "Willkommen",
      ru: "Добро пожаловать",
      ja: "ようこそ"
    },
    date: "2026-06-06"
  }
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: "portfolio",
    title: {
      en: "Portfolio",
      es: "Portafolio",
      de: "Portfolio",
      ru: "Портфолио",
      ja: "ポートフォリオ"
    },
    description: {
      en: "Minimalist",
      es: "Minimalista",
      de: "Minimalistisch",
      ru: "Минималистичный",
      ja: "ミニマリスト"
    },
    tech: ["Astro", "Tailwind", "daisyUI"]
  }
];
