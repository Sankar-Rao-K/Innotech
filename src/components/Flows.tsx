import React, { useEffect, useRef, useState } from 'react';

/* ---------- hooks ---------- */
const reducedMotion = () => typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** True once the element has scrolled into view (one-shot). Animations start only then, never on page load. */
export function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion() || typeof IntersectionObserver === 'undefined') { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

/** 0..1 progress of an element travelling through the viewport (scroll-linked). */
export function useScrollProgress<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const calc = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      setP(Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.25))));
    };
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(calc); };
    calc();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', on); window.removeEventListener('resize', on); };
  }, []);
  return [ref, p] as const;
}

function useCycle(count: number, running: boolean, ms: number) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!running || count < 2) return;
    const t = setInterval(() => setI(v => (v + 1) % count), ms);
    return () => clearInterval(t);
  }, [running, count, ms]);
  return [i, setI] as const;
}

const PALETTE = ['#1E88E5', '#00ACC1', '#2E9E4F', '#F5A300', '#F2622A', '#D7263D', '#6A3FB5', '#3B2A8C', '#0B3C8C'];
const chevron = (first: boolean, notch = 14) =>
  `polygon(0 0, calc(100% - ${notch}px) 0, 100% 50%, calc(100% - ${notch}px) 100%, 0 100%${first ? '' : `, ${notch}px 50%`})`;

/* ---------- count-up number (founder stats) ---------- */
export const CountUp: React.FC<{ value: string; className?: string }> = ({ value, className = '' }) => {
  const [ref, seen] = useInView<HTMLSpanElement>(0.5);
  const m = value.match(/^(\D*)(\d+)(.*)$/);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen || !m) return;
    const target = parseInt(m[2], 10);
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / 1400);
      setN(Math.round(target * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen]);
  if (!m) return <span className={className}>{value}</span>;
  return <span ref={ref} className={className}>{m[1]}{seen ? n : 0}{m[3]}</span>;
};

/* ---------- HOME 1: rail that draws itself with nodes popping in ---------- */
export const FlowTrack: React.FC<{ items: string[] }> = ({ items }) => {
  const [ref, seen] = useInView<HTMLDivElement>(0.35);
  const n = items.length;
  const side = `calc(50% / ${n})`;
  return (
    <div ref={ref} className="relative">
      <div className="hidden md:block absolute top-6 h-1 rounded bg-blue-100" style={{ left: side, right: side }} />
      <div className="hidden md:block absolute top-6 h-1 rounded bg-gradient-to-r from-blue-500 via-emerald-400 to-violet-500 origin-left" style={{ left: side, right: side, transform: seen ? 'scaleX(1)' : 'scaleX(0)', transition: `transform ${n * 260}ms ease-out` }}>
        {seen && <span className="absolute -top-[7px] w-[18px] h-[18px] -ml-[9px] rounded-full bg-white border-[3px] border-blue-600 shadow anim-travel" style={{ animationDelay: `${n * 260}ms` }} />}
      </div>
      <div className="md:hidden absolute left-6 -ml-0.5 top-6 bottom-6 w-1 rounded bg-blue-100" />
      <div className="md:hidden absolute left-6 -ml-0.5 top-6 bottom-6 w-1 rounded bg-gradient-to-b from-blue-500 to-violet-500 origin-top" style={{ transform: seen ? 'scaleY(1)' : 'scaleY(0)', transition: `transform ${n * 260}ms ease-out` }} />
      <ol className="relative grid grid-cols-1 gap-5 md:gap-2 md:[grid-template-columns:repeat(var(--n),minmax(0,1fr))]" style={{ ['--n' as string]: n } as React.CSSProperties}>
        {items.map((t, i) => (
          <li key={t} className="flex md:flex-col items-center gap-4 md:gap-3 md:text-center">
            <span className={`z-10 w-12 h-12 shrink-0 rounded-full bg-white border-4 flex items-center justify-center text-sm font-black shadow-md transition-all duration-500 ${seen ? 'border-blue-500 text-blue-700 scale-100 opacity-100' : 'border-slate-200 text-slate-300 scale-50 opacity-0'}`} style={{ transitionDelay: `${i * 260}ms` }}>{i + 1}</span>
            <span className={`text-[13px] font-bold leading-snug text-[#123B5D] transition-all duration-500 ${seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: `${i * 260 + 200}ms` }}>{t}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

/* ---------- HOME 2: interactive arrow stages with detail panel ---------- */
export interface Stage { stage: string; area: string; color: string; detail: string }
export const ChevronStages: React.FC<{ stages: Stage[] }> = ({ stages }) => {
  const [ref, seen] = useInView<HTMLDivElement>(0.3);
  const [auto, setAuto] = useState(true);
  const [active, setActive] = useCycle(stages.length, seen && auto, 3200);
  const pick = (i: number) => { setAuto(false); setActive(i); };
  const s = stages[active];
  return (
    <div ref={ref}>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-1 md:gap-0" role="tablist" aria-label="Enterprise commercialization stages">
        {stages.map((st, i) => (
          <div key={st.stage} className={i ? 'md:-ml-1.5' : ''} style={{ opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateX(-28px)', transition: 'all .7s cubic-bezier(.16,1,.3,1)', transitionDelay: `${i * 110}ms` }}>
            <button role="tab" aria-selected={i === active} aria-label={`${st.stage} – ${st.area}`} onClick={() => pick(i)} onMouseEnter={() => pick(i)} onFocus={() => pick(i)} className="w-full text-center focus:outline-none group">
              <span className={`flex h-14 sm:h-16 items-center justify-center text-white text-[10px] sm:text-xs font-extrabold tracking-wide transition-all duration-300 ${i === active ? 'scale-105 -translate-y-1 drop-shadow-lg' : 'opacity-80 group-hover:opacity-100'}`} style={{ background: st.color, clipPath: chevron(i === 0) }}>{st.stage}</span>
              <span className={`mt-1.5 block text-[11px] font-semibold transition-colors ${i === active ? 'text-[#123B5D]' : 'text-slate-500'}`}>{st.area}</span>
              <span className="mx-auto mt-1 block h-1 rounded-full transition-all duration-500" style={{ width: i === active ? '70%' : '0%', background: st.color }} />
            </button>
          </div>
        ))}
      </div>
      <div key={active} className="anim-fadein mt-5 bg-white border border-[#D7EAF7] rounded-xl p-5 flex gap-4 items-start" style={{ borderLeft: `6px solid ${s.color}` }} role="tabpanel">
        <span className="text-3xl font-black leading-none" style={{ color: s.color }}>{String(active + 1).padStart(2, '0')}</span>
        <div>
          <h3 className="font-extrabold text-[#123B5D] text-lg">{s.stage} <span className="text-sm font-semibold text-slate-500">· {s.area}</span></h3>
          <p className="text-sm mt-1 text-[#536B7D]">{s.detail}</p>
        </div>
      </div>
    </div>
  );
};

/* ---------- ABOUT 1: wavy relay path with a baton ---------- */
export const RelayFlow: React.FC<{ items: string[] }> = ({ items }) => {
  const [ref, seen] = useInView<HTMLDivElement>(0.4);
  const n = items.length;
  const colors = ['#1E88E5', '#00ACC1', '#2E9E4F', '#6A5ACD', '#8E5BD6'];
  const d = 'M0 40 L100 40 C200 40 200 100 300 100 C400 100 400 40 500 40 C600 40 600 100 700 100 C800 100 800 40 900 40 L1000 40';
  return (
    <div ref={ref}>
      <div className="hidden md:block relative h-[150px]">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 140" preserveAspectRatio="none" aria-hidden="true">
          <defs><linearGradient id="relayg" x1="0" x2="1"><stop offset="0" stopColor="#1E88E5" /><stop offset=".5" stopColor="#2E9E4F" /><stop offset="1" stopColor="#8E5BD6" /></linearGradient></defs>
          <path d={d} fill="none" stroke="#D7EAF7" strokeWidth="3" strokeDasharray="6 8" vectorEffect="non-scaling-stroke" />
          <path d={d} pathLength={1} fill="none" stroke="url(#relayg)" strokeWidth="4" strokeLinecap="round" strokeDasharray="1" strokeDashoffset={seen ? 0 : 1} vectorEffect="non-scaling-stroke" style={{ transition: 'stroke-dashoffset 2.6s ease-in-out' }} />
        </svg>
        {items.map((t, i) => (
          <div key={t} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${((i + 0.5) / n) * 100}%`, top: `${(i % 2 ? 100 : 40) / 140 * 100}%` }}>
            <span className={`block rounded-xl px-5 py-3 text-sm font-extrabold text-white shadow-lg transition-all duration-500 ${seen ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} style={{ background: colors[i % colors.length], transitionDelay: `${i * 480}ms`, transitionTimingFunction: 'cubic-bezier(.34,1.56,.64,1)' }}>{t}</span>
          </div>
        ))}
      </div>
      <ol className="md:hidden flex flex-col items-center">
        {items.map((t, i) => (
          <React.Fragment key={t}>
            <li className={`w-full max-w-xs text-center rounded-xl py-3 text-sm font-extrabold text-white shadow transition-all duration-500 ${seen ? 'translate-x-0 opacity-100' : (i % 2 ? 'translate-x-10' : '-translate-x-10') + ' opacity-0'}`} style={{ background: colors[i % colors.length], transitionDelay: `${i * 300}ms` }}>{t}</li>
            {i < n - 1 && <span className={`h-6 w-0.5 border-l-2 border-dashed border-blue-300 transition-opacity duration-500 ${seen ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${i * 300 + 150}ms` }} />}
          </React.Fragment>
        ))}
      </ol>
    </div>
  );
};

/* ---------- ABOUT 2: cards whose top bar fills as they arrive ---------- */
export const StepBars: React.FC<{ children: React.ReactNode[] }> = ({ children }) => {
  const [ref, seen] = useInView<HTMLDivElement>(0.2);
  const colors = ['#1E88E5', '#00ACC1', '#2E9E4F', '#6A5ACD', '#8E5BD6'];
  return (
    <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {React.Children.map(children, (c, i) => (
        <div className="relative rounded-lg overflow-hidden transition-all duration-700" style={{ opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(28px)', transitionDelay: `${i * 160}ms` }}>
          <div className="absolute top-0 left-0 h-1 z-10 transition-all duration-1000" style={{ width: seen ? '100%' : '0%', background: colors[i % colors.length], transitionDelay: `${i * 160 + 300}ms` }} />
          <div className="absolute top-3 right-3 z-10 text-xs font-black text-white bg-black/40 rounded px-1.5 py-0.5">0{i + 1}</div>
          {c}
        </div>
      ))}
    </div>
  );
};

/* ---------- FOUNDER 1: scroll-linked career timeline ---------- */
export const CareerTimeline: React.FC<{ items: { label: string; note: string }[] }> = ({ items }) => {
  const [ref, p] = useScrollProgress<HTMLDivElement>();
  const n = items.length;
  const fill = Math.min(1, p * 1.25);
  const lit = (i: number) => fill >= (i + 0.5) / n - 0.02;
  return (
    <div ref={ref} className="relative">
      {/* desktop */}
      <div className="hidden md:block relative pt-2 pb-2">
        <div className="absolute top-8 h-1.5 rounded bg-blue-100" style={{ left: `${50 / n}%`, right: `${50 / n}%` }} />
        <div className="absolute top-8 h-1.5 rounded bg-gradient-to-r from-blue-500 via-teal-400 to-violet-600" style={{ left: `${50 / n}%`, width: `${Math.max(0, Math.min(1, (fill * n - 0.5) / (n - 1))) * (100 - 100 / n)}%` }} />
        <ol className="relative grid" style={{ gridTemplateColumns: `repeat(${n},minmax(0,1fr))` }}>
          {items.map((it, i) => (
            <li key={it.label} className="text-center px-2">
              <span className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 text-lg font-black transition-all duration-500 ${lit(i) ? 'bg-blue-600 border-blue-200 text-white scale-110 shadow-lg' : 'bg-white border-slate-200 text-slate-300'}`}>{i + 1}</span>
              <span className={`mt-3 block text-[11px] font-extrabold tracking-wide transition-colors duration-500 ${lit(i) ? 'text-[#123B5D]' : 'text-slate-400'}`}>{it.label}</span>
              <span className={`mt-1 block text-xs transition-all duration-500 ${lit(i) ? 'opacity-100 translate-y-0 text-[#536B7D]' : 'opacity-0 translate-y-2'}`}>{it.note}</span>
            </li>
          ))}
        </ol>
      </div>
      {/* mobile */}
      <ol className="md:hidden relative pl-14 space-y-6">
        <div className="absolute left-[27px] top-2 bottom-2 w-1 rounded bg-blue-100" />
        <div className="absolute left-[27px] top-2 w-1 rounded bg-gradient-to-b from-blue-500 to-violet-600" style={{ height: `calc((100% - 16px) * ${fill})` }} />
        {items.map((it, i) => (
          <li key={it.label} className="relative">
            <span className={`absolute -left-14 top-0 flex h-9 w-9 ml-2.5 items-center justify-center rounded-full border-4 text-sm font-black transition-all duration-500 ${lit(i) ? 'bg-blue-600 border-blue-200 text-white' : 'bg-white border-slate-200 text-slate-300'}`}>{i + 1}</span>
            <span className={`block text-xs font-extrabold tracking-wide ${lit(i) ? 'text-[#123B5D]' : 'text-slate-400'}`}>{it.label}</span>
            <span className="block text-xs text-[#536B7D]">{it.note}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

/* ---------- FOUNDER 2: interactive staircase + matching explanations (fills both columns) ---------- */
export const LeadershipSteps: React.FC<{ items: { label: string; desc: string }[]; children?: React.ReactNode }> = ({ items, children }) => {
  const [ref, seen] = useInView<HTMLDivElement>(0.3);
  const [auto, setAuto] = useState(true);
  const [active, setActive] = useCycle(items.length, seen && auto, 2600);
  const pick = (i: number) => { setAuto(false); setActive(i); };
  const grad = ['#1E88E5', '#00ACC1', '#2E9E4F', '#6A5ACD', '#0B3C8C'];
  return (
    <div ref={ref} className="grid lg:grid-cols-2 gap-8 items-start">
      <div>
        {children}
        <div className="mt-6 flex items-end gap-1.5 sm:gap-2 h-60 lg:h-72" role="group" aria-label="Leadership perspective steps">
          {items.map((it, i) => (
            <button key={it.label} type="button" onClick={() => pick(i)} onMouseEnter={() => pick(i)} onFocus={() => pick(i)} aria-pressed={i === active} className="flex-1 h-full flex items-end focus:outline-none">
              <span className="w-full rounded-t-lg text-white text-[9px] sm:text-xs font-extrabold tracking-wide flex items-start justify-center pt-2 overflow-hidden transition-all duration-700 ease-out" style={{ height: seen ? `${32 + i * 17}%` : '0%', transitionDelay: seen ? '0ms' : `${i * 200}ms`, background: grad[i % grad.length], opacity: i === active ? 1 : 0.6, transform: i === active ? 'translateY(-6px)' : 'none', boxShadow: i === active ? '0 10px 18px -8px rgba(11,60,140,.55)' : 'none' }}>{it.label}</span>
            </button>
          ))}
        </div>
      </div>
      <ol className="space-y-2.5" aria-label="What each step means">
        {items.map((it, i) => (
          <li key={it.label} style={{ opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateX(28px)', transition: 'all .6s ease-out', transitionDelay: `${i * 130}ms` }}>
            <button type="button" onClick={() => pick(i)} onMouseEnter={() => pick(i)} onFocus={() => pick(i)} className={`w-full text-left flex gap-4 items-start rounded-xl border p-4 transition-all duration-300 ${i === active ? 'bg-white border-blue-300 shadow-md lg:translate-x-1' : 'bg-white/60 border-[#D7EAF7] hover:bg-white'}`}>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-black text-white transition-transform duration-300" style={{ background: grad[i % grad.length], transform: i === active ? 'scale(1.12)' : 'none' }}>{i + 1}</span>
              <span><span className="block text-sm font-extrabold tracking-wide text-[#123B5D]">{it.label}</span><span className="block text-sm text-[#536B7D] mt-0.5">{it.desc}</span></span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

/* ---------- WHO WE WORK WITH: wipe-in arrow journey ---------- */
export const JourneyArrows: React.FC<{ items: string[] }> = ({ items }) => {
  const [ref, seen] = useInView<HTMLDivElement>(0.35);
  const colors = ['#1E88E5', '#2E9E4F', '#F5A300', '#F2622A', '#6A3FB5'];
  const n = items.length;
  return (
    <div ref={ref}>
      <ol className="hidden md:grid gap-0" style={{ gridTemplateColumns: `repeat(${n},minmax(0,1fr))` }}>
        {items.map((t, i) => (
          <li key={t} className="text-center">
            <span className={`block text-xs font-extrabold px-1 h-9 text-[#123B5D] transition-all duration-500 ${seen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`} style={{ transitionDelay: `${i * 300}ms` }}>{t}</span>
            <span className="mx-auto block w-px h-4 bg-slate-300" />
            <span className="relative block h-14 overflow-hidden" style={{ background: colors[i % colors.length], clipPath: chevron(i === 0, 22), marginLeft: i ? -6 : 0 }}>
              <span className="absolute inset-0 bg-white origin-right transition-transform ease-out" style={{ transform: seen ? 'scaleX(0)' : 'scaleX(1)', transitionDuration: '700ms', transitionDelay: `${i * 300 + 150}ms` }} />
            </span>
          </li>
        ))}
      </ol>
      <ol className="md:hidden space-y-2">
        {items.map((t, i) => (
          <li key={t} className="relative overflow-hidden rounded-lg bg-white border border-[#D7EAF7] pl-4 pr-3 py-3 text-sm font-bold text-[#123B5D]">
            <span className="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-700" style={{ background: colors[i % colors.length], transform: seen ? 'scaleY(1)' : 'scaleY(0)', transitionDelay: `${i * 250}ms`, transformOrigin: 'top' }} />
            <span className={`transition-all duration-500 ${seen ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${i * 250 + 150}ms` }}>{t}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

/* ---------- SERVICES hero: shimmering chips ---------- */
export const ShimmerChips: React.FC<{ items: string[] }> = ({ items }) => {
  const [ref, seen] = useInView<HTMLOListElement>(0.5);
  return (
    <ol ref={ref} className="flex flex-wrap gap-2">
      {items.map((t, i) => (
        <li key={t} className={`relative overflow-hidden rounded-md px-4 py-2 text-xs font-extrabold tracking-wide text-[#0B2A5B] transition-all duration-500 ${seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ background: PALETTE[i % PALETTE.length] + '33', transitionDelay: `${i * 130}ms`, border: `1px solid ${PALETTE[i % PALETTE.length]}66`, color: '#fff' }}>
          {t}
          {seen && <span className="pointer-events-none absolute inset-y-0 w-1/3 bg-white/30 -skew-x-12 anim-shimmer" style={{ animationDelay: `${i * 220}ms` }} />}
        </li>
      ))}
    </ol>
  );
};

/* ---------- SERVICES 02: running highlight along a chevron strip ---------- */
export const ChevronRun: React.FC<{ items: string[] }> = ({ items }) => {
  const [ref, seen] = useInView<HTMLDivElement>(0.4);
  const [active] = useCycle(items.length, seen, 900);
  return (
    <div ref={ref} className="flex flex-wrap gap-y-1.5">
      {items.map((t, i) => (
        <span key={t} className="relative inline-flex h-10 items-center justify-center px-5 text-[11px] font-extrabold tracking-wide text-white transition-all duration-300" style={{ background: PALETTE[i % PALETTE.length], clipPath: chevron(i === 0, 10), marginLeft: i ? -4 : 0, opacity: seen ? (i === active ? 1 : 0.45) : 0, transform: i === active ? 'translateY(-3px) scale(1.06)' : 'none', zIndex: i === active ? 2 : 1, transitionDelay: seen ? '0ms' : `${i * 90}ms` }}>{t}</span>
      ))}
    </div>
  );
};

/* ---------- SERVICES 03: maturity bars growing upward ---------- */
export const MaturityBars: React.FC<{ items: string[] }> = ({ items }) => {
  const [ref, seen] = useInView<HTMLDivElement>(0.4);
  const cols = ['#EF5350', '#FFA726', '#FDD835', '#66BB6A', '#26A69A'];
  return (
    <div ref={ref} className="flex items-end gap-2 h-36">
      {items.map((t, i) => (
        <div key={t} className="flex-1 flex flex-col justify-end h-full">
          <div className="rounded-t-md flex items-start justify-center pt-1.5 text-[10px] font-extrabold text-[#123B5D] overflow-hidden transition-all duration-700 ease-out" style={{ height: seen ? `${28 + i * 18}%` : '0%', background: cols[i % cols.length], transitionDelay: `${i * 170}ms` }}>{t}</div>
        </div>
      ))}
    </div>
  );
};

/* ---------- SERVICES 04: pills with loading bars ---------- */
export const ProgressPills: React.FC<{ items: string[] }> = ({ items }) => {
  const [ref, seen] = useInView<HTMLOListElement>(0.4);
  return (
    <ol ref={ref} className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {items.map((t, i) => (
        <li key={t} className="relative rounded-lg bg-[#EAF6FD] px-3 py-3 text-[11px] font-extrabold text-[#123B5D] overflow-hidden">
          <span className="absolute inset-y-0 left-0 bg-gradient-to-r from-sky-300/70 to-emerald-300/70 transition-all ease-out" style={{ width: seen ? '100%' : '0%', transitionDuration: '900ms', transitionDelay: `${i * 420}ms` }} />
          <span className="relative">{i + 1}. {t}</span>
        </li>
      ))}
    </ol>
  );
};

/* ---------- SERVICES 07: circular loop ---------- */
export const CycleLoop: React.FC<{ items: string[] }> = ({ items }) => {
  const [ref, seen] = useInView<HTMLDivElement>(0.4);
  const [active] = useCycle(items.length, seen, 1200);
  const n = items.length, R = 78, C = 110;
  return (
    <div ref={ref} className="flex justify-center">
      <svg viewBox="0 0 220 220" className="w-full max-w-[260px]" role="img" aria-label={`Cycle: ${items.join(', ')}`}>
        <circle cx={C} cy={C} r={R} fill="none" stroke="#D7EAF7" strokeWidth="3" strokeDasharray="4 6" />
        <circle cx={C} cy={C} r={R} fill="none" stroke="#2F9FEA" strokeWidth="4" strokeLinecap="round" pathLength={1} strokeDasharray="1" strokeDashoffset={seen ? 0 : 1} style={{ transition: 'stroke-dashoffset 2.4s ease-in-out', transform: 'rotate(-90deg)', transformOrigin: 'center' }} />
        {items.map((t, i) => {
          const a = (i / n) * Math.PI * 2 - Math.PI / 2;
          const x = C + R * Math.cos(a), y = C + R * Math.sin(a);
          const on = seen && i === active;
          return (
            <g key={t} style={{ transformOrigin: `${x}px ${y}px`, transform: seen ? 'scale(1)' : 'scale(0)', transition: 'transform .5s cubic-bezier(.34,1.56,.64,1)', transitionDelay: `${i * 250}ms` }}>
              <circle cx={x} cy={y} r={on ? 15 : 12} fill={on ? '#0B3C8C' : '#fff'} stroke={PALETTE[i % PALETTE.length]} strokeWidth="3" style={{ transition: 'all .3s' }} />
              <text x={x} y={y + 3.5} textAnchor="middle" fontSize="10" fontWeight="800" fill={on ? '#fff' : '#123B5D'}>{i + 1}</text>
              <text x={C + (R + 30) * Math.cos(a)} y={C + (R + 28) * Math.sin(a) + 3} textAnchor="middle" fontSize="9" fontWeight="700" fill="#123B5D">{t}</text>
            </g>
          );
        })}
        <text x={C} y={C - 2} textAnchor="middle" fontSize="11" fontWeight="800" fill="#0B3C8C">RECOVERY</text>
        <text x={C} y={C + 12} textAnchor="middle" fontSize="9" fill="#536B7D">cycle</text>
      </svg>
    </div>
  );
};

/* ---------- FRAMEWORKS 1: image steps fanning out with arrows ---------- */
export const ImageSteps: React.FC<{ items: { label: string; src: string }[] }> = ({ items }) => {
  const [ref, seen] = useInView<HTMLOListElement>(0.3);
  return (
    <ol ref={ref} className="grid grid-cols-4 md:grid-cols-8 gap-x-3 gap-y-5">
      {items.map((it, i) => (
        <li key={it.label} className="relative text-center transition-all duration-600" style={{ opacity: seen ? 1 : 0, transform: seen ? 'none' : 'scale(.7) translateY(14px)', transitionDuration: '600ms', transitionDelay: `${i * 140}ms`, transitionTimingFunction: 'cubic-bezier(.34,1.56,.64,1)' }}>
          <img src={it.src} alt="" loading="lazy" className="w-full h-14 sm:h-16 object-cover rounded-lg shadow-sm" />
          <span className="mt-1.5 block text-[9px] sm:text-[10px] font-extrabold tracking-wide text-[#123B5D] leading-tight">{it.label}</span>
          {i < items.length - 1 && <span className={`hidden md:block absolute top-6 -right-3.5 text-blue-500 text-lg font-black transition-all duration-500 ${seen ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${i * 140 + 350}ms` }} aria-hidden="true">›</span>}
        </li>
      ))}
    </ol>
  );
};

/* ---------- FRAMEWORKS 2: wave of stage cards over an enablers base ---------- */
export const WaveStages: React.FC<{ stages: Stage[]; enablers: string[] }> = ({ stages, enablers }) => {
  const [ref, seen] = useInView<HTMLDivElement>(0.25);
  return (
    <div ref={ref}>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
        {stages.map((s, i) => (
          <div key={s.stage} className="rounded-lg bg-white border border-[#D7EAF7] overflow-hidden shadow-sm transition-all duration-700" style={{ opacity: seen ? 1 : 0, transform: seen ? `translateY(${i % 2 ? 10 : 0}px)` : 'translateY(46px)', transitionDelay: `${i * 120}ms`, transitionTimingFunction: 'cubic-bezier(.34,1.56,.64,1)' }}>
            <div className="h-1.5" style={{ background: s.color }} />
            <div className="p-2.5 text-center">
              <div className="text-xs font-extrabold" style={{ color: s.color }}>{s.stage}</div>
              <div className="text-[11px] text-slate-500 font-medium mt-0.5">{s.area}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 relative rounded-lg bg-[#F5FAFE] border border-[#D7EAF7] p-3 text-center text-sm overflow-hidden">
        <span className="absolute inset-0 bg-gradient-to-r from-blue-100 via-emerald-100 to-violet-100 origin-left transition-transform ease-out" style={{ transform: seen ? 'scaleX(1)' : 'scaleX(0)', transitionDuration: '1600ms', transitionDelay: `${stages.length * 120}ms` }} />
        <span className="relative"><strong className="text-[#123B5D]">Enterprise Enablers:</strong> {enablers.join('  |  ')}</span>
      </div>
    </div>
  );
};

/* ---------- FRAMEWORKS 3: gauge with sweeping marker ---------- */
export const ScaleGauge: React.FC<{ items: [string, string, string][] }> = ({ items }) => {
  const [ref, seen] = useInView<HTMLDivElement>(0.4);
  const [active] = useCycle(items.length, seen, 1500);
  const n = items.length;
  return (
    <div ref={ref}>
      <div className="relative">
        <div className="flex h-5 rounded-full overflow-hidden">
          {items.map(([name, , c], i) => <div key={name} className="flex-1 transition-opacity duration-500" style={{ background: c, opacity: seen && i <= active ? 1 : 0.25 }} />)}
        </div>
        <span className="absolute -top-2 h-9 w-9 -ml-[18px] rounded-full bg-white border-4 flex items-center justify-center text-[11px] font-black transition-all duration-700 ease-in-out shadow-lg" style={{ left: `${((active + 0.5) / n) * 100}%`, borderColor: items[active][2], color: '#123B5D' }}>{active + 1}</span>
      </div>
      <div className="mt-6 grid gap-1" style={{ gridTemplateColumns: `repeat(${n},minmax(0,1fr))` }}>
        {items.map(([name, desc], i) => (
          <div key={name} className={`text-center transition-opacity duration-500 ${i === active ? 'opacity-100' : 'opacity-50'}`}>
            <div className="text-xs font-extrabold text-[#123B5D]">{name}</div>
            <div className="hidden sm:block text-[10px] text-slate-500 mt-0.5 leading-tight">{desc}</div>
          </div>
        ))}
      </div>
      <p className="sm:hidden mt-3 text-center text-xs text-slate-600 min-h-8">{items[active][1]}</p>
    </div>
  );
};

/* ---------- FRAMEWORKS 4: conveyor marquee ---------- */
export const Conveyor: React.FC<{ items: string[] }> = ({ items }) => {
  const list = [...items, ...items];
  return (
    <div className="relative overflow-hidden" role="list" aria-label={items.join(', ')}>
      <div className="flex w-max gap-2 anim-marquee">
        {list.map((t, i) => (
          <span key={i} role="listitem" aria-hidden={i >= items.length} className="inline-flex h-11 items-center px-6 text-xs font-extrabold tracking-wide text-white" style={{ background: PALETTE[(i % items.length) % PALETTE.length], clipPath: chevron(false, 12) }}>{t}</span>
        ))}
      </div>
    </div>
  );
};

/* ---------- CONTACT: cards joined by drawing arrows ---------- */
export const DashConnect: React.FC<{ children: React.ReactNode[] }> = ({ children }) => {
  const [ref, seen] = useInView<HTMLDivElement>(0.3);
  const kids = React.Children.toArray(children);
  return (
    <div ref={ref} className="flex flex-col md:flex-row md:items-stretch gap-3 md:gap-0">
      {kids.map((c, i) => (
        <React.Fragment key={i}>
          <div className="flex-1 transition-all duration-700" style={{ opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(24px)', transitionDelay: `${i * 450}ms` }}>{c}</div>
          {i < kids.length - 1 && (
            <div className="flex items-center justify-center md:w-14 h-8 md:h-auto" aria-hidden="true">
              <svg viewBox="0 0 40 20" className="w-10 md:w-12 rotate-90 md:rotate-0"><path d="M2 10 H32" stroke="#2F9FEA" strokeWidth="3" strokeLinecap="round" strokeDasharray="1" pathLength={1} strokeDashoffset={seen ? 0 : 1} style={{ transition: 'stroke-dashoffset .6s ease', transitionDelay: `${i * 450 + 350}ms` }} /><path d="M26 3 L36 10 L26 17" fill="none" stroke="#2F9FEA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: seen ? 1 : 0, transition: 'opacity .3s', transitionDelay: `${i * 450 + 800}ms` }} /></svg>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
