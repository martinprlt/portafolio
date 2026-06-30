import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="sobre-mi" className="py-40">
      <div className="mx-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-[11px] text-[#4F8CFF] uppercase tracking-[0.2em] font-mono mb-3 block">Sobre Mí</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white tracking-tight mb-6">Quién soy</h2>
          <div className="max-w-[700px] space-y-4">
            <p className="text-[#A1A1AA] text-base leading-relaxed">
              Tengo 23 años y soy Técnico en Informática y estudiante del último año de Ingeniería en Sistemas de la Información en la UNLaR.
            </p>
            <p className="text-[#71717A] text-sm leading-relaxed">
              Actualmente estoy llevando a cabo trabajos freelance con compañeros a través de nuestra startup <span className="text-[#A1A1AA]">BystroLabs</span>, donde participamos en el hackathon de la universidad y obtuvimos el 2do lugar (Mayo 2026).
            </p>
            <p className="text-[#71717A] text-sm leading-relaxed">
              Paralelamente trabajo como técnico en informática en <span className="text-[#A1A1AA]">ECORP</span>, donde trabajo colaborativamente con distintos profesionales para solucionar problemas de microinformática, redes, incidentes y más.
            </p>
            <p className="text-[#71717A] text-sm leading-relaxed">
              Fuera del área de TI, soy miembro líder de un grupo de alabanza en una iglesia, lo cual me enseñó liderazgo, trabajo en equipo y gestión de proyectos.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: '4+', label: 'Años en IT', color: '#4F8CFF' },
            { value: '5', label: 'Proyectos en producción', color: '#22C55E' },
            { value: '2do', label: 'Lugar en hackathon UNLaR', color: '#8B5CF6' },
            { value: '∞', label: 'Café consumido', color: '#F59E0B' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-5 bg-[#0C0D12]/40 border border-white/[0.04] rounded-2xl hover:border-white/[0.08] transition-colors"
            >
              <p className="text-2xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-xs text-[#71717A]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
