# Regras de Desenvolvimento - Dr. José Freitas

Este documento contém as diretrizes cruciais que devem ser seguidas em todas as interações e modificações deste projeto.

## 1. Responsividade e Breakpoints
- **Mobile-First**: Toda implementação deve começar pelo mobile e escalar para tablets e desktops.
- **Breakpoints**: Testar rigorosamente em `sm`, `md`, `lg` e `xl`.
- **Touch Targets**: Botões e links em mobile devem ter área de clique adequada (mínimo 44px).
- **Layouts Fluidos**: Priorizar o uso de containers robustos (`container-custom`) para evitar que o conteúdo quebre em telas muito grandes ou pequenas.

## 2. Design System e Identidade Visual
- **Tipografia**:
  - **Headlines (H1, H2, H3)**: Fonte `Cormorant Garamond`, Peso `500` (médio). Tracking ajustado para ser mais fechado em displays grandes.
  - **Subheadlines/Destaques**: Fonte `Lora`.
  - **Textos de Apoio / Body**: Fonte `Hind Madurai`.
- **Cores**:
  - **Dark Mode Sections**: 
    - Fundo `marinho` ou `marinho-deep`.
    - Texto principal: `white` ou `branco-osso`.
    - **Headlines (Itálico)**: Cor `prata-quente` (`#e2e8f0`).
    - **Ícones**: Cor `prata-quente` (`#e2e8f0`).
  - **Light Mode Sections**: 
    - Fundo `branco-osso`.
    - Texto principal: `marinho`.
    - **Headlines (Itálico)**: Cor `marinho-muted` (`#1c3449`).
    - **Ícones**: Cor `marinho-muted` (`#1c3449`).
- **Elementos UI**:
  - **Ícones**: Nunca usar backgrounds circulares ou bordas em ícones, a menos que explicitamente solicitado. Usar o ícone puro no layout.
  - **Espaçamento**: Seguir o sistema de `section-padding` estabelecido.

## 3. Qualidade de Código
- **TypeScript**: Tipagem estrita em todos os componentes.
- **Lucide Icons**: Usar apenas ícones da biblioteca `lucide-react`.
- **Framer Motion**: Usar `motion/react` para transições suaves e staggered animations.
