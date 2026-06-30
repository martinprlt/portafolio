import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[400px] h-[400px] bg-[#4F8CFF]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-container h-screen flex items-center pt-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start gap-2.5 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
              </span>
              <span className="text-[11px] text-[#71717A] uppercase tracking-[0.2em] font-medium">Open to Work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,7vw,5.5rem)] font-bold tracking-[-0.04em] text-white leading-[0.95] mb-4"
            >
              Emiliano
              <br />
              <span className="text-[#71717A]">Peralta</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-[#A1A1AA] font-medium mb-3"
            >
              Software Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-base text-[#71717A] max-w-[420px] mb-6 leading-relaxed mx-auto lg:mx-0"
            >
              Construyo software que resuelve problemas reales.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
            >
              {['Full Stack', 'Backend', 'Inteligencia Artificial'].map((tag) => (
                <span key={tag} className="text-xs text-[#71717A] font-mono">
                  {tag}
                </span>
              )).reduce((acc, el, i) => {
                if (i > 0) acc.push(<span key={`sep-${i}`} className="text-[#3F3F46]">·</span>);
                acc.push(el);
                return acc;
              }, [] as React.ReactNode[])}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <Button variant="primary" size="md" href="#proyectos" icon={<ArrowRight size={16} />}>
                Ver Proyectos
              </Button>
              <Button variant="secondary" size="md" href="https://github.com/martinprlt" icon={<svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>}>
                GitHub
              </Button>
              <Button variant="ghost" size="md" href="https://www.linkedin.com/in/martin-emiliano-peralta-4a826b236/" icon={<svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>}>
                LinkedIn
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-[#4F8CFF]/8 via-[#8B5CF6]/4 to-transparent rounded-full blur-3xl" />
              <div className="relative w-[280px] h-[340px] lg:w-[320px] lg:h-[400px] rounded-2xl overflow-hidden border border-white/[0.04]">
                <img
                  src="/portafolio/yo.jpeg"
                  alt="Emiliano Peralta"
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const p = e.currentTarget.parentElement;
                    if (p && !p.querySelector('.fb')) {
                      const d = document.createElement('div');
                      d.className = 'fb absolute inset-0 bg-[#0C0D12] flex items-center justify-center';
                      d.innerHTML = '<span class="text-6xl font-bold text-[#1E1F26]">EP</span>';
                      p.appendChild(d);
                    }
                  }}
                />
              </div>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-6 bg-[#0C0D12]/90 backdrop-blur-md border border-white/[0.04] rounded-xl px-4 py-2.5"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-[#4F8CFF]/10 rounded-lg flex items-center justify-center">
                    <span className="text-[#4F8CFF] text-xs font-bold">EP</span>
                  </div>
                  <div>
                    <p className="text-white text-[11px] font-medium leading-tight">BystroLabs</p>
                    <p className="text-[#71717A] text-[10px]">Co-founder</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={16} className="text-[#3F3F46]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
