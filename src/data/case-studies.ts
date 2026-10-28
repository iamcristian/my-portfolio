import type { ProjectId } from "./projects";
export const caseStudies: Record<
  ProjectId,
  { problem: string; architecture: string[]; tradeoff: string; lesson: string }
> = {
  onelink: {
    problem:
      "A single shareable destination for a personal collection of links. The interface needs to make editing straightforward while keeping the public presentation easy to scan.",
    architecture: [
      "React and TypeScript provide the interface, with Shadcn components for consistent controls.",
      "React Query provides a boundary for asynchronous server state. Express and MongoDB form the API and persistence stack.",
      "JWT appears in the catalogued stack. Token expiry, safe handling, and server-side authorization are key review points for an authenticated editor.",
    ],
    tradeoff:
      "A separate API can serve multiple clients, but introduces deployment coordination and explicit API contracts. Flexible document storage also makes validation at the API boundary especially valuable.",
    lesson:
      "Keep editable account data separate from the public profile representation. Treat hiding an editing control as presentation, and enforce ownership in the API.",
  },
  "explora-bolivia": {
    problem:
      "A Bolivia-focused exploration application needs a clear way to present destinations and organize the data behind that experience.",
    architecture: [
      "Next.js and Shadcn are the catalogued presentation stack.",
      "NestJS defines a separate backend boundary, with TypeORM and PostgreSQL for structured persistence.",
      "Docker and GitLab are listed among the project tools. Reproducible environments and automated validation are useful considerations for this combination.",
    ],
    tradeoff:
      "A structured frontend/backend split provides room for independent evolution, with the cost of more contracts and services to maintain. Relational modelling makes consistency explicit but requires deliberate schema migrations.",
    lesson:
      "Explain the data model and API contract together: how a destination is represented, how it is fetched, and which layer owns validation.",
  },
  "maxi-basquet": {
    problem:
      "An international basketball tournament involves related information such as teams and competition records. A clear administrative workflow matters as much as the public presentation.",
    architecture: [
      "The catalog lists Django and Python for the application.",
      "PostgreSQL supplies relational persistence; Bootstrap supplies the interface styling.",
      "A useful design review follows a record from form validation through application rules to database constraints.",
    ],
    tradeoff:
      "An integrated framework can keep the deployment and development workflow compact. Rich live interactions may require additional client behavior as requirements grow.",
    lesson:
      "Put competition rules in a clear application layer and use database constraints for invariants. A successful form submission should represent a valid domain operation.",
  },
  "long-old-live": {
    problem:
      "A wellbeing website for older adults presents muscle exercises and mental activities. Clear instructions and approachable navigation are central design concerns.",
    architecture: [
      "The catalog lists vanilla JavaScript, HTML, CSS and Bootstrap.",
      "Firebase is the listed backend platform.",
      "A useful boundary separates rendering, user interactions, and calls to backend services rather than mixing them in each event handler.",
    ],
    tradeoff:
      "Direct use of browser primitives keeps the interface approachable and avoids a framework runtime. As complexity increases, consistent state handling and reusable modules require deliberate discipline.",
    lesson:
      "Start with semantic HTML, then add behavior through small modules. For any client-accessible backend, review access rules independently of interface controls.",
  },
};
