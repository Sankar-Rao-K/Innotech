import React, { useState } from 'react';
import { PRIMARY_AREAS } from '../data/commercialization';
import { submitInquiry } from '../utils/submitInquiry';

const field = 'w-full px-3 py-2 text-sm bg-white border border-[#D7EAF7] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500';

export const InquiryForm: React.FC<{ showToast: (m: string) => void; onDone?: () => void }> = ({ showToast, onDone }) => {
  const [d, setD] = useState({ name: '', company: '', email: '', area: '', challenge: '' });
  const set = (k: keyof typeof d) => (e: React.ChangeEvent<any>) => setD({ ...d, [k]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitInquiry(d);
    showToast('Your email app has opened with your request. Please press send to complete it.');
    onDone?.();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 text-left">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="space-y-4">
          <label className="block text-xs font-bold text-[#123B5D]">Name *<input required value={d.name} onChange={set('name')} placeholder="Enter your full name" className={field} /></label>
          <label className="block text-xs font-bold text-[#123B5D]">Company / Organization *<input required value={d.company} onChange={set('company')} placeholder="Enter your company or organization" className={field} /></label>
          <label className="block text-xs font-bold text-[#123B5D]">Business Email *<input required type="email" value={d.email} onChange={set('email')} placeholder="Enter your work email address" className={field} /></label>
        </div>
        <label className="block text-xs font-bold text-[#123B5D]">Primary Area *
          <select required value={d.area} onChange={set('area')} className={field}>
            <option value="" disabled>Select a primary area</option>
            {PRIMARY_AREAS.map(a => <option key={a}>{a}</option>)}
          </select>
        </label>
        <label className="block text-xs font-bold text-[#123B5D]">Briefly Describe Your Challenge *
          <textarea required rows={6} value={d.challenge} onChange={set('challenge')} placeholder="A brief high-level description is sufficient..." className={field} />
        </label>
      </div>
      <button type="submit" className="bg-[#0B3C8C] hover:bg-[#092f6f] text-white font-extrabold text-xs uppercase tracking-wide px-8 py-3 rounded-md">Request an Initial Discussion</button>
      <p className="text-xs bg-[#F5FAFE] border border-[#D7EAF7] rounded-md p-3">Please do not submit confidential, proprietary, unpublished technical, clinical, regulatory, formulation, process, or manufacturing information through this website form. A high-level description is sufficient for the initial discussion. Appropriate confidentiality arrangements can be established before substantive proprietary information is exchanged.</p>
    </form>
  );
};
