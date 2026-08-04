import type { LocalizedText, LocalizedList } from './localized';

export interface Project {
  id: string;
  title: LocalizedText;
  tagline: LocalizedText;
  role: LocalizedText;
  responsibilities: LocalizedList;
  problem: LocalizedText;
  solution: LocalizedText;
  image: string;
  initials: string;
  techStack: string[];
  accentColor: string;
  status: 'production' | 'university' | 'hackathon' | 'personal';
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'erp',
    title: { en: 'Tecno H Plus ERP', es: 'Tecno H Plus ERP' },
    tagline: { en: 'Modular business management system', es: 'Sistema de gestión empresarial modular' },
    role: { en: 'Full Stack Developer', es: 'Full Stack Developer' },
    responsibilities: {
      en: [
        'Designed and implemented the PostgreSQL database (Supabase)',
        'Defined security policies (Row Level Security)',
        'Developed the Storefront module',
        'Developed the stock control module',
        'Developed the reporting system',
        'Built and implemented the UI',
        'Collaborated on the overall ERP architecture',
      ],
      es: [
        'Diseño e implementación de la base de datos en PostgreSQL (Supabase)',
        'Definición de políticas de seguridad (Row Level Security)',
        'Desarrollo del módulo Storefront',
        'Desarrollo del módulo de control de stock',
        'Desarrollo del sistema de informes',
        'Maquetado e implementación de interfaces',
        'Colaboración en la arquitectura general del ERP',
      ],
    },
    problem: {
      en: 'A technology repair and retail business needed to track inventory, record sales, manage customers and generate reports — all in a single platform.',
      es: 'Un negocio de reparación y venta de tecnología necesitaba controlar inventario, registrar ventas, gestionar clientes y generar reportes — todo en una sola plataforma.',
    },
    solution: {
      en: 'I designed and built a modular ERP with Next.js and Supabase: secure authentication, real-time metrics dashboard, stock management, invoicing and exportable reports.',
      es: 'Diseñé y desarrollé un ERP modular con Next.js y Supabase. Autenticación segura, dashboard con métricas en tiempo real, gestión de stock, facturación y reportes exportables.',
    },
    image: '/portafolio/TecnoH ERP.jpeg',
    initials: 'TH',
    techStack: ['Next.js', 'React', 'Supabase', 'PostgreSQL'],
    accentColor: '#4F8CFF',
    status: 'production',
    liveUrl: 'https://tecnohplus.com',
  },
  {
    id: 'slotify',
    title: { en: 'Slotify', es: 'Slotify' },
    tagline: { en: 'SaaS for appointment scheduling', es: 'SaaS para programación de citas' },
    role: { en: 'Full Stack Developer', es: 'Full Stack Developer' },
    responsibilities: {
      en: [
        'Gathered and analyzed requirements with the team',
        'Designed the database using Prisma ORM',
        'Developed backend modules',
        'Developed frontend features',
        'Configured the deployment on Render',
        'Managed the domain and production release',
      ],
      es: [
        'Relevamiento y análisis de requisitos junto al equipo',
        'Diseño de la base de datos utilizando Prisma ORM',
        'Desarrollo de módulos backend',
        'Desarrollo de funcionalidades frontend',
        'Configuración del despliegue en Render',
        'Administración del dominio y puesta en producción',
      ],
    },
    problem: {
      en: 'Service businesses need a modern way for their clients to book appointments without calls or messages.',
      es: 'Negocios de servicios necesitan una forma moderna de que sus clientes agenden citas sin llamadas ni mensajes.',
    },
    solution: {
      en: 'I built a complete PWA with JWT authentication, real-time calendar management, per-professional availability, notifications and Docker-based deployment.',
      es: 'Construí una PWA completa con autenticación JWT, gestión de calendario en tiempo real, sistema de disponibilidad por profesional, notificaciones y despliegue con Docker.',
    },
    image: '/portafolio/Slotify.jpeg',
    initials: 'SL',
    techStack: ['Node.js', 'Express.js', 'React', 'Vite', 'Prisma', 'PostgreSQL', 'Docker', 'JWT'],
    accentColor: '#F59E0B',
    status: 'production',
    liveUrl: 'https://slotifyapp.site/',
  },
  {
    id: 'files',
    title: { en: 'Diario El Independiente', es: 'Diario El Independiente' },
    tagline: { en: 'Document management for a newspaper', es: 'Gestión documental para un periódico' },
    role: { en: 'Backend Developer & Database Administrator', es: 'Backend Developer & Database Administrator' },
    responsibilities: {
      en: [
        'Designed and administered the PostgreSQL database',
        'Developed APIs and business logic',
        'Implemented authentication',
        'Organized the backend architecture',
        'Optimized queries and storage',
      ],
      es: [
        'Diseño y administración de la base de datos PostgreSQL',
        'Desarrollo de APIs y lógica de negocio',
        'Implementación de autenticación',
        'Organización de la arquitectura backend',
        'Optimización de consultas y almacenamiento',
      ],
    },
    problem: {
      en: 'A local newspaper managed its editorial workflow with scattered tools. They needed a centralized platform to organize, search and manage documents with access control.',
      es: 'Un periódico local manejaba su flujo editorial con herramientas dispersas. Necesitaban una plataforma centralizada para organizar, buscar y gestionar documentos con control de acceso.',
    },
    solution: {
      en: 'I built a platform with Node.js, Express and PostgreSQL: JWT authentication, Cloudinary storage, advanced search, categories and an admin panel. Deployed on Railway.',
      es: 'Desarrollé una plataforma con Node.js, Express y PostgreSQL. Autenticación JWT, almacenamiento en Cloudinary, búsqueda avanzada, categorías y panel de administración. Desplegado en Railway.',
    },
    image: '/portafolio/sistema de gestion de archivos - el independiente.jpeg',
    initials: 'EI',
    techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'Cloudinary', 'Railway', 'JWT'],
    accentColor: '#22C55E',
    status: 'production',
  },
  {
    id: 'unlar',
    title: { en: 'UNLaR Connect', es: 'UNLaR Connect' },
    tagline: { en: 'University academic platform', es: 'Plataforma académica universitaria' },
    role: { en: 'Full Stack Developer', es: 'Desarrollador Full Stack' },
    responsibilities: {
      en: [
        'End-to-end development (frontend and backend) of the Forum module',
        'End-to-end development of the Events module',
        'Built the main Dashboard',
        'Integrated the modules together',
        'Collaborative work during the hackathon',
      ],
      es: [
        'Desarrollo completo (frontend y backend) del módulo Foro',
        'Desarrollo completo del módulo Eventos',
        'Desarrollo del Dashboard principal',
        'Integración entre módulos',
        'Trabajo colaborativo durante el hackathon',
      ],
    },
    problem: {
      en: 'UNLaR students and faculty had no centralized tool to communicate, share events and manage academic information.',
      es: 'Los estudiantes y docentes de la UNLaR no tenían una herramienta centralizada para comunicarse, compartir eventos y gestionar información académica.',
    },
    solution: {
      en: 'I built the platform during the UNLaR hackathon (May 2026): modern interface, event management, communication system and user profiles. We took 2nd place.',
      es: 'Construí la plataforma en el hackathon de la UNLaR (Mayo 2026). Interfaz moderna, gestión de eventos, sistema de comunicación y perfiles de usuario. Obtvimos el 2do lugar.',
    },
    image: '/portafolio/Unlar Connect.jpeg',
    initials: 'UC',
    techStack: ['Next.js', 'React', 'Supabase', 'PostgreSQL'],
    accentColor: '#8B5CF6',
    status: 'hackathon',
    liveUrl: 'https://unlar-connect.vercel.app/',
  },
  {
    id: 'alabanza',
    title: { en: 'T.E. Worship', es: 'T.E. Worship' },
    tagline: { en: 'PWA for worship management', es: 'PWA para gestión de alabanza' },
    role: { en: 'Full Stack Developer', es: 'Full Stack Developer' },
    responsibilities: {
      en: [
        'Designed the application',
        'Modeled the database',
        'Full Stack development',
        'Implemented it as a PWA',
        'Deployment and maintenance',
      ],
      es: [
        'Diseño de la aplicación',
        'Modelado de la base de datos',
        'Desarrollo Full Stack',
        'Implementación como PWA',
        'Despliegue y mantenimiento',
      ],
    },
    problem: {
      en: 'The music team needed quick access to an organized repertoire of songs with chords, without depending on scattered websites or documents during rehearsals and performances.',
      es: 'El equipo de música necesitaba acceder rápidamente a un repertorio organizado de canciones con acordes, sin depender de múltiples sitios web o documentos dispersos durante ensayos y presentaciones.',
    },
    solution: {
      en: 'I developed a Progressive Web App with its own song and chord database, optimized for mobile devices. The app lets you browse repertoires, search songs quickly and access content from anywhere.',
      es: 'Desarrollé una Progressive Web App con una base de datos propia de canciones y acordes, optimizada para dispositivos móviles. La aplicación permite consultar repertorios, buscar canciones rápidamente y acceder al contenido desde cualquier lugar.',
    },
    image: '/portafolio/alabanza.jpeg',
    initials: 'TE',
    techStack: ['React', 'Node.js', 'Firebase'],
    accentColor: '#EC4899',
    status: 'production',
    liveUrl: 'https://martinprlt.github.io/Alabanza-T.E./',
  },
];
