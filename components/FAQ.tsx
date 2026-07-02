'use client';

import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const QUESTIONS = [
  {
    id: 'timeline',
    q: 'How long does a website take to build?',
    a: 'Most standard business websites are completed in 7–14 days. Custom online shops or advanced portals may take 3–6 weeks depending on requirements. We agree on a timeline beforehand.',
  },
  {
    id: 'cost',
    q: 'How much does a website cost?',
    a: 'Our business website packages start at ₱24,999. The final price depends on pages and custom features. We provide a complete fixed quote upfront before starting any coding.',
  },
  {
    id: 'hosting',
    q: 'Do you provide hosting and domains?',
    a: 'Yes, we help set up your domain registration and choose a reliable host. We typically set up websites on modern platforms like Vercel or Hostinger to ensure fast page load times.',
  },
  {
    id: 'edit',
    q: 'Can I edit my website content later?',
    a: 'Yes. We set up an editor dashboard so you can update text, images, and add blog posts yourself. No coding skills are required, and we provide a walkthrough to show you how.',
  },
  {
    id: 'mobile',
    q: 'Will my website work on mobile devices?',
    a: 'Yes. Every website we build is fully responsive, meaning it is tested to look and perform great on smartphones, tablets, and desktops.',
  },
] as const;

export default function FAQ(): React.JSX.Element {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 px-6" style={{ background: '#FFFFFF' }} aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#2563EB' }}>FAQ</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5" style={{ color: '#111827' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            Find quick answers to common questions about our website development process.
          </p>
        </ScrollReveal>

        {/* Accordions */}
        <div className="space-y-4">
          {QUESTIONS.map(({ id, q, a }, i) => {
            const isOpen = open === i;
            return (
              <ScrollReveal key={id} delay={i * 30}>
                <div
                  className="faq-item rounded-lg overflow-hidden"
                  style={{
                    background: '#FFFFFF',
                    border: `1px solid ${isOpen ? '#BFDBFE' : '#E5E7EB'}`,
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    id={`faq-btn-${id}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-bold"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${id}`}
                    style={{ color: '#111827' }}
                    suppressHydrationWarning={true}
                  >
                    <span className="text-sm sm:text-base" style={{ color: isOpen ? '#2563EB' : '#111827' }}>{q}</span>
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200"
                      style={{
                        background: isOpen ? '#EFF6FF' : '#F3F4F6',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                      aria-hidden="true"
                    >
                      <svg className="w-3 h-3" style={{ color: isOpen ? '#2563EB' : '#6B7280' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                  </button>

                  <div
                    id={`faq-answer-${id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${id}`}
                    style={{
                      maxHeight: isOpen ? '200px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.25s ease-out',
                    }}
                  >
                    <p className="px-5 pb-4 text-sm leading-relaxed" style={{ color: '#4B5563' }}>
                      {a}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
