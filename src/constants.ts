import { Project, SkillGroup, Achievement, Experience, Education, Translation } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'videntia',
    title: 'VIDENTIA',
    description: 'Developed an AI-powered visual analysis platform that generates human-like descriptions from images, enabling accessibility, research, and investigative workflows. Recognized as a featured project at Expokinal 2025.',
    tags: ['NODE_JS', 'REACT', 'CHAKRA_UI', 'GOOGLE_CLOUD_VISION', 'OPENROUTER', 'LLM', 'COMPUTER_VISION', 'AI'],
    context: 'SCHOOL_PROJECT',
    metrics: {
      timeframe: '1 WEEK',
      teamSize: '6 DEVS',
      result: 'FEATURED__AT___EXPOKINAL_2025',
    },
    images: [
      'https://i.ibb.co/RM48qB4/Whats-App-Image-2025-07-10-at-9-00-47-PM.jpg',
      'https://i.ibb.co/GN9J3H0/Whats-App-Image-2025-07-10-at-9-01-51-PM.jpg',
      'https://i.ibb.co/5dkJGWS/Whats-App-Image-2025-07-10-at-9-07-13-PM.jpg',
      'https://i.ibb.co/2J2GXYn/e66b0968bbc3.png',
      'https://i.ibb.co/v4gFSsFQ/d641928a3c07.png'
    ],
    github: 'https://github.com/luisdeleon/sql-optimizer',
    featured: false,
  },
  {
    id: 'AstroTracker',
    title: 'ASTRO_TRACKER',
    description: 'Built an interactive platform to simulate asteroid impacts on Earth, combining NASA APIs, FITS data visualization, and World Bank data to estimate physical and economic damage.',
    tags: ['NODE_JS', 'REACT', 'CHAKRA_UI', 'MONGODB', 'NASA_API', 'FITS', 'DATA_ANALYSIS', 'API_INTEGRATION', 'DATA_VISUALIZATION', 'SCIENTIFIC_DATA', 'SIMULATION', 'HACKATHON'],
    context: 'HACKATHON_PROJECT',
    metrics: {
      timeframe: '48 HOURS',
      teamSize: '6 DEVS',
      result: 'MVP',
    },
    images: [
      '/AstroTracker/Landing.png',
      '/AstroTracker/Simulation.png',
      '/AstroTracker/Orbits.png',
      '/AstroTracker/FITS.png',
      '/AstroTracker/Certificate.png',
    ],
    github: 'https://github.com/LuisDeLeon24/MeteorMadnes-frontend.git',
    link:'https://meteor-madnes-frontend.vercel.app/',
    featured: false,
  },
  {
    id: 'UNMASKAI',
    title: 'UNMASK_AI',
    description: 'Developed an AI tool leveraging OCR and LLMs to extract and analyze visual data, enabling automated information processing and deep search capabilities.',
    tags: ['NODE_JS', 'REACT', 'TAILWIND','AI','LLM','OCR','GOOGLE_DEEP_SEARCH','HACKATHON', 'BAIDU'],
    context: 'HACKATHON_PROJECT',
    metrics: {
      timeframe: '3 DAYS',
      teamSize: '1 DEV',
      result: 'MVP',
    },
    images: [
      '/Unmask/Landing.png',
      '/Unmask/UI.png',
      '/Unmask/Result1.png',
      '/Unmask/Result2.png',
    ],
    github: 'https://github.com/LuisDeLeon24/UnmaskAI---Frontend.git',
    link:'https://unmask-ai-frontend.vercel.app/',
    featured: false,
  },
  {
    id: 'Agent builder',
    title: 'AGENT_BUILDER',
    description: 'A platform for building and deploying AI agents powered by LLMs, RAG, and real-time data integration. Awarded at the Atom Dev day hackathon 2026',
    tags: ['SUPABASE', 'NEXT_JS', 'LLM','LangChain','RAG', 'AI', 'HACKATHON', 'AWARDED'],
    context: 'HACKATHON_PROJECT',
    metrics: {
      timeframe: '8 HOURS',
      teamSize: '3 DEVS',
      result: 'AWARDED',
    },
    images: [
      '/AgentBuilder/AgentBuilder.png',
    ],
    github: 'https://github.com/JohanMiguel/AI-Agent-Builder.git',
    featured: true,
  },
  {
    id: 'APRENDI',
    title: 'APRENDI',
    description: 'AI-powered educational platform that analyzes learning patterns and provides personalized insights through real-time data processing. Winner (1st place) at the Universidad Francisco Marroquín Computer Science Hackathon 2026.',
    tags: ['NEXT_JS', 'TYPE_SCRIPT', 'TAILWIND', 'SUPABASE','HACKATHON', 'AWARDED'],
    context: 'HACKATHON_PROJECT',
    metrics: {
      timeframe: 'ONGOING',
      teamSize: '3 DEVS',
      result: 'AWARDED',
    },
    images: [
      '/Arendi/Winners.jpeg',
      '/Arendi/Landing.png',
      '/Arendi/Lab.png',
      '/Arendi/Pricing.png',
    ],
    github: 'https://github.com/LuisDeLeon24/aprendii.git',
    link:'https://aprendii.lovable.app/',
    featured: true,
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'FRONTEND',
    skills: ['REACT_19', 'NEXT_JS_15', 'TAILWIND_4', 'CHAKRA_UI','BOOTSTRAP_5'],
  },
  {
    title: 'BACKEND',
    skills: ['NODE_JS', 'JAVA_SPRING_BOOT','EXPRESS', 'REST_APIS', 'GRAPHQL', 'WEBSOCKETS'],
  },
  {
    title: 'OTHER',
    skills: ['POSTGRES_SQL', 'MONGODB', 'GIT', 'PAYMENT_INTEGRATIONS'],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'LEADERSHIP_AWARD: FUNDACION_KINAL',
    description: 'RECOGNITION: Academic excellence and professional ethics scholarship for business leadership development.',
    date: 'oct 2023',
    images: [
      '/Leadership.png',
    ],
    featured: false,
  },
  {
    title: 'HONORIFIC_MENTION: NASA_SPACE_APPS',
    description: 'GLOBAL_CONNECTION: Led technical research and team coordination for the world\'s largest global hackathon.',
    date: 'oct 2025',
    images: [
      '/AstroTracker/Award.png',
    ],
    featured: false,
  },
  {
    title: 'FINALIST_TOP5: ATOM_DEV_DAY',
    description: 'RAPID_BUILD: Developed an automated sales agent builder platform in a 12-hour high-pressure sprint.',
    date: 'mar 2026',
    images: [
      '/AgentBuilder/Team.jpeg',
    ],
    featured: true,
  },
  {
    title: 'WINNER_1ST: UFM_CS_HACKATHON',
    description: 'SYSTEM_DEPLOYED: AI-powered adaptive learning platform with interactive Linux sandboxes and neurodivergent-friendly UI.',
    date: 'mar 2026',
    images: [
      '/Arendi/Winners.jpeg',
      '/Arendi/Me.jpeg',
    ],
    featured: true,
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'NEONET GUATEMALA',
    role: 'SOFTWARE_DEVELOPER_INTERN',
    period: '2025 - 2025',
    description: 'Supported client integration into payment gateway systems, advising on implementation and contributing to high-throughput financial platforms.',
    technologies: ['C#', '.NET', 'SQL_SERVER'],
  },
];

export const EDUCATION: Education[] = [
  {
    institution: 'FUNDACIÓN KINAL',
    degree: 'COMPUTER SCIENCE ORIENTED HIGH SCHOOL DIPLOMA',
    period: '2023 - 2025',
    description: 'Focused on fullstack application development, networking, and infrastructure fundamentals, with hands-on experience building web applications and AI-driven solutions.',
  },
  {
    institution: 'UNIVERSIDAD DE SAN CARLOS DE GUATEMALA',
    degree: 'B.S. COMPUTER SCIENCE ',
    period: '2026 - PRESENT',
    description: 'Pursuing a Computer Science degree with focus on systems, networking, and fullstack development, complemented by active participation in hackathons and real-world projects.',
  },
];

export const TRANSLATIONS: Record<'en' | 'es', Translation> = {
  en: {
    nav: {
      about: 'ABOUT',
      skills: 'STACK',
      projects: 'SHOWCASE',
      experience: 'EXPERIENCE',
      awards: 'AWARDS',
      education: 'EDUCATION',
      contact: 'CONNECT',
    },
    hero: {
      headline: 'I turn ideas into functional products — fast.',
      subheadline: 'SOFTWARE_ENGINEER: Focused on rapid execution and technical rigor. Building real solutions.',
      cta: 'CONTACT_ME',
      secondaryCta: 'PROJECTS',
    },
    about: {
      title: 'ABOUT ME',
      content: 'I am Luis De León. I operate at the intersection of speed and stability. My workflow is optimized for high-pressure environments where execution is the only metric that matters.',
    },
    skills: {
      title: 'TECHNICAL_STACK',
    },
    projects: {
      title: 'PROJECT_SHOWCASE',
      viewMore: 'VIEW_ALL_REPOS',
      seeMore: 'SEE ALL PROJECTS',
      problem: 'CONSTRAINT',
      solution: 'EXECUTION',
      outcome: 'RESULT',
      details: 'DETAILS',
    },
    experience: {
      title: 'WORK_EXPERIENCE',
    },
    awards: {
      title: 'AWARDS',
      seeMore: 'SEE ALL AWARDS',
    },
    education: {
      title: 'EDUCATION',
    },
    contact: {
      title: 'CONTACT ME',
      email: 'EMAIL',
      github: 'GITHUB',
      linkedin: 'LINKEDIN',
    },
  },
  es: {
    nav: {
      about: 'SOBRE_MI',
      skills: 'STACK',
      projects: 'PROYECTOS',
      experience: 'EXPERIENCIA',
      awards: 'PREMIOS',
      education: 'EDUCACION',
      contact: 'CONTACTO',
    },
    hero: {
      headline: 'Convierto ideas en productos funcionales — rápido.',
      subheadline: 'INGENIERO_ALTA_VELOCIDAD: Enfocado en ejecución rápida y rigor técnico. Construyendo soluciones reales.',
      cta: 'INICIAR_CONTACTO',
      secondaryCta: 'VER_PROYECTOS',
    },
    about: {
      title: 'EJECUCION_SOBRE_PALABRAS.',
      content: 'Soy Luis De León. Opero en la intersección de velocidad y estabilidad. Mi flujo de trabajo está optimizado para entornos de alta presión donde la ejecución es la única métrica que importa.',
    },
    skills: {
      title: 'STACK_TECNICO',
    },
    projects: {
      title: 'GALERIA_PROYECTOS',
      viewMore: 'VER_REPOS_GITHUB',
      seeMore: 'VER TODOS LOS PROYECTOS',
      problem: 'RESTRICCION',
      solution: 'EJECUCION',
      outcome: 'RESULTADO',
      details: 'DETALLES',
    },
    experience: {
      title: 'EXPERIENCIA_LABORAL',
    },
    awards: {
      title: 'PREMIOS',
      seeMore: 'VER TODOS LOS PREMIOS',
    },
    education: {
      title: 'EDUCACIÓN',
    },
    contact: {
      title: 'CONTACTAME',
      email: 'EMAIL',
      github: 'GITHUB',
      linkedin: 'LINKEDIN',
    },
  },
};
