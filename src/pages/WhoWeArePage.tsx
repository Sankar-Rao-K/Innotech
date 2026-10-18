import React from 'react';
import { Hero, Section, Card, Cta, img } from '../components/Ui';
import { RelayFlow, StepBars, CountUp } from '../components/Flows';
import { FOUNDER_STATS } from '../data/commercialization';

export const WhoWeArePage: React.FC<{ navigate: (r: string) => void; openConsultationModal: () => void }> = ({ navigate, openConsultationModal }) => (
  <div className="font-sans text-[#536B7D] bg-white">
    <Hero
      eyebrow="ABOUT INNOTECH BIOPHARM SOLUTIONS"
      title={<>Bridging Development and Commercial <span className="text-cyan-300">Manufacturing</span></>}
      aside={
        <div className="relative pb-8">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-cyan-400/30 to-blue-500/10 blur-xl" aria-hidden="true" />
          <img src={img('about-vial')} alt="Scientist inspecting a pharmaceutical vial" className="relative w-full aspect-[16/10] object-cover rounded-2xl border border-white/20 shadow-2xl" />
          <img src={img('exp-2')} alt="Technician at a manufacturing control panel" className="absolute -bottom-0 -left-2 sm:-left-6 w-2/5 aspect-[16/10] object-cover rounded-xl border-4 border-[#0B2A5B] shadow-xl" />
          <span className="absolute bottom-0 right-3 rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-extrabold shadow-lg">Development → Reliable Supply</span>
        </div>
      }
    >
      <p>InnoTech BioPharm Solutions is an executive advisory firm helping pharmaceutical and biotechnology organizations transform scientific knowledge into manufacturing capability, commercialization readiness, and reliable product supply.</p>
      <p>A product is not truly commercialized when development is complete. It is commercialized when the organization can manufacture and supply it reliably.</p>
      <button onClick={() => navigate('/our-founder')} className="mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-md">Our Story</button>
    </Hero>

    <Section title="Our Commercialization Philosophy" sub="Commercialization is the point where science, manufacturing, quality, regulatory strategy, supply, and business execution must work as one system.">
      <div className="grid lg:grid-cols-2 gap-8 items-center mb-10">
        <p className="text-sm sm:text-base">Our focus is not simply completing activities. It is building the technical and organizational capability required to reproduce the process, manage risk, make sound decisions, and sustain reliable commercial supply.</p>
        <img src={img('svc-1')} alt="Cross-functional team reviewing manufacturing analytics" loading="lazy" className="rounded-2xl w-full aspect-[16/8] object-cover shadow" />
      </div>
      <RelayFlow items={['Science', 'Capability', 'Readiness', 'Supply', 'Lifecycle']} />
    </Section>

    <Section tint title="How We Work" sub="Independent Perspective. Integrated Strategy. Practical Execution. Sustainable Capability.">
      <StepBars>
        {[
          <Card key="a" image="how-assess" title="ASSESS" text="Understand the product, process, organization, evidence, dependencies, and risk." />,
          <Card key="b" image="how-align" title="ALIGN" text="Create one cross-functional view of priorities, decisions, ownership, and milestones." />,
          <Card key="c" image="how-build" title="BUILD" text="Strengthen process understanding, manufacturing capability, governance, and readiness." />,
          <Card key="d" image="how-execute" title="EXECUTE" text="Support technology transfer, validation, launch, recovery, or transformation." />,
          <Card key="e" image="how-sustain" title="SUSTAIN" text="Embed knowledge, process stewardship, monitoring, and organizational capability." />,
        ]}
      </StepBars>
    </Section>

    <Section title="Our Commitment">
      <div className="grid md:grid-cols-3 gap-4">
        <Card title="SCIENTIFIC RIGOR" text="Decisions grounded in product and process understanding." />
        <Card title="MANUFACTURING REALITY" text="Strategies designed for actual equipment, sites, people, systems, and supply constraints." />
        <Card title="COMMERCIAL PERSPECTIVE" text="Technical decisions evaluated in the context of timing, risk, cost, launch, and lifecycle performance." />
      </div>
    </Section>

    <Section tint title="Leadership Grounded in the Commercialization Lifecycle">
      <div className="grid md:grid-cols-[240px_1fr] gap-8 items-start">
        <img src={img('founder')} alt="Raj Thota, Founder & Principal Advisor" loading="lazy" className="rounded-xl w-full max-w-[240px] mx-auto md:mx-0 object-cover shadow" />
        <div>
          <h3 className="text-2xl font-black text-[#123B5D]">Raj Thota</h3>
          <p className="font-semibold text-[#123B5D]">Founder &amp; Principal Advisor</p>
          <p className="text-sm sm:text-base mt-3">Raj Thota brings over three decades of experience across Pharmaceutical Development, CMC, MS&amp;T, Technical Operations, global manufacturing, technology transfer, validation, site leadership, commercialization, and executive advisory.</p>
          <p className="text-sm sm:text-base mt-3">He has supported 150+ commercialized products, 41 FDA product approvals, global manufacturing and CDMO networks, and $5B+ in technical M&amp;A due diligence, helping organizations solve complex challenges and create lasting value.</p>
          <button onClick={() => navigate('/our-founder')} className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-5 py-2.5 rounded-md">Meet the Founder</button>
        </div>
      </div>
      <h3 className="mt-10 mb-3 font-bold text-[#123B5D]">Selected Career Experience of InnoTech Founder Raj Thota</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {FOUNDER_STATS.map(([n, l], i) => (
          <div key={n} className={`bg-emerald-100 text-[#123B5D] rounded-md text-center py-4 px-2 ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}>
            <CountUp value={n} className="block text-2xl font-black" /><div className="text-xs font-semibold">{l}</div>
          </div>
        ))}
      </div>
      <p className="text-sm mt-4">Experience spans Pharmaceutical Development, CMC, MS&amp;T, Technical Operations, technology transfer, validation, manufacturing/site leadership, external manufacturing, commercialization, and executive advisory.</p>
    </Section>

    <Cta title="Let's Discuss Your Commercialization Challenge" text="Whether you are advancing a product, preparing for a technology transfer, strengthening operations, or evaluating an investment opportunity, InnoTech can help." label="Get in Touch" onClick={openConsultationModal} image="about-cta" />
  </div>
);
