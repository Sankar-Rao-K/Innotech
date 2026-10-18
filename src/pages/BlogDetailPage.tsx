import React from 'react';
import { ArrowLeft, ArrowRight, Check, Download, ExternalLink, Link2 } from 'lucide-react';
import { Cta } from '../components/Ui';
import { PUBLICATIONS, findPublication, formatDate } from '../data/publications';

interface Props { slug: string; navigate: (r: string) => void; openConsultationModal: () => void; showToast: (m: string) => void }

export const BlogDetailPage: React.FC<Props> = ({ slug, navigate, openConsultationModal, showToast }) => {
  const p = findPublication(slug);
  if (!p) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center font-sans">
        <h1 className="text-2xl font-black text-[#123B5D]">Publication not found</h1>
        <p className="mt-2 text-[#536B7D]">The publication you are looking for does not exist or has moved.</p>
        <button onClick={() => navigate('/insights')} className="mt-6 bg-blue-600 text-white font-bold text-sm px-5 py-2.5 rounded-md">Browse all publications</button>
      </div>
    );
  }
  const idx = PUBLICATIONS.findIndex(x => x.slug === slug);
  const related = PUBLICATIONS.filter(x => x.slug !== slug && x.topics.some(t => p.topics.includes(t))).slice(0, 3);
  const prev = PUBLICATIONS[idx + 1], next = PUBLICATIONS[idx - 1];
  const share = async () => {
    const url = `${window.location.origin}/insights/${p.slug}`;
    try {
      if (navigator.share) { await navigator.share({ title: p.title, url }); return; }
      await navigator.clipboard.writeText(url);
      showToast('Link copied to clipboard');
    } catch { showToast('Copy this page address from your browser bar to share it.'); }
  };

  return (
    <div className="font-sans text-[#536B7D] bg-white">
      <section className="bg-gradient-to-br from-[#08224D] via-[#0B2A5B] to-[#0F4C8A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 grid md:grid-cols-[200px_1fr] gap-8 items-center">
          <img src={p.cover} alt={`Cover of ${p.title}`} className="w-40 md:w-full mx-auto rounded-md shadow-2xl border border-white/20 aspect-[3/4] object-cover object-top" />
          <div>
            <button onClick={() => navigate('/insights')} className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-200 hover:text-white mb-3"><ArrowLeft className="w-3.5 h-3.5" /> All Insights</button>
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-300">{p.type}</p>
            <h1 className="text-2xl sm:text-4xl font-black leading-tight mt-1">{p.title}</h1>
            <p className="text-sm text-blue-200 mt-3">By {p.author} · {formatDate(p.date)} · {p.pages} pages (PDF)</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href={p.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 hover:bg-emerald-600 px-4 py-2.5 text-sm font-bold"><ExternalLink className="w-4 h-4" /> Open PDF</a>
              <a href={p.pdf} download className="inline-flex items-center gap-2 rounded-md border border-white/60 hover:bg-white/10 px-4 py-2.5 text-sm font-bold"><Download className="w-4 h-4" /> Download</a>
              <button onClick={share} className="inline-flex items-center gap-2 rounded-md border border-white/60 hover:bg-white/10 px-4 py-2.5 text-sm font-bold"><Link2 className="w-4 h-4" /> Share</button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid lg:grid-cols-[1fr_340px] gap-8">
        <div>
          <h2 className="text-xl font-black text-blue-700">Overview</h2>
          <p className="mt-2 text-base">{p.summary}</p>
          <h2 className="text-xl font-black text-blue-700 mt-8">Key takeaways</h2>
          <ul className="mt-3 space-y-2.5">
            {p.takeaways.map(t => <li key={t} className="flex gap-3 rounded-lg bg-[#F5FAFE] border border-[#D7EAF7] p-3 text-sm"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white"><Check className="w-3 h-3" /></span>{t}</li>)}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">{p.topics.map(t => <span key={t} className="rounded-full bg-[#EAF6FD] px-3 py-1 text-xs font-bold text-[#123B5D]">{t}</span>)}</div>
        </div>
        <aside className="rounded-xl border border-[#D7EAF7] p-5 h-fit bg-white">
          <h2 className="font-black text-[#123B5D]">Discuss this topic</h2>
          <p className="text-sm mt-1">Applying this thinking to your own product or site? Start with a confidential, high-level conversation.</p>
          <button onClick={openConsultationModal} className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-4 py-2.5 rounded-md">Discuss Your Challenge</button>
        </aside>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <h2 className="text-xl font-black text-blue-700 mb-3">Read the full publication</h2>
        <iframe title={p.title} src={`${p.pdf}#view=FitH`} className="hidden md:block w-full h-[80vh] rounded-xl border border-[#D7EAF7] bg-slate-50" />
        <div className="md:hidden rounded-xl border border-[#D7EAF7] bg-[#F5FAFE] p-5 text-center text-sm">
          <p>The full {p.pages}-page PDF opens best in your device&rsquo;s PDF viewer.</p>
          <a href={p.pdf} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-md"><ExternalLink className="w-4 h-4" /> Open PDF</a>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-[#F5FAFE] py-10"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-blue-700 mb-4">Related publications</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {related.map(r => (
              <button key={r.slug} onClick={() => navigate(`/insights/${r.slug}`)} className="group flex gap-3 text-left bg-white border border-[#D7EAF7] rounded-xl p-3 hover:shadow-lg transition-shadow">
                <img src={r.cover} alt="" loading="lazy" className="w-16 shrink-0 aspect-[3/4] object-cover object-top rounded" />
                <span><span className="block text-[10px] font-extrabold uppercase tracking-wider text-emerald-600">{r.type}</span><span className="block text-sm font-bold text-[#123B5D] group-hover:text-blue-700 leading-snug">{r.title}</span></span>
              </button>
            ))}
          </div>
        </div></section>
      )}

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between gap-4 text-sm font-bold text-blue-700" aria-label="More publications">
        {prev ? <button onClick={() => navigate(`/insights/${prev.slug}`)} className="inline-flex items-center gap-1.5 text-left"><ArrowLeft className="w-4 h-4 shrink-0" /> Older</button> : <span />}
        {next ? <button onClick={() => navigate(`/insights/${next.slug}`)} className="inline-flex items-center gap-1.5 text-right">Newer <ArrowRight className="w-4 h-4 shrink-0" /></button> : <span />}
      </nav>

      <Cta title="From Insight to Action" text="Translate the framework into a readiness assessment, risk review, implementation roadmap, or executive advisory discussion." label="Discuss Your Challenge" onClick={openConsultationModal} image="ins-cta" />
    </div>
  );
};
