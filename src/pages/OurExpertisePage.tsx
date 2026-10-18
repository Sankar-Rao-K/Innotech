import React, { useEffect, useState } from 'react';
import { Hero, Cta, img } from '../components/Ui';
import { AnimateOnScroll } from '../components/AnimateOnScroll';

const ITEMS: [string, string, string, string, string][] = [
  ['cmc', 'CMC & Late-Stage Development', 'Translate product and process understanding into a scalable, controlled, regulatory-ready, commercially viable manufacturing strategy.', 'Focus areas include late-stage formulation and process development, QbD and control strategy, scale-up, process characterization, CMC strategy, Module 3 readiness, and development-to-commercial transition.', 'CMC & Late-Stage Development'],
  ['mst', 'MS&T & Technical Operations', 'Build the technical stewardship required after development.', 'Our work establishes process ownership, manufacturing science, CPV, technical governance, deviation and trend understanding, lifecycle improvement, knowledge management, and cross-functional technical decision-making to ensure consistent product quality, reliable supply, and continuous improvement.', 'MS&T & Technical Operations'],
  ['transfer', 'Technology Transfer & Manufacturing Readiness', 'Transfer product knowledge, process understanding, analytical capability, control strategy, and manufacturing experience—not just documents.', 'We assess receiving-site fit, equipment and process gaps, knowledge transfer, risk, engineering readiness, training, and execution readiness to enable successful commercial manufacturing.', 'Technology Transfer & Manufacturing Readiness'],
  ['validation', 'Validation, Launch & Commercialization', 'Integrate validation strategy with organizational and manufacturing readiness.', 'We support PPQ readiness, process validation, technical launch readiness, initial commercial supply, risk escalation, and lifecycle transition to ensure a controlled, efficient, and successful product launch.', 'Validation, Launch & Commercialization'],
  ['specialized', 'Specialized Products & Delivery Systems', 'Experience includes complex oral and modified-release products, sterile ophthalmic solutions, injectable and long-acting injectable programs, and drug–device combination products.', 'Our support is tailored to the actual product, process, delivery system, and manufacturing environment.', 'Specialized Products & Delivery Systems'],
  ['ai', 'AI & Digital Technical Operations', 'Apply AI, digital twins, MES, advanced analytics, and knowledge management approaches to late-stage development, technology transfer, Technical Operations, and commercialization.', 'The objective is stronger knowledge connectivity, earlier risk visibility, better technical decisions, and more effective manufacturing insight.', 'AI & Digital Technical Operations'],
  ['diligence', 'Technical Due Diligence & Executive Advisory', 'Evaluate product, process, manufacturing, CMC, supply, organizational, and commercialization risks in the context of business consequences.', 'We translate technical findings into business consequence, decision priorities, and action to support investment, partnering, and strategic decision-making.', 'Technical Due Diligence & Executive Advisory'],
];
const SHORT = ['CMC & Late-Stage Development', 'MS&T & Technical Operations', 'Technology Transfer & Manufacturing Readiness', 'Validation, Launch & Commercialization', 'Specialized Products & Delivery Systems', 'AI & Digital Technical Operations', 'Technical Due Diligence & Executive Advisory'];

export const OurExpertisePage: React.FC<{ navigate: (r: string) => void; openConsultationModal: () => void }> = ({ openConsultationModal }) => {
  const [active, setActive] = useState(ITEMS[0][0]);
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(es => { es.forEach(e => e.isIntersecting && setActive(e.target.id)); }, { rootMargin: '-30% 0px -60% 0px' });
    ITEMS.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="font-sans text-[#536B7D] bg-white">
      <Hero title="Expertise" accent="From Development Knowledge to Commercial Capability" image="exp-hero" imageAlt="Technician beside a pharmaceutical filling line">
        <p>InnoTech connects scientific understanding with the technical, manufacturing, organizational, and digital capabilities required to move products from late-stage development into reliable commercial supply.</p>
      </Hero>

      <nav aria-label="Expertise areas" className="sticky top-[61px] sm:top-[69px] z-30 bg-white/95 backdrop-blur border-b border-[#D7EAF7]">
        <ul className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex gap-2 overflow-x-auto no-scrollbar">
          {ITEMS.map(([id], i) => (
            <li key={id} className="shrink-0">
              <button onClick={() => go(id)} aria-current={active === id} className={`rounded-md px-3 py-2 text-xs font-bold transition-colors ${active === id ? 'bg-blue-600 text-white' : 'bg-[#EAF6FD] text-[#123B5D] hover:bg-blue-100'}`}>{SHORT[i]}</button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-5">
        {ITEMS.map(([id, t, lead, body], i) => (
          <AnimateOnScroll key={id} type="fade-up">
            <section id={id} className="scroll-mt-36 border border-[#D7EAF7] rounded-xl p-5 sm:p-6 grid md:grid-cols-[1fr_360px] gap-6 items-center hover:shadow-md transition-shadow">
              <div className={i % 2 ? 'md:order-2' : ''}>
                <span className="text-xs font-black text-emerald-600">0{i + 1}</span>
                <h2 className="text-xl sm:text-2xl font-black text-blue-700">{t}</h2>
                <p className="mt-2 font-semibold text-[#123B5D] text-sm sm:text-base">{lead}</p>
                <p className="mt-2 text-sm sm:text-base">{body}</p>
              </div>
              <img src={img(`exp-${i + 1}`)} alt={t} loading="lazy" className={`rounded-lg w-full h-44 object-cover ${i % 2 ? 'md:order-1' : ''}`} />
            </section>
          </AnimateOnScroll>
        ))}
      </div>
      <Cta title="Let's Build Commercialization Success Together" text="Whether you are advancing a product, preparing for a technology transfer, strengthening Technical Operations, addressing a manufacturing challenge, or evaluating an investment opportunity, InnoTech can help." label="Discuss Your Commercialization Challenge" onClick={openConsultationModal} image="who-cta" />
    </div>
  );
};
