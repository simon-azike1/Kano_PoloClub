import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import heroImage from '../assets/bg (4).jpg';
import heritageImage from '../assets/bg.jpg';

/* ──────────────────────────────────────────────
    SVG ICONS (Inline, self-contained)
    ────────────────────────────────────────────── */

const IconCrosshair = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <line x1="12" y1="2" x2="12" y2="8" stroke="currentColor" strokeWidth="1" />
    <line x1="12" y1="16" x2="12" y2="22" stroke="currentColor" strokeWidth="1" />
    <line x1="2" y1="12" x2="8" y2="12" stroke="currentColor" strokeWidth="1" />
    <line x1="16" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1" />
    <circle cx="6" cy="6" r="0.5" fill="currentColor" />
    <circle cx="18" cy="6" r="0.5" fill="currentColor" />
    <circle cx="6" cy="18" r="0.5" fill="currentColor" />
    <circle cx="18" cy="18" r="0.5" fill="currentColor" />
    <circle cx="12" cy="4" r="0.5" fill="currentColor" />
    <circle cx="12" cy="20" r="0.5" fill="currentColor" />
    <circle cx="4" cy="12" r="0.5" fill="currentColor" />
    <circle cx="20" cy="12" r="0.5" fill="currentColor" />
  </svg>
);

const IconCalendar = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="12" height="11" rx="1" stroke="currentColor" strokeWidth="1.2" />
    <path d="M2 6 L14 6" stroke="currentColor" strokeWidth="1" />
    <path d="M5 1 L5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M11 1 L11 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const IconArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10 L16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11 5 L16 10 L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconTrophy = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 9l-3 2v4h2v11h2V16h2V9l-3-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M3 9h18v2H3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const IconUsers = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="14" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 20V6a4 4 0 0 1 4-4h4c2.21 0 4 1.79 4 4v2" stroke="currentColor" strokeWidth="1.5" strokeJoin="round" />
  </svg>
);

/* ──────────────────────────────────────────────
    SUB-LAYOUT COMPONENTS
    ────────────────────────────────────────────── */

const FieldMark = () => (
  <div className="flex items-center justify-center gap-4 w-full py-8">
    <div className="h-px flex-1 max-w-[120px] bg-brand-accent/40" />
    <div className="text-brand-accent/60">
      <IconCrosshair />
    </div>
    <div className="h-px flex-1 max-w-[120px] bg-brand-accent/40" />
  </div>
);

const SectionHeading = ({ eyebrow, title }) => (
  <div className="text-center mb-12 md:mb-16">
    <span className="block text-xs md:text-sm font-sans font-medium tracking-[0.25em] uppercase text-brand-accent mb-3">
      {eyebrow}
    </span>
    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-brand-text leading-tight">
      {title}
    </h2>
    <div className="mt-5 flex justify-center">
      <div className="w-16 h-px bg-brand-accent/60" />
    </div>
  </div>
);

// Custom ease for premium feel
const customEase = [0.16, 1, 0.3, 1];

// Helper to split text into spans for staggered animation
const splitTextIntoSpans = (text, splitBy = 'word') => {
  if (!text) return '';
  if (splitBy === 'char') {
    return text.split('').map((char, i) => (
      <span key={i} style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }
  // Default to word split
  return text.split(' ').map((word, i) => (
    <span key={i} style={{ display: 'inline-block', marginRight: i === text.split(' ').length - 1 ? 0 : '0.2em' }}>
      {word}{i === text.split(' ').length - 1 ? '' : ' '}
    </span>
  ));
};

const Events = () => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div>
      <main className="min-h-screen bg-brand-bg text-brand-text font-sans">
        {/* HERO SECTION */}
        <section className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[calc(100dvh-4rem)] w-full overflow-hidden flex items-end">
          {/* Background image */}
          <div className="absolute inset-0">
            <motion.img
              src={heroImage}
              alt="Kano Polo Club grounds at sunset"
              className="w-full h-full object-cover"
              initial={reducedMotion ? {} : { scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: customEase }}
            />
            {/* Darker gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />
          </div>

          {/* Hero content */}
          <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-24 max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: customEase }}
            >
              <div className="max-w-3xl">
                {/* Est. 1950 */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: 0, ease: customEase }}
                >
                  <span className="inline-block text-xs sm:text-sm font-sans font-medium tracking-[0.3em] uppercase text-brand-accent mb-3 sm:mb-4">
                    Est. 1950 — Northern Nigeria
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white leading-[1.1] mb-4 sm:mb-6 flex flex-wrap"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {'Events'.split(' ').map((word, index, arr) => (
                    <motion.span
                      key={index}
                      className="inline-block"
                      variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: {
                          y: 0,
                          opacity: 1,
                          transition: { duration: 1.2, delay: index * 0.05, ease: customEase }
                        }
                      }}
                      style={{ marginRight: index === arr.length - 1 ? 0 : '0.25em' }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
                  className="font-sans text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-xl mb-6"
                >
                  Upcoming tournaments, matches, and social gatherings
                </motion.p>

                {/* Events list paragraph */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: customEase }}
                  className="font-sans text-sm sm:text-base text-white/70 leading-relaxed max-w-xl mb-8"
                >
                  Experience the thrill of competitive polo and the elegance of our signature social events
                </motion.p>

                {/* Events list with badges */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: customEase }}
                  className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 mb-8 text-white/70"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-brand-accent">◆</span>
                    <span className="text-sm">Kano Polo Cup — Jun 15-18</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-brand-accent">◆</span>
                    <span className="text-sm">International Friendly Series — Jul 10-15</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-brand-accent">◆</span>
                    <span className="text-sm">Members' Summer Gala — Aug 5</span>
                  </div>
                </motion.div>

                {/* Buttons */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: customEase }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98, y: 0 }}
                    className="w-full sm:w-auto"
                  >
                    <Link
                      to="/about"
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-brand-accent text-brand-primary font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white hover:text-brand-primary min-h-[48px] touch-manipulation w-full sm:w-auto text-center"
                    >
                      Learn About Us
                      <IconArrowRight />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98, y: 0 }}
                    className="w-full sm:w-auto"
                  >
                    <Link
                      to="/club"
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 border border-white/40 text-white font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/60 min-h-[48px] touch-manipulation w-full sm:w-auto text-center"
                    >
                      Explore The Club
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FIELD MARK DIVIDER */}
        <FieldMark />

        {/* UPCOMING EVENTS */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="Mark Your Calendar" title="Upcoming Events" />
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {/* Event Card 1 */}
            <motion.div
              key="event-card-1"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0, ease: customEase }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98, y: 0 }}
            >
              <div
                className="group relative p-6 bg-white border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="w-full sm:w-48 h-48 sm:h-32 flex-shrink-0 overflow-hidden">
                    <motion.img
                      src={heroImage}
                      alt="Polo tournament"
                      className="w-full h-full object-cover"
                      initial={reducedMotion ? {} : { scale: 1.05 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.8, ease: customEase }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl text-deep-crimson mb-2 group-hover:text-brand-primary transition-colors duration-300">
                        Kano Polo Cup 2026
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-brand-text/60 mb-2 flex items-center">
                        <IconCalendar className="h-4 w-4 mr-2 text-brand-accent flex-shrink-0" /> June 15-18, 2026
                      </p>
                      <p className="font-sans text-sm sm:text-base text-brand-text/70 leading-relaxed">
                        Our premier annual tournament featuring top teams from across Nigeria and invited international guests.
                      </p>
                    </div>
                    <div>
                      <Link
                        to="/events/kano-polo-cup-2026"
                        className="mt-4 inline-flex items-center gap-2 text-brand-accent font-sans text-sm font-medium tracking-wide uppercase hover:underline min-h-[32px]"
                      >
                        View Details
                        <IconArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
              </div>
            </motion.div>

            {/* Event Card 2 */}
            <motion.div
              key="event-card-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98, y: 0 }}
            >
              <div
                className="group relative p-6 bg-white border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="w-full sm:w-48 h-48 sm:h-32 flex-shrink-0 overflow-hidden">
                    <motion.img
                      src={heroImage}
                      alt="Friendly match"
                      className="w-full h-full object-cover"
                      initial={reducedMotion ? {} : { scale: 1.05 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.8, ease: customEase }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl text-deep-crimson mb-2 group-hover:text-brand-primary transition-colors duration-300">
                        International Friendly Series
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-brand-text/60 mb-2 flex items-center">
                        <IconCalendar className="h-4 w-4 mr-2 text-brand-accent flex-shrink-0" /> July 10-15, 2026
                      </p>
                      <p className="font-sans text-sm sm:text-base text-brand-text/70 leading-relaxed">
                        A series of exhibition matches featuring international guest players and local teams.
                      </p>
                    </div>
                    <div>
                      <Link
                        to="/events/international-friendly-series"
                        className="mt-4 inline-flex items-center gap-2 text-brand-accent font-sans text-sm font-medium tracking-wide uppercase hover:underline min-h-[32px]"
                      >
                        View Details
                        <IconArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
              </div>
            </motion.div>

            {/* Event Card 3 */}
            <motion.div
              key="event-card-3"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.2, ease: customEase }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98, y: 0 }}
            >
              <div
                className="group relative p-6 bg-white border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="w-full sm:w-48 h-48 sm:h-32 flex-shrink-0 overflow-hidden">
                    <motion.img
                      src={heroImage}
                      alt="Club social event"
                      className="w-full h-full object-cover"
                      initial={reducedMotion ? {} : { scale: 1.05 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.8, ease: customEase }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl text-deep-crimson mb-2 group-hover:text-brand-primary transition-colors duration-300">
                        Members' Summer Gala
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-brand-text/60 mb-2 flex items-center">
                        <IconCalendar className="h-4 w-4 mr-2 text-brand-accent flex-shrink-0" /> August 5, 2026
                      </p>
                      <p className="font-sans text-sm sm:text-base text-brand-text/70 leading-relaxed">
                        An elegant evening of dining, dancing, and camaraderie for club members and their guests.
                      </p>
                    </div>
                    <div>
                      <Link
                        to="/events/members-summer-gala"
                        className="mt-4 inline-flex items-center gap-2 text-brand-accent font-sans text-sm font-medium tracking-wide uppercase hover:underline min-h-[32px]"
                      >
                        View Details
                        <IconArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
              </div>
            </motion.div>

            {/* Event Card 4 */}
            <motion.div
              key="event-card-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.3, ease: customEase }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98, y: 0 }}
            >
              <div
                className="group relative p-6 bg-white border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="w-full sm:w-48 h-48 sm:h-32 flex-shrink-0 overflow-hidden">
                    <motion.img
                      src={heroImage}
                      alt="Youth tournament"
                      className="w-full h-full object-cover"
                      initial={reducedMotion ? {} : { scale: 1.05 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.8, ease: customEase }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl text-deep-crimson mb-2 group-hover:text-brand-primary transition-colors duration-300">
                        Junior Polo Tournament
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-brand-text/60 mb-2 flex items-center">
                        <IconCalendar className="h-4 w-4 mr-2 text-brand-accent flex-shrink-0" /> September 20-22, 2026
                      </p>
                      <p className="font-sans text-sm sm:text-base text-brand-text/70 leading-relaxed">
                        A fun and competitive event for our young players to showcase their skills.
                      </p>
                    </div>
                    <div>
                      <Link
                        to="/events/junior-polo-tournament"
                        className="mt-4 inline-flex items-center gap-2 text-brand-accent font-sans text-sm font-medium tracking-wide uppercase hover:underline min-h-[32px]"
                      >
                        View Details
                        <IconArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
              </div>
            </motion.div>

            <div className="mt-10 text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0.4, ease: customEase }}
              >
                <Link
                  to="/events"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-brand-accent/40 text-brand-accent font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-brand-accent hover:text-brand-primary min-h-[48px] w-full sm:w-auto text-center"
                >
                  View Full Calendar
                  <IconArrowRight />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FIELD MARK DIVIDER */}
        <FieldMark />

        {/* PAST EVENTS HIGHLIGHTS */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="Memorable Moments" title="Past Events Highlights" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Past Event 1 */}
            <motion.div
              key="past-event-1"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0, ease: customEase }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-6 bg-brand-bg/50 border border-brand-accent/20 h-full">
                <h3 className="font-serif text-lg sm:text-xl text-deep-crimson mb-3">
                  Kano Polo Cup 2025
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brand-text/70 leading-relaxed">
                  Our 75th anniversary tournament was a spectacular success, featuring thrilling matches and record attendance.
                </p>
              </div>
            </motion.div>

            {/* Past Event 2 */}
            <motion.div
              key="past-event-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-6 bg-brand-bg/50 border border-brand-accent/20 h-full">
                <h3 className="font-serif text-lg sm:text-xl text-deep-crimson mb-3">
                  International Challenge Match
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brand-text/70 leading-relaxed">
                  Our team faced off against a prestigious international squad in a closely contested match.
                </p>
              </div>
            </motion.div>

            {/* Past Event 3 */}
            <motion.div
              key="past-event-3"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.2, ease: customEase }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-6 bg-brand-bg/50 border border-brand-accent/20 h-full">
                <h3 className="font-serif text-lg sm:text-xl text-deep-crimson mb-3">
                  Youth Development Clinic
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brand-text/70 leading-relaxed">
                  Our annual clinic introduced dozens of young players to the fundamentals of polo.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER SPACER */}
        <div className="h-4 sm:h-8" />
      </main>
    </motion.div>
  );
};

export default Events;