import React from 'react';
import { COMPANY_DETAILS } from '../data/siteData';
import { AnimateOnScroll } from '../components/AnimateOnScroll';

export const TermsConditionsPage: React.FC = () => {
  return (
    <div className="font-sans text-[#536B7D] bg-white min-h-screen">
      
      <section className="bg-[#EAF6FD] text-[#123B5D] py-12 border-b border-[#D7EAF7]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-2">
          <AnimateOnScroll type="fade-down" delay={0.05}>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F9FEA] bg-white px-3 py-1 rounded-md border border-[#D7EAF7] inline-block mb-1">
              Legal Terms
            </span>
            <h1 className="text-3xl font-extrabold text-[#123B5D]">Terms &amp; Conditions</h1>
          </AnimateOnScroll>
          <AnimateOnScroll type="fade-up" delay={0.1}>
            <p className="text-[#536B7D] text-xs font-normal">{COMPANY_DETAILS.name} &mdash; Last Updated: September 2026</p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-left space-y-6 text-xs text-[#536B7D] leading-relaxed font-normal">
          
          <AnimateOnScroll type="fade-up" delay={0.1}>
            <div className="space-y-1">
              <h2 className="text-xs font-extrabold text-[#123B5D] uppercase tracking-wider">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the website of {COMPANY_DETAILS.name} ("Company", "we", "us"), you agree to comply with and be bound by these Terms and Conditions.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll type="fade-up" delay={0.15}>
            <div className="space-y-1">
              <h2 className="text-xs font-extrabold text-[#123B5D] uppercase tracking-wider">2. Services &amp; Technical Information</h2>
              <p>
                The content provided on this website regarding Chemistry, Manufacturing, and Controls (CMC), formulation science, and regulatory guidance is for informational purposes only. It does not constitute formal medical or legal advice.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll type="fade-up" delay={0.2}>
            <div className="space-y-1">
              <h2 className="text-xs font-extrabold text-[#123B5D] uppercase tracking-wider">3. Intellectual Property Rights</h2>
              <p>
                All content, graphics, logos, and layout on this site are the exclusive property of {COMPANY_DETAILS.name} and protected by United States and international intellectual property laws.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll type="fade-up" delay={0.25}>
            <div className="space-y-1">
              <h2 className="text-xs font-extrabold text-[#123B5D] uppercase tracking-wider">4. Limitation of Liability</h2>
              <p>
                {COMPANY_DETAILS.name} shall not be liable for any direct, indirect, or consequential damages resulting from the use or reliance upon information presented herein.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll type="fade-up" delay={0.3}>
            <div className="space-y-1">
              <h2 className="text-xs font-extrabold text-[#123B5D] uppercase tracking-wider">5. Contact Information</h2>
              <p>
                For questions regarding these Terms &amp; Conditions, please contact us at {COMPANY_DETAILS.email} or by mail at {COMPANY_DETAILS.address}.
              </p>
            </div>
          </AnimateOnScroll>

        </div>
      </section>

    </div>
  );
};
