'use client';

import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const PROJECT_TYPES = [
  'Business Website',
  'E-Commerce Website',
  'Landing Page',
  'Website Redesign',
  'SEO Optimization',
  'Website Maintenance',
  'Other',
] as const;

const BUDGET_RANGES = [
  'Under $500',
  '$500 – $1,000',
  '$1,000 – $3,000',
  '$3,000 – $5,000',
  '$5,000+',
  'Not sure yet',
] as const;

type FormState = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

const INITIAL: FormState = { name: '', email: '', projectType: '', budget: '', message: '' };

export default function EarlyAccessCTA(): React.JSX.Element {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 px-6"
      style={{ background: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}
      aria-label="Get a free quote"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — copy */}
          <ScrollReveal direction="left">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-semibold"
              style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#2563EB' }}
            >
              Free Consultation
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5" style={{ color: '#111827' }}>
              Get a Free Quote
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#4B5563' }}>
              Tell us about your project and we will reply within <strong style={{ color: '#111827' }}>24 hours</strong> with a clear, fixed-price quote. No hidden charges.
            </p>

            {/* Reassurances */}
            <div className="space-y-4">
              {[
                { icon: '✓', text: 'Free initial consultation' },
                { icon: '✓', text: 'Response within 24 business hours' },
                { icon: '✓', text: 'Clear, fixed-price agreements' },
                { icon: '✓', text: 'Personal, direct support' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 font-bold"
                    style={{ background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE' }}
                  >
                    {icon}
                  </div>
                  <span className="text-sm font-semibold" style={{ color: '#4B5563' }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Industries list */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-xs uppercase tracking-widest mb-4 font-bold" style={{ color: '#9CA3AF' }}>
                Delivering websites for
              </p>
              <div className="flex flex-wrap gap-2">
                {['Local Shops', 'Law Firms', 'Restaurants', 'Clinics', 'Startups'].map((type) => (
                  <span
                    key={type}
                    className="px-3 py-1 rounded-md text-xs font-semibold"
                    style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', color: '#4B5563' }}
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal direction="right" delay={100}>
            <div
              className="rounded-xl p-7 lg:p-9"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              {!submitted ? (
                <>
                  <h3 className="text-xl font-bold mb-1" style={{ color: '#111827' }}>Request a Quote</h3>
                  <p className="text-sm text-gray-500 mb-7">Fill out the quick form below to request your website estimate.</p>

                  <form onSubmit={handleSubmit} className="space-y-4" aria-label="Quote request form" noValidate>
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="quote-name" className="text-xs font-bold" style={{ color: '#374151' }}>Your Name *</label>
                        <input
                          id="quote-name" name="name" type="text" required autoComplete="name"
                          className="form-input"
                          suppressHydrationWarning={true}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="quote-email" className="text-xs font-bold" style={{ color: '#374151' }}>Email Address *</label>
                        <input
                          id="quote-email" name="email" type="email" required autoComplete="email"
                          placeholder="name@company.com" value={form.email} onChange={handleChange}
                          className="form-input"
                          suppressHydrationWarning={true}
                        />
                      </div>
                    </div>

                    {/* Project type */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="quote-type" className="text-xs font-bold" style={{ color: '#374151' }}>What service do you need? *</label>
                      <select id="quote-type" name="projectType" required value={form.projectType} onChange={handleChange} className="form-input" suppressHydrationWarning={true}>
                        <option value="" disabled>Select service type...</option>
                        {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>

                    {/* Budget */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="quote-budget" className="text-xs font-bold" style={{ color: '#374151' }}>Approximate Budget</label>
                      <select id="quote-budget" name="budget" value={form.budget} onChange={handleChange} className="form-input" suppressHydrationWarning={true}>
                        <option value="" disabled>Select budget range...</option>
                        {BUDGET_RANGES.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="quote-message" className="text-xs font-bold" style={{ color: '#374151' }}>Project Brief</label>
                      <textarea
                        id="quote-message" name="message" rows={4}
                        placeholder="Tell us briefly about your business goals and what pages you need..."
                        value={form.message} onChange={handleChange}
                        className="form-input resize-none"
                        style={{ minHeight: 90 }}
                        suppressHydrationWarning={true}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      id="quote-submit"
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center text-base py-3 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      suppressHydrationWarning={true}
                    >
                      {loading ? 'Sending...' : 'Send Quote Request'}
                    </button>

                    <p className="text-center text-[11px]" style={{ color: '#9CA3AF' }}>
                      Free consultation · No obligations · 24h response
                    </p>
                  </form>
                </>
              ) : (
                /* Success */
                <div className="text-center py-8 flex flex-col items-center justify-center" role="status" aria-live="polite">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                    style={{ background: '#DCFCE7', border: '1px solid #86EFAC' }}
                  >
                    <svg className="w-6 h-6" style={{ color: '#15803D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#111827' }}>Request Received!</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: '#4B5563' }}>
                    Thank you, <strong style={{ color: '#111827' }}>{form.name}</strong>. We will review your project and email you at <strong style={{ color: '#2563EB' }}>{form.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => { setForm(INITIAL); setSubmitted(false); }}
                    className="btn-ghost text-xs py-2 px-5"
                  >
                    Submit another request
                  </button>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
