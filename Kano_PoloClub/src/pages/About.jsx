import { Link } from 'react-router-dom';
import {
  PageWrapper,
  FadeUpSection,
  FadeUpItem,
  SlideLeftItem,
  SlideRightItem,
  ScaleInItem,
} from '../components/animations';
import heroImage from '../assets/bg (2).jpg';
import heritageImage from '../assets/bg.jpg';
import { FieldMark, SectionHeading } from '../components/ui';
import { IconExcellence, IconSportsmanship, IconCommunity, IconArrowRight } from '../components/icons';

/* ──────────────────────────────────────────────
   MAIN ABOUT COMPONENT
   ────────────────────────────────────────────── */

const About = () => {
  return (
    <PageWrapper>
    <main className="min-h-screen bg-brand-bg text-brand-text font-sans">
      {/* ═══════════════════════════════════════════
          HERO SECTION
          ═════════════════════════════════════════════ */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Kano Polo Club heritage grounds"
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
                Our Story
              </h1>
            </FadeUpItem>
            <FadeUpItem delay={0.3}>
              <p className="font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-xl mb-4">
                Seven decades of polo tradition, forged in the heart of Northern Nigeria
              </p>
              <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-xl mb-8">
                From a gathering of passionate horsemen in 1950 to one of West Africa's most distinguished sporting institutions — discover the legacy, values, and vision that define the Kano Polo Club.
              </p>
            </FadeUpItem>
            <FadeUpItem delay={0.45}>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/club"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-brand-accent text-brand-primary font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white hover:text-brand-primary"
                >
                  Explore The Club
                  <IconArrowRight />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 border border-white/40 text-white font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/60"
                >
                  Contact Us
                </Link>
              </div>
            </FadeUpItem>
          </FadeUpSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FIELD MARK DIVIDER
          ═════════════════════════════════════════════ */}
      <FieldMark />

      {/* ═══════════════════════════════════════════
          ABOUT / HERITAGE BLOCK
          ═════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column — informational layout */}
          <SlideLeftItem className="order-2 lg:order-1">
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
            <Link
              to="/club"
              className="inline-flex items-center gap-2 text-brand-primary font-sans text-sm font-medium tracking-wide uppercase border-b border-brand-primary/30 pb-1 transition-all duration-300 hover:border-brand-primary hover:gap-3"
            >
              Explore The Club
              <IconArrowRight />
            </Link>
          </SlideLeftItem>

          {/* Right column — landscape graphic with accent border */}
          <SlideRightItem className="order-1 lg:order-2 relative">
            <div className="relative">
              <img
                src={heritageImage}
                alt="Historical polo match"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              {/* Antique brass accent structural under-border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-accent/40 -z-10" />
            </div>
            {/* Decorative year badge */}
            <div className="absolute -bottom-6 -left-6 md:-left-10 bg-brand-primary text-white px-5 py-3 font-serif text-xl md:text-2xl tracking-wide">
              1950
            </div>
          </SlideRightItem>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FIELD MARK DIVIDER
          ═════════════════════════════════════════════ */}
      <FieldMark />

      {/* ══════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
        <FadeUpSection>
          <FadeUpItem>
            <SectionHeading eyebrow="Our Guiding Principles" title="Our Values" />
          </FadeUpItem>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Excellence */}
            <ScaleInItem delay={0}>
              <div className="flex flex-col items-center p-6 bg-brand-bg/50 rounded-lg">
                <div className="mb-4">
                  <IconExcellence className="h-8 w-8 text-brand-accent" />
                </div>
                <h3 className="font-serif text-lg text-brand-text mb-2">
                  Excellence
                </h3>
                <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                  We strive for excellence in every aspect of our club, from the condition of our fields to the quality of our events.
                </p>
              </div>
            </ScaleInItem>

            {/* Sportsmanship */}
            <ScaleInItem delay={0.15}>
              <div className="flex flex-col items-center p-6 bg-brand-bg/50 rounded-lg">
                <div className="mb-4">
                  <IconSportsmanship className="h-8 w-8 text-brand-accent" />
                </div>
                <h3 className="font-serif text-lg text-brand-text mb-2">
                  Sportsmanship
                </h3>
                <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                  We uphold the highest standards of fair play, respect, and integrity both on and off the field.
                </p>
              </div>
            </ScaleInItem>

            {/* Community */}
            <ScaleInItem delay={0.3}>
              <div className="flex flex-col items-center p-6 bg-brand-bg/50 rounded-lg">
                <div className="mb-4">
                  <IconCommunity className="h-8 w-8 text-brand-accent" />
                </div>
                <h3 className="font-serif text-lg text-brand-text mb-2">
                  Community
                </h3>
                <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                  We foster a welcoming and inclusive community where members, players, and guests feel like family.
                </p>
              </div>
            </ScaleInItem>
          </div>
        </FadeUpSection>
      </section>

      {/* ══════════════════════════════════════════
          FIELD MARK DIVIDER
          ═════════════════════════════════════════════ */}
      <FieldMark />

      {/* ═══════════════════════════════════════════
          ACHIEVEMENTS SECTION
          ═════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
        <FadeUpSection>
          <FadeUpItem>
            <SectionHeading eyebrow="Our Legacy" title="Our Achievements" />
          </FadeUpItem>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Achievements list */}
            <div className="space-y-6">
              <FadeUpItem delay={0}>
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
              </FadeUpItem>
              <FadeUpItem delay={0.1}>
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
              </FadeUpItem>
              <FadeUpItem delay={0.2}>
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
              </FadeUpItem>
              <FadeUpItem delay={0.3}>
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
              </FadeUpItem>
            </div>

            {/* Image */}
            <SlideRightItem>
              <div className="flex items-center justify-center">
                <img
                  src={heritageImage}
                  alt="Polo trophy"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </SlideRightItem>
          </div>
        </FadeUpSection>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER SPACER
          ═════════════════════════════════════════════ */}
      <div className="h-8" />
    </main>
    </PageWrapper>
  );
};

export default About;