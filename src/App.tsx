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
import { WhatSetsUsApartPage } from './pages/WhatSetsUsApartPage';
import { OurServicesPage } from './pages/OurServicesPage';
import { OurExpertisePage } from './pages/OurExpertisePage';
import { FrameworksPage } from './pages/FrameworksPage';
import { OurPartnersPage } from './pages/OurPartnersPage';
import { BlogsPage } from './pages/BlogsPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { CareersPage } from './pages/CareersPage';
import { TermsConditionsPage } from './pages/TermsConditionsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    const path = window.location.pathname;
    return path || '/';
  });

  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (route: string) => {
    window.history.pushState({}, '', route);
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

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
    if (currentRoute === '/what-sets-us-apart') {
      return <WhatSetsUsApartPage navigate={navigate} openConsultationModal={() => setConsultationModalOpen(true)} />;
    }
    if (currentRoute === '/our-services' || currentRoute === '/services') {
      return <OurServicesPage navigate={navigate} openConsultationModal={() => setConsultationModalOpen(true)} />;
    }
    if (currentRoute === '/our-expertise' || currentRoute === '/expertise') {
      return <OurExpertisePage navigate={navigate} openConsultationModal={() => setConsultationModalOpen(true)} />;
    }
    if (currentRoute === '/frameworks' || currentRoute === '/our-capabilities') {
      return <FrameworksPage openConsultationModal={() => setConsultationModalOpen(true)} />;
    }
    if (currentRoute === '/our-partners') {
      return <OurPartnersPage navigate={navigate} openConsultationModal={() => setConsultationModalOpen(true)} />;
    }
    if (currentRoute === '/blogs' || currentRoute === '/insights') {
      return <BlogsPage navigate={navigate} openConsultationModal={() => setConsultationModalOpen(true)} />;
    }
    if (currentRoute.startsWith('/blogs/')) {
      const slug = currentRoute.replace('/blogs/', '');
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
    if (currentRoute === '/careers') {
      return <CareersPage showToast={showToast} />;
    }
    if (currentRoute === '/terms-and-conditions') {
      return <TermsConditionsPage />;
    }
    if (currentRoute === '/privacy-policy') {
      return <PrivacyPolicyPage />;
    }

    // Default Fallback
    return <HomePage navigate={navigate} openConsultationModal={() => setConsultationModalOpen(true)} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-cyan-500 selection:text-white">
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
      <Footer navigate={navigate} showToast={showToast} />

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
