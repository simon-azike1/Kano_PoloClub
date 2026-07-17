import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { FieldMark, SectionHeading } from '../components/ui';

// Custom ease for premium feel
const customEase = [0.16, 1, 0.3, 1];

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
      <section className="py-12 sm:py-16 md:py-24 bg-brand-bg">
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
            transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
            className="font-sans text-brand-text/70 text-base sm:text-lg mb-10 sm:mb-16 text-center max-w-2xl mx-auto leading-relaxed"
          >
            Whether you're visiting for a single match or committing to a season of play, Kano Polo
            Club has a membership built around how often you ride.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: customEase }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex flex-col h-full p-6 sm:p-8 rounded-sm border transition-all duration-300 ${
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
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-accent text-brand-primary text-xs font-sans tracking-[0.15em] uppercase rounded-sm font-semibold shadow-sm"
                  >
                    Most Popular
                  </motion.div>
                )}

                <h3 className="font-serif text-2xl font-normal text-brand-primary mb-1">
                  {tier.name}
                </h3>
                
                <p className="font-sans text-sm text-brand-text/60 mb-6">
                  {tier.tagline}
                </p>

                <div className="mb-6 sm:mb-8 flex items-baseline gap-1">
                  <span className="font-serif text-4xl font-semibold text-brand-text">
                    {tier.price}
                  </span>
                  <span className="font-sans text-sm text-brand-text/50">
                    {tier.period}
                  </span>
                </div>

                <ul className="space-y-3.5 mb-8 sm:mb-10 flex-1">
                  {tier.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.05, ease: customEase }}
                      className="flex items-start gap-3 font-sans text-sm text-brand-text/75 leading-tight"
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
                  className="w-full mt-auto"
                >
                  <Link
                    to="/contact"
                    className={`inline-flex items-center justify-center w-full min-h-[48px] px-6 py-3 font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-sm touch-manipulation text-center ${
                      tier.featured
                        ? 'bg-brand-accent text-brand-primary hover:bg-white hover:text-brand-primary shadow-md hover:shadow-lg'
                        : 'bg-brand-primary text-white hover:bg-brand-text'
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
            transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
          >
            <FieldMark />
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.4, ease: customEase }}
            className="font-sans text-sm text-brand-text/60 text-center max-w-xl mx-auto leading-relaxed"
          >
            All memberships include a complimentary orientation session. Corporate and family
            memberships are available on request —{' '}
            <Link to="/contact" className="text-brand-primary hover:text-brand-accent underline underline-offset-2 transition-colors duration-300">
              contact the club
            </Link>{' '}
            for details.
          </motion.p>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Membership;