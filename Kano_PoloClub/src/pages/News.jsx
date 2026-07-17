import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { FieldMark, SectionHeading } from '../components/ui';
import { IconArrowRight } from '../components/icons';
import heroImage from '../assets/bg (5).jpg';
import heritageImage from '../assets/bg.jpg';

// Custom ease for premium feel
const customEase = [0.16, 1, 0.3, 1];

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="12" height="11" rx="1" stroke="currentColor" strokeWidth="1.2" />
    <path d="M2 6 L14 6" stroke="currentColor" strokeWidth="1" />
    <path d="M5 1 L5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M11 1 L11 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const ReadMoreArrow = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10 L16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11 5 L16 10 L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const newsArticles = [
  {
    id: 'partnership',
    title: 'Kano Polo Club Announces New Partnership',
    date: 'June 1, 2026',
    excerpt: 'We are pleased to announce our partnership with [Sponsor Name], which will support our youth development programs and facility improvements.',
    link: '/news/kano-polo-club-partnership',
  },
  {
    id: 'victory',
    title: "Thrilling Victory in Saturday's Match",
    date: 'May 25, 2026',
    excerpt: 'Our first team secured a decisive victory over rivals in a fast-paced chukka that showcased exceptional skill and teamwork.',
    link: '/news/thrilling-victory-saturday-match',
  },
  {
    id: 'renovation',
    title: 'Clubhouse Renovation Complete',
    date: 'May 15, 2026',
    excerpt: 'Our clubhouse has undergone a beautiful renovation, blending traditional architecture.',
    link: '/news/clubhouse-renovation-complete',
  },
];

const News = () => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div>
      <main className="min-h-screen bg-brand-bg text-brand-text font-sans">
        {/* ═════════════════════════════════════════
            HERO SECTION
            svh instead of vh — stays fixed as the mobile browser's
            address bar shows/hides while scrolling.
            ═════════════════════════════════════════════════ */}
        <section className="relative h-[85svh] min-h-[520px] w-full overflow-hidden">
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
          <div className="relative z-10 flex flex-col justify-end h-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-24 max-w-7xl mx-auto">
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
                  News & Journal
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
                  className="font-sans text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-xl mb-4 sm:mb-6"
                >
                  Latest updates, match reports, and club announcements
                </motion.p>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: customEase }}
                  className="font-sans text-sm sm:text-base text-white/70 leading-relaxed max-w-xl mb-6 sm:mb-8"
                >
                  Stay informed with our comprehensive coverage of tournaments, player profiles, and club developments
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: customEase }}
                  className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8 text-white/70"
                >
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: 0, ease: customEase }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2"
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
                    className="flex items-center gap-2"
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
                    className="flex items-center gap-2"
                  >
                    <span className="text-brand-accent">◆</span>
                    <span className="text-sm">Player Features</span>
                  </motion.div>
                </motion.div>

                {/* Buttons — full width on mobile, matching Home.jsx CTA pattern */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.75, ease: customEase }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                  <motion.div
                    className="w-full sm:w-auto"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98, y: 0 }}
                  >
                    <Link
                      to="/about"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-brand-accent text-brand-primary font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white hover:text-brand-primary min-h-[48px] touch-manipulation"
                    >
                      Learn About Us
                      <IconArrowRight />
                    </Link>
                  </motion.div>
                  <motion.div
                    className="w-full sm:w-auto"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98, y: 0 }}
                  >
                    <Link
                      to="/club"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 border border-white/40 text-white font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/60 min-h-[48px] touch-manipulation"
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
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="From the Club" title="Latest News" />
          </motion.div>

          <div className="space-y-6 sm:space-y-8 mt-8 sm:mt-12">
            {newsArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: customEase }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group"
              >
                {/* Stacks on mobile, side-by-side from sm: up — a fixed
                    96px thumbnail next to text on a 320px phone was too
                    cramped before. */}
                <div className="relative p-4 sm:p-6 bg-white border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <motion.img
                      src={heroImage}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-40 sm:w-24 sm:h-24 flex-shrink-0 object-cover"
                      initial={reducedMotion ? {} : { scale: 1.05 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.8, ease: customEase }}
                    />
                    <div>
                      <h3 className="font-serif text-lg text-brand-primary mb-2">
                        {article.title}
                      </h3>
                      <p className="font-sans text-sm text-brand-text/60 mb-2 flex items-center gap-2">
                        <CalendarIcon />
                        {article.date}
                      </p>
                      <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <Link
                        to={article.link}
                        className="mt-2 inline-flex items-center gap-1 text-brand-accent font-sans text-xs font-medium tracking-wide uppercase hover:underline touch-manipulation"
                      >
                        Read More
                        <ReadMoreArrow />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════
            FIELD MARK DIVIDER
            ════════════════════════════════════════════════ */}
        <FieldMark />

        {/* ════════════════════════════ MATCH REPORTS & ANALYSIS
            ═════════════════════════════════════ */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="In-Depth Coverage" title="Match Reports & Analysis" />
          </motion.div>

          <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-12">
            {/* Match Report 1 */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: customEase }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group"
            >
              <div className="relative p-4 sm:p-6 bg-brand-bg/50 border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5">
                <h3 className="font-serif text-lg sm:text-xl text-brand-primary mb-2">
                  Match Report: KPC vs. Rivals FC
                </h3>
                <p className="font-sans text-sm text-brand-text/60 mb-2 flex items-center gap-2">
                  <CalendarIcon />
                  May 20, 2026
                </p>
                <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                  In a highly anticipated match, Kano Polo Club faced off against our longtime rivals. The game was characterized by...
                </p>
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
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group"
            >
              <div className="relative p-4 sm:p-6 bg-brand-bg/50 border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5">
                <h3 className="font-serif text-lg sm:text-xl text-brand-primary mb-2">
                  Tactical Analysis: The Backhand Shot
                </h3>
                <p className="font-sans text-sm text-brand-text/60 mb-2 flex items-center gap-2">
                  <CalendarIcon />
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
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <SectionHeading eyebrow="Official Communications" title="Club Announcements" />
          </motion.div>

          <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-12">
            {/* Announcement 1 */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: customEase }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group"
            >
              <div className="relative p-4 sm:p-6 bg-white border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5">
                <h3 className="font-serif text-lg sm:text-xl text-brand-primary mb-2">
                  Important: Updated Club Hours
                </h3>
                <p className="font-sans text-sm text-brand-text/60 mb-2 flex items-center gap-2">
                  <CalendarIcon />
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
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group"
            >
              <div className="relative p-4 sm:p-6 bg-white border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5">
                <h3 className="font-serif text-lg sm:text-xl text-brand-primary mb-2">
                  Welcome New Members
                </h3>
                <p className="font-sans text-sm text-brand-text/60 mb-2 flex items-center gap-2">
                  <CalendarIcon />
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
        <div className="h-6 sm:h-8" />
      </main>
    </motion.div>
  );
};

export default News;