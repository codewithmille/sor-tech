'use client';

import { useState, useCallback } from 'react';
import ScrollReveal from './ScrollReveal';

/* ─── Slider ─── */
interface SliderProps {
  id: string;
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  accentColor: string;
}

function ControlSlider({ id, label, unit, min, max, step, defaultValue, accentColor }: SliderProps): React.JSX.Element {
  const [value, setValue] = useState(defaultValue);
  const pct = ((value - min) / (max - min)) * 100;
  const display = step < 1 ? value.toFixed(1) : Math.round(value).toString();

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setValue(parseFloat(e.target.value)), []);

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{label}</label>
        <span
          className="text-xs font-mono font-bold px-2 py-0.5 rounded-md"
          style={{ color: accentColor, background: `${accentColor}12`, border: `1px solid ${accentColor}20` }}
        >
          {display}{unit}
        </span>
      </div>
      <div className="relative h-5 flex items-center">
        <div className="absolute w-full h-1 rounded-full" style={{ background: 'rgba(148,163,184,0.1)' }} />
        <div
          className="absolute h-1 rounded-full"
          style={{ width: `${pct}%`, background: `linear-gradient(90deg,${accentColor}80,${accentColor})`, boxShadow: `0 0 6px ${accentColor}50` }}
          aria-hidden="true"
        />
        <input
          type="range" id={id} min={min} max={max} step={step} value={value} onChange={onChange}
          className="absolute w-full opacity-0 h-5 cursor-pointer z-10"
          aria-valuenow={value} aria-valuemin={min} aria-valuemax={max} aria-label={`${label}: ${display}${unit}`}
        />
        <div
          className="absolute w-3.5 h-3.5 rounded-full pointer-events-none"
          style={{ left: `calc(${pct}% - 7px)`, background: `radial-gradient(circle, white 30%, ${accentColor} 100%)`, boxShadow: `0 0 8px ${accentColor}` }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

/* ─── Feature Badge ─── */
interface FeatureBadgeProps { label: string; icon: React.ReactNode; color: string; }
function FeatureBadge({ label, icon, color }: FeatureBadgeProps): React.JSX.Element {
  return (
    <div
      className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold"
      style={{ background: `${color}08`, border: `1px solid ${color}25`, color }}
    >
      <span className="w-4 h-4 shrink-0" aria-hidden="true">{icon}</span>
      {label}
    </div>
  );
}

/* ─── Milestone Row ─── */
interface MilestoneProps { label: string; date: string; status: 'done' | 'active' | 'pending'; }
function Milestone({ label, date, status }: MilestoneProps): React.JSX.Element {
  const cfg = {
    done:    { color: '#22c55e', text: 'Done',        dot: true },
    active:  { color: '#60A5FA', text: 'In Progress', dot: true },
    pending: { color: '#475569', text: 'Upcoming',    dot: false },
  }[status];
  return (
    <div className="flex items-center gap-3 py-2.5 border-b last:border-0" style={{ borderColor: 'var(--border)' }}>
      <div className="relative shrink-0">
        <div className="w-2 h-2 rounded-full" style={{ background: cfg.color }} />
        {cfg.dot && <div className="absolute inset-0 rounded-full animate-ping" style={{ background: cfg.color, opacity: 0.4 }} />}
      </div>
      <span className="text-sm flex-1" style={{ color: 'var(--text-muted)' }}>{label}</span>
      <span className="text-xs font-mono" style={{ color: 'var(--text-subtle)' }}>{date}</span>
      <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ color: cfg.color, background: `${cfg.color}12` }}>{cfg.text}</span>
    </div>
  );
}

const PORTAL_BADGES = [
  { label: 'Live Progress', color: '#60A5FA', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  { label: 'File Sharing', color: '#1D4ED8', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> },
  { label: 'Feedback', color: '#60A5FA', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> },
  { label: 'Timeline', color: '#60A5FA', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
  { label: 'Approval', color: '#22c55e', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4"><polyline points="20 6 9 17 4 12"/></svg> },
];

const PROJECTS = [
  { name: 'Café Marita — Redesign',    client: 'Food & Beverage',  progress: 72 },
  { name: 'LegalEdge — Client Portal', client: 'Legal Services',   progress: 45 },
  { name: 'PetPals — E-Commerce',      client: 'Retail / Pets',    progress: 91 },
] as const;

export default function AppInterfaceMockup(): React.JSX.Element {
  const [active, setActive] = useState(0);

  return (
    <section
      id="our-work"
      className="relative py-24 lg:py-32 px-6 overflow-hidden"
      aria-label="Client project portal"
    >
      <div className="section-divider max-w-7xl mx-auto mb-0" aria-hidden="true" />

      <div className="max-w-7xl mx-auto pt-24">
        {/* Header */}
        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-14 lg:mb-20">
          <div>
            <div className="badge badge-cyan mb-5">Client Portal</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight" style={{ color: 'var(--text-white)' }}>
              Your Project,{' '}
              <span className="gradient-text-blue">Always Visible</span>
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              Track progress, review updates, leave feedback, and stay informed — all in one place.
              No endless email chains. Just clarity.
            </p>
            {/* Feature badges */}
            <div className="flex flex-wrap gap-2">
              {PORTAL_BADGES.map(({ label, color, icon }) => (
                <FeatureBadge key={label} label={label} color={color} icon={icon} />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Mockup */}
        <ScrollReveal direction="up" delay={100}>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(29,78,216,0.2)',
              boxShadow: '0 0 80px rgba(29,78,216,0.06), 0 48px 100px rgba(0,0,0,0.5)',
            }}
          >
            {/* Chrome bar */}
            <div
              className="flex items-center gap-3 px-5 py-3.5"
              style={{ background: '#07111F', borderBottom: '1px solid rgba(148,163,184,0.08)' }}
            >
              <div className="flex gap-1.5" aria-hidden="true">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(239,68,68,0.6)' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(245,158,11,0.6)' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(34,197,94,0.6)' }} />
              </div>
              <div className="flex-1 max-w-[240px] mx-auto rounded-md px-3 flex items-center gap-1.5 h-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <svg className="w-3 h-3 shrink-0" style={{ color: '#4ade80' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                <span className="text-xs font-mono truncate" style={{ color: 'var(--text-subtle)' }}>portal.sortech.io/projects</span>
              </div>
            </div>

            {/* App layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[480px]" style={{ background: 'var(--bg-card)' }}>

              {/* Sidebar */}
              <div
                className="lg:col-span-1 flex flex-col p-5 gap-4"
                style={{ borderRight: '1px solid rgba(148,163,184,0.08)' }}
                role="complementary" aria-label="Project list"
              >
                <div className="mb-1">
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: 'var(--text-subtle)' }}>Active Projects</p>
                  <p className="text-base font-bold" style={{ color: 'var(--text-white)' }}>3 In Progress</p>
                </div>

                {/* Project tabs */}
                <div className="space-y-1.5" role="list">
                  {PROJECTS.map((proj, i) => (
                    <button
                      key={proj.name}
                      id={`portal-tab-${i}`}
                      onClick={() => setActive(i)}
                      aria-pressed={active === i}
                      className="w-full text-left px-3.5 py-3 rounded-xl transition-all duration-200"
                      style={{
                        background: active === i ? 'rgba(37,99,235,0.12)' : 'transparent',
                        border: active === i ? '1px solid rgba(37,99,235,0.25)' : '1px solid transparent',
                      }}
                    >
                      <p className="text-xs font-semibold truncate mb-1" style={{ color: active === i ? '#3b82f6' : 'var(--text-white)' }}>{proj.name}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(148,163,184,0.1)' }}>
                          <div className="h-full rounded-full" style={{ width: `${proj.progress}%`, background: 'linear-gradient(90deg,#1D4ED8,#60A5FA)' }} />
                        </div>
                        <span className="text-[10px] font-mono shrink-0" style={{ color: 'var(--text-subtle)' }}>{proj.progress}%</span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex-1" />

                {/* Sliders */}
                <div className="space-y-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <ControlSlider id="slider-budget" label="Revision Budget Used" unit="%" min={0} max={100} step={1} defaultValue={35} accentColor="#60A5FA" />
                  <ControlSlider id="slider-progress" label="Overall Progress" unit="%" min={0} max={100} step={1} defaultValue={65} accentColor="#1D4ED8" />
                </div>
              </div>

              {/* Main panel */}
              <div className="lg:col-span-2 p-6 flex flex-col gap-5" role="main" aria-label="Project detail">
                {/* Site preview */}
                <div
                  className="rounded-xl overflow-hidden flex flex-col"
                  style={{ height: 220, border: '1px solid rgba(37,99,235,0.15)', background: 'rgba(7,17,31,0.6)' }}
                  role="img" aria-label="Website preview"
                >
                  {/* Mini nav inside preview */}
                  <div className="flex items-center gap-2 px-3 py-2" style={{ background: 'rgba(0,0,0,0.3)', borderBottom: '1px solid rgba(255,255,255,0.04)' }} aria-hidden="true">
                    <div className="w-12 h-2 rounded-full" style={{ background: 'rgba(37,99,235,0.4)' }} />
                    <div className="flex-1" />
                    {[1,2,3].map(i => <div key={i} className="w-8 h-1.5 rounded-full" style={{ background: 'rgba(148,163,184,0.15)' }} />)}
                    <div className="w-14 h-4 rounded-lg" style={{ background: 'rgba(37,99,235,0.3)', border: '1px solid rgba(37,99,235,0.25)' }} />
                  </div>
                  {/* Wireframe */}
                  <div className="flex-1 p-4 grid grid-cols-5 gap-3" aria-hidden="true">
                    <div className="col-span-3 flex flex-col gap-2 justify-center">
                      <div className="w-3/4 h-5 rounded-lg" style={{ background: 'rgba(248,250,252,0.18)' }} />
                      <div className="w-2/3 h-3 rounded-full" style={{ background: 'rgba(148,163,184,0.12)' }} />
                      <div className="w-1/2 h-3 rounded-full" style={{ background: 'rgba(148,163,184,0.08)' }} />
                      <div className="flex gap-2 mt-2">
                        <div className="w-16 h-6 rounded-lg" style={{ background: 'rgba(37,99,235,0.45)' }} />
                        <div className="w-12 h-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }} />
                      </div>
                    </div>
                    <div className="col-span-2 rounded-xl" style={{ background: 'linear-gradient(135deg,rgba(29,78,216,0.12),rgba(96,165,250,0.06))', border: '1px solid rgba(29,78,216,0.15)' }}>
                      <div className="h-full flex items-center justify-center">
                        <svg className="w-8 h-8" style={{ color: 'rgba(37,99,235,0.4)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5}/><circle cx="8.5" cy="8.5" r="1.5" strokeWidth={1.5}/><polyline points="21 15 16 10 5 21" strokeWidth={1.5}/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Milestones */}
                <div className="rounded-xl p-4 flex-1" style={{ background: 'rgba(7,17,31,0.5)', border: '1px solid var(--border)' }} aria-label="Project milestones">
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--text-subtle)' }}>Milestones — {PROJECTS[active].name.split('—')[0].trim()}</p>
                  <Milestone label="Discovery & Brief"       date="Apr 2"    status="done" />
                  <Milestone label="Design Mockups"          date="Apr 12"   status="done" />
                  <Milestone label="Development Build"       date="Apr 28"   status="active" />
                  <Milestone label="Client Review & Launch"  date="May 5"    status="pending" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
