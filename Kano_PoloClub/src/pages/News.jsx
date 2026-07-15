import { Link } from 'react-router-dom';
import {
  PageWrapper,
  FadeUpSection,
  FadeUpItem,
  SlideLeftItem,
  SlideRightItem,
  ScaleInItem,
} from '../components/animations';
import heroImage from '../assets/bg (5).jpg';
import heritageImage from '../assets/bg.jpg';

/* ──────────────────────────────────────────────
   SVG ICONS (Inline, self-contained)
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

const IconCalendar = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="12" height="11" rx="1" stroke="currentColor" strokeWidth="1.2" />
    <path d="M2 6 L14 6" stroke="currentColor" strokeWidth="1" />
    <path d="M5 1 L5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M11 1 L11 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const IconArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10 L16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11 5 L16 10 L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconNewspaper = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 8h14" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconChart = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3v18h18V3H3z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 7l9 4 9-4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 11l9 3 9-3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 15l9 2 9-2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconMegaphone = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.09 9.09c1.41-1.41 3.7-1.41 5.12 0l3.29 3.29c1.41 1.41 1.41 3.7 0 5.12l-2.53 2.53a6.5 6.5 0 0 1-9.19 0l-.91-.91a6.5 6.5 0 0 1 0-9.19zm6.28 3.41l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M5.41 18.59c1.1-1.1 2.89-1.1 4 0l3.29 3.29c1.1 1.1 1.1 2.89 0 4l-2.53 2.53a4 4 0 0 1-5.66 0l-.91-.91a4 4 0 0 1 0-5.66z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

/* ──────────────────────────────────────────────
   SUB-LAYOUT COMPONENTS
   ────────────────────────────────────────────── */

const FieldMark = () => (
  <div className="flex items-center justify-center gap-4 w-full py-8">
    <div className="h-px flex-1 max-w-[120px] bg-brand-accent/40" />
    <div className="text-brand-accent/60">
      <IconCrosshair />
    </div>
    <div className="h-px flex-1 max-w-[120px] bg-brand-accent/40" />
  </div>
);

const SectionHeading = ({ eyebrow, title }) => (
  <div className="text-center mb-12 md:mb-16">
    <span className="block text-xs md:text-sm font-sans font-medium tracking-[0.25em] uppercase text-brand-accent mb-3">
      {eyebrow}
    </span>
    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-brand-text leading-tight">
      {title}
    </h2>
    <div className="mt-5 flex justify-center">
      <div className="w-16 h-px bg-brand-accent/60" />
    </div>
  </div>
);

/* ──────────────────────────────────────────────
   MAIN NEWS COMPONENT
   ────────────────────────────────────────────── */

const News = () => {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-brand-bg text-brand-text font-sans">
        {/* ═══════════════════════════════════════════════
            HERO SECTION
            ═════════════════════════════════════════════════════════ */}
        <section className="relative h-[85vh] w-full overflow-hidden">
{/* Background image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Kano Polo Club news and events"
              className="w-full h-full object-cover"
            />
            {/* Rich gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/70 to-brand-primary/15" />
          </div>

          {/* Hero content */}
          <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24 max-w-7xl mx-auto">
            <FadeUpSection className="max-w-3xl">
              <FadeUpItem delay={0}>
                <span className="inline-block text-xs md:text-sm font-sans font-medium tracking-[0.3em] uppercase text-brand-accent mb-4">
                  Est. 1950 — Northern Nigeria
                </span>
              </FadeUpItem>
              <FadeUpItem delay={0.15}>
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.1] mb-6">
                  News & Journal
                </h1>
              </FadeUpItem>
              <FadeUpItem delay={0.3}>
                <p className="font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-xl mb-6">
                  Latest updates, match reports, and club announcements
                </p>
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-xl mb-8">
                  Stay informed with our comprehensive coverage of tournaments, player profiles, and club developments
                </p>
                <div className="flex flex-wrap gap-6 mb-8 text-white/70">
                  <div className="flex items-center gap-2">
                    <span className="text-brand-accent">◆</span>
                    <span className="text-sm">Weekly Match Reports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-accent">◆</span>
                    <span className="text-sm">Club Announcements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-accent">◆</span>
                    <span className="text-sm">Player Features</span>
                  </div>
                </div>
              </FadeUpItem>
              <FadeUpItem delay={0.45}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-7 py-3 bg-brand-accent text-brand-primary font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white hover:text-brand-primary"
                  >
                    Learn About Us
                    <IconArrowRight />
                  </Link>
                  <Link
                    to="/club"
                    className="inline-flex items-center gap-2 px-7 py-3 border border-white/40 text-white font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/60"
                  >
                    Explore The Club
                  </Link>
                </div>
              </FadeUpItem>
            </FadeUpSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════ FIELD MARK DIVIDER
            ═════════════════════════════════════════════ */}
        <FieldMark />

        {/* ═══════════════════════════════════════ LATEST NEWS
            ═══════════════════════════════════════ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <FadeUpSection>
            <FadeUpItem>
              <SectionHeading eyebrow="From the Club" title="Latest News" />
            </FadeUpItem>

            <div className="space-y-8">
{/* News Article 1 */}
               <FadeUpItem delay={0}>
                 <div className="group relative p-6 bg-white border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5">
                   <div className="flex items-start space-x-4">
                     <img
                       src={heroImage}
                       alt="Partnership announcement"
                       className="w-24 h-24 object-cover rounded-md"
                     />
                     <div>
                       <h3 className="font-serif text-lg text-deep-crimson mb-2">
                         Kano Polo Club Announces New Partnership
                       </h3>
                       <p className="font-sans text-sm text-brand-text/60 mb-2">
                         <IconCalendar className="h-4 w-4 mr-2 text-brand-accent" /> June 1, 2026
                       </p>
                       <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                         We are pleased to announce our partnership with [Sponsor Name], which will support our youth development programs and facility improvements.
                       </p>
                       <Link
                         to="/news/kano-polo-club-partnership"
                         className="mt-2 inline-flex items-center gap-1 text-brand-accent font-sans text-xs font-medium tracking-wide uppercase hover:underline"
                       >
                         Read More
                         <IconArrowRight className="h-4 w-4" />
                       </Link>
                     </div>
                   </div>
                 </div>
               </FadeUpItem>

{/* News Article 2 */}
               <FadeUpItem delay={0.1}>
                 <div className="group relative p-6 bg-white border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5">
                  <div className="flex items-start space-x-4">
<img
                       src={heroImage}
                       alt="Match victory"
                       className="w-24 h-24 object-cover rounded-md"
                     />
                    <div>
                      <h3 className="font-serif text-lg text-deep-crimson mb-2">
                        Thrilling Victory in Saturday's Match
                      </h3>
                      <p className="font-sans text-sm text-brand-text/60 mb-2">
                        <IconCalendar className="h-4 w-4 mr-2 text-brand-accent" /> May 25, 2026
                      </p>
                      <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                        Our first team secured a decisive victory over rivals in a fast-paced chukka that showcased exceptional skill and teamwork.
                      </p>
                      <Link
                        to="/news/thrilling-victory-saturday-match"
                        className="mt-2 inline-flex items-center gap-1 text-brand-accent font-sans text-xs font-medium tracking-wide uppercase hover:underline"
                      >
                        Read More
                        <IconArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeUpItem>

{/* News Article 3 */}
               <FadeUpItem delay={0.2}>
                 <div className="group relative p-6 bg-white border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5">
<div className="flex items-start space-x-4">
                     <img
                       src={heroImage}
                       alt="Clubhouse renovation"
                       className="w-24 h-24 object-cover rounded-md"
                     />
                     <div>
                      <h3 className="font-serif text-lg text-deep-crimson mb-2">
                        Clubhouse Renovation Complete
                      </h3>
                      <p className="font-sans text-sm text-brand-text/60 mb-2">
                        <IconCalendar className="h-4 w-4 mr-2 text-brand-accent" /> May 15, 2026
                      </p>
                      <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                        Our clubhouse has undergone a beautiful renovation, blending traditional architecture.
                      </p>
                      <Link
                        to="/news/clubhouse-renovation-complete"
                        className="mt-2 inline-flex items-center gap-1 text-brand-accent font-sans text-xs font-medium tracking-wide uppercase hover:underline"
                      >
                        Read More
                        <IconArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeUpItem>
            </div>
          </FadeUpSection>
        </section>

        {/* ══════════════════════════════════════ FIELD MARK DIVIDER
            ════════════════════════════════════════ */}
        <FieldMark />

        {/* ════════════════════════════ MATCH REPORTS & ANALYSIS
            ════════════════════════════════════ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <FadeUpSection>
            <FadeUpItem>
              <SectionHeading eyebrow="In-Depth Coverage" title="Match Reports & Analysis" />
            </FadeUpItem>

            <div className="space-y-6">
{/* Match Report 1 */}
               <FadeUpItem delay={0}>
                 <div className="group relative p-6 bg-brand-bg/50 border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5">
                  <h3 className="font-serif text-xl text-deep-crimson mb-2">
                    Match Report: KPC vs. Rivals FC
                  </h3>
                  <p className="font-sans text-sm text-brand-text/60 mb-2">
                    <IconCalendar className="h-4 w-4 mr-2 text-brand-accent" /> May 20, 2026
                  </p>
                  <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                    In a highly anticipated match, Kano Polo Club faced off against our longtime rivals. The game was characterized by...
                  </p>
                  {/* Subtle corner accent */}
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                </div>
              </FadeUpItem>

{/* Analysis Article */}
               <FadeUpItem delay={0.15}>
                 <div className="group relative p-6 bg-brand-bg/50 border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5">
                  <h3 className="font-serif text-xl text-deep-crimson mb-2">
                    Tactical Analysis: The Backhand Shot
                  </h3>
                  <p className="font-sans text-sm text-brand-text/60 mb-2">
                    <IconCalendar className="h-4 w-4 mr-2 text-brand-accent" /> May 10, 2026
                  </p>
                  <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                    One of the most effective shots in polo, the backhand requires precision and timing. We break down the mechanics...
                  </p>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                </div>
              </FadeUpItem>
            </div>
          </FadeUpSection>
        </section>

        {/* ════════════════════════════ FIELD MARK DIVIDER
            ════════════════════════════ */}
        <FieldMark />

        {/* ═════════════════ CLUB ANNOUNCEMENTS
            ════════════════════════════ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <FadeUpSection>
            <FadeUpItem>
              <SectionHeading eyebrow="Official Communications" title="Club Announcements" />
            </FadeUpItem>

            <div className="space-y-6">
{/* Announcement 1 */}
               <FadeUpItem delay={0}>
                 <div className="group relative p-6 bg-white border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5">
                  <h3 className="font-serif text-xl text-deep-crimson mb-2">
                    Important: Updated Club Hours
                  </h3>
                  <p className="font-sans text-sm text-brand-text/60 mb-2">
                    <IconCalendar className="h-4 w-4 mr-2 text-brand-accent" /> Effective June 1, 2026
                  </p>
                  <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                    Please note that our club hours have been updated to better serve our members. The new hours are...
                  </p>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-accent/0 group-hover:border-brand-accent/40 transition-all duration-500" />
                </div>
              </FadeUpItem>

{/* Announcement 2 */}
               <FadeUpItem delay={0.15}>
                 <div className="group relative p-6 bg-white border border-brand-accent/25 overflow-hidden transition-all duration-500 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5">
                  <h3 className="font-serif text-xl text-deep-crimson mb-2">
                    Welcome New Members
                  </h3>
                  <p className="font-sans text-sm text-brand-text/60 mb-2">
                    <IconCalendar className="h-4 w-4 mr-2 text-brand-accent" /> May 15, 2026
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
              </FadeUpItem>
            </div>
          </FadeUpSection>
        </section>

        {/* ═══════════════════════ FOOTER SPACER
            ══════════════════════════ */}
        <div className="h-8" />
      </main>
    </PageWrapper>
  );
};

export default News;