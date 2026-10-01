import React from 'react';
import { Hero, Section, Card, Flow, Cta, img } from '../components/Ui';
import { FOUNDER_STATS } from '../data/commercialization';

export const WhoWeArePage: React.FC<{ navigate: (r: string) => void; openConsultationModal: () => void }> = ({ navigate, openConsultationModal }) => (
  <div className="font-sans text-[#536B7D] bg-white">
    <Hero eyebrow="ABOUT INNOTECH BIOPHARM SOLUTIONS" title={<>Bridging Development and Commercial <span className="text-cyan-300">Manufacturing</span></>} image="about-hero">
      <p>InnoTech BioPharm Solutions is an executive advisory firm helping pharmaceutical and biotechnology organizations transform scientific knowledge into manufacturing capability, commercialization readiness, and reliable product supply.</p>
      <p>A product is not truly commercialized when development is complete. It is commercialized when the organization can manufacture and supply it reliably.</p>
    </Hero>
    <Section title="Our Commercialization Philosophy" sub="Commercialization is the point where science, manufacturing, quality, regulatory strategy, supply, and business execution must work as one system.">
      <div className="grid lg:grid-cols-2 gap-8 items-center mb-4"><p className="text-sm">Our focus is not simply completing activities. It is building the technical and organizational capability required to reproduce the process, manage risk, make sound decisions, and sustain reliable commercial supply.</p><img src={img('about-vial')} alt="Scientist holding a pharmaceutical vial" className="rounded-lg w-full h-56 object-cover" /></div>
      <Flow items={['Science', 'Capability', 'Readiness', 'Supply', 'Lifecycle']} />
    </Section>
    <Section tint title="How We Work" sub="Independent Perspective. Integrated Strategy. Practical Execution. Sustainable Capability.">
      <div className="grid md:grid-cols-5 gap-4">
        <Card image="how-assess" title="ASSESS" text="Understand the product, process, organization, evidence, dependencies, and risk." />
        <Card image="how-align" title="ALIGN" text="Create one cross-functional view of priorities, decisions, ownership, and milestones." />
        <Card image="how-build" title="BUILD" text="Strengthen process understanding, manufacturing capability, governance, and readiness." />
        <Card image="how-execute" title="EXECUTE" text="Support technology transfer, validation, launch, recovery, or transformation." />
        <Card image="how-sustain" title="SUSTAIN" text="Embed knowledge, process stewardship, monitoring, and organizational capability." />
      </div>
    </Section>
    <Section title="Our Commitment">
      <div className="grid md:grid-cols-3 gap-4">
        <Card title="SCIENTIFIC RIGOR" text="Decisions grounded in product and process understanding." />
        <Card title="MANUFACTURING REALITY" text="Strategies designed for actual equipment, sites, people, systems, and supply constraints." />
        <Card title="COMMERCIAL PERSPECTIVE" text="Technical decisions evaluated in the context of timing, risk, cost, launch, and lifecycle performance." />
      </div>
    </Section>
    <Section tint title="Leadership Grounded in the Commercialization Lifecycle">
      <div className="grid md:grid-cols-[260px_1fr] gap-8 items-start"><img src={img('founder')} alt="Raj Thota, Founder & Principal Advisor" className="rounded-lg w-full max-w-[260px] object-cover" /><div><h3 className="text-2xl font-black text-[#123B5D]">Raj Thota</h3>
      <p className="font-semibold text-[#123B5D]">Founder &amp; Principal Advisor</p>
      <p className="text-sm mt-3 max-w-3xl">Raj Thota brings over three decades of experience across Pharmaceutical Development, CMC, MS&amp;T, Technical Operations, global manufacturing, technology transfer, validation, site leadership, commercialization, and executive advisory.</p>
      <p className="text-sm mt-3 max-w-3xl">He has supported 150+ commercialized products, 41 FDA product approvals, global manufacturing and CDMO networks, and $5B+ in technical M&amp;A due diligence, helping organizations solve complex challenges and create lasting value.</p>
      <button onClick={() => navigate('/our-founder')} className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-5 py-2.5 rounded-md">Meet the Founder</button></div></div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-8">
        {FOUNDER_STATS.map(([n, l]) => <div key={n} className="bg-emerald-100 text-[#123B5D] rounded-md text-center py-4 px-2"><div className="text-2xl font-black">{n}</div><div className="text-xs font-semibold">{l}</div></div>)}
      </div>
    </Section>
    <Cta title="Let's Discuss Your Commercialization Challenge" text="Whether you are advancing a product, preparing for a technology transfer, strengthening operations, or evaluating an investment opportunity, InnoTech can help." label="Get in Touch" onClick={openConsultationModal} image="about-cta" />
  </div>
);
