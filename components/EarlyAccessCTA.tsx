'use client';

import React, { useState, useEffect } from 'react';
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
  'Under ₱15,000',
  '₱15,000 – ₱25,000',
  '₱25,000 – ₱50,000',
  '₱50,000 – ₱100,000',
  '₱100,000+',
  'Not sure yet',
] as const;

const AUDIT_FOCUS_AREAS = [
  'Full Teardown (Speed, SEO & Conversions)',
  'Google Ranking & SEO Audit',
  'Mobile Experience & Speed Score',
  'Why Competitors Are Beating Me',
] as const;

const AUDIT_FORMATS = [
  'Recorded 5-Min Video Breakdown (Watch anytime)',
  'Free 15-Minute Google Meet Strategy Call',
  'Direct Actionable PDF Report',
] as const;

type Mode = 'audit' | 'quote';

type FormState = {
  name: string;
  email: string;
  // Audit fields
  websiteUrl: string;
  auditFocus: string;
  auditFormat: string;
  // Quote fields
  projectType: string;
  budget: string;
  message: string;
};

const INITIAL: FormState = {
  name: '',
  email: '',
  websiteUrl: '',
  auditFocus: AUDIT_FOCUS_AREAS[0],
  auditFormat: AUDIT_FORMATS[0],
  projectType: '',
  budget: '',
  message: '',
};

export default function EarlyAccessCTA(): React.JSX.Element {
  const [mode, setMode] = useState<Mode>('audit');
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== 'undefined' && window.location.hash === '#audit') {
        setMode('audit');
      } else if (typeof window !== 'undefined' && window.location.hash === '#quote') {
        setMode('quote');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 850);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 px-6 scroll-mt-16"
      style={{ background: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}
      aria-label="Free website audit and project quote"
    >
      <div id="audit" className="scroll-mt-24" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column — Value & Proof */}
          <ScrollReveal direction="left">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-semibold"
              style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#2563EB' }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              100% Free · No Obligation
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5"
              style={{ color: '#111827' }}
            >
              {mode === 'audit' ? (
                <>
                  Find Out Why Your Site <br />
                  <span style={{ color: '#2563EB' }}>Isn&apos;t Winning Leads.</span>
                </>
              ) : (
                <>
                  Let&apos;s Build a Website <br />
                  <span style={{ color: '#2563EB' }}>That Drives Real Growth.</span>
                </>
              )}
            </h2>

            <p className="text-lg leading-relaxed mb-8" style={{ color: '#4B5563' }}>
              {mode === 'audit' ? (
                <>
                  Already have a website or Facebook page? In 5 minutes, we&apos;ll audit your speed,
                  Google ranking, and conversion bottlenecks. You get a personalized video review
                  with actionable fixes—<strong>100% free, no sales pitch.</strong>
                </>
              ) : (
                <>
                  Starting from scratch or ready for a full redesign? Tell us your goals and we&apos;ll
                  provide a transparent fixed-price quote and launch roadmap within{' '}
                  <strong style={{ color: '#111827' }}>24 business hours.</strong>
                </>
              )}
            </p>

            {/* Reassurances */}
            <div className="space-y-4">
              {(mode === 'audit'
                ? [
                    { icon: '✓', text: 'Personalized 5-minute video teardown of your page' },
                    { icon: '✓', text: 'Google PageSpeed score & mobile responsiveness check' },
                    { icon: '✓', text: '3 quick wins to increase customer inquiries immediately' },
                    { icon: '✓', text: 'Zero sales pressure — keep the actionable tips forever' },
                  ]
                : [
                    { icon: '✓', text: 'Fixed-price quote with clear milestone deliverables' },
                    { icon: '✓', text: 'Guaranteed 7–14 day launch turnaround' },
                    { icon: '✓', text: '50% to start, 50% only upon your final approval' },
                    { icon: '✓', text: 'Direct communication with the actual developers' },
                  ]
              ).map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 font-bold"
                    style={{ background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE' }}
                  >
                    {icon}
                  </div>
                  <span className="text-sm font-semibold" style={{ color: '#4B5563' }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Industries list */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-xs uppercase tracking-widest mb-4 font-bold" style={{ color: '#9CA3AF' }}>
                Trusted by local business owners in
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Restaurants & Cafés',
                  'Clinics & Healthcare',
                  'Real Estate Brokers',
                  'E-Commerce Retail',
                  'Law & Consulting',
                ].map((type) => (
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

          {/* Right Column — Interactive Form with Segmented Tabs */}
          <ScrollReveal direction="right" delay={100}>
            <div
              className="rounded-2xl p-6 sm:p-8 lg:p-9"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                boxShadow: '0 10px 30px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
              }}
            >
              {/* Segmented Control / Tab Switcher */}
              <div
                className="grid grid-cols-2 p-1 rounded-xl mb-6 bg-gray-100 border border-gray-200"
                role="tablist"
                aria-label="Form inquiry type"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={mode === 'audit'}
                  onClick={() => {
                    setMode('audit');
                    setSubmitted(false);
                  }}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                    mode === 'audit'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <span>Free 5-Min Audit</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700">
                    Zero Risk
                  </span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={mode === 'quote'}
                  onClick={() => {
                    setMode('quote');
                    setSubmitted(false);
                  }}
                  className={`flex items-center justify-center py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                    mode === 'quote'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <span>New Website Quote</span>
                </button>
              </div>

              {!submitted ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-1" style={{ color: '#111827' }}>
                      {mode === 'audit'
                        ? 'Request Your Free Website & SEO Audit'
                        : 'Request a Fixed-Price Project Quote'}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {mode === 'audit'
                        ? 'We will analyze your existing site or social presence and deliver your personalized review in 24 hours.'
                        : 'Tell us what you want to build and get a clear, itemized proposal within 24 hours.'}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4" aria-label="Inquiry Form" noValidate>
                    {/* Common: Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="inquiry-name" className="text-xs font-bold" style={{ color: '#374151' }}>
                          Your Name *
                        </label>
                        <input
                          id="inquiry-name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="e.g. Maria Santos"
                          value={form.name}
                          onChange={handleChange}
                          className="form-input"
                          suppressHydrationWarning={true}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="inquiry-email" className="text-xs font-bold" style={{ color: '#374151' }}>
                          Email Address *
                        </label>
                        <input
                          id="inquiry-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="maria@company.com"
                          value={form.email}
                          onChange={handleChange}
                          className="form-input"
                          suppressHydrationWarning={true}
                        />
                      </div>
                    </div>

                    {/* Mode-Specific Fields */}
                    {mode === 'audit' ? (
                      <>
                        {/* Website or Social URL */}
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="inquiry-url" className="text-xs font-bold" style={{ color: '#374151' }}>
                            Your Website or Facebook Page URL *
                          </label>
                          <input
                            id="inquiry-url"
                            name="websiteUrl"
                            type="text"
                            required
                            placeholder="e.g. yourbusiness.com or facebook.com/yourbrand"
                            value={form.websiteUrl}
                            onChange={handleChange}
                            className="form-input"
                            suppressHydrationWarning={true}
                          />
                        </div>

                        {/* Audit Focus Area */}
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="inquiry-focus" className="text-xs font-bold" style={{ color: '#374151' }}>
                            What is your biggest concern?
                          </label>
                          <select
                            id="inquiry-focus"
                            name="auditFocus"
                            value={form.auditFocus}
                            onChange={handleChange}
                            className="form-input"
                            suppressHydrationWarning={true}
                          >
                            {AUDIT_FOCUS_AREAS.map((area) => (
                              <option key={area} value={area}>
                                {area}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Preferred Format */}
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="inquiry-format" className="text-xs font-bold" style={{ color: '#374151' }}>
                            How would you like to receive your audit?
                          </label>
                          <select
                            id="inquiry-format"
                            name="auditFormat"
                            value={form.auditFormat}
                            onChange={handleChange}
                            className="form-input"
                            suppressHydrationWarning={true}
                          >
                            {AUDIT_FORMATS.map((fmt) => (
                              <option key={fmt} value={fmt}>
                                {fmt}
                              </option>
                            ))}
                          </select>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Project Type */}
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="inquiry-type" className="text-xs font-bold" style={{ color: '#374151' }}>
                            What service do you need? *
                          </label>
                          <select
                            id="inquiry-type"
                            name="projectType"
                            required
                            value={form.projectType}
                            onChange={handleChange}
                            className="form-input"
                            suppressHydrationWarning={true}
                          >
                            <option value="" disabled>
                              Select service type...
                            </option>
                            {PROJECT_TYPES.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Budget */}
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="inquiry-budget" className="text-xs font-bold" style={{ color: '#374151' }}>
                            Estimated Budget
                          </label>
                          <select
                            id="inquiry-budget"
                            name="budget"
                            value={form.budget}
                            onChange={handleChange}
                            className="form-input"
                            suppressHydrationWarning={true}
                          >
                            <option value="" disabled>
                              Select budget range...
                            </option>
                            {BUDGET_RANGES.map((b) => (
                              <option key={b} value={b}>
                                {b}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Project Brief */}
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="inquiry-message" className="text-xs font-bold" style={{ color: '#374151' }}>
                            Tell us about your project
                          </label>
                          <textarea
                            id="inquiry-message"
                            name="message"
                            rows={3}
                            placeholder="Briefly describe what your business does and what you'd like your website to achieve..."
                            value={form.message}
                            onChange={handleChange}
                            className="form-input resize-none"
                            style={{ minHeight: 80 }}
                            suppressHydrationWarning={true}
                          />
                        </div>
                      </>
                    )}

                    {/* Submit Button */}
                    <button
                      id="inquiry-submit"
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center text-base py-3.5 mt-3 disabled:opacity-70 disabled:cursor-not-allowed"
                      suppressHydrationWarning={true}
                    >
                      {loading ? (
                        'Processing...'
                      ) : mode === 'audit' ? (
                        <>
                          Claim My Free 5-Min Audit
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      ) : (
                        <>
                          Send My Quote Request
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-center text-[11px]" style={{ color: '#9CA3AF' }}>
                      {mode === 'audit'
                        ? '100% Free · No sales pitch · Video & actionable audit delivered in 24h'
                        : 'Free consultation · Transparent fixed pricing · 24h response time'}
                    </p>
                  </form>
                </>
              ) : (
                /* Success State */
                <div className="text-center py-10 flex flex-col items-center justify-center" role="status" aria-live="polite">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                    style={{ background: '#DCFCE7', border: '1px solid #86EFAC' }}
                  >
                    <svg className="w-7 h-7" style={{ color: '#15803D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#111827' }}>
                    {mode === 'audit' ? 'Audit Request Received! 🎉' : 'Quote Request Received! 🚀'}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: '#4B5563' }}>
                    {mode === 'audit' ? (
                      <>
                        Thank you, <strong style={{ color: '#111827' }}>{form.name || 'there'}</strong>!
                        We are queuing your teardown and will email your personalized review to{' '}
                        <strong style={{ color: '#2563EB' }}>{form.email}</strong> within 24 hours.
                      </>
                    ) : (
                      <>
                        Thank you, <strong style={{ color: '#111827' }}>{form.name || 'there'}</strong>!
                        We will review your requirements and send your fixed-price proposal to{' '}
                        <strong style={{ color: '#2563EB' }}>{form.email}</strong> within 24 hours.
                      </>
                    )}
                  </p>
                  <button
                    onClick={() => {
                      setForm(INITIAL);
                      setSubmitted(false);
                    }}
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
