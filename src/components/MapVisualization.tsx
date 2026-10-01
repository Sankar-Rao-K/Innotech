import React from 'react';
import { MapPin, Navigation, Building2, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/siteData';

export const MapVisualization: React.FC = () => {
  return (
    <div className="relative w-full h-[380px] rounded-xl overflow-hidden border border-[#D7EAF7] bg-[#F5FAFE] flex flex-col justify-between p-6">
      
      {/* Light Clean Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-[#D7EAF7]">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-[#2F9FEA]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#123B5D]">
            Corporate Headquarters &amp; Advisory Matrix
          </span>
        </div>
        <span className="text-[10px] bg-[#EAF6FD] text-[#2F9FEA] font-extrabold px-2.5 py-0.5 rounded border border-[#D7EAF7]">
          USA OFFICE
        </span>
      </div>

      {/* Main Location Content Box */}
      <div className="my-auto py-4 space-y-3 text-left">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#2F9FEA] text-white flex items-center justify-center shrink-0 font-bold border border-[#D7EAF7]">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div className="space-y-1">
            <h5 className="font-extrabold text-base text-[#123B5D]">{COMPANY_DETAILS.name}</h5>
            <p className="text-xs text-[#536B7D] font-normal leading-relaxed">{COMPANY_DETAILS.address}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="bg-white p-3 rounded-lg border border-[#D7EAF7] space-y-0.5">
            <span className="text-[10px] font-bold uppercase text-[#536B7D] block">State Jurisdiction</span>
            <span className="text-xs font-bold text-[#123B5D]">Illinois, United States</span>
          </div>
          <div className="bg-white p-3 rounded-lg border border-[#D7EAF7] space-y-0.5">
            <span className="text-[10px] font-bold uppercase text-[#536B7D] block">Operational Scope</span>
            <span className="text-xs font-bold text-[#123B5D]">Global Biopharm Advisory</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-3 border-t border-[#D7EAF7] flex flex-wrap items-center justify-between gap-3 text-xs">
        <a 
          href={`tel:${COMPANY_DETAILS.phone}`}
          className="text-[#2F9FEA] font-bold hover:underline flex items-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>{COMPANY_DETAILS.phone}</span>
        </a>

        <a 
          href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_DETAILS.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2F9FEA] hover:bg-[#2389D2] text-white font-extrabold px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors text-xs"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Open Google Maps</span>
        </a>
      </div>

    </div>
  );
};
