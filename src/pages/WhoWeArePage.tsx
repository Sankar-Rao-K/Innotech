import React from 'react';
import { Atom, Factory, Settings, TrendingUp } from 'lucide-react';
import { Hero, Section, SectionHead, TintTile, TINTS, BtnPrimary, BtnOutline, Cta, img, NAVY } from '../components/Ui';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { PinFlow, DashConnect, CountUp } from '../components/Flows';

const PHILOSOPHY = [
  { label: 'SCIENCE', caption: 'Scientific Understanding', color: '#0B5FD8' },
  { label: 'PROCESS', caption: 'Process Development', color: '#0A9EE8' },
  { label: 'CAPABILITY', caption: 'Technical Capability', color: '#16A34A' },
  { label: 'READINESS', caption: 'Manufacturing Readiness', color: '#F5A300' },
  { label: 'SUPPLY', caption: 'Reliable Supply', color: '#F2622A' },
  { label: 'LIFECYCLE', caption: 'Lifecycle Management', color: '#7C3AED' },
];
const STEPS: [string, string, string][] = [
  ['ASSESS', 'Understand the product, process, program, evidence, risks and next milestones.', 'ab1-4'],
  ['ALIGN', 'Establish priorities, responsibilities, decisions and an integrated path forward.', 'ab1-5'],
  ['BUILD', 'Develop the technical strategy, knowledge, plan, controls and capability required.', 'ab1-6'],
  ['EXECUTE', 'Lead or support development, transfer, manufacturing validation, launch or remediation activities.', 'ab1-8'],
  ['SUSTAIN', 'Strengthen technical stewardship, lifecycle performance, knowledge management and organizational capability.', 'ab1-9'],
];
const STATS: [string, string][] = [['150+', 'Commercialized Products Supported'], ['41', 'FDA Product Approvals'], ['$5B+', 'Technical M&A Due Diligence'], ['Global', 'Manufacturing & CDMO Networks']];

export const WhoWeArePage: React.FC<{ navigate: (r: string) => void; openConsultationModal: () => void }> = ({ navigate, openConsultationModal }) => (
  <div className="font-sans bg-white">
    <Hero
      eyebrow="ABOUT INNOTECH BIOPHARM SOLUTIONS" image="ab1-1" imageAlt="Scientist reviewing a tablet beside a vial filling line"
      title={<>Connecting Pharmaceutical Development with <span className="text-[#1769E0]">Commercial Manufacturing</span></>}
      actions={<><BtnPrimary onClick={() => navigate('/our-founder')}>Our Story</BtnPrimary><BtnOutline onClick={openConsultationModal}>Discuss Your Program</BtnOutline></>}
    >
      <p>InnoTech BioPharm Solutions is a pharmaceutical development, CMC, Technical Operations and commercialization consulting organization supporting programs from development through commercial manufacturing and lifecycle management.</p>
      <p>We work with clients at the level their program requires—from strategic CMC guidance and independent technical assessment to project leadership, technical execution, technology transfer, manufacturing site support, validation, launch and lifecycle problem-solving.</p>
    </Hero>

    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12 lg:px-8">
        <AnimateOnScroll type="slide-right">
          <SectionHead title="Our Philosophy" sub="Scientific Success Must Become Reproducible Capability" />
          <p className="mt-4 text-sm sm:text-base text-[#27407A]">Development, CMC, manufacturing, Quality, Regulatory, supply and business execution must ultimately work as one system.</p>
          <p className="mt-3 text-sm sm:text-base text-[#27407A]">Our focus is not simply completing activities. It is building the product knowledge, process understanding, technical decisions and organizational capability required to move the program forward and sustain reliable supply.</p>
        </AnimateOnScroll>
        <div className="lg:pt-2"><PinFlow items={PHILOSOPHY} /></div>
      </div>
    </section>

    <section className="bg-[#F4F9FE] py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className={`text-2xl sm:text-3xl font-black leading-tight ${NAVY}`}>Strategy When Strategy Is Needed. Execution When Execution Is Needed.</h2>
        <p className="mt-3 max-w-4xl text-sm sm:text-base text-[#27407A]">Some programs need an independent technical perspective. Others need experienced leadership to build the plan, coordinate partners, solve technical problems and execute critical milestones. InnoTech supports both—connecting strategy with practical implementation.</p>
        <div className="mt-7 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <AnimateOnScroll type="slide-right" className="h-full">
            <div className="grid h-full overflow-hidden rounded-xl border border-emerald-200 bg-[#EAF8EF] sm:grid-cols-[1fr_200px]">
              <div className="p-5"><h3 className="text-xl font-black text-emerald-700">STRATEGY</h3><p className={`font-extrabold ${NAVY}`}>Independent Technical Perspective</p>
                <ul className="mt-3 space-y-1.5 text-sm text-[#27407A]">{['CMC strategy and development planning', 'Independent assessments and due diligence', 'Risk identification and mitigation', 'Project and portfolio guidance'].map(i => <li key={i} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />{i}</li>)}</ul></div>
              <img src={img('ab1-1a')} alt="" loading="lazy" className="hidden h-full w-full object-cover sm:block" />
            </div>
          </AnimateOnScroll>
          <div className="flex items-center justify-center" aria-hidden="true"><span className="anim-pulse-ring flex h-10 w-10 rotate-90 items-center justify-center rounded-full bg-[#0A2A8F] text-white lg:rotate-0">›</span></div>
          <AnimateOnScroll type="slide-left" className="h-full">
            <div className="grid h-full overflow-hidden rounded-xl border border-blue-200 bg-[#E8F2FF] sm:grid-cols-[1fr_200px]">
              <div className="p-5"><h3 className="text-xl font-black text-[#0A5BD6]">EXECUTION</h3><p className={`font-extrabold ${NAVY}`}>Experienced Leadership and Hands-On Support</p>
                <ul className="mt-3 space-y-1.5 text-sm text-[#27407A]">{['Program and project leadership', 'Technical execution and problem-solving', 'Technology transfer and site support', 'Validation, PPQ and launch readiness', 'Lifecycle management and continuous improvement'].map(i => <li key={i} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />{i}</li>)}</ul></div>
              <img src={img('ab1-3')} alt="" loading="lazy" className="hidden h-full w-full object-cover sm:block" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>

    <Section title="How We Work">
      <DashConnect compact>
        {STEPS.map(([t, d, im], i) => (
          <div key={t} className="h-full overflow-hidden rounded-xl border border-[#D7EAF7] bg-white shadow-sm">
            <img src={img(im)} alt="" loading="lazy" className="h-28 w-full object-cover" />
            <div className="p-3.5"><h3 className={`flex items-center gap-2 text-sm font-extrabold ${NAVY}`}><span className="text-xl font-black text-blue-600">{i + 1}</span>{t}</h3><p className="mt-1.5 text-[13px] leading-relaxed text-[#27407A]">{d}</p></div>
          </div>
        ))}
      </DashConnect>
    </Section>

    <Section tint title="Our Commitment">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          [Atom, 'SCIENTIFIC RIGOR', 'Decisions grounded in product and process understanding.', 'text-blue-600'],
          [Factory, 'MANUFACTURING REALITY', 'Strategies designed for actual equipment, sites, people, systems and supply constraints.', 'text-emerald-600'],
          [Settings, 'PRACTICAL EXECUTION', 'Plans structured around real milestones, owners, evidence and decisions.', 'text-amber-500'],
          [TrendingUp, 'COMMERCIAL PERSPECTIVE', 'Technical decisions evaluated in context of timing, risk, cost, launch and lifecycle performance.', 'text-violet-600'],
        ].map(([Icon, t, d, c], i) => {
          const I = Icon as React.ComponentType<{ className?: string }>;
          return <AnimateOnScroll key={t as string} type="fade-up" delay={i * 0.07}><TintTile tint={TINTS[i]} title={t as string} text={d as string} icon={<I className={`h-9 w-9 ${c}`} />} /></AnimateOnScroll>;
        })}
      </div>
    </Section>

    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead title="Leadership Grounded in the Product Lifecycle" />
        <div className="mt-7 grid items-center gap-8 lg:grid-cols-[220px_1fr_380px]">
          <img src={img('ab2-1')} alt="Raj Thota, Founder & Principal Advisor" loading="lazy" className="mx-auto w-48 rounded-xl object-cover shadow lg:w-full" />
          <div>
            <h3 className={`text-2xl font-black ${NAVY}`}>Raj Thota, <span className="text-base font-bold">MBA, MS (Pharmaceutics)</span></h3>
            <p className="font-semibold italic text-[#27407A]">Founder &amp; Principal Advisor</p>
            <p className="mt-3 text-sm sm:text-base text-[#27407A]">Founded by Raj Thota, with nearly three decades across Pharmaceutical Development, CMC, MS&amp;T, Technical Operations, global manufacturing, technology transfer, validation, site leadership, commercialization and executive advisory.</p>
            <p className="mt-3 text-sm sm:text-base text-[#27407A]">His work spans not only strategy and advisory support, but direct technical program leadership and execution across development, scale-up, technology transfer, manufacturing, validation, and lifecycle management.</p>
            <BtnPrimary tone="green" onClick={() => navigate('/our-founder')} className="mt-4">Meet the Founder</BtnPrimary>
          </div>
          <div className="rounded-xl bg-[#EAF3FC] p-4">
            <h4 className={`mb-3 text-sm font-extrabold ${NAVY}`}>Selected Career Experience</h4>
            <div className="grid grid-cols-2 gap-2.5">
              {STATS.map(([n, l], i) => <div key={n} className={`rounded-lg border border-white/70 px-2 py-3 text-center ${TINTS[i]}`}><CountUp value={n} className={`block text-2xl font-black ${NAVY}`} /><span className="text-xs font-semibold text-[#27407A]">{l}</span></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>

    <Cta image="ab1-10" title="Let’s Discuss Your Program" text="Whether you need technical advice, CMC development support, project leadership, on-site execution, or commercialization support, InnoTech can help." label="Get in Touch" onClick={() => navigate('/contact-us')} />
  </div>
);
