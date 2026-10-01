import React from 'react';
import { ArrowRight } from 'lucide-react';
import { img } from '../components/Ui';
import { PATHWAY, FRAMEWORK_STAGES, VALUE_AREAS, DIFFERENCE, FOUNDER_STATS, COVERS } from '../data/commercialization';

interface HomePageProps {
  navigate: (route: string) => void;
  openConsultationModal: () => void;
}

const Eyebrow = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#123B5D]">
    <span className="h-0.5 w-8 bg-emerald-500" />{text}
  </div>
);

export const HomePage: React.FC<HomePageProps> = ({ navigate, openConsultationModal }) => (
  <div className="font-sans text-[#536B7D] bg-white">
    {/* Hero */}
    <section className="relative bg-[#0B2A5B] text-white overflow-hidden">
      <img src={img('home-hero')} alt="" aria-hidden="true" className="absolute right-0 top-0 h-full w-full lg:w-3/5 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A5B] via-[#0B2A5B]/85 lg:via-[#0B2A5B]/60 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"><div className="max-w-3xl">
        <h1 className="text-3xl sm:text-5xl font-black leading-tight">
          Transforming Scientific Innovation into <span className="text-cyan-300">Commercial Manufacturing Success</span>
        </h1>
        <p className="mt-5 text-lg font-semibold">Enterprise Pharmaceutical &amp; Biotechnology Commercialization Advisory</p>
        <p className="mt-2 text-sm text-blue-100">CMC | MS&amp;T | Technical Operations | Technology Transfer | Manufacturing Readiness | Commercialization | AI &amp; Digital Transformation</p>
        <p className="mt-4 text-sm text-blue-100 max-w-xl">InnoTech helps organizations transform development knowledge into scalable manufacturing capability, commercialization readiness, and reliable commercial supply.</p>
        <p className="mt-4 text-sm font-extrabold tracking-wide">BUILD PRODUCTS. BUILD MANUFACTURING. BUILD CAPABILITY.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={() => navigate('/our-expertise')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-md inline-flex items-center gap-2">Explore Our Expertise <ArrowRight className="w-4 h-4" /></button>
          <button onClick={openConsultationModal} className="border border-white/70 hover:bg-white/10 text-white font-bold text-sm px-6 py-3 rounded-md inline-flex items-center gap-2">Discuss Your Commercialization Challenge <ArrowRight className="w-4 h-4" /></button>
        </div>
      </div></div>
    </section>

    {/* Pillars */}
    <section className="border-b border-[#D7EAF7]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center text-sm font-bold text-[#123B5D] divide-x divide-[#D7EAF7]">
        {['Scientific Depth', 'Practical Execution', 'End-to-End Perspective', 'Measurable Impact'].map(p => <div key={p} className="py-5 px-3">{p}</div>)}
      </div>
    </section>

    {/* Challenge */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-2 gap-10 items-center">
      <div className="space-y-4">
        <Eyebrow text="The Commercialization Challenge" />
        <h2 className="text-3xl font-black text-[#123B5D]">Scientific Success Does Not Automatically Become Commercial Success</h2>
        <p className="text-sm">The greatest commercialization risks often emerge as products move across Development, CMC, MS&amp;T, Engineering, Manufacturing, Quality, Regulatory, Supply Chain, and Commercial.</p>
        <p className="text-sm">InnoTech helps identify and address these gaps before they become validation problems, regulatory delays, launch risks, or supply disruptions.</p>
      </div>
      <img src={img('home-capsules')} alt="Pharmaceutical capsules" className="rounded-lg w-full h-64 object-cover" />
      <ol className="lg:col-span-2 grid grid-cols-2 md:grid-cols-7 gap-2 text-center text-[11px] font-bold text-[#123B5D]">
        {PATHWAY.map(p => <li key={p} className="bg-[#EAF6FD] rounded px-2 py-3">{p}</li>)}
      </ol>
    </section>

    {/* Enterprise framework */}
    <section className="bg-[#F5FAFE] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <Eyebrow text="Enterprise Commercialization Framework" />
            <h2 className="text-3xl font-black text-[#123B5D]">Enterprise Commercialization</h2>
            <p className="text-sm max-w-2xl">Commercialization is not a single event at approval or launch. It is the progressive conversion of product and process knowledge into manufacturing capability, organizational readiness, and reliable supply.</p>
          </div>
          <img src={img('home-scientists')} alt="Scientists in a pharmaceutical manufacturing suite" className="rounded-lg w-full h-56 object-cover hidden md:block" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-8 gap-1">
          {FRAMEWORK_STAGES.map(s => (
            <div key={s.stage} className="text-center">
              <div className="text-white text-[11px] font-extrabold py-3 rounded-sm" style={{ background: s.color }}>{s.stage}</div>
              <div className="text-[11px] mt-1 font-medium text-[#123B5D]">{s.area}</div>
            </div>
          ))}
        </div>
        <button onClick={() => navigate('/frameworks')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-2.5 rounded-md">Explore the Framework</button>
      </div>
    </section>

    {/* Where we create value */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h2 className="text-3xl font-black text-blue-700 mb-6">Where We Create Value</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {VALUE_AREAS.map((v, i) => (
          <button key={v.title} onClick={() => navigate(v.to)} className="text-left border border-[#D7EAF7] rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <img src={img(['val-cmc', 'val-mst', 'val-tt', 'val-launch', 'val-special', 'val-ai'][i])} alt={v.title} loading="lazy" className="w-full h-36 object-cover" />
            <div className="p-4"><h3 className="font-bold text-blue-700">{v.title}</h3>
            <p className="text-sm mt-1.5">{v.text}</p></div>
          </button>
        ))}
      </div>
    </section>

    {/* The InnoTech difference */}
    <section className="bg-[#F5FAFE] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-blue-700 mb-6">The InnoTech Difference</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {DIFFERENCE.map(([t, d]) => (
            <div key={t} className="bg-white border border-[#D7EAF7] rounded-lg p-4">
              <h3 className="font-bold text-blue-700 text-sm">{t}</h3>
              <p className="text-sm mt-1">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Founder strip */}
    <section className="relative bg-[#0B2A5B] text-white py-10 overflow-hidden">
      <img src={img('who-cta')} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-25" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold mb-4">Selected Career Experience of InnoTech Founder Raj Thota</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {FOUNDER_STATS.map(([n, l]) => (
            <div key={n} className="bg-emerald-100 text-[#123B5D] rounded-md text-center py-4 px-2">
              <div className="text-2xl font-black">{n}</div><div className="text-xs font-semibold">{l}</div>
            </div>
          ))}
        </div>
        <p className="text-sm mt-4 text-blue-100">Experience spans Pharmaceutical Development, CMC, MS&amp;T, Technical Operations, technology transfer, validation, manufacturing/site leadership, external manufacturing, commercialization, and executive advisory.</p>
      </div>
    </section>

    {/* Executive insights */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-3 gap-8 items-center">
      <div className="space-y-3">
        <h2 className="text-3xl font-black text-blue-700">Executive Insights</h2>
        <p className="text-sm">Explore practical frameworks and executive perspectives at the intersection of science, manufacturing, technology, and commercialization.</p>
        <button onClick={() => navigate('/insights')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-2.5 rounded-md inline-flex items-center gap-2">Explore Insights <ArrowRight className="w-4 h-4" /></button>
      </div>
      <ul className="lg:col-span-2 grid grid-cols-2 md:grid-cols-5 gap-3">
        {COVERS.map(([n, t]) => <li key={t}><img src={img(n)} alt={t} loading="lazy" className="w-full h-36 object-cover rounded-md shadow" /><span className="block text-[11px] font-bold text-blue-800 mt-1">{t}</span></li>)}
      </ul>
    </section>

    {/* Closing CTA */}
    <section className="relative bg-[#0B2A5B] text-white py-12 overflow-hidden">
      <img src={img('home-cta')} alt="" aria-hidden="true" className="absolute right-0 top-0 h-full w-full lg:w-3/5 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A5B] via-[#0B2A5B]/85 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-black">Where Is Your Commercialization Risk?</h2>
          <p className="text-sm text-blue-100 mt-2">Whether the challenge is development readiness, technology transfer, manufacturing capability, PPQ, launch, supply, or technical transformation, the right time to understand the risk is before it becomes critical path.</p>
        </div>
        <button onClick={openConsultationModal} className="bg-blue-600 hover:bg-blue-700 font-bold text-sm px-6 py-3 rounded-md inline-flex items-center gap-2 shrink-0">Discuss Your Commercialization Challenge <ArrowRight className="w-4 h-4" /></button>
      </div>
    </section>
  </div>
);
