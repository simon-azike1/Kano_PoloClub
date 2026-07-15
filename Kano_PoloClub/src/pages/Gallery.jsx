import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { SocialLinks } from '../components/SocialIcons';
import { FieldMark, SectionHeading } from '../components/ui';

import gallery1 from '../assets/bg.jpg';
import gallery2 from '../assets/bg (2).jpg';
import gallery3 from '../assets/bg (3).jpg';
import gallery4 from '../assets/bg (4).jpg';
import gallery5 from '../assets/bg (5).jpg';
import gallery6 from '../assets/bg (6).jpg';
import gallery7 from '../assets/bg (7).jpg';
import gallery8 from '../assets/bg (8).jpg';
import gallery9 from '../assets/polo1.jpg';

/* ──────────────────────────────────────────────
    VIDEO CONFIG
    ────────────────────────────────────────────── */

const videoUrl = 'https://res.cloudinary.com/djizgbimn/video/upload/v1784066347/POLO_ywdgli.mp4';

/* ──────────────────────────────────────────────
    SVG ICONS
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

const IconArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10 L16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11 5 L16 10 L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCamera = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconBook = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconPlay = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5v14l11-7z" />
  </svg>
);

/* ──────────────────────────────────────────────
    GALLERY DATA
    ────────────────────────────────────────────── */

const galleryImages = [
  {
    id: 1,
    src: gallery1,
    alt: "Kano Polo Club grounds at sunset",
    category: "Grounds",
    title: "Championship Grounds",
    description: "Our pristine polo fields maintained to international tournament standards, hosting the finest matches in West Africa."
  },
  {
    id: 2,
    src: gallery2,
    alt: "Historical polo match at Kano Polo Club",
    category: "Heritage",
    title: "A Legacy Since 1950",
    description: "Seven decades of polo excellence, where generations of players have written their names in the club's storied history."
  },
  {
    id: 3,
    src: gallery3,
    alt: "Clubhouse exterior view",
    category: "Facilities",
    title: "The Grand Clubhouse",
    description: "An elegant sanctuary offering refined dining, private lounges, and panoramic terrace views overlooking the championship grounds."
  },
  {
    id: 4,
    src: gallery4,
    alt: "Polo training academy session",
    category: "Academy",
    title: "Training Academy",
    description: "Comprehensive instructional programs led by certified polo professionals, from beginner fundamentals to advanced competitive strategy."
  },
  {
    id: 5,
    src: gallery5,
    alt: "Premium stables at Kano Polo Club",
    category: "Facilities",
    title: "Premium Stables",
    description: "State-of-the-art equine facilities with climate-controlled stalls, veterinary suites, and dedicated grooming areas for optimal horse welfare."
  },
  {
    id: 6,
    src: gallery6,
    alt: "Tournament action at Kano Polo Cup",
    category: "Events",
    title: "Kano Polo Cup",
    description: "The premier annual championship drawing elite teams from across West Africa for four days of high-goal competition."
  },
  {
    id: 7,
    src: gallery7,
    alt: "Members social gathering at clubhouse",
    category: "Community",
    title: "Members' Gala",
    description: "An elegant evening of dining, dancing, and camaraderie for club members and their distinguished guests."
  },
  {
    id: 8,
    src: gallery8,
    alt: "Youth polo development program",
    category: "Academy",
    title: "Youth Development",
    description: "Our annual clinic introduces young players to the fundamentals of polo, nurturing the next generation of champions."
  },
  {
    id: 9,
    src: gallery9,
    alt: "Polo match in action",
    category: "Action",
    title: "The Sport of Kings",
    description: "Experience the thrill of polo - speed, strategy, and horsemanship combined in one magnificent spectacle."
  }
];

const stories = [
  {
    id: 1,
    title: "The Founding Vision",
    year: "1950",
    excerpt: "A group of passionate horsemen gathered under the shade of an acacia tree, dreaming of a place where the ancient sport of polo could flourish in Northern Nigeria. Their vision birthed what would become the region's most prestigious polo institution.",
    category: "History",
    icon: IconBook
  },
  {
    id: 2,
    title: "The Golden Era of the 1970s",
    year: "1970s",
    excerpt: "International teams flocked to Kano for the legendary tournaments that put Nigerian polo on the world map. Champions from Argentina, England, and India graced our fields, creating unforgettable moments of sporting excellence.",
    category: "Heritage",
    icon: IconBook
  },
  {
    id: 3,
    title: "Champions of the Field",
    year: "1995",
    excerpt: "Our home team achieved the remarkable feat of winning three consecutive national championships, a testament to the club's commitment to developing world-class talent and maintaining the highest standards of play.",
    category: "Achievement",
    icon: IconCamera
  },
  {
    id: 4,
    title: "The Clubhouse Renaissance",
    year: "2020",
    excerpt: "A meticulous restoration preserved the clubhouse's colonial architecture while introducing modern luxury. Today it stands as a bridge between our storied past and vibrant future, welcoming members to an atmosphere of timeless elegance.",
    category: "Renewal",
    icon: IconBook
  },
  {
    id: 5,
    title: "Nurturing Tomorrow's Champions",
    year: "Present",
    excerpt: "Our youth development program has introduced over 200 young players to polo since its inception. Many have gone on to represent Nigeria internationally, carrying forward the club's legacy of excellence and sportsmanship.",
    category: "Future",
    icon: IconCamera
  },
  {
    id: 6,
    title: "A Global Polo Destination",
    year: "Present",
    excerpt: "Today, Kano Polo Club welcomes players and visitors from across the globe. Our reciprocal arrangements with prestigious clubs worldwide ensure our members enjoy privileged access to the world's finest polo destinations.",
    category: "Community",
    icon: IconBook
  }
];

/* ──────────────────────────────────────────────
    MAIN GALLERY COMPONENT
    ────────────────────────────────────────────── */

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

const Gallery = () => {
  const reducedMotion = useReducedMotion();
  const customEase = [0.16, 1, 0.3, 1];

  return (
    <motion.div>
      <main className="min-h-screen bg-brand-bg text-brand-text font-sans">
        {/* ═══════════════════════════════════════════════
            HERO SECTION
            ═══════════════════════════════════════════ */}
        <section className="relative min-h-[80vh] w-full overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <motion.img
              src={gallery1}
              alt="Kano Polo Club gallery"
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
          <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-20 py-16 max-w-7xl mx-auto">
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
                  Gallery, Videos & Stories
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
                  className="font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-xl mb-6"
                >
                  Explore our heritage through images and stories — seven decades of polo excellence captured in moments
                </motion.p>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: customEase }}
                  className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-xl mb-8"
                >
                  From championship matches to intimate club moments, every photograph tells a story of tradition, excellence, and community
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
                    <span className="text-sm">9 Curated Photo Galleries</span>
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
                    <span className="text-sm">6 Heritage Stories</span>
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
                    <span className="text-sm">70+ Years of History</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════
            FIELD MARK DIVIDER
            ═══════════════════════════════════════════════ */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: customEase }}
        >
          <div className="flex items-center justify-center gap-4 w-full py-8">
            <div className="h-px flex-1 max-w-[120px] bg-brand-accent/40" />
            <div className="text-brand-accent/60">
              <IconCrosshair />
            </div>
            <div className="h-px flex-1 max-w-[120px] bg-brand-accent/40" />
          </div>
        </motion.div>

        {/* ═════════════════════════════════════════════
            PHOTO GALLERY GRID
            ═════════════════════════════════════════ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="Moments Captured" title="Photo Gallery" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: customEase }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-brand-primary">
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    initial={reducedMotion ? {} : { scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.8, ease: customEase }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block text-xs font-sans font-medium tracking-[0.15em] uppercase text-brand-accent mb-2">
                      {image.category}
                    </span>
                    <h3 className="font-serif text-lg md:text-xl text-white mb-2">
                      {image.title}
                    </h3>
                    <p className="font-sans text-sm text-white/80 leading-relaxed">
                      {image.description}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-brand-accent/90 flex items-center justify-center text-brand-primary">
                      <motion.svg
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <path d="M5 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
                      </motion.svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════
            FIELD MARK DIVIDER
            ═════════════════════════════════════════ */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: customEase }}
        >
          <div className="flex items-center justify-center gap-4 w-full py-8">
            <div className="h-px flex-1 max-w-[120px] bg-brand-accent/40" />
            <div className="text-brand-accent/60">
              <IconCrosshair />
            </div>
            <div className="h-px flex-1 max-w-[120px] bg-brand-accent/40" />
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════
            VIDEO GALLERY SECTION
            ═════════════════════════════════════════ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="Visual Journey" title="Video Gallery" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Video 1 - Main Featured */}
            <motion.div
              key="video-1"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0, ease: customEase }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="md:col-span-2 lg:col-span-2"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-brand-primary">
                <motion.video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  poster={gallery1}
                  initial={reducedMotion ? {} : { scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, ease: customEase }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <source src={videoUrl} type="video/mp4" />
                </motion.video>
                <div className="absolute inset-0 flex items-center justify-center bg-brand-primary/20 group-hover:bg-brand-primary/10 transition-colors duration-300">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-brand-accent/90 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconPlay />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Video 2 */}
            <motion.div
              key="video-2"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-brand-primary">
                <motion.video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  poster={gallery2}
                  initial={reducedMotion ? {} : { scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, ease: customEase }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <source src={videoUrl} type="video/mp4" />
                </motion.video>
                <div className="absolute inset-0 flex items-center justify-center bg-brand-primary/20 group-hover:bg-brand-primary/10 transition-colors duration-300">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-brand-accent/90 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconPlay />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Video 3 */}
            <motion.div
              key="video-3"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-brand-primary">
                <motion.video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  poster={gallery3}
                  initial={reducedMotion ? {} : { scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, ease: customEase }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <source src={videoUrl} type="video/mp4" />
                </motion.video>
                <div className="absolute inset-0 flex items-center justify-center bg-brand-primary/20 group-hover:bg-brand-primary/10 transition-colors duration-300">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-brand-accent/90 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconPlay />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Video 4 */}
            <motion.div
              key="video-4"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-brand-primary">
                <motion.video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  poster={gallery4}
                  initial={reducedMotion ? {} : { scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, ease: customEase }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <source src={videoUrl} type="video/mp4" />
                </motion.video>
                <div className="absolute inset-0 flex items-center justify-center bg-brand-primary/20 group-hover:bg-brand-primary/10 transition-colors duration-300">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-brand-accent/90 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconPlay />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Video 5 */}
            <motion.div
              key="video-5"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.4, ease: customEase }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-brand-primary">
                <motion.video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  poster={gallery5}
                  initial={reducedMotion ? {} : { scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, ease: customEase }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <source src={videoUrl} type="video/mp4" />
                </motion.video>
                <div className="absolute inset-0 flex items-center justify-center bg-brand-primary/20 group-hover:bg-brand-primary/10 transition-colors duration-300">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-brand-accent/90 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconPlay />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FIELD MARK DIVIDER
            ═════════════════════════════════════════ */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: customEase }}
        >
          <div className="flex items-center justify-center gap-4 w-full py-8">
            <div className="h-px flex-1 max-w-[120px] bg-brand-accent/40" />
            <div className="text-brand-accent/60">
              <IconCrosshair />
            </div>
            <div className="h-px flex-1 max-w-[120px] bg-brand-accent/40" />
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            STORIES SECTION
            ════════════════════════════════════════ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="Our Journey" title="Stories & Heritage" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: customEase }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <div className="relative p-6 md:p-8 bg-white border border-brand-accent/25 transition-all duration-500 hover:border-brand-accent/50 hover:shadow-lg hover:shadow-brand-accent/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-primary transition-all duration-300">
                      {story.icon}
                    </div>
                    <div>
                      <span className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-brand-accent">
                        {story.category}
                      </span>
                      <span className="ml-3 text-xs text-brand-text/50">{story.year}</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-brand-text mb-4 group-hover:text-brand-primary transition-colors duration-300">
                    {story.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-brand-text/70 leading-relaxed">
                    {story.excerpt}
                  </p>
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FIELD MARK DIVIDER
            ═════════════════════════════════════════ */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: customEase }}
        >
          <div className="flex items-center justify-center gap-4 w-full py-8">
            <div className="h-px flex-1 max-w-[120px] bg-brand-accent/40" />
            <div className="text-brand-accent/60">
              <IconCrosshair />
            </div>
            <div className="h-px flex-1 max-w-[120px] bg-brand-accent/40" />
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            CTA SECTION
            ════════════════════════════════════════ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <div className="relative bg-brand-bg border border-brand-accent/30 p-8 md:p-12 lg:p-16">
              <div className="absolute top-4 left-4 right-4 h-px bg-brand-accent/20" />
              <div className="absolute bottom-4 left-4 right-4 h-px bg-brand-accent/20" />
              <div className="absolute top-4 bottom-4 left-4 w-px bg-brand-accent/20" />
              <div className="absolute top-4 bottom-4 right-4 w-px bg-brand-accent/20" />

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: 0, ease: customEase }}
                className="text-center mb-12"
              >
                <span className="block text-xs md:text-sm font-sans font-medium tracking-[0.25em] uppercase text-brand-accent mb-3">
                  Experience It Yourself
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-brand-text leading-tight mb-4">
                  Create Your Own Story
                </h2>
                <p className="font-sans text-base md:text-lg text-brand-text/70 leading-relaxed max-w-2xl mx-auto">
                  Every visit to Kano Polo Club adds a new chapter to our shared history. Whether you're a seasoned player or discovering polo for the first time, your story awaits.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98, y: 0 }}
                >
                  <Link
                    to="/club"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-brand-primary text-white font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-brand-text"
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
                    to="/membership"
                    className="inline-flex items-center gap-2 px-8 py-3 border border-brand-text/20 text-brand-text font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:border-brand-text/40 hover:bg-white"
                  >
                    Become a Member
                    <IconArrowRight />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: 0.45, ease: customEase }}
                className="flex items-center justify-center gap-4"
              >
                <SocialLinks />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════
            FOOTER SPACER
            ════════════════════════════════════════ */}
        <div className="h-8" />
      </main>
    </motion.div>
  );
};

export default Gallery;