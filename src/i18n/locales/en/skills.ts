import type { SkillCategory } from "../../../types";

export const skills: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    icon: "code",
    description: "Programming languages used to construct application logic",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "HTML",
      "CSS",
      "SQL",
      "Bash",
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: "monitor",
    description: "Technologies and libraries for building user interfaces",
    items: ["React", "Next.js", "Astro", "Tailwind CSS", "Redux"],
  },
  {
    id: "backend",
    name: "Backend",
    icon: "server",
    description: "Server-side architectures, APIs, and business logic",
    items: ["Node.js", "NestJS", "Express", "Flask"],
  },
  {
    id: "databases",
    name: "Databases",
    icon: "database",
    description: "Relational and non-relational database storage engines",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
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
      "Skills",
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
