export interface LanguageItem {
  id: string;
  name: string;
  description: string;
  fluency: string;
  level: number;
  logo: string;
  color: string;
}

export const languages: LanguageItem[] = [
  {
    id: "es",
    name: "Spanish",
    description: "Native speaker",
    fluency: "100%",
    level: 5,
    logo: "/images/languages/spanish.png",
    color: "primary",
  },
  {
    id: "en",
    name: "English",
    description: "B2 - Upper Intermediate",
    fluency: "80%",
    level: 4,
    logo: "/images/languages/english.png",
    color: "secondary",
  },
];
