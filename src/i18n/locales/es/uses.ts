import type { UsesCategory } from "../../../types";

export const uses: UsesCategory[] = [
  {
    id: "hardware",
    name: "Hardware y Estación de Trabajo",
    items: [
      {
        name: "ASUS TUF Dash F15",
        description:
          "Laptop principal de desarrollo con Intel Core i5 de 11.ª generación, 16 GB de RAM y NVIDIA RTX 3050 — rápida y confiable para el día a día.",
      },
      {
        name: 'Monitor ASUS 27" IPS',
        description:
          "Panel IPS de 27 pulgadas con colores precisos y texto nítido, ideal para largas sesiones de programación y diseño.",
      },
      {
        name: "Redragon Kumara",
        description:
          "Teclado mecánico compacto con switches táctiles, construcción sólida e iluminación LED roja para un escritorio limpio.",
      },
    ],
  },
  {
    id: "software",
    name: "Software y Herramientas",
    items: [
      {
        name: "Visual Studio Code",
        description:
          "Editor de código principal, altamente personalizado con extensiones y temas configurados para TypeScript, Astro y desarrollo web.",
      },
      {
        name: "Antigravity y Claude Code",
        description:
          "Asistentes de programación con IA integrados directamente en mi flujo de trabajo para pair programming, generación de código y refactorización inteligente.",
      },
      {
        name: "Warp Terminal",
        description:
          "Terminal moderno acelerado por GPU con búsqueda de comandos por IA y funciones colaborativas que hacen el trabajo en CLI mucho más rápido.",
      },
      {
        name: "Obsidian",
        description:
          "Herramienta de gestión del conocimiento personal usando el método Zettelkasten — todas mis notas, ideas e investigación viven aquí como un grafo interconectado.",
      },
    ],
  },
  {
    id: "office",
    name: "Mobiliario y Entorno",
    items: [
      {
        name: "Escritorio de Madera Personalizado",
        description:
          "Escritorio espacioso construido a medida con madera de pino local y gestión de cables integrada.",
      },
      {
        name: "Silla de Oficina Ergonómica",
        description:
          "Silla de malla con respaldo alto, soporte lumbar ajustable y reposabrazos para largas jornadas de programación.",
      },
    ],
  },
];

export default uses;
