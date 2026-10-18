import React from 'react';
import { COMPANY_DETAILS } from '../data/siteData';
import { logoImg } from '../assets/images';

interface FooterProps { navigate: (route: string) => void; showToast?: (msg: string) => void }

const Link: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <li><button onClick={onClick} className="hover:text-[#2F9FEA] transition-colors py-0.5 text-left">{children}</button></li>
);

export const Footer: React.FC<FooterProps> = ({ navigate }) => (
  <footer className="bg-[#0B2A5B] text-blue-100 font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-white/15">
        <div className="lg:col-span-5 space-y-3">
          <button onClick={() => navigate('/')} aria-label="InnoTech BioPharm Solutions home" className="bg-white rounded-md p-2 inline-block">
            <img src={logoImg} alt="InnoTech BioPharm Solutions LLC" className="h-10 w-auto object-contain" />
          </button>
          <p className="text-sm max-w-sm">{COMPANY_DETAILS.tagline}</p>
          <p className="text-xs text-blue-200">{COMPANY_DETAILS.address}</p>
        </div>
        <div className="lg:col-span-3">
          <h4 className="font-bold text-xs uppercase tracking-wider text-white mb-3">Explore</h4>
          <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 text-sm">
            <Link onClick={() => navigate('/about-us')}>About</Link>
            <Link onClick={() => navigate('/our-expertise')}>Expertise</Link>
            <Link onClick={() => navigate('/our-services')}>Services</Link>
            <Link onClick={() => navigate('/frameworks')}>Frameworks</Link>
            <Link onClick={() => navigate('/insights')}>Insights</Link>
            <Link onClick={() => navigate('/contact-us')}>Contact</Link>
          </ul>
        </div>
        <div className="lg:col-span-4">
          <h4 className="font-bold text-xs uppercase tracking-wider text-white mb-3">Connect</h4>
          <ul className="space-y-1 text-sm">
            <li><a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white underline-offset-2 hover:underline break-all">{COMPANY_DETAILS.email}</a></li>
            <li><a href={`tel:${COMPANY_DETAILS.phoneHref}`} className="hover:text-white underline-offset-2 hover:underline">{COMPANY_DETAILS.phone}</a></li>
            {COMPANY_DETAILS.linkedin && <li><a href={COMPANY_DETAILS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white underline-offset-2 hover:underline">LinkedIn</a></li>}
          </ul>
          <ul className="flex gap-4 mt-4 text-sm">
            <Link onClick={() => navigate('/privacy-policy')}>Privacy</Link>
            <Link onClick={() => navigate('/terms-and-conditions')}>Terms</Link>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs sm:text-sm font-extrabold tracking-wide text-white pt-6">BUILD PRODUCTS. BUILD MANUFACTURING. BUILD CAPABILITY.</p>
      <p className="text-center text-xs text-blue-200 pt-3">© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All Rights Reserved.</p>
    </div>
  </footer>
);
