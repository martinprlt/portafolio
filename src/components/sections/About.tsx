import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';

const HIGHLIGHT_WORDS = ['BystroLabs', 'ECORP'];

function highlight(text: string) {
  const parts = text.split(new RegExp(`(${HIGHLIGHT_WORDS.join('|')})`));
  return parts.map((part, i) =>
    HIGHLIGHT_WORDS.includes(part) ? (
      <span key={i} className="text-[#A1A1AA]">{part}</span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

export function About() {
  const { t, translations } = useLanguage();
  const paragraphs = translations.about.paragraphs;

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
          <span className="text-[11px] text-[#4F8CFF] uppercase tracking-[0.2em] font-mono mb-3 block">{t('about.eyebrow')}</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white tracking-tight mb-6">{t('about.title')}</h2>
          <div className="max-w-[700px] space-y-4">
            <p className="text-[#A1A1AA] text-base leading-relaxed">{highlight(paragraphs[0])}</p>
            {paragraphs.slice(1).map((p, i) => (
              <p key={i} className="text-[#71717A] text-sm leading-relaxed">{highlight(p)}</p>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {translations.about.stats.map((stat, i) => (
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
