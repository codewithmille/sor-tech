import React from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

type Plan = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
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
    featured: false,
    features: [
      'Up to 5 pages',
      'Mobile-friendly responsive design',
      'Contact form & map integration',
      'Basic SEO code structure',
      '1 month of security updates',
      'Launched in 7–10 days',
    ],
    cta: 'Request a Quote',
  },
  {
    id: 'business',
    name: 'Business Package',
    tagline: 'Best for growing businesses needing leads.',
    price: '₱49,999',
    priceNote: 'Fixed one-time cost',
    badge: 'Recommended',
    featured: true,
    features: [
      'Up to 12 pages',
      'Custom website layout design',
      'Easy-to-use content manager',
      'Advanced SEO optimization',
      'Google Analytics setup',
      'WhatsApp / chat link',
      '3 months of priority support',
      'Social media profile links',
    ],
    cta: 'Request a Quote',
  },
  {
    id: 'premium',
    name: 'Custom Package',
    tagline: 'For complex stores and custom apps.',
    price: 'Custom',
    priceNote: 'Quoted after consultation',
    featured: false,
    features: [
      'Unlimited pages',
      'Full e-commerce setup',
      'Custom functionality & bookings',
      'Content writing assistance',
      'Payment gate integration',
      'Dedicated project support',
      '6 months of priority support',
      'Speed & performance audit',
    ],
    cta: 'Contact Us',
  },
];

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
            No subscriptions or hidden fees. We provide a clear, upfront quote before starting any work.
          </p>
        </ScrollReveal>

        {/* Plan Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PLANS.map(({ id, name, tagline, price, priceNote, badge, featured, features, cta }, i) => (
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
                    <span className="text-[10px] font-bold px-3.5 py-1 rounded-full text-white bg-blue-600 whitespace-nowrap uppercase tracking-wider">
                      {badge}
                    </span>
                  </div>
                )}

                {/* Card Title */}
                <div className="mb-5">
                  <h3 className="text-lg font-bold mb-1" style={{ color: '#111827' }}>{name}</h3>
                  <p className="text-xs text-gray-500">{tagline}</p>
                </div>

                {/* Pricing Display */}
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <div className="text-3xl font-extrabold" style={{ color: '#111827' }}>
                    {price}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{priceNote}</p>
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
      </div>
    </section>
  );
}
