import type { UsesCategory } from "../../../types";

export const uses: UsesCategory[] = [
  {
    id: "hardware",
    name: "Hardware & Workspace",
    items: [
      {
        name: "ASUS TUF Dash F15",
        description:
          "Primary development laptop powered by Intel Core i5 11th Gen, 16GB RAM, and NVIDIA RTX 3050 — fast and reliable for everyday development.",
      },
      {
        name: 'ASUS 27" IPS Monitor',
        description:
          "27-inch IPS panel delivering accurate colors and crisp text for extended coding and design sessions.",
      },
      {
        name: "Redragon Kumara",
        description:
          "Compact mechanical keyboard with tactile switches, solid build quality, and red LED backlighting for a clean desk setup.",
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
          "Main code editor, heavily customized with extensions and themes tuned for TypeScript, Astro, and web development workflows.",
      },
      {
        name: "Antigravity & Claude Code",
        description:
          "AI-powered coding assistants integrated directly into my workflow for pair programming, code generation, and intelligent refactoring.",
      },
      {
        name: "Warp Terminal",
        description:
          "Modern, GPU-accelerated terminal with AI command search and collaborative features that make CLI work significantly faster.",
      },
      {
        name: "Obsidian",
        description:
          "Personal knowledge management tool using the Zettelkasten method — all my notes, ideas, and research live here as an interconnected graph.",
      },
    ],
  },
  {
    id: "office",
    name: "Office Setup",
    items: [
      {
        name: "Custom Wooden Desk",
        description:
          "Spacious desk custom built from local pine wood with integrated cable management.",
      },
      {
        name: "Ergonomic Office Chair",
        description:
          "High-back mesh chair featuring adjustable lumbar support and armrests for long coding sessions.",
      },
    ],
  },
];

export default uses;
