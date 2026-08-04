import type { LocalizedText, LocalizedList } from './localized';

export interface Experience {
  id: string;
  title: LocalizedText;
  organization: string;
  period: LocalizedText;
  bullets: LocalizedList;
  type: 'education' | 'work';
}

export const experiences: Experience[] = [
  {
    id: 'work-1',
    title: { en: 'Co-founder & Software Developer', es: 'Co-founder & Software Developer' },
    organization: 'BystroLabs',
    period: { en: '2026 — Present', es: '2026 — Presente' },
    bullets: {
      en: [
        'REST API design and database architecture',
        'Sprint and backlog management with Scrum methodology',
        'Building a SaaS product from scratch',
      ],
      es: [
        'Diseño de APIs REST y arquitectura de base de datos',
        'Gestión de sprint y backlog con metodología Scrum',
        'Desarrollo de producto SaaS desde cero',
      ],
    },
    type: 'work',
  },
  {
    id: 'work-2',
    title: { en: 'Jr. Systems Administrator', es: 'Jr. Systems Administrator' },
    organization: 'ECORP',
    period: { en: '2025 — Present', es: '2025 — Presente' },
    bullets: {
      en: [
        'Server and user administration',
        'Hardware and software incident resolution',
        'Technical support and infrastructure maintenance',
      ],
      es: [
        'Administración de servidores y usuarios',
        'Resolución de incidentes de hardware y software',
        'Soporte técnico y mantenimiento de infraestructura',
      ],
    },
    type: 'work',
  },
  {
    id: 'work-3',
    title: { en: 'IT Support & Infrastructure Technician', es: 'IT Support & Infrastructure Technician' },
    organization: 'Tecno-H',
    period: { en: '2021 — 2024', es: '2021 — 2024' },
    bullets: {
      en: [
        'Client technical support and problem resolution',
        'Operating system installation and Ethernet networks',
        'Deployed an e-commerce platform for the business',
      ],
      es: [
        'Soporte técnico a clientes y resolución de problemas',
        'Instalación de sistemas operativos y redes Ethernet',
        'Despliegue de plataforma e-commerce para el negocio',
      ],
    },
    type: 'work',
  },
  {
    id: 'edu-1',
    title: { en: 'Information Systems Engineering', es: 'Ingeniería en Sistemas de la Información' },
    organization: 'Universidad Nacional de La Rioja (UNLaR)',
    period: { en: '2022 — Present', es: '2022 — Presente' },
    bullets: {
      en: [
        'In my final year of the degree',
        'Focus on software development and systems architecture',
      ],
      es: [
        'Cursando el último año de la carrera',
        'Enfoque en desarrollo de software y arquitectura de sistemas',
      ],
    },
    type: 'education',
  },
  {
    id: 'edu-2',
    title: { en: 'IT Technician', es: 'Técnico en Informática' },
    organization: 'E.P.E.T. N°1',
    period: { en: '2016 — 2021', es: '2016 — 2021' },
    bullets: {
      en: [
        'Technical training in IT and systems',
        'Foundations in programming, networking and hardware',
      ],
      es: [
        'Formación técnica en informática y sistemas',
        'Bases en programación, redes y hardware',
      ],
    },
    type: 'education',
  },
];
