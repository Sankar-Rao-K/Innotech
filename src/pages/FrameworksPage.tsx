import React from 'react';
import { img } from '../components/Ui';
import { FRAMEWORK_STAGES, FRAMEWORK_LIBRARY, READINESS_SCALE, DECISION_OUTCOMES, AI_FRAMEWORKS, ACTION_FLOW } from '../data/commercialization';

export const FrameworksPage: React.FC<{ openConsultationModal: () => void }> = ({ openConsultationModal }) => (
  <div className="font-sans text-[#536B7D] bg-white">
    <section className="relative bg-[#0B2A5B] text-white py-16 overflow-hidden">
      <img src={img('fw-hero')} alt="" aria-hidden="true" className="absolute right-0 top-0 h-full w-full lg:w-3/5 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A5B] via-[#0B2A5B]/80 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black">Frameworks &amp; Executive Tools</h1>
        <p className="text-2xl font-bold text-cyan-300 mt-1">From Insight to Action</p>
        <p className="mt-4 max-w-xl text-sm text-blue-100">Practical frameworks for assessing risk, aligning functions, and building the technical and organizational capability required for reliable commercialization.</p>
        </div>
    </section>
    <section className="border-b border-[#D7EAF7] bg-white"><ol className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-4 md:grid-cols-8 gap-3 text-center">
      {['FRAMEWORK', 'ASSESSMENT', 'SCORECARD', 'RISK PRIORITIZATION', 'ROADMAP', 'IMPLEMENTATION', 'VERIFICATION', 'SUSTAINMENT'].map((t, i) => <li key={t}><img src={img(`fw-step${i + 1}`)} alt={t} className="w-full h-16 object-cover rounded" /><span className="text-[10px] font-bold text-[#123B5D] block mt-1">{t}</span></li>)}
    </ol></section>

    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-4">
      <h2 className="text-3xl font-black text-blue-700">InnoTech Enterprise Commercialization Framework</h2>
      <p className="text-sm">One product strategy. One manufacturing strategy. One integrated risk picture. One path to reliable commercial supply.</p>
      <div className="grid grid-cols-2 md:grid-cols-8 gap-1">
        {FRAMEWORK_STAGES.map(s => (
          <div key={s.stage} className="text-center">
            <div className="text-white text-[11px] font-extrabold py-3" style={{ background: s.color }}>{s.stage}</div>
            <div className="text-[11px] mt-1 font-medium text-[#123B5D]">{s.area}</div>
          </div>
        ))}
      </div>
      <p className="bg-[#F5FAFE] rounded p-3 text-sm text-center"><strong className="text-[#123B5D]">Enterprise Enablers:</strong> Governance | Risk Management | Knowledge Management | AI &amp; Digital</p>
    </section>

    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <h2 className="text-3xl font-black text-blue-700">Framework Library</h2>
      <p className="text-sm mt-1 mb-5">Practical, field-tested frameworks to help you assess risk, align functions, and build commercialization capability. Each framework includes key elements, decision criteria, and tools that can be tailored to your organization.</p>
      <div className="grid md:grid-cols-3 gap-4">
        {FRAMEWORK_LIBRARY.map(([t, d], i) => (
          <div key={t} className="border border-[#D7EAF7] rounded-lg overflow-hidden flex">
            <img src={img(`fw-lib${i + 1}`)} alt={t} loading="lazy" className="w-28 shrink-0 object-cover" />
            <div className="p-3"><h3 className="font-bold text-blue-700 text-sm">{t}</h3><p className="text-xs mt-1.5">{d}</p></div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-[#F5FAFE] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-black text-blue-700">Executive Readiness Scale</h2>
          <p className="text-sm mt-2">A consistent scale to assess current state, communicate risk, and define decision priorities across technical and organizational dimensions.</p>
        </div>
        <div className="grid grid-cols-5 gap-1">
          {READINESS_SCALE.map(([n, d, c]) => (
            <div key={n} className="text-center">
              <div className="text-white text-xs font-bold py-3" style={{ background: c }}>{n}</div>
              <div className="text-[10px] mt-1">{d}</div>
            </div>
          ))}
        </div>
        <div className="bg-white border border-[#D7EAF7] rounded-lg p-4">
          <h3 className="text-sm font-bold text-[#123B5D] mb-2">Executive Decision Outcomes</h3>
          {DECISION_OUTCOMES.map(o => <div key={o} className="text-xs font-semibold border rounded px-2 py-1 mb-1 border-[#D7EAF7]">{o}</div>)}
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-black text-blue-700">AI &amp; Digital Transformation Frameworks</h2>
      <p className="text-sm mt-1 mb-5">Practical frameworks to assess opportunities, guide implementation, and strengthen technical operations with AI and digital capabilities.</p>
      <ul className="grid grid-cols-2 md:grid-cols-7 gap-3">
        {AI_FRAMEWORKS.map((f, i) => <li key={f} className="border border-[#D7EAF7] rounded-md overflow-hidden text-xs font-bold text-center text-[#123B5D]"><img src={img(`fw-ai${i + 1}`)} alt={f} loading="lazy" className="w-full h-20 object-cover" /><span className="block p-2">{f}</span></li>)}
      </ul>
    </section>

    <section className="bg-[#0B2A5B] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-black">From Framework to Action</h2>
          <p className="text-sm text-blue-100 mt-1">Apply InnoTech's frameworks and executive tools to your specific product, program, or organizational challenge.</p>
          <p className="text-xs text-blue-200 mt-3 font-bold tracking-wider">{ACTION_FLOW.join(' → ')}</p>
          <p className="text-sm mt-2 text-blue-100">The Framework Is the Starting Point. Capability Is the Outcome.</p>
        </div>
        <button onClick={openConsultationModal} className="bg-blue-600 hover:bg-blue-700 font-bold text-sm px-6 py-3 rounded-md shrink-0">Discuss an Executive Readiness Assessment</button>
      </div>
    </section>
  </div>
);
