import React from 'react';
import ScrollReveal from './ScrollReveal';

const FEATURES = [
  {
    id: 'turnaround',
    title: 'Fast Turnaround',
    description: 'Get your website live in 7–14 days. We work efficiently to launch your site quickly without cutting corners.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: 'mobile-responsive',
    title: 'Mobile Responsive',
    description: 'We test across smartphones, tablets, and desktops to ensure a seamless experience for every single visitor.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    id: 'seo-ready',
    title: 'SEO Ready',
    description: 'Built with search engine best practices so your business can be easily discovered by customers on Google.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    id: 'secure',
    title: 'Secure & Reliable',
    description: 'Standard security practices, clean code architectures, and premium hosting setup keep your website safe.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 'easy-manage',
    title: 'Easy to Manage',
    description: 'Easily update text, images, or blogs. We build with intuitive editors and provide a walkthrough training.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    id: 'ongoing-support',
    title: 'Ongoing Support',
    description: 'We do not disappear after launch. We are here to help you update, maintain, and grow your site long-term.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
] as const;

export default function WhyChoose(): React.JSX.Element {
  return (
    <section id="why-sortech" className="py-20 lg:py-28 px-6" style={{ background: '#FFFFFF' }} aria-label="Why choose Sortech">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#2563EB' }}>Why Choose Us</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5" style={{ color: '#111827' }}>
            Built for Real Business Results
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            We focus on key features that convert visitors into paying clients — omitting complex, unnecessary jargon.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map(({ id, title, description, icon }, i) => (
            <ScrollReveal key={id} delay={i * 50} direction="up" className="flex gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#2563EB' }}
              >
                {icon}
              </div>
              <div>
                <h3 className="text-base font-bold mb-1.5" style={{ color: '#111827' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
