import { fluenttube } from "./fluenttube.ts";
import type { ProjectCopy } from "../../../data/projects";

export const projectCopy = {
  "onelink-saas": {
    title: "OneLink SaaS - Платформа Link-in-Bio и Телеметрии",
    description:
      "Высокопроизводительная платформа Link-in-Bio на Next.js 16, NestJS 12, PostgreSQL, TimescaleDB, Redis, BullMQ и Docker.",
  },
  "kerr-spacetime-workstation": {
    title: "Kerr Spacetime Workstation - Численная Относительность и WebGL",
    description:
      "Интерактивная рабочая станция общей теории относительности и аккреционных дисков вращающихся черных дыр на WebGL 2.0, Three.js и GLSL.",
  },
  "crowdsafe-physics": {
    title: "CrowdSafe-Physics - Динамика Пешеходов и Эвакуация",
    description:
      "Исследовательская студия для моделирования динамики толпы и эвакуации на основе модели социальных сил HFV на Python и FastAPI.",
  },
  fluenttube: { title: fluenttube.title, description: fluenttube.description },
  "explora-bolivia": {
    title: "Explora Bolivia - Travel Guide App",
    description:
      "Веб-приложение путеводителя по Боливии на Next.js и NestJS, предоставляющее информацию о достопримечательностях, проживании и культуре.",
  },
  "maxi-basquet": {
    title: "Maxi Basquet - Basketball Team Management",
    description:
      "Веб-приложение для управления баскетбольными командами, включая статистику игроков, расписания матчей и турнирные таблицы, на Django и Bootstrap.",
  },
  "long-old-live": {
    title: "Long Old Live+",
    description:
      "Веб-сайт для пожилых людей, содержащий полезные физические и ментальные упражнения. Разработан на JavaScript, HTML и CSS.",
  },
} satisfies ProjectCopy;
