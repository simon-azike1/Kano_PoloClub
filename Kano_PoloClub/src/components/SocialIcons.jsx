/* ──────────────────────────────────────────────
   SOCIAL ICONS (Inline SVGs)
   ────────────────────────────────────────────── */

export const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="18" cy="6" r="1.2" fill="currentColor" />
  </svg>
);

export const IconFacebook = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.852v-8.385H7.078v-3.47h3.046V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const IconTwitter = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 9.24-3.308.95-8.502-9.24-8.502 9.24-3.308-.95 8.502-9.24-7.227-8.26h3.308l7.227 8.26L24 2.25z" />
  </svg>
);

export const IconLinkedIn = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export const IconYouTube = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 7.713 0 12 0 12s0 4.287.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 16.287 24 12 24 12s0-4.287-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const IconTikTok = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.524,1.578c-0.293-0.138-0.591-0.206-0.893-0.219c-3.008-0.121-5.622,1.274-6.587,4.123 C3.558,6.958,2.173,9.58,1.879,12.595c-0.222,2.284,1.064,4.476,3.107,5.505c0.097,0.048,0.195,0.096,0.293,0.145 c1.644,0.809,3.405,1.213,5.22,1.213s3.576-0.404,5.22-1.213c0.098-0.048,0.196-0.096,0.293-0.145c2.044-1.029,3.329-3.651,3.032-5.935 c-0.295-2.279-1.68-4.901-4.689-5.021C18.142,1.7,15.53,1.7,12.524,1.578z M7.583,15.56c-1.161,0-2.1-0.894-2.1-2.001c0-1.105,0.939-2,2.1-2s2.1,0.895,2.1,2 C9.683,14.666,8.744,15.56,7.583,15.56z M16.417,15.56c-1.161,0-2.1-0.894-2.1-2.001c0-1.105,0.939-2,2.1-2s2.1,0.895,2.1,2 C18.517,14.666,17.578,15.56,16.417,15.56z" />
  </svg>
);

export const SocialLinks = ({ className = "flex items-center gap-4" }) => (
  <div className={className} role="list" aria-label="Social media links">
    <a 
      href="https://www.instagram.com/kanopoloclub?igsh=YTNvcW92bTdueXhn" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 bg-brand-bg/50 hover:bg-brand-accent/10 transition-all duration-300 text-brand-text/60 hover:text-brand-accent"
      aria-label="Instagram"
    >
      <IconInstagram />
    </a>
    <a 
      href="https://web.facebook.com/p/Kano-Polo-Club-100065149024262/?_rdc=1&_rdr#" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 bg-brand-bg/50 hover:bg-brand-accent/10 transition-all duration-300 text-brand-text/60 hover:text-brand-accent"
      aria-label="Facebook"
    >
      <IconFacebook />
    </a>
    <a 
      href="https://x.com/PoloClubKano" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 bg-brand-bg/50 hover:bg-brand-accent/10 transition-all duration-300 text-brand-text/60 hover:text-brand-accent"
      aria-label="X (Twitter)"
    >
      <IconTwitter />
    </a>
    <a 
      href="https://www.youtube.com/@live.ukpolo" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 bg-brand-bg/50 hover:bg-brand-accent/10 transition-all duration-300 text-brand-text/60 hover:text-brand-accent"
      aria-label="YouTube"
    >
      <IconYouTube />
    </a>
  </div>
);