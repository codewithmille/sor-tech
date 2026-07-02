import React from 'react';
import ScrollReveal from './ScrollReveal';

const COMPARISON_ROWS = [
  {
    aspect: 'Search & Discovery',
    withoutText: 'Invisible on Google; buried behind social media algorithms.',
    withText: 'Ranked on search engines, making it easy for local clients to find you.',
    winner: true,
  },
  {
    aspect: 'Brand Credibility',
    withoutText: 'Less trust; 75% of consumers judge a business by its website.',
    withText: 'Establishes instant credibility with a custom domain and design.',
    winner: true,
  },
  {
    aspect: 'Lead Capture',
    withoutText: 'Missed customer inquiries lost in direct messages or comments.',
    withText: 'Automated contact forms capture inquiries 24/7 directly to your email.',
    winner: true,
  },
  {
    aspect: 'Ownership & Control',
    withoutText: 'Rented platform space; algorithm changes can cut off your reach.',
    withText: 'Owned digital asset; you have full control over content and client experience.',
    winner: true,
  },
] as const;

export default function WhyWebsite(): React.JSX.Element {
  return (
    <section
      id="why-website"
      className="py-20 lg:py-28 px-6"
      style={{ background: '#FFFFFF' }}
      aria-label="Why your business needs a website"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#2563EB' }}>The Comparison</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5" style={{ color: '#111827' }}>
            Still Relying on Social Media Alone?
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            Compare how your business performs with rented social media accounts versus an owned professional website.
          </p>
        </ScrollReveal>

        {/* Comparison Table / Grid */}
        <ScrollReveal className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          {/* Table Header - Hidden on small screens */}
          <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-50 px-6 py-4 border-b border-gray-200 font-bold text-xs uppercase tracking-wider text-gray-500">
            <div className="col-span-3">Business Need</div>
            <div className="col-span-4">Social Media Only</div>
            <div className="col-span-5">With a Sortech Website</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-200">
            {COMPARISON_ROWS.map(({ aspect, withoutText, withText }, i) => (
              <div key={aspect} className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-6 items-center">
                {/* Aspect name */}
                <div className="col-span-1 md:col-span-3 font-bold text-sm text-gray-900 md:pr-4">
                  {aspect}
                </div>

                {/* Without website */}
                <div className="col-span-1 md:col-span-4 flex items-start gap-2.5">
                  <svg className="w-4 h-4 shrink-0 mt-0.5 text-red-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-xs sm:text-sm text-gray-500">{withoutText}</span>
                </div>

                {/* With website */}
                <div className="col-span-1 md:col-span-5 flex items-start gap-2.5 bg-blue-50/30 md:bg-transparent -mx-6 px-6 py-4 md:p-0">
                  <svg className="w-4 h-4 shrink-0 mt-0.5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs sm:text-sm text-gray-900 font-medium">{withText}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
