import type { UsesCategory } from "../../../types";

export const uses: UsesCategory[] = [
  {
    id: "hardware",
    name: "Hardware & Workspace",
    items: [
      {
        name: "Lenovo Legion 5 Pro",
        description:
          "Primary development machine equipped with AMD Ryzen 7 5800H, 32GB RAM, and NVIDIA RTX 3070.",
      },
      {
        name: 'LG UltraGear 27"',
        description:
          "27-inch IPS display running at 144Hz for sharp text rendering and high fluidity.",
      },
      {
        name: "Keychron K2 Mechanical Keyboard",
        description:
          "Wireless mechanical keyboard configured with Gateron G Pro Brown switches for tactile feedback.",
      },
      {
        name: "Logitech MX Master 3S",
        description:
          "Ergonomic wireless mouse with precision scrolling and customizable gesture controls.",
      },
    ],
  },
  {
    id: "software",
    name: "Software & Tools",
    items: [
      {
        name: "Visual Studio Code & Claude Code",
        description:
          "Code editors of choice, heavily optimized with custom theme configurations and extensions for TypeScript/React/NestJS.",
      },
      {
        name: "Windows Terminal & PowerShell",
        description:
          "Modern, tabbed command line environment configured with Oh My Posh for clean prompt styling.",
      },
      {
        name: "Figma",
        description:
          "Used for quick UI design mockups, asset creation, and layout prototyping.",
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
