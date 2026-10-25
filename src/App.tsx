import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { SearchModal } from './components/SearchModal';
import { Toast } from './components/Toast';
import { Chatbot } from './components/Chatbot';

import { HomePage } from './pages/HomePage';
import { WhoWeArePage } from './pages/WhoWeArePage';
import { OurFounderPage } from './pages/OurFounderPage';
import { OurServicesPage } from './pages/OurServicesPage';
import { OurExpertisePage } from './pages/OurExpertisePage';
import { FrameworksPage } from './pages/FrameworksPage';
import { OurPartnersPage } from './pages/OurPartnersPage';
import { BlogsPage } from './pages/BlogsPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { TermsConditionsPage } from './pages/TermsConditionsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

const normalize = (p: string) => (p.length > 1 ? p.replace(/\/+$/, '') : p) || '/';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    return normalize(window.location.pathname);
  });

  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(normalize(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Routes may carry an in-page anchor, for example '/our-services#svc-4'
  const navigate = (route: string) => {
    const [path, hash] = route.split('#');
    window.history.pushState({}, '', path || '/');
    setCurrentRoute(normalize(path || '/'));
    window.scrollTo({ top: 0, behavior: hash ? 'auto' : 'smooth' });
    if (hash) setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 450);
  };



  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  // Per-page browser tab titles
  useEffect(() => {
    const base = 'InnoTech BioPharm Solutions';
    const titles: Record<string, string> = {
      '/': `${base} | End-to-End Pharmaceutical Development, CMC & Commercialization Support`,
      '/about-us': `About | ${base}`, '/who-we-are': `About | ${base}`, '/our-founder': `Raj Thota, Founder | ${base}`,
      '/our-partners': `Who We Work With | ${base}`, '/who-we-work-with': `Who We Work With | ${base}`,
      '/our-expertise': `Expertise | ${base}`, '/expertise': `Expertise | ${base}`, '/our-services': `Services | ${base}`, '/services': `Services | ${base}`,
      '/frameworks': `Frameworks & Executive Tools | ${base}`, '/our-capabilities': `Frameworks & Executive Tools | ${base}`,
      '/insights': `Insights & Resources | ${base}`, '/blogs': `Insights & Resources | ${base}`,
      '/contact-us': `Contact | ${base}`, '/contact': `Contact | ${base}`,
      '/privacy-policy': `Privacy Policy | ${base}`, '/privacy': `Privacy Policy | ${base}`,
      '/terms-and-conditions': `Terms & Conditions | ${base}`, '/terms': `Terms & Conditions | ${base}`,
    };
    document.title = titles[currentRoute] || (/^\/(insights|blogs)\//.test(currentRoute) ? `Resource | ${base}` : `Page not found | ${base}`);
  }, [currentRoute]);

  // Render current view according to route
  const renderCurrentPage = () => {
    if (currentRoute === '/' || currentRoute === '') {
      return <HomePage navigate={navigate} openConsultationModal={() => setConsultationModalOpen(true)} />;
    }
    if (currentRoute === '/about-us' || currentRoute === '/who-we-are' || currentRoute === '/about' || currentRoute === '/about.php') {
      return <WhoWeArePage navigate={navigate} openConsultationModal={() => setConsultationModalOpen(true)} />;
    }
    if (currentRoute === '/our-founder') {
      return <OurFounderPage navigate={navigate} openConsultationModal={() => setConsultationModalOpen(true)} />;
    }
    if (currentRoute === '/our-services' || currentRoute === '/services') {
      return <OurServicesPage navigate={navigate} openConsultationModal={() => setConsultationModalOpen(true)} />;
    }
    if (currentRoute === '/our-expertise' || currentRoute === '/expertise') {
      return <OurExpertisePage navigate={navigate} openConsultationModal={() => setConsultationModalOpen(true)} />;
    }
    if (currentRoute === '/frameworks' || currentRoute === '/our-capabilities') {
      return <FrameworksPage navigate={navigate} openConsultationModal={() => setConsultationModalOpen(true)} />;
    }
    if (currentRoute === '/our-partners' || currentRoute === '/who-we-work-with') {
      return <OurPartnersPage navigate={navigate} openConsultationModal={() => setConsultationModalOpen(true)} />;
    }
    if (currentRoute === '/blogs' || currentRoute === '/insights') {
      return <BlogsPage navigate={navigate} openConsultationModal={() => setConsultationModalOpen(true)} />;
    }
    if (currentRoute.startsWith('/insights/') || currentRoute.startsWith('/blogs/')) {
      const slug = currentRoute.replace(/^\/(insights|blogs)\//, '').replace(/\/$/, '');
      return (
        <BlogDetailPage
          slug={slug}
          navigate={navigate}
          openConsultationModal={() => setConsultationModalOpen(true)}
          showToast={showToast}
        />
      );
    }
    if (currentRoute === '/contact-us' || currentRoute === '/contact') {
      return <ContactUsPage showToast={showToast} />;
    }
    if (currentRoute === '/terms-and-conditions' || currentRoute === '/terms') {
      return <TermsConditionsPage />;
    }
    if (currentRoute === '/privacy-policy' || currentRoute === '/privacy') {
      return <PrivacyPolicyPage />;
    }

    // Unknown address: friendly 404 with a way back
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center font-sans">
        <p className="text-sm font-black text-emerald-600">404</p>
        <h1 className="text-3xl font-black text-[#123B5D] mt-1">Page not found</h1>
        <p className="mt-2 text-[#536B7D]">The page you are looking for does not exist or has moved.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={() => navigate('/')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-2.5 rounded-md">Go to Home</button>
          <button onClick={() => navigate('/contact-us')} className="border border-blue-300 text-blue-700 font-bold text-sm px-5 py-2.5 rounded-md">Contact us</button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-cyan-500 selection:text-white">
      {/* Navigation Header */}
      <Header
        currentRoute={currentRoute}
        navigate={navigate}
        openConsultationModal={() => setConsultationModalOpen(true)}
        openSearchModal={() => setSearchModalOpen(true)}
      />

      {/* Main Page View with subtle GPU-accelerated page transition */}
      <main key={currentRoute} className="flex-1 page-transition">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer navigate={navigate} />

      {/* Floating Native Customer Care Chatbot */}
      <Chatbot
        navigate={navigate}
        openConsultationModal={() => setConsultationModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        showToast={showToast}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        navigate={navigate}
      />

      {/* Toast Feedback */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
