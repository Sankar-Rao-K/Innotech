import React from 'react';
import { FileCheck, Globe, Pill, TrendingUp, Users } from 'lucide-react';
import { Hero, Section, SectionHead, TintTile, TINTS, BtnPrimary, Cta, img, NAVY } from '../components/Ui';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { CareerTimeline, LeadershipSteps, CountUp } from '../components/Flows';

const CAREER = [
  { label: 'DEVELOPMENT', note: 'Pharmaceutical Development' },
  { label: 'CMC', note: 'CMC & Global External Manufacturing' },
  { label: 'MS&T', note: 'Process stewardship' },
  { label: 'TECHNICAL OPERATIONS', note: 'Process Development & Commercialization' },
  { label: 'MANUFACTURING LEADERSHIP', note: 'Site Head / General Management' },
  { label: 'ENTERPRISE COMMERCIALIZATION', note: 'Executive advisory' },
];
const IMPACT: [React.ComponentType<{ className?: string }>, string, string][] = [
  [Pill, '150+', 'Commercialized Products Supported'], [FileCheck, '41', 'FDA Product Approvals'], [Users, '$5B+', 'Technical M&A Due Diligence'],
  [Globe, 'Global', 'Manufacturing & CDMO Leadership'], [TrendingUp, 'Nearly Three Decades', 'Across the Product Lifecycle'],
];
const EXPERTISE: [string, string][] = [
  ['CMC & Pharmaceutical Development', 'Formulation, process development, QbD, scale-up and commercial readiness.'],
  ['Process Development, Scale-Up & Commercialization', 'Translate development knowledge into scalable, controllable and commercially viable processes.'],
  ['MS&T & Technical Operations', 'Build process stewardship, technical governance, manufacturing science and lifecycle capability.'],
  ['Technology Transfer & Manufacturing Readiness', 'Transfer product and process knowledge into reproducible receiving-site capability.'],
  ['Validation, Launch & Lifecycle Management', 'Support PPQ, commercial launch and ongoing lifecycle performance.'],
  ['Specialized Products, AI & Digital Transformation', 'Support complex oral products, sterile ophthalmics, injectables, LAIs, drug-device combination products and apply digital tools to strengthen decisions.'],
  ['Technical Due Diligence & Executive Advisory', 'Integrate technical, manufacturing and commercial perspectives for investment, partnering and strategic decision-making.'],
];
const THOUGHT: [string, string, string][] = [
  ['The Evolution of QbD', 'ab2-2', '/insights/evolution-of-qbd'],
  ['Good AI Practice in Pharma & Biotech', 'ab2-3', '/insights/good-ai-practice'],
  ['Technical Due Diligence for Pharma & Biotech Investment', 'ab2-3a', '/insights/investor-technical-due-diligence'],
  ['Commercializing Sterile Ophthalmic Eye Drops', 'ab2-7', '/insights/commercializing-sterile-ophthalmic-eye-drops'],
  ['From Small Molecules to Biologics', 'ab2-5', '/insights/small-molecules-to-biologics'],
];

export const OurFounderPage: React.FC<{ navigate: (r: string) => void; openConsultationModal: () => void }> = ({ navigate }) => (
  <div className="font-sans bg-white">
    <Hero variant="portrait" image="ab2-1" imageAlt="Raj Thota, Founder & Principal Advisor"
      title={<>Raj Thota, <span className="text-2xl sm:text-3xl">MBA, MS (Pharmaceutics)</span></>}>
      <p className="text-xl font-medium text-[#0A2A7A]">Founder &amp; Principal Advisor</p>
      <span className="block h-0.5 w-12 bg-emerald-500" />
      <p className="text-lg sm:text-xl font-extrabold leading-snug text-[#0A2A7A]">Enterprise Pharmaceutical &amp; Biotechnology Development and Commercialization Executive</p>
      <p className="text-base sm:text-lg font-extrabold leading-snug text-[#0A2A7A]">From Pharmaceutical Development to Enterprise Commercialization Leadership</p>
      <p>Raj&rsquo;s career connects pharmaceutical development, CMC, MS&amp;T, Technical Operations, manufacturing, technology transfer, commercialization, operating leadership, external manufacturing and executive decision-making.</p>
    </Hero>

    <Section title="A Career Built Across the Product Lifecycle">
      <CareerTimeline items={CAREER} />
      <p className="mx-auto mt-8 max-w-3xl text-center text-sm sm:text-base text-[#27407A]">This progression created an enterprise perspective on converting development knowledge into process capability, manufacturing systems, organizational readiness and reliable supply.</p>
    </Section>

    <section className="relative overflow-hidden bg-[#EAF3FC] py-10 sm:py-14">
      <img src={img('ab3-3a')} alt="" aria-hidden="true" className="absolute inset-y-0 right-0 h-full w-2/3 object-cover opacity-25 [mask-image:linear-gradient(to_right,transparent,#000)] [-webkit-mask-image:linear-gradient(to_right,transparent,#000)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead title="Selected Career Impact" />
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-5">
          {IMPACT.map(([Icon, n, l], i) => (
            <AnimateOnScroll key={n} type="fade-up" delay={i * 0.07} className={i === 4 ? 'col-span-2 md:col-span-1' : ''}>
              <div className="flex h-full items-center gap-3 rounded-xl border border-[#D7EAF7] bg-white/95 p-4">
                <Icon className="h-8 w-8 shrink-0 text-blue-600" />
                <div><CountUp value={n} className={`block text-xl font-black leading-tight ${NAVY}`} /><span className="text-xs font-medium text-[#27407A]">{l}</span></div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>

    <Section title="Executive & Technical Expertise">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
        {EXPERTISE.map(([t, d], i) => (
          <AnimateOnScroll key={t} type="fade-up" delay={(i % 4) * 0.06} className={i < 4 ? 'lg:col-span-3' : 'lg:col-span-4'}><TintTile tint={TINTS[i % TINTS.length]} title={t} text={d} /></AnimateOnScroll>
        ))}
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
        <blockquote className="rounded-lg border-l-4 border-blue-500 bg-white p-5 text-lg text-[#0A2A7A] shadow-sm sm:p-6 sm:text-xl">Technical leadership is not simply about solving today&rsquo;s problem. It is about building the knowledge, systems, governance, and organizational capability required to prevent, recognize, and manage tomorrow&rsquo;s challenges.</blockquote>
      </LeadershipSteps>
    </Section>

    <Section title="Thought Leadership">
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <p className="text-sm sm:text-base text-[#27407A]">Raj&rsquo;s current thought leadership focuses on Enterprise Commercialization, Quality by Design, AI-assisted pharmaceutical development and technology transfer, Technical Operations, sterile ophthalmics, drug-device combination products, technical due diligence and executive capability building.</p>
          <BtnPrimary onClick={() => navigate('/insights')} className="mt-5">Explore Insights &amp; Resources</BtnPrimary>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
          {THOUGHT.map(([t, im, to]) => (
            <li key={t}>
              <button onClick={() => navigate(to)} className="group block h-full w-full overflow-hidden rounded-lg border border-[#D7EAF7] bg-white text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <img src={img(im)} alt="" loading="lazy" className="aspect-square w-full object-cover" />
                <span className={`block p-2.5 text-[12.5px] font-extrabold leading-snug ${NAVY} group-hover:text-blue-600`}>{t}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Section>

    <Cta image="ab2-9" title="Let’s Discuss Your Program" text="Whether you need technical advice, CMC development support, project leadership, on-site execution, or commercialization support, InnoTech can help." label="Get in Touch" onClick={() => navigate('/contact-us')} />
  </div>
);
