import { motion } from 'framer-motion';
import { experiences } from '../../data/experience';
import { Briefcase, GraduationCap } from 'lucide-react';

const typeColors: Record<string, string> = {
  education: '#4F8CFF',
  work: '#22C55E',
};

const typeIcons: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  education: GraduationCap,
  work: Briefcase,
};

export function Experience() {
  return (
    <section id="experiencia" className="py-40">
      <div className="mx-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-[11px] text-[#4F8CFF] uppercase tracking-[0.2em] font-mono mb-3 block">Experiencia</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white tracking-tight">Mi recorrido</h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => {
            const color = typeColors[exp.type] ?? '#4F8CFF';
            const Icon = typeIcons[exp.type] ?? Briefcase;
            const isLast = i === experiences.length - 1;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex gap-6 md:gap-8"
              >
                {/* Timeline column */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 bg-[#050508]"
                    style={{ borderColor: `${color}60` }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  {!isLast && (
                    <div className="w-px flex-1 min-h-[40px] bg-gradient-to-b from-white/[0.08] to-transparent" />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-12 ${isLast ? 'pb-0' : ''}`}>
                  <h3 className="text-white font-semibold text-base mb-1">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[#A1A1AA] text-sm">{exp.organization}</span>
                    <span className="text-[#3F3F46] text-xs">·</span>
                    <span className="text-[11px] font-mono text-[#3F3F46]">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-[#71717A] leading-relaxed flex items-start gap-2.5">
                        <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: `${color}50` }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
