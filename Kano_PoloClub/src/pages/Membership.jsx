import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { FieldMark, SectionHeading } from '../components/ui';

// Custom ease for premium feel
const customEase = [0.16, 1, 0.3, 1];

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
const tiers = [
  {
    name: 'Day Pass',
    price: '₦25,000',
    period: '/ day',
    tagline: 'For visitors and first-time guests',
    featured: false,
    features: [
      'Single-day field access',
      'Clubhouse lounge access',
      'Equipment rental available',
      'Guided introduction on request',
    ],
    cta: 'Get a Day Pass',
  },
  {
    name: 'Seasonal',
    price: '₦450,000',
    period: '/ season',
    tagline: 'For regular players committed to the game',
    featured: true,
    features: [
      'Unlimited field access for the season',
      'Priority booking for coaching sessions',
      'Clubhouse dining privileges',
      'Access to seasonal tournaments',
      'Guest passes (2 per month)',
    ],
    cta: 'Join This Season',
  },
  {
    name: 'Annual',
    price: '₦1,500,000',
    period: '/ year',
    tagline: 'For dedicated members of the club',
    featured: false,
    features: [
      'Unlimited year-round field access',
      'Complimentary professional coaching',
      'Full clubhouse & lounge privileges',
      'Priority entry to all tournaments',
      'Unlimited guest passes',
      'Reserved stable allocation',
    ],
    cta: 'Become an Annual Member',
  },
];

const Membership = () => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div>
      <section className="py-20 bg-brand-bg">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: customEase }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <SectionHeading eyebrow="Membership & Offerings" title="Find Your Membership" />
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
            className="font-sans text-brand-text-soft text-lg mb-16 text-center max-w-2xl mx-auto"
          >
            Whether you're visiting for a single match or committing to a season of play, Kano Polo
            Club has a membership built around how often you ride.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ x: index % 3 === 0 ? -100 : index % 3 === 1 ? 0 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: customEase }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex flex-col h-full p-8 rounded-sm border transition-colors duration-200 ${
                  tier.featured
                    ? 'border-brand-accent bg-white shadow-lg md:-translate-y-3'
                    : 'border-brand-accent/25 bg-white/60 hover:border-brand-accent/60'
                }`}
              >
                {tier.featured && (
                  <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, ease: customEase }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-accent text-brand-text text-xs font-sans tracking-[0.15em] uppercase rounded-sm"
                  >
                    Most Popular
                  </motion.div>
                )}

                <h3 className="font-serif text-2xl font-medium text-brand-primary mb-1">
                  {tier.name}
                </h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: customEase }}
                  className="font-sans text-sm text-brand-text-soft mb-6"
                >
                  {tier.tagline}
                </motion.p>

                <div className="mb-8 flex items-baseline gap-1">
                  <span className="font-serif text-4xl font-semibold text-brand-text">
                    {tier.price}
                  </span>
                  <span className="font-sans text-sm text-brand-text-soft">
                    {tier.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-10 flex-1">
                  {tier.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.05, ease: customEase }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-start gap-3 font-sans text-sm text-brand-text-soft"
                    >
                      <svg
                        className="h-4 w-4 text-brand-accent flex-shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12l4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98, y: 0 }}
                >
                  <Link
                    to="/contact"
                    className={`text-center px-6 py-3 font-sans font-medium rounded-sm transition-colors duration-200 ${
                      tier.featured
                        ? 'bg-brand-accent text-brand-text hover:bg-brand-accent-light'
                        : 'bg-brand-primary text-brand-bg hover:bg-brand-primary-dark'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.45, ease: customEase }}
          >
            <FieldMark />
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
            className="font-sans text-sm text-brand-text-soft text-center max-w-xl mx-auto"
          >
            All memberships include a complimentary orientation session. Corporate and family
            memberships are available on request — 
            <Link to="/contact" className="text-brand-primary hover:text-brand-accent underline underline-offset-2">
              contact the club
            </Link>
            for details.
          </motion.p>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Membership;