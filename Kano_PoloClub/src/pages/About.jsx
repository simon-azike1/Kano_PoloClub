import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { FieldMark, SectionHeading } from '../components/ui';
import { IconExcellence, IconSportsmanship, IconCommunity, IconArrowRight } from '../components/icons';
import heroImage from '../assets/bg (2).jpg';
import heritageImage from '../assets/bg.jpg';

const customEase = [0.16, 1, 0.3, 1];

const splitTextIntoSpans = (text, splitBy = 'word') => {
  if (!text) return '';
  if (splitBy === 'char') {
    return text.split('').map((char, i) => (
      <span key={i} style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }
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
        {/* HERO SECTION */}
        <section className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[calc(100dvh-4rem)] w-full overflow-hidden flex items-end">
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
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-24 max-w-7xl mx-auto">
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
                  <span className="inline-block text-xs sm:text-sm font-sans font-medium tracking-[0.3em] uppercase text-brand-accent mb-3 sm:mb-4">
                    Est. 1928 — Northern Nigeria
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white leading-[1.1] mb-4 sm:mb-6 flex flex-wrap"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {'About Kano Polo Club'.split(' ').map((word, index, arr) => (
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
                  className="font-sans text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-xl mb-3 sm:mb-4"
                >
                  Kano Polo Club is one of Nigeria's oldest and most storied sporting institutions, tracing its roots back to 1928. It emerged as part of a wave of polo clubs founded across northern Nigeria in the 1920s — alongside Katsina, Zaria, and Kaduna — as the "Game of Kings" took hold among the region's royal houses and elite.
                </motion.p>

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
                      to="/club"
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-brand-accent text-brand-primary font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white hover:text-brand-primary min-h-[48px] touch-manipulation w-full sm:w-auto text-center"
                    >
                      Explore The Club
                      <IconArrowRight />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98, y: 0 }}
                    className="w-full sm:w-auto"
                  >
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 border border-white/40 text-white font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/60 min-h-[48px] touch-manipulation w-full sm:w-auto text-center"
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FIELD MARK DIVIDER */}
        <FieldMark />

        {/* ABOUT / HERITAGE BLOCK */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left column — informational layout */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: customEase }}
              className="order-2 lg:order-1"
            >
              <span className="block text-xs sm:text-sm font-sans font-medium tracking-[0.25em] uppercase text-brand-accent mb-2 sm:mb-3">
                Our Heritage
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-brand-text leading-tight mb-4 sm:mb-6">
                Our Heritage
              </h2>
              <div className="w-10 sm:w-12 h-px bg-brand-accent/60 mb-4 sm:mb-6" />
              <p className="font-sans text-sm sm:text-base md:text-lg text-brand-text/80 leading-relaxed mb-4 sm:mb-5">
                Today, Kano Polo Club stands as the premier polo centre in Kano State — a place where sport, tradition, and community come together. Set against the backdrop of the ancient city, the club has built a reputation for producing top-tier talent and hosting fiercely competitive matches that draw players and spectators from across Nigeria and abroad.
              </p>
              <p className="font-sans text-sm sm:text-base md:text-lg text-brand-text/80 leading-relaxed mb-6 sm:mb-8">
                Beyond competition, Kano Polo Club is a social and cultural hub. Members and visitors gather to play, unwind, and take in the action, with the club grounds offering a relaxed setting to enjoy the game, connect with fellow enthusiasts, and experience the hospitality the club is known for — including local food, drinks, and entertainment on match days and evenings.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/club"
                  className="inline-flex items-center gap-2 text-brand-primary font-sans text-sm font-medium tracking-wide uppercase border-b border-brand-primary/30 pb-1 transition-all duration-300 hover:border-brand-primary hover:gap-3 touch-manipulation"
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
              className="order-1 lg:order-2 relative pr-3 pb-3 sm:pr-4 sm:pb-4"
            >
              <div className="relative">
                <motion.img
                  src={heritageImage}
                  alt="Historical polo match"
                  className="w-full aspect-[4/3] md:aspect-[5/4] object-cover"
                  initial={reducedMotion ? {} : { scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, ease: customEase }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                />
                {/* Antique brass accent structural under-border */}
                <div className="absolute top-3 left-3 -bottom-3 -right-3 sm:top-4 sm:left-4 sm:-bottom-4 sm:-right-4 border-2 border-brand-accent/40 -z-10" />

                {/* Decorative year badge */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, ease: customEase }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="absolute bottom-3 left-3 sm:-bottom-4 sm:-left-4 bg-brand-primary text-white px-4 py-2 md:px-5 md:py-3 font-serif text-lg md:text-xl tracking-wide z-10"
                >
                  1928
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FIELD MARK DIVIDER */}
        <FieldMark />

        {/* OUR VALUES */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="Our Guiding Principles" title="Our Values" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            {/* Excellence */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0, ease: customEase }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col items-center p-4 sm:p-6 bg-brand-bg/50 h-full">
                <div className="mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconExcellence className="h-7 sm:h-8 w-7 sm:w-8 text-brand-accent" />
                  </motion.div>
                </div>
                <h3 className="font-serif text-base sm:text-lg text-brand-text mb-2 text-center">
                  Excellence
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brand-text/70 leading-relaxed text-center">
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
              <div className="flex flex-col items-center p-4 sm:p-6 bg-brand-bg/50 h-full">
                <div className="mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconSportsmanship className="h-7 sm:h-8 w-7 sm:w-8 text-brand-accent" />
                  </motion.div>
                </div>
                <h3 className="font-serif text-base sm:text-lg text-brand-text mb-2 text-center">
                  Sportsmanship
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brand-text/70 leading-relaxed text-center">
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
              <div className="flex flex-col items-center p-4 sm:p-6 bg-brand-bg/50 h-full">
                <div className="mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconCommunity className="h-7 sm:h-8 w-7 sm:w-8 text-brand-accent" />
                  </motion.div>
                </div>
                <h3 className="font-serif text-base sm:text-lg text-brand-text mb-2 text-center">
                  Community
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brand-text/70 leading-relaxed text-center">
                  We foster a welcoming and inclusive community where members, players, and guests feel like family.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FIELD MARK DIVIDER */}
        <FieldMark />

        {/* ACHIEVEMENTS SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="Our Legacy" title="Our Achievements" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8 sm:mt-12 items-center">
            {/* Achievements list */}
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                key="achievement-1"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0, ease: customEase }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 p-4 sm:p-6 bg-white border border-brand-accent/25 transition-all duration-300 hover:border-brand-accent/40 hover:shadow-md">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center bg-brand-accent/10 rounded-lg">
                      <span className="text-xl sm:text-2xl font-bold text-brand-accent">10+</span>
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-serif text-lg sm:text-xl text-brand-text mb-1">
                      National Championships
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-brand-text/70 leading-relaxed">
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
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 p-4 sm:p-6 bg-white border border-brand-accent/25 transition-all duration-300 hover:border-brand-accent/40 hover:shadow-md">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center bg-brand-accent/10 rounded-lg">
                      <span className="text-xl sm:text-2xl font-bold text-brand-accent">5+</span>
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-serif text-lg sm:text-xl text-brand-text mb-1">
                      International Tournaments Hosted
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-brand-text/70 leading-relaxed">
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
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 p-4 sm:p-6 bg-white border border-brand-accent/25 transition-all duration-300 hover:border-brand-accent/40 hover:shadow-md">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center bg-brand-accent/10 rounded-lg">
                      <span className="text-xl sm:text-2xl font-bold text-brand-accent">50+</span>
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-serif text-lg sm:text-xl text-brand-text mb-1">
                      Years of Excellence
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-brand-text/70 leading-relaxed">
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
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 p-4 sm:p-6 bg-white border border-brand-accent/25 transition-all duration-300 hover:border-brand-accent/40 hover:shadow-md">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center bg-brand-accent/10 rounded-lg">
                      <span className="text-xl sm:text-2xl font-bold text-brand-accent">100+</span>
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-serif text-lg sm:text-xl text-brand-text mb-1">
                      Members Strong
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-brand-text/70 leading-relaxed">
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
              className="relative pr-3 pb-3 sm:pr-4 sm:pb-4"
            >
              <div className="relative">
                <motion.img
                  src={heritageImage}
                  alt="Polo trophy"
                  className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg"
                  initial={reducedMotion ? {} : { scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, ease: customEase }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                />
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

export default About;