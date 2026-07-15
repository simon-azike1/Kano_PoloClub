import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { FieldMark, SectionHeading } from '../components/ui';
import { IconArrowRight } from '../components/icons';
import heroImage from '../assets/bg (5).jpg';
import heritageImage from '../assets/bg.jpg';

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

const News = () => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div>
      <main className="min-h-screen bg-brand-bg text-brand-text font-sans">
        {/* ═════════════════════════════════════════
            HERO SECTION
            ═════════════════════════════════════════════════ */}
        <section className="relative h-[85vh] w-full overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <motion.img
              src={heroImage}
              alt="Kano Polo Club news and events"
              className="w-full h-full object-cover"
              initial={reducedMotion ? {} : { scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: customEase }}
            />
            {/* Rich gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/15" />
          </div>

          {/* Hero content */}
          <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24 max-w-7xl mx-auto">
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
                  <span className="inline-block text-xs md:text-sm font-sans font-medium tracking-[0.3em] uppercase text-brand-accent mb-4">
                    Est. 1950 — Northern Nigeria
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.1] mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 1.2, delay: 0.15, ease: customEase }}
                >
                  News & Journal
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
                  className="font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-xl mb-6"
                >
                  Latest updates, match reports, and club announcements
                </motion.p>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: customEase }}
                  className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-xl mb-8"
                >
                  Stay informed with our comprehensive coverage of tournaments, player profiles, and club developments
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: customEase }}
                  className="flex flex-wrap gap-6 mb-8 text-white/70"
                >
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: 0, ease: customEase }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-brand-accent">◆</span>
                    <span className="text-sm">Weekly Match Reports</span>
                  </motion.div>
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: customEase }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-brand-accent">◆</span>
                    <span className="text-sm">Club Announcements</span>
                  </motion.div>
                  <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: customEase }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-brand-accent">◆</span>
                    <span className="text-sm">Player Features</span>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.75, ease: customEase }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98, y: 0 }}
                  >
                    <Link
                      to="/about"
                      className="inline-flex items-center gap-2 px-7 py-3 bg-brand-accent text-brand-primary font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white hover:text-brand-primary"
                    >
                      Learn About Us
                      <IconArrowRight />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98, y: 0 }}
                  >
                    <Link
                      to="/club"
                      className="inline-flex items-center gap-2 px-7 py-3 border border-white/40 text-white font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/60"
                    >
                      Explore The Club
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            FIELD MARK DIVIDER
            ════════════════════════════════════════════════ */}
        <FieldMark />

        {/* ═══════════════════════════════════════
            LATEST NEWS
            ═══════════════════════════════════════ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="From the Club" title="Latest News" />
          </motion.div>

          <div className="space-y-8">
            {/* News Article 1 */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: customEase }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <div className="relative p-6 bg-white border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5">
                <div className="flex items-start space-x-4">
                  <motion.img
                    src={heroImage}
                    alt="Partnership announcement"
                    className="w-24 h-24 object-cover rounded-md"
                    initial={reducedMotion ? {} : { scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.8, ease: customEase }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  />
                  <div>
                    <h3 className="font-serif text-lg text-deep-crimson mb-2">
                      Kano Polo Club Announces New Partnership
                    </h3>
                    <p className="font-sans text-sm text-brand-text/60 mb-2 flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="3" width="12" height="11" rx="1" stroke="currentColor" strokeWidth="1.2" />
                        <path d="M2 6 L14 6" stroke="currentColor" strokeWidth="1" />
                        <path d="M5 1 L5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        <path d="M11 1 L11 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                      June 1, 2026
                    </p>
                    <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                      We are pleased to announce our partnership with [Sponsor Name], which will support our youth development programs and facility improvements.
                    </p>
                    <Link
                      to="/news/kano-polo-club-partnership"
                      className="mt-2 inline-flex items-center gap-1 text-brand-accent font-sans text-xs font-medium tracking-wide uppercase hover:underline"
                    >
                      Read More
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10 L16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M11 5 L16 10 L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* News Article 2 */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <div className="relative p-6 bg-white border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5">
                <div className="flex items-start space-x-4">
                  <motion.img
                    src={heroImage}
                    alt="Match victory"
                    className="w-24 h-24 object-cover rounded-md"
                    initial={reducedMotion ? {} : { scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.8, ease: customEase }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  />
                  <div>
                    <h3 className="font-serif text-lg text-deep-crimson mb-2">
                      Thrilling Victory in Saturday's Match
                    </h3>
                    <p className="font-sans text-sm text-brand-text/60 mb-2 flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="3" width="12" height="11" rx="1" stroke="currentColor" strokeWidth="1.2" />
                        <path d="M2 6 L14 6" stroke="currentColor" strokeWidth="1" />
                        <path d="M5 1 L5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        <path d="M11 1 L11 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                      May 25, 2026
                    </p>
                    <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                      Our first team secured a decisive victory over rivals in a fast-paced chukka that showcased exceptional skill and teamwork.
                    </p>
                    <Link
                      to="/news/thrilling-victory-saturday-match"
                      className="mt-2 inline-flex items-center gap-1 text-brand-accent font-sans text-xs font-medium tracking-wide uppercase hover:underline"
                    >
                      Read More
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10 L16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M11 5 L16 10 L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* News Article 3 */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <div className="relative p-6 bg-white border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5">
                <div className="flex items-start space-x-4">
                  <motion.img
                    src={heroImage}
                    alt="Clubhouse renovation"
                    className="w-24 h-24 object-cover rounded-md"
                    initial={reducedMotion ? {} : { scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.8, ease: customEase }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  />
                  <div>
                    <h3 className="font-serif text-lg text-deep-crimson mb-2">
                      Clubhouse Renovation Complete
                    </h3>
                    <p className="font-sans text-sm text-brand-text/60 mb-2 flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="3" width="12" height="11" rx="1" stroke="currentColor" strokeWidth="1.2" />
                        <path d="M2 6 L14 6" stroke="currentColor" strokeWidth="1" />
                        <path d="M5 1 L5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        <path d="M11 1 L11 4" stroke="currentColor" strokeWeight="1.2" strokeLinecap="round" />
                      </svg>
                      May 15, 2026
                    </p>
                    <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                      Our clubhouse has undergone a beautiful renovation, blending traditional architecture.
                    </p>
                    <Link
                      to="/news/clubhouse-renovation-complete"
                      className="mt-2 inline-flex items-center gap-1 text-brand-accent font-sans text-xs font-medium tracking-wide uppercase hover:underline"
                    >
                      Read More
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10 L16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M11 5 L16 10 L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            FIELD MARK DIVIDER
            ════════════════════════════════════════════════ */}
        <FieldMark />

        {/* ════════════════════════════ MATCH REPORTS & ANALYSIS
            ═════════════════════════════════════ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="In-Depth Coverage" title="Match Reports & Analysis" />
          </motion.div>

          <div className="space-y-6">
            {/* Match Report 1 */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: customEase }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <div className="relative p-6 bg-brand-bg/50 border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5">
                <h3 className="font-serif text-xl text-deep-crimson mb-2">
                  Match Report: KPC vs. Rivals FC
                </h3>
                <p className="font-sans text-sm text-brand-text/60 mb-2 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="12" height="11" rx="1" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M2 6 L14 6" stroke="currentColor" strokeWidth="1" />
                    <path d="M5 1 L5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M11 1 L11 4" stroke="currentColor" strokeWeight="1.2" strokeLinecap="round" />
                  </svg>
                  May 20, 2026
                </p>
                <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                  In a highly anticipated match, Kano Polo Club faced off against our longtime rivals. The game was characterized by...
                </p>
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
              </div>
            </motion.div>

            {/* Analysis Article */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.15, ease: customEase }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <div className="relative p-6 bg-brand-bg/50 border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5">
                <h3 className="font-serif text-xl text-deep-crimson mb-2">
                  Tactical Analysis: The Backhand Shot
                </h3>
                <p className="font-sans text-sm text-brand-text/60 mb-2 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="12" height="11" rx="1" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M2 6 L14 6" stroke="currentColor" strokeWidth="1" />
                    <path d="M5 1 L5 4" stroke="currentColor" strokeWeight="1.2" strokeLinecap="round" />
                    <path d="M11 1 L11 4" stroke="currentColor" strokeWeight="1.2" strokeLinecap="round" />
                  </svg>
                  May 10, 2026
                </p>
                <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                  One of the most effective shots in polo, the backhand requires precision and timing. We break down the mechanics...
                </p>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════ FIELD MARK DIVIDER
            ════════════════════════════ */}
        <FieldMark />

        {/* ═════════════════ CLUB ANNOUNCEMENTS
            ══════════════════════════ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="Official Communications" title="Club Announcements" />
          </motion.div>

          <div className="space-y-6">
            {/* Announcement 1 */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: customEase }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <div className="relative p-6 bg-white border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5">
                <h3 className="font-serif text-xl text-deep-crimson mb-2">
                  Important: Updated Club Hours
                </h3>
                <p className="font-sans text-sm text-brand-text/60 mb-2 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="12" height="11" rx="1" stroke="currentColor" strokeWeight="1.2" />
                    <path d="M2 6 L14 6" stroke="currentColor" strokeWeight="1" />
                    <path d="M5 1 L5 4" stroke="currentColor" strokeWeight="1.2" strokeLinecap="round" />
                    <path d="M11 1 L11 4" stroke="currentColor" strokeWeight="1.2" strokeLinecap="round" />
                  </svg>
                  Effective June 1, 2026
                </p>
                <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                  Please note that our club hours have been updated to better serve our members. The new hours are...
                </p>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
              </div>
            </motion.div>

            {/* Announcement 2 */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.15, ease: customEase }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <div className="relative p-6 bg-white border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5">
                <h3 className="font-serif text-xl text-deep-crimson mb-2">
                  Welcome New Members
                </h3>
                <p className="font-sans text-sm text-brand-text/60 mb-2 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="12" height="11" rx="1" stroke="currentColor" strokeWeight="1.2" />
                    <path d="M2 6 L14 6" stroke="currentColor" strokeWeight="1" />
                    <path d="M5 1 L5 4" stroke="currentColor" strokeWeight="1.2" strokeLinecap="round" />
                    <path d="M11 1 L11 4" stroke="currentColor" strokeWeight="1.2" strokeLinecap="round" />
                  </svg>
                  May 15, 2026
                </p>
                <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                  We are pleased to welcome the following new members to the Kano Polo Club family:
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-brand-text/70">
                  <li>John Doe</li>
                  <li>Jane Smith</li>
                  <li>Ali Baba</li>
                </ul>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════ FOOTER SPACER
            ══════════════════════════ */}
        <div className="h-8" />
      </main>
    </motion.div>
  );
};

export default News;