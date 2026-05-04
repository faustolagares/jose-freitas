import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Brain, MessageCircle, User, ShieldCheck, Users, Presentation, Target } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const EASE = [0.16, 1, 0.3, 1] as const;

const HeroStat: React.FC<{ icon: React.ReactNode; label: string; sublabel: string }> = ({ icon, label, sublabel }) => (
  <div className="flex items-center gap-3 md:gap-6 text-branco-osso group cursor-default">
    <div className="w-9 h-9 md:w-12 md:h-12 border-l border-branco-osso/10 pl-3 md:pl-8 flex items-center justify-center transition-all group-hover:border-prata-quente">
      <div className="text-prata-quente/40 group-hover:text-prata-quente transition-colors">
        {icon}
      </div>
    </div>
    <div className="flex flex-col">
      <span className="text-[11px] md:text-[14px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-semibold text-branco-osso/90 leading-none mb-1.5">{label}</span>
      <span className="text-[9px] md:text-[10px] uppercase tracking-[0.12em] md:tracking-[0.15em] text-branco-osso/40 md:text-branco-osso/30 font-medium">{sublabel}</span>
    </div>
  </div>
);

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white/40 border border-marinho/5 p-10 md:p-12 rounded-3xl space-y-10 flex flex-col items-start transition-all hover:bg-white hover:shadow-2xl hover:shadow-marinho/5 group">
    <div className="text-marinho-muted group-hover:text-marinho transition-colors duration-500">
      {icon}
    </div>
    <div className="space-y-6">
      <div className="w-10 h-[1px] bg-marinho/10 group-hover:bg-prata-quente transition-all duration-500" />
      <h3 className="text-[32px] md:text-3xl font-serif text-marinho leading-tight font-medium">{title}</h3>
      <p className="text-[16px] md:text-[17px] font-sans font-light text-cinza-carvao/80 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const heroStats = [
  { icon: <Brain className="w-5 h-5 md:w-6 md:h-6" />, label: 'Avaliação', sublabel: 'Neuropsicológica' },
  { icon: <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />, label: 'Escuta', sublabel: 'Ativa' },
  { icon: <User className="w-5 h-5 md:w-6 md:h-6" />, label: 'Intervenção', sublabel: 'Clínica' },
  { icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />, label: 'Ética', sublabel: 'Responsabilidade' },
];

export const LandingPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-branco-osso">

      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section id="home" className="min-h-[90vh] md:min-h-screen bg-marinho relative flex items-center pt-32 pb-40 md:py-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/regenerated_image_1777906366404.png"
            alt="Dr. José Freitas — Psicólogo e Neuropsicólogo em Nerópolis, GO"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-[58%_center] md:object-center opacity-100 saturate-[0.95]"
          />
          <div className="absolute inset-x-0 top-0 h-64 md:h-80 bg-linear-to-b from-marinho-deep/90 via-marinho/55 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-linear-to-t from-marinho-deep/95 via-marinho/65 to-transparent pointer-events-none" />
        </div>

        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 1000 1000" className="w-[120%] h-[120%] absolute -right-1/4 -top-1/4 text-branco-osso" fill="none" stroke="currentColor" strokeWidth="0.5">
            <circle cx="500" cy="500" r="450" />
            <circle cx="500" cy="500" r="350" />
            <path d="M500 50 L500 950 M50 500 L950 500" />
            <path d="M150 150 L850 850 M850 150 L150 850" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-7xl space-y-12 md:space-y-16">
            <div className="space-y-8 md:space-y-10">

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
                className="flex items-center gap-4 md:gap-6"
              >
                <div className="w-12 md:w-16 h-px bg-prata-quente opacity-30" />
                <span className="text-[12px] uppercase tracking-[0.5em] font-bold text-prata-quente block">
                  Ciência, Escuta e Propósito
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
                className="text-[80px] sm:text-8xl md:text-9xl lg:text-[140px] font-serif text-branco-osso leading-[0.85] font-medium tracking-tighter"
              >
                Compreender <br />
                <span className="italic text-prata-quente">para orientar.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.26, ease: EASE }}
                className="text-xl md:text-[24px] text-branco-osso/60 max-w-2xl leading-relaxed font-light font-subheadline"
              >
                Avaliação e intervenção neuropsicológica planejada para todas as fases da vida, fundamentada no rigor clínico e olhar humano.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
              className="flex flex-wrap gap-8 items-center pt-4 md:pt-8"
            >
              <a
                href="https://wa.me/5562992284005?text=Olá%2C%20Dr.%20José%20Freitas!%20Gostaria%20de%20agendar%20uma%20avaliação."
                target="_blank"
                rel="noopener noreferrer"
                className="group px-12 py-5 bg-white text-marinho text-[12px] font-bold uppercase tracking-[0.4em] rounded-sm hover:bg-prata-quente transition-all duration-300 flex items-center gap-4"
              >
                Agendar Avaliação <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-0 right-0 z-20">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-12 py-6 md:py-8 lg:py-12 border-t border-branco-osso/10 lg:border-branco-osso/5">
              {heroStats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + idx * 0.08, ease: EASE }}
                >
                  <HeroStat icon={stat.icon} label={stat.label} sublabel={stat.sublabel} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Atuação ──────────────────────────────────────────────── */}
      <section className="section-padding bg-branco-osso relative overflow-hidden" id="avaliação">
        <div className="absolute -bottom-1/4 -left-1/4 z-0 opacity-[0.03] pointer-events-none scale-150">
          <svg viewBox="0 0 1000 1000" className="w-[800px] h-[800px] text-marinho" fill="none" stroke="currentColor" strokeWidth="0.5">
            <path d="M500 10 L850 30 L850 70 L500 90 L150 70 L150 30 Z" />
            <path d="M500 500 L850 30 M500 500 L850 70 M500 500 L500 90 M500 500 L150 70 M500 500 L150 30" />
          </svg>
        </div>

        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left */}
          <div className="lg:col-span-5 space-y-12">
            <Reveal variant="fadeLeft">
              <div className="space-y-6">
                <span className="text-[12px] uppercase tracking-[0.5em] font-bold text-marinho-muted/40 block">01. Atuação</span>
                <div className="w-12 h-[1.5px] bg-marinho-muted" />
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.1}>
              <h2 className="text-5xl md:text-7xl font-serif text-marinho leading-[1.05] font-medium tracking-[-0.03em]">
                Avaliação, escuta <br className="hidden md:block" /> e orientação para <br className="hidden md:block" />
                <span className="italic text-marinho-muted">cada fase da vida.</span>
              </h2>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.2}>
              <p className="text-xl md:text-[24px] text-marinho/60 max-w-lg leading-relaxed font-light font-subheadline">
                Um trabalho clínico voltado à compreensão do funcionamento cognitivo, emocional e comportamental, com orientação clara para famílias, escolas e indivíduos.
              </p>
            </Reveal>
          </div>

          {/* Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <Reveal variant="fadeUp" delay={0}>
              <ServiceCard
                icon={<Brain className="w-14 h-14" strokeWidth={1} />}
                title="Avaliação Neuropsicológica"
                description="Investigação das funções cognitivas, emocionais e comportamentais para apoiar diagnósticos, decisões e planos de intervenção."
              />
            </Reveal>
            <Reveal variant="fadeUp" delay={0.1}>
              <ServiceCard
                icon={<MessageCircle className="w-14 h-14" strokeWidth={1} />}
                title="Atendimento Psicológico"
                description="Escuta clínica para compreender experiências, dificuldades emocionais e padrões de comportamento."
              />
            </Reveal>
            <Reveal variant="fadeUp" delay={0.2}>
              <ServiceCard
                icon={<Users className="w-14 h-14" strokeWidth={1} />}
                title="Orientação Familiar"
                description="Apoio para famílias lidarem com desafios do desenvolvimento, aprendizagem, comportamento e convivência."
              />
            </Reveal>
            <Reveal variant="fadeUp" delay={0.3}>
              <ServiceCard
                icon={<Presentation className="w-14 h-14" strokeWidth={1} />}
                title="Palestras e Instituições"
                description="Conteúdos para escolas, equipes e instituições sobre saúde mental, desenvolvimento e neuropsicologia."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Sobre ────────────────────────────────────────────────── */}
      <section id="sobre" className="bg-marinho relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/regenerated_image_1777919177858.png"
            alt=""
            role="presentation"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] items-center">

            {/* Left: Photo */}
            <div className="relative h-full min-h-[500px] lg:min-h-[95vh] flex items-end">
              <div className="absolute inset-x-6 bottom-0 z-0 h-[78%] rounded-[40%] bg-marinho-deep/85 blur-3xl opacity-80 pointer-events-none" />
              <Reveal variant="fadeLeft" className="relative z-10 w-full h-[85%] lg:h-[95%] overflow-hidden">
                <img
                  src="/src/assets/images/jose-freitas.png"
                  alt="Dr. José Freitas — Psicólogo e Neuropsicólogo"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top shadow-2xl saturate-[0.8] contrast-[1.05] hover:saturate-100 transition-all duration-1000"
                />
              </Reveal>
              <div className="absolute top-1/4 -left-12 w-48 h-48 border border-white/5 rounded-full z-0 animate-pulse" />
              <div className="absolute bottom-1/4 -right-24 w-64 h-64 border border-white/5 rounded-full z-0" />
            </div>

            {/* Right: Content */}
            <div className="py-24 lg:py-20 lg:pl-28 space-y-16">
              <div className="space-y-8">
                <Reveal variant="fadeLeft" delay={0.1}>
                  <div className="space-y-4">
                    <span className="text-[12px] uppercase tracking-[0.5em] font-bold text-prata-quente block">02. Sobre José Freitas</span>
                    <div className="w-12 h-[1.5px] bg-prata-quente opacity-40" />
                  </div>
                </Reveal>

                <Reveal variant="fadeUp" delay={0.2}>
                  <h2 className="text-5xl md:text-7xl lg:text-[80px] font-serif text-white leading-[1.05] font-medium tracking-[-0.03em]">
                    Experiência clínica <br />
                    com olhar humano <br />
                    <span className="italic text-prata-quente">e base científica.</span>
                  </h2>
                </Reveal>
              </div>

              <Reveal variant="fadeUp" delay={0.3}>
                <div className="space-y-10 max-w-xl">
                  <p className="text-xl md:text-[24px] text-branco-osso/60 leading-relaxed font-light font-subheadline">
                    José Freitas atua como psicólogo e neuropsicólogo, com foco na compreensão do funcionamento cognitivo, emocional e comportamental em diferentes fases da vida.
                  </p>
                  <p className="text-xl md:text-[24px] text-branco-osso/60 leading-relaxed font-light font-subheadline">
                    Seu trabalho combina avaliação, escuta qualificada e orientação clara para apoiar decisões, intervenções e caminhos possíveis para cada pessoa, família ou instituição.
                  </p>
                </div>
              </Reveal>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/10">
                <Reveal variant="fadeUp" delay={0.4}>
                  <div className="space-y-6 group">
                    <div className="text-prata-quente transition-all duration-500">
                      <Target className="w-8 h-8" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-white font-serif text-[26px] md:text-xl font-medium">Clareza</h4>
                      <p className="text-branco-osso/40 text-[11px] leading-relaxed uppercase tracking-wider font-medium">
                        Avaliações e orientações organizadas para facilitar decisões.
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal variant="fadeUp" delay={0.5}>
                  <div className="space-y-6 group">
                    <div className="text-prata-quente transition-all duration-500">
                      <Brain className="w-8 h-8" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-white font-serif text-[26px] md:text-xl font-medium">Método</h4>
                      <p className="text-branco-osso/40 text-[11px] leading-relaxed uppercase tracking-wider font-medium">
                        Processos conduzidos com critério, escuta e responsabilidade.
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal variant="fadeUp" delay={0.6}>
                  <div className="space-y-6 group">
                    <div className="text-prata-quente transition-all duration-500">
                      <User className="w-8 h-8" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-white font-serif text-[26px] md:text-xl font-medium">Desenvolvimento</h4>
                      <p className="text-branco-osso/40 text-[11px] leading-relaxed uppercase tracking-wider font-medium">
                        Caminhos pensados para cada fase da vida e cada contexto.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.01] to-transparent pointer-events-none" />
      </section>

      {/* ─── Processo ─────────────────────────────────────────────── */}
      <section id="processo" className="section-padding bg-branco-osso relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl space-y-10 mb-28">
            <Reveal variant="fadeLeft">
              <div className="space-y-4">
                <span className="text-[12px] uppercase tracking-[0.5em] font-bold text-marinho/40 block">03. Processo</span>
                <div className="w-12 h-[1.5px] bg-marinho-muted" />
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.1}>
              <h2 className="text-5xl md:text-7xl font-serif text-marinho leading-[1.05] font-medium tracking-[-0.03em]">
                Um processo cuidadoso para compreender e orientar com{' '}
                <span className="italic text-marinho-muted">clareza e segurança.</span>
              </h2>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.2}>
              <p className="text-xl md:text-[24px] text-marinho/60 max-w-3xl leading-relaxed font-light font-subheadline">
                Cada etapa é conduzida com escuta, critério técnico e organização, para que a avaliação ou acompanhamento gere compreensão, segurança e próximos passos possíveis.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
            {[
              {
                num: '01.',
                title: 'Primeiro contato',
                desc: 'Entendimento inicial da demanda, histórico e objetivo do atendimento. Esclarecimento de dúvidas e alinhamento das expectativas.',
                icon: <MessageCircle className="w-10 h-10" />,
              },
              {
                num: '02.',
                title: 'Avaliação e escuta',
                desc: 'Aplicação de instrumentos padronizados, entrevistas e observação clínica de acordo com cada caso.',
                icon: <ShieldCheck className="w-10 h-10" />,
              },
              {
                num: '03.',
                title: 'Análise integrada',
                desc: 'Organização e interpretação das informações cognitivas, emocionais e comportamentais para uma compreensão completa.',
                icon: <Brain className="w-10 h-10" />,
              },
              {
                num: '04.',
                title: 'Devolutiva e orientação',
                desc: 'Devolutiva clara dos resultados, orientações práticas e definição de próximos passos de forma individualizada.',
                icon: <Users className="w-10 h-10" />,
              },
            ].map((step, idx) => (
              <React.Fragment key={idx}>
              <Reveal variant="fadeUp" delay={idx * 0.1}>
                <div className="space-y-12 group">
                  <div className="flex items-center w-full h-10">
                    <div className="flex-shrink-0 text-marinho-muted group-hover:text-marinho transition-colors duration-500">
                      {step.icon}
                    </div>
                    <div className="flex-grow h-[1px] bg-marinho-muted/20 mx-6 group-hover:bg-marinho-muted/40 transition-colors duration-500" />
                    <span className="flex-shrink-0 text-4xl font-serif italic text-marinho-muted/60 group-hover:text-marinho-muted transition-colors duration-500">
                      {step.num}
                    </span>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-[32px] md:text-2xl font-serif text-marinho font-medium">{step.title}</h3>
                    <div className="w-8 h-[1.5px] bg-marinho-muted/40 group-hover:w-16 group-hover:bg-marinho-muted transition-all duration-700" />
                    <p className="text-[17px] text-marinho/80 leading-relaxed font-light font-sans">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
              </React.Fragment>
            ))}
          </div>

          {/* Info & CTA Bar */}
          <div className="mt-40 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal variant="fadeLeft" className="lg:col-span-6">
              <div className="flex items-start gap-8">
                <div className="text-marinho-muted pt-1">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <p className="text-[14px] text-marinho/70 max-w-sm leading-relaxed font-semibold uppercase tracking-[0.25em] font-sans">
                  Todo o processo é ético, sigiloso e baseado nas melhores práticas da Psicologia e da Neuropsicologia.
                </p>
              </div>
            </Reveal>

            <Reveal variant="fadeRight" delay={0.1} className="lg:col-span-6">
              <a
                href="https://wa.me/5562992284005?text=Olá%2C%20Dr.%20José%20Freitas!%20Gostaria%20de%20agendar%20uma%20avaliação."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-marinho px-8 py-10 md:px-12 rounded-sm flex flex-col md:flex-row items-center justify-between gap-10 group hover:bg-marinho-deep transition-all duration-700 shadow-2xl shadow-marinho/40"
              >
                <div className="flex items-center gap-8">
                  <Presentation className="w-8 h-8 text-prata-quente group-hover:scale-110 transition-transform duration-500" />
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 block">Dúvidas ou quer agendar?</span>
                    <p className="text-2xl text-white font-medium font-serif">Estou aqui para ajudar.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-prata-quente">
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform duration-500" />
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Avaliação Neuropsicológica ───────────────────────────── */}
      <section id="avaliacao" className="section-padding bg-marinho-deep relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white">
            <circle cx="10" cy="10" r="0.5" fill="currentColor" />
            <circle cx="40" cy="20" r="0.5" fill="currentColor" />
            <circle cx="70" cy="15" r="0.5" fill="currentColor" />
            <circle cx="25" cy="45" r="0.5" fill="currentColor" />
            <circle cx="55" cy="50" r="0.5" fill="currentColor" />
            <circle cx="85" cy="40" r="0.5" fill="currentColor" />
            <circle cx="30" cy="80" r="0.5" fill="currentColor" />
            <circle cx="65" cy="75" r="0.5" fill="currentColor" />
            <circle cx="90" cy="85" r="0.5" fill="currentColor" />
            <path d="M10 10 L40 20 L25 45 Z" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <path d="M40 20 L70 15 L55 50 L40 20" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <path d="M70 15 L85 40 L55 50" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <path d="M25 45 L55 50 L30 80 L25 45" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <path d="M55 50 L85 40 L90 85 L65 75 L55 50" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <path d="M30 80 L65 75 M65 75 L90 85" fill="none" stroke="currentColor" strokeWidth="0.1" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Left */}
            <div className="lg:col-span-5 space-y-12">
              <Reveal variant="fadeLeft">
                <div className="space-y-4">
                  <span className="text-[12px] uppercase tracking-[0.5em] font-bold text-branco-osso/40 block">04. Avaliação Neuropsicológica</span>
                  <div className="w-12 h-[1.5px] bg-prata-quente" />
                </div>
              </Reveal>

              <Reveal variant="fadeUp" delay={0.1}>
                <h2 className="text-5xl md:text-7xl font-serif text-branco-osso leading-[1.05] font-medium tracking-[-0.03em]">
                  Entender o <br /> funcionamento <br />
                  <span className="italic text-prata-quente">para orientar melhores decisões.</span>
                </h2>
              </Reveal>

              <Reveal variant="fadeUp" delay={0.2}>
                <p className="text-xl md:text-[24px] text-branco-osso/60 max-w-md leading-relaxed font-light font-subheadline">
                  A avaliação neuropsicológica investiga funções cognitivas, emocionais e comportamentais para compreender dificuldades, apoiar diagnósticos e indicar caminhos de intervenção.
                </p>
              </Reveal>
            </div>

            {/* Right: Items */}
            <div className="lg:col-span-7 flex flex-col pt-10">
              {[
                {
                  title: 'O que avalia',
                  desc: 'Atenção, memória, linguagem, funções executivas, aprendizagem, comportamento e aspectos emocionais.',
                  icon: <Brain className="w-10 h-10" />,
                },
                {
                  title: 'Para quem é indicada',
                  desc: 'Crianças, adolescentes, adultos e idosos que apresentam dificuldades cognitivas, emocionais, escolares, profissionais ou comportamentais.',
                  icon: <Users className="w-10 h-10" />,
                },
                {
                  title: 'O que entrega',
                  desc: 'Relatório técnico, devolutiva clara e orientações práticas para família, escola, equipe clínica ou instituição.',
                  icon: <ShieldCheck className="w-10 h-10" />,
                },
              ].map((item, idx) => (
                <React.Fragment key={idx}>
                <Reveal variant="fadeRight" delay={idx * 0.12}>
                  <div className="group py-12 border-t border-white/5 first:border-t-0 flex flex-col md:flex-row items-start lg:items-center gap-10 transition-all duration-700">
                    <div className="text-prata-quente shrink-0 transition-transform duration-500 group-hover:scale-110">
                      {item.icon}
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-[32px] md:text-3xl font-serif text-branco-osso group-hover:text-prata-quente transition-colors duration-500">
                        {item.title}
                      </h3>
                      <p className="text-lg md:text-xl text-branco-osso/50 leading-relaxed font-light font-subheadline max-w-2xl">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Quote ────────────────────────────────────────────── */}
      <section className="section-padding bg-branco-osso text-marinho relative">
        <div className="container-custom">
          <div className="space-y-16 flex flex-col items-center">
            <Reveal variant="scaleIn">
              <h3 className="text-4xl md:text-6xl font-serif leading-[1.2] italic text-marinho-muted tracking-[-0.02em] text-center max-w-4xl">
                "Compreender a arquitetura da mente é o primeiro passo para encontrar caminhos de desenvolvimento."
              </h3>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.3}>
              <div className="pt-10">
                <a
                  href="https://wa.me/5562992284005?text=Olá%2C%20Dr.%20José%20Freitas!%20Gostaria%20de%20iniciar%20uma%20avaliação."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-12 py-5 bg-marinho text-white text-[12px] font-bold uppercase tracking-[0.4em] rounded-sm hover:bg-marinho-muted transition-all duration-300 flex items-center gap-4"
                >
                  Iniciar Avaliação <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-prata-quente opacity-20" />
      </section>
    </div>
  );
};
