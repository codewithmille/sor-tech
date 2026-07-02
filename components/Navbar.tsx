'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Services',  href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process',   href: '#how-it-works' },
  { label: 'Pricing',   href: '#pricing' },
  { label: 'Contact',   href: '#contact' },
] as const;

export default function Navbar(): React.JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-200"
      style={{
        background: '#ffffff',
        borderBottom: '1px solid #E5E7EB',
        boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.06)' : 'none',
      }}
      role="banner"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" aria-label="Sortech — Home" className="flex items-center gap-2.5 shrink-0">
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

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-150"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile menu */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            id="nav-cta"
            className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5"
          >
            Get a Free Quote
          </Link>

          {/* Hamburger */}
          <button
            id="mobile-menu-btn"
            className="md:hidden p-2 rounded-lg"
            style={{ border: '1px solid #E5E7EB', color: '#374151' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t py-4 space-y-1"
          style={{ borderColor: '#E5E7EB' }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
              style={{ color: '#4B5563' }}
            >
              {label}
            </Link>
          ))}
          <div className="pt-2 px-4">
            <Link href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary w-full justify-center text-sm py-3">
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
