// ── Shared type definitions for the portfolio ──
// All data-structure interfaces live here to avoid scattering them across locale files.

/** A project entry displayed on the portfolio/projects pages. */
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: "frontend" | "backend" | "fullstack";
  github: string;
  live?: string;
  image: string;
  featured: boolean;
  date: string;
}

/** A single academic education entry (degree, diploma, etc.). */
export interface AcademicItem {
  id: string;
  title: string;
  institution: string;
  date: string;
  location: string;
  description: string;
  logo: string;
  gpa?: string;
  link?: {
    text: string;
    url: string;
  };
}

/** A single certification entry. */
export interface Certification {
  id: string;
  title: string;
  institution: string;
  date: string;
  description: string;
  link?: string;
  logo: string;
}

/** A group of certifications under a common category. */
export interface CertificationCategory {
  id: string;
  name: string;
  items: Certification[];
}

/** A spoken language proficiency entry. */
export interface LanguageItem {
  id: string;
  name: string;
  description: string;
  fluency: string;
  level: number;
  logo: string;
}

/** A skill category with a list of skill names. */
export interface SkillCategory {
  id: string;
  name: string;
  items: string[];
  icon?: string;
  description?: string;
}

/** A single work-experience entry for the timeline. */
export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  date: string;
  description: string;
  responsibilities: string[];
  tags: string[];
}
