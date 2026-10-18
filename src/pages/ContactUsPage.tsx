import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { InquiryForm } from '../components/InquiryForm';
import { DashConnect } from '../components/Flows';
import { img } from '../components/Ui';
import { COMPANY_DETAILS } from '../data/siteData';

const TOPICS = [
  ['Development or CMC Readiness', 'Address development, CMC, and regulatory readiness to move toward commercial supply.'],
  ['Technical Operations or MS&T Transformation', 'Build scalable technical operations, strengthen MS&T, and improve manufacturing science.'],
  ['Technology Transfer or Receiving-Site Readiness', 'Transfer product and process knowledge into reproducible receiving-site capability.'],
  ['Specialized Products or Delivery Systems', 'Support complex oral products, sterile ophthalmics, injectables, LAIs, and combination products.'],
  ['Manufacturing Capability, Validation, or Launch', 'Integrate PPQ, technical launch readiness, initial commercial supply, and lifecycle performance.'],
  ['Technical Due Diligence, Risk Review, or Investment', 'Evaluate technical, manufacturing, and supply risks for partnerships, licensing, or investment.'],
];
const STEPS = [
  ['Review', 'Understand the high-level challenge, milestone, timing, and potential fit.'],
  ['Discuss', 'Clarify the technical question, business consequence, decision, and support required.'],
  ['Define', 'Align scope, deliverables, timing, working model, and appropriate confidentiality arrangements.'],
];

export const ContactUsPage: React.FC<{ showToast: (m: string) => void }> = ({ showToast }) => (
  <div className="font-sans text-[#536B7D] bg-white">
    <section className="relative bg-[#F5FAFE] py-14 sm:py-16 border-b border-[#D7EAF7] overflow-hidden">
      <img src={img('con-hero')} alt="" aria-hidden="true" className="absolute right-0 top-0 h-full w-full lg:w-3/5 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#F5FAFE] via-[#F5FAFE]/92 lg:via-[#F5FAFE]/70 to-[#F5FAFE]/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-xl">
        <h1 className="text-3xl sm:text-5xl font-black text-[#123B5D]">Discuss Your <span className="text-blue-700">Commercialization Challenge</span></h1>
        <p className="mt-4 text-sm sm:text-base">The best time to address commercialization risk is before it becomes a critical-path problem. Tell us where your product or organization is today, what milestone is approaching, and what challenge you are trying to solve. A brief, high-level description is sufficient to begin the conversation.</p>
        <p className="mt-3 font-bold text-blue-800">Bring the challenge. We will help structure the question.</p>
        <button onClick={() => document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' })} className="mt-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-md">Start the Conversation</button>
      </div></div>
    </section>

    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl font-black text-blue-700">Common Topics</h2>
      <p className="text-sm mb-5">Organizations often reach out to discuss:</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {TOPICS.map(([t, d], i) => (
          <div key={t} className="border border-[#D7EAF7] rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
            <img src={img(`topic-${i + 1}`)} alt="" loading="lazy" className="w-full h-36 object-cover" />
            <div className="p-4"><h3 className="font-bold text-blue-700 text-sm">{t}</h3><p className="text-xs mt-1">{d}</p></div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-[#F5FAFE] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-black text-blue-700">How the Conversation Works</h2>
        <p className="text-sm mb-6">A simple, structured process to move from your challenge to meaningful next steps.</p>
        <DashConnect>
          {STEPS.map(([t, d], i) => (
            <div key={t} className="h-full bg-white border border-[#D7EAF7] rounded-xl overflow-hidden flex">
              <img src={img(`step-${i + 1}`)} alt="" loading="lazy" className="w-20 sm:w-24 shrink-0 object-cover" />
              <div className="p-4 flex gap-3">
                <span className="w-8 h-8 shrink-0 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">{i + 1}</span>
                <div><h3 className="font-bold text-[#123B5D]">{t}</h3><p className="text-xs mt-1">{d}</p></div>
              </div>
            </div>
          ))}
        </DashConnect>
      </div>
    </section>

    <section id="request" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-black text-blue-700">Request an Initial Discussion</h2>
      <p className="text-sm mb-6">Share a few details about your challenge. We will follow up to schedule a confidential discussion with the right InnoTech team members.</p>
      <InquiryForm showToast={showToast} />
      <div className="mt-8 grid sm:grid-cols-3 gap-3 text-sm">
        <a href={`mailto:${COMPANY_DETAILS.email}`} className="flex items-center gap-3 rounded-lg border border-[#D7EAF7] p-3 hover:border-blue-400"><Mail className="w-5 h-5 text-blue-600 shrink-0" /><span className="break-all">{COMPANY_DETAILS.email}</span></a>
        <a href={`tel:${COMPANY_DETAILS.phoneHref}`} className="flex items-center gap-3 rounded-lg border border-[#D7EAF7] p-3 hover:border-blue-400"><Phone className="w-5 h-5 text-blue-600 shrink-0" />{COMPANY_DETAILS.phone}</a>
        <div className="flex items-center gap-3 rounded-lg border border-[#D7EAF7] p-3"><MapPin className="w-5 h-5 text-blue-600 shrink-0" />{COMPANY_DETAILS.address}</div>
      </div>
    </section>
  </div>
);
