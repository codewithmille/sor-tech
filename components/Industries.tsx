import React from 'react';
import ScrollReveal from './ScrollReveal';

const INDUSTRIES = [
  {
    id: 'restaurants',
    label: 'Restaurants',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
      </svg>
    ),
  },
  {
    id: 'construction',
    label: 'Construction',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M3 21h18M9 8h6M9 8v13M15 8v13M3 21V8l6-5 6 5v13" />
      </svg>
    ),
  },
  {
    id: 'real-estate',
    label: 'Real Estate',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 'medical',
    label: 'Medical Clinics',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: 'schools',
    label: 'Schools',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    id: 'retail',
    label: 'Retail & Shops',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    id: 'startups',
    label: 'Startups',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" /><path d="m12 15-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      </svg>
    ),
  },
  {
    id: 'professional',
    label: 'Professional Services',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
  },
] as const;

export default function Industries(): React.JSX.Element {
  return (
    <section id="industries" className="py-20 lg:py-28 px-6" style={{ background: '#F9FAFB' }} aria-label="Industries we serve">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#2563EB' }}>Who We Help</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5" style={{ color: '#111827' }}>
            Industries We Serve
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            We customize every design to match your specific industry standards, target audience, and business model.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {INDUSTRIES.map(({ id, label, icon }, i) => (
            <ScrollReveal key={id} delay={i * 40} direction="up">
              <div
                className="industry-chip rounded-xl p-5 text-center flex flex-col items-center gap-3"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: '#EFF6FF', color: '#2563EB' }}
                >
                  {icon}
                </div>
                <span className="text-sm font-bold text-center leading-tight" style={{ color: '#374151' }}>
                  {label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
