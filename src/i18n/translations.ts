export type Language = 'en' | 'es';

const en = {
  nav: {
    home: 'Home',
    projects: 'Projects',
    stack: 'Stack',
    experience: 'Experience',
    contact: 'Contact',
  },
  hero: {
    openToWork: 'Open to Work',
    role: 'Software Engineer',
    tagline: 'I build software that solves real problems.',
    tags: ['Full Stack', 'Backend', 'AI'],
    viewProjects: 'View Projects',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    badge: {
      org: 'BystroLabs',
      role: 'Co-founder',
    },
  },
  about: {
    eyebrow: 'About Me',
    title: 'Who I am',
    paragraphs: [
      "I'm 23 years old, an IT Technician and a final-year Information Systems Engineering student at UNLaR.",
      "I'm currently working on freelance projects with colleagues through our startup BystroLabs, where we took part in the university hackathon and earned 2nd place (May 2026).",
      'In parallel, I work as an IT technician at ECORP, collaborating with different professionals to solve microcomputing, networking, incident and infrastructure problems.',
      "Outside of IT, I'm a leading member of a church worship team, which taught me leadership, teamwork and project management.",
    ],
    stats: [
      { value: '4+', label: 'Years in IT', color: '#4F8CFF' },
      { value: '5', label: 'Production projects', color: '#22C55E' },
      { value: '2nd', label: 'Place at UNLaR hackathon', color: '#8B5CF6' },
      { value: '∞', label: 'Coffee consumed', color: '#F59E0B' },
    ],
  },
  building: {
    eyebrow: 'Currently Building',
    items: [
      { description: 'SaaS startup — product design, APIs and architecture from scratch.' },
      { description: 'Integrating language models into real-world applications.' },
      { description: 'Scalable products with authentication, payments and continuous deployment.' },
    ],
  },
  projects: {
    eyebrow: 'Projects',
    heading: 'Software in production',
    status: {
      production: 'Production',
      university: 'University',
      hackathon: 'Hackathon',
      personal: 'Personal',
    },
    roleLabel: 'My role:',
    responsibilities: 'Responsibilities',
    viewProject: 'View Project',
    internalProject: 'Internal project — no public URL',
  },
  howIWork: {
    eyebrow: 'Process',
    heading: 'How I work',
    intro: 'As an engineer, I do a full system analysis before writing a single line of code. Methodologies, requirements, database design and architecture are the starting point.',
    steps: [
      { label: 'Analysis', desc: 'I understand the problem, constraints and business requirements before touching code.' },
      { label: 'Design', desc: 'Use cases, user stories, UML diagrams and functional specification.' },
      { label: 'Modeling', desc: 'I design the database, relationships, constraints and the system architecture.' },
      { label: 'Development', desc: 'I build with a modern, modular, maintainable stack. API first, then frontend.' },
      { label: 'Validation', desc: 'Testing, validation with real users and adjustments before shipping to production.' },
      { label: 'Deploy', desc: 'Production deployment, monitoring and continuous iteration.' },
    ],
  },
  skills: {
    eyebrow: 'Stack',
    heading: 'Technologies',
  },
  experience: {
    eyebrow: 'Experience',
    heading: 'My journey',
  },
  contact: {
    eyebrow: 'Contact',
    heading: "Let's talk",
    intro: 'Have a project in mind? Want to work together? Reach out through any of these channels.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'you@email.com',
    messagePlaceholder: 'Tell me about your project, idea or what you need...',
    submit: 'Send message',
    sent: 'Message sent!',
    direct: 'Or contact me directly.',
    links: {
      linkedin: 'LinkedIn',
      github: 'GitHub',
      email: 'Email',
      whatsapp: 'WhatsApp',
    },
  },
  assistant: {
    title: 'Assistant',
    openLabel: 'AI Assistant',
    closeLabel: 'Close',
    apiKeyHint: 'Enter your Anthropic API key. It is only stored in this session.',
    continue: 'Continue',
    placeholder: 'Type a message...',
    welcome: 'Ask me about Emiliano — projects, stack, experience.',
    suggested: ['Who is Emiliano?', 'What technologies does he use?', 'Most complex projects?', 'Available for freelance?'],
    error: 'Connection error. Check your key.',
    noResponse: 'No response.',
  },
};

const es: typeof en = {
  nav: {
    home: 'Inicio',
    projects: 'Proyectos',
    stack: 'Stack',
    experience: 'Experiencia',
    contact: 'Contacto',
  },
  hero: {
    openToWork: 'Disponible para trabajar',
    role: 'Software Engineer',
    tagline: 'Construyo software que resuelve problemas reales.',
    tags: ['Full Stack', 'Backend', 'Inteligencia Artificial'],
    viewProjects: 'Ver Proyectos',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    badge: {
      org: 'BystroLabs',
      role: 'Co-fundador',
    },
  },
  about: {
    eyebrow: 'Sobre Mí',
    title: 'Quién soy',
    paragraphs: [
      'Tengo 23 años y soy Técnico en Informática y estudiante del último año de Ingeniería en Sistemas de la Información en la UNLaR.',
      'Actualmente estoy llevando a cabo trabajos freelance con compañeros a través de nuestra startup BystroLabs, donde participamos en el hackathon de la universidad y obtuvimos el 2do lugar (Mayo 2026).',
      'Paralelamente trabajo como técnico en informática en ECORP, donde trabajo colaborativamente con distintos profesionales para solucionar problemas de microinformática, redes, incidentes y más.',
      'Fuera del área de TI, soy miembro líder de un grupo de alabanza en una iglesia, lo cual me enseñó liderazgo, trabajo en equipo y gestión de proyectos.',
    ],
    stats: [
      { value: '4+', label: 'Años en IT', color: '#4F8CFF' },
      { value: '5', label: 'Proyectos en producción', color: '#22C55E' },
      { value: '2do', label: 'Lugar en hackathon UNLaR', color: '#8B5CF6' },
      { value: '∞', label: 'Café consumido', color: '#F59E0B' },
    ],
  },
  building: {
    eyebrow: 'Actualmente construyendo',
    items: [
      { description: 'Startup SaaS — diseño de producto, APIs y arquitectura desde cero.' },
      { description: 'Integración de modelos de lenguaje en aplicaciones reales.' },
      { description: 'Productos escalables con autenticación, pagos y despliegue continuo.' },
    ],
  },
  projects: {
    eyebrow: 'Proyectos',
    heading: 'Software en producción',
    status: {
      production: 'Producción',
      university: 'Universidad',
      hackathon: 'Hackathon',
      personal: 'Personal',
    },
    roleLabel: 'Mi rol:',
    responsibilities: 'Responsabilidades',
    viewProject: 'Ver Proyecto',
    internalProject: 'Proyecto interno — sin URL pública',
  },
  howIWork: {
    eyebrow: 'Proceso',
    heading: 'Cómo trabajo',
    intro: 'Como ingeniero, antes de escribir una línea de código hago un análisis completo del sistema. Metodologías, requisitos, diseño de base de datos y arquitectura son el punto de partida.',
    steps: [
      { label: 'Análisis', desc: 'Entiendo el problema, las restricciones y los requisitos del negocio antes de tocar código.' },
      { label: 'Diseño', desc: 'Casos de uso, historias de usuario, diagramas UML y especificación funcional.' },
      { label: 'Modelado', desc: 'Diseño la base de datos, relaciones, constraints y la arquitectura del sistema.' },
      { label: 'Desarrollo', desc: 'Construyo con stack moderno, modular y mantenible. API first, luego frontend.' },
      { label: 'Validación', desc: 'Pruebas, validación con usuarios reales y ajustes antes de salir a producción.' },
      { label: 'Deploy', desc: 'Despliego en producción, monitoreo y iteración continua.' },
    ],
  },
  skills: {
    eyebrow: 'Stack',
    heading: 'Tecnologías',
  },
  experience: {
    eyebrow: 'Experiencia',
    heading: 'Mi recorrido',
  },
  contact: {
    eyebrow: 'Contacto',
    heading: 'Hablemos',
    intro: '¿Tenés un proyecto en mente? ¿Querés trabajar juntos? Escribime por cualquiera de estos medios.',
    name: 'Nombre',
    email: 'Email',
    message: 'Mensaje',
    namePlaceholder: 'Tu nombre',
    emailPlaceholder: 'tu@email.com',
    messagePlaceholder: 'Contame sobre tu proyecto, idea o lo que necesités...',
    submit: 'Enviar mensaje',
    sent: '¡Mensaje enviado!',
    direct: 'O contactame directamente.',
    links: {
      linkedin: 'LinkedIn',
      github: 'GitHub',
      email: 'Email',
      whatsapp: 'WhatsApp',
    },
  },
  assistant: {
    title: 'Asistente',
    openLabel: 'Asistente IA',
    closeLabel: 'Cerrar',
    apiKeyHint: 'Ingresá tu API key de Anthropic. Se guarda solo en esta sesión.',
    continue: 'Continuar',
    placeholder: 'Escribí...',
    welcome: 'Pregúntame sobre Emiliano — proyectos, stack, experiencia.',
    suggested: ['¿Quién es Emiliano?', '¿Qué tecnologías usa?', '¿Proyectos más complejos?', '¿Disponible para freelance?'],
    error: 'Error de conexión. Verificá tu clave.',
    noResponse: 'Sin respuesta.',
  },
};

export const translations: Record<Language, typeof en> = { en, es };

export type TranslationKey = DeepKeys<typeof en>;

type DeepKeys<T> = {
  [K in keyof T]: T[K] extends string
    ? K & string
    : T[K] extends object
      ? K extends string
        ? `${K}.${DeepKeys<T[K]>}`
        : never
      : never;
}[keyof T];
