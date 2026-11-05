import { fluenttube } from "./fluenttube.ts";
import type { ProjectCopy } from "../../../data/projects";

export const projectCopy = {
  "onelink-saas": {
    title: "OneLink SaaS - Link-in-Bio & Creator-Telemetrie-Plattform",
    description:
      "Hochleistungsfähige Link-in-Bio-Plattform mit Next.js 16, NestJS 12, PostgreSQL, TimescaleDB, Redis, BullMQ und Docker.",
  },
  "kerr-spacetime-workstation": {
    title: "Kerr Spacetime Workstation - Numerische Relativität & WebGL",
    description:
      "Interaktiver Arbeitsplatz für Allgemeine Relativitätstheorie und Akkretionsscheiben um rotierende Schwarze Löcher mit WebGL 2.0, Three.js und GLSL.",
  },
  "crowdsafe-physics": {
    title: "CrowdSafe-Physics - Fußgängerdynamik & Evakuierungsstudio",
    description:
      "Forschungsstudio für Fußgängerdynamik und Evakuierungssimulationen basierend auf dem HFV-Social-Force-Modell mit Python und FastAPI.",
  },
  fluenttube: { title: fluenttube.title, description: fluenttube.description },
  "explora-bolivia": {
    title: "Explora Bolivia - Travel Guide App",
    description:
      "Eine Reiseführer-Webanwendung für Bolivien, entwickelt mit Next.js und NestJS, die Informationen über Sehenswürdigkeiten, Unterkünfte und die lokale Kultur bietet.",
  },
  "maxi-basquet": {
    title: "Maxi Basquet - Basketball Team Management",
    description:
      "Eine Webanwendung für das Management von Basketballteams, einschließlich Spielerstatistiken, Spielplänen und Team-Ranglisten, entwickelt mit Django und Bootstrap.",
  },
  "long-old-live": {
    title: "Long Old Live+",
    description:
      "Eine Website für das Wohlbefinden älterer Menschen mit Muskel- und Denkaufgaben zur mentalen Stärkung. Entwickelt mit JavaScript, HTML und CSS.",
  },
} satisfies ProjectCopy;
