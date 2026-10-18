import React from 'react';
import { Hero, Section, Card, Cta } from '../components/Ui';
import { JourneyArrows } from '../components/Flows';

export const OurPartnersPage: React.FC<{ navigate: (r: string) => void; openConsultationModal: () => void }> = ({ openConsultationModal }) => (
  <div className="font-sans text-[#536B7D] bg-white">
    <Hero eyebrow="ABOUT" title={<>Who We <span className="text-cyan-300">Work With</span></>} accent="Supporting Organizations at Critical Commercialization Transitions" image="who-hero" imageAlt="A handshake in a pharmaceutical manufacturing facility">
      <p>Different organizations. Different starting points. One commercialization objective: build the capability required to deliver reliable medicines.</p>
    </Hero>
    <Section title="Organizations We Support">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card layout="side" image="org-emerging" title="Emerging & Growth-Stage Pharma/Biotech" text="Build commercialization capability while the organization and product mature." />
        <Card layout="side" image="org-established" title="Established Pharmaceutical Organizations" text="Strengthen Technical Operations, technology transfer, launch readiness, lifecycle performance, or transformation." />
        <Card layout="side" image="org-virtual" title="Virtual / Externally Manufactured Companies" text="Create effective product ownership, governance, and CDMO oversight. Manufacturing may be outsourced. Product accountability is not." />
        <Card layout="side" image="org-cdmo" title="CDMOs & Manufacturing Organizations" text="Improve transfer readiness, process stewardship, technical governance, validation readiness, and customer delivery." />
        <Card layout="side" image="org-investors" title="Investors, Boards & Transaction Teams" text="Understand technical risk, manufacturing readiness, commercialization exposure, and value-creation priorities." />
        <Card layout="side" image="org-tech" title="Technology & AI Companies Serving Pharma" text="Translate pharmaceutical workflows, GxP expectations, technical knowledge, and commercialization needs into useful digital solutions." />
      </div>
    </Section>
    <Section tint title="When Organizations Engage" sub="Organizations typically engage InnoTech when:">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <ul className="space-y-2 text-sm sm:text-base">
          {['A product is moving from development toward commercial scale;', 'A technology transfer or receiving-site readiness decision is approaching;', 'PPQ, validation, launch, or initial commercial supply is at risk;', 'A CDMO or manufacturing network needs stronger technical oversight;', 'Recurring manufacturing problems require independent technical assessment;', 'Leadership needs a clearer view of technical risk before an investment or transaction;', 'MS&T / Technical Operations capability needs to be built or transformed; or', 'AI and digital opportunities need to be prioritized within real pharmaceutical workflows.'].map(i => (
            <li key={i} className="flex gap-2.5"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />{i}</li>
          ))}
        </ul>
        <div className="lg:pt-4"><JourneyArrows items={['Development Readiness', 'Transfer Decision', 'Manufacturing Readiness', 'Validation & Launch', 'Supply & Lifecycle']} /></div>
      </div>
    </Section>
    <Section title="How We Partner">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card layout="side" image="partner-exec" title="Executive Advisory" text="Strategic guidance on commercialization, technical operations, and organizational capability." />
        <Card layout="side" image="partner-readiness" title="Readiness Assessment" text="Independent assessment of product, process, organization, evidence, and risk." />
        <Card layout="side" image="partner-program" title="Program / Project Support" text="Hands-on support for technology transfer, validation, launch, transformation or recovery." />
        <Card layout="side" image="partner-review" title="Independent Technical Review" text="Objective, experienced review of strategy, plans, data, and critical decisions." />
        <Card layout="side" image="partner-recovery" title="Recovery & Capability Building" text="Address manufacturing issues, strengthen technical and organizational capability, and build long-term process stewardship." />
      </div>
      <p className="mt-6 bg-[#F5FAFE] border border-[#D7EAF7] rounded-lg p-4 text-sm sm:text-base">The objective is not only to address the immediate issue. It is to leave the organization with stronger knowledge, clearer governance, better technical decisions, and more sustainable capability.</p>
    </Section>
    <Cta title="Let's Build Your Commercialization Capability" text="Whether you are preparing for a key transition, addressing a specific challenge, or building long-term capability, InnoTech brings the experience and perspective to help you move forward with confidence." label="Get in Touch" onClick={openConsultationModal} image="who-cta" />
  </div>
);
