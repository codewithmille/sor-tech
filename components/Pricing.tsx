import React from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

type Plan = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  milestone: string;
  badge?: string;
  featured: boolean;
  features: string[];
  cta: string;
};

const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter Package',
    tagline: 'Ideal for basic local business presence.',
    price: '₱24,999',
    priceNote: 'Fixed one-time cost',
    milestone: '₱12,500 down · 50% only upon final approval & launch',
    featured: false,
    features: [
      'Up to 5 custom pages',
      'Mobile-first responsive design',
      'Contact form & Google Maps setup',
      'Fast loading speed optimization',
      '1 month of security updates',
      'Launched in 7–10 days',
    ],
    cta: 'Request Starter Quote',
  },
  {
    id: 'business',
    name: 'Business Package',
    tagline: 'Best for growing businesses needing leads.',
    price: '₱49,999',
    priceNote: 'Fixed one-time cost',
    milestone: '₱25,000 down · 50% only upon final approval & launch',
    badge: 'Most Popular',
    featured: true,
    features: [
      'Up to 12 custom pages',
      'High-converting custom layout',
      'Easy-to-use content manager (CMS)',
      'Google Analytics & tracking setup',
      'Direct WhatsApp & Messenger chat link',
      '3 months of priority support',
      'Social media integration',
      'Launched in 10–14 days',
    ],
    cta: 'Request Business Quote',
  },
  {
    id: 'premium',
    name: 'Custom Package',
    tagline: 'For complex stores and custom web apps.',
    price: 'Custom',
    priceNote: 'Quoted after consultation',
    milestone: 'Flexible milestone payment terms tailored to your scope',
    featured: false,
    features: [
      'Unlimited pages & custom flows',
      'Full e-commerce or booking system',
      'Custom database & user authentication',
      'Payment gateway integration (GCash, Maya, Cards)',
      'Dedicated project lead',
      '6 months of priority support',
      'Comprehensive performance audit',
    ],
    cta: 'Discuss Your Project',
  },
];

const GUARANTEES = [
  {
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    bg: 'bg-blue-50 border-blue-100',
    title: '14-Day Delivery Guarantee',
    description: 'We deliver your working website on schedule, or we provide 1 month of website maintenance for free.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    bg: 'bg-emerald-50 border-emerald-100',
    title: '100% Fixed-Price Guarantee',
    description: 'The price quoted is the exact price you pay. No surprise invoices, unexpected hosting fees, or hidden costs.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    bg: 'bg-purple-50 border-purple-100',
    title: '100% Asset Ownership',
    description: 'You fully own your domain, design, and source code from day one. We never lock you in or hold your site hostage.',
  },
] as const;

export default function Pricing(): React.JSX.Element {
  return (
    <section id="pricing" className="py-20 lg:py-28 px-6" style={{ background: '#F9FAFB' }} aria-label="Pricing plans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#2563EB' }}>Pricing Plans</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5" style={{ color: '#111827' }}>
            Simple, Honest Pricing
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            No subscriptions or hidden fees. We provide transparent upfront quotes with easy milestone payments.
          </p>
        </ScrollReveal>

        {/* Plan Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-16">
          {PLANS.map(({ id, name, tagline, price, priceNote, milestone, badge, featured, features, cta }, i) => (
            <ScrollReveal key={id} delay={i * 60} direction="up" className="h-full">
              <div
                className="pricing-tier rounded-xl p-7 lg:p-8 flex flex-col h-full relative"
                style={{
                  background: '#FFFFFF',
                  border: featured ? '2px solid #2563EB' : '1px solid #E5E7EB',
                  boxShadow: featured ? '0 10px 30px rgba(37,99,235,0.06), var(--shadow-md)' : 'var(--shadow-xs)',
                }}
              >
                {/* Featured Badge */}
                {badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="text-[10px] font-bold px-3.5 py-1 rounded-full text-white bg-blue-600 whitespace-nowrap uppercase tracking-wider shadow-sm">
                      {badge}
                    </span>
                  </div>
                )}

                {/* Card Title */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-1" style={{ color: '#111827' }}>{name}</h3>
                  <p className="text-xs text-gray-500">{tagline}</p>
                </div>

                {/* Pricing & Milestone Display */}
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <div className="text-3xl font-extrabold" style={{ color: '#111827' }}>
                    {price}
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">{priceNote}</p>

                  {/* Milestone Trust Badge */}
                  <div className="mt-3 p-2 rounded-lg bg-blue-50/70 border border-blue-100 flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[11px] font-semibold text-blue-900 leading-tight">
                      {milestone}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 flex-1 mb-8" role="list">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: '#4B5563' }}>
                      <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#2563EB' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Link
                  href="#contact"
                  id={`pricing-cta-${id}`}
                  className={featured ? 'btn-primary justify-center text-center py-3' : 'btn-ghost justify-center text-center py-3'}
                >
                  {cta}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Guarantees Trust Banner */}
        <ScrollReveal direction="up" className="max-w-6xl mx-auto">
          <div className="rounded-2xl bg-white border border-gray-200 p-8 sm:p-10 shadow-sm">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Peace of Mind Guarantee</span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">Zero Financial Risk When You Work With Sortech</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1.5 max-w-lg mx-auto">
                We believe in earning your trust with transparent terms and accountability before, during, and after launch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {GUARANTEES.map(({ icon, bg, title, description }) => (
                <div key={title} className="flex items-start gap-3.5">
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center shrink-0 border`}>
                    {icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">{title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
