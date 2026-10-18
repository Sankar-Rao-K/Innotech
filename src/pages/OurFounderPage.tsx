import React from 'react';
import { Hero, Section, Card, Cta, img } from '../components/Ui';
import { CareerTimeline, LeadershipSteps, CountUp } from '../components/Flows';
import { FOUNDER_STATS, CAREER } from '../data/commercialization';
import { PUBLICATIONS, FEATURED, formatDate } from '../data/publications';

export const OurFounderPage: React.FC<{ navigate: (r: string) => void; openConsultationModal: () => void }> = ({ navigate, openConsultationModal }) => (
  <div className="font-sans text-[#536B7D] bg-white">
    <Hero
      reverse
      aside={<img src={img('founder')} alt="Raj Thota, Founder & Principal Advisor" className="relative mx-auto w-64 sm:w-80 rounded-2xl border border-white/20 shadow-2xl object-cover" />}
      title={<>Raj Thota, <span className="text-xl sm:text-2xl font-bold text-blue-100">MBA, MS (Pharmaceutics)</span></>}
      accent="Founder & Principal Advisor"
    >
      <p className="text-lg font-bold text-cyan-200">Enterprise Pharmaceutical &amp; Biotechnology Commercialization Executive</p>
      <p className="text-lg sm:text-xl font-extrabold text-white">From Pharmaceutical Development to Enterprise Commercialization Leadership</p>
      <p>Raj Thota brings nearly three decades of experience connecting pharmaceutical development, CMC, Technical Operations, manufacturing, and commercialization. His perspective combines scientific and technical depth with operating leadership, global external manufacturing, regulatory readiness, and business accountability.</p>
    </Hero>

    <Section title="A Career Built Across the Product Lifecycle" sub="Scientific and Technical Depth. Manufacturing Leadership. Business Accountability. Enterprise Perspective.">
      <CareerTimeline items={CAREER} />
      <p className="mt-8 rounded-xl border border-[#D7EAF7] bg-[#F5FAFE] p-5 text-sm sm:text-base text-[#123B5D] font-medium">This progression created an enterprise perspective on a recurring industry challenge: how to convert development knowledge into a process, organization, and manufacturing system capable of delivering reliable commercial supply.</p>
    </Section>

    <section className="relative bg-[#0B2A5B] text-white py-12 overflow-hidden">
      <img src={img('who-cta')} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-black">Selected Career Experience</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6">
          {FOUNDER_STATS.map(([n, l], i) => (
            <div key={n} className={`bg-emerald-100 text-[#123B5D] rounded-md text-center py-4 px-2 ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}>
              <CountUp value={n} className="block text-2xl font-black" /><div className="text-xs font-semibold">{l}</div>
            </div>
          ))}
        </div>
        <p className="text-sm sm:text-base mt-5 text-blue-100">Leadership roles have included Pharmaceutical Development, Process Development &amp; Commercialization, MS&amp;T, Site Head/General Management, CMC and Global External Manufacturing, and executive advisory.</p>
      </div>
    </section>

    <Section title="Executive Expertise">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="CMC & Late-Stage Development" text="Translate development knowledge into a scalable, controllable, and commercially viable process." />
        <Card title="MS&T & Technical Operations" text="Build process stewardship, technical governance, manufacturing science, and lifecycle capability." />
        <Card title="Technology Transfer & Commercialization" text="Transfer product and process knowledge into reproducible receiving-site capability." />
        <Card title="Manufacturing, Validation & Launch Readiness" text="Integrate PPQ, technical launch readiness, initial commercial supply, and lifecycle performance." />
        <div className="sm:col-span-2"><Card title="Specialized Products, AI & Digital Transformation" text="Support complex oral products, sterile ophthalmics, injectables, LAIs, drug-device combination products, and apply AI and digital tools to strengthen technical decisions." /></div>
      </div>
    </Section>

    <Section tint title="Leadership Perspective">
      <LeadershipSteps items={[
        { label: 'UNDERSTAND', desc: 'Build deep product and process knowledge before decisions are made.' },
        { label: 'ANTICIPATE', desc: 'Recognize technical and organizational risk early, while options remain open.' },
        { label: 'INTEGRATE', desc: 'Connect functions, systems, and governance into one view.' },
        { label: 'BUILD', desc: 'Create lasting capability, not just completed activities.' },
        { label: 'DELIVER', desc: 'Turn understanding into reliable commercial supply.' },
      ]}>
        <blockquote className="bg-white border-l-4 border-blue-500 rounded-lg p-5 sm:p-6 text-lg sm:text-xl text-[#123B5D] shadow-sm">Technical leadership is not simply about solving today&rsquo;s problem. It is about building the knowledge, systems, governance, and organizational capability required to prevent, recognize, and manage tomorrow&rsquo;s challenges.</blockquote>
      </LeadershipSteps>
    </Section>

    <Section title="Thought Leadership">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
        <p className="text-sm sm:text-base max-w-3xl">Raj&rsquo;s current thought leadership focuses on Enterprise Commercialization, Quality by Design, AI-assisted pharmaceutical development and technology transfer, Technical Operations, sterile ophthalmics, drug-device combination products, and executive capability building.</p>
        <button onClick={() => navigate('/insights')} className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-2.5 rounded-md">Explore Executive Insights &amp; Publications</button>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 mt-7">
        {FEATURED.map(sl => PUBLICATIONS.find(p => p.slug === sl)!).map(p => (
          <li key={p.slug}>
            <button onClick={() => navigate(`/insights/${p.slug}`)} className="group block w-full text-left">
              <span className="block overflow-hidden rounded-lg border border-[#D7EAF7] bg-white shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                <img src={p.cover} alt={`Cover of ${p.title}`} loading="lazy" className="w-full aspect-[3/4] object-cover object-top" />
              </span>
              <span className="mt-2 block text-[10px] font-extrabold uppercase tracking-wider text-emerald-600">{p.type} · {formatDate(p.date)}</span>
              <span className="block text-[13px] font-bold text-blue-800 leading-snug group-hover:text-blue-600">{p.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </Section>

    <Cta title="Let's Discuss Your Commercialization Challenge" text="Whether you are advancing a product, preparing for a technology transfer, strengthening operations, or evaluating an investment opportunity, InnoTech can help." label="Get in Touch" onClick={openConsultationModal} image="about-cta" />
  </div>
);
