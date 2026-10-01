import React from 'react';
import { Hero, Flow, img } from '../components/Ui';

const SERVICES: { images: string[]; n: string; t: string; d: string; flow?: string[]; extra?: string; lists?: [string, string[]][] }[] = [
  { images: ['svc-1'], n: '01', t: 'Commercialization Readiness Assessments', d: 'Independent, structured reviews to determine whether the product, process, manufacturing organization, evidence, and governance are ready for the next critical milestone.',
    lists: [['Available assessments:', ['CMC Readiness', 'Technology Transfer Readiness', 'Manufacturing Readiness', 'PPQ Readiness', 'Technical Launch Readiness', 'Technical Operations Health Check', 'CDMO Readiness']], ['Typical output:', ['Executive readiness view', 'Critical gaps and risk priorities', 'Decision points and owners', '30/60/90-day actions']]] },
  { images: ['svc-2'], n: '02', t: 'Technology Transfer & Commercialization Execution', d: 'Support the end-to-end transition from sending-site knowledge to receiving-site manufacturing capability.', flow: ['Plan', 'Capture Knowledge', 'Assess Receiving-Site Fit', 'Close Gaps', 'Build Readiness', 'Demonstrate', 'Validate', 'Launch', 'Sustain'], extra: 'Support may include transfer strategy, risk assessment, process/equipment fit, knowledge-transfer structure, readiness reviews, engineering/scale-up support, validation preparation, and early commercial stabilization.' },
  { images: ['svc-3'], n: '03', t: 'MS&T & Technical Operations Transformation', d: 'Assess and strengthen the operating model for technical stewardship across commercial manufacturing.', flow: ['Reactive', 'Stable', 'Proactive', 'Predictive', 'Leading'], extra: 'Areas include organization design, process stewardship, technical governance, CPV, knowledge management, deviation/trend understanding, lifecycle improvement, and interface with Manufacturing, Quality, Engineering, Regulatory, and Supply.' },
  { images: ['svc-4'], n: '04', t: 'Validation, PPQ & Technical Launch', d: 'Connect process validation with broader commercialization readiness.', flow: ['Process Understanding', 'Manufacturing Readiness', 'PPQ Readiness', 'Validation', 'Technical Launch', 'Initial Commercial Supply'], extra: 'PPQ Demonstrates the Process. Commercialization Demonstrates the System.' },
  { images: ['svc-5a', 'svc-5b', 'svc-5c', 'svc-5d'], n: '05', t: 'Specialized Products & Delivery Systems', d: 'Focused support for complex oral and modified-release products, sterile ophthalmics, injectables/LAIs, and drug-device combination products. Engagements may address scale-up, technology transfer, manufacturing readiness, validation, launch, lifecycle, and technical recovery.',
    lists: [['', ['Complex oral and modified-release products', 'Sterile ophthalmic solutions', 'Injectables and long-acting injectables (LAIs)', 'Drug-device combination products', 'Product, process, and site-specific support']]] },
  { images: ['svc-6'], n: '06', t: 'AI & Digital Transformation', d: 'Help pharmaceutical organizations identify where AI and digital technologies can improve technical decisions, knowledge transfer, manufacturing insight, and commercialization performance—while preserving appropriate scientific, Quality, and GxP accountability.',
    lists: [['', ['AI Opportunity & Readiness', 'AI-Assisted QbD', 'AI-Assisted Technology Transfer', 'Digital Twins', 'MES', 'Knowledge Management', 'Manufacturing Intelligence', 'Good AI Practice']], ['Opportunity screen:', ['Business Value', 'Technical Feasibility', 'Data Readiness', 'GxP Risk']]], extra: 'Pharmaceutical Expertise First. Digital Technology Applied with Purpose.' },
  { images: ['svc-7'], n: '07', t: 'Executive Advisory, Due Diligence & Recovery', d: 'Independent support for leadership teams, boards, investors, transactions, difficult technical programs, or manufacturing situations requiring rapid clarity.', flow: ['Stabilize', 'Diagnose', 'Prioritize', 'Remediate', 'Verify', 'Sustain'], extra: 'The objective is to understand the technical risk, quantify the business consequence, establish decision priorities, and build a practical path forward.' },
];

export const OurServicesPage: React.FC<{ navigate: (r: string) => void; openConsultationModal: () => void }> = ({ openConsultationModal }) => (
  <div className="font-sans text-[#536B7D] bg-white">
    <Hero title="Services" accent="Advisory Support from Development to Commercial Supply" image="svc-hero">
      <p className="text-lg font-bold text-white">What can you hire InnoTech to do?</p>
      <Flow items={['ASSESS', 'STRATEGIZE', 'BUILD', 'EXECUTE', 'RECOVER', 'SUSTAIN']} />
    </Hero>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      {SERVICES.map(s => (
        <section key={s.n} className="border-b border-[#D7EAF7] pb-6 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4"><div className="flex gap-3"><span className="text-4xl font-black text-blue-600">{s.n}</span><h2 className="text-xl font-black text-blue-800">{s.t}</h2></div><p className="text-sm mt-2">{s.d}</p></div>
          <div className={`lg:col-span-3 grid gap-2 content-start ${s.images.length > 1 ? 'grid-cols-2' : ''}`}>{s.images.map(i => <img key={i} src={img(i)} alt={s.t} loading="lazy" className="rounded-lg w-full h-full max-h-44 object-cover" />)}</div>
          <div className="lg:col-span-5 space-y-3">
            {s.flow && <Flow items={s.flow} />}
            {s.lists && <div className="grid sm:grid-cols-2 gap-4">{s.lists.map(([h, l]) => <div key={h + l[0]} className="bg-[#F5FAFE] rounded-lg p-4">{h && <h3 className="text-xs font-bold text-[#123B5D] mb-1">{h}</h3>}<ul className="list-disc pl-4 text-xs space-y-0.5">{l.map(i => <li key={i}>{i}</li>)}</ul></div>)}</div>}
            {s.extra && <p className="text-sm">{s.extra}</p>}
          </div>
        </section>
      ))}
    </div>
    <section className="bg-[#F5FAFE] py-10"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-black text-blue-700">Engagement Models</h2>
      <p className="text-sm mb-4">Engagement scope is matched to the decision, milestone, risk, and capability required.</p>
      <div className="flex flex-wrap gap-2 items-center">
        {['Executive Advisory', 'Readiness Assessment', 'Program Support', 'Independent Review', 'Technical Recovery', 'Capability Building'].map(m => <span key={m} className="bg-white border border-[#D7EAF7] text-xs font-bold text-blue-800 rounded-md px-3 py-2">{m}</span>)}
        <button onClick={openConsultationModal} className="ml-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-2.5 rounded-md">Discuss an Engagement</button>
      </div>
    </div></section>
  </div>
);
