import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Search, X, FileText, LayoutGrid } from 'lucide-react';
import { RESOURCES } from '../data/publications';

interface Props { isOpen: boolean; onClose: () => void; navigate: (route: string) => void }
interface Item { title: string; desc: string; route: string; kind: 'Page' | 'Service' | 'Publication'; keys: string }

const PAGES: Item[] = [
  { title: 'Home', desc: 'End-to-end development, CMC and commercialization support', route: '/', kind: 'Page', keys: 'home overview lifecycle advise develop execute support on-site' },
  { title: 'About InnoTech', desc: 'Philosophy, strategy and execution, how we work, our commitment', route: '/about-us', kind: 'Page', keys: 'about philosophy commitment how we work strategy execution' },
  { title: 'Raj Thota, Founder', desc: 'Career, executive and technical expertise, thought leadership', route: '/our-founder', kind: 'Page', keys: 'founder raj thota leadership career fda approvals' },
  { title: 'Who We Work With', desc: 'Emerging biotech, virtual companies, CDMOs, investors and more', route: '/our-partners', kind: 'Page', keys: 'clients organizations partner cdmo investors startups biotech engage how we partner' },
  { title: 'Expertise', desc: 'CMC, process development, project leadership, MS&T, transfer, validation, specialized products, AI', route: '/our-expertise', kind: 'Page', keys: 'expertise cmc scale-up project leadership ms&t technology transfer validation specialized ai due diligence' },
  { title: 'Services', desc: 'Eight support services and flexible engagement models', route: '/our-services', kind: 'Page', keys: 'services cmc project leadership on-site transfer ppq launch lai ophthalmic lifecycle engagement models' },
  { title: 'Insights & Resources', desc: 'White papers, executive guides, playbooks, articles and perspectives', route: '/insights', kind: 'Page', keys: 'insights resources publications white paper guide playbook blog learning series articles' },
  { title: 'Frameworks & Executive Tools', desc: 'Enterprise commercialization framework, framework library, readiness scale', route: '/frameworks', kind: 'Page', keys: 'framework library readiness scale scorecard roadmap inspection governance ai frameworks' },
  { title: 'Contact', desc: 'Request an initial discussion', route: '/contact-us', kind: 'Page', keys: 'contact email phone address discussion form quote' },
  { title: 'Privacy Policy', desc: 'How information is handled', route: '/privacy-policy', kind: 'Page', keys: 'privacy data policy' },
  { title: 'Terms & Conditions', desc: 'Website terms of use', route: '/terms-and-conditions', kind: 'Page', keys: 'terms conditions legal' },
];
const SERVICES: Item[] = [
  ['CMC Development & Product Development Support', 'Phase-appropriate CMC path, formulation, QbD/DoE, Module 3', '/our-services#svc-1'],
  ['Project Leadership & Project Execution', 'Technical program leadership, CRO/CDMO coordination, milestones', '/our-services#svc-2'],
  ['On-Site Technical & Manufacturing Support', 'Hands-on support at client, CDMO or manufacturing sites', '/our-services#svc-3'],
  ['Technology Transfer & Manufacturing Readiness', 'Sending-site to receiving-site capability', '/our-services#svc-4'],
  ['MS&T & Technical Operations Support', 'Process stewardship, CPV and technical governance', '/our-services#svc-5'],
  ['Validation, PPQ & Commercial Launch', 'From process understanding to initial commercial supply', '/our-services#svc-6'],
  ['Specialized Product Development & Commercialization', 'Oral, ophthalmic, injectable, LAI and combination products', '/our-services#svc-7'],
  ['Lifecycle Management & Post-Approval Support', 'CPV, post-approval change, supply continuity', '/our-services#svc-8'],
].map(([title, desc, route]) => ({ title, desc, route, kind: 'Service' as const, keys: title + ' ' + desc }));
const PUBS: Item[] = RESOURCES.map(r => ({ title: r.title, desc: `${r.kind} · ${r.summary}`, route: `/insights/${r.slug}`, kind: 'Publication' as const, keys: r.topics.join(' ') + ' ' + r.takeaways.join(' ') }));
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
