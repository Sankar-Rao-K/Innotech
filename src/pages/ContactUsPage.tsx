import React, { useState } from 'react';
import { Check, Mail, MapPin, Phone } from 'lucide-react';
import { InquiryForm } from '../components/InquiryForm';
import { DashConnect } from '../components/Flows';
import { Hero, SectionHead, BtnPrimary, img, NAVY } from '../components/Ui';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { CONTACT_AREAS } from '../data/contactAreas';
import { COMPANY_DETAILS } from '../data/siteData';

const STEPS: [string, string][] = [
  ['Review', 'Understand the high-level challenge, product stage, next milestone, timing and potential fit.'],
  ['Discuss', 'Clarify the technical question, business consequence, decision, support and level of execution required.'],
  ['Define', 'Align scope, deliverables, timing, working model, on-site/remote needs and appropriate confidentiality arrangements.'],
];

export const ContactUsPage: React.FC<{ showToast: (m: string) => void }> = ({ showToast }) => {
  const [areas, setAreas] = useState<string[]>([]);
  const toForm = () => document.getElementById('request')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const toggle = (n: string) => setAreas(a => (a.includes(n) ? a.filter(x => x !== n) : [...a, n]));

  return (
    <div className="font-sans bg-white pb-2">
      <Hero image="con-1a" imageAlt="A scientist, an executive and an engineer discussing a program" title="Discuss Your Development, CMC or Commercialization Challenge">
        <p>Whether you need focused technical advice, CMC development support, project leadership, on-site execution, technology transfer, manufacturing support, validation, launch or lifecycle support, tell us where your program is today and what needs to happen next.</p>
        <p>A brief high-level description is sufficient to begin the conversation.</p>
        <p className={`font-extrabold ${NAVY}`}>Bring the challenge. We will help structure the question.</p>
      </Hero>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <SectionHead title="Common Topics" sub="Select the area(s) that best match your challenge." />
        <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          {CONTACT_AREAS.map((a, i) => {
            const on = areas.includes(a.name); const order = areas.indexOf(a.name);
            return (
              <AnimateOnScroll as="li" key={a.name} type="fade-up" delay={(i % 6) * 0.05} className="list-none">
                <button onClick={() => toggle(a.name)} aria-pressed={on} className={`relative flex h-full w-full flex-col overflow-hidden rounded-xl border text-left shadow-sm transition-all duration-200 ${on ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-300' : 'border-[#D7EAF7] bg-white hover:-translate-y-1 hover:shadow-lg'}`}>
                  <img src={img(a.image)} alt="" loading="lazy" className="h-24 w-full object-cover sm:h-28" />
                  <span className="flex-1 p-3"><span className={`block text-[13px] font-extrabold leading-snug ${NAVY}`}>{a.name}</span><span className="mt-1 block text-xs leading-snug text-[#27407A]">{a.text}</span></span>
                  {on && <span className="anim-pop absolute right-2 top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-blue-600 px-1.5 text-[11px] font-black text-white shadow">{order === 0 ? <Check className="h-3.5 w-3.5" /> : order + 1}</span>}
                </button>
              </AnimateOnScroll>
            );
          })}
        </ul>
        {areas.length > 0 && (
          <div className="anim-fadein sticky bottom-3 z-20 mx-auto mt-5 flex max-w-xl items-center justify-between gap-3 rounded-full border border-blue-200 bg-white/95 py-2 pl-5 pr-2 shadow-xl backdrop-blur" role="status">
            <span className={`text-sm font-bold ${NAVY}`}>{areas.length} area{areas.length > 1 ? 's' : ''} selected</span>
            <span className="flex items-center gap-2"><button onClick={() => setAreas([])} className="text-xs font-bold text-slate-500 hover:text-slate-700">Clear</button><BtnPrimary onClick={toForm} className="!rounded-full !px-5 !py-2">Continue to request</BtnPrimary></span>
          </div>
        )}
      </section>

      <section className="bg-[#F4F9FE] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead title="How the Conversation Works" sub="A simple, structured process to move from your challenge to meaningful next steps." />
          <div className="mt-6">
            <DashConnect>
              {STEPS.map(([t, d], i) => (
                <div key={t} className="flex h-full gap-4 rounded-xl border border-[#D7EAF7] bg-white p-5 shadow-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0A2A8F] text-lg font-black text-white">{i + 1}</span>
                  <div><h3 className={`text-lg font-extrabold ${NAVY}`}>{t}</h3><p className="mt-1 text-sm text-[#27407A]">{d}</p></div>
                </div>
              ))}
            </DashConnect>
          </div>
        </div>
      </section>

      <section id="request" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <SectionHead title="Request an Initial Discussion" sub="Share a few details about your challenge. We will follow up to schedule a confidential discussion with the right InnoTech team members." />
        <div className="mt-6"><InquiryForm showToast={showToast} areas={areas} onAreasChange={setAreas} /></div>
        <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
          <a href={`mailto:${COMPANY_DETAILS.email}`} className="flex items-center gap-3 rounded-lg border border-[#D7EAF7] p-3 hover:border-blue-400"><Mail className="h-5 w-5 shrink-0 text-blue-600" /><span className="break-all">{COMPANY_DETAILS.email}</span></a>
          <a href={`tel:${COMPANY_DETAILS.phoneHref}`} className="flex items-center gap-3 rounded-lg border border-[#D7EAF7] p-3 hover:border-blue-400"><Phone className="h-5 w-5 shrink-0 text-blue-600" />{COMPANY_DETAILS.phone}</a>
          <div className="flex items-center gap-3 rounded-lg border border-[#D7EAF7] p-3"><MapPin className="h-5 w-5 shrink-0 text-blue-600" />{COMPANY_DETAILS.address}</div>
        </div>
      </section>
    </div>
  );
};
