import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { FieldMark, SectionHeading } from '../components/ui';
import { palazzoMedia } from '../data';

// Custom card component for hover-to-play video logic
const GalleryVideoItem = ({ media }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={media.url}
        muted
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 group-hover:opacity-0">
        <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-sm text-white">
          <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Palazzo = () => {
  const reducedMotion = useReducedMotion();
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);

  const heroVideo = palazzoMedia.find((media) => media.type === 'video');

  const filteredMedia = activeCategory === 'all' 
    ? palazzoMedia 
    : palazzoMedia.filter(media => media.category === activeCategory);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedMediaIndex === null) return;
      if (e.key === 'Escape') setSelectedMediaIndex(null);
      if (e.key === 'ArrowRight') handleNext(e);
      if (e.key === 'ArrowLeft') handlePrev(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMediaIndex, filteredMedia]);

  const handlePrev = (e) => {
    e?.stopPropagation();
    setSelectedMediaIndex((prev) => (prev === 0 ? filteredMedia.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setSelectedMediaIndex((prev) => (prev === filteredMedia.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div>
      <main className="min-h-screen bg-brand-bg text-brand-text font-sans">
        
        {/* Hero Section */}
        <section className="relative h-[85vh] w-full overflow-hidden">
          <div className="absolute inset-0">
            {heroVideo ? (
              <motion.video
                src="https://res.cloudinary.com/djizgbimn/video/upload/v1785238035/Palazo2_pwri4o.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                initial={reducedMotion ? {} : { scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            ) : (
              <motion.img
                src="https://res.cloudinary.com/djizgbimn/image/upload/v1785238177/SnapInsta.to_649225908_17874819423541172_4853945488093788875_n_xdclgj.jpg"
                alt="Palazzo restaurant"
                className="w-full h-full object-cover"
                initial={reducedMotion ? {} : { scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/15" />
          </div>

          <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24 max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="max-w-3xl">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: 0, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="inline-block text-xs md:text-sm font-sans font-medium tracking-[0.3em] uppercase text-brand-accent mb-4">
                    Est. 2024 — Kano
                  </span>
                </motion.div>

                <motion.h1
                  className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.1] mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  {"Kano Polo Club".split(' ').map((word, index) => (
                    <motion.span
                      key={index}
                      className="inline-block mr-3"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 1.2, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-xl mb-4"
                >
                  Experience fine dining at Palazzo Restaurant
                </motion.p>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-xl mb-8"
                >
                  Palazzo Restaurant offers a culinary journey with exquisite dishes and vibrant events, perfect for polo enthusiasts and visitors alike.
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98, y: 0 }}
                  >
                    <a
                      href="#gallery"
                      className="inline-flex items-center gap-2 px-7 py-3 bg-brand-accent text-brand-primary font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white hover:text-brand-primary"
                    >
                      View Gallery
                      <span className="arrow-right">→</span>
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Field Mark */}
        <FieldMark />

        {/* Gallery Section */}
        <section id="gallery" className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <SectionHeading eyebrow="Palazzo Gallery" title="Events & Dishes" />
            
            {/* Elegant Filter Navigation */}
            <div className="flex flex-wrap gap-2">
              {['all', 'dishes', 'events', 'interior'].map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setSelectedMediaIndex(null);
                  }}
                  className={`px-5 py-2 border text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'border-brand-accent bg-brand-accent/10 text-brand-accent'
                      : 'border-brand-text/10 text-brand-text/60 hover:text-brand-text hover:border-brand-text/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid Layout */}
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredMedia.map((media, index) => (
                <motion.div
                  layout
                  key={media.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedMediaIndex(index)}
                  className="group relative aspect-[4/3] w-full overflow-hidden bg-slate-900 border border-brand-accent/20 cursor-pointer"
                >
                  {media.type === 'video' ? (
                    <GalleryVideoItem media={media} />
                  ) : (
                    <img
                      src={media.url}
                      alt={media.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110"
                    />
                  )}
                  
                  {/* Subtle Elegant Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-6">
                    <span className="text-[10px] uppercase tracking-widest text-brand-accent font-semibold mb-1">
                      {media.category}
                    </span>
                    <h3 className="font-serif text-lg text-white font-normal leading-snug">
                      {media.alt}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Lightbox Modal overlay */}
        <AnimatePresence>
          {selectedMediaIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMediaIndex(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMediaIndex(null)}
                className="absolute top-6 right-6 z-50 text-white/70 hover:text-white text-3xl font-light"
              >
                &times;
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 z-50 w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 text-xl transition-all"
              >
                &#10094;
              </button>

              {/* Media Content Container */}
              <motion.div
                key={selectedMediaIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()} 
                className="relative max-w-5xl max-h-[75vh] md:max-h-[80vh] w-full h-full flex flex-col items-center justify-center"
              >
                {filteredMedia[selectedMediaIndex].type === 'video' ? (
                  <video
                    controls
                    autoPlay
                    src={filteredMedia[selectedMediaIndex].url}
                    className="max-w-full max-h-full object-contain shadow-2xl"
                  />
                ) : (
                  <img
                    src={filteredMedia[selectedMediaIndex].url}
                    alt={filteredMedia[selectedMediaIndex].alt}
                    className="max-w-full max-h-full object-contain shadow-2xl"
                  />
                )}
                
                {/* Caption description */}
                <div className="mt-4 text-center">
                  <span className="text-xs uppercase tracking-widest text-brand-accent font-semibold block mb-1">
                    {filteredMedia[selectedMediaIndex].category}
                  </span>
                  <p className="text-white/80 font-serif text-base md:text-lg">
                    {filteredMedia[selectedMediaIndex].alt}
                  </p>
                </div>
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 text-xl transition-all"
              >
                &#10095;
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Field Mark */}
        <FieldMark />

        {/* Call to Action */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-center mb-12">
                  <span className="block text-xs md:text-sm font-sans font-medium tracking-[0.25em] uppercase text-brand-accent mb-3">
                    Visit Palazzo
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-brand-text leading-tight mb-4">
                    Reserve Your Table
                  </h2>
                  <p className="font-sans text-base md:text-lg text-brand-text/70 leading-relaxed max-w-2xl mx-auto">
                    Experience the finest dining at Palazzo Restaurant. Book your table now for an unforgettable culinary experience.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a
                    target='_blank'
                      href="https://www.instagram.com/palazzopolo/?hl=en"
                      className="inline-flex items-center gap-2 px-8 py-3 bg-brand-primary text-white font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-brand-text"
                    >
                      Make Reservation
                      <span className="arrow-right">→</span>
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a
                    target='_blank'
                      href="https://www.instagram.com/palazzopolo/?hl=en"
                      className="inline-flex items-center gap-2 px-8 py-3 border border-brand-text/20 text-brand-text font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:border-brand-text/40 hover:bg-white"
                    >
                      Contact Us
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Footer Spacer */}
        <div className="h-8" />
      </main>
    </motion.div>
  );
};

export default Palazzo;