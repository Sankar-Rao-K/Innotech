import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, CheckCircle2, Copy, Cpu, Factory, FlaskConical, Mail, MoreHorizontal, Repeat, Search, Settings, ShieldCheck, Syringe } from 'lucide-react';
import { ALL_AREAS, starterFor } from '../data/contactAreas';
import { COMPANY_DETAILS } from '../data/siteData';
import { submitInquiry, inquiryText, Inquiry } from '../utils/submitInquiry';

type Key = keyof Inquiry;
const MAX = 600, MIN = 20;
const DRAFT = 'innotech-inquiry-draft';
const empty: Inquiry = { name: '', company: '', email: '', areas: [], challenge: '' };
const ICONS = [FlaskConical, Settings, Repeat, Factory, ShieldCheck, Syringe, Cpu, Search, MoreHorizontal];
const FREE_MAIL = /@(gmail|yahoo|hotmail|outlook|aol|icloud|proton(mail)?)\./i;

const validate = (d: Inquiry): Record<Key, string> => ({
  name: d.name.trim().length >= 2 ? '' : 'Please enter your full name',
  company: d.company.trim().length >= 2 ? '' : 'Please enter your company or organization',
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email.trim()) ? '' : 'Enter a valid work email, like name@company.com',
  areas: d.areas.length ? '' : 'Choose at least one area that matches your challenge',
  challenge: d.challenge.trim().length >= MIN ? '' : `Add a little more detail (${d.challenge.trim().length}/${MIN} characters)`,
});
const LABELS: Record<Key, string> = { name: 'Name', company: 'Company', email: 'Business email', areas: 'Primary area', challenge: 'Challenge' };

const loadDraft = (): Inquiry => {
  try { const s = sessionStorage.getItem(DRAFT); const d = s ? { ...empty, ...JSON.parse(s) } : empty; return Array.isArray(d.areas) ? d : empty; } catch { return empty; }
};

const base = 'w-full px-3 py-2.5 text-base sm:text-sm bg-white rounded-md border focus:outline-none focus:ring-2 transition-colors font-normal';
const tone = (ok: boolean, bad: boolean) => bad ? 'border-red-400 focus:ring-red-200' : ok ? 'border-emerald-400 focus:ring-emerald-200' : 'border-[#D7EAF7] focus:ring-blue-300';

const Field: React.FC<{ id: Key; error: string; ok: boolean; shown: boolean; className?: string; children: React.ReactNode }> = ({ id, error, ok, shown, className = '', children }) => (
  <div className={className}>
    <label htmlFor={`f-${id}`} className="flex items-center justify-between text-xs font-bold text-[#123B5D] mb-1">
      <span>{LABELS[id]} *</span>
      {ok && <span className="anim-pop inline-flex items-center gap-1 text-emerald-600 font-semibold"><Check className="w-3.5 h-3.5" />Looks good</span>}
    </label>
    {children}
    {shown && error && <p role="alert" className="mt-1 text-xs text-red-600 anim-fadein">{error}</p>}
  </div>
);

const Ring: React.FC<{ pct: number }> = ({ pct }) => {
  const C = 2 * Math.PI * 26;
  return (
    <svg viewBox="0 0 64 64" className="w-16 h-16 shrink-0" role="img" aria-label={`${Math.round(pct * 100)}% complete`}>
      <circle cx="32" cy="32" r="26" fill="none" stroke="#E3F0FA" strokeWidth="6" />
      <circle cx="32" cy="32" r="26" fill="none" stroke={pct === 1 ? '#10B981' : '#2F9FEA'} strokeWidth="6" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * (1 - pct)} transform="rotate(-90 32 32)" style={{ transition: 'stroke-dashoffset .6s ease, stroke .3s' }} />
      <text x="32" y="36" textAnchor="middle" fontSize="14" fontWeight="800" fill="#123B5D">{Math.round(pct * 100)}%</text>
    </svg>
  );
};

interface Props { showToast: (m: string) => void; onDone?: () => void; variant?: 'page' | 'modal'; areas?: string[]; onAreasChange?: (a: string[]) => void }

export const InquiryForm: React.FC<Props> = ({ showToast, onDone, variant = 'page', areas, onAreasChange }) => {
  const [d0, setD] = useState<Inquiry>(loadDraft);
  const d: Inquiry = areas ? { ...d0, areas } : d0;
  const [touched, setTouched] = useState<Partial<Record<Key, boolean>>>({});
  const [sent, setSent] = useState<Inquiry | null>(null);
  const [shake, setShake] = useState(false);
  const taRef = useRef<HTMLTextAreaElement>(null);

  const errs = validate(d);
  const keys = Object.keys(errs) as Key[];
  const done = keys.filter(k => !errs[k]).length;
  const pct = done / keys.length;
  const update = (k: Exclude<Key, 'areas'>, v: string) => setD(p => ({ ...p, [k]: v }));
  const setAreas = (a: string[]) => { if (onAreasChange) onAreasChange(a); else setD(p => ({ ...p, areas: a })); };
  const touch = (k: Key) => setTouched(t => ({ ...t, [k]: true }));
  const show = (k: Key) => !!touched[k];

  useEffect(() => { try { sessionStorage.setItem(DRAFT, JSON.stringify(d)); } catch { /* ignore */ } }, [d0, areas]);

  const toggleArea = (a: string) => { setAreas(d.areas.includes(a) ? d.areas.filter(x => x !== a) : [...d.areas, a]); touch('areas'); };
  const insertStarter = () => {
    if (!d.areas.length) return; const s = starterFor(d.areas[0]);
    update('challenge', (d.challenge.trim() ? d.challenge.trim() + '\n\n' : '') + s);
    touch('challenge');
    setTimeout(() => { const t = taRef.current; if (t) { t.focus(); t.setSelectionRange(t.value.length, t.value.length); } }, 30);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bad = keys.find(k => errs[k]);
    if (bad) {
      setTouched({ name: true, company: true, email: true, areas: true, challenge: true });
      setShake(true); setTimeout(() => setShake(false), 500);
      const el = document.getElementById(`f-${bad}`);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => el?.focus?.(), 250);
      return;
    }
    submitInquiry(d);
    setSent(d);
    try { sessionStorage.removeItem(DRAFT); } catch { /* ignore */ }
  };
  const copy = async () => {
    try { await navigator.clipboard.writeText(inquiryText(sent!)); showToast('Request copied. Paste it into an email to ' + COMPANY_DETAILS.email); }
    catch { showToast('Could not copy automatically. Please email ' + COMPANY_DETAILS.email); }
  };

  if (sent) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-left" role="status">
        <div className="flex items-start gap-4">
          <span className="anim-pop flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white"><CheckCircle2 className="w-7 h-7" /></span>
          <div>
            <h3 className="font-extrabold text-lg text-[#123B5D]">Almost done: send the email that just opened</h3>
            <p className="text-sm mt-1 text-[#536B7D]">Your email app should have opened with your request addressed to InnoTech. Press <strong>Send</strong> to complete it, and we will follow up to schedule a confidential discussion.</p>
            <ol className="mt-4 grid sm:grid-cols-3 gap-2 text-xs">
              {['Review', 'Discuss', 'Define'].map((s, i) => <li key={s} className="rounded-lg bg-white border border-emerald-200 px-3 py-2 font-bold text-[#123B5D]"><span className="text-emerald-600 mr-1">{i + 1}</span>{s}</li>)}
            </ol>
            <p className="text-sm mt-4 text-[#536B7D]">Nothing opened? Copy your request and email it to <a className="font-bold text-blue-700" href={`mailto:${COMPANY_DETAILS.email}`}>{COMPANY_DETAILS.email}</a>.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button onClick={copy} className="inline-flex items-center gap-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 py-2"><Copy className="w-4 h-4" /> Copy my request</button>
              <button onClick={() => submitInquiry(sent)} className="inline-flex items-center gap-2 rounded-md border border-blue-300 text-blue-700 text-sm font-bold px-4 py-2"><Mail className="w-4 h-4" /> Open email again</button>
              <button onClick={() => { setSent(null); setD(empty); onAreasChange?.([]); setTouched({}); onDone?.(); }} className="rounded-md text-sm font-bold px-4 py-2 text-slate-600">{onDone ? 'Close' : 'Send another request'}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const form = (
    <form onSubmit={onSubmit} noValidate className={`space-y-5 text-left ${shake ? 'anim-shake' : ''}`}>
      {/* progress */}
      <div>
        <div className="flex items-center justify-between text-xs font-bold text-[#123B5D] mb-1.5">
          <span>{done === keys.length ? 'All set. Ready to send' : `${done} of ${keys.length} steps complete`}</span>
          <span className="text-slate-400 font-semibold">About 1 minute</span>
        </div>
        <div className="h-2 rounded-full bg-[#E3F0FA] overflow-hidden"><div className="h-full rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400 transition-all duration-500" style={{ width: `${pct * 100}%` }} /></div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="name" error={errs.name} ok={!errs.name} shown={show('name')}>
          <input id="f-name" autoComplete="name" value={d.name} onChange={e => update('name', e.target.value)} onBlur={() => touch('name')} placeholder="Enter your full name" className={`${base} ${tone(!errs.name, show('name') && !!errs.name)}`} />
        </Field>
        <Field id="company" error={errs.company} ok={!errs.company} shown={show('company')}>
          <input id="f-company" autoComplete="organization" value={d.company} onChange={e => update('company', e.target.value)} onBlur={() => touch('company')} placeholder="Enter your company or organization" className={`${base} ${tone(!errs.company, show('company') && !!errs.company)}`} />
        </Field>
        <Field id="email" error={errs.email} ok={!errs.email} shown={show('email')} className="sm:col-span-2">
          <input id="f-email" type="email" inputMode="email" autoComplete="email" value={d.email} onChange={e => update('email', e.target.value)} onBlur={() => touch('email')} placeholder="Enter your work email address" className={`${base} ${tone(!errs.email, show('email') && !!errs.email)}`} />
          {!errs.email && FREE_MAIL.test(d.email) && <p className="mt-1 text-xs text-amber-700">A business email helps us route your request to the right team member.</p>}
        </Field>
      </div>

      <Field id="areas" error={errs.areas} ok={!errs.areas} shown={show('areas')}>
        <p className="mb-1.5 text-xs text-slate-500">Select one or more. The first you pick is treated as the primary area.</p>
        <div id="f-areas" role="group" aria-label="Areas that match your challenge" tabIndex={-1} className="grid grid-cols-2 gap-2 focus:outline-none sm:grid-cols-3">
          {ALL_AREAS.map((a, i) => {
            const Icon = ICONS[i % ICONS.length]; const idx = d.areas.indexOf(a); const on = idx >= 0;
            return (
              <button type="button" key={a} role="checkbox" aria-checked={on} onClick={() => toggleArea(a)}
                className={`relative flex items-center gap-2 rounded-lg border px-3 py-3 text-left text-xs font-bold transition-all duration-200 ${on ? 'scale-[1.02] border-blue-600 bg-blue-50 text-blue-800 shadow-sm ring-2 ring-blue-200' : 'border-[#D7EAF7] bg-white text-[#123B5D] hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-sm'}`}>
                <Icon className={`h-4 w-4 shrink-0 ${on ? 'text-blue-600' : 'text-slate-400'}`} /><span className="pr-4 leading-tight">{a}</span>
                {on && <span className="anim-pop absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-black text-white">{idx === 0 ? <Check className="h-3 w-3" /> : idx + 1}</span>}
              </button>
            );
          })}
        </div>
      </Field>

      <Field id="challenge" error={errs.challenge} ok={!errs.challenge} shown={show('challenge')}>
        <textarea id="f-challenge" ref={taRef} rows={variant === 'page' ? 6 : 5} maxLength={MAX} value={d.challenge} onChange={e => update('challenge', e.target.value)} onBlur={() => touch('challenge')} placeholder="A brief high-level description is sufficient..." className={`${base} ${tone(!errs.challenge, show('challenge') && !!errs.challenge)}`} />
        <div className="mt-1.5 flex flex-wrap items-center justify-between gap-2 text-xs">
          {d.areas.length
            ? <button type="button" onClick={insertStarter} className="inline-flex items-center gap-1 rounded-full bg-[#EAF6FD] px-3 py-1.5 font-bold text-blue-700 hover:bg-blue-100">Use a starter for “{d.areas[0]}” <ArrowRight className="h-3 w-3" /></button>
            : <span className="text-slate-400">Pick an area above to get a starter sentence.</span>}
          <span className={d.challenge.length > MAX - 50 ? 'text-amber-600 font-bold' : 'text-slate-400'}>{d.challenge.length}/{MAX}</span>
        </div>
      </Field>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <button type="submit" className={`group inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-xs font-extrabold uppercase tracking-wide text-white transition-all ${pct === 1 ? 'bg-emerald-600 hover:bg-emerald-700 shadow-lg' : 'bg-[#0B3C8C] hover:bg-[#092f6f]'}`}>
          Request an Initial Discussion <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
        {pct < 1 && <span className="text-xs text-slate-500">{keys.length - done} more to go</span>}
      </div>
      <p className="text-xs bg-[#F5FAFE] border border-[#D7EAF7] rounded-md p-3">Please do not submit confidential, proprietary, unpublished technical, clinical, regulatory, formulation, process, or manufacturing information through this website form. A high-level description is sufficient for the initial discussion. Appropriate confidentiality arrangements can be established before substantive proprietary information is exchanged.</p>
    </form>
  );

  if (variant === 'modal') return form;

  return (
    <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
      {form}
      <aside className="lg:sticky lg:top-28 rounded-xl border border-[#D7EAF7] bg-gradient-to-b from-[#F5FAFE] to-white p-5" aria-label="Your request summary">
        <div className="flex items-center gap-4">
          <Ring pct={pct} />
          <div><h3 className="font-extrabold text-[#123B5D] leading-tight">Your request</h3><p className="text-xs text-slate-500 mt-0.5">Builds as you type</p></div>
        </div>
        <ul className="mt-4 space-y-2.5">
          {keys.map(k => {
            const ok = !errs[k];
            return (
              <li key={k} className="flex items-start gap-2.5 text-sm">
                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${ok ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300 text-transparent'}`}><Check className="w-3 h-3" /></span>
                <span className="min-w-0"><span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">{LABELS[k]}</span><span className={`block truncate ${ok ? 'text-[#123B5D] font-semibold' : 'text-slate-300'}`}>{ok ? (k === 'challenge' ? d.challenge.trim().slice(0, 60) + (d.challenge.trim().length > 60 ? '…' : '') : k === 'areas' ? d.areas.join(', ') : d[k]) : 'Not yet added'}</span></span>
              </li>
            );
          })}
        </ul>
        <div className="mt-5 border-t border-[#D7EAF7] pt-4">
          <p className="text-xs font-bold text-[#123B5D] mb-2">What happens next</p>
          <ol className="space-y-2 text-xs text-[#536B7D]">
            <li className="flex gap-2"><span className="font-black text-blue-600">1</span><span><strong className="text-[#123B5D]">Review.</strong> We read your challenge and timing.</span></li>
            <li className="flex gap-2"><span className="font-black text-blue-600">2</span><span><strong className="text-[#123B5D]">Discuss.</strong> A confidential call with the right team members.</span></li>
            <li className="flex gap-2"><span className="font-black text-blue-600">3</span><span><strong className="text-[#123B5D]">Define.</strong> Scope, timing and confidentiality terms.</span></li>
          </ol>
        </div>
      </aside>
    </div>
  );
};
