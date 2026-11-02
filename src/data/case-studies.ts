import type { ProjectId } from "./projects";
import type { Lang } from "../i18n/utils";

export interface CaseStudyData {
  problem: string;
  architecture: string[];
  tradeoff: string;
  lesson: string;
}

export const caseStudiesByLang: Record<
  Lang,
  Record<ProjectId, CaseStudyData>
> = {
  en: {
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
  },
  es: {
    "onelink-saas": {
      problem:
        "Plataforma Link-in-Bio de alta concurrencia diseñada para entregar perfiles en submilisegundos, registrar telemetría de clics en tiempo real con particionado temporal, panel de control multi-inquilino y mitigación léxica automatizada de amenazas (Sentinel AI).",
      architecture: [
        "Monorepositorio Turborepo con Next.js 16 (React 19 App Router), Server Components y regeneración estática incremental (ISR).",
        "Backend en NestJS 12 compilado con SWC (~70ms) bajo Arquitectura Limpia/Hexagonal y contratos OpenAPI 3.0.",
        "Persistencia dual: PostgreSQL 16 con Prisma 6 para modelos relacionales junto a hypertables de TimescaleDB para series temporales.",
        "Redis 7 Stack bajo patrón cache-aside para lectura veloz de perfiles, respaldado por colas asíncronas BullMQ para analítica y auditoría.",
        "Control de acceso basado en roles empresarial (RBAC) con detección léxica preventiva en Sentinel AI en menos de 25 ms.",
      ],
      tradeoff:
        "TimescaleDB Hypertables brinda particionado automático de chunks y agregaciones ultra rápidas, pero exige migraciones dedicadas junto a Prisma. Redis como cache-aside acelera lecturas pero requiere invalidación rigurosa al actualizar perfiles.",
      lesson:
        "Desacopla las lecturas críticas de perfiles del registro analítico de escritura mediante colas de mensajes. En servicios públicos de alto tráfico, la analítica nunca debe penalizar la latencia de respuesta.",
    },
    "kerr-spacetime-workstation": {
      problem:
        "Visualización interactiva y físicamente rigurosa de efectos de Relatividad General alrededor de un agujero negro en rotación (métrica de Kerr) directamente en el navegador, calculando tensores, trayectorias geodésicas y radiación en tiempo real sin servidor.",
      architecture: [
        "Pipeline WebGL 2.0 y Three.js r160 con shaders GLSL personalizados para ray-marching relativista y emisión del disco de acreción.",
        "Evaluación exacta del tensor métrico de Boyer-Lindquist g_mu_nu(r, theta) calculada en tiempo real en unidades geométricas (G = c = 1).",
        "Integrador numérico Runge-Kutta de 4º orden (RK4) para geodésicas temporales y nulas, procesando órbitas zoom-whirl, precesión absidal y circularización ISCO.",
        "Modelo de transporte radiativo de disco delgado de Novikov-Thorne con teorema de Liouville (I_obs = g^4 * I_em) para beaming Doppler y corrimiento al rojo gravitacional.",
        "Osciloscopios de diagnóstico interactivo para el potencial efectivo V_eff(r) y retratos de fase simplécticos.",
      ],
      tradeoff:
        "Ejecutar el pipeline completo de relatividad numérica en shaders WebGL y JavaScript maximiza la portabilidad y accesibilidad (cero infraestructura de servidor), sacrificando la altísima precisión de simulaciones masivas distribuidas de magnetohidrodinámica relativista (GRMHD).",
      lesson:
        "Los invariantes matemáticos (como el escalar de Kretschmann, la energía conservada E y el momento angular L_z) deben actuar como pruebas unitarias continuas y salvaguardas de estabilidad numérica en simulaciones físicas en tiempo real.",
    },
    "crowdsafe-physics": {
      problem:
        "Estudio de investigación en dinámica de peatones y simulaciones de evacuación, proporcionando experimentos reproducibles sobre mecánica de contacto humano, dinámicas de pánico y cuellos de botella arquitectónicos en salidas.",
      architecture: [
        "Motor físico que implementa el modelo de fuerzas sociales Helbing-Farkas-Vicsek (HFV) con fuerzas elásticas, friccionales y socio-psicológicas.",
        "Backend en FastAPI con WebSockets para transmisión de frames en tiempo real, telemetría e inspección de estados de simulación.",
        "Editor de escenarios interactivo que permite diseñar muros, columnas, salidas y zonas de generación de agentes en tiempo real.",
        "Motor de comparación A/B con semillas idénticas para experimentación controlada, barrido de parámetros y análisis de sensibilidad.",
        "Módulo de validación empírica contra el benchmark de datos HERMES con herramientas CLI reproducibles.",
      ],
      tradeoff:
        "Los modelos microscópicos de fuerzas sociales capturan con realismo el agrupamiento por pánico y los arcos de bloqueo en salidas, pero su coste computacional escala de forma cuadrática O(N^2) con la densidad sin particionado espacial.",
      lesson:
        "Separa la edición de escenarios, la integración física numérica y la telemetría en pipelines desacoplados para que la configuración experimental sea totalmente determinista y reproducible.",
    },
    fluenttube: {
      problem:
        "Aplicación local-first para el aprendizaje de idiomas que convierte vídeos y contenido de YouTube en ejercicios estructurados de dictado, comprensión auditiva y pronunciación, preservando la total privacidad de los archivos y el progreso en la máquina del usuario.",
      architecture: [
        "Frontend en React y TypeScript con TanStack Query para sincronización y Zustand para gestión de estados de reproducción y dictado.",
        "Backend REST en FastAPI con cola de trabajos en segundo plano para transcripción asíncrona y procesamiento de medios.",
        "Pipeline local de voz a texto con Faster-Whisper, compatible con CPU y aceleración GPU opcional mediante NVIDIA CUDA.",
        "Integración con FFmpeg y ffprobe para inspección de flujos, extracción de audio y caché de segmentos MP4 sin transcodificación pesada.",
        "Base de datos SQLite con Write-Ahead Logging (WAL) e integridad referencial para persistencia local confiable.",
      ],
      tradeoff:
        "Ejecutar Faster-Whisper localmente garantiza privacidad absoluta y funcionamiento offline, pero requiere la descarga previa del modelo y tiempos de cómputo sujetos al hardware del usuario frente a APIs cloud.",
      lesson:
        "Las tareas extensas de procesamiento audiovisual deben dividirse en fragmentos con puntos de control (checkpoints) para asegurar la recuperación inmediata si el proceso se interrumpe.",
    },
    "explora-bolivia": {
      problem:
        "Aplicación web de exploración turística en Bolivia que requiere una presentación intuitiva de atractivos y un esquema relacional estructurado para su catálogo.",
      architecture: [
        "Next.js y componentes Shadcn componen la capa de presentación modular.",
        "NestJS define el límite de backend independiente, con TypeORM y PostgreSQL para persistencia transaccional.",
        "Entornos contenerizados con Docker y automatización con GitLab para validación reproducible.",
      ],
      tradeoff:
        "Separar de forma estricta frontend y backend permite la evolución independiente de servicios, asumiendo el mantenimiento de contratos de API. El modelado relacional garantiza consistencia pero requiere migraciones ordenadas.",
      lesson:
        "Diseña el modelo de datos y el contrato de API en conjunto: cómo se define un destino, cómo se consulta y qué capa es responsable de su validación.",
    },
    "maxi-basquet": {
      problem:
        "Sistema integral para torneos internacionales de baloncesto que gestiona calendarios deportivos, planteles de equipos y tablas de posiciones con flujos administrativos claros.",
      architecture: [
        "Aplicación monolítica modular construida con Django y Python.",
        "Persistencia relacional en PostgreSQL y diseño de interfaz con Bootstrap.",
        "Revisión de flujo de datos completo: desde la validación de formularios hasta las restricciones de integridad en base de datos.",
      ],
      tradeoff:
        "Un framework unificado como Django simplifica los despliegues y acelera el desarrollo, aunque interacciones complejas en vivo pueden demandar código de cliente adicional conforme crece el proyecto.",
      lesson:
        "Centraliza las reglas de competición en la capa de aplicación y delega los invariantes en restricciones de base de datos. Cada envío debe reflejar una operación de dominio válida.",
    },
    "long-old-live": {
      problem:
        "Sitio web enfocado en el bienestar de adultos mayores, con rutinas de acondicionamiento muscular y actividades de estimulación cognitiva guiadas.",
      architecture: [
        "Interfaz desarrollada con JavaScript nativo (vanilla), HTML semántico y estilos CSS/Bootstrap.",
        "Firebase como plataforma de backend y almacenamiento de datos.",
        "Separación nítida entre la renderización del DOM, la interacción del usuario y las llamadas a servicios externos en lugar de mezclar lógica en eventos.",
      ],
      tradeoff:
        "Utilizar primitivas estándar del navegador elimina la sobrecarga de frameworks, pero requiere disciplina rigurosa para mantener el estado y la modularidad a medida que la aplicación crece.",
      lesson:
        "Comienza siempre con HTML semántico accesible y añade interactividad mediante módulos pequeños y testeables. En servicios accesibles desde el cliente, audita las reglas de acceso con independencia de los controles visuales.",
    },
  },
  de: {
    "onelink-saas": {
      problem:
        "Hochperformante Link-in-Bio-Plattform für die Bereitstellung von Profilen im Sub-Millisekundenbereich, Klick-Telemetrie in Echtzeit mit TimescaleDB-Hypertables, Multi-Tenant-Verwaltung und automatisierte Bedrohungserkennung (Sentinel AI).",
      architecture: [
        "Turborepo-Monorepo mit Next.js 16 (React 19 App Router), Server-Komponenten und ISR für personalisierte Profile.",
        "NestJS 12 Backend mit SWC-Kompilierung (~70ms) nach Clean-Architecture-Prinzipien und OpenAPI 3.0.",
        "Duale Datenbankarchitektur: PostgreSQL 16 mit Prisma 6 für relationale Daten und TimescaleDB-Hypertables für Telemetrie.",
        "Redis 7 Stack für Cache-Aside-Leseoperationen und BullMQ für asynchrone Klick- und Audit-Log-Verarbeitung.",
        "Unternehmensweites Rollenkonzept (RBAC) mit Sentinel AI für semantische Bedrohungserkennung in unter 25 ms.",
      ],
      tradeoff:
        "TimescaleDB-Hypertables ermöglichen automatische Partitionierung und schnelle Aggregationen, verlangen aber separates Schema-Management neben Prisma. Cache-Aside mit Redis garantiert minimale Latenz, erfordert aber strikte Invalidierung bei Profilaktualisierungen.",
      lesson:
        "Trennen Sie zeitkritische Profilabfragen durch asynchrone Warteschlangen von analytischen Schreibvorgängen. Bei hohem Nutzeraufkommen darf Telemetrie niemals die Antwortzeit blockieren.",
    },
    "kerr-spacetime-workstation": {
      problem:
        "Physikalisch exakte Echtzeit-Visualisierung allgemeinrelativistischer Effekte um ein rotierendes Schwarzes Loch (Kerr-Metrik) direkt im Browser, ohne externe Serverinfrastruktur.",
      architecture: [
        "WebGL 2.0 und Three.js r160 Pipeline mit maßgeschneiderten GLSL-Shadern für relativistisches Ray-Marching und Akkretionsscheiben-Strahlung.",
        "Exakte Berechnung des Boyer-Lindquist-Metriktensors g_mu_nu(r, theta) in geometrischen Einheiten (G = c = 1).",
        "Numerischer Runge-Kutta-Integrator 4. Ordnung (RK4) für Geodäten zur Abbildung von Zoom-Whirl-Orbits und Präzession.",
        "Novikov-Thorne-Strahlungstransportmodell mit Liouville-Theorem (I_obs = g^4 * I_em) für Doppler-Beaming und Gravitationsrotverschiebung.",
        "Interaktive Oszilloskope für effektives Potential V_eff(r) und Phasenraum-Analysen.",
      ],
      tradeoff:
        "Die Ausführung der gesamten relativistischen Berechnungen in Shadern und WebGL maximiert Barrierefreiheit und Portabilität, limitiert jedoch die Integrationsgenauigkeit im Vergleich zu verteilten GRMHD-Supercomputer-Simulationen.",
      lesson:
        "Mathematische Invarianten wie der Kretschmann-Skalar, Energieerhaltung E und Drehimpuls L_z müssen als fortlaufende Stabilitätsprüfungen in Echtzeitsimulationen dienen.",
    },
    "crowdsafe-physics": {
      problem:
        "Forschungsumgebung für Fußgängerdynamik und Evakuierungssimulationen zur Erforschung menschlicher Kontaktmechanik, Panikdynamiken und architektonischer Engpässe.",
      architecture: [
        "Physik-Engine nach dem Social-Force-Modell von Helbing-Farkas-Vicsek (HFV) mit elastischen, Reibungs- und Sozialkräften.",
        "FastAPI-Backend mit WebSockets für Echtzeit-Streaming von Frames, Telemetrie und Simulationssteuerung.",
        "Interaktiver Szenario-Editor zur geometrischen Erstellung von Wänden, Säulen, Ausgängen und Spawn-Zonen.",
        "A/B-Vergleichs-Engine mit einheitlichem Zufallssamen für Parametersweeps und Sensitivitätsanalysen.",
        "Empirische Validierungsmodule gegen das HERMES-Referenzdataset mit reproduzierbaren CLI-Werkzeugen.",
      ],
      tradeoff:
        "Mikroskopische Partikelmodelle erfassen Panikcluster und Bogenbildung an Ausgängen präzise, skalieren jedoch quadratisch O(N^2) mit der Dichte ohne Raumpartitionierung.",
      lesson:
        "Trennen Sie Szenario-Erstellung, numerische Integration und Telemetrieaufzeichnung in voneinander unabhängige Pipelines für vollständige Reproduzierbarkeit.",
    },
    fluenttube: {
      problem:
        "Lokale Sprachlern-App, die YouTube-Videos und Mediendateien in interaktive Diktat- und Ausspracheübungen umwandelt, während Daten und Lernfortschritt auf dem Gerät verbleiben.",
      architecture: [
        "React- und TypeScript-Frontend mit TanStack Query für Serversynchronisation und Zustand für Wiedergabesteuerung.",
        "FastAPI-REST-Backend mit Hintergrundwarteschlange für Medienextraktion und Transkription.",
        "Lokale Spracherkennung über Faster-Whisper mit CPU-Unterstützung und optionaler NVIDIA CUDA-Beschleunigung.",
        "FFmpeg- und ffprobe-Pipeline für Audioextraktion und MP4-Caching ohne Neukodierung.",
        "SQLite-Datenbank mit Write-Ahead Logging (WAL) für sichere lokale Datenhaltung.",
      ],
      tradeoff:
        "Lokale Ausführung garantiert absolute Privatsphäre und Offline-Funktionalität, erfordert jedoch initiale Modelldownloads und hardwareabhängige Rechenzeiten.",
      lesson:
        "Länger andauernde Medienverarbeitungsaufgaben müssen in Chunks mit Checkpoints unterteilt werden, um bei Unterbrechungen nahtlos fortgesetzt werden zu können.",
    },
    "explora-bolivia": {
      problem:
        "Webanwendung zur Erkundung von Reisezielen in Bolivien mit übersichtlicher Präsentation und strukturierter Persistenz.",
      architecture: [
        "Next.js und Shadcn-Komponenten für eine modulare Präsentationsschicht.",
        "NestJS als unabhängiger Backend-Dienst mit TypeORM und PostgreSQL für relationale Datenhaltung.",
        "Docker-Container und GitLab-Pipelines für reproduzierbare Entwicklung und automatisierte Tests.",
      ],
      tradeoff:
        "Die klare Trennung zwischen Frontend und Backend ermöglicht unabhängige Skalierung, erfordert jedoch die Pflege getrennter Schnittstellenverträge.",
      lesson:
        "Entwickeln Sie Datenmodell und Schnittstellenvertrag gemeinsam: Wie ein Ziel definiert ist, wie es geladen wird und welche Schicht validiert.",
    },
    "maxi-basquet": {
      problem:
        "Turnierverwaltungssystem für internationalen Basketball zur Organisation von Mannschaften, Spielerstatistiken und Spielplänen.",
      architecture: [
        "Django- und Python-Anwendung mit modularem Aufbau.",
        "PostgreSQL für relationale Speicherung und Bootstrap für das Interface-Design.",
        "Durchgängiger Datenfluss von der Formularvalidierung bis zu Datenbank-Constraints.",
      ],
      tradeoff:
        "Ein monolithisches Framework wie Django vereinfacht Entwicklung und Betrieb, erfordert bei interaktiven Echtzeitfunktionen jedoch zusätzlichen Client-Code.",
      lesson:
        "Verankern Sie Wettbewerbsregeln in einer sauberen Anwendungsschicht und nutzen Sie Datenbankbeschränkungen für fundamentale Invarianten.",
    },
    "long-old-live": {
      problem:
        "Gesundheits- und Bewegungsworkstation für Senioren mit strukturierten Muskel- und Gedächtnisübungen.",
      architecture: [
        "Entwicklung mit nativem JavaScript (Vanilla), semantischem HTML und CSS/Bootstrap.",
        "Firebase als Cloud-Backend für Benutzerdaten.",
        "Saubere Trennung von DOM-Rendering, Nutzerinteraktion und Backend-Diensten.",
      ],
      tradeoff:
        "Der Verzicht auf Frameworks reduziert Ladezeiten und Komplexität, erfordert jedoch disziplinierte Modulstrukturen bei wachsender Funktionsvielfalt.",
      lesson:
        "Beginnen Sie mit barrierefreiem semantischem HTML und ergänzen Sie Funktionalität in kleinen Modulen. Prüfen Sie Zugriffsregeln unabhängig von der UI.",
    },
  },
  ru: {
    "onelink-saas": {
      problem:
        "Высоконагруженная Link-in-Bio платформа с субмиллисекундной отдачей профилей, аналитикой кликов реального времени на гипертаблицах TimescaleDB, многопользовательским кабинетом создателя и автоматическим перехватом угроз (Sentinel AI).",
      architecture: [
        "Монорепозиторий Turborepo на базе Next.js 16 (React 19 App Router) с Server Components и ISR для профилей.",
        "Бэкенд на NestJS 12 с компиляцией SWC (~70ms) по принципам Чистой / Гексагональной архитектуры и OpenAPI 3.0.",
        "Двухуровневая база данных: PostgreSQL 16 с Prisma 6 для бизнес-сущностей и TimescaleDB для временных рядов кликов.",
        "Redis 7 Stack с паттерном cache-aside для чтения профилей и очередями BullMQ для асинхронной аналитики и аудита.",
        "Корпоративная ролевая модель (RBAC) с лексическим анализатором Sentinel AI для обнаружения угроз за <25 мс.",
      ],
      tradeoff:
        "TimescaleDB Hypertables обеспечивает автоматическое секционирование и быструю агрегацию, но требует отдельного управления схемой параллельно с Prisma. Redis гарантирует минимальную задержку, требуя четкой инвалидации при обновлении профиля.",
      lesson:
        "Изолируйте критический путь чтения профилей от аналитической записи через очереди сообщений. Аналитика не должна влиять на время отклика страницы.",
    },
    "kerr-spacetime-workstation": {
      problem:
        "Интерактивная физическая визуализация эффектов общей теории относительности вокруг вращающейся черной дыры (метрика Керра) в браузере без использования серверных вычислений.",
      architecture: [
        "Конвейер WebGL 2.0 и Three.js r160 с шейдерами GLSL для релятивистского трассирования лучей и свечения аккреционного диска.",
        "Точный расчет тензора метрики Бойера-Линдквиста g_mu_nu(r, theta) в реальном времени в геометрических единицах (G = c = 1).",
        "Численный интегратор Рунге-Кутты 4-го порядка (RK4) для времениподобных и светоподобных геодезических (орбиты zoom-whirl, прецессия).",
        "Релятивистская модель тонкого диска Новикова-Торна с теоремой Лиувилля (I_obs = g^4 * I_em) для эффекта Доплера и гравитационного красного смещения.",
        "Интерактивные осциллографы эффективного потенциала V_eff(r) и фазовых портретов.",
      ],
      tradeoff:
        "Выполнение релятивистских расчетов в шейдерах WebGL обеспечивает максимальную доступность и кроссплатформенность, но уступает в абсолютной точности тяжелым распределенным кодам GRMHD.",
      lesson:
        "Математические инварианты (скаляр Кречмана, сохранение энергии E и углового момента L_z) должны служить непрерывными тестами устойчивости симуляции.",
    },
    "crowdsafe-physics": {
      problem:
        "Исследовательская среда для анализа пешеходной динамики и эвакуации людей, моделирующая контактную механику, панику и сужения выходов.",
      architecture: [
        "Физический движок на базе модели социальных сил Хельбинга-Фаркаша-Вичека (HFV) с упругими и фрикционными взаимодействиями.",
        "Сервер на FastAPI с поддержкой WebSockets для передачи кадров, телеметрии и управления ходом симуляции.",
        "Интерактивный редактор геометрии для создания стен, колонн, выходов и зон спавна агентов.",
        "Модуль A/B сравнения сценариев с фиксацией генератора случайных чисел для анализа чувствительности параметров.",
        "Эмпирическая валидация результатов по эталонному датасету HERMES с консольными утилитами.",
      ],
      tradeoff:
        "Микроскопические модели точно отражают заторы и паническое арочное запирание у дверей, однако вычислительная сложность растет квадратично O(N^2) без пространственного разбиения.",
      lesson:
        "Разделяйте создание сценариев, физический расчет и запись метрик на независимые этапы для обеспечения полной воспроизводимости экспериментов.",
    },
    fluenttube: {
      problem:
        "Автономное локальное приложение для изучения языков по видеоматериалам YouTube с сохранением конфиденциальности файлов и прогресса на устройстве.",
      architecture: [
        "Интерфейс на React и TypeScript с TanStack Query и Zustand для управления состояниями воспроизведения и диктанта.",
        "Серверная часть на FastAPI с очередью фоновых задач для асинхронного извлечения аудио и транскрибации.",
        "Локальная нейросеть Faster-Whisper с автоматическим выбором между процессором и графическим ускорителем NVIDIA CUDA.",
        "Конвейер FFmpeg и ffprobe для анализа медиапотоков и кеширования MP4 без перекодирования.",
        "Хранилище SQLite с режимом Write-Ahead Logging (WAL) и строгим контролем внешних ключей.",
      ],
      tradeoff:
        "Локальная работа Faster-Whisper гарантирует абсолютную приватность и офлайн-режим, но требует загрузки модели и зависит от мощности процессора.",
      lesson:
        "Длительные задачи обработки медиафайлов должны разбиваться на контрольные отрезки (чекпоинты) для восстановления при сбоях.",
    },
    "explora-bolivia": {
      problem:
        "Туристический веб-сервис по достопримечательностям Боливии с каталогом маршрутов и структурированным хранением данных.",
      architecture: [
        "Next.js и библиотека Shadcn для построения модульного пользовательского интерфейса.",
        "Серверный контур на NestJS с TypeORM и базой данных PostgreSQL для транзакционной надежности.",
        "Контейнеризация в Docker и пайплайны GitLab для автоматизированного тестирования.",
      ],
      tradeoff:
        "Разделение на фронтенд и бэкенд упрощает независимое масштабирование, но увеличивает количество контрактов API.",
      lesson:
        "Проектируйте модель данных и контракт API совместно: формат представления сущности, методы выборки и слой валидации.",
    },
    "maxi-basquet": {
      problem:
        "Платформа управления международными турнирами по баскетболу, регламентом соревнований, составами команд и расписанием матчей.",
      architecture: [
        "Модульное веб-приложение на стеке Django и Python.",
        "Реляционная база данных PostgreSQL и стилизация интерфейса на Bootstrap.",
        "Сквозной контроль данных: от валидации форм до ограничений целостности на уровне базы.",
      ],
      tradeoff:
        "Монолит на Django ускоряет запуск продукта, однако динамичные интерактивные сценарии требуют дополнительного клиентского кода.",
      lesson:
        "Определяйте регламент турнира в слое бизнес-логики, а инварианты фиксируйте ограничениями БД. Отправка формы должна соответствовать валидной доменной операции.",
    },
    "long-old-live": {
      problem:
        "Оздоровительный портал для пожилых людей с упражнениями для поддержания физической формы и когнитивными тренировками.",
      architecture: [
        "Интерфейс на нативном JavaScript (Vanilla), семантическом HTML и CSS/Bootstrap.",
        "Платформа Firebase в качестве облачного бэкенда.",
        "Разделение логики рендеринга, событий пользователя и сетевых вызовов.",
      ],
      tradeoff:
        "Отказ от тяжелых фреймворков гарантирует легкость сайта, но требует дисциплины в организации модулей по мере роста функционала.",
      lesson:
        "Начинайте с доступного семантического HTML, наращивая логику модулями. Правила доступа к бэкенду проверяйте отдельно от визуальных элементов.",
    },
  },
  ja: {
    "onelink-saas": {
      problem:
        "毎秒数万アクセスを処理する高並行性リンクインバイオプラットフォーム。マイクロ秒単位のプロフィール配信、TimescaleDBによる時系列クリック分析、マルチテナント権限管理、Sentinel AIによるリアルタイム脅威検知を実装。",
      architecture: [
        "Next.js 16 (React 19 App Router)、Server Components、およびISRを活用したTurborepoモノレポ構成。",
        "クリーン／ヘキサゴナルアーキテクチャおよびOpenAPI 3.0に基づくNestJS 12バックエンド（SWC高速ビルド）。",
        "PostgreSQL 16（Prisma 6）のリレーショナル構造とTimescaleDBハイパーテーブルによるデュアルデータ永続化。",
        "Redis 7 Stackを用いたキャッシュアサイド設計とBullMQ非同期キューによる安全なログ集約。",
        "エンタープライズRBAC（所有者／管理者／安全管理／編集者／閲覧者）と25ms以内のSentinel AI脅威判定。",
      ],
      tradeoff:
        "TimescaleDBは時系列の自動パーティション分割と高速集計を実現しますが、Prismaとは別にスキーマ管理が必要です。Redisキャッシュは高速配信を保証する一方、更新時の厳格なキャッシュ破棄が必須となります。",
      lesson:
        "高頻度の読み取りパスと書き込みログ集約をメッセージキューで完全に分離すること。公開プロフィールのレスポンス速度をアナリティクス処理で低下させてはなりません。",
    },
    "kerr-spacetime-workstation": {
      problem:
        "回転ブラックホール（カー計量）周辺の一般相対性理論効果を、外部サーバーに依存せずブラウザ上で完全リアルタイム計算・物理描画するワークステーション。",
      architecture: [
        "WebGL 2.0およびThree.js r160パイプライン。GLSLシェーダーによる相対論的レイマーチングと降着円盤放射シミュレーション。",
        "幾何学単位系（G = c = 1）でリアルタイムに計算される厳密なボイヤー・リンキスト計量テンソル g_mu_nu(r, theta)。",
        "測地線方程式を解く4次ルンゲ＝クッタ法（RK4）数値積分器（ズームワール軌道、近点移動、ISCO円軌道化に対応）。",
        "リウヴィルの定理（I_obs = g^4 * I_em）を適用したノビコフ・ソーン薄型降着円盤放射モデル（ドップラー効果と重力赤方偏移）。",
        "有効ポテンシャル V_eff(r) およびシンプレクティック位相空間軌道を表示する対話型オシロスコープ。",
      ],
      tradeoff:
        "すべての数値相対論計算をGLSLシェーダーとブラウザJavaScriptで完結させることでゼロ構成の移植性を実現していますが、大規模並列スーパーコンピュータによるGRMHDコードと比較すると積分精度に限界があります。",
      lesson:
        "クレッチマンスカラー、保存エネルギーE、角運動量L_zなどの物理的不変量を、リアルタイムシミュレーションの継続的ユニットテストおよび数値安定性の指標として機能させること。",
    },
    "crowdsafe-physics": {
      problem:
        "歩行者動力学および避難行動シミュレーションの研究スタジオ。人体の接触力学、パニック時の群集行動、出口のボトルネック現象を再現可能にモデル化。",
      architecture: [
        "弾性力、摩擦力、心理的社会力を組み合わせたヘルビング・ファルカス・ヴィチェック（HFV）社会力モデル物理エンジン。",
        "リアルタイムなフレーム配信、テレメトリ収集、シミュレーション遠隔操作を可能にするFastAPI＋WebSocketバックエンド。",
        "壁、障害物、出口、エージェント発生領域をリアルタイムに配置・編集できるインタラクティブシナリオエディタ。",
        "乱数シード固定によるパラメータスイープと感度分析を支援するA/Bシナリオ比較エンジン。",
        "HERMES実証ベンチマークデータセットに基づくCLI検証テストスイート。",
      ],
      tradeoff:
        "微視的な社会力モデルは出口付近の閉塞アーチ形成を忠実に捉えますが、空間分割を適用しない場合、計算量は密度の2乗 O(N^2) で急激に増加します。",
      lesson:
        "シナリオ作成、数値積分、テレメトリ記録のパイプラインを疎結合に保ち、実験条件の決定性と再現性を完全に担保すること。",
    },
    fluenttube: {
      problem:
        "動画音声からディクテーションや発音練習を生成するローカルファースト語学学習環境。ユーザーの学習データやメディアファイルを外部に送信せず端末内で安全に完結。",
      architecture: [
        "TanStack QueryおよびZustandによる再生・回答状態のきめ細やかな管理を備えたReact＋TypeScriptフロントエンド。",
        "メディア抽出と非同期文字起こしキューを制御するFastAPIバックエンド。",
        "Faster-Whisperを用いた完全ローカル音声認識（CPU動作およびNVIDIA CUDA GPUアクセラレーション対応）。",
        "FFmpegおよびffprobeによるメディア解析、音声抽出、再エンコード不要のMP4セグメントキャッシュ。",
        "Write-Ahead Logging（WAL）と外部キー制約を有効化した堅牢なSQLiteローカルデータベース。",
      ],
      tradeoff:
        "Faster-Whisperのローカル実行は完全なプライバシーとオフライン動作を保証しますが、モデルのダウンロードと端末スペックに応じた計算時間が必要です。",
      lesson:
        "長時間のメディア変換処理はチェックポイント付きの分割単位（例：5分単位）で設計し、プロセス中断時にも即座に復帰できるようにすること。",
    },
    "explora-bolivia": {
      problem:
        "ボリビアの観光資源やおすすめルートを体系的に紹介し、探索体験を支えるWebプラットフォーム。",
      architecture: [
        "Next.jsとShadcnによる高信頼で直感的なUIコンポーネント構成。",
        "NestJSとTypeORM、PostgreSQLによる疎結合なバックエンドサービス境界設計。",
        "DockerコンテナとGitLab CIによる自動テストと再現可能な実行環境。",
      ],
      tradeoff:
        "フロントエンドとバックエンドの厳格な分離により個別の機能拡張が容易になる一方、維持すべきAPIスキーマの保守コストが発生します。",
      lesson:
        "データモデルとAPI仕様を一体で設計すること。目的地情報の保持方法、取得フロー、各層のバリデーション責務を明確にします。",
    },
    "maxi-basquet": {
      problem:
        "国際バスケットボール大会の運営支援システム。出場チーム登録、対戦組み合わせ、試合記録、順位表の更新を一括管理。",
      architecture: [
        "DjangoとPythonを用いた堅牢なフルスタック構成。",
        "PostgreSQLによる整合性の高いリレーショナルデータ構造とBootstrapによる直感的な管理UI。",
        "フォーム入力からビジネスロジック、DB制約に至る一貫したデータバリデーション設計。",
      ],
      tradeoff:
        "Djangoフレームワークの採用により開発速度と安全性を最大化できますが、即時性の高いライブ配信機能には追加のクライアントスクリプトが必要となります。",
      lesson:
        "競技規約をアプリケーション層に明示し、不変条件はDBの制約として設定すること。すべてのデータ更新は有効なドメイン操作として完結させる必要があります。",
    },
    "long-old-live": {
      problem:
        "シニア層の健康維持をサポートするWebサイト。無理のない筋力運動や脳トレアクティビティをわかりやすく提供。",
      architecture: [
        "素のJavaScript（Vanilla）、セマンティックHTML、CSS/Bootstrapによる軽快なフロントエンド。",
        "Firebaseを活用した安全なバックエンド・データ管理。",
        "DOM描画、ユーザー操作、外部API呼び出しを明確に分離したクリーンなモジュール設計。",
      ],
      tradeoff:
        "フレームワークを排除することで軽量性と高い互換性を得られますが、機能拡張時には状態管理の規律を自前で維持する必要があります。",
      lesson:
        "アクセシビリティを考慮したHTMLから設計を開始し、小さなモジュールで機能を追加すること。セキュリティルールはUIとは独立して検証します。",
    },
  },
};

export function getCaseStudy(id: ProjectId, lang: Lang = "en"): CaseStudyData {
  const localized = caseStudiesByLang[lang]?.[id];
  return localized || caseStudiesByLang.en[id];
}

export const caseStudies = caseStudiesByLang.en;
