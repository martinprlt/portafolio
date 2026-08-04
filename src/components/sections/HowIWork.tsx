import { motion } from 'framer-motion';
import { Search, FileText, Database, Code2, TestTube, Rocket } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const icons = [Search, FileText, Database, Code2, TestTube, Rocket];

export function HowIWork() {
  const { t, translations } = useLanguage();
  const steps = translations.howIWork.steps;

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
          <span className="text-[11px] text-[#4F8CFF] uppercase tracking-[0.2em] font-mono mb-3 block">{t('howIWork.eyebrow')}</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white tracking-tight mb-4">{t('howIWork.heading')}</h2>
          <p className="text-[#71717A] text-sm max-w-[600px] leading-relaxed">
            {t('howIWork.intro')}
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-[36px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
            {steps.map((step, i) => {
              const Icon = icons[i];
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
