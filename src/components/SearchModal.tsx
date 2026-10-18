import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Search, X, FileText, LayoutGrid } from 'lucide-react';
import { PUBLICATIONS } from '../data/publications';

interface Props { isOpen: boolean; onClose: () => void; navigate: (route: string) => void }
interface Item { title: string; desc: string; route: string; kind: 'Page' | 'Service' | 'Publication'; keys: string }

const PAGES: Item[] = [
  { title: 'Home', desc: 'Commercialization advisory overview', route: '/', kind: 'Page', keys: 'home overview start' },
  { title: 'About InnoTech', desc: 'Philosophy, how we work and our commitment', route: '/about-us', kind: 'Page', keys: 'about philosophy commitment how we work' },
  { title: 'Raj Thota, Founder', desc: 'Career, executive expertise and thought leadership', route: '/our-founder', kind: 'Page', keys: 'founder raj thota leadership career fda approvals' },
  { title: 'Who We Work With', desc: 'Organizations we support and how we partner', route: '/our-partners', kind: 'Page', keys: 'clients organizations partner cdmo investors startups engage' },
  { title: 'Expertise', desc: 'CMC, MS&T, tech transfer, validation, specialized products, AI, due diligence', route: '/our-expertise', kind: 'Page', keys: 'expertise cmc late stage ms&t technical operations transfer validation specialized ai due diligence' },
  { title: 'Services', desc: 'Seven advisory services and engagement models', route: '/our-services', kind: 'Page', keys: 'services assessment readiness technology transfer ppq launch lai ophthalmic ai digital recovery engagement' },
  { title: 'Frameworks & Executive Tools', desc: 'Enterprise framework, library, readiness scale, AI frameworks', route: '/frameworks', kind: 'Page', keys: 'framework library readiness scale scorecard roadmap inspection governance ai frameworks' },
  { title: 'Executive Insights', desc: 'White papers, blogs and learning series', route: '/insights', kind: 'Page', keys: 'insights publications white paper blog resources learning series qbd' },
  { title: 'Contact', desc: 'Request an initial discussion', route: '/contact-us', kind: 'Page', keys: 'contact email phone address discussion form quote' },
  { title: 'Privacy Policy', desc: 'How information is handled', route: '/privacy-policy', kind: 'Page', keys: 'privacy data policy' },
  { title: 'Terms & Conditions', desc: 'Website terms of use', route: '/terms-and-conditions', kind: 'Page', keys: 'terms conditions legal' },
];
const SERVICES: Item[] = [
  ['Commercialization Readiness Assessments', 'CMC, tech transfer, manufacturing, PPQ and launch readiness reviews'],
  ['Technology Transfer & Commercialization Execution', 'Sending-site to receiving-site capability'],
  ['MS&T & Technical Operations Transformation', 'Process stewardship, CPV and technical governance'],
  ['Validation, PPQ & Technical Launch', 'From process understanding to initial commercial supply'],
  ['Specialized Products & Delivery Systems', 'Oral, ophthalmic, injectable, LAI and combination products'],
  ['AI & Digital Transformation', 'AI-assisted QbD, digital twins, MES and Good AI Practice'],
  ['Executive Advisory, Due Diligence & Recovery', 'Independent clarity for leaders, boards and investors'],
].map(([title, desc]) => ({ title, desc, route: '/our-services', kind: 'Service' as const, keys: title + ' ' + desc }));
const PUBS: Item[] = PUBLICATIONS.map(p => ({ title: p.title, desc: `${p.type} · ${p.summary}`, route: `/insights/${p.slug}`, kind: 'Publication' as const, keys: p.topics.join(' ') + ' ' + p.takeaways.join(' ') }));
const INDEX = [...PAGES, ...SERVICES, ...PUBS];
const QUICK = ['technology transfer', 'PPQ', 'framework', 'LAI', 'solubility', 'CDMO'];

export const SearchModal: React.FC<Props> = ({ isOpen, onClose, navigate }) => {
  const [q, setQ] = useState('');
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!isOpen) return;
    setQ('');
    setTimeout(() => ref.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow; document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return INDEX.map(it => {
      const t = it.title.toLowerCase(), rest = (it.desc + ' ' + it.keys).toLowerCase();
      let s = 0;
      for (const w of terms) { if (t.includes(w)) s += 3; else if (rest.includes(w)) s += 1; else return { it, s: 0 }; }
      return { it, s };
    }).filter(r => r.s > 0).sort((a, b) => b.s - a.s).slice(0, 12).map(r => r.it);
  }, [q]);

  if (!isOpen) return null;
  const go = (route: string) => { navigate(route); onClose(); };
  return (
    <div className="fixed inset-0 z-[80] bg-[#123B5D]/50 flex items-start justify-center sm:pt-20" role="dialog" aria-modal="true" aria-label="Search the site" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="bg-white w-full sm:max-w-2xl sm:rounded-2xl shadow-2xl flex flex-col max-h-[100dvh] sm:max-h-[75vh] h-[100dvh] sm:h-auto">
        <div className="flex items-center gap-3 border-b border-[#D7EAF7] px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input ref={ref} value={q} onChange={e => setQ(e.target.value)} placeholder="Search services, frameworks, publications…" aria-label="Search" className="flex-1 text-base outline-none" />
          <button onClick={onClose} aria-label="Close search" className="p-2 rounded-full hover:bg-slate-100"><X className="w-5 h-5" /></button>
        </div>
        <div className="overflow-y-auto p-3">
          {!q.trim() ? (
            <div className="p-2"><p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Try searching for</p>
              <div className="flex flex-wrap gap-2">{QUICK.map(t => <button key={t} onClick={() => setQ(t)} className="rounded-full bg-[#EAF6FD] px-3 py-1.5 text-sm font-semibold text-[#123B5D]">{t}</button>)}</div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-5 mb-2">Jump to</p>
              <ul>{PAGES.slice(1, 9).map(p => <li key={p.route}><button onClick={() => go(p.route)} className="w-full text-left rounded-lg px-3 py-2.5 hover:bg-[#F5FAFE] text-sm font-semibold text-[#123B5D]">{p.title}</button></li>)}</ul>
            </div>
          ) : results.length === 0 ? (
            <p className="p-6 text-center text-sm text-slate-500">No results for “{q}”. Try a different word, or <button onClick={() => go('/contact-us')} className="font-bold text-blue-700">contact us</button>.</p>
          ) : (
            <ul>{results.map(r => (
              <li key={r.route + r.title}>
                <button onClick={() => go(r.route)} className="w-full text-left flex gap-3 rounded-lg px-3 py-2.5 hover:bg-[#F5FAFE]">
                  <span className="mt-0.5 text-blue-600 shrink-0">{r.kind === 'Publication' ? <FileText className="w-4 h-4" /> : <LayoutGrid className="w-4 h-4" />}</span>
                  <span className="min-w-0"><span className="block text-sm font-bold text-[#123B5D]">{r.title}</span><span className="block text-xs text-slate-500 line-clamp-2">{r.desc}</span></span>
                  <span className="ml-auto shrink-0 text-[10px] font-bold uppercase text-emerald-600">{r.kind}</span>
                </button>
              </li>))}</ul>
          )}
        </div>
      </div>
    </div>
  );
};
