import { motion } from 'framer-motion';
import { Search, FileText, Database, Code2, TestTube, Rocket } from 'lucide-react';

const steps = [
  { icon: Search, label: 'Análisis', desc: 'Entiendo el problema, las restricciones y los requisitos del negocio antes de tocar código.' },
  { icon: FileText, label: 'Diseño', desc: 'Casos de uso, historias de usuario, diagramas UML y especificación funcional.' },
  { icon: Database, label: 'Modelado', desc: 'Diseño la base de datos, relaciones, constraints y la arquitectura del sistema.' },
  { icon: Code2, label: 'Desarrollo', desc: 'Construyo con stack moderno, modular y mantenible. API first, luego frontend.' },
  { icon: TestTube, label: 'Validación', desc: 'Pruebas, validación con usuarios reales y ajustes antes de salir a producción.' },
  { icon: Rocket, label: 'Deploy', desc: 'Despliego en producción, monitoreo y iteración continua.' },
];

export function HowIWork() {
  return (
    <section className="py-40">
      <div className="mx-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-[11px] text-[#4F8CFF] uppercase tracking-[0.2em] font-mono mb-3 block">Proceso</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white tracking-tight mb-4">Cómo trabajo</h2>
          <p className="text-[#71717A] text-sm max-w-[600px] leading-relaxed">
            Como ingeniero, antes de escribir una línea de código hago un análisis completo del sistema.
            Metodologías, requisitos, diseño de base de datos y arquitectura son el punto de partida.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-[36px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#0C0D12]/60 border border-white/[0.04] flex items-center justify-center mb-4 relative z-10">
                    <Icon size={22} className="text-[#4F8CFF]" />
                  </div>
                  <p className="text-white text-sm font-semibold mb-1.5">{step.label}</p>
                  <p className="text-[#71717A] text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
