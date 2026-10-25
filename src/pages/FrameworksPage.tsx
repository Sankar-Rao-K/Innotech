import React from 'react';
import { Hero, Section, img } from '../components/Ui';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { ImageSteps, WaveStages, ScaleGauge, Conveyor } from '../components/Flows';
import { FRAMEWORK_STAGES, FRAMEWORK_LIBRARY, READINESS_SCALE, DECISION_OUTCOMES, AI_FRAMEWORKS, ACTION_FLOW } from '../data/commercialization';

const STEPS = ['FRAMEWORK', 'ASSESSMENT', 'SCORECARD', 'RISK PRIORITIZATION', 'ROADMAP', 'IMPLEMENTATION', 'VERIFICATION', 'SUSTAINMENT'];
const OUTCOME_TONE = ['bg-emerald-100 border-emerald-300', 'bg-yellow-100 border-yellow-300', 'bg-orange-100 border-orange-300', 'bg-red-100 border-red-300'];

export const FrameworksPage: React.FC<{ navigate: (r: string) => void; openConsultationModal: () => void }> = ({ navigate, openConsultationModal }) => (
  <div className="font-sans text-[#536B7D] bg-white">
    <Hero image="svc-16" imageAlt="Executives reviewing business performance" title="Frameworks & Executive Tools" sub="From Insight to Action">
      <p>Practical frameworks for assessing risk, aligning functions, and building the technical and organizational capability required for reliable commercialization.</p>
      <button onClick={() => navigate('/insights')} className="text-sm font-bold text-[#0A2A8F] hover:underline">← Back to Insights &amp; Resources</button>
    </Hero>

    <section className="border-b border-[#D7EAF7] bg-white py-6"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ImageSteps items={STEPS.map((l, i) => ({ label: l, src: img(`fw-step${i + 1}`) }))} />
    </div></section>

    <Section title="InnoTech Enterprise Commercialization Framework" sub="One product strategy. One manufacturing strategy. One integrated risk picture. One path to reliable commercial supply.">
      <WaveStages stages={FRAMEWORK_STAGES} enablers={['Governance', 'Risk Management', 'Knowledge Management', 'AI & Digital']} />
    </Section>

    <Section tint title="Framework Library" sub="Practical, field-tested frameworks to help you assess risk, align functions, and build commercialization capability. Each framework includes key elements, decision criteria, and tools that can be tailored to your organization.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FRAMEWORK_LIBRARY.map(([t, d], i) => (
          <AnimateOnScroll key={t} type="fade-up" delay={(i % 3) * 0.08}>
            <div className="h-full bg-white border border-[#D7EAF7] rounded-lg overflow-hidden flex hover:shadow-md transition-shadow">
              <img src={img(`fw-lib${i + 1}`)} alt="" loading="lazy" className="w-24 sm:w-28 shrink-0 object-cover" />
              <div className="p-3"><h3 className="font-bold text-[#0A2A7A] text-sm">{t}</h3><p className="text-xs mt-1.5 leading-relaxed">{d}</p></div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </Section>

    <Section title="Executive Readiness Scale" sub="A consistent scale to assess current state, communicate risk, and define decision priorities across technical and organizational dimensions.">
      <div className="grid lg:grid-cols-[1fr_260px] gap-8 items-start">
        <ScaleGauge items={READINESS_SCALE as [string, string, string][]} />
        <div className="bg-white border border-[#D7EAF7] rounded-xl p-4">
          <h3 className="text-sm font-bold text-[#123B5D] mb-2">Executive Decision Outcomes</h3>
          {DECISION_OUTCOMES.map((o, i) => <div key={o} className={`text-xs font-bold border rounded px-3 py-2 mb-1.5 text-[#123B5D] ${OUTCOME_TONE[i]}`}>{o}</div>)}
        </div>
      </div>
    </Section>

    <Section tint title="AI & Digital Transformation Frameworks" sub="Practical frameworks to assess opportunities, guide implementation, and strengthen technical operations with AI and digital capabilities.">
      <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {AI_FRAMEWORKS.map((f, i) => (
          <AnimateOnScroll as="li" key={f} type="scale-up" delay={i * 0.05} className="list-none bg-white border border-[#D7EAF7] rounded-lg overflow-hidden text-xs font-bold text-center text-[#123B5D]">
            <img src={img(`fw-ai${i + 1}`)} alt="" loading="lazy" className="w-full h-20 object-cover" /><span className="block p-2">{f}</span>
          </AnimateOnScroll>
        ))}
      </ul>
    </Section>

    <section className="bg-[#0B2A5B] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div>
            <h2 className="text-2xl font-black">From Framework to Action</h2>
            <p className="text-sm text-blue-100 mt-1 max-w-xl">Apply InnoTech&rsquo;s frameworks and executive tools to your specific product, program, or organizational challenge.</p>
          </div>
          <button onClick={openConsultationModal} className="bg-blue-600 hover:bg-blue-700 font-bold text-sm px-6 py-3 rounded-md shrink-0">Discuss an Executive Readiness Assessment</button>
        </div>
        <Conveyor items={ACTION_FLOW} />
        <p className="text-sm text-blue-100 font-semibold">The Framework Is the Starting Point. Capability Is the Outcome.</p>
      </div>
    </section>
  </div>
);
