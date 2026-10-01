import React from 'react';
import { COMPANY_DETAILS } from '../data/siteData';
import { AnimateOnScroll } from '../components/AnimateOnScroll';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="font-sans text-[#536B7D] bg-white min-h-screen">
      
      <section className="bg-[#EAF6FD] text-[#123B5D] py-12 border-b border-[#D7EAF7]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-2">
          <AnimateOnScroll type="fade-down" delay={0.05}>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F9FEA] bg-white px-3 py-1 rounded-md border border-[#D7EAF7] inline-block mb-1">
              Legal Policy
            </span>
            <h1 className="text-3xl font-extrabold text-[#123B5D]">Privacy Policy</h1>
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
              <h2 className="text-xs font-extrabold text-[#123B5D] uppercase tracking-wider">1. Information We Collect</h2>
              <p>
                {COMPANY_DETAILS.name} respects your privacy. We collect information you voluntarily provide through consultation requests, contact forms, career applications, and newsletter subscriptions.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll type="fade-up" delay={0.15}>
            <div className="space-y-1">
              <h2 className="text-xs font-extrabold text-[#123B5D] uppercase tracking-wider">2. How We Use Your Information</h2>
              <p>
                The information collected is used strictly to evaluate your technical inquiry, schedule CMC consultations, process employment applications, send requested insights, and improve our services. We do NOT sell, rent, or trade your personal data.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll type="fade-up" delay={0.2}>
            <div className="space-y-1">
              <h2 className="text-xs font-extrabold text-[#123B5D] uppercase tracking-wider">3. Confidentiality &amp; Data Security</h2>
              <p>
                We implement industry-standard security measures to protect confidential information. Inquiries regarding proprietary drug products are handled under strict non-disclosure protocols.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll type="fade-up" delay={0.25}>
            <div className="space-y-1">
              <h2 className="text-xs font-extrabold text-[#123B5D] uppercase tracking-wider">4. Contacting Us About Your Privacy</h2>
              <p>
                To update, modify, or delete your contact information, please email us at {COMPANY_DETAILS.email} or call {COMPANY_DETAILS.phone}.
              </p>
            </div>
          </AnimateOnScroll>

        </div>
      </section>

    </div>
  );
};
