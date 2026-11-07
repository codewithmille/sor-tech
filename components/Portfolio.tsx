import React from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

type Project = {
  id: string;
  category: string;
  name: string;
  badge?: string;
  description: string;
  highlights?: string[];
  stack: readonly string[];
  imageSrc?: string;
  previewTitle: string;
  previewText: string;
  themeBg: string;
  themeColor: string;
  buttonColor: string;
};

const PROJECTS: Project[] = [
  {
    id: 'park-mo',
    category: 'Mobile & Web Application · IoT & Mobility',
    name: 'Park Mo — Smart Parking Platform',
    badge: 'Flagship Application',
    description:
      'A full-stack cross-platform application that solves urban congestion with real-time parking reservations. Features live GPS slot discovery across prime commercial centers, instant QR check-in scanner, and a dedicated analytics portal for parking lot operators.',
    highlights: [
      'Live GPS map & real-time slot availability',
      'In-app QR ticket scanning & entry validation',
      'Lot owner portal with slot & revenue analytics',
      'Instant booking confirmation & route directions',
    ],
    stack: ['React Native', 'Expo', 'Supabase', 'TypeScript', 'Tailwind CSS', 'Maps API'],
    imageSrc: '/images/park-mo/hero.jpg',
    previewTitle: 'Find & Reserve Parking in Seconds',
    previewText: 'Real-time slot tracking and contactless QR entry in major commercial hubs.',
    themeBg: '#EFF6FF',
    themeColor: '#2563EB',
    buttonColor: '#2563EB',
  },
  {
    id: 'peak-homes',
    category: 'Real Estate & Properties',
    name: 'Peak Homes Realty',
    description:
      'A modern property listing portal for real estate agencies with searchable listings, interactive location filters, agent profiles, and automated WhatsApp inquiry capture.',
    highlights: [
      'Searchable property catalog with filters',
      'Instant direct broker contact forms',
      'Mobile-optimized virtual property tour layouts',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    previewTitle: 'Find Your Next Home',
    previewText: 'Explore verified properties in prime locations across the city.',
    themeBg: '#F0FDF4',
    themeColor: '#16A34A',
    buttonColor: '#16A34A',
  },
  {
    id: 'cafe-marita',
    category: 'Hospitality & Dining',
    name: 'Café Marita',
    description:
      'An elegant online menu and table reservation platform engineered for local dining spots, boosting reservation inquiries and providing interactive location maps.',
    highlights: [
      'Interactive digital menu with dietary tags',
      'Table booking system straight to email/SMS',
      'Google Maps directions and hours integration',
    ],
    stack: ['React', 'Next.js', 'Tailwind CSS'],
    previewTitle: 'Artisanal Dining Experience',
    previewText: 'Fresh, local ingredients served daily. Reserve your table online.',
    themeBg: '#FAF5FF',
    themeColor: '#7C3AED',
    buttonColor: '#7C3AED',
  },
  {
    id: 'petpals',
    category: 'E-Commerce Retail',
    name: 'PetPals Store',
    description:
      'A high-speed e-commerce storefront with catalog sorting, secure checkout, inventory tracking, and payment gateway integration.',
    highlights: [
      'Fast 1-click cart & checkout flow',
      'Secure payment gateway setup',
      'Automated order confirmation alerts',
    ],
    stack: ['Next.js', 'E-Commerce', 'Tailwind CSS', 'Stripe/PayMongo'],
    previewTitle: 'Premium Pet Supplies',
    previewText: 'Everything your best friend needs. Nationwide delivery.',
    themeBg: '#FFFBEB',
    themeColor: '#D97706',
    buttonColor: '#D97706',
  },
];

export default function Portfolio(): React.JSX.Element {
  return (
    <section id="portfolio" className="py-20 lg:py-28 px-6" style={{ background: '#FFFFFF' }} aria-label="Featured projects">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#2563EB' }}>Our Work</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ color: '#111827' }}>
              Featured Projects
            </h2>
          </div>
          <p className="text-base max-w-md leading-relaxed" style={{ color: '#6B7280' }}>
            Real production software and high-converting websites designed and engineered by Sortech to deliver measurable business growth.
          </p>
        </ScrollReveal>

        <div className="space-y-20">
          {PROJECTS.map(
            (
              {
                id,
                category,
                name,
                badge,
                description,
                highlights,
                stack,
                imageSrc,
                previewTitle,
                previewText,
                themeBg,
                themeColor,
                buttonColor,
              },
              i
            ) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal
                  key={id}
                  direction={isEven ? 'left' : 'right'}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Image / Mockup Column (7 cols) */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div
                      className="rounded-2xl p-4 sm:p-6 lg:p-8"
                      style={{
                        background: themeBg,
                        border: '1px solid #E5E7EB',
                      }}
                    >
                      {/* Browser / Device Frame */}
                      <div
                        className="rounded-xl overflow-hidden shadow-xl border bg-white"
                        style={{ borderColor: '#E5E7EB' }}
                      >
                        {/* Browser Header Bar */}
                        <div className="flex items-center gap-1.5 px-4 h-9 bg-gray-100/80 border-b border-gray-200">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                          <div className="flex-1 max-w-[260px] mx-auto h-5 bg-white rounded-md text-[9px] flex items-center justify-center text-gray-500 font-mono border border-gray-200">
                            {id === 'park-mo' ? 'app.parkmo.ph' : `${id}.com`}
                          </div>
                        </div>

                        {/* Content Preview */}
                        {imageSrc ? (
                          <div className="relative group overflow-hidden bg-gray-900">
                            <img
                              src={imageSrc}
                              alt={`${name} project interface`}
                              className="w-full h-auto max-h-[380px] object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent flex items-end p-5">
                              <div className="text-white">
                                <div className="text-[10px] uppercase tracking-wider font-bold text-blue-400 mb-1">
                                  Live Cross-Platform Application
                                </div>
                                <div className="text-sm sm:text-base font-bold">{previewTitle}</div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="p-7 text-left">
                            <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-100">
                              <span className="text-xs font-bold" style={{ color: themeColor }}>
                                {name}
                              </span>
                              <div className="flex gap-2">
                                <span className="w-6 h-1.5 bg-gray-200 rounded" />
                                <span className="w-6 h-1.5 bg-gray-200 rounded" />
                              </div>
                            </div>
                            <div className="max-w-md">
                              <span
                                className="text-[9px] uppercase tracking-wider font-bold mb-1.5 block"
                                style={{ color: themeColor }}
                              >
                                {category}
                              </span>
                              <h4 className="text-base font-extrabold mb-2" style={{ color: '#111827' }}>
                                {previewTitle}
                              </h4>
                              <p className="text-xs leading-relaxed mb-5 text-gray-500">{previewText}</p>
                              <div
                                className="h-7 w-24 rounded-lg text-[10px] font-bold text-white flex items-center justify-center shadow-sm"
                                style={{ background: buttonColor }}
                              >
                                Explore Demo
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Text Column (5 cols) */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-5`}>
                    <div>
                      {badge && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                          {badge}
                        </span>
                      )}
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        {category}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold mt-1 text-gray-900">
                        {name}
                      </h3>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-600">
                      {description}
                    </p>

                    {/* Key Highlights */}
                    {highlights && highlights.length > 0 && (
                      <ul className="space-y-2 pt-1" role="list">
                        {highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                            <svg className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center gap-3">
                      <Link
                        href="#contact"
                        className="btn-primary text-xs py-2.5 px-5"
                      >
                        Build a Similar App
                        <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      <a
                        href="https://m.me/61590794884653"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost text-xs py-2.5 px-4"
                      >
                        Inquire in Messenger
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
