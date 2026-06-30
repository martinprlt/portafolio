import {
  ReactLogo,
  NodeLogo,
  TypeScriptLogo,
  DockerLogo,
  GitLogo,
  MySQLLogo,
  TailwindLogo,
  NextLogo,
  ExpressLogo,
  PostgresLogo,
  GitHubLogo,
  LinuxLogo,
} from '../components/ui/SkillIcons';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  brandColor: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', icon: ReactLogo, brandColor: '#61DAFB' },
      { name: 'Next.js', icon: NextLogo, brandColor: '#FFFFFF' },
      { name: 'HTML', icon: ReactLogo, brandColor: '#E34F26' },
      { name: 'CSS', icon: ReactLogo, brandColor: '#1572B6' },
      { name: 'Tailwind CSS', icon: TailwindLogo, brandColor: '#06B6D4' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', icon: NodeLogo, brandColor: '#339933' },
      { name: 'Express.js', icon: ExpressLogo, brandColor: '#FFFFFF' },
      { name: 'JavaScript', icon: TypeScriptLogo, brandColor: '#F7DF1E' },
      { name: 'JWT', icon: NodeLogo, brandColor: '#4F8CFF' },
      { name: 'REST APIs', icon: ExpressLogo, brandColor: '#22C55E' },
    ],
  },
  {
    title: 'Bases de Datos',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', icon: PostgresLogo, brandColor: '#336791' },
      { name: 'MySQL', icon: MySQLLogo, brandColor: '#4479A1' },
      { name: 'Supabase', icon: PostgresLogo, brandColor: '#3ECF8E' },
      { name: 'Prisma ORM', icon: NodeLogo, brandColor: '#2D3748' },
    ],
  },
  {
    title: 'Infraestructura',
    icon: '☁️',
    skills: [
      { name: 'Linux', icon: LinuxLogo, brandColor: '#FCC624' },
      { name: 'Docker', icon: DockerLogo, brandColor: '#2496ED' },
      { name: 'Railway', icon: DockerLogo, brandColor: '#0B0D0E' },
      { name: 'Cloudinary', icon: NodeLogo, brandColor: '#3448C5' },
    ],
  },
  {
    title: 'Herramientas',
    icon: '🛠️',
    skills: [
      { name: 'Git', icon: GitLogo, brandColor: '#F05032' },
      { name: 'Scrum', icon: GitHubLogo, brandColor: '#4F8CFF' },
      { name: 'UML', icon: GitHubLogo, brandColor: '#8B5CF6' },
      { name: 'Vercel', icon: GitHubLogo, brandColor: '#FFFFFF' },
    ],
  },
];
