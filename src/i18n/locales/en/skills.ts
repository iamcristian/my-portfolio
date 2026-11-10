import type { SkillCategory } from "../../../types";

export const skills: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    icon: "code",
    description:
      "Core programming languages used to build application and system logic",
    items: ["TypeScript", "JavaScript", "Python", "Java"],
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: "monitor",
    description:
      "Web standards, frameworks, and libraries for building user interfaces",
    items: ["HTML", "CSS", "React", "Next.js", "Astro", "Tailwind CSS"],
  },
  {
    id: "backend",
    name: "Backend",
    icon: "server",
    description: "Server-side architectures, APIs, and business logic",
    items: ["Node.js", "NestJS", "FastAPI", "Django", "Express"],
  },
  {
    id: "databases",
    name: "Databases",
    icon: "database",
    description:
      "Relational, time-series, in-memory, and document database engines",
    items: ["PostgreSQL", "TimescaleDB", "MySQL", "MongoDB", "Redis", "SQLite"],
  },

  {
    id: "devops",
    name: "DevOps & Tools",
    icon: "terminal",
    description: "Deployment automation, version control, and environments",
    items: ["Docker", "Git", "Linux", "CI/CD", "GitHub Actions"],
  },
  {
    id: "security",
    name: "Security",
    icon: "shield",
    description:
      "Application protection, vulnerability scanning, and networking",
    items: ["OWASP", "API Security", "Penetration Testing", "Network Security"],
  },
  {
    id: "ai",
    name: "AI & Agentic Systems",
    icon: "sparkles",
    description: "Generative AI and intelligent agent architectures",
    items: [
      "Model Context Protocol (MCP)",
      "Prompt Engineering",
      "Agentic Workflows",
      "Agent Skills",
    ],
  },
  {
    id: "soft-skills",
    name: "Soft Skills",
    icon: "brain",
    description:
      "Interpersonal attributes and professional mindset for effective collaboration",
    items: [
      "Leadership",
      "Assertive Communication",
      "Problem Solving",
      "Adaptability",
    ],
  },
];
