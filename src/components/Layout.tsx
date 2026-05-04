import React from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import joseFreitasLogo from '../assets/images/jose-freitas-logo.png';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isHome = location.pathname === '/';
  const isDarkNav = isScrolled || isHome || isMenuOpen;

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-marinho-deep transition-colors duration-300">
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isMenuOpen
            ? 'bg-marinho-deep/95 backdrop-blur-md border-b border-white/5 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <img
                src={joseFreitasLogo}
                alt="Logo José Freitas"
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-serif font-semibold tracking-[-0.02em] uppercase leading-none transition-colors duration-500 ${isDarkNav ? 'text-white' : 'text-marinho'}`}>
                José Freitas
              </span>
              <span className={`text-[9px] uppercase tracking-[0.25em] font-medium mt-1.5 transition-colors duration-500 ${isDarkNav ? 'text-prata-quente/70' : 'text-marinho/50'}`}>
                Psicólogo e Neuropsicólogo
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {['Home', 'Sobre', 'Processo', 'Avaliação', 'Palestras', 'Conteúdos'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-[13px] uppercase tracking-[0.3em] font-medium transition-colors duration-500 ${
                  isDarkNav ? 'text-branco-osso/70 hover:text-white' : 'text-marinho/60 hover:text-marinho'
                }`}
              >
                {item}
              </a>
            ))}
            <a
              href="https://wa.me/5562992284005?text=Olá%2C%20Dr.%20José%20Freitas!%20Gostaria%20de%20agendar%20uma%20avaliação."
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 border rounded-sm text-[13px] font-serif font-semibold uppercase tracking-[0.18em] flex items-center gap-3 transition-all group ${
                isDarkNav
                  ? 'border-white/20 text-white hover:bg-white hover:text-marinho'
                  : 'border-marinho/20 text-marinho hover:bg-marinho hover:text-branco-osso'
              }`}
            >
              Agendar Avaliação <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <div className={`h-px mb-2 transition-all duration-300 ${isMenuOpen ? 'w-6 translate-y-[5px] rotate-45 bg-white' : `w-6 ${isDarkNav ? 'bg-white' : 'bg-marinho'}`}`} />
            <div className={`h-px transition-all duration-300 ${isMenuOpen ? 'w-6 translate-y-[-4px] -rotate-45 bg-white' : `w-4 ${isDarkNav ? 'bg-white' : 'bg-marinho'}`}`} />
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-t border-white/5 bg-marinho-deep/95 backdrop-blur-md"
          >
            <div className="container-custom py-8 space-y-8">
              <div className="flex flex-col gap-6">
                {['Home', 'Sobre', 'Processo', 'Avaliação', 'Palestras', 'Conteúdos'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-[13px] uppercase tracking-[0.35em] font-semibold text-branco-osso/75 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>

              <a
                href="https://wa.me/5562992284005?text=Olá%2C%20Dr.%20José%20Freitas!%20Gostaria%20de%20agendar%20uma%20avaliação."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-white/20 px-6 py-4 text-[13px] font-serif font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-white hover:text-marinho"
                onClick={() => setIsMenuOpen(false)}
              >
                Agendar Avaliação <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        )}
      </nav>
      
      <main>
        {children}
      </main>

      <footer className="relative bg-marinho-deep py-32 text-branco-osso/60 border-t border-white/5 overflow-hidden">
        {/* Minimal Pattern Overlays */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-marinho/50 to-marinho-deep pointer-events-none" />

        <div className="container-custom relative z-10">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20 pb-20 border-b border-branco-osso/5 mb-16">
              <Reveal variant="fadeUp" className="md:col-span-5 space-y-8">
                <div className="flex items-center gap-4">
                  <img
                    src={joseFreitasLogo}
                    alt="Logo José Freitas"
                    className="h-10 w-10 object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="text-lg font-serif tracking-[0.05em] uppercase text-branco-osso font-semibold">José Freitas</span>
                    <span className="text-[9px] uppercase tracking-[0.2em] opacity-50">Psicólogo e Neuropsicólogo</span>
                  </div>
                </div>
                <p className="max-w-xs text-body text-sm text-branco-osso/50 leading-relaxed font-normal">
                  Dedicado à compreensão profunda da mente humana através da neuropsicologia clínica e avaliação diagnóstica.
                </p>
              </Reveal>

              <Reveal variant="fadeUp" delay={0.08} className="md:col-span-2 space-y-6">
                <h4 className="text-branco-osso text-[13px] uppercase tracking-[0.3em] font-semibold">Navegação</h4>
                <ul className="text-[14px] font-medium space-y-4 tracking-wide uppercase opacity-70">
                  <li><Link to="/" className="hover:text-branco-osso transition-colors">Início</Link></li>
                  <li><a href="#sobre" className="hover:text-branco-osso transition-colors">Sobre</a></li>
                  <li><a href="#processo" className="hover:text-branco-osso transition-colors">Processo</a></li>
                  <li><a href="#avaliação" className="hover:text-branco-osso transition-colors">Avaliação</a></li>
                </ul>
              </Reveal>

              <Reveal variant="fadeUp" delay={0.16} className="md:col-span-2 space-y-6">
                <h4 className="text-branco-osso text-[13px] uppercase tracking-[0.3em] font-semibold">Social</h4>
                <ul className="text-[14px] font-medium space-y-4 tracking-wide uppercase opacity-70">
                  <li>
                    <a href="https://www.instagram.com/psico.freitas" target="_blank" rel="noopener noreferrer" className="hover:text-branco-osso transition-colors">Instagram</a>
                  </li>
                </ul>
              </Reveal>

              <Reveal variant="fadeUp" delay={0.24} className="md:col-span-3 space-y-6">
                <h4 className="text-branco-osso text-[13px] uppercase tracking-[0.3em] font-semibold">Contato</h4>
                <ul className="text-[14px] font-medium space-y-4 leading-relaxed font-sans opacity-70">
                  <li className="flex flex-col">
                    <span className="text-[10px] opacity-40 uppercase tracking-widest mb-1">WhatsApp</span>
                    <a href="https://wa.me/5562992284005" target="_blank" rel="noopener noreferrer" className="hover:text-branco-osso transition-colors">
                      (62) 99228-4005
                    </a>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-[10px] opacity-40 uppercase tracking-widest mb-1">Localização</span>
                    Nerópolis, Goiás
                  </li>
                </ul>
              </Reveal>
           </div>

          <Reveal variant="fade" delay={0.3}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
              <p className="text-[11px] uppercase tracking-[0.3em] font-medium font-sans">
                © 2026 José Freitas — Psicólogo e Neuropsicólogo | Todos os direitos reservados
              </p>
              <div className="flex gap-10 text-[10px] uppercase tracking-widest font-bold">
                <a href="#" className="hover:text-branco-osso transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-branco-osso transition-colors">Termos de Uso</a>
              </div>
            </div>
          </Reveal>
        </div>
      </footer>
    </div>
  );
};
