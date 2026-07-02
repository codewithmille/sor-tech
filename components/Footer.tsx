import React from 'react';
import Link from 'next/link';

const LINKS = {
  Services: [
    { label: 'Business Websites', href: '#services' },
    { label: 'E-Commerce Stores', href: '#services' },
    { label: 'Landing Pages', href: '#services' },
    { label: 'Website Redesigns', href: '#services' },
    { label: 'SEO Optimization', href: '#services' },
    { label: 'Website Maintenance', href: '#services' },
  ],
  Navigation: [
    { label: 'Featured Work', href: '#portfolio' },
    { label: 'Our Process', href: '#how-it-works' },
    { label: 'Pricing Plans', href: '#pricing' },
    { label: 'Client Reviews', href: '#testimonials' },
    { label: 'Contact Us', href: '#contact' },
  ],
  Contact: [
    { label: 'hello@sortech.io', href: 'mailto:hello@sortech.io' },
    { label: 'Get a Free Quote', href: '#contact' },
  ],
} as const;

const SOCIAL = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
] as const;

export default function Footer(): React.JSX.Element {
  return (
    <footer
      className="px-6 pt-16 pb-10"
      style={{ background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-14">

          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Sortech — Home">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: '#2563EB' }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 18 18" fill="none" className="w-4 h-4">
                  <rect x="2" y="2" width="6" height="6" rx="1.5" fill="white" opacity="0.9" />
                  <rect x="10" y="2" width="6" height="6" rx="1.5" fill="white" opacity="0.55" />
                  <rect x="2" y="10" width="6" height="6" rx="1.5" fill="white" opacity="0.55" />
                  <rect x="10" y="10" width="6" height="6" rx="1.5" fill="white" opacity="0.9" />
                </svg>
              </div>
              <span className="text-[17px] font-bold tracking-tight" style={{ color: '#111827' }}>
                Sor<span style={{ color: '#2563EB' }}>tech</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#6B7280' }}>
              We build professional, fast, and secure websites that establish credibility and help businesses grow online.
            </p>
            <div className="flex gap-2.5">
              {SOCIAL.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-gray-300 text-gray-500 hover:text-blue-600 hover:border-blue-500 transition-colors duration-150"
                  style={{ background: '#FFFFFF' }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {(Object.entries(LINKS) as [string, readonly { label: string; href: string }[]][]).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#9CA3AF' }}>
                {category}
              </h4>
              <ul className="space-y-2.5" role="list">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer bottom */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Sortech. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-900">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
