import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ExternalLink } from 'lucide-react';
import { projects } from '../../data/projects';
import { useState } from 'react';

function ProjectImage({ src, alt, initials, accentColor }: { src: string; alt: string; initials: string; accentColor: string }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div className="w-full h-full bg-[#0C0D12] flex items-center justify-center">
        <span className="text-5xl font-bold" style={{ color: `${accentColor}20` }}>{initials}</span>
      </div>
    );
  }
  return <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" onError={() => setErr(true)} />;
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; color: string }> = {
    production: { label: 'Producción', color: '#22C55E' },
    university: { label: 'Universidad', color: '#4F8CFF' },
    hackathon: { label: 'Hackathon', color: '#8B5CF6' },
    personal: { label: 'Personal', color: '#EC4899' },
  };
  const s = map[status] ?? map.production;
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-full"
      style={{ color: s.color, backgroundColor: `${s.color}10`, border: `1px solid ${s.color}20` }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.color }} />
      {s.label}
    </span>
  );
}

export function Projects() {
  return (
    <section id="proyectos" className="py-40">
      <div className="mx-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-[11px] text-[#4F8CFF] uppercase tracking-[0.2em] font-mono mb-3 block">Proyectos</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white tracking-tight">Software en producción</h2>
        </motion.div>

        <div className="space-y-40">
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
              >
                {/* Image */}
                <div className={`${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-white/[0.04] bg-[#0C0D12] aspect-[16/10]">
                    <ProjectImage src={project.image} alt={project.title} initials={project.initials} accentColor={project.accentColor} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className={`${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <StatusBadge status={project.status} />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#A1A1AA] mb-2">{project.tagline}</p>
                  <p className="text-xs text-[#4F8CFF] font-mono mb-5">Mi rol: {project.role}</p>

                  <div className="mb-6">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#71717A] font-mono mb-3">Responsabilidades</p>
                    <ul className="space-y-2">
                      {project.responsibilities.map((r, j) => (
                        <li key={j} className="text-sm text-[#A1A1AA] leading-relaxed flex items-start gap-2.5">
                          <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: `${project.accentColor}60` }} />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((t) => (
                      <Badge key={t} label={t} color={project.accentColor} />
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Button variant="secondary" size="sm" href={project.liveUrl} icon={<ExternalLink size={14} />}>
                        Ver Proyecto
                      </Button>
                    )}
                    {!project.liveUrl && (
                      <span className="text-xs text-[#3F3F46] italic py-1.5">Proyecto interno — sin URL pública</span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
