import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { FieldMark, SectionHeading } from '../components/ui';
import { IconCalendar, IconUsers, IconTrophy, IconArrowRight, IconTrendingUp, IconGlobe, IconHeart, IconShield } from '../components/icons';
import heroImage from '../assets/bg (2).jpg';
import trophyImage1 from '../assets/bg (3).jpg';
import trophyImage2 from '../assets/bg (4).jpg';
import trophyImage3 from '../assets/bg (5).jpg';
import trophyImage4 from '../assets/bg (6).jpg';
import trophyImage5 from '../assets/polo1.jpg';
import legacyImage1 from '../assets/bg.jpg';
import legacyImage2 from '../assets/bg (7).jpg';
import legacyImage3 from '../assets/bg (8).jpg';

const trophies = [
  {
    name: 'Emir of Kano Cup',
    description: "The tournament's headline trophy, contested by the biggest high-goal teams and widely regarded as one of the most coveted prizes in Nigerian polo.",
    image: trophyImage1,
    delay: 0,
  },
  {
    name: 'Dantata Cup',
    description: 'Named in honor of the influential Dantata family, longtime supporters of polo in Nigeria.',
    image: trophyImage2,
    delay: 0.1,
  },
  {
    name: 'Dangote Cup',
    description: "Honoring the Dangote legacy of sportsmanship and excellence in Nigerian polo.",
    image: trophyImage3,
    delay: 0.2,
  },
  {
    name: 'MRS Cup',
    description: 'Sponsored by the Nigerian Oil Company, recognizing excellence in the sport.',
    image: trophyImage4,
    delay: 0.3,
  },
  {
    name: 'Usman Dantata Cup',
    description: 'Honoring Usman Dantata, a pivotal figure in Nigerian polo history.',
    image: trophyImage5,
    delay: 0.4,
  },
  {
    name: 'Audu Lukat Cup',
    description: 'Named after Audu Lukat, contributor to polo development in Northern Nigeria.',
    image: trophyImage1,
    delay: 0.5,
  },
  {
    name: 'Muhammadu Sanusi Cup',
    description: 'Honoring Emir Muhammadu Sanusi II, supporter of polo traditions.',
    image: trophyImage2,
    delay: 0.6,
  },
  {
    name: 'Murtala Mohammed Cup',
    description: 'Named after former Nigerian Head of State, Murtala Muhammed.',
    image: trophyImage3,
    delay: 0.7,
  },
  {
    name: 'Ado Bayero Cup',
    description: 'Played in honour of a former Emir of Kano, Ado Bayero.',
    image: trophyImage4,
    delay: 0.8,
  },
];

const legacyHighlights = [
  {
    icon: <IconUsers className="h-8 w-8 text-brand-accent" />,
    title: 'Record Participation',
    description: 'Recent tournaments have featured record entries of 40+ teams, showcasing the growing popularity and prestige of the event.',
    image: legacyImage1,
    delay: 0,
  },
  {
    icon: <IconTrendingUp className="h-8 w-8 text-brand-accent" />,
    title: 'Growing Spectatorship',
    description: 'Expanded spectator turnout has transformed the tournament into a major social and sporting event in Northern Nigeria.',
    image: legacyImage2,
    delay: 0.1,
  },
  {
    icon: <IconHeart className="h-8 w-8 text-brand-accent" />,
    title: 'Inclusive Evolution',
    description: 'The introduction of an all-female polo exhibition match reflects the tournament\'s commitment to inclusivity and the evolution of the sport.',
    image: legacyImage3,
    delay: 0.2,
  },
  {
    icon: <IconGlobe className="h-8 w-8 text-brand-accent" />,
    title: 'International Recognition',
    description: 'Drawing players from Argentina, Europe, and South Africa, the tournament has achieved true international status.',
    image: legacyImage1,
    delay: 0.3,
  },
];

const Tournament = () => {
  const reducedMotion = useReducedMotion();
  const customEase = [0.16, 1, 0.3, 1];

  return (
    <motion.div>
      <main className="min-h-screen bg-brand-bg text-brand-text font-sans">
        {/* ═════════════════════════════════════════
            HERO SECTION
            svh instead of vh — stays fixed as the mobile browser's
            address bar shows/hides while scrolling.
            ═════════════════════════════════════════════════════ */}
        <section className="relative h-[85svh] min-h-[520px] w-full overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <motion.img
              src={heroImage}
              alt="Kano International Polo Tournament"
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
          <div className="relative z-10 flex flex-col justify-end h-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-24 max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: customEase }}
            >
              <div className="max-w-3xl">
                {/* Est. 1930s */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: 0, ease: customEase }}
                >
                  <span className="inline-block text-xs sm:text-sm font-sans font-medium tracking-[0.3em] uppercase text-brand-accent mb-3 sm:mb-4">
                    Est. 1930s — Kano, Nigeria
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
                  The Kano International Polo Tournament
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
                  className="font-sans text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-xl mb-6 sm:mb-8"
                >
                  Inaugurated in the early 1930s, the Kano International Polo Tournament has grown from a regional gathering into one of the most prestigious fixtures on Nigeria's polo calendar — spoken of in the same breath as the great tournaments of Lagos, Kaduna, and Katsina.
                </motion.p>

                {/* Buttons — full width on mobile */}
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
                      to="/gallery"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-brand-accent text-brand-primary font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white hover:text-brand-primary min-h-[48px] touch-manipulation"
                    >
                      View Gallery
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
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 border border-white/40 text-white font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/60 min-h-[48px] touch-manipulation"
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            FIELD MARK DIVIDER
            ════════════════════════════════════════════════════ */}
        <FieldMark />

        {/* ════════════════════════════════════════
            TOURNAMENT OVERVIEW
            Text constrained to max-w-3xl — unconstrained paragraph
            text at max-w-7xl produced unreadably long line lengths
            on desktop. Dead order-2/order-1 classes removed; they
            only do anything inside a grid/flex with a sibling to
            reorder against, and this is a single text block.
            ═════════════════════════════════════════ */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="Prestigious Tournament" title="Tournament Overview" />
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="font-sans text-base sm:text-lg text-brand-text/80 leading-relaxed mb-5 sm:mb-6">
              Held annually and typically spanning two weeks, the tournament transforms Kano into a gathering point for royalty, business leaders, diplomats, and thousands of polo enthusiasts. In recent years it has drawn international players from Argentina, Europe, and South Africa to compete alongside Nigeria's finest, cementing its status as a true international fiesta of the sport.
            </p>
            <p className="font-sans text-base sm:text-lg text-brand-text/80 leading-relaxed">
              Each edition builds on decades of tradition. Recent tournaments have featured record entries of 40+ teams, expanded spectator turnout, and notable milestones — including the introduction of an all-female polo exhibition match, reflecting the sport's evolving inclusivity.
            </p>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════
            FIELD MARK DIVIDER
            ═════════════════════════════════════════════════════ */}
        <FieldMark />

        {/* ════════════════════════════════════════
            FEATURED TROPHIES
            ═════════════════════════════════════════════════════ */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="Prestigious Awards" title="Featured Trophies" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            {trophies.map((trophy) => (
              <motion.div
                key={trophy.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: trophy.delay, ease: customEase }}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-xl hover:shadow-brand-accent/10"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <motion.img
                    src={trophy.image}
                    alt={`${trophy.name} trophy`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    initial={reducedMotion ? {} : { scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.8, ease: customEase }}
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 flex items-center justify-center bg-brand-accent/10">
                      <IconTrophy className="h-5 w-5 text-brand-accent" />
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl text-brand-text">
                      {trophy.name}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                    {trophy.description}
                  </p>
                </div>
                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════
            FIELD MARK DIVIDER
            ════════════════════════════════════════════════════ */}
        <FieldMark />

        {/* ════════════════════════════════════════
            A GROWING LEGACY
            ════════════════════════════════════════ */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="Tournament Legacy" title="A Growing Legacy" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
            {legacyHighlights.map((item) => (
              <motion.div
                key={item.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: item.delay, ease: customEase }}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-xl hover:shadow-brand-accent/10"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    initial={reducedMotion ? {} : { scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.8, ease: customEase }}
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center justify-center h-12 w-12 bg-brand-accent/10">
                    {item.icon}
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-serif text-lg text-brand-text mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════
            FOOTER SPACER
            ════════════════════════════════════════ */}
        <div className="h-6 sm:h-8" />
      </main>
    </motion.div>
  );
};

export default Tournament;