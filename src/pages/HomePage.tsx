import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { img, Eyebrow } from '../components/Ui';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { FlowTrack, ChevronStages, CountUp } from '../components/Flows';
import { PATHWAY, FRAMEWORK_STAGES, VALUE_AREAS, DIFFERENCE, FOUNDER_STATS, WHAT_GAPS, ONE_LINES } from '../data/commercialization';
import { PUBLICATIONS, FEATURED, formatDate } from '../data/publications';

interface HomePageProps { navigate: (route: string) => void; openConsultationModal: () => void }

export const HomePage: React.FC<HomePageProps> = ({ navigate, openConsultationModal }) => (
  <div className="font-sans text-[#536B7D] bg-white">
    {/* Hero */}
    <section className="relative bg-[#0B2A5B] text-white overflow-hidden">
      <img src={img('home-hero')} alt="" aria-hidden="true" className="absolute right-0 top-0 h-full w-full lg:w-3/5 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A5B] via-[#0B2A5B]/90 lg:via-[#0B2A5B]/70 to-[#0B2A5B]/30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-black leading-tight">Transforming Scientific Innovation into <span className="text-cyan-300">Commercial Manufacturing Success</span></h1>
          <p className="mt-5 text-base sm:text-lg font-semibold">Enterprise Pharmaceutical &amp; Biotechnology Commercialization Advisory</p>
          <p className="mt-2 text-xs sm:text-sm text-blue-100">CMC | MS&amp;T | Technical Operations | Technology Transfer | Manufacturing Readiness | Commercialization | AI &amp; Digital Transformation</p>
          <p className="mt-4 text-sm text-blue-100 max-w-xl">InnoTech helps organizations transform development knowledge into scalable manufacturing capability, commercialization readiness, and reliable commercial supply.</p>
          <p className="mt-4 text-sm font-extrabold tracking-wide">BUILD PRODUCTS. BUILD MANUFACTURING. BUILD CAPABILITY.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button onClick={() => navigate('/our-expertise')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-md inline-flex items-center justify-center gap-2">Explore Our Expertise <ArrowRight className="w-4 h-4" /></button>
            <button onClick={openConsultationModal} className="border border-white/70 hover:bg-white/10 text-white font-bold text-sm px-6 py-3 rounded-md inline-flex items-center justify-center gap-2 text-center">Discuss Your Commercialization Challenge <ArrowRight className="w-4 h-4 shrink-0" /></button>
          </div>
        </div>
      </div>
    </section>

    {/* Pillars */}
    <section className="border-b border-[#D7EAF7] bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center text-sm font-bold text-[#123B5D] divide-x divide-[#D7EAF7]">
        {['Scientific Depth', 'Practical Execution', 'End-to-End Perspective', 'Measurable Impact'].map(p => <div key={p} className="py-5 px-3 even:border-r-0">{p}</div>)}
      </div>
    </section>

    {/* Challenge + animated pathway */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <AnimateOnScroll type="slide-right" className="space-y-4">
          <Eyebrow text="The Commercialization Challenge" />
          <h2 className="text-2xl sm:text-3xl font-black text-[#123B5D]">Scientific Success Does Not Automatically Become Commercial Success</h2>
          <p className="text-sm sm:text-base">The greatest commercialization risks often emerge as products move across Development, CMC, MS&amp;T, Engineering, Manufacturing, Quality, Regulatory, Supply Chain, and Commercial.</p>
          <p className="text-sm sm:text-base">InnoTech helps identify and address these gaps before they become validation problems, regulatory delays, launch risks, or supply disruptions.</p>
          <ul className="flex flex-wrap gap-2 pt-1" aria-label="Functions where gaps emerge">
            {WHAT_GAPS.map(g => <li key={g} className="rounded-full bg-[#EAF6FD] px-3 py-1.5 text-xs font-bold text-[#123B5D]">{g}</li>)}
          </ul>
        </AnimateOnScroll>
        <AnimateOnScroll type="slide-left">
          <img src={img('exp-hero')} alt="Pharmaceutical vial filling line with a technician" loading="lazy" className="rounded-2xl w-full aspect-[16/10] object-cover shadow-lg" />
        </AnimateOnScroll>
      </div>
      <div className="mt-12"><FlowTrack items={PATHWAY} /></div>
    </section>

    {/* Enterprise framework (interactive) */}
    <section className="bg-[#F5FAFE] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10">
          <AnimateOnScroll type="slide-right" className="space-y-4">
            <Eyebrow text="Enterprise Commercialization Framework" />
            <h2 className="text-2xl sm:text-3xl font-black text-[#123B5D]">Enterprise Commercialization</h2>
            <p className="text-sm sm:text-base">Commercialization is not a single event at approval or launch. It is the progressive conversion of product and process knowledge into manufacturing capability, organizational readiness, and reliable supply.</p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-1">
              {ONE_LINES.map(([t, d]) => (
                <li key={t} className="flex gap-2.5 rounded-lg bg-white border border-[#D7EAF7] p-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white"><Check className="w-3 h-3" /></span>
                  <span><strong className="block text-[13px] text-[#123B5D]">{t}</strong><span className="text-xs">{d}</span></span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
          <AnimateOnScroll type="slide-left">
            <div className="grid grid-cols-5 grid-rows-2 gap-2 h-64 sm:h-80">
              <img src={img('about-hero')} alt="Vial filling line" loading="lazy" className="col-span-3 row-span-2 h-full w-full rounded-xl object-cover" />
              <img src={img('exp-2')} alt="Scientist at a manufacturing control panel" loading="lazy" className="col-span-2 h-full w-full rounded-xl object-cover" />
              <img src={img('svc-6')} alt="Digital twin of a manufacturing plant" loading="lazy" className="col-span-2 h-full w-full rounded-xl object-cover" />
            </div>
          </AnimateOnScroll>
        </div>
        <ChevronStages stages={FRAMEWORK_STAGES} />
        <button onClick={() => navigate('/frameworks')} className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-2.5 rounded-md w-full sm:w-auto">Explore the Framework</button>
      </div>
    </section>

    {/* Where we create value */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-black text-blue-700 mb-6">Where We Create Value</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {VALUE_AREAS.map((v, i) => (
          <AnimateOnScroll key={v.title} type="fade-up" delay={(i % 3) * 0.08}>
            <button onClick={() => navigate(v.to)} className="h-full w-full text-left border border-[#D7EAF7] rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all bg-white">
              <img src={img(['val-cmc', 'val-mst', 'val-tt', 'val-launch', 'val-special', 'val-ai'][i])} alt="" loading="lazy" className="w-full h-36 object-cover" />
              <div className="p-4"><h3 className="font-bold text-blue-700">{v.title}</h3><p className="text-sm mt-1.5">{v.text}</p></div>
            </button>
          </AnimateOnScroll>
        ))}
      </div>
    </section>

    {/* The InnoTech difference */}
    <section className="bg-[#F5FAFE] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-black text-blue-700 mb-6">The InnoTech Difference</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DIFFERENCE.map(([t, d], i) => (
            <AnimateOnScroll key={t} type="fade-up" delay={(i % 3) * 0.08}>
              <div className="h-full bg-white border border-[#D7EAF7] rounded-lg p-4">
                <span className="text-xs font-black text-emerald-600">0{i + 1}</span>
                <h3 className="font-bold text-blue-700 text-sm mt-1">{t}</h3>
                <p className="text-sm mt-1">{d}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>

    {/* Founder strip */}
    <section className="relative bg-[#0B2A5B] text-white py-10 overflow-hidden">
      <img src={img('who-cta')} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Selected Career Experience of InnoTech Founder Raj Thota</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {FOUNDER_STATS.map(([n, l], i) => (
            <div key={n} className={`bg-emerald-100 text-[#123B5D] rounded-md text-center py-4 px-2 ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}>
              <CountUp value={n} className="block text-2xl font-black" /><div className="text-xs font-semibold">{l}</div>
            </div>
          ))}
        </div>
        <p className="text-sm mt-4 text-blue-100">Experience spans Pharmaceutical Development, CMC, MS&amp;T, Technical Operations, technology transfer, validation, manufacturing/site leadership, external manufacturing, commercialization, and executive advisory.</p>
      </div>
    </section>

    {/* Executive insights: real publications */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-black text-blue-700">Executive Insights</h2>
          <p className="text-sm sm:text-base mt-1.5">Explore practical frameworks and executive perspectives at the intersection of science, manufacturing, technology, and commercialization.</p>
        </div>
        <button onClick={() => navigate('/insights')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-2.5 rounded-md inline-flex items-center justify-center gap-2 shrink-0">Explore Insights <ArrowRight className="w-4 h-4" /></button>
      </div>
      <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar lg:grid lg:grid-cols-5 lg:overflow-visible">
        {FEATURED.map(slug => PUBLICATIONS.find(p => p.slug === slug)!).map(p => (
          <li key={p.slug} className="snap-start shrink-0 w-44 sm:w-52 lg:w-auto">
            <button onClick={() => navigate(`/insights/${p.slug}`)} className="group block w-full text-left">
              <span className="block overflow-hidden rounded-lg border border-[#D7EAF7] shadow-sm group-hover:shadow-lg transition-shadow bg-white">
                <img src={p.cover} alt={`Cover of ${p.title}`} loading="lazy" className="w-full aspect-[3/4] object-cover object-top" />
              </span>
              <span className="mt-2 block text-[10px] font-extrabold uppercase tracking-wider text-emerald-600">{p.type} · {formatDate(p.date)}</span>
              <span className="block text-[13px] font-bold text-[#123B5D] leading-snug line-clamp-3 group-hover:text-blue-700">{p.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>

    {/* Closing CTA */}
    <section className="relative bg-[#0B2A5B] text-white py-12 overflow-hidden">
      <img src={img('home-cta')} alt="" aria-hidden="true" className="absolute right-0 top-0 h-full w-full lg:w-3/5 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A5B] via-[#0B2A5B]/90 to-[#0B2A5B]/40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-black">Where Is Your Commercialization Risk?</h2>
          <p className="text-sm text-blue-100 mt-2">Whether the challenge is development readiness, technology transfer, manufacturing capability, PPQ, launch, supply, or technical transformation, the right time to understand the risk is before it becomes critical path.</p>
        </div>
        <button onClick={openConsultationModal} className="bg-blue-600 hover:bg-blue-700 font-bold text-sm px-6 py-3 rounded-md inline-flex items-center justify-center gap-2 shrink-0">Discuss Your Commercialization Challenge <ArrowRight className="w-4 h-4" /></button>
      </div>
    </section>
  </div>
);
