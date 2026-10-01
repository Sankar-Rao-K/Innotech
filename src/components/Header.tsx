import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search,
  ArrowRight
} from 'lucide-react';
import { logoImg } from '../assets/images';

interface HeaderProps {
  currentRoute: string;
  navigate: (route: string) => void;
  openConsultationModal: () => void;
  openSearchModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  navigate,
  openConsultationModal,
  openSearchModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (route: string) => {
    navigate(route);
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full font-sans">
      {/* Main Branding & Navigation Header */}
      <nav className={`bg-white border-b border-[#D7EAF7] transition-all duration-300 ${isScrolled ? 'py-2.5 shadow-xs' : 'py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo - Updated with Official Uploaded Logo Image */}
          <div 
            onClick={() => handleNavClick('/')}
            className="flex items-center cursor-pointer group shrink-0 py-1"
          >
            <img 
              src={logoImg} 
              alt="InnoTech BioPharm Solutions Logo" 
              className="h-10 sm:h-12 w-auto object-contain max-w-[240px]"
            />
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-bold uppercase tracking-wider text-[#123B5D]">
            <button
              onClick={() => handleNavClick('/')}
              className={`nav-link-indicator py-1 whitespace-nowrap ${
                currentRoute === '/' ? 'text-[#2F9FEA] is-active' : 'text-[#123B5D] hover:text-[#2F9FEA]'
              }`}
            >
              HOME
            </button>

            {/* ABOUT Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('/about-us')}
                className={`nav-link-indicator flex items-center gap-1 py-1 whitespace-nowrap ${
                  ['/about-us', '/who-we-are', '/our-founder', '/our-partners'].includes(currentRoute)
                    ? 'text-[#2F9FEA] is-active'
                    : 'text-[#123B5D] hover:text-[#2F9FEA]'
                }`}
              >
                <span>ABOUT</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-md border border-[#D7EAF7] py-2 z-50">
                  <button onClick={() => handleNavClick('/about-us')} className="w-full text-left px-4 py-2 text-xs font-bold text-[#123B5D] hover:bg-[#F5FAFE] hover:text-[#2F9FEA] transition-colors">About InnoTech</button>
                  <button onClick={() => handleNavClick('/our-founder')} className="w-full text-left px-4 py-2 text-xs font-bold text-[#123B5D] hover:bg-[#F5FAFE] hover:text-[#2F9FEA] transition-colors">Raj Thota (Founder)</button>
                  <button onClick={() => handleNavClick('/our-partners')} className="w-full text-left px-4 py-2 text-xs font-bold text-[#123B5D] hover:bg-[#F5FAFE] hover:text-[#2F9FEA] transition-colors">Who We Work With</button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('/our-expertise')}
              className={`nav-link-indicator py-1 whitespace-nowrap ${
                currentRoute === '/our-expertise' ? 'text-[#2F9FEA] is-active' : 'text-[#123B5D] hover:text-[#2F9FEA]'
              }`}
            >
              EXPERTISE
            </button>

            <button
              onClick={() => handleNavClick('/our-services')}
              className={`nav-link-indicator py-1 whitespace-nowrap ${
                currentRoute === '/our-services' ? 'text-[#2F9FEA] is-active' : 'text-[#123B5D] hover:text-[#2F9FEA]'
              }`}
            >
              SERVICES
            </button>

            <button
              onClick={() => handleNavClick('/frameworks')}
              className={`nav-link-indicator py-1 whitespace-nowrap ${
                currentRoute === '/frameworks' ? 'text-[#2F9FEA] is-active' : 'text-[#123B5D] hover:text-[#2F9FEA]'
              }`}
            >
              FRAMEWORKS
            </button>

            <button
              onClick={() => handleNavClick('/insights')}
              className={`nav-link-indicator py-1 whitespace-nowrap ${
                (currentRoute.startsWith('/blogs') || currentRoute === '/insights') ? 'text-[#2F9FEA] is-active' : 'text-[#123B5D] hover:text-[#2F9FEA]'
              }`}
            >
              INSIGHTS
            </button>

            <button
              onClick={() => handleNavClick('/contact-us')}
              className={`nav-link-indicator py-1 whitespace-nowrap ${
                currentRoute === '/contact-us' ? 'text-[#2F9FEA] is-active' : 'text-[#123B5D] hover:text-[#2F9FEA]'
              }`}
            >
              CONTACT
            </button>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={openSearchModal}
              title="Search website content"
              className="p-2 rounded-lg text-[#536B7D] hover:text-[#2F9FEA] hover:bg-[#F5FAFE] btn-interactive"
            >
              <Search className="w-4 h-4" />
            </button>

            <button onClick={() => handleNavClick('/contact-us')} className="hidden sm:inline-flex items-center gap-2 bg-[#0B3C8C] hover:bg-[#092f6f] text-white font-extrabold text-xs px-4 py-2.5 rounded-lg btn-interactive whitespace-nowrap shadow-xs"><span>Get in Touch</span></button>

            {/* Mobile Nav Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#123B5D] hover:bg-[#F5FAFE] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#D7EAF7] px-4 pt-3 pb-6 space-y-2 font-bold uppercase tracking-wider text-xs">
            <button
              onClick={() => handleNavClick('/')}
              className="w-full text-left px-3 py-2 text-[#123B5D] hover:text-[#2F9FEA]"
            >
              HOME
            </button>
            <div className="px-3 py-1 text-[#536B7D] text-[10px] tracking-widest">ABOUT</div>
            <button onClick={() => handleNavClick('/about-us')} className="w-full text-left px-6 py-1.5 text-[#536B7D] hover:text-[#2F9FEA]">About InnoTech</button>
            <button onClick={() => handleNavClick('/our-founder')} className="w-full text-left px-6 py-1.5 text-[#536B7D] hover:text-[#2F9FEA]">Raj Thota (Founder)</button>
            <button onClick={() => handleNavClick('/our-partners')} className="w-full text-left px-6 py-1.5 text-[#536B7D] hover:text-[#2F9FEA]">Who We Work With</button>

            <button
              onClick={() => handleNavClick('/our-expertise')}
              className="w-full text-left px-3 py-2 text-[#123B5D] hover:text-[#2F9FEA]"
            >
              EXPERTISE
            </button>

            <button
              onClick={() => handleNavClick('/our-services')}
              className="w-full text-left px-3 py-2 text-[#123B5D] hover:text-[#2F9FEA]"
            >
              SERVICES
            </button>

            <button
              onClick={() => handleNavClick('/frameworks')}
              className="w-full text-left px-3 py-2 text-[#123B5D] hover:text-[#2F9FEA]"
            >
              FRAMEWORKS
            </button>

            <button
              onClick={() => handleNavClick('/insights')}
              className="w-full text-left px-3 py-2 text-[#123B5D] hover:text-[#2F9FEA]"
            >
              INSIGHTS
            </button>

            <button
              onClick={() => handleNavClick('/contact-us')}
              className="w-full text-left px-3 py-2 text-[#123B5D] hover:text-[#2F9FEA]"
            >
              CONTACT
            </button>

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openConsultationModal();
                }}
                className="w-full block text-center bg-[#2F9FEA] hover:bg-[#2389D2] text-white py-3 rounded-lg font-bold text-xs transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
