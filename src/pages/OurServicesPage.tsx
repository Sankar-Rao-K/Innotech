import React from 'react';
import { Hero, SectionHead, TintTile, TINTS, BtnPrimary, img, NAVY } from '../components/Ui';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { ChevronRun, ProgressPills } from '../components/Flows';

interface Service { n: string; color: string; title: string; lead: string; detail: string; image: string; flow?: React.ReactNode }
const SERVICES: Service[] = [
  { n: '01', color: '#0F9D9A', title: 'CMC Development & Product Development Support', lead: 'Support emerging biotech, small pharma and other organizations in building a practical, phase-appropriate CMC development path.', detail: 'Potential scope: CMC strategy, formulation/process development support, QbD / DoE, process optimization, control strategy, scale-up, analytical/stability strategy coordination, development planning, regulatory CMC / Module 3 support, vendor/CDMO oversight.', image: 'svc-1a' },
  { n: '02', color: '#0F9D9A', title: 'Project Leadership & Project Execution', lead: 'Provide experienced technical leadership to convert strategy into an executable program.', detail: 'Support may include integrated project plans, technical workstream leadership, CRO/CDMO coordination, risk registers, milestone management, cross-functional decision-making, meeting leadership, technical issue resolution and executive escalation.', image: 'svc-2' },
  { n: '03', color: '#F97316', title: 'On-Site Technical & Manufacturing Support', lead: 'Provide hands-on support at client, CDMO or manufacturing sites when critical milestones require experienced technical presence.', detail: 'Potential support: scale-up and engineering batches, equipment/process fit, technology transfer, manufacturing troubleshooting, investigations, validation / PPQ execution support, launch support, early commercial stabilization.', image: 'svc-4' },
  { n: '04', color: '#2563EB', title: 'Technology Transfer & Manufacturing Readiness', lead: 'Support the end-to-end transition from sending-site knowledge to receiving-site manufacturing capability.', detail: 'Support may include transfer strategy, risk assessment, process/equipment fit, knowledge-transfer structure, readiness reviews, engineering/scale-up support, validation preparation and early commercial stabilization.', image: 'exp-5',
    flow: <ChevronRun items={['Plan', 'Capture Knowledge', 'Assess Receiving-Site Fit', 'Close Gaps', 'Build Readiness', 'Demonstrate', 'Validate', 'Launch', 'Sustain']} /> },
  { n: '05', color: '#EC4899', title: 'MS&T & Technical Operations Support', lead: 'Support or strengthen the technical stewardship required across commercial manufacturing.', detail: 'Areas include process stewardship, technical governance, CPV, knowledge management, escalation, technical investigations, troubleshooting, process improvement, lifecycle change and interfaces with Manufacturing, Quality, Engineering, Regulatory and Supply.', image: 'svc-3' },
  { n: '06', color: '#9333EA', title: 'Validation, PPQ & Commercial Launch', lead: 'Connect process validation with broader commercialization readiness.', detail: 'Support may include validation strategy, readiness review, PPQ planning/execution support, issue management, technical launch readiness and initial commercial stabilization.', image: 'svc-5',
    flow: <ProgressPills items={['Process Understanding', 'Manufacturing Readiness', 'PPQ Readiness', 'Validation', 'Technical Launch', 'Initial Commercial Supply']} /> },
  { n: '07', color: '#16A34A', title: 'Specialized Product Development & Commercialization', lead: 'Experience includes complex oral and modified-release products, sterile ophthalmic solutions, injectables/LAIs and drug-device combination products.', detail: 'Engagements may address development, process optimization, scale-up, technology transfer, manufacturing readiness, validation, launch/lifecycle management and technical recovery.', image: 'svc-6' },
  { n: '08', color: '#F5B000', title: 'Lifecycle Management & Post-Approval Support', lead: 'Support products after launch as manufacturing knowledge, regulatory commitments, sites, equipment, processes and supply requirements evolve.', detail: 'Areas include CPV, process optimization, post-approval CMC change support, site / equipment changes, product transfers, manufacturing troubleshooting, cost & productivity improvement, supply continuity and technical risk management.', image: 'svc-7' },
];
const MODELS: [string, string][] = [
  ['ADVISORY', 'Independent technical or strategic guidance.'], ['PROJECT-BASED', 'Defined scope, deliverables and milestones.'], ['PROGRAM LEADERSHIP', 'Lead or coordinate a technical / CMC workstream or broader program.'],
  ['EMBEDDED / FRACTIONAL SUPPORT', 'Operate as an extension of the client’s technical organization.'], ['ON-SITE SUPPORT', 'Experienced technical support at development, CDMO or manufacturing sites.'], ['EXECUTION & RECOVERY', 'Hands-on support for development, transfers, scale-up, PPQ, launch, investigations or troubled programs.'],
];

export const OurServicesPage: React.FC<{ navigate: (r: string) => void; openConsultationModal: () => void }> = ({ openConsultationModal }) => (
  <div className="font-sans bg-white">
    <Hero image="svc-3a" imageAlt="Technician and scientists beside a vial filling line" title="Services" sub="End-to-End Support from Development through Commercialization & Lifecycle Management">
      <p>InnoTech provides flexible technical support matched to the needs of each program—from focused advisory and CMC development support to project leadership, hands-on execution, on-site manufacturing support and lifecycle Technical Operations.</p>
    </Hero>

    <section className="border-b border-[#D7EAF7] bg-white py-5">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-8 lg:px-8">
        <div className="min-w-0 flex-1"><ChevronRun items={['ADVISE', 'DEVELOP', 'PLAN', 'EXECUTE', 'TRANSFER', 'VALIDATE', 'LAUNCH', 'SUSTAIN']} /></div>
        <BtnPrimary onClick={openConsultationModal} className="shrink-0">Discuss an Engagement</BtnPrimary>
      </div>
    </section>

    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {SERVICES.map(s => (
        <AnimateOnScroll key={s.n} type="fade-up">
          <section id={`svc-${Number(s.n)}`} className="grid scroll-mt-28 items-center gap-5 border-b border-[#D7EAF7] py-7 md:grid-cols-[minmax(0,1fr)_minmax(0,0.62fr)] md:gap-8">
            <div>
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="text-4xl font-black leading-none sm:text-5xl" style={{ color: s.color }}>{s.n}</span>
                <div><h2 className={`text-lg font-black leading-snug sm:text-2xl ${NAVY}`}>{s.title}</h2><p className={`mt-1.5 text-sm font-medium leading-relaxed sm:text-base ${NAVY}`}>{s.lead}</p></div>
              </div>
              {s.flow && <div className="mt-4 sm:ml-[68px]">{s.flow}</div>}
              <p className="mt-3 text-sm leading-relaxed text-[#27407A] sm:ml-[68px] sm:text-base">{s.detail}</p>
            </div>
            <img src={img(s.image)} alt={s.title} loading="lazy" className="h-48 w-full rounded-xl object-cover shadow-sm sm:h-56" />
          </section>
        </AnimateOnScroll>
      ))}
    </div>

    <section className="bg-[#EAF3FC] py-10 sm:py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:px-8">
        <div>
          <SectionHead title="Flexible Engagement Models" sub="Engagement scope is matched to the product stage, milestone, technical risk, internal capability and required level of execution." />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {MODELS.map(([t, d], i) => <AnimateOnScroll key={t} type="fade-up" delay={(i % 3) * 0.07}><TintTile tint={TINTS[[0, 1, 3, 2, 5, 2][i]]} title={t} text={d} /></AnimateOnScroll>)}
          </div>
        </div>
        <BtnPrimary onClick={openConsultationModal} className="w-full lg:w-auto">Discuss an Engagement</BtnPrimary>
      </div>
    </section>
  </div>
);
