import type { UsesCategory } from "../../../types";

export const uses: UsesCategory[] = [
  {
    id: "hardware",
    name: "Hardware & Arbeitsbereich",
    items: [
      {
        name: "Lenovo Legion 5 Pro",
        description: "Hauptentwicklungsrechner ausgestattet mit AMD Ryzen 7 5800H, 32GB RAM und NVIDIA RTX 3070.",
      },
      {
        name: "LG UltraGear 27\"",
        description: "27-Zoll-IPS-Display mit 144 Hz für gestochen scharfe Textdarstellung und hohe Flüssigkeit.",
      },
      {
        name: "Keychron K2 Mechanische Tastatur",
        description: "Kabellose mechanische Tastatur, konfiguriert mit Gateron G Pro Brown Switches für taktiles Feedback.",
      },
      {
        name: "Logitech MX Master 3S",
        description: "Ergonomische kabellose Maus mit Präzisions-Scrollrad und anpassbarer Gestensteuerung.",
      }
    ]
  },
  {
    id: "software",
    name: "Software & Tools",
    items: [
      {
        name: "Visual Studio Code & Claude Code",
        description: "Code-Editoren der Wahl, stark optimiert mit benutzerdefinierten Design-Konfigurationen und Erweiterungen für TypeScript/React/NestJS.",
      },
      {
        name: "Windows Terminal & PowerShell",
        description: "Moderne Befehlszeilenumgebung mit Tabs, konfiguriert mit Oh My Posh für ein sauberes Prompt-Styling.",
      },
      {
        name: "Figma",
        description: "Verwendet für schnelle UI-Design-Entwürfe, Asset-Erstellung und Layout-Prototyping.",
      }
    ]
  },
  {
    id: "office",
    name: "Büroausstattung",
    items: [
      {
        name: "Individueller Holzschreibtisch",
        description: "Geräumiger Schreibtisch, maßgefertigt aus lokalem Kiefernholz mit integrierter Kabelführung.",
      },
      {
        name: "Ergonomischer Bürostuhl",
        description: "Netzstuhl mit hoher Rückenlehne, verstellbarer Lendenwirbelstütze und Armlehnen für lange Codierungssitzungen.",
      }
    ]
  }
];

export default uses;
