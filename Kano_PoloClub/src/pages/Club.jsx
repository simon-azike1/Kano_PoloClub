import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { FieldMark, SectionHeading } from '../components/ui';
import { IconCrosshair, IconPoloField, IconClubhouse, IconAcademy, IconStables, IconAccess, IconEvents, IconCoaching, IconSocial, IconArrowRight, IconCalendar } from '../components/icons';
import heroImage from '../assets/bg (3).jpg';
import heritageImage from '../assets/bg.jpg';
import { clubFacilities, benefits } from '../data';

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

const Club = () => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div>
      <main className="min-h-screen bg-brand-bg text-brand-text font-sans">
        {/* ═════════════════════════════════════════
            HERO SECTION
            ══════════════════════════════════════════════ */}
        <section className="relative h-[85vh] w-full overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <motion.img
              src={heroImage}
              alt="Kano Polo Club facilities"
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
                  {/* Split headline into words for stagger */}
                  <span style={{ display: 'inline-block' }}>
                    {splitTextIntoSpans('The Club', 'word').map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 1.2, delay: index * 0.05, ease: customEase }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
                  className="font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-xl mb-4"
                >
                  World-class facilities for players and ponies alike
                </motion.p>

                {/* Events list paragraph */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: customEase }}
                  className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-xl mb-8"
                >
                  Immaculate polo fields, premium stables, a distinguished clubhouse, and every amenity a modern polo enthusiast could desire — all set within the historic grounds of Kano's finest sporting institution.
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
                      to="/membership"
                      className="inline-flex items-center gap-2 px-7 py-3 bg-brand-accent text-brand-primary font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white hover:text-brand-primary"
                    >
                      Membership Options
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
            ════════════════════════════════════════════ */}
        <FieldMark />

        {/* ════════════════════════════════════════
            FACILITIES GRID
            ════════════════════════════════════════════ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="World-Class Amenities" title="Club Facilities" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {clubFacilities.map((facility, index) => (
              <motion.div
                key={facility.id}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: customEase }}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98, y: 0 }}
              >
                <div
                  className="group relative p-8 md:p-10 bg-white border border-brand-accent/25 transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-brand-accent/70 group-hover:text-brand-accent transition-colors duration-500 mb-6">
                      {facility.icon}
                    </div>
                  </motion.div>
                  <h3 className="font-serif text-xl md:text-2xl text-brand-text mb-3">
                    {facility.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-brand-text/70 leading-relaxed">
                    {facility.description}
                  </p>
                  {/* Subtle corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FIELD MARK DIVIDER
            ════════════════════════════════════════════ */}
        <FieldMark />

        {/* ════════════════════════════════════════
            ABOUT / HERITAGE BLOCK
            ════════════════════════════════════ */}
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
                Founded in 1950 by a group of passionate polo enthusiasts, Kano Polo Club has grown from humble beginnings to become one of the most prestigious polo clubs in Nigeria. Our founding members envisioned a place where the sport of kings could thrive, fostering camaraderie, sportsmanship, and excellence.
              </p>
              <p className="font-sans text-base md:text-lg text-brand-text/80 leading-relaxed mb-8">
                Over the decades, we have hosted numerous tournaments, welcomed international players, and contributed significantly to the development of polo in the region. Our commitment to preserving the traditions of the game while embracing modern advancements has been unwavering.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/membership"
                  className="inline-flex items-center gap-2 text-brand-primary font-sans text-sm font-medium tracking-wide uppercase border-b border-brand-primary/30 pb-1 transition-all duration-300 hover:border-brand-primary hover:gap-3"
                >
                  Explore Membership
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
                1950
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            FIELD MARK DIVIDER
            ════════════════════════════════════════════ */}
        <FieldMark />

        {/* ════════════════════════════════════════
            FACILITIES GRID (DETAILED)
            ═════════════════════════════════════ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="World-Class Amenities" title="Club Facilities" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Polo Fields */}
            <motion.div
              key="polo-fields"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0, ease: customEase }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98, y: 0 }}
            >
              <div
                className="group relative p-8 md:p-10 bg-white border border-brand-accent/25 transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-brand-accent/70 group-hover:text-brand-accent transition-colors duration-500 mb-6">
                    <IconPoloField />
                  </div>
                </motion.div>
                <h3 className="font-serif text-xl md:text-2xl text-brand-text mb-3">
                  World-Class Polo Fields
                </h3>
                <p className="font-sans text-sm md:text-base text-brand-text/70 leading-relaxed">
                  Immaculate turf grounds maintained to international tournament standards, featuring full-size pitches with professional irrigation and drainage systems.
                </p>
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
              </div>
            </motion.div>

            {/* Clubhouse */}
            <motion.div
              key="clubhouse"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98, y: 0 }}
            >
              <div
                className="group relative p-8 md:p-10 bg-white border border-brand-accent/25 transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-brand-accent/70 group-hover:text-brand-accent transition-colors duration-500 mb-6">
                    <IconClubhouse />
                  </div>
                </motion.div>
                <h3 className="font-serif text-xl md:text-2xl text-brand-text mb-3">
                  Luxurious Clubhouse
                </h3>
                <p className="font-sans text-sm md:text-base text-brand-text/70 leading-relaxed">
                  An elegant sanctuary offering refined dining, private lounges, and panoramic terrace views overlooking the championship grounds.
                </p>
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-brand-accent/0 group-hover:border-brand-accent/40 transaction-all duration-500" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-brand-accent/0 group-hover:border-brand-accent/40 transaction-all duration-500" />
              </div>
            </motion.div>

            {/* Training Academy */}
            <motion.div
              key="training-academy"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.2, ease: customEase }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98, y: 0 }}
            >
              <div
                className="group relative p-8 md:p-10 bg-white border border-brand-accent/25 transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-brand-accent/70 group-hover:text-brand-accent transition-colors duration-500 mb-6">
                    <IconAcademy />
                  </div>
                </motion.div>
                <h3 className="font-serif text-xl md:text-2xl text-brand-text mb-3">
                  Training Academy
                </h3>
                <p className="font-sans text-sm md:text-base text-brand-text/70 leading-relaxed">
                  Comprehensive instructional programs led by certified polo professionals, from beginner fundamentals to advanced competitive strategy.
                </p>
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-brand-accent/0 group-hover:border-brand-accent/40 transaction-all duration-500" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-brand-accent/0 group-hover:border-brand-accent/40 transaction-all duration-500" />
              </div>
            </motion.div>

            {/* Premium Stables */}
            <motion.div
              key="premium-stables"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.3, ease: customEase }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98, y: 0 }}
            >
              <div
                className="group relative p-8 md:p-10 bg-white border border-brand-accent/25 transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-brand-accent/70 group-hover:text-brand-accent transition-colors duration-500 mb-6">
                    <IconStables />
                  </div>
                </motion.div>
                <h3 className="font-serif text-xl md:text-2xl text-brand-text mb-3">
                  Premium Stables
                </h3>
                <p className="font-sans text-sm md:text-base text-brand-text/70 leading-relaxed">
                  State-of-the-art equine facilities with climate-controlled stalls, veterinary suites, and dedicated grooming areas for optimal horse welfare.
                </p>
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-brand-accent/0 group-hover:border-brand-accent/40 transaction-all duration-500" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            FIELD MARK DIVIDER
            ════════════════════════════════════════════ */}
        <FieldMark />

        {/* ═══════════════════════════════════════
            MEMBERSHIP BENEFITS
            ════════════════════════════════════ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="Privileges of Membership" title="Membership Benefits" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: customEase }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-center p-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 mb-4 text-brand-accent/80">
                      {benefit.icon}
                    </div>
                  </motion.div>
                  <h3 className="font-serif text-lg text-brand-text mb-2">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-sm text-brand-text/60 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            FIELD MARK DIVIDER
            ════════════════════════════════════════════ */}
        <FieldMark />

        {/* ══════════════════════════════════════
            CALL TO ACTION
            ════════════════════════════════════ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <div className="relative bg-brand-bg border border-brand-accent/30 p-8 md:p-12 lg:p-16">
              {/* Gold framing rules */}
              <div className="absolute top-4 left-4 right-4 h-px bg-brand-accent/20" />
              <div className="absolute bottom-4 left-4 right-4 h-px bg-brand-accent/20" />
              <div className="absolute top-4 bottom-4 left-4 w-px bg-brand-accent/20" />
              <div className="absolute top-4 bottom-4 right-4 w-px bg-brand-accent/20" />

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, ease: customEase }}
              >
                <div className="text-center mb-12">
                  <span className="block text-xs md:text-sm font-sans font-medium tracking-[0.25em] uppercase text-brand-accent mb-3">
                    Join the Legacy
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-brand-text leading-tight mb-4">
                    Become a Member
                  </h2>
                  <p className="font-sans text-base md:text-lg text-brand-text/70 leading-relaxed max-w-2xl mx-auto">
                    Experience the privilege of polo at its finest. Our membership offers unparalleled access to world-class facilities, exclusive events, and a distinguished community.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0.3, ease: customEase }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/membership"
                      className="inline-flex items-center gap-2 px-8 py-3 bg-brand-primary text-white font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-brand-text"
                    >
                      Apply for Membership
                      <IconArrowRight />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-8 py-3 border border-brand-text/20 text-brand-text font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:border-brand-text/40 hover:bg-white"
                    >
                      Contact Membership Office
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════
            FOOTER SPACER
            ═════════════════════════════════════ */}
        <div className="h-8" />
      </main>
    </motion.div>
  );
};

export default Club;