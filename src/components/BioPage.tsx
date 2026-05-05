import React, { useEffect, useState } from 'react';
import joseFreitasLogo from '../assets/images/jose-freitas-logo.png';

const links = [
  {
    label: 'Agendar Avaliação',
    sub: 'WhatsApp · (62) 99228-4005',
    href: 'https://wa.me/5562992284005?text=Olá%2C%20Psicólogo%20José%20Freitas!%20Gostaria%20de%20agendar%20uma%20avaliação.',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.528 5.856L.057 23.215a.75.75 0 0 0 .928.928l5.36-1.471A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.742 9.742 0 0 1-4.964-1.356l-.355-.212-3.683 1.01 1.01-3.683-.212-.355A9.742 9.742 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    sub: '@psico.freitas',
    href: 'https://www.instagram.com/psico.freitas',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'Site Oficial',
    sub: 'psicologojosefreitas.com.br',
    href: 'https://www.psicologojosefreitas.com.br',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    label: 'E-mail',
    sub: 'josefreitaspsico2018@hotmail.com',
    href: 'mailto:josefreitaspsico2018@hotmail.com',
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
];

function fadeIn(delay: number, visible: boolean): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(12px)',
    transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  };
}

export const BioPage: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen bg-marinho-deep flex flex-col items-center justify-start px-3 pt-14 pb-12 relative overflow-hidden">

      {/* Bio banner — top background image */}
      <img
        src="/bio-banner.png"
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-full pointer-events-none select-none"
        style={{ display: 'block' }}
      />

      {/* Subtle background geometry */}
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 800 800" className="w-full h-full text-branco-osso" fill="none" stroke="currentColor" strokeWidth="0.4">
          <circle cx="400" cy="400" r="360" />
          <circle cx="400" cy="400" r="260" />
          <circle cx="400" cy="400" r="160" />
          <line x1="400" y1="40" x2="400" y2="760" />
          <line x1="40" y1="400" x2="760" y2="400" />
        </svg>
      </div>

      {/* Ambient glow */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-prata-quente/4 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="w-full max-w-sm relative z-10 flex flex-col items-center gap-7">

        {/* Profile photo */}
        <div style={fadeIn(0, visible)}>
          <div className="w-28 h-28 rounded-full overflow-hidden border border-white/15">
            <img
              src="/jose-freitas-profile.png"
              alt="José Freitas — Psicólogo e Neuropsicólogo"
              className="w-full h-full object-cover object-[50%_8%]"
            />
          </div>
        </div>

        {/* Name + credentials */}
        <div style={fadeIn(0.12, visible)} className="text-center space-y-3">
          <h1 className="font-serif text-[34px] text-white font-medium tracking-[-0.02em] leading-tight">
            José Freitas
          </h1>
          <p className="text-[13px] uppercase tracking-[0.3em] font-medium text-prata-quente/70">
            Psicólogo · Neuropsicólogo
          </p>
          <p className="text-[11px] uppercase tracking-[0.25em] text-branco-osso/35 font-medium">
            CRP 09/15189 · Nerópolis, GO
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: `scaleX(${visible ? 1 : 0})`,
            transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) 0.26s, transform 0.5s cubic-bezier(0.16,1,0.3,1) 0.26s`,
            transformOrigin: 'left',
          }}
          className="w-8 h-px bg-prata-quente/20"
        />

        {/* Link buttons */}
        <div className="w-full space-y-2.5">
          {links.map((link, idx) => (
            <div key={link.label} style={fadeIn(0.32 + idx * 0.07, visible)}>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 w-full px-5 py-5 border border-white/8 rounded-sm text-branco-osso hover:border-prata-quente/30 hover:bg-white/3 transition-colors duration-200 group"
              >
                <span className="text-prata-quente/50 group-hover:text-prata-quente/80 transition-colors duration-200 shrink-0">
                  {link.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <span className="text-[16px] font-subheadline font-semibold text-white block leading-none mb-1.5">
                    {link.label}
                  </span>
                  <span className="text-[12px] text-branco-osso/40 uppercase tracking-[0.15em] font-medium truncate block">
                    {link.sub}
                  </span>
                </div>
                <svg viewBox="0 0 16 16" className="w-3 h-3 text-branco-osso/20 group-hover:text-prata-quente/40 group-hover:translate-x-0.5 transition-all duration-200 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Footer */}
        <a
          href="https://www.psicologojosefreitas.com.br"
          style={fadeIn(0.72, visible)}
          className="flex items-center gap-2.5 mt-4 opacity-25 hover:opacity-50 transition-opacity duration-200"
        >
          <img src={joseFreitasLogo} alt="" className="h-4 w-4 object-contain" />
          <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-branco-osso">
            psicologojosefreitas.com.br
          </span>
        </a>

      </div>
    </div>
  );
};
