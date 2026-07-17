import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { useState, useRef } from 'react';
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
     VIDEO CONFIG (External Cloudinary URLs)
     ────────────────────────────────────────────── */

const videoItems = [
  {
    id: 'video-1',
    url: 'https://res.cloudinary.com/djizgbimn/video/upload/v1784293226/SnapInsta.to_AQOIsXp_s0_BAeneu9KU_lK7NU9htO2T1SW-xLNOPTg5-QSsxc789hExWqSLGuzt5gq7vmSdknjTa3PiUULshBIrzraPmquXfIyTwS4_dsgrmb.mp4',
    poster: gallery1,
    title: 'Kano Polo Cup Action'
  },
  {
    id: 'video-2',
    url: 'https://res.cloudinary.com/djizgbimn/video/upload/v1784293217/heighLights_kluc1w.mp4',
    poster: gallery2,
    title: 'Highlights Reel'
  },
  {
    id: 'video-3',
    url: 'https://res.cloudinary.com/djizgbimn/video/upload/v1784293225/ladyPerform_dciwxc.mp4',
    poster: gallery3,
    title: "Ladies' Performance"
  },
  {
    id: 'video-4',
    url: 'https://res.cloudinary.com/djizgbimn/video/upload/v1784293226/SnapInsta.to_AQOIsXp_s0_BAeneu9KU_lK7NU9htO2T1SW-xLNOPTg5-QSsxc789hExWqSLGuzt5gq7vmSdknjTa3PiUULshBIrzraPmquXfIyTwS4_dsgrmb.mp4',
    poster: gallery4,
    title: "Men's Performance"
  },
  {
    id: 'video-5',
    url: 'https://res.cloudinary.com/djizgbimn/video/upload/v1784293224/menPerform2_bxym9h.mp4',
    poster: gallery5,
    title: "Men's Performance 2"
  }
];

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

const IconVolumeOff = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 5L6 10v4a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-3c0-1.1.9-2 2-2h1V8a2 2 0 0 0-2-2H4l5-5zM19 10v2a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-2a5 5 0 0 0 10 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="8" r="1" />
  </svg>
);

const IconVolumeUp = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 8h-1l1.14 2.29a1 1 0 0 0 1.42.58l2.34-1.17a1 1 0 0 0 .58-1.42L15.5 8zm-5 0H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1.5l1.14 2.29a1 1 0 0 0 1.42.58l2.34-1.17a1 1 0 0 0 .58-1.42L9.5 8zM19 10v2a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-2a5 5 0 0 0 10 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ──────────────────────────────────────────────
     iPHONE 16 PRO MOCKUP COMPONENT
     ────────────────────────────────────────────── */

const IPhone16Pro = ({ children, videoId, playing, muted, onTogglePlay, onToggleMute, title }) => {
  return (
    <div className="relative w-full max-w-[280px] mx-auto">
      {/* Phone outer frame - Titanium finish */}
      <div className="relative rounded-[48px] bg-gradient-to-b from-[#b8b5b0] via-[#9a9792] to-[#7a7772] p-[3px] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.5),0_0_0_1px_rgba(0,0,0,0.1)]">
        {/* Inner bezel */}
        <div className="relative rounded-[45px] bg-[#1a1a1a] p-[10px]">
          {/* Screen area */}
          <div className="relative rounded-[35px] overflow-hidden bg-black">
            {/* Dynamic Island */}
            <div className="absolute top-[12px] left-1/2 -translate-x-1/2 z-30">
              <div className="w-[90px] h-[28px] bg-black rounded-full flex items-center justify-center gap-1.5 shadow-[0_0_0_0.5px_rgba(255,255,255,0.08)]">
                {/* Front camera lens */}
                <div className="w-[10px] h-[10px] rounded-full bg-[#0a0a0a] ring-[1.5px] ring-[#1a1a1a] shadow-inner flex items-center justify-center">
                  <div className="w-[4px] h-[4px] rounded-full bg-[#1a3a5c] opacity-80" />
                </div>
              </div>
            </div>

            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 pt-[14px] pb-2">
              <span className="text-[11px] font-semibold text-white tracking-wide">9:41</span>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
                </svg>
              </div>
            </div>

            {/* Video content */}
            <div className="relative aspect-[9/19.5] w-full">
              {children}

              {/* Play/Pause overlay button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <button
                  onClick={onTogglePlay}
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md ${playing ? 'bg-white/10 scale-90' : 'bg-white/20 scale-100 hover:bg-white/30 hover:scale-110'}`}
                >
                  {playing ? (
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="10" y1="6" x2="10" y2="18" />
                      <line x1="14" y1="6" x2="14" y2="18" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Volume toggle */}
              <button
                onClick={onToggleMute}
                className="absolute bottom-16 right-4 z-10 w-8 h-8 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-white/25"
              >
                {muted ? (
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
              </button>

              {/* Bottom home indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
                <div className="w-[120px] h-[5px] bg-white/40 rounded-full" />
              </div>

              {/* Video title overlay */}
              <div className="absolute bottom-8 left-0 right-0 z-10 px-4">
                <p className="text-white/90 text-xs font-medium text-center drop-shadow-lg">{title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Side buttons - Action button */}
        <div className="absolute -left-[3px] top-[120px] w-[3px] h-[28px] bg-gradient-to-b from-[#a0a0a0] to-[#888] rounded-l-sm" />
        {/* Volume up */}
        <div className="absolute -left-[3px] top-[170px] w-[3px] h-[50px] bg-gradient-to-b from-[#a0a0a0] to-[#888] rounded-l-sm" />
        {/* Volume down */}
        <div className="absolute -left-[3px] top-[230px] w-[3px] h-[50px] bg-gradient-to-b from-[#a0a0a0] to-[#888] rounded-l-sm" />
        {/* Power button */}
        <div className="absolute -right-[3px] top-[190px] w-[3px] h-[70px] bg-gradient-to-b from-[#a0a0a0] to-[#888] rounded-r-sm" />

        {/* Camera control button (iPhone 16 Pro feature) */}
        <div className="absolute -right-[3px] top-[110px] w-[3px] h-[18px] bg-gradient-to-b from-[#9a9792] to-[#7a7772] rounded-r-sm" />
      </div>

      {/* Subtle reflection */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-[20px] bg-gradient-to-b from-black/20 to-transparent blur-xl rounded-full" />
    </div>
  );
};

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
    icon: <IconBook />
  },
  {
    id: 2,
    title: "The Golden Era of the 1970s",
    year: "1970s",
    excerpt: "International teams flocked to Kano for the legendary tournaments that put Nigerian polo on the world map. Champions from Argentina, England, and India graced our fields, creating unforgettable moments of sporting excellence.",
    category: "Heritage",
    icon: <IconBook />
  },
  {
    id: 3,
    title: "Champions of the Field",
    year: "1995",
    excerpt: "Our home team achieved the remarkable feat of winning three consecutive national championships, a testament to the club's commitment to developing world-class talent and maintaining the highest standards of play.",
    category: "Achievement",
    icon: <IconCamera />
  },
  {
    id: 4,
    title: "The Clubhouse Renaissance",
    year: "2020",
    excerpt: "A meticulous restoration preserved the clubhouse's colonial architecture while introducing modern luxury. Today it stands as a bridge between our storied past and vibrant future, welcoming members to an atmosphere of timeless elegance.",
    category: "Renewal",
    icon: <IconBook />
  },
  {
    id: 5,
    title: "Nurturing Tomorrow's Champions",
    year: "Present",
    excerpt: "Our youth development program has introduced over 200 young players to polo since its inception. Many have gone on to represent Nigeria internationally, carrying forward the club's legacy of excellence and sportsmanship.",
    category: "Future",
    icon: <IconCamera />
  },
  {
    id: 6,
    title: "A Global Polo Destination",
    year: "Present",
    excerpt: "Today, Kano Polo Club welcomes players and visitors from across the globe. Our reciprocal arrangements with prestigious clubs worldwide ensure our members enjoy privileged access to the world's finest polo destinations.",
    category: "Community",
    icon: <IconBook />
  }
];

const Gallery = () => {
  const reducedMotion = useReducedMotion();
  const customEase = [0.16, 1, 0.3, 1];
  const [mutedStates, setMutedStates] = useState(() => {
    const state = {};
    videoItems.forEach(video => {
      state[video.id] = true; // Start muted
    });
    return state;
  });
  
  const [playingStates, setPlayingStates] = useState(() => {
    const state = {};
    videoItems.forEach(video => {
      state[video.id] = false; // Start paused
    });
    return state;
  });
  
  const videoRefs = useRef({});
  
  const toggleMute = (id) => {
    setMutedStates(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const togglePlay = (id) => {
    setPlayingStates(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    
    const videoElement = videoRefs.current[id];
    if (videoElement) {
      if (playingStates[id]) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
    }
  };

  return (
    <motion.div>
      <main className="min-h-screen bg-brand-bg text-brand-text font-sans">
        {/* HERO SECTION */}
        <section className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[calc(100dvh-4rem)] w-full overflow-hidden flex items-end">
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

                <motion.h1
                  className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white leading-[1.1] mb-4 sm:mb-6 flex flex-wrap"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {'Gallery, Videos & Stories'.split(' ').map((word, index, arr) => (
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

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
                  className="font-sans text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-xl mb-4 sm:mb-6"
                >
                  Explore our heritage through images and stories — seven decades of polo excellence captured in moments
                </motion.p>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: customEase }}
                  className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed max-w-xl mb-6 sm:mb-8"
                >
                  From championship matches to intimate club moments, every photograph tells a story of tradition, excellence, and community
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: customEase }}
                  className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 mb-8 text-white/70"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-brand-accent">◆</span>
                    <span className="text-xs sm:text-sm">9 Curated Photo Galleries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-accent">◆</span>
                    <span className="text-xs sm:text-sm">6 Heritage Stories</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-accent">◆</span>
                    <span className="text-xs sm:text-sm">70+ Years of History</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: customEase }}
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
                      to="/membership"
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 border border-white/40 text-white font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/60 min-h-[48px] touch-manipulation w-full sm:w-auto text-center"
                    >
                      Become a Member
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FIELD MARK DIVIDER */}
        <FieldMark />

        {/* PHOTO GALLERY GRID */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="Moments Captured" title="Photo Gallery" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 sm:mt-12">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: customEase }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-brand-primary shadow-md">
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    initial={reducedMotion ? {} : { scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.8, ease: customEase }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transition-all duration-300">
                    <span className="inline-block text-xs font-sans font-medium tracking-[0.15em] uppercase text-brand-accent mb-1 sm:mb-2">
                      {image.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg md:text-xl text-white mb-1 sm:mb-2">
                      {image.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-24 transition-all duration-500 overflow-hidden">
                      {image.description}
                    </p>
                  </div>
                  
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-accent/90 flex items-center justify-center text-brand-primary">
                      <IconCamera />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FIELD MARK DIVIDER */}
        <FieldMark />

        {/* VIDEO GALLERY SECTION - iPHONE 16 PRO */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="Visual Journey" title="Video Gallery" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mt-8 sm:mt-12">
            {videoItems.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: customEase }}
                whileHover={{ scale: 1.03, y: -8 }}
                whileTap={{ scale: 0.98, y: 0 }}
                className="group"
              >
                <IPhone16Pro
                  videoId={video.id}
                  playing={playingStates[video.id]}
                  muted={mutedStates[video.id]}
                  onTogglePlay={() => togglePlay(video.id)}
                  onToggleMute={() => toggleMute(video.id)}
                  title={video.title}
                >
                  <motion.video
                    ref={(el) => { videoRefs.current[video.id] = el; }}
                    className="w-full h-full object-cover"
                    poster={video.poster}
                    muted={mutedStates[video.id]}
                    playsInline
                    preload="metadata"
                    crossOrigin="anonymous"
                    onPlay={() => setPlayingStates(prev => ({ ...prev, [video.id]: true }))}
                    onPause={() => setPlayingStates(prev => ({ ...prev, [video.id]: false }))}
                    onEnded={() => setPlayingStates(prev => ({ ...prev, [video.id]: false }))}
                  >
                    <source src={video.url} type="video/mp4" />
                  </motion.video>
                </IPhone16Pro>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FIELD MARK DIVIDER */}
        <FieldMark />

        {/* STORIES SECTION */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="Our Journey" title="Stories & Heritage" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: customEase }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <div className="relative p-6 md:p-8 bg-white border border-brand-accent/25 transition-all duration-500 hover:border-brand-accent/50 hover:shadow-lg hover:shadow-brand-accent/5 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-primary transition-all duration-300 flex-shrink-0">
                      {story.icon}
                    </div>
                    <div>
                      <span className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-brand-accent">
                        {story.category}
                      </span>
                      <span className="ml-3 text-xs text-brand-text/50">{story.year}</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-brand-text mb-3 sm:mb-4 group-hover:text-brand-primary transition-colors duration-300">
                    {story.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm md:text-base text-brand-text/70 leading-relaxed">
                    {story.excerpt}
                  </p>
                  <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FIELD MARK DIVIDER */}
        <FieldMark />

        {/* CTA SECTION */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <div className="relative bg-brand-bg border border-brand-accent/30 p-6 sm:p-8 md:p-12 lg:p-16">
              <div className="absolute top-3 left-3 right-3 h-px bg-brand-accent/20" />
              <div className="absolute bottom-3 left-3 right-3 h-px bg-brand-accent/20" />
              <div className="absolute top-3 bottom-3 left-3 w-px bg-brand-accent/20" />
              <div className="absolute top-3 bottom-3 right-3 w-px bg-brand-accent/20" />

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: 0, ease: customEase }}
                className="text-center mb-8 sm:mb-12"
              >
                <span className="block text-xs sm:text-sm font-sans font-medium tracking-[0.25em] uppercase text-brand-accent mb-2 sm:mb-3">
                  Experience It Yourself
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-brand-text leading-tight mb-3 sm:mb-4">
                  Create Your Own Story
                </h2>
                <p className="font-sans text-sm sm:text-base md:text-lg text-brand-text/70 leading-relaxed max-w-2xl mx-auto">
                  Every visit to Kano Polo Club adds a new chapter to our shared history. Whether you're a seasoned player or discovering polo for the first time, your story awaits.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
              >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98, y: 0 }}
                    className="w-full sm:w-auto flex justify-center"
                  >
                    <Link
                      to="/club"
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-brand-primary text-white font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-brand-text min-h-[48px] touch-manipulation w-full sm:w-auto text-center"
                    >
                      Explore The Club
                      <IconArrowRight />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98, y: 0 }}
                    className="w-full sm:w-auto flex justify-center"
                  >
                    <Link
                      to="/membership"
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 border border-brand-text/20 text-brand-text font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:border-brand-text/40 hover:bg-white min-h-[48px] touch-manipulation w-full sm:w-auto text-center"
                    >
                      Become a Member
                      <IconArrowRight />
                    </Link>
                  </motion.div>
                </div>
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

        {/* FOOTER SPACER */}
        <div className="h-4 sm:h-8" />
      </main>
    </motion.div>
  );
};

export default Gallery;