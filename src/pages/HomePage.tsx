import React from 'react';
import { Hero, Section, SectionHead, TintCard, TINTS, BtnPrimary, BtnOutline, Cta, img, NAVY } from '../components/Ui';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { ChevronStages } from '../components/Flows';

interface HomePageProps { navigate: (route: string) => void; openConsultationModal: () => void }

const LIFECYCLE = [
  { stage: 'DEVELOP', area: 'Preclinical to Phase 1', color: '#0B5FD8' },
  { stage: 'OPTIMIZE', area: 'Phase 2 Development', color: '#0A9EE8' },
  { stage: 'SCALE', area: 'Phase 3 Development', color: '#16A34A' },
  { stage: 'TRANSFER', area: 'Technology Transfer', color: '#F5A300' },
  { stage: 'VALIDATE', area: 'Process Performance Qualification', color: '#F2622A' },
  { stage: 'LAUNCH', area: 'Commercial Manufacturing', color: '#D7263D' },
  { stage: 'SUSTAIN', area: 'Lifecycle Management & Continuous Improvement', color: '#7C3AED' },
];
const APPROACH: [string, string, string, string][] = [
  ['ADVISE', 'CMC strategy, technical strategy, commercialization planning, readiness assessment and executive decision support.', 'home-2', '/our-services'],
  ['DEVELOP', 'Formulation and process development, QbD, process optimization, scale-up, control strategy and CMC development support.', 'home-3', '/our-services#svc-1'],
  ['EXECUTE', 'Project leadership, technology transfer, engineering/scale-up batches, validation, PPQ, launch and technical problem-solving.', 'home-4', '/our-services#svc-2'],
  ['SUPPORT ON-SITE', 'Hands-on technical support at development, CDMO and manufacturing sites during critical project milestones.', 'home-5', '/our-services#svc-3'],
];
const AREAS: [string, string, string, string][] = [
  ['CMC Development & Product Development', 'Formulation, process development, QbD, scale-up and regulatory CMC.', 'home-6', '/our-expertise#cmc'],
  ['MS&T & Technical Operations', 'Process stewardship, manufacturing science and lifecycle capability.', 'home-6a', '/our-expertise#mst'],
  ['Technology Transfer & Manufacturing Readiness', 'Transfer knowledge into reproducible, ready-for-commercial manufacturing.', 'home-7', '/our-expertise#transfer'],
  ['Validation, Launch & Commercialization', 'PPQ, commercial launch and initial supply through lifecycle performance.', 'home-8', '/our-expertise#validation'],
  ['Specialized Products & Delivery Systems', 'Complex oral, sterile ophthalmic, injectables, LAIs and combination products.', 'home-9', '/our-expertise#specialized'],
  ['AI & Digital Technical Operations', 'Apply AI, digital twins and advanced analytics to strengthen technical decisions and manufacturing performance.', 'home-10', '/our-expertise#ai'],
  ['Project Leadership & Execution Support', 'Integrated plans, CDMO management, risk mitigation and hands-on execution.', 'home-11', '/our-expertise#project'],
  ['Lifecycle Management & Executive Advisory', 'Post-approval changes, supply continuity, technical due diligence and strategic advisory.', 'home-12', '/our-services#svc-8'],
];
const INSIGHTS: [string, string, string, string][] = [
  ['Good AI Practice in Pharma & Biotech', 'Practical guidance for development, manufacturing and commercialization.', 'home-13', '/insights/good-ai-practice'],
  ['The Evolution of QbD', 'Understand. Predict. Integrate. Sustain.', 'home-14', '/insights/evolution-of-qbd'],
  ['Investor Technical Due Diligence', 'Connect technical risk with investment decisions.', 'home-15', '/insights/investor-technical-due-diligence'],
  ['Commercializing Sterile Ophthalmic Eye Drops', 'Technical operations and commercialization playbook.', 'home-16', '/insights/commercializing-sterile-ophthalmic-eye-drops'],
  ['Executive Learning Series', 'Build the next generation commercialization playbook.', 'home-17', '/insights/small-molecules-to-biologics'],
  ['Enterprise Commercialization', 'A practical framework for end-to-end success.', 'home-18', '/insights/enterprise-commercialization'],
];

export const HomePage: React.FC<HomePageProps> = ({ navigate, openConsultationModal }) => (
  <div className="font-sans bg-white">
    <Hero
      image="home-1" imageAlt="Pharmaceutical vial filling line with a technician"
      title={<>End-to-End Pharmaceutical Development, CMC &amp; <span className="text-[#1769E0]">Commercialization Support</span></>}
      actions={<><BtnPrimary onClick={() => navigate('/our-services')}>Explore Our Services</BtnPrimary><BtnOutline onClick={openConsultationModal}>Discuss Your Development Challenge</BtnOutline></>}
    >
      <p className="text-base sm:text-lg font-medium leading-snug">Development | CMC | MS&amp;T | Technical Operations | Project Execution | Technology Transfer | Manufacturing | Validation | Commercialization | Lifecycle Management</p>
      <p>InnoTech supports pharmaceutical and biotechnology organizations across the product lifecycle — from CMC development and scale-up through technology transfer, manufacturing, validation, commercialization, and lifecycle management. We provide strategic advisory, technical project support, hands-on execution, and on-site support matched to the needs of each program.</p>
      <p className="font-extrabold tracking-wide text-[#0A2A7A]">BUILD PRODUCTS. BUILD MANUFACTURING. BUILD CAPABILITY.</p>
    </Hero>

    <Section title="From Development Strategy to Hands-On Execution" sub="Integrated support across the entire product lifecycle, tailored to your needs.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {APPROACH.map(([t, d, im, to], i) => (
          <AnimateOnScroll key={t} type="fade-up" delay={i * 0.08}><TintCard image={im} title={t} text={d} tint={TINTS[i]} onClick={() => navigate(to)} /></AnimateOnScroll>
        ))}
      </div>
    </Section>

    <section className="bg-[#F4F9FE] py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead title="The End-to-End Lifecycle We Support" sub="Connecting development, manufacturing and commercialization for lasting success." />
        <div className="mt-8"><ChevronStages stages={LIFECYCLE} showDetail={false} label="End-to-end lifecycle stages" /></div>
      </div>
    </section>

    <Section title="Key Areas of Support" sub="Comprehensive services across development, manufacturing and the commercial lifecycle.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {AREAS.map(([t, d, im, to], i) => (
          <AnimateOnScroll key={t} type="fade-up" delay={(i % 4) * 0.07}><TintCard image={im} title={t} text={d} tint={TINTS[(i + (i > 3 ? 1 : 0)) % TINTS.length]} onClick={() => navigate(to)} /></AnimateOnScroll>
        ))}
      </div>
    </Section>

    <section className="bg-[#F4F9FE] py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead title="Featured Insights & Resources" sub="Practical perspectives, white papers, guides and frameworks to help you build, execute and sustain commercialization success." />
        <ul className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {INSIGHTS.map(([t, d, im, to], i) => (
            <AnimateOnScroll as="li" key={t} type="fade-up" delay={(i % 6) * 0.06} className="list-none">
              <button onClick={() => navigate(to)} className="group block h-full w-full text-left">
                <span className="block overflow-hidden rounded-lg border border-[#D7EAF7] bg-white shadow-sm transition-all group-hover:-translate-y-1 group-hover:shadow-lg"><img src={img(im)} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" /></span>
                <span className={`mt-2.5 block text-[13px] font-extrabold leading-snug ${NAVY} group-hover:text-blue-600`}>{t}</span>
                <span className="mt-1 block text-xs leading-snug text-[#27407A]">{d}</span>
              </button>
            </AnimateOnScroll>
          ))}
        </ul>
      </div>
    </section>

    <Cta tone="light" image="home-20" title="Let’s Discuss Your Program" text="Whether you need technical advice, CMC development support, project leadership, on-site execution, or commercialization support, InnoTech can help." label="Discuss Your Development Challenge" onClick={openConsultationModal} />
  </div>
);
