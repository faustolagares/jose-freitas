import { motion, useReducedMotion, type Variants } from 'motion/react';
import type { ReactNode } from 'react';

type RevealVariant = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleIn' | 'fade';

const EASE = [0.16, 1, 0.3, 1] as const;

const variantMap: Record<RevealVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
}

export function Reveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.7,
  className,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const activeVariants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : variantMap[variant];

  return (
    <motion.div
      variants={activeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: prefersReducedMotion ? 0.2 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
