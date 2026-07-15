import { motion } from 'framer-motion';

/* ──────────────────────────────────────────────
   REUSABLE ANIMATION VARIANTS & COMPONENTS
   ────────────────────────────────────────────── */

// ── Fade Up (elements slide up + fade in) ──
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

// ── Fade In (simple opacity) ──
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

// ── Scale In (subtle zoom) ──
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

// ── Slide from Left ──
export const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

// ── Slide from Right ──
export const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

// ── Stagger Container (orchestrates children) ──
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

// ── Page Transition Wrapper ──
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

/* ──────────────────────────────────────────────
   REUSABLE MOTION COMPONENTS
   ────────────────────────────────────────────── */

/**
 * FadeUpSection — wraps children with a stagger container
 * that animates each direct child with fadeUp.
 */
export const FadeUpSection = ({ children, className = '', delay = 0 }) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    className={className}
    custom={delay}
  >
    {children}
  </motion.div>
);

/**
 * FadeUpItem — a single element that fades up.
 * Use inside FadeUpSection or standalone.
 */
export const FadeUpItem = ({ children, className = '', delay = 0, as: Tag = 'div' }) => (
  <motion.div variants={fadeUp} custom={delay} className={className}>
    {children}
  </motion.div>
);

/**
 * ScaleInItem — scales in with opacity.
 */
export const ScaleInItem = ({ children, className = '', delay = 0 }) => (
  <motion.div variants={scaleIn} custom={delay} className={className}>
    {children}
  </motion.div>
);

/**
 * SlideLeftItem — slides in from the left.
 */
export const SlideLeftItem = ({ children, className = '', delay = 0 }) => (
  <motion.div variants={slideLeft} custom={delay} className={className}>
    {children}
  </motion.div>
);

/**
 * SlideRightItem — slides in from the right.
 */
export const SlideRightItem = ({ children, className = '', delay = 0 }) => (
  <motion.div variants={slideRight} custom={delay} className={className}>
    {children}
  </motion.div>
);

/**
 * PageWrapper — wraps an entire page with a fade-up entrance.
 */
export const PageWrapper = ({ children, className = '' }) => (
  <motion.div
    variants={pageTransition}
    initial="initial"
    animate="animate"
    exit="exit"
    className={className}
  >
    {children}
  </motion.div>
);