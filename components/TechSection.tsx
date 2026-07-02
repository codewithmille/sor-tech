'use client';

import React from 'react';
import ScrollReveal from './ScrollReveal';

const STEPS = [
  {
    id: 'discovery',
    number: '1',
    title: 'Discovery',
    description: 'We listen to your business goals, target audience, and competitors to map out a clear project roadmap.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    id: 'planning',
    number: '2',
    title: 'Planning',
    description: 'We outline the website sitemap, pages structure, and project timeline to establish clear deliverables.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    id: 'design',
    number: '3',
    title: 'Design',
    description: 'We design high-fidelity visual mockups of your pages, getting your approval before we write any code.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    id: 'development',
    number: '4',
    title: 'Development',
    description: 'We develop your approved design with clean, mobile-first code, fast page load speeds, and SEO readiness.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="12" y1="4" x2="12" y2="20" />
      </svg>
    ),
  },
  {
    id: 'launch',
    number: '5',
    title: 'Launch',
    description: 'We perform complete browser compatibility tests, check speed scores, deploy hosting, and launch your site.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
  },
] as const;

export default function TechSection(): React.JSX.Element {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 px-6" style={{ background: '#FFFFFF' }} aria-label="Our process">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#2563EB' }}>Our Process</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5" style={{ color: '#111827' }}>
            How We Build Your Website
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            We guide you step-by-step from discovery to a successful launch, keeping you updated every step of the way.
          </p>
        </ScrollReveal>

        {/* Desktop timeline view */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline horizontal line */}
            <div
              className="absolute top-[28px] left-[10%] right-[10%] h-0.5"
              style={{ background: '#E5E7EB' }}
              aria-hidden="true"
            />

            <div className="grid grid-cols-5 gap-4">
              {STEPS.map(({ id, number, title, description, icon }) => (
                <div key={id} className="process-step flex flex-col items-center text-center px-2 relative z-10">
                  {/* Circle containing icon */}
                  <div
                    className="step-circle w-14 h-14 rounded-full flex items-center justify-center mb-5 border relative transition-all duration-200"
                    style={{ background: '#FFFFFF', borderColor: '#E5E7EB', color: '#4B5563' }}
                  >
                    {icon}
                    {/* Circle badge for step number */}
                    <span
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ background: '#2563EB' }}
                      aria-hidden="true"
                    >
                      {number}
                    </span>
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: '#111827' }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline view */}
        <div className="lg:hidden max-w-md mx-auto relative">
          <div
            className="absolute left-[27px] top-4 bottom-4 w-0.5"
            style={{ background: '#E5E7EB' }}
            aria-hidden="true"
          />
          <div className="space-y-8">
            {STEPS.map(({ id, number, title, description, icon }) => (
              <div key={id} className="process-step relative flex gap-5">
                <div
                  className="step-circle w-14 h-14 rounded-full flex items-center justify-center shrink-0 border relative z-10 transition-all duration-200"
                  style={{ background: '#FFFFFF', borderColor: '#E5E7EB', color: '#4B5563' }}
                >
                  {icon}
                  <span
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: '#2563EB' }}
                    aria-hidden="true"
                  >
                    {number}
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="text-base font-bold mb-1.5" style={{ color: '#111827' }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
