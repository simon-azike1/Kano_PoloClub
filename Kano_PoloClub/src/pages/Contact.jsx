import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PageWrapper,
  FadeUpSection,
  FadeUpItem,
  SlideLeftItem,
  SlideRightItem,
  ScaleInItem,
} from '../components/animations';
import { SocialLinks } from '../components/SocialIcons';
import heroImage from '../assets/bg (6).jpg';
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

const IconArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10 L16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11 5 L16 10 L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPhone = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63a2 2 0 0 1 2-2.18V6.28a2 2 0 0 1 2.18-2A19.79 19.79 0 0 1 6.3 2.07a19.5 19.5 0 0 1 6 6 19.79 19.79 0 0 1 8.63 3.07 2 2 0 0 1 2 2.18v3a2 2 0 0 1-2.18 2 6.11 6.11 0 0 0-.79-1.81c-.34-.76-.52-1.54-.52-2.38a4 4 0 0 1 .52-2.38c.34-.76.52-1.54.52-2.38a2 2 0 0 1 2-2.18V2a2 2 0 0 1 2.18-2 4 4 0 0 1 3.76 2.62l.32.16a2 2 0 0 1 2 2.18v2.66a2 2 0 0 1-2.18 2A4 4 0 0 1 12 4a4 4 0 0 1-.52 2.38z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const IconEmail = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconLocation = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 16.5v4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconClock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 7L10 12L15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group bg-white border border-brand-accent/25 overflow-hidden transition-all duration-300 hover:border-brand-accent/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="font-serif text-lg text-brand-text pr-4 group-hover:text-brand-primary transition-colors duration-300">
          {question}
        </h3>
        <IconChevronDown className={`flex-shrink-0 h-5 w-5 text-brand-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className="overflow-hidden transition-all duration-300 ease-out">
        <div className={`px-6 pb-5 ${isOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}>
          <p className="font-sans text-sm text-brand-text/70 leading-relaxed border-t border-brand-accent/10 pt-4">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────
   FAQ DATA
   ────────────────────────────────────────────── */

const faqs = [
  {
    id: 1,
    question: 'What are the club\'s operating hours?',
    answer: 'Kano Polo Club is open daily from 8:00 AM to 6:00 PM. The clubhouse dining and bar facilities may have extended hours during tournaments and special events. Please check our events calendar for specific timing on event days.'
  },
  {
    id: 2,
    question: 'How can I become a member of Kano Polo Club?',
    answer: 'Membership applications are reviewed by our membership committee. You can start the process by visiting our Membership page or contacting the membership office directly at info@kanopoloclub.ng. We offer various membership categories including Full Playing, Social, Junior, and Corporate memberships.'
  },
  {
    id: 3,
    question: 'Can non-members visit the club?',
    answer: 'Non-members are welcome to visit during public tournaments and events. For private visits, you must be accompanied by a member as a guest. Day passes may be available for certain facilities - please contact us in advance to arrange your visit.'
  },
  {
    id: 4,
    question: 'Do you offer polo lessons for beginners?',
    answer: 'Yes! Our Training Academy offers comprehensive programs for all skill levels, from complete beginners to advanced players. We have certified polo professionals who provide both group clinics and private instruction. No prior riding experience is necessary for our introductory programs.'
  },
  {
    id: 5,
    question: 'Can I host a private event at the club?',
    answer: 'Absolutely. Our clubhouse and grounds are available for private functions including weddings, corporate events, and celebrations. We offer a range of venues from the main dining hall to the terrace overlooking the polo fields. Contact our events team for availability and packages.'
  },
  {
    id: 6,
    question: 'Is there parking available at the club?',
    answer: 'Yes, we have ample on-site parking for members and guests. Designated parking areas are available near the clubhouse and polo fields. During major tournaments, additional parking arrangements may be in place with shuttle service.'
  },
  {
    id: 7,
    question: 'What should I wear when visiting the club?',
    answer: 'Smart casual attire is appropriate for general visits. For dining in the clubhouse, we request collared shirts for gentlemen and equivalent attire for ladies. During tournaments, traditional polo attire is encouraged but not required for spectators. Sportswear is not permitted in the main dining areas.'
  },
  {
    id: 8,
    question: 'Are children welcome at the club?',
    answer: 'Yes, Kano Polo Club is a family-friendly establishment. We have a dedicated junior polo program and children are welcome in most areas of the clubhouse. However, for safety reasons, children must be supervised at all times near the polo fields and stables.'
  }
];

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
   MAIN CONTACT COMPONENT
   ────────────────────────────────────────────── */

const Contact = () => {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-brand-bg text-brand-text font-sans">
        {/* ══════════════════════════════════════════
            HERO SECTION
            ════════════════════════════════════════════ */}
        <section className="relative h-[85vh] w-full overflow-hidden">
{/* Background image placeholder */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Kano Polo Club grounds at sunset"
              className="w-full h-full object-cover"
            />
            {/* Darker gradient overlay for readability */}
             <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/80 to-brand-primary/20" />
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
                  Contact Us
                </h1>
              </FadeUpItem>
              <FadeUpItem delay={0.3}>
                <p className="font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-xl mb-6">
                  Whether you're interested in membership, have questions about our facilities, or want to book a visit, our team is here to help.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm mb-8">
                  <div className="flex items-center gap-2">
                    <IconPhone className="h-5 w-5 text-brand-accent" />
                    <span>+234 XXX XXX XXX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconEmail className="h-5 w-5 text-brand-accent" />
                    <span>info@kanopoloclub.ng</span>
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

        {/* ═════════════════════════════════════════
            FIELD MARK DIVIDER
            ════════════════════════════════════════════ */}
        <FieldMark />

        {/* ═════════════════════════════════════════
            CONTACT INFORMATION
            ════════════════════════════════════════════ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <FadeUpSection>
            <FadeUpItem>
              <SectionHeading eyebrow="Get in Touch" title="Contact Information" />
            </FadeUpItem>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <FadeUpItem delay={0}>
                <div className="space-y-6">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-text/60 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="shadow-sm w-full px-4 py-3 border border-brand-accent/25 focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent/75 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-text/60 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="shadow-sm w-full px-4 py-3 border border-brand-accent/25 focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent/75 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-brand-text/60 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="shadow-sm w-full px-4 py-3 border border-brand-accent/25 focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent/75 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-brand-text/60 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        className="shadow-sm w-full px-4 py-3 border border-brand-accent/25 focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent/75 transition-all duration-300 resize-none"
                      />
                    </div>
                    <div className="flex items-center">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-brand-text"
                      >
                        Send Message
                        <IconArrowRight />
                      </button>
                    </div>
                  </form>
                </div>
              </FadeUpItem>

              {/* Contact Info */}
              <FadeUpItem delay={0.15}>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 flex items-center justify-center bg-brand-accent/10 rounded-lg">
                        <IconLocation className="h-6 w-6 text-brand-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-brand-text mb-2">
                        Location
                      </h3>
                      <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                        Kano Polo Club, Kano State, Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 flex items-center justify-center bg-brand-accent/10 rounded-lg">
                        <IconPhone className="h-6 w-6 text-brand-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-brand-text mb-2">
                        Phone
                      </h3>
                      <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                        +234 XXX XXX XXX
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 flex items-center justify-center bg-brand-accent/10 rounded-lg">
                        <IconEmail className="h-6 w-6 text-brand-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-brand-text mb-2">
                        Email
                      </h3>
                      <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                        info@kanopoloclub.ng
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 flex items-center justify-center bg-brand-accent/10 rounded-lg">
                        <IconClock className="h-6 w-6 text-brand-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-brand-text mb-2">
                        Hours
                      </h3>
                      <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                        Daily 8:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUpItem>
            </div>
          </FadeUpSection>
        </section>

        {/* ════════════════════════════════════════
            FIELD MARK DIVIDER
            ════════════════════════════════════════════ */}
        <FieldMark />

        {/* ════════════════════════════════════════════
            FREQUENTLY ASKED QUESTIONS
            ════════════════════════════════════════════ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <FadeUpSection>
            <FadeUpItem>
              <SectionHeading eyebrow="Quick Answers" title="Frequently Asked Questions" />
            </FadeUpItem>

            <div className="mt-12 max-w-3xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <FadeUpItem key={faq.id} delay={index * 0.1}>
                    <FAQItem {...faq} />
                  </FadeUpItem>
                ))}
              </div>
            </div>
          </FadeUpSection>
        </section>

        {/* ════════════════════════════════════════
            FIELD MARK DIVIDER
            ════════════════════════════════════════════ */}
        <FieldMark />

        {/* ═════════════════════════════════════════
            SOCIAL MEDIA
            ═══════════════════════════════════════════ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <FadeUpSection>
            <FadeUpItem>
              <SectionHeading eyebrow="Stay Connected" title="Follow Us" />
            </FadeUpItem>

            <div className="flex flex-col items-center gap-8">
              <FadeUpItem delay={0}>
                <p className="text-center text-brand-text/60 max-w-xl">
                  Stay updated with the latest news, events, and behind-the-scenes content from Kano Polo Club.
                </p>
              </FadeUpItem>
              <FadeUpItem delay={0.15}>
                <SocialLinks />
              </FadeUpItem>
            </div>
          </FadeUpSection>
        </section>

        {/* ════════════════════════════════════════
            FIELD MARK DIVIDER
            ════════════════════════════════════════════ */}
        <FieldMark />

        {/* ═════════════════════════════════════════
            GOOGLE MAPS LOCATION
            ════════════════════════════════════════════ */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
          <FadeUpSection>
            <FadeUpItem>
              <SectionHeading eyebrow="Find Us" title="Our Location" />
            </FadeUpItem>
            <FadeUpItem delay={0.15}>
              <div className="relative w-full h-0 pb-[56.25%] overflow-hidden shadow-lg border border-brand-accent/25">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.959727272727!2d8.525!3d11.999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae81f7c8c8c8c9%3A0x8c8c8c8c8c8c8c8c!2sKano%20Polo%20Club!5e0!3m2!1sen!2sng!4v1690000000000!5m2!1sen!2sng"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kano Polo Club Location"
                />
              </div>
              <p className="text-center text-brand-text/60 text-sm mt-4">
                Kano Polo Club, Kano State, Nigeria — easily accessible from the city center
              </p>
            </FadeUpItem>
          </FadeUpSection>
        </section>

        {/* ═════════════════════════════════════════
            FOOTER SPACER
            ════════════════════════════════════════════ */}
        <div className="h-8" />
      </main>
    </PageWrapper>
  );
};

export default Contact;