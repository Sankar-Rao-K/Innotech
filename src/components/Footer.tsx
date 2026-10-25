import React from 'react';
import { COMPANY_DETAILS } from '../data/siteData';
import { logoImg } from '../assets/images';

interface FooterProps { navigate: (route: string) => void }

const FLink: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <li><button onClick={onClick} className="py-1 text-left hover:text-white transition-colors">{children}</button></li>
);

export const Footer: React.FC<FooterProps> = ({ navigate }) => (
  <footer className="bg-[#0A2463] text-blue-100 font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-white/15">
        <div className="lg:col-span-5 space-y-3">
          <button onClick={() => navigate('/')} aria-label="InnoTech BioPharm Solutions, home" className="inline-block rounded-md bg-white p-2"><img src={logoImg} alt="InnoTech BioPharm Solutions LLC" className="h-10 w-auto object-contain" /></button>
          <p className="max-w-sm text-sm">{COMPANY_DETAILS.tagline}</p>
          <p className="text-xs text-blue-200">{COMPANY_DETAILS.address}</p>
        </div>
        <div className="lg:col-span-4">
          <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">Explore</h4>
          <ul className="grid grid-cols-2 gap-x-4 text-sm sm:grid-cols-2">
            <FLink onClick={() => navigate('/about-us')}>About</FLink>
            <FLink onClick={() => navigate('/our-expertise')}>Expertise</FLink>
            <FLink onClick={() => navigate('/our-services')}>Services</FLink>
            <FLink onClick={() => navigate('/insights')}>Insights &amp; Resources</FLink>
            <FLink onClick={() => navigate('/contact-us')}>Contact</FLink>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">Connect</h4>
          <ul className="space-y-1 text-sm">
            <li><a href={`mailto:${COMPANY_DETAILS.email}`} className="break-all hover:text-white hover:underline">{COMPANY_DETAILS.email}</a></li>
            <li><a href={`tel:${COMPANY_DETAILS.phoneHref}`} className="hover:text-white hover:underline">{COMPANY_DETAILS.phone}</a></li>
            {COMPANY_DETAILS.linkedin && <li><a href={COMPANY_DETAILS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">LinkedIn</a></li>}
          </ul>
          <ul className="mt-4 flex gap-5 text-sm">
            <FLink onClick={() => navigate('/privacy-policy')}>Privacy</FLink>
            <FLink onClick={() => navigate('/terms-and-conditions')}>Terms</FLink>
          </ul>
        </div>
      </div>
      <p className="pt-6 text-center text-xs font-extrabold tracking-wide text-white sm:text-sm">BUILD PRODUCTS. BUILD MANUFACTURING. BUILD CAPABILITY.</p>
      <p className="pt-3 text-center text-xs text-blue-200">© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All Rights Reserved.</p>
    </div>
  </footer>
);
