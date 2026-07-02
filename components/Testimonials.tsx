import React from 'react';
import ScrollReveal from './ScrollReveal';

const REVIEWS = [
  {
    id: 'maria',
    name: 'Maria Santos',
    role: 'Owner, Café Marita',
    initials: 'MS',
    company: 'Café Marita',
    color: '#D97706',
    quote:
      'Sortech transformed our online presence. Our menu is now online, and reservation inquiries increased by 40% in the first month. The process was direct and stress-free.',
  },
  {
    id: 'roberto',
    name: 'Roberto Cruz',
    role: 'Broker, Peak Homes Realty',
    company: 'Peak Homes Realty',
    initials: 'RC',
    color: '#2563EB',
    quote:
      'The property listing platform we received is incredibly fast. Clients find listing information easily, and the email inquiries are delivered straight to my inbox.',
  },
  {
    id: 'ana',
    name: 'Ana Reyes',
    role: 'Founder, PetPals Store',
    company: 'PetPals Store',
    initials: 'AR',
    color: '#16A34A',
    quote:
      'Our e-commerce store is simple, secure, and clean. Customers can purchase online easily. Sortech delivered exactly what we needed to start selling products online.',
  },
] as const;

function StarRating(): React.JSX.Element {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="#F59E0B" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials(): React.JSX.Element {
  return (
    <section id="testimonials" className="py-20 lg:py-28 px-6" style={{ background: '#FFFFFF' }} aria-label="Client testimonials">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#2563EB' }}>Testimonials</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5" style={{ color: '#111827' }}>
            Trusted by Business Owners
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            Read how our professional web development services have helped local businesses grow their presence online.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {REVIEWS.map(({ id, name, role, company, initials, color, quote }, i) => (
            <ScrollReveal key={id} delay={i * 65} direction="up">
              <blockquote
                className="testimonial-card rounded-xl p-7 flex flex-col gap-5 h-full"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                {/* Rating */}
                <StarRating />

                {/* Quote */}
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#4B5563' }}>
                  &ldquo;{quote}&rdquo;
                </p>

                {/* Author Info */}
                <footer className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{ background: color }}
                    aria-hidden="true"
                  >
                    {initials}
                  </div>
                  <div>
                    <cite className="not-italic text-sm font-bold block" style={{ color: '#111827' }}>{name}</cite>
                    <span className="text-xs font-medium block" style={{ color: '#6B7280' }}>{role}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider block mt-0.5" style={{ color: '#9CA3AF' }}>{company}</span>
                  </div>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
