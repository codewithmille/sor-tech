import React from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

export default function FinalCTA(): React.JSX.Element {
  return (
    <section id="final-cta" className="py-20 lg:py-28 px-6" style={{ background: '#FFFFFF' }} aria-label="Ready to grow your business">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#2563EB' }}>Get Started Today</p>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5"
            style={{ color: '#111827' }}
          >
            Ready to Grow Your Business Online?
          </h2>

          <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: '#4B5563' }}>
            Tell us about your business goals and website requirements. We will review your project and get back to you with a free custom quote within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="#contact" id="final-cta-primary" className="btn-primary text-base py-3 px-7">
              Get a Free Quote
              <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="#portfolio" id="final-cta-portfolio" className="btn-ghost text-base py-3 px-7">
              View Our Work
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
