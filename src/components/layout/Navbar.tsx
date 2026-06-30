import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Contacto', href: '#contacto' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('#inicio');

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const obs: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(`#${id}`); }, { rootMargin: '-40% 0px -55% 0px' });
      o.observe(el);
      obs.push(o);
    });
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { obs.forEach((o) => o.disconnect()); window.removeEventListener('scroll', onScroll); };
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#050508]/80 backdrop-blur-xl border-b border-white/[0.04]' : 'bg-transparent'
        }`}
      >
        <div className="mx-container h-16 flex items-center justify-between">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); go('#inicio'); }} className="text-base font-bold text-white tracking-tight flex-shrink-0">
            EP<span className="text-[#4F8CFF]">.</span>
          </a>

          <div className="hidden md:flex items-center gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); go(l.href); }}
                className={`relative px-4 py-2 text-[13px] font-medium transition-colors rounded-lg ${
                  active === l.href ? 'text-white' : 'text-[#71717A] hover:text-[#A1A1AA]'
                }`}
              >
                {active === l.href && (
                  <motion.div layoutId="pill" className="absolute inset-0 bg-white/[0.05] rounded-lg" transition={{ type: 'spring', stiffness: 350, damping: 30 }} />
                )}
                <span className="relative z-10">{l.label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); go('#contacto'); }}
              className="hidden md:inline-flex items-center text-[13px] font-medium text-[#71717A] hover:text-white transition-colors"
            >
              Contacto
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2" aria-label="Menu">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-16 z-40 mx-4 bg-[#0C0D12]/95 backdrop-blur-xl border border-white/[0.06] rounded-2xl md:hidden overflow-hidden"
          >
            <div className="p-4 flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); go(l.href); }}
                  className={`px-4 py-3 text-sm rounded-xl transition-colors ${
                    active === l.href ? 'text-white bg-white/[0.05]' : 'text-[#71717A]'
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
