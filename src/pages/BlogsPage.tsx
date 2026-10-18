import React, { useMemo, useState } from 'react';
import { ArrowRight, Search, FileText } from 'lucide-react';
import { Hero, Section } from '../components/Ui';
import { Cta } from '../components/Ui';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { PUBLICATIONS, TOPICS, FEATURED, formatDate, Publication } from '../data/publications';

const QBD: [string, string][] = [['UNDERSTAND — Foundational QbD', 'Build scientific understanding and control.'], ['PREDICT — Digital-QbD', 'Use advanced analytics, models, AI/ML, PAT, and digital twins to strengthen prediction.'], ['INTEGRATE — Combination-Product QbD', 'Expand the system boundary to drug/biologic, device, container, interfaces, manufacturing/assembly, and user.'], ['SUSTAIN — Enterprise QbD', 'Connect knowledge, control, performance, governance, and learning across the lifecycle.']];
const LEARN: [string, string][] = [['Foundation', 'Core concepts and regulatory landscape.'], ['Drug Substance', 'Cell line development, process development, and scale-up.'], ['Drug Product', 'Formulation, fill-finish, and analytical strategy.'], ['Technology Transfer', 'From development to commercial manufacturing.'], ['Scale-Up & Manufacturing', 'Process performance and continuous improvement.'], ['Validation & Control', 'PPQ, lifecycle management, and compliance.'], ['Commercialization', 'Supply chain, market readiness, and successful launch.'], ['Leadership', 'Strategic thinking for long-term success.']];

const Cover: React.FC<{ p: Publication; className?: string }> = ({ p, className = '' }) => (
  <img src={p.cover} alt={`Cover of ${p.title}`} loading="lazy" className={`object-cover object-top bg-white ${className}`} />
);
const Meta: React.FC<{ p: Publication }> = ({ p }) => (
  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600">{p.type} · {formatDate(p.date)} · {p.pages} pp</span>
);

export const BlogsPage: React.FC<{ navigate: (r: string) => void; openConsultationModal: () => void }> = ({ navigate, openConsultationModal }) => {
  const [topic, setTopic] = useState<string | null>(null);
  const [type, setType] = useState<'All' | 'White Paper' | 'Blog'>('All');
  const [q, setQ] = useState('');
  const open = (slug: string) => navigate(`/insights/${slug}`);
  const goList = () => document.getElementById('all-publications')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const list = useMemo(() => {
    const k = q.trim().toLowerCase();
    return PUBLICATIONS.filter(p => (!topic || p.topics.includes(topic)) && (type === 'All' || p.type === type) && (!k || (p.title + ' ' + p.summary).toLowerCase().includes(k)));
  }, [topic, type, q]);

  const featured = FEATURED.map(s => PUBLICATIONS.find(p => p.slug === s)!);
  const [lead, ...rest] = featured;
  const latest = [...PUBLICATIONS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <div className="font-sans text-[#536B7D] bg-white">
      <Hero
        title="Executive Insights"
        accent="Where Science, Manufacturing, Technology, and Commercialization Converge"
        aside={
          <div className="relative h-60 sm:h-72 flex items-center justify-center">
            {featured.slice(0, 4).map((p, i) => (
              <img key={p.slug} src={p.cover} alt="" aria-hidden="true" className="absolute w-28 sm:w-36 aspect-[3/4] object-cover object-top rounded-md shadow-2xl border border-white/30"
                style={{ left: `calc(50% + ${(i - 1.5) * 62}px - 4.5rem)`, transform: `rotate(${(i - 1.5) * 6}deg) translateY(${Math.abs(i - 1.5) * 8}px)`, zIndex: i }} />
            ))}
          </div>
        }
      >
        <p>Executive white papers, guides, playbooks, frameworks, and learning resources for leaders navigating the transition from development to commercial manufacturing and lifecycle performance.</p>
        <p className="text-[11px] font-bold tracking-wider">WHITE PAPERS | EXECUTIVE GUIDES | PLAYBOOKS | FRAMEWORKS | LEARNING SERIES</p>
      </Hero>

      <Section title="Featured Publications" sub="In-depth executive perspectives on key commercialization topics.">
        <div className="grid lg:grid-cols-[1.3fr_2fr] gap-5">
          <AnimateOnScroll type="fade-up">
            <button onClick={() => open(lead.slug)} className="group h-full w-full text-left grid sm:grid-cols-[150px_1fr] lg:grid-cols-1 xl:grid-cols-[150px_1fr] gap-4 border border-[#D7EAF7] rounded-xl p-4 hover:shadow-lg transition-shadow bg-white">
              <Cover p={lead} className="w-full max-w-[200px] sm:max-w-none aspect-[3/4] rounded-md shadow" />
              <span className="flex flex-col"><Meta p={lead} /><span className="text-lg font-black text-[#123B5D] mt-1 group-hover:text-blue-700">{lead.title}</span><span className="text-sm mt-2">{lead.summary}</span><span className="mt-auto pt-3 inline-flex items-center gap-1 font-bold text-blue-700 text-sm">Read Publication <ArrowRight className="w-4 h-4" /></span></span>
            </button>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 gap-4">
            {rest.map((p, i) => (
              <AnimateOnScroll key={p.slug} type="fade-up" delay={0.08 * (i + 1)}>
                <button onClick={() => open(p.slug)} className="group h-full w-full text-left flex gap-3 border border-[#D7EAF7] rounded-xl p-3 hover:shadow-lg transition-shadow bg-white">
                  <Cover p={p} className="w-20 shrink-0 aspect-[3/4] rounded shadow" />
                  <span><Meta p={p} /><span className="block text-sm font-bold text-[#123B5D] leading-snug mt-0.5 group-hover:text-blue-700">{p.title}</span><span className="mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-blue-700">Read Publication <ArrowRight className="w-3 h-3" /></span></span>
                </button>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
        <button onClick={() => { setTopic(null); setType('All'); setQ(''); setTimeout(goList, 50); }} className="mt-5 font-bold text-sm text-blue-700 inline-flex items-center gap-1">View All Publications <ArrowRight className="w-4 h-4" /></button>
      </Section>

      <Section tint title="Browse by Topic" sub="Explore insights and publications by key topic area.">
        <div className="flex flex-wrap gap-2">
          {TOPICS.map(t => {
            const count = PUBLICATIONS.filter(p => p.topics.includes(t)).length;
            return (
              <button key={t} onClick={() => { setTopic(topic === t ? null : t); setTimeout(goList, 50); }} aria-pressed={topic === t}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${topic === t ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-800 border-[#D7EAF7] hover:border-blue-400'}`}>
                {t} <span className={`ml-1 text-xs ${topic === t ? 'text-blue-100' : 'text-slate-400'}`}>{count}</span>
              </button>
            );
          })}
        </div>
      </Section>

      <Section id="all-publications" title="All Publications" sub={`${list.length} of ${PUBLICATIONS.length} publications${topic ? ` in “${topic}”` : ''}`}>
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <label className="relative flex-1">
            <span className="sr-only">Search publications</span>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search publications…" className="w-full rounded-lg border border-[#D7EAF7] pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </label>
          <div className="flex gap-1 rounded-lg bg-[#F5FAFE] p-1 border border-[#D7EAF7]" role="group" aria-label="Filter by type">
            {(['All', 'White Paper', 'Blog'] as const).map(t => <button key={t} onClick={() => setType(t)} aria-pressed={type === t} className={`flex-1 sm:flex-none rounded-md px-3 py-1.5 text-xs font-bold ${type === t ? 'bg-white shadow text-blue-700' : 'text-slate-500'}`}>{t === 'All' ? 'All' : t + 's'}</button>)}
          </div>
          {(topic || type !== 'All' || q) && <button onClick={() => { setTopic(null); setType('All'); setQ(''); }} className="text-sm font-bold text-blue-700 px-2">Clear filters</button>}
        </div>
        {list.length === 0 ? (
          <p className="rounded-lg bg-[#F5FAFE] border border-[#D7EAF7] p-6 text-center text-sm">No publications match your filters. <button onClick={() => { setTopic(null); setType('All'); setQ(''); }} className="font-bold text-blue-700">Show all</button></p>
        ) : (
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {list.map(p => (
              <li key={p.slug}>
                <button onClick={() => open(p.slug)} className="group h-full w-full text-left flex gap-4 border border-[#D7EAF7] rounded-xl p-3 hover:shadow-lg hover:-translate-y-0.5 transition-all bg-white">
                  <Cover p={p} className="w-24 shrink-0 aspect-[3/4] rounded shadow" />
                  <span className="flex flex-col"><Meta p={p} /><span className="text-sm font-bold text-[#123B5D] leading-snug mt-0.5 group-hover:text-blue-700">{p.title}</span><span className="text-xs mt-1.5 line-clamp-3">{p.summary}</span><span className="mt-auto pt-2 inline-flex items-center gap-1 text-xs font-bold text-blue-700"><FileText className="w-3.5 h-3.5" /> Read &amp; download PDF</span></span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section tint title="Signature Series – The Evolution of QbD" sub="Four connected perspectives for today's pharmaceutical and biotechnology challenges.">
        <ol className="grid md:grid-cols-2 gap-3">{QBD.map(([t, d], i) => <li key={t} className="flex gap-3 bg-white border border-[#D7EAF7] rounded-lg p-3"><span className="font-black text-blue-600">0{i + 1}</span><div><h3 className="font-bold text-sm text-[#123B5D]">{t}</h3><p className="text-xs">{d}</p></div></li>)}</ol>
      </Section>

      <Section title="Executive Learning Series — From Small Molecules to Biologics" sub="Building the Next Generation of Commercialization Leaders. A practical learning roadmap for leaders expanding their understanding across biologics development, manufacturing, technology transfer, validation, and commercialization.">
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">{LEARN.map(([t, d], i) => <li key={t} className="flex gap-3 border border-[#D7EAF7] rounded-lg p-3"><span className="font-black text-blue-600">0{i + 1}</span><div><h3 className="font-bold text-sm text-[#123B5D]">{t}</h3><p className="text-xs">{d}</p></div></li>)}</ol>
      </Section>

      <Section tint title="Latest Perspectives" sub="Recent articles and thought leadership on key commercialization topics.">
        <div className="grid md:grid-cols-3 gap-4">
          {latest.map(p => (
            <button key={p.slug} onClick={() => open(p.slug)} className="group text-left bg-white border border-[#D7EAF7] rounded-xl p-4 hover:shadow-lg transition-shadow">
              <Meta p={p} /><h3 className="font-bold text-sm text-[#123B5D] mt-1 group-hover:text-blue-700">{p.title}</h3><p className="text-xs mt-1.5 line-clamp-3">{p.summary}</p>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-blue-700">Read Perspective <ArrowRight className="w-3 h-3" /></span>
            </button>
          ))}
        </div>
      </Section>

      <Cta title="From Insight to Action" text="Applying this thinking to a current product, site, technology transfer, Technical Operations, AI/digital, or commercialization challenge? Translate the framework into a readiness assessment, risk review, implementation roadmap, or executive advisory discussion." label="Discuss Your Challenge" onClick={openConsultationModal} image="ins-cta" />
    </div>
  );
};
