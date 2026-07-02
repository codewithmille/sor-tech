import React from 'react';
import ScrollReveal from './ScrollReveal';

const CLIENTS = [
  { name: 'TechVentures PH', abbr: 'TV', color: '#2563EB' },
  { name: 'MediCore Clinic',  abbr: 'MC', color: '#0891b2' },
  { name: 'LegalEdge Firm',   abbr: 'LE', color: '#7c3aed' },
  { name: 'GrowthLab Co.',    abbr: 'GL', color: '#059669' },
  { name: 'RetailMax PH',     abbr: 'RM', color: '#d97706' },
  { name: 'HomeVision Realty',abbr: 'HV', color: '#dc2626' },
  { name: 'StartupX Hub',     abbr: 'SX', color: '#2563EB' },
  { name: 'FoodCraft Bistro', abbr: 'FC', color: '#9d174d' },
] as const;

export default function TrustedBy(): React.JSX.Element {
  return (
    <section
      id="trusted-by"
      className="py-12 px-6"
      style={{ background: '#F9FAFB', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}
      aria-label="Trusted by clients"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.16em] mb-8" style={{ color: '#9CA3AF' }}>
            Trusted by Growing Businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {CLIENTS.map(({ name, abbr, color }) => (
              <div key={name} className="client-logo flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                  style={{ background: color }}
                  aria-hidden="true"
                >
                  {abbr}
                </div>
                <span className="text-sm font-semibold whitespace-nowrap" style={{ color: '#4B5563' }}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
