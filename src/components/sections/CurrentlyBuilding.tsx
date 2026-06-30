import { motion } from 'framer-motion';
import { Rocket, Bot, Briefcase } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'BystroLabs',
    description: 'Startup SaaS — diseño de producto, APIs y arquitectura desde cero.',
    color: '#4F8CFF',
  },
  {
    icon: Bot,
    title: 'AI Solutions',
    description: 'Integración de modelos de lenguaje en aplicaciones reales.',
    color: '#8B5CF6',
  },
  {
    icon: Briefcase,
    title: 'SaaS Products',
    description: 'Productos escalables con autenticación, pagos y despliegue continuo.',
    color: '#22C55E',
  },
];

export function CurrentlyBuilding() {
  return (
    <section className="py-40">
      <div className="mx-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-[11px] text-[#4F8CFF] uppercase tracking-[0.2em] font-mono">Actualmente construyendo</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative p-6 bg-[#0C0D12]/50 border border-white/[0.04] rounded-2xl hover:border-white/[0.08] transition-colors duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}10` }}
                >
                  <Icon size={20} style={{ color: item.color }} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1.5">{item.title}</h3>
                <p className="text-[#71717A] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
