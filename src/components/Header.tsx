import React, { useEffect, useState } from 'react';
import { ChevronDown, Menu, Search, X } from 'lucide-react';
import { logoImg } from '../assets/images';

interface HeaderProps { currentRoute: string; navigate: (route: string) => void; openConsultationModal: () => void; openSearchModal: () => void }

interface NavItem { label: string; route: string; match?: (r: string) => boolean; children?: { label: string; route: string }[] }

// Main navigation. To add a page (for example Frameworks) put one entry in this list.
export const NAV: NavItem[] = [
  { label: 'Home', route: '/', match: r => r === '/' },
  { label: 'About', route: '/about-us', match: r => ['/about-us', '/who-we-are', '/our-founder', '/our-partners', '/who-we-work-with'].includes(r),
    children: [{ label: 'About InnoTech', route: '/about-us' }, { label: 'Raj Thota (Founder)', route: '/our-founder' }, { label: 'Who We Work With', route: '/our-partners' }] },
  { label: 'Expertise', route: '/our-expertise', match: r => ['/our-expertise', '/expertise'].includes(r) },
  { label: 'Services', route: '/our-services', match: r => ['/our-services', '/services'].includes(r) },
  { label: 'Insights & Resources', route: '/insights', match: r => r.startsWith('/insights') || r.startsWith('/blogs') || r === '/frameworks' || r === '/our-capabilities' },
  { label: 'Contact', route: '/contact-us', match: r => ['/contact-us', '/contact'].includes(r) },
];

export const Header: React.FC<HeaderProps> = ({ currentRoute, navigate, openSearchModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 15);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => { setMobileOpen(false); setAboutOpen(false); }, [currentRoute]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const go = (route: string) => { navigate(route); setMobileOpen(false); setAboutOpen(false); };

  return (
    <header className="sticky top-0 z-50 w-full font-sans">
      <nav aria-label="Main" className={`bg-white border-b border-[#D7EAF7] transition-all duration-300 ${scrolled ? 'py-2.5 shadow-sm' : 'py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <button onClick={() => go('/')} aria-label="InnoTech BioPharm Solutions, home" className="flex items-center shrink-0 py-1">
            <img src={logoImg} alt="InnoTech BioPharm Solutions logo" className="h-10 sm:h-12 w-auto object-contain max-w-[240px]" />
          </button>

          <ul className="hidden lg:flex items-center gap-5 xl:gap-8 text-[13px] xl:text-sm font-semibold text-[#0A2A7A]">
            {NAV.map(item => {
              const active = item.match ? item.match(currentRoute) : currentRoute === item.route;
              const cls = `nav-link-indicator py-1 whitespace-nowrap ${active ? 'text-[#0A2A7A] is-active' : 'hover:text-[#2F9FEA]'}`;
              if (!item.children) return <li key={item.label}><button onClick={() => go(item.route)} aria-current={active ? 'page' : undefined} className={cls}>{item.label}</button></li>;
              return (
                <li key={item.label} className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
                  <button onClick={() => go(item.route)} aria-haspopup="true" aria-expanded={aboutOpen} aria-current={active ? 'page' : undefined} className={`${cls} flex items-center gap-1`}>
                    {item.label}<ChevronDown className={`w-3.5 h-3.5 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {aboutOpen && (
                    <div className="absolute top-full left-0 w-56 pt-2 z-50">
                      <div className="rounded-lg border border-[#D7EAF7] bg-white py-2 shadow-lg">
                        {item.children.map(c => <button key={c.route} onClick={() => go(c.route)} className="block w-full px-4 py-2 text-left text-[13px] font-semibold text-[#0A2A7A] hover:bg-[#F4F9FE] hover:text-[#2F9FEA]">{c.label}</button>)}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button onClick={openSearchModal} aria-label="Search the site" className="p-2.5 rounded-lg text-[#0A2A7A] hover:text-[#2F9FEA] hover:bg-[#F4F9FE]"><Search className="w-[18px] h-[18px]" /></button>
            <button onClick={() => go('/contact-us')} className="hidden sm:inline-flex items-center bg-[#0A2A8F] hover:bg-[#08216F] text-white font-bold text-[13px] px-5 py-2.5 rounded-md whitespace-nowrap">Get in Touch</button>
            <button onClick={() => setMobileOpen(o => !o)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} className="lg:hidden p-2 rounded-lg text-[#0A2A7A] hover:bg-[#F4F9FE]">{mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[61px] bottom-0 z-40 overflow-y-auto bg-white border-t border-[#D7EAF7] px-4 pt-3 pb-24">
          <ul className="space-y-1 text-[15px] font-semibold text-[#0A2A7A]">
            {NAV.map(item => (
              <li key={item.label}>
                <button onClick={() => go(item.route)} className="w-full text-left px-3 py-3 rounded-lg hover:bg-[#F4F9FE]">{item.label}</button>
                {item.children && <div className="ml-4 border-l-2 border-emerald-400 pl-3">{item.children.map(c => <button key={c.route} onClick={() => go(c.route)} className="block w-full text-left px-3 py-2.5 text-sm text-[#27407A] hover:text-[#2F9FEA]">{c.label}</button>)}</div>}
              </li>
            ))}
          </ul>
          <button onClick={() => go('/contact-us')} className="mt-5 w-full rounded-md bg-[#0A2A8F] py-3.5 text-sm font-bold text-white">Get in Touch</button>
        </div>
      )}
    </header>
  );
};
