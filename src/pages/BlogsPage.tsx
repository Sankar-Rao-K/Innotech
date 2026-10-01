import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Hero, Section, Cta, img } from '../components/Ui';

const PUB_IMG = ['cover-qbd', 'cover-ai', 'cover-eye', 'cover-mol'];
const PUBS: [string, string][] = [
  ['The Evolution of QbD', 'A four-part executive perspective connecting foundational QbD, digital prediction, combination-product integration, and enterprise learning.'],
  ['Good AI Practice in Pharma & Biotech', 'A practical executive perspective on responsible AI use across regulated pharmaceutical and biotechnology environments.'],
  ['Commercializing Sterile Ophthalmic Eye Drops', 'From Quality by Design to reliable commercial supply: scale-up, technology transfer, manufacturing readiness, PPQ, and lifecycle management.'],
  ['From Small Molecules to Biologics', 'An executive learning series for CMC, MS&T, Technical Operations, and commercialization leaders.'],
];
const TOPICS = ['Enterprise Commercialization', 'QbD, AI & Digital Transformation', 'Technology Transfer & Manufacturing Science', 'Technical Operations & MS&T', 'Sterile & Combination Products', 'Executive Learning'];
const QBD: [string, string][] = [['UNDERSTAND — Foundational QbD', 'Build scientific understanding and control.'], ['PREDICT — Digital-QbD', 'Use advanced analytics, models, AI/ML, PAT, and digital twins to strengthen prediction.'], ['INTEGRATE — Combination-Product QbD', 'Expand the system boundary to drug/biologic, device, container, interfaces, manufacturing/assembly, and user.'], ['SUSTAIN — Enterprise QbD', 'Connect knowledge, control, performance, governance, and learning across the lifecycle.']];
const LEARN: [string, string][] = [['Foundation', 'Core concepts and regulatory landscape.'], ['Drug Substance', 'Cell line development, process development, and scale-up.'], ['Drug Product', 'Formulation, fill-finish, and analytical strategy.'], ['Technology Transfer', 'From development to commercial manufacturing.'], ['Scale-Up & Manufacturing', 'Process performance and continuous improvement.'], ['Validation & Control', 'PPQ, lifecycle management, and compliance.'], ['Commercialization', 'Supply chain, market readiness, and successful launch.'], ['Leadership', 'Strategic thinking for long-term success.']];
const PERSP: [string, string][] = [['Why Commercialization Risk Should Be Visible Before Launch', 'Early visibility creates more technical and business options—and a stronger path to reliable supply.'], ['Technology Transfer Is Not the Movement of Documents', 'Successful transfer requires knowledge, understanding, people, and execution readiness.'], ['Start with the Pharmaceutical Problem — Not the AI Technology', 'Real value comes from applying AI to well-defined pharmaceutical problems within GxP and business context.']];

export const BlogsPage: React.FC<{ navigate: (r: string) => void; openConsultationModal?: () => void }> = ({ openConsultationModal = () => {} }) => {
  const Read = ({ label }: { label: string }) => <button onClick={openConsultationModal} className="text-blue-700 font-bold text-xs inline-flex items-center gap-1 mt-2">{label} <ArrowRight className="w-3 h-3" /></button>;
  return (
    <div className="font-sans text-[#536B7D] bg-white">
      <Hero title="Executive Insights" accent="Where Science, Manufacturing, Technology, and Commercialization Converge" image="ins-hero">
        <p>Executive white papers, guides, playbooks, frameworks, and learning resources for leaders navigating the transition from development to commercial manufacturing and lifecycle performance.</p>
        <p className="text-xs font-bold tracking-wider">WHITE PAPERS | EXECUTIVE GUIDES | PLAYBOOKS | FRAMEWORKS | LEARNING SERIES</p>
      </Hero>
      <Section title="Featured Publications" sub="In-depth executive perspectives on key commercialization topics.">
        <div className="grid md:grid-cols-4 gap-4">
          {PUBS.map(([t, d], i) => <div key={t} className="border border-[#D7EAF7] rounded-lg p-4"><img src={img(PUB_IMG[i])} alt={t} loading="lazy" className="w-full h-48 object-contain bg-[#F5FAFE] rounded mb-3" /><h3 className="font-bold text-blue-800 text-sm">{t}</h3><p className="text-xs mt-1.5">{d}</p><Read label="Read Publication" /></div>)}
        </div>
      </Section>
      <Section tint title="Browse by Topic" sub="Explore insights and publications by key topic area.">
        <div className="grid lg:grid-cols-2 gap-8 items-center"><ul className="divide-y divide-[#D7EAF7] bg-white border border-[#D7EAF7] rounded-lg">{TOPICS.map(t => <li key={t} className="flex justify-between px-4 py-3 text-sm text-blue-800">{t}<ArrowRight className="w-4 h-4" /></li>)}</ul><img src={img('ins-topic')} alt="Pharmaceutical vial filling line" loading="lazy" className="rounded-lg w-full h-64 object-cover" /></div>
      </Section>
      <Section title="Signature Series – The Evolution of QbD" sub="Four connected perspectives for today's pharmaceutical and biotechnology challenges.">
        <div className="grid lg:grid-cols-[220px_1fr] gap-6 items-start"><img src={img('ins-qbd')} alt="The Evolution of QbD" loading="lazy" className="rounded-lg w-full max-w-[220px] object-cover" /><ol className="grid gap-3">{QBD.map(([t, d], i) => <li key={t} className="flex gap-3 border border-[#D7EAF7] rounded-lg p-3"><span className="font-black text-blue-600">0{i + 1}</span><div><h3 className="font-bold text-sm text-[#123B5D]">{t}</h3><p className="text-xs">{d}</p></div></li>)}</ol></div>
      </Section>
      <Section tint title="Executive Learning Series — From Small Molecules to Biologics" sub="Building the Next Generation of Commercialization Leaders">
        <div className="grid lg:grid-cols-[260px_1fr] gap-6 items-start"><img src={img('ins-learn')} alt="Scientist in a pharmaceutical manufacturing suite" loading="lazy" className="rounded-lg w-full object-cover" /><ol className="grid md:grid-cols-2 gap-3">{LEARN.map(([t, d], i) => <li key={t} className="flex gap-3 bg-white border border-[#D7EAF7] rounded-lg p-3"><span className="font-black text-blue-600">0{i + 1}</span><div><h3 className="font-bold text-sm text-[#123B5D]">{t}</h3><p className="text-xs">{d}</p></div></li>)}</ol></div>
      </Section>
      <Section title="Latest Perspectives" sub="Recent articles and thought leadership on key commercialization topics.">
        <div className="grid md:grid-cols-3 gap-4">{PERSP.map(([t, d], i) => <div key={t} className="border border-[#D7EAF7] rounded-lg overflow-hidden flex"><img src={img(`persp-${i + 1}`)} alt={t} loading="lazy" className="w-28 shrink-0 object-cover" /><div className="p-3"><h3 className="font-bold text-sm text-[#123B5D]">{t}</h3><p className="text-xs mt-1.5">{d}</p><Read label="Read Perspective" /></div></div>)}</div>
      </Section>
      <Cta title="From Insight to Action" text="Applying this thinking to a current product, site, technology transfer, Technical Operations, AI/digital, or commercialization challenge? Translate the framework into a readiness assessment, risk review, implementation roadmap, or executive advisory discussion." label="Discuss Your Challenge" onClick={openConsultationModal} image="ins-cta" />
    </div>
  );
};
