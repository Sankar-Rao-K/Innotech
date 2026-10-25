import React, { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { Hero, SectionHead, Cta, Arrow, img, NAVY } from '../components/Ui';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { RESOURCES, TOPICS, TABS, Tab, Resource, tabMatches, bySlug, formatDate, FEATURED_MAIN, FEATURED_SIDE, PUBLICATION_ROW, ARTICLE_ROW, LATEST, findResource } from '../data/publications';

const Thumb: React.FC<{ r: Resource; className?: string }> = ({ r, className = '' }) => (
  <img src={img(r.image)} alt={r.style === 'book' ? `Cover of ${r.title}` : ''} loading="lazy" className={`w-full object-cover ${r.style === 'book' ? 'aspect-[4/5] object-top' : 'aspect-[16/10]'} ${className}`} />
);
const KindTag: React.FC<{ r: Resource }> = ({ r }) => <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600">{r.kind}{r.date ? ` · ${formatDate(r.date)}` : ''}</span>;

export const BlogsPage: React.FC<{ navigate: (r: string) => void; openConsultationModal: () => void }> = ({ navigate, openConsultationModal }) => {
  const [tab, setTab] = useState<Tab>('Featured');
  const [topic, setTopic] = useState<string | null>(null);
  const [q, setQ] = useState('');
  const open = (slug: string) => navigate(`/insights/${slug}`);
  const toLibrary = () => setTimeout(() => document.getElementById('library')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  const reset = () => { setTab('Featured'); setTopic(null); setQ(''); };

  // arriving from another page with a topic pre-selected (for example Expertise "Learn More")
  useEffect(() => {
    try { const t = sessionStorage.getItem('insights-topic'); if (t && TOPICS.includes(t)) { setTopic(t); sessionStorage.removeItem('insights-topic'); toLibrary(); } } catch { /* ignore */ }
  }, []);

  const list = useMemo(() => {
    const k = q.trim().toLowerCase();
    return RESOURCES.filter(r => tabMatches(tab, r) && (!topic || r.topics.includes(topic)) && (!k || (r.title + ' ' + r.subtitle + ' ' + r.summary).toLowerCase().includes(k)));
  }, [tab, topic, q]);
  const filtering = tab !== 'Featured' || !!topic || !!q;

  const main = findResource(FEATURED_MAIN)!;
  const side = bySlug(FEATURED_SIDE), pubRow = bySlug(PUBLICATION_ROW), artRow = bySlug(ARTICLE_ROW), latest = bySlug(LATEST);

  return (
    <div className="font-sans bg-white">
      <Hero variant="dark" image="ins-23" title="Insights & Resources" sub="Connecting Science, Development, Manufacturing and Commercialization"
        aside={
          <div className="relative flex h-60 items-center justify-center sm:h-72">
            {['ins-7', 'ins-6', 'ins-9', 'ins-10'].map((im, i) => (
              <img key={im} src={img(im)} alt="" aria-hidden="true" className="absolute aspect-[4/5] w-28 rounded-md border border-white/30 object-cover shadow-2xl sm:w-36 lg:w-40" style={{ left: `calc(50% + ${(i - 1.5) * 64}px - 4.5rem)`, transform: `rotate(${(i - 1.5) * 5}deg) translateY(${Math.abs(i - 1.5) * 6}px)`, zIndex: i }} />
            ))}
          </div>
        }>
        <p>Explore InnoTech perspectives, white papers, executive guides, playbooks, frameworks and technical articles addressing pharmaceutical development, CMC, MS&amp;T, technology transfer, manufacturing, commercialization, lifecycle management and emerging digital technologies.</p>
      </Hero>

      <nav aria-label="Resource types" className="sticky top-[61px] z-30 border-b border-[#D7EAF7] bg-white/95 backdrop-blur sm:top-[69px]">
        <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-2.5 no-scrollbar sm:px-6 lg:px-8">
          {TABS.map(t => (
            <li key={t} className="shrink-0">
              <button onClick={() => { setTab(t); setTopic(null); setQ(''); if (t !== 'Featured') toLibrary(); }} aria-pressed={tab === t} className={`rounded-lg px-4 py-2.5 text-[13px] font-bold transition-colors ${tab === t ? 'bg-[#0A2A8F] text-white shadow' : `bg-[#E6F0FF] ${NAVY} hover:bg-blue-100`}`}>{t}</button>
            </li>
          ))}
        </ul>
      </nav>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <SectionHead title="Featured Publications" sub="In-depth executive perspectives on key commercialization topics." />
          <button onClick={() => { reset(); toLibrary(); }} className={`hidden shrink-0 items-center gap-1.5 text-sm font-extrabold sm:inline-flex ${NAVY} hover:text-blue-600`}>View All Publications <Arrow /></button>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,3fr)]">
          <AnimateOnScroll type="fade-up">
            <button onClick={() => open(main.slug)} className="group grid h-full w-full gap-4 rounded-xl border border-[#D7EAF7] bg-white p-4 text-left shadow-sm transition-shadow hover:shadow-lg sm:grid-cols-[170px_1fr] lg:grid-cols-1 xl:grid-cols-[150px_1fr]">
              <Thumb r={main} className="mx-auto max-w-[220px] rounded-md shadow lg:max-w-none" />
              <span className="flex flex-col">
                <span className="w-fit rounded bg-emerald-500 px-2 py-0.5 text-[10px] font-extrabold text-white">FEATURED</span>
                <span className={`mt-2 text-lg font-black leading-snug ${NAVY}`}>Good AI Practice</span>
                <span className="mt-1.5 text-sm text-[#27407A]">Executive interpretation for pharmaceutical biotechnology development, manufacturing and commercialization.</span>
                <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-md bg-[#0A2A8F] px-4 py-2 text-sm font-bold text-white">Read Publication <Arrow /></span>
              </span>
            </button>
          </AnimateOnScroll>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
            {side.map((r, i) => (
              <AnimateOnScroll as="li" key={r.slug} type="fade-up" delay={i * 0.06} className="list-none">
                <button onClick={() => open(r.slug)} className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-[#D7EAF7] bg-white text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <Thumb r={r} />
                  <span className="flex flex-1 flex-col p-3">
                    <span className={`text-[13px] font-extrabold leading-snug ${NAVY} group-hover:text-blue-600`}>{r.title}</span>
                    <span className="mt-1 text-xs leading-snug text-[#27407A]">{r.tagline || r.subtitle || r.summary.split('.')[0] + '.'}</span>
                    <span className={`mt-auto inline-flex items-center gap-1 pt-2 text-xs font-extrabold ${NAVY}`}>Read Publication <ArrowRight className="h-3 w-3" /></span>
                  </span>
                </button>
              </AnimateOnScroll>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#F4F9FE] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead title="Browse by Topic" sub="Explore insights and publications by key topic area." />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {TOPICS.map(t => {
              const on = topic === t;
              return (
                <li key={t}>
                  <button onClick={() => { setTopic(on ? null : t); setTab('Featured'); toLibrary(); }} aria-pressed={on} className={`flex h-full w-full items-center justify-between gap-2 rounded-lg border px-3.5 py-3 text-left text-[13px] font-bold transition-all ${on ? 'border-[#0A2A8F] bg-[#0A2A8F] text-white shadow' : `border-[#D7EAF7] bg-white ${NAVY} hover:-translate-y-0.5 hover:border-blue-300`}`}>
                    <span>{t}</span><ArrowRight className="h-4 w-4 shrink-0" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <SectionHead title="White Papers & Executive Publications" sub="Curated library of white papers, executive guides and playbooks covering development through commercialization." />
          <button onClick={() => { reset(); toLibrary(); }} className={`hidden shrink-0 items-center gap-1.5 text-sm font-extrabold sm:inline-flex ${NAVY} hover:text-blue-600`}>View All Publications <Arrow /></button>
        </div>
        <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-8">
          {pubRow.map((r, i) => (
            <AnimateOnScroll as="li" key={r.slug} type="fade-up" delay={(i % 4) * 0.05} className="list-none">
              <button onClick={() => open(r.slug)} className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-[#D7EAF7] bg-white text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <Thumb r={r} />
                <span className="flex flex-1 flex-col p-2.5"><span className="text-[10px] font-extrabold uppercase tracking-wide text-[#0A2A7A]">{r.kind}</span><span className={`mt-0.5 text-[12.5px] font-bold leading-snug ${NAVY} group-hover:text-blue-600`}>{r.title}</span></span>
              </button>
            </AnimateOnScroll>
          ))}
        </ul>
      </section>

      <section className="bg-[#F4F9FE] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <SectionHead title="Technical Articles & Perspectives" sub="In-depth technical articles and executive commentary." />
            <button onClick={() => { setTab('Technical Articles & Perspectives'); setTopic(null); setQ(''); toLibrary(); }} className={`hidden shrink-0 items-center gap-1.5 text-sm font-extrabold sm:inline-flex ${NAVY} hover:text-blue-600`}>View All Articles <Arrow /></button>
          </div>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {artRow.map((r, i) => (
              <AnimateOnScroll as="li" key={r.slug} type="fade-up" delay={i * 0.07} className="list-none">
                <button onClick={() => open(r.slug)} className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-[#D7EAF7] bg-white text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <img src={img(r.image)} alt="" loading="lazy" className="h-36 w-full object-cover" />
                  <span className="flex flex-1 flex-col p-3.5"><span className={`text-sm font-extrabold leading-snug ${NAVY} group-hover:text-blue-600`}>{r.title}</span><span className={`mt-auto inline-flex items-center gap-1 pt-2 text-xs font-extrabold ${NAVY}`}>{r.kind} <ArrowRight className="h-3 w-3" /></span></span>
                </button>
              </AnimateOnScroll>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <SectionHead title="Latest Perspectives" sub="Recent articles, guides and thought leadership on key commercialization topics." />
          <button onClick={() => { reset(); toLibrary(); }} className={`hidden shrink-0 items-center gap-1.5 text-sm font-extrabold sm:inline-flex ${NAVY} hover:text-blue-600`}>View All Insights &amp; Resources <Arrow /></button>
        </div>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {latest.map((r, i) => (
            <AnimateOnScroll as="li" key={r.slug} type="fade-up" delay={i * 0.07} className="list-none">
              <button onClick={() => open(r.slug)} className="group grid h-full w-full grid-cols-[120px_1fr] overflow-hidden rounded-xl border border-[#D7EAF7] bg-white text-left shadow-sm transition-all hover:shadow-lg">
                <img src={img(r.image)} alt="" loading="lazy" className="h-full w-full object-cover" />
                <span className="p-3.5"><span className={`block text-sm font-extrabold leading-snug ${NAVY} group-hover:text-blue-600`}>{r.title}</span><span className={`mt-2 inline-flex items-center gap-1 text-xs font-extrabold ${NAVY}`}>{r.kind} <ArrowRight className="h-3 w-3" /></span></span>
              </button>
            </AnimateOnScroll>
          ))}
        </ul>
      </section>

      <section id="library" className="scroll-mt-32 bg-[#F4F9FE] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead title="All Insights & Resources" sub={`${list.length} of ${RESOURCES.length} resources${tab !== 'Featured' ? ` · ${tab}` : ''}${topic ? ` · ${topic}` : ''}`} />
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="relative flex-1"><span className="sr-only">Search resources</span><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search resources…" className="w-full rounded-lg border border-[#D7EAF7] bg-white py-2.5 pl-9 pr-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 sm:text-sm" /></label>
            {filtering && <button onClick={reset} className="text-sm font-bold text-blue-700">Clear filters</button>}
          </div>
          {list.length === 0 ? (
            <p className="mt-6 rounded-lg border border-[#D7EAF7] bg-white p-6 text-center text-sm">No resources match your filters. <button onClick={reset} className="font-bold text-blue-700">Show all</button></p>
          ) : (
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {list.map(r => (
                <li key={r.slug}>
                  <button onClick={() => open(r.slug)} className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-[#D7EAF7] bg-white text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                    <img src={img(r.image)} alt="" loading="lazy" className="h-40 w-full object-cover" style={r.style === 'book' ? { objectPosition: 'top' } : undefined} />
                    <span className="flex flex-1 flex-col p-3.5"><KindTag r={r} /><span className={`mt-1 text-sm font-extrabold leading-snug ${NAVY} group-hover:text-blue-600`}>{r.title}</span><span className="mt-1.5 line-clamp-3 text-xs text-[#27407A]">{r.summary}</span>
                      <span className={`mt-auto inline-flex items-center gap-1 pt-2.5 text-xs font-extrabold ${NAVY}`}>{r.pdf ? 'Read & download PDF' : 'View details'} <ArrowRight className="h-3 w-3" /></span></span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <Cta image="ins-25" title={<>From Insight to <span className="text-cyan-300">Execution</span></>} text="These resources reflect how InnoTech approaches real development, CMC, manufacturing and commercialization challenges. The same thinking can be applied through CMC development support, project leadership, technology transfer, on-site technical support, readiness assessment, and professional development." label="Discuss Your Project" onClick={openConsultationModal} />
    </div>
  );
};
