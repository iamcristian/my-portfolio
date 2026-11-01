import type { ProjectId } from "./projects";

export const caseStudies: Record<
  ProjectId,
  { problem: string; architecture: string[]; tradeoff: string; lesson: string }
> = {
  "onelink-saas": {
    problem:
      "A high-concurrency Link-in-Bio platform requiring sub-millisecond vanity profile delivery, real-time click telemetry with time-series partitioning, multi-tenant creator dashboard controls, and automated lexical threat interception (Sentinel AI).",
    architecture: [
      "Turborepo monorepo orchestrating Next.js 16 (React 19 App Router) with Server Components and ISR for vanity profiles.",
      "NestJS 12 backend with SWC compilation (~70ms) structured via Hexagonal/Clean Architecture and OpenAPI 3.0.",
      "Dual-database persistence: PostgreSQL 16 with Prisma 6 for relational core schemas, combined with TimescaleDB hypertables for telemetry.",
      "Redis 7 Stack for cache-aside profile delivery, backed by BullMQ for asynchronous click beacon and audit log ingestion.",
      "Enterprise RBAC (Owner > Admin > Safety > Editor > Viewer) with Sentinel AI lexical threat detection in <25ms.",
    ],
    tradeoff:
      "Using TimescaleDB Hypertables provides automatic chunk partitioning and rapid aggregate rollups for analytics, but requires dedicated schema management alongside standard Prisma migrations. Cache-aside Redis guarantees fast lookups while requiring strict invalidation on profile updates.",
    lesson:
      "Decouple hot-path profile read operations from analytical write tracking using message queues. In high-traffic public profiles, no analytics logging should ever block page response latency.",
  },
  "kerr-spacetime-workstation": {
    problem:
      "High-fidelity, real-time visualization of General Relativistic effects around a rotating black hole (Kerr metric) in the browser, requiring real-time tensor computation, numerical geodesic integration, and physical radiative transfer without server dependencies.",
    architecture: [
      "WebGL 2.0 and Three.js r160 pipeline running custom GLSL shaders for real-time relativistic ray-marching and accretion disk emission.",
      "Exact Boyer-Lindquist metric tensor evaluation g_mu_nu(r, theta) computed in real-time geometric units (G = c = 1).",
      "4th-order Runge-Kutta (RK4) numerical integrator for timelike and null geodesics, handling zoom-whirl orbits, apsidal precession, and ISCO circularization.",
      "Novikov-Thorne relativistic thin-disk radiative transfer model with Liouville's theorem (I_obs = g^4 * I_em) for Doppler beaming and gravitational redshift.",
      "Interactive diagnostic oscilloscopes for effective potential V_eff(r) and symplectic phase-space portraits.",
    ],
    tradeoff:
      "Executing the entire numerical relativity pipeline inside WebGL shaders and browser JavaScript maximizes accessibility and portability (zero backend requirements), but limits the integration precision compared to heavy distributed relativistic GRMHD codes.",
    lesson:
      "Mathematical invariants (like Kretschmann scalar, conserved energy E, and angular momentum L_z) must serve as continuous unit tests and numerical stability checks in real-time physics simulations.",
  },
  "crowdsafe-physics": {
    problem:
      "A research studio for pedestrian dynamics and evacuation simulation, providing reproducible simulations of human contact mechanics, escape panic dynamics, and architectural exit bottlenecks.",
    architecture: [
      "Physics engine implementing the Helbing-Farkas-Vicsek (HFV) model with social, elastic, and frictional forces.",
      "FastAPI backend with WebSockets for real-time frame streaming, telemetry inspection, and simulation orchestration.",
      "Interactive scenario editor allowing real-time geometric authoring of walls, pillars, exits, and agent spawn zones.",
      "A/B scenario comparison engine supporting common-seed experimentation, parameter sweeps, and sensitivity analysis.",
      "Rigorous validation module evaluating empirical benchmarks against the HERMES dataset with reproducible CLI tools.",
    ],
    tradeoff:
      "Microscopic social-force agent models capture panic clustering and arching bottlenecks at exits that macroscopic fluid models miss, but computational complexity scales quadratically O(N^2) with crowd density without spatial partitioning.",
    lesson:
      "Separate scenario authoring, physical numerical integration, and telemetry recording into decoupled pipelines so that experiment configurations remain completely deterministic and reproducible.",
  },
  fluenttube: {
    problem:
      "A local-first language learning application that transforms user-chosen videos and YouTube content into structured listening, dictation, and speaking practice while keeping user media, transcripts, and progress private on the host machine.",
    architecture: [
      "React and TypeScript frontend with TanStack Query for server state synchronization and Zustand for fine-grained playback/dictation state.",
      "FastAPI REST backend with background job queue handling asynchronous transcription and media processing.",
      "Local speech-to-text pipeline utilizing Faster-Whisper with CPU fallback and optional NVIDIA CUDA GPU acceleration.",
      "FFmpeg and ffprobe pipeline for media inspection, audio extraction, and fragmented MP4 caching without re-encoding.",
      "SQLite persistence with Write-Ahead Logging (WAL) and foreign key enforcement for resilient local library storage.",
    ],
    tradeoff:
      "Running Faster-Whisper locally guarantees 100% data privacy and offline capability, but requires initial model downloads and hardware-dependent execution times compared to cloud speech APIs.",
    lesson:
      "Long-running media processing jobs must be chunked and checkpointed (e.g. 5-minute parts) to ensure recoverability and allow seamless resumption if the process restarts.",
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
