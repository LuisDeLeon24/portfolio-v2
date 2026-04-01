import { Project, SkillGroup, Achievement, Experience, Education, Translation } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'unmask-ai',
    title: 'UNMASK_AI',
    description: 'NEURAL_DETECTION_ENGINE: Real-time analysis of AI-generated linguistic patterns.',
    tags: ['PY_TORCH', 'FAST_API', 'REACT_TS', 'AWARDED'],
    context: 'GLOBAL_HACKATHON_2025',
    metrics: {
      timeframe: '24H',
      teamSize: '3_OPS',
      result: 'WINNER_GOLD',
    },
    image: 'https://picsum.photos/seed/unmask/800/600',
    github: 'https://github.com/luisdeleon/unmask-ai',
    featured: true,
  },
  {
    id: 'rapidship',
    title: 'RAPID_SHIP',
    description: 'CORE_INFRASTRUCTURE: Production-ready MERN boilerplate for high-velocity deployment.',
    tags: ['MONGODB', 'EXPRESS', 'REACT', 'NODE'],
    context: 'INTERNAL_TOOLING',
    metrics: {
      timeframe: '48H',
      teamSize: 'SOLO_OP',
      result: '50+_DEPLOYS',
    },
    image: 'https://picsum.photos/seed/rapidship/800/600',
    github: 'https://github.com/luisdeleon/rapidship',
    featured: true,
  },
  {
    id: 'springbank',
    title: 'SPRING_BANK',
    description: 'FINANCIAL_CORE: High-concurrency banking engine with ACID compliance.',
    tags: ['JAVA_SPRING', 'POSTGRES', 'DOCKER'],
    context: 'ENTERPRISE_CONTRACT',
    metrics: {
      timeframe: '14_DAYS',
      teamSize: '2_OPS',
      result: 'STABLE_PROD',
    },
    image: 'https://picsum.photos/seed/springbank/800/600',
    featured: false,
  },
  {
    id: 'sql-optimizer',
    title: 'SQL_OPTIMIZER',
    description: 'QUERY_HEURISTICS: Automated indexing and restructuring for large-scale datasets.',
    tags: ['SQL', 'PYTHON', 'REACT'],
    context: 'HACKATHON_PROJECT',
    metrics: {
      timeframe: '24H',
      teamSize: 'SOLO_OP',
      result: 'TOP_10_FINALIST',
    },
    image: 'https://picsum.photos/seed/sqlopt/800/600',
    github: 'https://github.com/luisdeleon/sql-optimizer',
    featured: false,
  },
  {
    id: 'crypto-vault',
    title: 'CRYPTO_VAULT',
    description: 'SECURE_STORAGE: Multi-signature wallet infrastructure with hardware security module integration.',
    tags: ['RUST', 'SOLANA', 'WEBAUTHN'],
    context: 'WEB3_SECURITY_AUDIT',
    metrics: {
      timeframe: '72H',
      teamSize: 'SOLO_OP',
      result: 'ZERO_EXPLOITS',
    },
    image: 'https://picsum.photos/seed/vault/800/600',
    github: 'https://github.com/luisdeleon/crypto-vault',
    featured: true,
  },
  {
    id: 'edge-compute',
    title: 'EDGE_COMPUTE',
    description: 'DISTRIBUTED_RUNTIME: Low-latency execution environment for edge-side data processing.',
    tags: ['GO', 'WASM', 'KUBERNETES', 'HACKATHON'],
    context: 'OPEN_SOURCE_CONTRIBUTION',
    metrics: {
      timeframe: 'ONGOING',
      teamSize: 'COMMUNITY',
      result: '1k+_STARS',
    },
    image: 'https://picsum.photos/seed/edge/800/600',
    github: 'https://github.com/luisdeleon/edge-compute',
    featured: false,
  },
  {
    id: 'neural-mesh',
    title: 'NEURAL_MESH',
    description: 'DECENTRALIZED_AI: Peer-to-peer neural network training protocol.',
    tags: ['PYTHON', 'LIBP2P', 'PYTORCH'],
    context: 'RESEARCH_PROTOTYPE',
    metrics: {
      timeframe: '30_DAYS',
      teamSize: '2_OPS',
      result: 'BETA_LIVE',
    },
    image: 'https://picsum.photos/seed/mesh/800/600',
    github: 'https://github.com/luisdeleon/neural-mesh',
    featured: false,
  },
  {
    id: 'flux-db',
    title: 'FLUX_DB',
    description: 'TIME_SERIES_ENGINE: High-throughput database for real-time telemetry.',
    tags: ['RUST', 'GRPC', 'KAFKA'],
    context: 'OPEN_SOURCE',
    metrics: {
      timeframe: 'ONGOING',
      teamSize: 'SOLO_OP',
      result: '500_STARS',
    },
    image: 'https://picsum.photos/seed/flux/800/600',
    github: 'https://github.com/luisdeleon/flux-db',
    featured: true,
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'FRONTEND_ARCHITECTURE',
    skills: ['REACT_19', 'NEXT_JS_15', 'TAILWIND_4', 'TYPESCRIPT_5', 'MOTION_12', 'WEB_GL'],
  },
  {
    title: 'BACKEND_SYSTEMS',
    skills: ['NODE_JS', 'JAVA_SPRING_BOOT', 'PYTHON_FASTAPI', 'GO_LANG', 'RUST_WASM'],
  },
  {
    title: 'INFRA_SECURITY',
    skills: ['POSTGRES_SQL', 'REDIS_STACK', 'DOCKER_K8S', 'AWS_CLOUD', 'CI_CD_PIPELINES'],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'WINNER_GOLD: GLOBAL_TECH_HACKATHON',
    description: 'SYSTEM_DEPLOYED: Real-time disaster response architecture using edge computing and satellite data.',
    date: '2025_Q1',
    images: [
      'https://picsum.photos/seed/award1/400/300',
      'https://picsum.photos/seed/award2/400/300',
    ],
    featured: true,
  },
  {
    title: 'FELLOWSHIP: YC_BUILD_PROGRAM',
    description: 'INTENSIVE_BUILD: Selected for high-velocity product development among 5000+ applicants.',
    date: '2024_Q3',
    images: [
      'https://picsum.photos/seed/yc1/400/300',
    ],
    featured: true,
  },
  {
    title: 'TOP_CONTRIBUTOR: OPEN_SOURCE_CORE',
    description: 'MAINTENANCE: Active contributions to high-signal developer tools used by 10k+ engineers.',
    date: '2024_Q2',
    images: [
      'https://picsum.photos/seed/os1/400/300',
      'https://picsum.photos/seed/os2/400/300',
      'https://picsum.photos/seed/os3/400/300',
    ],
    featured: false,
  },
  {
    title: 'SPEAKER: TECH_CON_GUATEMALA',
    description: 'PRESENTATION: Scaling microservices in high-latency environments.',
    date: '2023_Q4',
    images: [
      'https://picsum.photos/seed/speaker1/400/300',
    ],
    featured: false,
  },
  {
    title: 'INNOVATION_AWARD: GOOGLE_CLOUD',
    description: 'RECOGNITION: Excellence in cloud-native architecture and serverless implementation.',
    date: '2023_Q2',
    images: [
      'https://picsum.photos/seed/google1/400/300',
    ],
    featured: true,
  },
  {
    title: 'BEST_UX: DESIGN_WEEK_2023',
    description: 'AWARD: Outstanding user experience in a complex data visualization tool.',
    date: '2023_Q1',
    images: [
      'https://picsum.photos/seed/design1/400/300',
    ],
    featured: false,
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'TECH_CORP_SYSTEMS',
    role: 'SENIOR_SOFTWARE_ENGINEER',
    period: '2023 - PRESENT',
    description: 'Leading the development of high-concurrency financial systems. Optimized query performance by 40%.',
    technologies: ['JAVA', 'SPRING_BOOT', 'POSTGRES', 'K8S'],
  },
  {
    company: 'INNOVATE_LABS',
    role: 'FULL_STACK_DEVELOPER',
    period: '2021 - 2023',
    description: 'Architected and deployed 10+ scalable web applications. Managed a team of 4 developers.',
    technologies: ['REACT', 'NODE_JS', 'AWS', 'TYPESCRIPT'],
  },
  {
    company: 'STARTUP_HUB',
    role: 'JUNIOR_DEVELOPER',
    period: '2020 - 2021',
    description: 'Developed core features for a high-traffic e-commerce platform. Focused on frontend performance.',
    technologies: ['JAVASCRIPT', 'REACT', 'CSS_3', 'FIREBASE'],
  },
];

export const EDUCATION: Education[] = [
  {
    institution: 'GLOBAL_TECH_UNIVERSITY',
    degree: 'B.S. IN COMPUTER_SCIENCE',
    period: '2016 - 2020',
    description: 'Specialized in Distributed Systems and Artificial Intelligence. GPA: 3.9/4.0',
  },
  {
    institution: 'ELITE_CODING_ACADEMY',
    degree: 'ADVANCED_SOFTWARE_ENGINEERING_BOOTCAMP',
    period: '2020',
    description: 'Intensive program focused on full-stack development and system architecture.',
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
      subheadline: 'HIGH_VELOCITY_ENGINEER: Focused on rapid execution and technical rigor. Building real solutions in < 48 hours.',
      cta: 'CONTACT_ME',
      secondaryCta: 'VIEW_SHOWCASE',
    },
    about: {
      title: 'EXECUTION_OVER_WORDS.',
      content: 'I am Luis De León. I operate at the intersection of speed and stability. My workflow is optimized for high-pressure environments where execution is the only metric that matters.',
    },
    skills: {
      title: 'TECHNICAL_STACK',
    },
    projects: {
      title: 'PROJECT_SHOWCASE',
      viewMore: 'VIEW_ALL_REPOS',
      seeMore: 'SEE_ALL_PROJECTS',
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
      seeMore: 'SEE_ALL_AWARDS',
    },
    education: {
      title: 'EDUCATION',
    },
    contact: {
      title: 'ESTABLISH_LINK',
      email: 'EMAIL_SECURE',
      github: 'GITHUB_REPO',
      linkedin: 'LINKEDIN_PROF',
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
      subheadline: 'INGENIERO_ALTA_VELOCIDAD: Enfocado en ejecución rápida y rigor técnico. Construyendo soluciones reales en < 48 horas.',
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
      seeMore: 'VER_TODOS_LOS_PROYECTOS',
      problem: 'RESTRICCION',
      solution: 'EJECUCION',
      outcome: 'RESULTADO',
      details: 'DETALLES',
    },
    experience: {
      title: 'EXPERIENCIA_LABORAL',
    },
    awards: {
      title: 'Premios',
      seeMore: 'VER_TODOS_LOS_PREMIOS',
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
