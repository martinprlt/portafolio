export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  bullets: string[];
  type: 'education' | 'work';
}

export const experiences: Experience[] = [
  {
    id: 'work-1',
    title: 'Co-founder & Software Developer',
    organization: 'BystroLabs',
    period: '2026 — Presente',
    bullets: [
      'Diseño de APIs REST y arquitectura de base de datos',
      'Gestión de sprint y backlog con metodología Scrum',
      'Desarrollo de producto SaaS desde cero',
    ],
    type: 'work',
  },
  {
    id: 'work-2',
    title: 'Jr. Systems Administrator',
    organization: 'ECORP',
    period: '2025 — Presente',
    bullets: [
      'Administración de servidores y usuarios',
      'Resolución de incidentes de hardware y software',
      'Soporte técnico y mantenimiento de infraestructura',
    ],
    type: 'work',
  },
  {
    id: 'work-3',
    title: 'IT Support & Infrastructure Technician',
    organization: 'Tecno-H',
    period: '2021 — 2024',
    bullets: [
      'Soporte técnico a clientes y resolución de problemas',
      'Instalación de sistemas operativos y redes Ethernet',
      'Despliegue de plataforma e-commerce para el negocio',
    ],
    type: 'work',
  },
  {
    id: 'edu-1',
    title: 'Ingeniería en Sistemas de la Información',
    organization: 'Universidad Nacional de La Rioja (UNLaR)',
    period: '2022 — Presente',
    bullets: [
      'Cursando el último año de la carrera',
      'Enfoque en desarrollo de software y arquitectura de sistemas',
    ],
    type: 'education',
  },
  {
    id: 'edu-2',
    title: 'Técnico en Informática',
    organization: 'E.P.E.T. N°1',
    period: '2016 — 2021',
    bullets: [
      'Formación técnica en informática y sistemas',
      'Bases en programación, redes y hardware',
    ],
    type: 'education',
  },
];
