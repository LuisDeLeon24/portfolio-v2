export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  context: string;
  metrics: {
    timeframe: string;
    teamSize: string;
    result: string;
  };
  images: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  images?: string[];
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface Translation {
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    awards: string;
    education: string;
    contact: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
    secondaryCta: string;
  };
  about: {
    title: string;
    content: string;
  };
  skills: {
    title: string;
  };
  projects: {
    title: string;
    viewMore: string;
    seeMore: string;
    problem: string;
    solution: string;
    outcome: string;
    details: string;
  };
  experience: {
    title: string;
  };
  awards: {
    title: string;
    seeMore: string;
  };
  education: {
    title: string;
  };
  contact: {
    title: string;
    email: string;
    github: string;
    linkedin: string;
  };
}
