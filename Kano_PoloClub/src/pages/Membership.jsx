import { Link } from 'react-router-dom';

const FieldMark = () => (
  <div className="flex items-center justify-center py-2" aria-hidden="true">
    <span className="h-px w-24 bg-brand-accent/40" />
    <svg className="mx-3 h-4 w-4 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18" />
    </svg>
    <span className="h-px w-24 bg-brand-accent/40" />
  </div>
);

const SectionHeading = ({ eyebrow, title }) => (
  <div className="text-center mb-12">
    {eyebrow && (
      <p className="font-sans text-xs tracking-[0.2em] uppercase text-brand-accent mb-3">{eyebrow}</p>
    )}
    <h2 className="font-serif text-3xl md:text-4xl font-semibold text-brand-primary inline-block relative pb-3">
      {title}
      <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-16 bg-brand-accent" />
    </h2>
  </div>
);

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
  return (
    <section className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Membership & Offerings" title="Find Your Membership" />
        <p className="font-sans text-brand-text-soft text-lg mb-16 text-center max-w-2xl mx-auto">
          Whether you're visiting for a single match or committing to a season of play, Kano Polo
          Club has a membership built around how often you ride.
        </p>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col h-full p-8 rounded-sm border transition-colors duration-200 ${
                tier.featured
                  ? 'border-brand-accent bg-white shadow-lg md:-translate-y-3'
                  : 'border-brand-accent/25 bg-white/60 hover:border-brand-accent/60'
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-accent text-brand-text text-xs font-sans tracking-[0.15em] uppercase rounded-sm">
                  Most Popular
                </span>
              )}

              <h3 className="font-serif text-2xl font-medium text-brand-primary mb-1">
                {tier.name}
              </h3>
              <p className="font-sans text-sm text-brand-text-soft mb-6">{tier.tagline}</p>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="font-serif text-4xl font-semibold text-brand-text">{tier.price}</span>
                <span className="font-sans text-sm text-brand-text-soft">{tier.period}</span>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 font-sans text-sm text-brand-text-soft">
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
                  </li>
                ))}
              </ul>

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
            </div>
          ))}
        </div>

        <FieldMark />

        <p className="font-sans text-sm text-brand-text-soft text-center max-w-xl mx-auto">
          All memberships include a complimentary orientation session. Corporate and family
          memberships are available on request —{' '}
          <Link to="/contact" className="text-brand-primary hover:text-brand-accent underline underline-offset-2">
            contact the club
          </Link>{' '}
          for details.
        </p>
      </div>
    </section>
  );
};

export default Membership;