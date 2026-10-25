import React from 'react';
import { ArrowLeft, Check, Download, ExternalLink, Link2 } from 'lucide-react';
import { Cta, Arrow, img, BtnPrimary } from '../components/Ui';
import { RESOURCES, findResource, formatDate } from '../data/publications';

interface Props { slug: string; navigate: (r: string) => void; openConsultationModal: () => void; showToast: (m: string) => void }

export const BlogDetailPage: React.FC<Props> = ({ slug, navigate, openConsultationModal, showToast }) => {
  const r = findResource(slug);
  if (!r) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center font-sans">
        <h1 className="text-2xl font-black text-[#0A2A7A]">Resource not found</h1>
        <p className="mt-2 text-[#27407A]">The resource you are looking for does not exist or has moved.</p>
        <button onClick={() => navigate('/insights')} className="mt-6 rounded-md bg-[#0A2A8F] px-5 py-2.5 text-sm font-bold text-white">Browse Insights &amp; Resources</button>
      </div>
    );
  }
  const related = RESOURCES.filter(x => x.slug !== r.slug && x.topics.some(t => r.topics.includes(t))).slice(0, 3);
  const share = async () => {
    const url = `${window.location.origin}/insights/${r.slug}`;
    try { if (navigator.share) { await navigator.share({ title: r.title, url }); return; } await navigator.clipboard.writeText(url); showToast('Link copied to clipboard'); }
    catch { showToast('Copy this page address from your browser bar to share it.'); }
  };

  return (
    <div className="bg-white font-sans text-[#27407A]">
      <section className="bg-gradient-to-br from-[#08224D] via-[#0A2463] to-[#0F4C8A] text-white">
        <div className={`mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 ${r.style === 'book' ? 'md:grid-cols-[220px_1fr]' : 'md:grid-cols-[360px_1fr]'}`}>
          <img src={img(r.image)} alt={r.style === 'book' ? `Cover of ${r.title}` : ''} className={`mx-auto w-full rounded-lg border border-white/20 object-cover shadow-2xl ${r.style === 'book' ? 'max-w-[200px] aspect-[4/5] object-top md:max-w-none' : 'max-w-md aspect-[16/10]'}`} />
          <div>
            <button onClick={() => navigate('/insights')} className="mb-3 inline-flex items-center gap-1.5 text-xs font-bold text-blue-200 hover:text-white"><ArrowLeft className="h-3.5 w-3.5" /> Insights &amp; Resources</button>
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-300">{r.kind}</p>
            <h1 className="mt-1 text-2xl font-black leading-tight sm:text-4xl">{r.title}</h1>
            {(r.subtitle || r.tagline) && <p className="mt-2 text-lg font-semibold text-cyan-200">{r.subtitle || r.tagline}</p>}
            {r.fullTitle && <p className="mt-1 text-sm text-blue-200">Full title: {r.fullTitle}</p>}
            <p className="mt-3 text-sm text-blue-200">By Raj Thota{r.date ? ` · ${formatDate(r.date)}` : ''}{r.pages ? ` · ${r.pages} pages (PDF)` : ''}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {r.pdf && <><a href={r.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2.5 text-sm font-bold hover:bg-emerald-600"><ExternalLink className="h-4 w-4" /> Open PDF</a>
                <a href={r.pdf} download className="inline-flex items-center gap-2 rounded-md border border-white/60 px-4 py-2.5 text-sm font-bold hover:bg-white/10"><Download className="h-4 w-4" /> Download</a></>}
              {r.href && <button onClick={() => navigate(r.href!)} className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2.5 text-sm font-bold hover:bg-emerald-600">{r.hrefLabel || 'Learn more'} <Arrow /></button>}
              {!r.pdf && <button onClick={openConsultationModal} className="inline-flex items-center gap-2 rounded-md border border-white/60 px-4 py-2.5 text-sm font-bold hover:bg-white/10">Request this publication</button>}
              <button onClick={share} className="inline-flex items-center gap-2 rounded-md border border-white/60 px-4 py-2.5 text-sm font-bold hover:bg-white/10"><Link2 className="h-4 w-4" /> Share</button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_340px] lg:px-8">
        <div>
          <h2 className="text-xl font-black text-[#0A2A7A]">Overview</h2>
          <p className="mt-2 text-base">{r.summary}</p>
          <h2 className="mt-8 text-xl font-black text-[#0A2A7A]">{r.kind === 'Learning Series' ? 'Series modules' : 'Key takeaways'}</h2>
          <ul className="mt-3 space-y-2.5">{r.takeaways.map(t => <li key={t} className="flex gap-3 rounded-lg border border-[#D7EAF7] bg-[#F4F9FE] p-3 text-sm"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white"><Check className="h-3 w-3" /></span>{t}</li>)}</ul>
          <div className="mt-6 flex flex-wrap gap-2">{r.topics.map(t => <span key={t} className="rounded-full bg-[#E6F0FF] px-3 py-1 text-xs font-bold text-[#0A2A7A]">{t}</span>)}</div>
        </div>
        <aside className="h-fit rounded-xl border border-[#D7EAF7] bg-white p-5">
          <h2 className="font-black text-[#0A2A7A]">Discuss this topic</h2>
          <p className="mt-1 text-sm">Applying this thinking to your own program? Start with a confidential, high-level conversation.</p>
          <BtnPrimary onClick={openConsultationModal} className="mt-4 w-full">Discuss Your Project</BtnPrimary>
        </aside>
      </section>

      {r.pdf ? (
        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-xl font-black text-[#0A2A7A]">Read the full publication</h2>
          <iframe title={r.title} src={`${r.pdf}#view=FitH`} className="hidden h-[80vh] w-full rounded-xl border border-[#D7EAF7] bg-slate-50 md:block" />
          <div className="rounded-xl border border-[#D7EAF7] bg-[#F4F9FE] p-5 text-center text-sm md:hidden">
            <p>The full {r.pages}-page PDF opens best in your device&rsquo;s PDF viewer.</p>
            <a href={r.pdf} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-2.5 font-bold text-white"><ExternalLink className="h-4 w-4" /> Open PDF</a>
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-dashed border-blue-300 bg-[#F4F9FE] p-6 text-center">
            <h2 className="text-lg font-black text-[#0A2A7A]">Full publication available on request</h2>
            <p className="mx-auto mt-1 max-w-xl text-sm">Tell us a little about your program and we will share this publication and discuss how it applies to your work.</p>
            <BtnPrimary tone="green" onClick={openConsultationModal} className="mt-4">Request this publication</BtnPrimary>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="bg-[#F4F9FE] py-10"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-xl font-black text-[#0A2A7A]">Related resources</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map(x => (
              <button key={x.slug} onClick={() => navigate(`/insights/${x.slug}`)} className="group flex gap-3 rounded-xl border border-[#D7EAF7] bg-white p-3 text-left transition-shadow hover:shadow-lg">
                <img src={img(x.image)} alt="" loading="lazy" className="h-20 w-20 shrink-0 rounded object-cover" style={x.style === 'book' ? { objectPosition: 'top' } : undefined} />
                <span><span className="block text-[10px] font-extrabold uppercase tracking-wider text-emerald-600">{x.kind}</span><span className="block text-sm font-bold leading-snug text-[#0A2A7A] group-hover:text-blue-600">{x.title}</span></span>
              </button>
            ))}
          </div>
        </div></section>
      )}

      <Cta image="ins-25" title={<>From Insight to <span className="text-cyan-300">Execution</span></>} text="The same thinking can be applied through CMC development support, project leadership, technology transfer, on-site technical support and readiness assessment." label="Discuss Your Project" onClick={openConsultationModal} />
    </div>
  );
};
