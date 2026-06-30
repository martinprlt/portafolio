import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, Sparkles, Key } from 'lucide-react';

interface Message { id: number; text: string; sender: 'user' | 'bot'; }

const SYSTEM_PROMPT = `You are Emiliano Peralta's portfolio AI assistant. Answer questions about his background in Spanish or English, matching the user's language. Be concise (3–5 sentences max unless asked for more). Never invent skills or experience he doesn't have.

About Emiliano:
- Backend Developer & IT Infrastructure Specialist, La Rioja, Argentina
- Email: martinprlt02@gmail.com | GitHub: github.com/martinprlt
- Co-founder of BystroLabs startup (2026–present)

Experience:
- BystroLabs (2026–present): Co-founder & dev. Leads REST API design, DB architecture, Scrum.
- ECORP (2025–present): Jr. Systems Admin. Servers, users, hardware/software incidents.
- Tecno-H (2021–2024): IT Technician. Client support, OS, Ethernet networks, deployed e-commerce.

Projects:
- Tecno H Plus ERP: Modular ERP. Next.js, React, Supabase, PostgreSQL. URL: tecnohplus.com
- Slotify: SaaS PWA for appointments. Node.js, Express, React, Prisma, PostgreSQL, Docker, JWT. URL: slotify.app
- Diario El Independiente: Document management for a real newspaper. Node.js, Express, PostgreSQL, Cloudinary, Railway. Production deployed.
- UNLaR Connect: Hackathon platform (2nd place, May 2026). URL: unlar-connect.vercel.app
- T.E. Worship: PWA for church worship team hymnal. React, Node.js, Firebase. URL: martinprlt.github.io/Alabanza-T.E./

Stack: Node.js, Express.js, JavaScript, React, Next.js, PostgreSQL, MySQL, Supabase, Prisma ORM, Docker, Linux, Railway, Cloudinary, Git, JWT.

Education:
- Ingeniería en Sistemas de la Información, UNLaR (2022–present, final year)
- Técnico en Informática, E.P.E.T. N°1 (2016–2021)`;

const suggested = ['¿Quién es Emiliano?', '¿Qué tecnologías usa?', '¿Proyectos más complejos?', '¿Disponible para freelance?'];

async function ask(apiKey: string, msg: string, history: Message[]): Promise<string> {
  const messages = history.filter((m) => m.id !== 0).map((m) => ({ role: m.sender === 'user' ? 'user' as const : 'assistant' as const, content: m.text }));
  messages.push({ role: 'user', content: msg });
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-dangerous-direct-browser-access': 'true', 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model: 'claude-sonnet-4-6', max_tokens: 512, system: SYSTEM_PROMPT, messages }),
  });
  if (!res.ok) throw new Error(`API ${res.status}`);
  const data = await res.json();
  return data.content?.[0]?.text ?? 'Sin respuesta.';
}

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [apiKey, setApiKey] = useState(() => sessionStorage.getItem('anthropic_key') ?? '');
  const [keySaved, setKeySaved] = useState(() => !!sessionStorage.getItem('anthropic_key'));
  const [keyInput, setKeyInput] = useState('');
  const [msgs, setMsgs] = useState<Message[]>([{ id: 0, text: 'Pregúntame sobre Emiliano — proyectos, stack, experiencia.', sender: 'bot' }]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs, typing]);
  useEffect(() => { if (open && keySaved) setTimeout(() => inputRef.current?.focus(), 300); }, [open, keySaved]);

  const saveKey = () => {
    const k = keyInput.trim();
    if (!k) return;
    sessionStorage.setItem('anthropic_key', k);
    setApiKey(k);
    setKeySaved(true);
    setKeyInput('');
  };

  const send = async (text?: string) => {
    const t = text || input.trim();
    if (!t || !keySaved) return;
    setMsgs((p) => [...p, { id: Date.now(), text: t, sender: 'user' }]);
    setInput('');
    setTyping(true);
    try {
      const r = await ask(apiKey, t, msgs);
      setMsgs((p) => [...p, { id: Date.now() + 1, text: r, sender: 'bot' }]);
    } catch {
      setMsgs((p) => [...p, { id: Date.now() + 1, text: 'Error de conexión. Verificá tu clave.', sender: 'bot' }]);
    } finally { setTyping(false); }
  };

  return (
    <>
      {/* FAB */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        onClick={() => setOpen(!open)}
        className={`fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${
          open ? 'bg-[#12131A] border border-white/[0.08] rotate-0' : 'bg-white text-[#050508] hover:scale-105'
        }`}
        aria-label={open ? 'Cerrar' : 'Asistente IA'}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={18} />
            </motion.div>
          ) : (
            <motion.div key="s" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Sparkles size={18} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-20 right-5 z-50 w-[380px] max-w-[calc(100vw-2.5rem)] h-[500px] max-h-[calc(100vh-6rem)] flex flex-col bg-[#0C0D12] border border-white/[0.06] rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/[0.04]">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Bot size={16} className="text-[#050508]" />
              </div>
              <div>
                <h3 className="text-[13px] font-semibold text-white">Asistente</h3>
                <p className="text-[10px] text-[#71717A]">Claude API</p>
              </div>
            </div>

            {!keySaved ? (
              <div className="flex-1 flex flex-col items-center justify-center px-6 gap-4">
                <Key size={28} className="text-[#71717A]" />
                <p className="text-[13px] text-[#71717A] text-center leading-relaxed">
                  Ingresá tu API key de Anthropic. Se guarda solo en esta sesión.
                </p>
                <input
                  type="password"
                  value={keyInput}
                  onChange={(e) => setKeyInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && saveKey()}
                  placeholder="sk-ant-..."
                  className="w-full px-4 py-2.5 bg-[#050508] border border-white/[0.06] rounded-lg text-sm text-white placeholder-[#3F3F46] focus:outline-none focus:border-[#4F8CFF]/30 transition-colors"
                />
                <button onClick={saveKey} disabled={!keyInput.trim()} className="w-full py-2.5 text-sm font-medium bg-white text-[#050508] rounded-lg disabled:opacity-30 cursor-pointer">
                  Continuar
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                  {msgs.map((m) => (
                    <motion.div key={m.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={`flex gap-2 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        m.sender === 'bot' ? 'bg-white' : 'bg-[#1E1F26]'
                      }`}>
                        {m.sender === 'bot' ? <Bot size={12} className="text-[#050508]" /> : <User size={12} className="text-white" />}
                      </div>
                      <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-[13px] leading-relaxed whitespace-pre-line ${
                        m.sender === 'bot' ? 'bg-[#12131A] text-[#A1A1AA]' : 'bg-[#4F8CFF] text-white'
                      }`}>
                        {m.text}
                      </div>
                    </motion.div>
                  ))}
                  {typing && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center"><Bot size={12} className="text-[#050508]" /></div>
                      <div className="bg-[#12131A] rounded-2xl px-4 py-3 flex gap-1">
                        <span className="w-1.5 h-1.5 bg-[#3F3F46] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1.5 h-1.5 bg-[#3F3F46] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1.5 h-1.5 bg-[#3F3F46] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </motion.div>
                  )}
                  <div ref={endRef} />
                </div>

                {msgs.length <= 2 && (
                  <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                    {suggested.map((q) => (
                      <button key={q} onClick={() => send(q)} className="px-3 py-1.5 text-[11px] text-[#71717A] bg-[#12131A] rounded-full hover:text-white hover:bg-[#1E1F26] transition-colors cursor-pointer">
                        {q}
                      </button>
                    ))}
                  </div>
                )}

                <form onSubmit={(e) => { e.preventDefault(); send(); }} className="px-4 py-3 border-t border-white/[0.04] flex gap-2">
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Escribí..."
                    className="flex-1 bg-[#050508] border border-white/[0.06] rounded-full px-4 py-2 text-[13px] text-white placeholder-[#3F3F46] focus:outline-none focus:border-[#4F8CFF]/30 transition-colors"
                  />
                  <button type="submit" disabled={!input.trim() || typing} className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#050508] disabled:opacity-30 cursor-pointer">
                    <Send size={14} />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
