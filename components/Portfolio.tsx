import React from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

const PROJECTS = [
  {
    id: 'cafe-marita',
    category: 'Restaurant & Dining',
    name: 'Café Marita',
    description: 'An elegant online menu and reservation website designed to showcase local dishes, integrate booking slots, and map locations.',
    stack: ['React', 'Next.js', 'Tailwind CSS'],
    previewTitle: 'Café Marita',
    previewText: 'Fresh, local ingredients served daily. Reserve your table online.',
    themeBg: '#FAF5FF',
    themeColor: '#7C3AED',
    buttonColor: '#7C3AED',
  },
  {
    id: 'peak-homes',
    category: 'Real Estate & Properties',
    name: 'Peak Homes Realty',
    description: 'A professional listing platform for real estate agencies with searchable properties, agent contacts, and lead forms.',
    stack: ['Next.js', 'TypeScript', 'Node.js'],
    previewTitle: 'Find Your Next Home',
    previewText: 'Explore verified properties in prime locations across the city.',
    themeBg: '#EFF6FF',
    themeColor: '#1E40AF',
    buttonColor: '#2563EB',
  },
  {
    id: 'petpals',
    category: 'E-Commerce Retail',
    name: 'PetPals Store',
    description: 'A modern e-commerce storefront with catalog sorting, cart functionality, secure payment setup, and order management.',
    stack: ['Shopify', 'Liquid', 'Tailwind CSS'],
    previewTitle: 'Premium Pet Supplies',
    previewText: 'Everything your best friend needs. Get free delivery over $50.',
    themeBg: '#ECFDF5',
    themeColor: '#065F46',
    buttonColor: '#059669',
  },
  {
    id: 'legaledge',
    category: 'Professional Services',
    name: 'LegalEdge Law Firm',
    description: 'A reliable corporate profile website for an attorney team with case categories, lawyer bio pages, and booking links.',
    stack: ['Next.js', 'Framer Motion', 'Tailwind'],
    previewTitle: 'Experienced Legal Advice',
    previewText: 'Helping businesses navigate corporate law and compliance.',
    themeBg: '#FAFAFA',
    themeColor: '#111827',
    buttonColor: '#1F2937',
  },
] as const;

export default function Portfolio(): React.JSX.Element {
  return (
    <section id="portfolio" className="py-20 lg:py-28 px-6" style={{ background: '#FFFFFF' }} aria-label="Featured projects">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#2563EB' }}>Our Work</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ color: '#111827' }}>
              Featured Projects
            </h2>
          </div>
          <p className="text-base max-w-md leading-relaxed" style={{ color: '#6B7280' }}>
            A selection of modern websites we have designed and developed to help businesses establish trust and capture leads.
          </p>
        </ScrollReveal>

        <div className="space-y-16">
          {PROJECTS.map(({ id, category, name, description, stack, previewTitle, previewText, themeBg, themeColor, buttonColor }, i) => {
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal key={id} direction={isEven ? 'left' : 'right'} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Image / Mockup Column (7 cols) */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div
                    className="rounded-2xl p-6 lg:p-8"
                    style={{
                      background: themeBg,
                      border: '1px solid #E5E7EB',
                    }}
                  >
                    {/* Browser Frame */}
                    <div
                      className="rounded-xl overflow-hidden shadow-lg border"
                      style={{ background: '#FFFFFF', borderColor: '#E5E7EB' }}
                      aria-hidden="true"
                    >
                      {/* Browser Header */}
                      <div className="flex items-center gap-1.5 px-4 h-8 bg-gray-50 border-b border-gray-200">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <div className="flex-1 max-w-[200px] mx-auto h-4 bg-gray-200 rounded text-[8px] flex items-center justify-center text-gray-500 font-mono">
                          {id}.com
                        </div>
                      </div>
                      {/* Browser Content preview */}
                      <div className="p-6 text-left">
                        <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-100">
                          <span className="text-[10px] font-bold" style={{ color: themeColor }}>{name}</span>
                          <div className="flex gap-2">
                            <span className="w-5 h-1.5 bg-gray-200 rounded" />
                            <span className="w-5 h-1.5 bg-gray-200 rounded" />
                          </div>
                        </div>
                        <div className="max-w-md">
                          <span className="text-[8px] uppercase tracking-wider font-bold mb-1 block" style={{ color: themeColor }}>{category}</span>
                          <h4 className="text-sm font-extrabold mb-2" style={{ color: '#111827' }}>{previewTitle}</h4>
                          <p className="text-[11px] leading-relaxed mb-4 text-gray-500">{previewText}</p>
                          <div className="h-6 w-20 rounded text-[9px] font-bold text-white flex items-center justify-center" style={{ background: buttonColor }}>
                            Get Started
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Column (5 cols) */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-5`}>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#6B7280' }}>
                      {category}
                    </span>
                    <h3 className="text-2xl font-bold mt-1" style={{ color: '#111827' }}>
                      {name}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {stack.map((tech) => (
                      <span key={tech} className="text-xs font-medium px-2.5 py-1 rounded-md" style={{ background: '#F3F4F6', color: '#4B5563', border: '1px solid #E5E7EB' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2">
                    <Link href="#contact" className="btn-ghost inline-flex text-sm py-2.5 px-5">
                      View Project
                    </Link>
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
