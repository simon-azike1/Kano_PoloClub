import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import heroImage from '../assets/bg (6).jpg';
import heroVideo from '../assets/menPerform.mp4'
import heritageImage from '../assets/bg.jpg';
import { FieldMark, SectionHeading } from '../components/ui';
import { IconCrosshair, IconPoloField, IconClubhouse, IconAcademy, IconStables, IconAccess, IconEvents, IconCoaching, IconSocial, IconArrowRight, IconCalendar } from '../components/icons';
import { facilities, benefits, events } from '../data';

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

// Below this width, skip the background video entirely and use the
// poster frame instead — saves mobile data and battery, which a
// looping autoplay video otherwise costs on every visit.
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false
  );
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isMobile;
};

export default function Home() {
  const [videoReady, setVideoReady] = useState(false);
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  return (
    <motion.div>
      <main className="min-h-screen bg-brand-bg text-brand-text font-sans">
        {/* HERO SECTION — Background Video (skipped on mobile) */}
        {/* Single height rule: 100svh minus the 4rem nav bar, using svh
            instead of vh so the section doesn't resize as the mobile
            browser's address bar shows/hides while scrolling. */}
        <section className="relative h-[calc(100svh-4rem)] min-h-[520px] w-full overflow-hidden flex items-end">
          {/* Background media */}
          <div className="absolute inset-0">
            {isMobile ? (
              <motion.img
                src={heroImage}
                alt="Kano Polo Club grounds at sunset"
                className="absolute inset-0 w-full h-full object-cover"
                initial={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1.05 }}
                animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                transition={{ duration: reducedMotion ? 0 : 1.2, ease: customEase }}
              />
            ) : (
              <motion.video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={heroImage}
                onLoadedData={() => setVideoReady(true)}
                className="absolute inset-0 w-full h-full object-cover"
                initial={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1.05 }}
                animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                transition={{
                  opacity: { duration: reducedMotion ? 0 : 1, ease: customEase },
                  scale: { duration: reducedMotion ? 0 : 1.2, ease: customEase },
                }}
                src={heroVideo}
              />
            )}
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
                  className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white leading-[1.1] mb-4 sm:mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 1.2, delay: 0.15, ease: customEase }}
                >
                  {/* Split headline into words for stagger */}
                  <span style={{ display: 'inline-block' }}>
                    {splitTextIntoSpans('Kano Polo Club', 'word').map((word, index) => (
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
                  className="font-sans text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-xl mb-3 sm:mb-4"
                >
                  A legacy of excellence on the field
                </motion.p>

                {/* Events list paragraph */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: customEase }}
                  className="font-sans text-sm sm:text-base text-white/70 leading-relaxed max-w-xl mb-6 sm:mb-8"
                >
                  Experience the timeless tradition of polo in an atmosphere of refined heritage and sporting distinction. Home to world-class tournaments, elite stables, and a community bound by passion for the sport of kings.
                </motion.p>

                {/* Buttons — full width on mobile, auto width from sm: up */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: customEase }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                  <motion.div
                    className="w-full sm:w-auto"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98, y: 0 }}
                  >
                    <Link
                      to="/about"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3 bg-brand-accent text-brand-primary font-sans text-sm sm:text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white hover:text-brand-primary min-h-[48px] touch-manipulation"
                    >
                      Discover Our Story
                      <IconArrowRight />
                    </Link>
                  </motion.div>
                  <motion.div
                    className="w-full sm:w-auto"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98, y: 0 }}
                  >
                    <Link
                      to="/contact"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3 border border-white/40 text-white font-sans text-sm sm:text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/60 min-h-[48px] touch-manipulation"
                    >
                      Get in Touch
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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="order-2 lg:order-1"
            >
              <span className="block text-xs sm:text-sm font-sans font-medium tracking-[0.25em] uppercase text-brand-accent mb-2 sm:mb-3">
                Our Heritage
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-brand-text leading-tight mb-4 sm:mb-6">
                Seven Decades of Polo Excellence
              </h2>
              <div className="w-10 sm:w-12 h-px bg-brand-accent/60 mb-4 sm:mb-6" />
              <p className="font-sans text-sm sm:text-base md:text-lg text-brand-text/80 leading-relaxed mb-4 sm:mb-5">
                Founded in <strong className="text-brand-primary font-medium">1950</strong>, the Kano Polo Club stands as one of the most prestigious sporting institutions in West Africa. What began as a gathering of passionate horsemen has evolved into a world-class destination for polo enthusiasts from across the globe.
              </p>
              <p className="font-sans text-sm sm:text-base md:text-lg text-brand-text/80 leading-relaxed mb-6 sm:mb-8">
                Our grounds have hosted generations of players, from local champions to international legends, all drawn by the club's commitment to preserving the noble spirit of the game while embracing modern excellence.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-brand-primary font-sans text-sm font-medium tracking-wide uppercase border-b border-brand-primary/30 pb-1 transition-all duration-300 hover:border-brand-primary hover:gap-3 touch-manipulation"
                >
                  Read Our Full History
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
                  alt="Kano Polo Club heritage grounds"
                  loading="lazy"
                  className="w-full aspect-[4/3] md:aspect-[5/4] object-cover"
                  initial={reducedMotion ? {} : { scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, ease: customEase }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                />
                {/* Antique brass accent structural under-border */}
                <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-full h-full border-2 border-brand-accent/40 -z-10" />
              </div>
              {/* Decorative year badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, ease: customEase }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-brand-primary text-white px-4 py-2 md:px-5 md:py-3 font-serif text-lg md:text-xl tracking-wide"
              >
                1950
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FIELD MARK DIVIDER */}
        <FieldMark />

        {/* FACILITIES GRID */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="World-Class Amenities" title="Club Facilities" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
            {facilities.map((facility, index) => (
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
                  className="group relative p-6 sm:p-8 md:p-10 bg-white border border-brand-accent/25 transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5 h-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-brand-accent/70 group-hover:text-brand-accent transition-colors duration-500 mb-4 sm:mb-6">
                      {facility.icon}
                    </div>
                  </motion.div>
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-brand-text mb-2 sm:mb-3">
                    {facility.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-brand-text/70 leading-relaxed">
                    {facility.description}
                  </p>
                  {/* Subtle corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FIELD MARK DIVIDER */}
        <FieldMark />

        {/* EVENTS AGGREGATOR */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="Upcoming Tournaments" title="Club Events" />
          </motion.div>

          <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-12">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: customEase }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 md:gap-8 p-4 sm:p-6 md:p-8 bg-white border border-brand-accent/15 transition-all duration-300 hover:border-brand-accent/40 hover:bg-brand-bg"
                >
                  {/* Calendar tag */}
                  <div className="flex-shrink-0 inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-brand-primary/5 border border-brand-primary/10">
                    <span className="text-brand-primary">
                      <IconCalendar />
                    </span>
                    <span className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-brand-primary">
                      {event.dateRange}
                    </span>
                  </div>

                  {/* Event content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-brand-text mb-1 group-hover:text-brand-primary transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-brand-text/60 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Link action */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex-shrink-0">
                      <Link
                        to={event.link}
                        className="inline-flex items-center gap-2 text-brand-accent font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:gap-3 touch-manipulation"
                      >
                        Details
                        <IconArrowRight />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.3, ease: customEase }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="mt-8 sm:mt-10 text-center">
                <Link
                  to="/events"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 border border-brand-accent/40 text-brand-accent font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-brand-accent hover:text-brand-primary min-h-[48px] touch-manipulation"
                >
                  View All Events
                  <IconArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FIELD MARK DIVIDER */}
        <FieldMark />

        {/* COMMUNITY CTA BOX */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <div className="relative bg-brand-bg border border-brand-accent/30 p-6 sm:p-8 md:p-12 lg:p-16">
              {/* Gold framing rules */}
              <div className="absolute top-3 left-3 right-3 h-px bg-brand-accent/20" />
              <div className="absolute bottom-3 left-3 right-3 h-px bg-brand-accent/20" />
              <div className="absolute top-3 bottom-3 left-3 w-px bg-brand-accent/20" />
              <div className="absolute top-3 bottom-3 right-3 w-px bg-brand-accent/20" />

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, ease: customEase }}
              >
                <div className="text-center mb-8 sm:mb-12">
                  <span className="block text-xs sm:text-sm font-sans font-medium tracking-[0.25em] uppercase text-brand-accent mb-2 sm:mb-3">
                    Join the Club
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-brand-text leading-tight mb-3 sm:mb-4">
                    Membership Benefits
                  </h2>
                  <p className="font-sans text-sm sm:text-base md:text-lg text-brand-text/70 leading-relaxed max-w-2xl mx-auto">
                    Become part of a distinguished community united by a shared passion for polo, tradition, and excellence.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.id}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: index * 0.08, ease: customEase }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98, y: 0 }}
                  >
                    <div className="text-center p-4 sm:p-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 text-brand-accent/80">
                          {benefit.icon}
                        </div>
                      </motion.div>
                      <h3 className="font-serif text-base sm:text-lg text-brand-text mb-1 sm:mb-2">
                        {benefit.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-brand-text/60 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0.4, ease: customEase }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <motion.div
                    className="w-full sm:w-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/membership"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-brand-primary text-white font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-brand-text min-h-[48px] touch-manipulation"
                    >
                      Apply for Membership
                      <IconArrowRight />
                    </Link>
                  </motion.div>
                  <motion.div
                    className="w-full sm:w-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/contact"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 border border-brand-text/20 text-brand-text font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:border-brand-text/40 hover:bg-white min-h-[48px] touch-manipulation"
                    >
                      Contact Membership Office
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* FOOTER SPACER */}
        <div className="h-4 sm:h-8" />
      </main>
    </motion.div>
  );
}