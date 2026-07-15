import { Link } from 'react-router-dom';
import { SocialLinks } from './SocialIcons';

const Footer = () => {
  return (
    <footer className="border-t border-brand-accent/20 bg-brand-bg">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 md:grid md:grid-cols-3 md:gap-8">
        <div>
          <h3 className="text-xl font-serif text-brand-text mb-4">
            Kano Polo Club
          </h3>
          <p className="font-sans text-sm text-brand-text/60">
            Experience the tradition and excitement of polo in the heart of Kano.
          </p>
          <div className="mt-6">
            <SocialLinks className="flex items-center gap-3" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-brand-text mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="font-sans text-sm text-brand-text/60 hover:text-brand-primary transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="font-sans text-sm text-brand-text/60 hover:text-brand-primary transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/club"
                className="font-sans text-sm text-brand-text/60 hover:text-brand-primary transition-colors duration-300"
              >
                The Club
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="font-sans text-sm text-brand-text/60 hover:text-brand-primary transition-colors duration-300"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className="font-sans text-sm text-brand-text/60 hover:text-brand-primary transition-colors duration-300"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-sans text-sm text-brand-text/60 hover:text-brand-primary transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-brand-text mb-4">
            Contact Information
          </h3>
          <p className="flex items-start space-x-2 font-sans text-sm text-brand-text/60">
            <span className="font-medium">Address:</span> Kano Polo Club, Kano State, Nigeria
          </p>
          <p className="flex items-start space-x-2 font-sans text-sm text-brand-text/60">
            <span className="font-medium">Phone:</span> +234 XXX XXX XXX
          </p>
          <p className="flex items-start space-x-2 font-sans text-sm text-brand-text/60">
            <span className="font-medium">Email:</span> info@kanopoloclub.ng
          </p>
          <p className="flex items-start space-x-2 font-sans text-sm text-brand-text/60">
            <span className="font-medium">Hours:</span> Daily 8:00 AM - 6:00 PM
          </p>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-brand-accent/20 text-center text-sm text-brand-text/40">
        <p>
          &copy; {new Date().getFullYear()} Kano Polo Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;