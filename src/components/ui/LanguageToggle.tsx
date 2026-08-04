import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';
import type { Language } from '../../i18n/translations';

const options: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

export function LanguageToggle({ id = 'desktop' }: { id?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-full bg-white/[0.04] border border-white/[0.06] p-0.5" role="group" aria-label="Language">
      {options.map((o) => (
        <button
          key={o.code}
          type="button"
          onClick={() => setLanguage(o.code)}
          aria-label={o.code === 'en' ? 'English' : 'Español'}
          className={`relative px-2.5 py-1 text-[11px] font-medium tracking-wide rounded-full transition-colors cursor-pointer ${
            language === o.code ? 'text-white' : 'text-[#71717A] hover:text-[#A1A1AA]'
          }`}
        >
          {language === o.code && (
            <motion.span
              layoutId={`lang-pill-${id}`}
              className="absolute inset-0 bg-white/10 rounded-full"
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
          )}
          <span className="relative z-10">{o.label}</span>
        </button>
      ))}
    </div>
  );
}
