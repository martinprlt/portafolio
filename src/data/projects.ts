export interface Project {
  id: string;
  title: string;
  tagline: string;
  role: string;
  responsibilities: string[];
  problem: string;
  solution: string;
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
    title: 'Tecno H Plus ERP',
    tagline: 'Sistema de gestión empresarial modular',
    role: 'Full Stack Developer',
    responsibilities: [
      'Diseño e implementación de la base de datos en PostgreSQL (Supabase)',
      'Definición de políticas de seguridad (Row Level Security)',
      'Desarrollo del módulo Storefront',
      'Desarrollo del módulo de control de stock',
      'Desarrollo del sistema de informes',
      'Maquetado e implementación de interfaces',
      'Colaboración en la arquitectura general del ERP',
    ],
    problem: 'Un negocio de reparación y venta de tecnología necesitaba controlar inventario, registrar ventas, gestionar clientes y generar reportes — todo en una sola plataforma.',
    solution: 'Diseñé y desarrollé un ERP modular con Next.js y Supabase. Autenticación segura, dashboard con métricas en tiempo real, gestión de stock, facturación y reportes exportables.',
    image: '/TecnoH ERP.jpeg',
    initials: 'TH',
    techStack: ['Next.js', 'React', 'Supabase', 'PostgreSQL'],
    accentColor: '#4F8CFF',
    status: 'production',
    liveUrl: 'https://tecnohplus.com',
  },
  {
    id: 'slotify',
    title: 'Slotify',
    tagline: 'SaaS para programación de citas',
    role: 'Full Stack Developer',
    responsibilities: [
      'Relevamiento y análisis de requisitos junto al equipo',
      'Diseño de la base de datos utilizando Prisma ORM',
      'Desarrollo de módulos backend',
      'Desarrollo de funcionalidades frontend',
      'Configuración del despliegue en Render',
      'Administración del dominio y puesta en producción',
    ],
    problem: 'Negocios de servicios necesitan una forma moderna de que sus clientes agenden citas sin llamadas ni mensajes.',
    solution: 'Construí una PWA completa con autenticación JWT, gestión de calendario en tiempo real, sistema de disponibilidad por profesional, notificaciones y despliegue con Docker.',
    image: '/Slotify.jpeg',
    initials: 'SL',
    techStack: ['Node.js', 'Express.js', 'React', 'Vite', 'Prisma', 'PostgreSQL', 'Docker', 'JWT'],
    accentColor: '#F59E0B',
    status: 'production',
    liveUrl: 'https://slotify.app',
  },
  {
    id: 'files',
    title: 'Diario El Independiente',
    tagline: 'Gestión documental para un periódico',
    role: 'Backend Developer & Database Administrator',
    responsibilities: [
      'Diseño y administración de la base de datos PostgreSQL',
      'Desarrollo de APIs y lógica de negocio',
      'Implementación de autenticación',
      'Organización de la arquitectura backend',
      'Optimización de consultas y almacenamiento',
    ],
    problem: 'Un periódico local manejaba su flujo editorial con herramientas dispersas. Necesitaban una plataforma centralizada para organizar, buscar y gestionar documentos con control de acceso.',
    solution: 'Desarrollé una plataforma con Node.js, Express y PostgreSQL. Autenticación JWT, almacenamiento en Cloudinary, búsqueda avanzada, categorías y panel de administración. Desplegado en Railway.',
    image: '/sistema de gestion de archivos - el independiente.jpeg',
    initials: 'EI',
    techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'Cloudinary', 'Railway', 'JWT'],
    accentColor: '#22C55E',
    status: 'production',
  },
  {
    id: 'unlar',
    title: 'UNLaR Connect',
    tagline: 'Plataforma académica universitaria',
    role: 'Desarrollador Full Stack',
    responsibilities: [
      'Desarrollo completo (frontend y backend) del módulo Foro',
      'Desarrollo completo del módulo Eventos',
      'Desarrollo del Dashboard principal',
      'Integración entre módulos',
      'Trabajo colaborativo durante el hackathon',
    ],
    problem: 'Los estudiantes y docentes de la UNLaR no tenían una herramienta centralizada para comunicarse, compartir eventos y gestionar información académica.',
    solution: 'Construí la plataforma en el hackathon de la UNLaR (Mayo 2026). Interfaz moderna, gestión de eventos, sistema de comunicación y perfiles de usuario. Obtvimos el 2do lugar.',
    image: '/Unlar Connect.jpeg',
    initials: 'UC',
    techStack: ['Next.js', 'React', 'Supabase', 'PostgreSQL'],
    accentColor: '#8B5CF6',
    status: 'hackathon',
    liveUrl: 'https://unlar-connect.vercel.app/',
  },
  {
    id: 'alabanza',
    title: 'T.E. Worship',
    tagline: 'PWA para gestión de alabanza',
    role: 'Full Stack Developer',
    responsibilities: [
      'Diseño de la aplicación',
      'Modelado de la base de datos',
      'Desarrollo Full Stack',
      'Implementación como PWA',
      'Despliegue y mantenimiento',
    ],
    problem: 'El equipo de música necesitaba acceder rápidamente a un repertorio organizado de canciones con acordes, sin depender de múltiples sitios web o documentos dispersos durante ensayos y presentaciones.',
    solution: 'Desarrollé una Progressive Web App con una base de datos propia de canciones y acordes, optimizada para dispositivos móviles. La aplicación permite consultar repertorios, buscar canciones rápidamente y acceder al contenido desde cualquier lugar.',
    image: '/alabanza.jpeg',
    initials: 'TE',
    techStack: ['React', 'Node.js', 'Firebase'],
    accentColor: '#EC4899',
    status: 'production',
    liveUrl: 'https://martinprlt.github.io/Alabanza-T.E./',
  },
];
