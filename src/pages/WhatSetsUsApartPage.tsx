import React from 'react';
import { Dna, ShieldCheck, Zap, Award, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { AnimateOnScroll, StaggerGroup } from '../components/AnimateOnScroll';

interface WhatSetsUsApartPageProps {
  navigate: (route: string) => void;
  openConsultationModal: () => void;
}

export const WhatSetsUsApartPage: React.FC<WhatSetsUsApartPageProps> = ({ openConsultationModal }) => {
  return (
    <div className="font-sans text-[#536B7D] bg-white min-h-screen">
      
      {/* Header Banner - Light Sky Blue #EAF6FD */}
      <section className="bg-[#EAF6FD] text-[#123B5D] py-16 border-b border-[#D7EAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <AnimateOnScroll type="fade-down" delay={0.05}>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F9FEA] bg-white px-3 py-1 rounded-md border border-[#D7EAF7]">
              Differentiators
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll type="fade-up" delay={0.12}>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#123B5D]">
              What Sets Us Apart
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll type="fade-up" delay={0.2}>
            <p className="text-[#536B7D] text-xs sm:text-sm max-w-2xl mx-auto font-normal">
              Combining scientific rigor, predictive modeling, and commercial agility to yield unmatched CMC execution.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Differentiators Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left" staggerDelay={0.08} baseDelay={0.15}>
            
            <div className="bg-[#F5FAFE] p-6 rounded-xl border border-[#D7EAF7] space-y-3 card-interactive">
              <div className="w-10 h-10 bg-[#EAF6FD] text-[#2F9FEA] rounded-lg flex items-center justify-center font-bold">
                <Dna className="w-5 h-5 text-[#2F9FEA]" />
              </div>
              <h3 className="text-lg font-bold text-[#123B5D]">QbD &amp; Process Optimization</h3>
              <p className="text-xs text-[#536B7D] leading-relaxed font-normal">
                Applying Quality-by-Design (QbD) and Design of Experiments (DoE) modeling right from pre-formulation to define CPPs and CQAs early, guaranteeing predictable scale-up and batch consistency.
              </p>
            </div>

            <div className="bg-[#F5FAFE] p-6 rounded-xl border border-[#D7EAF7] space-y-3 card-interactive">
              <div className="w-10 h-10 bg-[#EAF6FD] text-[#2F9FEA] rounded-lg flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-[#2F9FEA]" />
              </div>
              <h3 className="text-lg font-bold text-[#123B5D]">End-Goal Focus &amp; Risk Mitigation</h3>
              <p className="text-xs text-[#536B7D] leading-relaxed font-normal">
                Formulating with commercial manufacturing in mind from day one. Selecting scalable excipients and robust container-closure systems eliminates costly re-formulation steps.
              </p>
            </div>

            <div className="bg-[#F5FAFE] p-6 rounded-xl border border-[#D7EAF7] space-y-3 card-interactive">
              <div className="w-10 h-10 bg-[#EAF6FD] text-[#2F9FEA] rounded-lg flex items-center justify-center font-bold">
                <Zap className="w-5 h-5 text-[#2F9FEA]" />
              </div>
              <h3 className="text-lg font-bold text-[#123B5D]">Agile Collaboration Model</h3>
              <p className="text-xs text-[#536B7D] leading-relaxed font-normal">
                Adapting to your internal workflow cleanly—whether acting as an embedded external CMC team or providing targeted technical review for a regulatory submission.
              </p>
            </div>

            <div className="bg-[#F5FAFE] p-6 rounded-xl border border-[#D7EAF7] space-y-3 card-interactive">
              <div className="w-10 h-10 bg-[#EAF6FD] text-[#2F9FEA] rounded-lg flex items-center justify-center font-bold">
                <Award className="w-5 h-5 text-[#2F9FEA]" />
              </div>
              <h3 className="text-lg font-bold text-[#123B5D]">Specialized Delivery Expertise</h3>
              <p className="text-xs text-[#536B7D] leading-relaxed font-normal">
                Specializing in complex formulations where standard CROs struggle: Long-Acting Injectables (LAIs), Lipid Nanoparticles (LNPs), Ocular Gels, and High Potency APIs.
              </p>
            </div>

          </StaggerGroup>

          {/* Comparison Table Card */}
          <AnimateOnScroll type="scale-up" delay={0.2}>
            <div className="bg-[#F5FAFE] text-[#123B5D] rounded-xl p-8 border border-[#D7EAF7] space-y-6">
              <h3 className="text-lg font-bold text-center text-[#123B5D]">
                InnoTech BioPharm vs Traditional Consultancies
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[#D7EAF7] text-[#536B7D] uppercase tracking-wider">
                      <th className="py-3 px-4">Feature / Capability</th>
                      <th className="py-3 px-4 text-[#2F9FEA] font-extrabold">InnoTech BioPharm Solutions</th>
                      <th className="py-3 px-4">Traditional Generic Consultancies</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D7EAF7] text-[#536B7D]">
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#123B5D]">QbD &amp; DoE Design Space Modeling</td>
                      <td className="py-3 px-4 text-[#2F9FEA] flex items-center gap-1.5 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2F9FEA]" /> Standard on All Projects
                      </td>
                      <td className="py-3 px-4 text-[#536B7D] flex items-center gap-1.5 font-normal">
                        <XCircle className="w-3.5 h-3.5 text-slate-400" /> Rarely Integrated
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#123B5D]">Complex Parenteral &amp; LAI Focus</td>
                      <td className="py-3 px-4 text-[#2F9FEA] flex items-center gap-1.5 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2F9FEA]" /> Deep Proprietary Expertise
                      </td>
                      <td className="py-3 px-4 text-[#536B7D] flex items-center gap-1.5 font-normal">
                        <XCircle className="w-3.5 h-3.5 text-slate-400" /> General Oral Dosage Only
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#123B5D]">Direct Executive Leadership</td>
                      <td className="py-3 px-4 text-[#2F9FEA] flex items-center gap-1.5 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2F9FEA]" /> Hands-On Guidance by Raj Thota
                      </td>
                      <td className="py-3 px-4 text-[#536B7D] flex items-center gap-1.5 font-normal">
                        <XCircle className="w-3.5 h-3.5 text-slate-400" /> Delegated to Junior Staff
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#123B5D]">eCTD Module 3 Authoring</td>
                      <td className="py-3 px-4 text-[#2F9FEA] flex items-center gap-1.5 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2F9FEA]" /> Submission-Ready Filings
                      </td>
                      <td className="py-3 px-4 text-[#536B7D] flex items-center gap-1.5 font-normal">
                        <XCircle className="w-3.5 h-3.5 text-slate-400" /> High Error / Query Rates
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll type="fade-up" delay={0.25}>
            <div className="text-center">
              <button
                onClick={openConsultationModal}
                className="bg-[#2F9FEA] hover:bg-[#2389D2] text-white font-extrabold text-xs px-7 py-3.5 rounded-lg btn-interactive shadow-xs inline-flex items-center gap-2"
              >
                <span>Schedule a Technical Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </AnimateOnScroll>

        </div>
      </section>

    </div>
  );
};
