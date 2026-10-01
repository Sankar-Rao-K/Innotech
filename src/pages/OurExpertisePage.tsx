import React from 'react';
import { Hero, Cta, img } from '../components/Ui';

const ITEMS: [string, string, string, string][] = [
  ['CMC & Late-Stage Development', 'Translate product and process understanding into a scalable, controlled, regulatory-ready, commercially viable manufacturing strategy.', 'Focus areas include late-stage formulation and process development, QbD and control strategy, scale-up, process characterization, CMC strategy, Module 3 readiness, and development-to-commercial transition.', 'cmc'],
  ['MS&T & Technical Operations', 'Build the technical stewardship required after development.', 'Our work establishes process ownership, manufacturing science, CPV, technical governance, deviation and trend understanding, lifecycle improvement, knowledge management, and cross-functional technical decision-making to ensure consistent product quality, reliable supply, and continuous improvement.', 'mst'],
  ['Technology Transfer & Manufacturing Readiness', 'Transfer product knowledge, process understanding, analytical capability, control strategy, and manufacturing experience—not just documents.', 'We assess receiving-site fit, equipment and process gaps, knowledge transfer, risk, engineering readiness, training, and execution readiness to enable successful commercial manufacturing.', 'transfer'],
  ['Validation, Launch & Commercialization', 'Integrate validation strategy with organizational and manufacturing readiness.', 'We support PPQ readiness, process validation, technical launch readiness, initial commercial supply, risk escalation, and lifecycle transition to ensure a controlled, efficient, and successful product launch.', 'validation'],
  ['Specialized Products & Delivery Systems', 'Experience includes complex oral and modified-release products, sterile ophthalmic solutions, injectable and long-acting injectable programs, and drug–device combination products.', 'Our support is tailored to the actual product, process, delivery system, and manufacturing environment.', 'specialized'],
  ['AI & Digital Technical Operations', 'Apply AI, digital twins, MES, advanced analytics, and knowledge management approaches to late-stage development, technology transfer, Technical Operations, and commercialization.', 'The objective is stronger knowledge connectivity, earlier risk visibility, better technical decisions, and more effective manufacturing insight.', 'ai'],
  ['Technical Due Diligence & Executive Advisory', 'Evaluate product, process, manufacturing, CMC, supply, organizational, and commercialization risks in the context of business consequences.', 'We translate technical findings into business consequence, decision priorities, and action to support investment, partnering, and strategic decision-making.', 'diligence'],
];
const NAV = ['CMC & Late-Stage Development', 'MS&T & Technical Operations', 'Technology Transfer & Manufacturing Readiness', 'Validation, Launch & Commercialization', 'Specialized Products & Delivery Systems', 'AI & Digital Technical Operations', 'Technical Due Diligence & Executive Advisory'];

export const OurExpertisePage: React.FC<{ navigate: (r: string) => void; openConsultationModal: () => void }> = ({ openConsultationModal }) => (
  <div className="font-sans text-[#536B7D] bg-white">
    <Hero title="Expertise" accent="From Development Knowledge to Commercial Capability" image="exp-hero">
      <p>InnoTech connects scientific understanding with the technical, manufacturing, organizational, and digital capabilities required to move products from late-stage development into reliable commercial supply.</p>
    </Hero>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-2">
      {NAV.map((n, i) => <a key={n} href={`#${ITEMS[i][3]}`} className="bg-[#EAF6FD] text-[#123B5D] text-xs font-bold rounded-md px-3 py-2">{n}</a>)}
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-4">
      {ITEMS.map(([t, lead, body, id]) => (
        <section id={id} key={id} className="border border-[#D7EAF7] rounded-lg p-6 scroll-mt-28 grid md:grid-cols-[1fr_340px] gap-6 items-center">
          <div><h2 className="text-2xl font-black text-blue-700">{t}</h2>
          <p className="mt-2 font-semibold text-[#123B5D] text-sm">{lead}</p>
          <p className="mt-2 text-sm">{body}</p></div>
          <img src={img(`exp-${ITEMS.findIndex(x => x[3] === id) + 1}`)} alt={t} loading="lazy" className="rounded-lg w-full h-44 object-cover" />
        </section>
      ))}
    </div>
    <Cta title="Let's Build Commercialization Success Together" text="Whether you are advancing a product, preparing for a technology transfer, strengthening Technical Operations, addressing a manufacturing challenge, or evaluating an investment opportunity, InnoTech can help." label="Discuss Your Commercialization Challenge" onClick={openConsultationModal} image="who-cta" />
  </div>
);
