import React from 'react';
import { Palette, Type, LayoutGrid, Monitor, Smartphone, Tablet, ShieldCheck } from 'lucide-react';

const ColorSwatch: React.FC<{ color: string; name: string; hex: string; desc: string; dark?: boolean }> = ({ color, name, hex, desc, dark }) => (
  <div className="flex flex-col gap-4">
    <div 
      className={`h-40 w-full rounded-sm border border-marinho/5 flex items-end p-6 ${color}`}
    >
      <span className={`text-[12px] font-mono uppercase tracking-widest font-bold ${dark ? 'text-branco-osso' : 'text-marinho'}`}>
        {hex}
      </span>
    </div>
    <div className="space-y-1">
      <span className="text-[14px] font-bold uppercase tracking-widest text-marinho">{name}</span>
      <p className="text-[11px] text-marinho/50 leading-relaxed max-w-[200px]">{desc}</p>
    </div>
  </div>
);

export const DesignSystem: React.FC = () => {
  return (
    <div className="bg-marinho min-h-screen text-branco-osso animate-fade-in pt-40 pb-64 overflow-x-hidden">
      {/* 00. HEADER INTRO */}
      <header className="container-custom mb-32 space-y-12">
        <div className="flex items-center gap-6">
          <div className="w-12 h-[1px] bg-prata-quente/30"></div>
          <span className="text-[14px] uppercase tracking-[0.5em] font-bold text-prata-quente">The Visual Language</span>
        </div>
        
        <div className="max-w-7xl space-y-8">
          <h1 className="text-7xl md:text-[120px] font-serif font-medium leading-[1.1] tracking-tight text-white italic">
            Arquitetura <br/>
            <span className="text-prata-quente/50 not-italic">da Mente</span>
          </h1>
          <p className="text-xl md:text-[22px] font-light leading-relaxed max-w-4xl text-branco-osso/60">
            Este manual define os pilares fundamentais da identidade visual do Dr. José Freitas. Uma síntese entre o <span className="text-white">rigor clínico</span> e a <span className="text-white">sensibilidade humana</span>.
          </p>
        </div>
      </header>

      <div className="container-custom space-y-64">
        
        {/* 01. COLOR PALETTE */}
        <section className="space-y-16">
          <div className="flex justify-between items-end border-b border-branco-osso/10 pb-8">
            <h2 className="text-[18px] uppercase tracking-[0.4em] font-bold">01. Espectro Cromático</h2>
            <span className="text-[12px] font-mono text-branco-osso/30">Clinical Palette v1.0</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pt-8">
            {[
              { name: 'Deep Navy', hex: '#061322', desc: 'Base de autoridade e profundidade.', class: 'bg-marinho' },
              { name: 'Steel Slate', hex: '#1C344A', desc: 'Contraste técnico complementar.', class: 'bg-azul-aco' },
              { name: 'Platinum Silver', hex: '#E2E8F0', desc: 'Refinamento e luz metálica.', class: 'bg-prata-quente' },
              { name: 'Bone-White', hex: '#F7F4EE', desc: 'Superfície orgânica e calma.', class: 'bg-branco-osso' },
              { name: 'Charcoal', hex: '#252A2E', desc: 'Tipografia de suporte densa.', class: 'bg-cinza-carvao' },
            ].map((color) => (
              <div key={color.hex} className="group space-y-6">
                <div className={`aspect-[4/5] w-full rounded-sm ${color.class} border border-branco-osso/5 shadow-2xl transition-transform group-hover:-translate-y-2 duration-500`}></div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[15px] font-bold uppercase tracking-widest">{color.name}</span>
                    <span className="text-[11px] font-mono opacity-40">{color.hex}</span>
                  </div>
                  <p className="text-[12px] text-branco-osso/40 leading-relaxed uppercase tracking-tighter">{color.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 02. TYPOGRAPHY */}
        <section className="space-y-16">
          <div className="flex justify-between items-end border-b border-branco-osso/10 pb-8">
            <h2 className="text-[18px] uppercase tracking-[0.4em] font-bold">02. Hierarquia Tipográfica</h2>
            <span className="text-[12px] font-mono text-branco-osso/30">Cormorant Garamond, Lora & Hind Madurai</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 pt-12">
            <div className="lg:col-span-12 space-y-16">
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-[0.5em] font-bold text-prata-quente/40">Headlines — Cormorant Garamond</span>
                <h3 className="text-7xl md:text-9xl font-serif font-medium leading-[0.9] italic">Arquitetura da Mente Humana.</h3>
              </div>
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-[0.5em] font-bold text-prata-quente/40">Subheadlines — Lora</span>
                <p className="text-3xl md:text-5xl font-subheadline font-light italic leading-tight max-w-4xl text-branco-osso/70">
                  Precisão diagnóstica através de metodologias validadas internacionalmente.
                </p>
              </div>
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-[0.5em] font-bold text-prata-quente/40">Interface Sans — Hind Madurai</span>
                <p className="text-xl md:text-2xl font-sans font-light leading-relaxed max-w-3xl text-branco-osso/50">
                  Um trabalho clínico voltado à compreensão do funcionamento cognitivo, emocional e comportamental, com orientação clara para famílias, escolas e indivíduos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* New Rules Section */}
        <section className="space-y-16">
          <div className="flex justify-between items-end border-b border-branco-osso/10 pb-8">
            <h2 className="text-[18px] uppercase tracking-[0.4em] font-bold">03. Regras de Estilo (Itálicos & Ícones)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="p-12 bg-branco-osso rounded-sm space-y-8">
              <span className="text-[11px] uppercase tracking-[0.5em] font-bold text-marinho/30">Light Mode</span>
              <h3 className="text-4xl font-serif text-marinho">
                Headlines em <span className="italic text-marinho-muted">Itálico (#1c3449)</span>
              </h3>
              <div className="flex items-center gap-6">
                <div className="text-marinho-muted p-4 border border-marinho/10 rounded-sm">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <p className="text-marinho/60 text-sm font-sans">Ícones seguem a cor #1c3449</p>
              </div>
            </div>

            <div className="p-12 bg-marinho-deep rounded-sm space-y-8 border border-white/5">
              <span className="text-[11px] uppercase tracking-[0.5em] font-bold text-branco-osso/20">Dark Mode</span>
              <h3 className="text-4xl font-serif text-branco-osso">
                Headlines em <span className="italic text-prata-quente">Itálico (#e2e8f0)</span>
              </h3>
              <div className="flex items-center gap-6">
                <div className="text-prata-quente p-4 border border-white/10 rounded-sm">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <p className="text-branco-osso/40 text-sm font-sans">Ícones seguem a cor Prata Quente (#e2e8f0)</p>
              </div>
            </div>
          </div>
        </section>

        {/* 03. BUTTON MODELS */}
        <section className="space-y-16">
          <div className="flex justify-between items-end border-b border-branco-osso/10 pb-8">
            <h2 className="text-[18px] uppercase tracking-[0.4em] font-bold">03. Componentes de Ação</h2>
            <span className="text-[12px] font-mono text-branco-osso/30">Platinum Series Interaction</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
            
            {/* Primary Action */}
            <div className="flex flex-col gap-8 items-center bg-white/5 p-16 rounded-sm border border-white/5 group">
              <button className="px-12 py-5 bg-white text-marinho text-[12px] font-bold uppercase tracking-[0.4em] rounded-sm hover:bg-prata-quente transition-colors duration-300">
                Agendar
              </button>
              <div className="text-center space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-prata-quente">Primary Platinum</span>
                <p className="text-[10px] text-branco-osso/30 uppercase tracking-[0.2em]">Cta Principal • Soft Transition</p>
              </div>
            </div>

            {/* Secondary Action */}
            <div className="flex flex-col gap-8 items-center bg-white/5 p-16 rounded-sm border border-white/5">
              <button className="px-12 py-5 border border-branco-osso/20 text-branco-osso text-[12px] font-bold uppercase tracking-[0.4em] rounded-sm hover:bg-branco-osso hover:text-marinho transition-all duration-500">
                Explorar
              </button>
              <div className="text-center space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-prata-quente">Outline Minimal</span>
                <p className="text-[10px] text-branco-osso/30 uppercase tracking-[0.2em]">Ação Secundária • Ghost</p>
              </div>
            </div>

            {/* Ghost Action */}
            <div className="flex flex-col gap-8 items-center bg-white/5 p-16 rounded-sm border border-white/5">
              <button className="group flex items-center gap-6 text-[12px] font-bold uppercase tracking-[0.5em] text-branco-osso/60 hover:text-white transition-all">
                Saiba Mais <div className="w-12 h-[1px] bg-white/20 group-hover:w-20 group-hover:bg-white transition-all"></div>
              </button>
              <div className="text-center space-y-2 pt-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-prata-quente">Interactive Ghost</span>
                <p className="text-[10px] text-branco-osso/30 uppercase tracking-[0.2em]">Navegação • Low Weight</p>
              </div>
            </div>

            {/* Micro Interaction */}
            <div className="flex flex-col gap-8 items-center bg-white/5 p-16 rounded-sm border border-white/5">
              <div className="flex gap-4">
                <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-marinho transition-all duration-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <button className="w-14 h-14 rounded-full bg-prata-quente text-marinho flex items-center justify-center hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                </button>
              </div>
              <div className="text-center space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-prata-quente">Micro Circles</span>
                <p className="text-[10px] text-branco-osso/30 uppercase tracking-[0.2em]">Utilidade • Control</p>
              </div>
            </div>

          </div>
        </section>

        {/* 04. GRID & MEASUREMENTS */}
        <section className="space-y-16">
          <div className="flex justify-between items-end border-b border-branco-osso/10 pb-8">
            <h2 className="text-[18px] uppercase tracking-[0.4em] font-bold">04. Medidas & Grade</h2>
            <span className="text-[12px] font-mono text-branco-osso/30">Desktop Max-width: 1600px</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pt-12">
            {[
              { title: 'Gutters Estruturais', value: '24px - 80px', desc: 'Espaçamento dinâmico que permite que os elementos respirem sem quebrar a coesão visual.' },
              { title: 'Margins Externas', value: 'Lateral Fluid', desc: 'Uso de containers centralizados para manter o foco na leitura em telas ultra-wide.' },
              { title: 'Rhythm Vertical', value: '40px Base', desc: 'Escala vertical baseada em múltiplos de 8 para garantir alinhamento matemático perfeito.' },
            ].map((item) => (
              <div key={item.title} className="space-y-6 group">
                <div className="h-[1px] w-full bg-white/10 group-hover:bg-prata-quente transition-colors duration-500"></div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[13px] font-bold uppercase tracking-widest text-prata-quente">{item.title}</span>
                    <span className="text-[11px] font-mono text-white/40">{item.value}</span>
                  </div>
                  <p className="text-[14px] text-branco-osso/50 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
