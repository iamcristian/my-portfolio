import type { UsesCategory } from "../../../types";

export const uses: UsesCategory[] = [
  {
    id: "hardware",
    name: "Hardware & Arbeitsbereich",
    items: [
      {
        name: "ASUS TUF Dash F15",
        description:
          "Haupt-Entwicklungslaptop mit Intel Core i5 der 11. Generation, 16 GB RAM und NVIDIA RTX 3050 — schnell und zuverlässig für den täglichen Einsatz.",
      },
      {
        name: 'ASUS 27" IPS-Monitor',
        description:
          "27-Zoll-IPS-Panel mit präzisen Farben und scharfer Textdarstellung für lange Programmier- und Designsitzungen.",
      },
      {
        name: "Redragon Kumara",
        description:
          "Kompakte mechanische Tastatur mit taktilen Switches, robustem Aufbau und roter LED-Beleuchtung für ein aufgeräumtes Schreibtisch-Setup.",
      },
    ],
  },
  {
    id: "software",
    name: "Software & Tools",
    items: [
      {
        name: "Visual Studio Code",
        description:
          "Haupt-Code-Editor, stark angepasst mit Erweiterungen und Themes für TypeScript, Astro und Web-Entwicklung.",
      },
      {
        name: "Antigravity & Claude Code",
        description:
          "KI-gestützte Programmierassistenten, direkt in meinen Workflow integriert für Pair Programming, Code-Generierung und intelligente Refaktorierung.",
      },
      {
        name: "Warp Terminal",
        description:
          "Modernes, GPU-beschleunigtes Terminal mit KI-Befehlssuche und kollaborativen Funktionen, die die CLI-Arbeit deutlich schneller machen.",
      },
      {
        name: "Obsidian",
        description:
          "Persönliches Wissensmanagement-Tool nach der Zettelkasten-Methode — alle meine Notizen, Ideen und Recherchen leben hier als vernetzter Graph.",
      },
    ],
  },
  {
    id: "office",
    name: "Büroausstattung",
    items: [
      {
        name: "Individueller Holzschreibtisch",
        description:
          "Geräumiger Schreibtisch, maßgefertigt aus lokalem Kiefernholz mit integrierter Kabelführung.",
      },
      {
        name: "Ergonomischer Bürostuhl",
        description:
          "Netzstuhl mit hoher Rückenlehne, verstellbarer Lendenwirbelstütze und Armlehnen für lange Codierungssitzungen.",
      },
    ],
  },
];

export default uses;
