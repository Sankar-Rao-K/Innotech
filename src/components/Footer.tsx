import React from 'react';
import { COMPANY_DETAILS } from '../data/siteData';
import { logoImg } from '../assets/images';

interface FooterProps {
  navigate: (route: string) => void;
  showToast?: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-[#F5FAFE] text-[#536B7D] font-sans border-t border-[#D7EAF7] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#D7EAF7]">
          
          {/* Company Info & Contact */}
          <div className="lg:col-span-5 space-y-3">
            <div 
              onClick={() => navigate('/')} 
              className="cursor-pointer flex items-center gap-2 mb-2"
            >
              <img 
                src={logoImg} 
                alt="InnoTech BioPharm Solutions Logo" 
                className="h-10 sm:h-11 w-auto object-contain max-w-[220px]"
              />
            </div>

            <p className="text-xs text-[#536B7D] leading-relaxed pr-4 font-normal">
              Enterprise Pharmaceutical & Biotechnology Commercialization Advisory
            </p>

            <div className="text-xs space-y-1 text-[#123B5D] pt-1">
              <p className="font-medium">{COMPANY_DETAILS.address}</p>
              <p>
                <span className="text-[#536B7D]">Phone: </span>
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-[#2F9FEA] font-bold hover:underline">
                  {COMPANY_DETAILS.phone}
                </a>
              </p>
              <p>
                <span className="text-[#536B7D]">Email: </span>
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-[#2F9FEA] font-bold hover:underline">
                  {COMPANY_DETAILS.email}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#123B5D]">Navigation</h4>
            <ul className="space-y-1.5 text-xs text-[#536B7D] font-medium">
              <li>
                <button onClick={() => navigate('/')} className="hover:text-[#2F9FEA] transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => navigate('/about-us')} className="hover:text-[#2F9FEA] transition-colors">About Us</button>
              </li>
              <li>
                <button onClick={() => navigate('/our-founder')} className="hover:text-[#2F9FEA] transition-colors">Founder</button>
              </li>
              <li>
                <button onClick={() => navigate('/our-partners')} className="hover:text-[#2F9FEA] transition-colors">Who We Work With</button>
              </li>
              <li>
                <button onClick={() => navigate('/our-expertise')} className="hover:text-[#2F9FEA] transition-colors">Expertise</button>
              </li>
              <li>
                <button onClick={() => navigate('/our-services')} className="hover:text-[#2F9FEA] transition-colors">Services</button>
              </li>
              <li>
                <button onClick={() => navigate('/frameworks')} className="hover:text-[#2F9FEA] transition-colors">Frameworks</button>
              </li>
              <li>
                <button onClick={() => navigate('/insights')} className="hover:text-[#2F9FEA] transition-colors">Insights</button>
              </li>
            </ul>
          </div>

          {/* Information & Careers */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#123B5D]">Information &amp; Careers</h4>
            <ul className="space-y-1.5 text-xs text-[#536B7D] font-medium">
              <li>
                <button onClick={() => navigate('/contact-us')} className="hover:text-[#2F9FEA] transition-colors">Contact Us</button>
              </li>
              <li>
                <button onClick={() => navigate('/careers')} className="hover:text-[#2F9FEA] transition-colors">Careers</button>
              </li>
              <li>
                <button onClick={() => navigate('/terms-and-conditions')} className="hover:text-[#2F9FEA] transition-colors">Terms &amp; Conditions</button>
              </li>
              <li>
                <button onClick={() => navigate('/privacy-policy')} className="hover:text-[#2F9FEA] transition-colors">Privacy Policy</button>
              </li>
            </ul>

            <div className="pt-2">
              <button 
                onClick={() => navigate('/contact-us')} 
                className="inline-block bg-[#2F9FEA] hover:bg-[#2389D2] text-white font-extrabold text-xs px-4 py-2.5 rounded-lg btn-interactive shadow-xs"
              >
                Get in Touch
              </button>
            </div>
          </div>

        </div>

        <p className="text-center text-sm font-extrabold tracking-wide text-[#123B5D] pt-6">BUILD PRODUCTS. BUILD MANUFACTURING. BUILD CAPABILITY.</p>

        {/* Copyright */}
        <div className="text-center text-xs text-[#536B7D] pt-6 space-y-1">
          <p>© {new Date().getFullYear()} <strong className="text-[#123B5D]">InnoTech BioPharm Solutions LLC</strong>. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};
