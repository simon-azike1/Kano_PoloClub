import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '/KPC_LOGO.png';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/club', label: 'The Club' },
  { to: '/events', label: 'Events' },
  { to: '/tournament', label: 'Tournament' },
  { to: '/news', label: 'News' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-brand-bg/90 backdrop-blur-sm sticky top-0 z-50 border-b border-brand-accent/20 mt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center space-x-3" end>
              <img src={logo} alt="Kano Polo Club Logo" className="h-10 w-auto" />
              <span className="font-serif text-xl font-semibold tracking-wide text-brand-primary">
                Kano Polo Club
              </span>
            </NavLink>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative font-sans text-sm tracking-medium transition-all duration-300 ${
                    isActive
                      ? 'text-brand-primary'
                      : 'text-brand-text/60 hover:text-brand-primary'
                  } after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:bg-brand-accent after:transition-all after:duration-300 ${
                    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Distinct-purpose CTA: joining, not just browsing to Contact */}
            <NavLink
              to="/membership"
              className="px-5 py-2.5 bg-brand-accent text-brand-primary font-sans text-sm font-medium tracking-wide hover:bg-brand-accent-light transition-colors duration-300"
            >
              Become a Member
            </NavLink>
          </div>

          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex items-center justify-center p-2 rounded-sm text-brand-text/60 hover:text-brand-primary hover:bg-brand-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/20"
              aria-label={open ? 'Close main menu' : 'Open main menu'}
              aria-expanded={open}
            >
              {open ? (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {open && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="md:hidden border-t border-brand-accent/20 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-4 space-y-1">
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 font-sans text-base transition-all duration-300 ${
                        isActive
                          ? 'bg-brand-accent/10 text-brand-primary'
                          : 'text-brand-text/60 hover:bg-brand-accent/10 hover:text-brand-primary'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <NavLink
                  to="/club#membership"
                  onClick={() => setOpen(false)}
                  className="block text-center mt-2 px-3 py-2.5 bg-brand-accent text-brand-primary font-sans font-medium hover:bg-brand-accent-light transition-colors duration-300"
                >
                  Become a Member
                </NavLink>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </nav>
  );
};

export default Nav;