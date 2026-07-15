import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { FieldMark, SectionHeading } from '../components/ui';
import { IconExcellence, IconSportsmanship, IconCommunity, IconArrowRight } from '../components/icons';
import heroImage from '../assets/bg (2).jpg';
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

const About = () => {
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
              alt="Kano Polo Club heritage grounds"
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
                {/* Est. 1928 */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: 0, ease: customEase }}
                >
                  <span className="inline-block text-xs md:text-sm font-sans font-medium tracking-[0.3em] uppercase text-brand-accent mb-4">
                    Est. 1928 — Northern Nigeria
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
                  About Kano Polo Club
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
                  className="font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-xl mb-4"
                >
                  Kano Polo Club is one of Nigeria's oldest and most storied sporting institutions, tracing its roots back to 1928. It emerged as part of a wave of polo clubs founded across northern Nigeria in the 1920s — alongside Katsina, Zaria, and Kaduna — as the "Game of Kings" took hold among the region's royal houses and elite.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: customEase }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98, y: 0 }}
                  >
                    <Link
                      to="/club"
                      className="inline-flex items-center gap-2 px-7 py-3 bg-brand-accent text-brand-primary font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white hover:text-brand-primary"
                    >
                      Explore The Club
                      <IconArrowRight />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98, y: 0 }}
                  >
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-7 py-3 border border-white/40 text-white font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/60"
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FIELD MARK DIVIDER
            ═══════════════════════════════════════════════ */}
        <FieldMark />

        {/* ════════════════════════════════════════
            ABOUT / HERITAGE BLOCK
            ══════════════════════════════════════ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left column — informational layout */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: customEase }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="order-2 lg:order-1"
            >
              <span className="block text-xs md:text-sm font-sans font-medium tracking-[0.25em] uppercase text-brand-accent mb-3">
                Our Heritage
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-brand-text leading-tight mb-6">
                Our Heritage
              </h2>
              <div className="w-12 h-px bg-brand-accent/60 mb-6" />
              <p className="font-sans text-base md:text-lg text-brand-text/80 leading-relaxed mb-5">
                Today, Kano Polo Club stands as the premier polo centre in Kano State — a place where sport, tradition, and community come together. Set against the backdrop of the ancient city, the club has built a reputation for producing top-tier talent and hosting fiercely competitive matches that draw players and spectators from across Nigeria and abroad.
              </p>
              <p className="font-sans text-base md:text-lg text-brand-text/80 leading-relaxed mb-8">
                Beyond competition, Kano Polo Club is a social and cultural hub. Members and visitors gather to play, unwind, and take in the action, with the club grounds offering a relaxed setting to enjoy the game, connect with fellow enthusiasts, and experience the hospitality the club is known for — including local food, drinks, and entertainment on match days and evenings.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/club"
                  className="inline-flex items-center gap-2 text-brand-primary font-sans text-sm font-medium tracking-wide uppercase border-b border-brand-primary/30 pb-1 transition-all duration-300 hover:border-brand-primary hover:gap-3"
                >
                  Explore The Club
                  <IconArrowRight />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right column — landscape graphic with accent border */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: customEase }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative">
                <motion.img
                  src={heritageImage}
                  alt="Historical polo match"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  initial={reducedMotion ? {} : { scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, ease: customEase }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                />
                {/* Antique brass accent structural under-border */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-accent/40 -z-10" />
              </div>
              {/* Decorative year badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, ease: customEase }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="absolute -bottom-6 -left-6 md:-left-10 bg-brand-primary text-white px-5 py-3 font-serif text-xl md:text-2xl tracking-wide"
              >
                1928
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FIELD MARK DIVIDER
            ═══════════════════════════════════════════════ */}
        <FieldMark />

        {/* ════════════════════════════════════════
            OUR VALUES
            ═════════════════════════════════════ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="Our Guiding Principles" title="Our Values" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Excellence */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0, ease: customEase }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col items-center p-6 bg-brand-bg/50">
                <div className="mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconExcellence className="h-8 w-8 text-brand-accent" />
                  </motion.div>
                </div>
                <h3 className="font-serif text-lg text-brand-text mb-2">
                  Excellence
                </h3>
                <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                  We strive for excellence in every aspect of our club, from the condition of our fields to the quality of our events.
                </p>
              </div>
            </motion.div>

            {/* Sportsmanship */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.15, ease: customEase }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col items-center p-6 bg-brand-bg/50">
                <div className="mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconSportsmanship className="h-8 w-8 text-brand-accent" />
                  </motion.div>
                </div>
                <h3 className="font-serif text-lg text-brand-text mb-2">
                  Sportsmanship
                </h3>
                <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                  We uphold the highest standards of fair play, respect, and integrity both on and off the field.
                </p>
              </div>
            </motion.div>

            {/* Community */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.3, ease: customEase }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col items-center p-6 bg-brand-bg/50">
                <div className="mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconCommunity className="h-8 w-8 text-brand-accent" />
                  </motion.div>
                </div>
                <h3 className="font-serif text-lg text-brand-text mb-2">
                  Community
                </h3>
                <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                  We foster a welcoming and inclusive community where members, players, and guests feel like family.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FIELD MARK DIVIDER
            ═══════════════════════════════════════════════ */}
        <FieldMark />

        {/* ════════════════════════════════════════
            ACHIEVEMENTS SECTION
            ══════════════════════════════════════ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="Our Legacy" title="Our Achievements" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Achievements list */}
            <div className="space-y-6">
              <motion.div
                key="achievement-1"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0, ease: customEase }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 flex items-center justify-center bg-brand-accent/10 rounded-lg">
                      <span className="text-2xl font-bold text-brand-accent">10+</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-brand-text mb-2">
                      National Championships
                    </h3>
                    <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                      Our teams have won numerous national championships across various categories.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                key="achievement-2"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 flex items-center justify-center bg-brand-accent/10 rounded-lg">
                      <span className="text-2xl font-bold text-brand-accent">5+</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-brand-text mb-2">
                      International Tournaments Hosted
                    </h3>
                    <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                      We have proudly hosted international tournaments that have brought global attention to Nigerian polo.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                key="achievement-3"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0.2, ease: customEase }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 flex items-center justify-center bg-brand-accent/10 rounded-lg">
                      <span className="text-2xl font-bold text-brand-accent">50+</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-brand-text mb-2">
                      Years of Excellence
                    </h3>
                    <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                      For over five decades, we have been committed to promoting and elevating the sport of polo.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                key="achievement-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0.3, ease: customEase }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 flex items-center justify-center bg-brand-accent/10 rounded-lg">
                      <span className="text-2xl font-bold text-brand-accent">100+</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-brand-text mb-2">
                      Members Strong
                    </h3>
                    <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                      Our growing community of members shares a passion for the sport and the club's values.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: customEase }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-center">
                <motion.img
                  src={heritageImage}
                  alt="Polo trophy"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  initial={reducedMotion ? {} : { scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, ease: customEase }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FOOTER SPACER
            ════════════════════════════════════════ */}
        <div className="h-8" />
      </main>
    </motion.div>
  );
};

export default About;