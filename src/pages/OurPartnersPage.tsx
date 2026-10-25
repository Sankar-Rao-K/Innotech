import React from 'react';
import { Hero, Section, TintCard, TintTile, TINTS, BtnPrimary, Cta, img, NAVY } from '../components/Ui';
import { AnimateOnScroll } from '../components/AnimateOnScroll';

const OTHERS: [string, string, string][] = [
  ['Virtual / Externally Manufactured Companies', 'Function as an experienced extension of the technical organization, coordinating CMC, CDMOs, manufacturing partners and critical technical milestones.', 'ab3-2'],
  ['Established Pharmaceutical Organizations', 'Strengthen MS&T, Technical Operations, technology transfer, launch readiness, lifecycle performance or transformation.', 'ab3-3'],
  ['CDMOs & Manufacturing Organizations', 'Improve transfer readiness, process stewardship, technical governance, validation readiness, and customer delivery.', 'ab3-3a'],
  ['Investors, Boards & Transaction Teams', 'Understand technical risk, manufacturing readiness, commercialization exposure and value-creation priorities.', 'ab3-4'],
  ['Technology & AI Companies Serving Pharma', 'Translate pharmaceutical workflows, GxP expectations, and commercialization needs into useful digital solutions.', 'ab3-5'],
];
const ENGAGE = [
  'A product or formulation needs a practical CMC development path.', 'Internal technical resources are limited or a program needs experienced project leadership.',
  'A development, scale-up, transfer, engineering, validation or PPQ milestone requires execution support.', 'On-site technical support is needed at a client, CDMO or manufacturing facility.',
  'A product is moving from development toward commercial scale.', 'A technology transfer or receiving-site readiness decision is approaching.',
  'PPQ, validation, launch or initial commercial supply is at risk.', 'A CDMO or manufacturing network needs stronger technical oversight.',
  'Recurring manufacturing problems require independent assessment and hands-on remediation.', 'MS&T / Technical Operations capability needs to be built or transformed.',
  'Leadership needs a clearer technical-risk view before an investment or transaction.', 'AI/digital opportunities need prioritization within real pharmaceutical workflows.',
];
const PARTNER: [string, string][] = [
  ['CMC Development Support', 'Strategy, planning and technical guidance.'], ['Project Leadership', 'Integrated planning, coordination and oversight.'], ['Project Execution', 'Hands-on technical support to achieve critical milestones.'],
  ['On-Site Technical Support', 'Embedded expertise at client, CDMO or manufacturing sites.'], ['Executive Advisory', 'Senior technical perspective and decision support.'], ['Technical Recovery & Capability Building', 'Address issues, strengthen capability and build long-term process stewardship.'],
];

export const OurPartnersPage: React.FC<{ navigate: (r: string) => void; openConsultationModal: () => void }> = ({ navigate, openConsultationModal }) => (
  <div className="font-sans bg-white">
    <Hero eyebrow="WHO WE WORK WITH" image="ab3-1" imageAlt="A scientist and an executive reviewing a tablet in a manufacturing facility"
      title="Who We Work With" sub="Flexible Technical Support for Organizations at Different Stages">
      <p>Different organizations have different internal capabilities. InnoTech can provide focused expertise, program leadership, execution support or an extension of the client&rsquo;s technical organization.</p>
    </Hero>

    <section className="bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll type="fade-up">
          <div className="grid overflow-hidden rounded-2xl border border-[#D7EAF7] bg-[#F4F9FE] shadow-sm lg:grid-cols-[1.25fr_1fr]">
            <div className="p-6 sm:p-8">
              <h2 className={`text-2xl sm:text-3xl font-black leading-tight ${NAVY}`}>Emerging Biotech &amp; Small Pharmaceutical Companies</h2>
              <p className={`mt-2 text-base font-extrabold ${NAVY}`}>End-to-End CMC Support Without Building Every Capability Internally</p>
              <p className="mt-3 text-sm sm:text-base text-[#27407A]">InnoTech helps emerging biotechnology and small pharmaceutical organizations build and execute the CMC capabilities required as products advance from development toward clinical and commercial manufacturing.</p>
              <p className="mt-3 text-sm sm:text-base text-[#27407A]">Support may include CMC strategy, formulation and process development oversight, development planning, vendor/CDMO selection and management, scale-up, analytical and stability strategy, technology transfer, regulatory CMC documentation, validation readiness, manufacturing support and commercialization planning.</p>
            </div>
            <img src={img('ab3-1a')} alt="Scientists reviewing a tablet beside process equipment" loading="lazy" className="h-56 w-full object-cover lg:h-full" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>

    <Section tint title="Other Organizations We Support">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {OTHERS.map(([t, d, im], i) => <AnimateOnScroll key={t} type="fade-up" delay={i * 0.07}><TintCard image={im} title={t} text={d} tint={TINTS[(i + 2) % TINTS.length]} imgClass="h-32" /></AnimateOnScroll>)}
      </div>
    </Section>

    <Section title="When Organizations Engage" sub="Organizations typically engage InnoTech when:">
      <ul className="grid gap-3 md:grid-cols-2 lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-4">
        {ENGAGE.map((t, i) => (
          <AnimateOnScroll as="li" key={t} type="fade-up" delay={(i % 4) * 0.06} className="list-none">
            <div className="flex h-full items-start gap-3 rounded-lg border border-[#D7EAF7] bg-white p-3.5 text-sm text-[#27407A] shadow-sm"><span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />{t}</div>
          </AnimateOnScroll>
        ))}
      </ul>
    </Section>

    <Section tint title="How We Partner">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PARTNER.map(([t, d], i) => <AnimateOnScroll key={t} type="fade-up" delay={(i % 3) * 0.07}><TintTile tint={TINTS[i % TINTS.length]} title={t} text={d} /></AnimateOnScroll>)}
      </div>
      <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-xl border border-[#D7EAF7] bg-[#E8F2FF] p-5 sm:flex-row sm:items-center">
        <p className={`text-sm sm:text-base font-medium ${NAVY}`}>The objective is not only to address the immediate issue. It is to help the organization move the program forward while strengthening knowledge, governance, decisions and sustainable capability.</p>
        <BtnPrimary onClick={openConsultationModal} className="shrink-0">Discuss Your Project</BtnPrimary>
      </div>
    </Section>

    <Cta image="ab3-6" title={<>Let’s Build Your <span className="text-cyan-300">Commercialization Success</span> Together</>} text="Whether you need technical advice, CMC development support, project leadership, on-site execution, or commercialization support, InnoTech can help." label="Get in Touch" onClick={() => navigate('/contact-us')} />
  </div>
);
