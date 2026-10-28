import React, { useEffect, useState } from 'react';
import { Hero, Cta, Arrow, img, NAVY } from '../components/Ui';
import { AnimateOnScroll } from '../components/AnimateOnScroll';

interface Item { id: string; chip: string; title: string; lead?: string; body: string; image: string; to: string; topic?: string }
const ITEMS: Item[] = [
  { id: 'cmc', chip: 'CMC & Pharmaceutical Development', title: 'CMC & Pharmaceutical Development', lead: 'Support product and process development with commercialization in mind.', body: 'Focus areas include CMC strategy, formulation development, process development, QbD, risk assessment, DoE strategy, control strategy, scale-up/scale-down, process characterization, development/manufacturing feasibility, clinical-to-commercial planning and regulatory CMC / Module 3 support.', image: 'exp-1', to: '/our-services#svc-1' },
  { id: 'process', chip: 'Process Development, Optimization & Scale-Up', title: 'Process Development, Optimization & Scale-Up', lead: 'Translate laboratory and development knowledge toward robust manufacturing.', body: 'Support process optimization, scale-up strategy, equipment/process understanding, engineering batches, troubleshooting, process characterization and risk reduction before transfer or validation.', image: 'exp-2', to: '/our-services#svc-1' },
  { id: 'project', chip: 'Project Leadership & Technical Execution', title: 'Project Leadership & Technical Execution', body: 'Translate technical strategy into coordinated execution across internal teams, CROs, CDMOs, manufacturing sites, Quality, Regulatory and external partners. Areas include project planning, technical workstreams, development execution, partner coordination, risk management, milestone management, technical decisions and issue resolution.', image: 'exp-3', to: '/our-services#svc-2' },
  { id: 'mst', chip: 'MS&T & Technical Operations', title: 'MS&T & Technical Operations', body: 'Build and support technical stewardship after development: process ownership, manufacturing science, CPV, technical governance, deviation/trend understanding, lifecycle improvement, knowledge management and cross-functional technical decision-making.', image: 'exp-4', to: '/our-services#svc-5' },
  { id: 'transfer', chip: 'Technology Transfer & Manufacturing Readiness', title: 'Technology Transfer & Manufacturing Readiness', body: 'Transfer product knowledge, process understanding, analytical capability, control strategy and manufacturing experience—not just documents. Assess receiving-site fit, equipment/process gaps, knowledge transfer, risk, engineering readiness, training and execution readiness.', image: 'exp-5', to: '/our-services#svc-4' },
  { id: 'validation', chip: 'Validation, Launch & Lifecycle Management', title: 'Validation, Launch & Lifecycle Management', lead: 'Integrate validation strategy with manufacturing and organizational readiness.', body: 'Support PPQ readiness, process validation, technical launch, initial commercial supply, post-approval change, CPV, process improvement and lifecycle transition.', image: 'exp-6', to: '/our-services#svc-6' },
  { id: 'specialized', chip: 'Specialized Products & Delivery Systems', title: 'Specialized Products & Delivery Systems', body: 'Experience includes complex oral and modified-release products, sterile ophthalmic solutions, injectable/long-acting injectable programs and drug-device combination products. Support is tailored to the actual product, process, delivery system and manufacturing environment.', image: 'exp-7', to: '/our-services#svc-7' },
  { id: 'ai', chip: 'AI, Digital & Technical Due Diligence', title: 'AI, Digital & Technical Due Diligence', body: 'Apply AI, digital twins, MES, analytics and knowledge-management approaches to pharmaceutical workflows; and evaluate product, process, manufacturing, CMC, supply and commercialization risks for business decisions.', image: 'exp-8', to: '/insights', topic: 'AI, Digital Twins & Manufacturing Intelligence' },
];
const CHIP_TINTS = ['bg-[#E6F0FF]', 'bg-[#E4F8EC]', 'bg-[#EEE9FF]', 'bg-[#FFF4DC]', 'bg-[#E3F1FB]', 'bg-[#E4F8EC]', 'bg-[#FFE9EC]', 'bg-[#E8F0FF]'];

export const OurExpertisePage: React.FC<{ navigate: (r: string) => void; openConsultationModal: () => void }> = ({ navigate }) => {
  const [active, setActive] = useState(ITEMS[0].id);
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-30% 0px -60% 0px' });
    ITEMS.forEach(i => { const el = document.getElementById(i.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const learn = (it: Item) => { if (it.topic) { try { sessionStorage.setItem('insights-topic', it.topic); } catch { /* ignore */ } } navigate(it.to); };

  return (
    <div className="font-sans bg-white">
      <Hero image="exp-0" imageAlt="Technician beside a pharmaceutical filling line" title="Expertise" sub="From Pharmaceutical Development to Lifecycle Excellence">
        <p>InnoTech connects scientific understanding with the technical, manufacturing, organizational and digital capabilities required to move products from development into reliable commercial supply and sustained lifecycle performance.</p>
      </Hero>

      <nav aria-label="Expertise areas" className="sticky top-[61px] z-30 border-b border-[#D7EAF7] bg-white/95 backdrop-blur sm:top-[69px]">
        <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-2.5 no-scrollbar sm:px-6 lg:grid lg:grid-cols-8 lg:px-8">
          {ITEMS.map((it, i) => (
            <li key={it.id} className="shrink-0 lg:shrink">
              <button onClick={() => go(it.id)} aria-current={active === it.id} className={`h-full w-full rounded-lg px-3 py-2.5 text-center text-[11.5px] font-bold leading-tight transition-all ${active === it.id ? 'bg-[#0A2A8F] text-white shadow' : `${CHIP_TINTS[i]} ${NAVY} hover:-translate-y-0.5`}`}>{it.chip}</button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-7xl space-y-3 px-4 py-8 sm:px-6 lg:px-8">
        {ITEMS.map(it => (
          <AnimateOnScroll key={it.id} type="fade-up">
            <section id={it.id} className="grid scroll-mt-36 items-center gap-5 border-b border-[#D7EAF7] py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] md:gap-8">
              <div>
                <span className="mb-2 block h-0.5 w-10 bg-emerald-500" />
                <h2 className={`text-xl font-black leading-tight sm:text-2xl ${NAVY}`}>{it.title}</h2>
                {it.lead && <p className={`mt-2 text-sm font-semibold sm:text-base ${NAVY}`}>{it.lead}</p>}
                <p className="mt-2 text-sm leading-relaxed text-[#27407A] sm:text-base">{it.body}</p>
                <button onClick={() => learn(it)} className={`group mt-3 inline-flex items-center gap-1.5 text-sm font-extrabold ${NAVY} hover:text-blue-600`}>Learn More <Arrow className="transition-transform group-hover:translate-x-1" /></button>
              </div>
              <img src={img(it.image)} alt={it.title} loading="lazy" className="h-auto w-full rounded-xl shadow-sm" />
            </section>
          </AnimateOnScroll>
        ))}
      </div>

      <Cta image="exp-9" title={<>Let’s Build Your <span className="text-cyan-300">Commercialization Capability</span></>} text="Whether you need technical advice, CMC development support, project leadership, on-site execution, or commercialization support, InnoTech can help." label="Get in Touch" onClick={() => navigate('/contact-us')} />
    </div>
  );
};
