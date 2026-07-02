'use client';

import React from 'react';
import Link from 'next/link';

/* ─── CountUp Animation Component ─── */
function CountUp({ target, suffix }: { target: number; suffix: string }): React.JSX.Element {
  const [count, setCount] = React.useState(0);
  const elementRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    let observer: IntersectionObserver;
    let frameId: number;

    const startCounter = () => {
      const startTime = performance.now();
      const duration = 1200; // ms

      const updateCount = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = progress * (2 - progress); // easeOutQuad
        setCount(Math.floor(ease * target));

        if (progress < 1) {
          frameId = requestAnimationFrame(updateCount);
        } else {
          setCount(target);
        }
      };

      frameId = requestAnimationFrame(updateCount);
    };

    if (elementRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startCounter();
            observer.unobserve(entries[0].target);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(elementRef.current);
    }

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [target]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── Trust Stats ─── */
const STATS = [
  { target: 50,  suffix: '+',  label: 'Projects Delivered' },
  { target: 100, suffix: '%',  label: 'Client Satisfaction' },
  { target: 5,   suffix: '+',  label: 'Years Experience' },
  { target: 14,  suffix: 'd',  label: 'Avg. Turnaround' },
] as const;

/* ─── Hero Section ─── */
export default function HeroSection(): React.JSX.Element {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-0 px-6 overflow-hidden"
      style={{ background: '#FFFFFF' }}
      aria-label="Hero"
    >
      <div className="max-w-7xl mx-auto">
        {/* Centered layout container */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto pb-16 lg:pb-24">
          
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-xs font-semibold"
            style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#2563EB' }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#2563EB' }} aria-hidden="true" />
            Now Accepting New Clients
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.12] mb-6 max-w-3xl"
            style={{ color: '#111827' }}
          >
            Your Competitors Are{' '}
            <span style={{ color: '#2563EB' }}>Winning Online.</span>
            <br className="hidden sm:inline" />
            It&apos;s Time Your Business <span style={{ color: '#2563EB' }}>Did Too.</span>
          </h1>

          {/* Subtext */}
          <p
            className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
            style={{ color: '#4B5563' }}
          >
            We design and develop professional websites that build credibility,
            generate leads, and help your business grow 24/7 — even while you sleep.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
            <Link href="#contact" id="hero-cta-primary" className="btn-primary text-base px-7 py-3.5">
              Get a Free Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="#portfolio" id="hero-cta-secondary" className="btn-ghost text-base px-7 py-3.5">
              View Portfolio
            </Link>
          </div>

          {/* Social proof line */}
          <div className="flex items-center justify-center gap-2.5 text-sm" style={{ color: '#6B7280' }}>
            <div className="flex items-center">
              {['#D97706', '#2563EB', '#16A34A', '#DC2626'].map((c, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                  style={{
                    background: c,
                    marginLeft: i > 0 ? '-6px' : '0',
                    border: '2px solid white',
                    zIndex: 4 - i,
                  }}
                  aria-hidden="true"
                >
                  {['MS', 'RC', 'AR', 'JB'][i]}
                </div>
              ))}
            </div>
            <span className="text-sm font-medium" style={{ color: '#4B5563' }}>
              Trusted by <strong style={{ color: '#111827' }}>50+ business owners</strong>
            </span>
          </div>

        </div>

        {/* Trust Statistics bar */}
        <div
          className="border-t grid grid-cols-2 sm:grid-cols-4 gap-px"
          style={{ borderColor: '#E5E7EB', background: '#E5E7EB' }}
        >
          {STATS.map(({ target, suffix, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center text-center py-8 px-4"
              style={{ background: '#FAFAFA' }}
            >
              <div
                className="text-2xl lg:text-3xl font-extrabold tracking-tight mb-1"
                style={{ color: '#111827' }}
              >
                <CountUp target={target} suffix={suffix} />
              </div>
              <div className="text-sm" style={{ color: '#6B7280' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
