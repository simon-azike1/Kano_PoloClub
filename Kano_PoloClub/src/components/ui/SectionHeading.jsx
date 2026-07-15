import React from 'react';

export const SectionHeading = ({ eyebrow, title }) => (
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