'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const SERVICES: Service[] = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    description: 'Professional, fast-loading websites that build credibility and convert visitors into customers.',
    features: ['Up to 12 pages', 'Mobile-first design', 'SEO-ready code', 'Contact & lead forms'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Websites',
    description: 'Online stores built to sell — with product management, secure checkout, and order tracking.',
    features: ['Shopify or custom', 'Payment gateway', 'Inventory system', 'Analytics dashboard'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'High-converting single pages designed to capture leads and drive a specific business goal.',
    features: ['Conversion-focused', 'A/B testing ready', 'Lightning fast', 'Lead capture forms'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 3v18" />
      </svg>
    ),
  },
  {
    id: 'redesign',
    title: 'Website Redesign',
    description: 'Transform your outdated site into a modern, high-performing website without losing your rankings.',
    features: ['Design audit', 'Modern UI refresh', 'Speed optimized', 'SEO preserved'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <polyline points="1 4 1 10 7 10" /><polyline points="23 20 23 14 17 14" /><path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" />
      </svg>
    ),
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Rank higher on Google with technical SEO, on-page optimization, and ongoing performance tracking.',
    features: ['Keyword research', 'Technical SEO', 'Core Web Vitals', 'Monthly reports'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance',
    description: 'Keep your site secure, fast, and up-to-date with monthly maintenance and priority support.',
    features: ['Monthly updates', 'Security checks', 'Performance monitoring', 'Priority support'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

export default function Features(): React.JSX.Element {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="py-20 lg:py-28 px-6"
      style={{ background: '#F9FAFB' }}
      aria-label="Services"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#2563EB' }}>What We Do</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5" style={{ color: '#111827' }}>
            Services That Deliver Results
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            We build websites that work as hard as you do — designed to attract customers, establish credibility, and grow your business.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
          {SERVICES.map((svc, i) => {
            const isHovered = hovered === svc.id;
            return (
              <ScrollReveal key={svc.id} delay={i * 55} direction="up">
                <article
                  id={`service-${svc.id}`}
                  role="listitem"
                  className="rounded-xl p-6 lg:p-7 h-full flex flex-col cursor-default"
                  style={{
                    background: '#FFFFFF',
                    border: `1px solid ${isHovered ? '#BFDBFE' : '#E5E7EB'}`,
                    boxShadow: isHovered ? '0 8px 24px rgba(37,99,235,0.08), 0 2px 6px rgba(0,0,0,0.04)' : 'var(--shadow-xs)',
                    transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={() => setHovered(svc.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: isHovered ? '#EFF6FF' : '#F9FAFB',
                      border: '1px solid #E5E7EB',
                      color: isHovered ? '#2563EB' : '#4B5563',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    {svc.icon}
                  </div>

                  <h3 className="text-base font-bold mb-2" style={{ color: '#111827' }}>{svc.title}</h3>
                  <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: '#6B7280' }}>{svc.description}</p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-5" role="list">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs" style={{ color: '#4B5563' }}>
                        <svg className="w-3.5 h-3.5 shrink-0" style={{ color: '#2563EB' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link href="#contact" className="text-xs font-semibold flex items-center gap-1 transition-colors duration-200" style={{ color: '#2563EB' }}>
                    Get a quote
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
