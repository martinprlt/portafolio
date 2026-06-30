import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills';

export function Skills() {
  return (
    <section id="stack" className="py-40">
      <div className="mx-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-[11px] text-[#4F8CFF] uppercase tracking-[0.2em] font-mono mb-3 block">Stack</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white tracking-tight">Tecnologías</h2>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center">
          {skillCategories.map((cat, ci) =>
            cat.skills.map((skill, si) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (ci * 0.05) + (si * 0.03) }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="group flex items-center gap-3 px-4 py-3 bg-[#0C0D12]/50 border border-white/[0.04] rounded-xl cursor-default hover:border-white/[0.08] transition-colors duration-300"
                  style={{ animationDelay: `${(ci * 0.05) + (si * 0.03)}s` }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${skill.brandColor}10` }}
                  >
                    <Icon size={16} style={{ color: skill.brandColor }} />
                  </div>
                  <span className="text-sm text-[#A1A1AA] group-hover:text-white transition-colors">{skill.name}</span>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
