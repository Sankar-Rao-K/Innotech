import React from 'react';
import { Hero, Section, Card, Flow, Cta, img } from '../components/Ui';
import { FOUNDER_STATS, COVERS } from '../data/commercialization';

export const OurFounderPage: React.FC<{ navigate: (r: string) => void; openConsultationModal: () => void }> = ({ navigate, openConsultationModal }) => (
  <div className="font-sans text-[#536B7D] bg-white">
    <Hero left={<img src={img('founder')} alt="Raj Thota" className="hidden md:block w-64 rounded-lg shrink-0" />} title={<>Raj Thota, <span className="text-2xl">MBA, MS (Pharmaceutics)</span></>} accent="Founder & Principal Advisor">
      <p className="text-lg font-bold text-cyan-200">Enterprise Pharmaceutical &amp; Biotechnology Commercialization Executive</p>
      <p className="text-xl font-extrabold text-white">From Pharmaceutical Development to Enterprise Commercialization Leadership</p>
      <p>Raj Thota brings nearly three decades of experience connecting pharmaceutical development, CMC, Technical Operations, manufacturing, and commercialization. His perspective combines scientific and technical depth with operating leadership, global external manufacturing, regulatory readiness, and business accountability.</p>
    </Hero>
    <Section title="A Career Built Across the Product Lifecycle" sub="Scientific and Technical Depth. Manufacturing Leadership. Business Accountability. Enterprise Perspective.">
      <Flow items={['DEVELOPMENT', 'CMC', 'MS&T', 'TECHNICAL OPERATIONS', 'MANUFACTURING LEADERSHIP', 'ENTERPRISE COMMERCIALIZATION']} />
      <p className="text-sm mt-4 max-w-3xl">This progression created an enterprise perspective on a recurring industry challenge: how to convert development knowledge into a process, organization, and manufacturing system capable of delivering reliable commercial supply.</p>
    </Section>
    <Section tint title="Selected Career Experience">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {FOUNDER_STATS.map(([n, l]) => <div key={n} className="bg-emerald-100 text-[#123B5D] rounded-md text-center py-4 px-2"><div className="text-2xl font-black">{n}</div><div className="text-xs font-semibold">{l}</div></div>)}
      </div>
      <p className="text-sm mt-4">Leadership roles have included Pharmaceutical Development, Process Development &amp; Commercialization, MS&amp;T, Site Head/General Management, CMC and Global External Manufacturing, and executive advisory.</p>
    </Section>
    <Section title="Executive Expertise">
      <div className="grid md:grid-cols-3 gap-4">
        <Card title="CMC & Late-Stage Development" text="Translate development knowledge into a scalable, controllable, and commercially viable process." />
        <Card title="MS&T & Technical Operations" text="Build process stewardship, technical governance, manufacturing science, and lifecycle capability." />
        <Card title="Technology Transfer & Commercialization" text="Transfer product and process knowledge into reproducible receiving-site capability." />
        <Card title="Manufacturing, Validation & Launch Readiness" text="Integrate PPQ, technical launch readiness, initial commercial supply, and lifecycle performance." />
        <Card title="Specialized Products, AI & Digital Transformation" text="Support complex oral products, sterile ophthalmics, injectables, LAIs, drug-device combination products, and apply AI and digital tools to strengthen technical decisions." />
      </div>
    </Section>
    <Section tint title="Leadership Perspective">
      <blockquote className="bg-white border border-[#D7EAF7] rounded-lg p-6 text-xl text-[#123B5D] max-w-4xl">Technical leadership is not simply about solving today's problem. It is about building the knowledge, systems, governance, and organizational capability required to prevent, recognize, and manage tomorrow's challenges.</blockquote>
      <Flow items={['UNDERSTAND', 'ANTICIPATE', 'INTEGRATE', 'BUILD', 'DELIVER']} />
    </Section>
    <Section title="Thought Leadership">
      <p className="text-sm max-w-3xl">Raj's current thought leadership focuses on Enterprise Commercialization, Quality by Design, AI-assisted pharmaceutical development and technology transfer, Technical Operations, sterile ophthalmics, drug-device combination products, and executive capability building.</p>
      <ul className="flex flex-wrap gap-2 my-4">{COVERS.map(([n, t]) => <li key={t} className="w-28"><img src={img(n)} alt={t} className="rounded-md shadow w-full h-36 object-cover" /><span className="text-[11px] font-bold text-blue-800 block mt-1">{t}</span></li>)}</ul>
      <button onClick={() => navigate('/insights')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-2.5 rounded-md">Explore Executive Insights &amp; Publications</button>
    </Section>
    <Cta title="Let's Discuss Your Commercialization Challenge" text="Whether you are advancing a product, preparing for a technology transfer, strengthening operations, or evaluating an investment opportunity, InnoTech can help." label="Get in Touch" onClick={openConsultationModal} image="about-cta" />
  </div>
);
