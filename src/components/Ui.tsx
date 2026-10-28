import React from 'react';
import { ArrowRight } from 'lucide-react';

/** Image helper: client assets are WebP; the Frameworks-page thumbnails are older JPG crops. */
export const img = (n: string) => (n.startsWith('fw-') ? `/img/${n}.jpg` : `/img/${n}.webp`);

export const TINTS = ['bg-[#EAF3FF]', 'bg-[#E7F8EE]', 'bg-[#FFF6E3]', 'bg-[#F1ECFF]', 'bg-[#FFECEF]', 'bg-[#E6F4FB]'];
export const NAVY = 'text-[#0A2A7A]';

export const Arrow: React.FC<{ className?: string }> = ({ className = '' }) => <ArrowRight className={`w-4 h-4 ${className}`} aria-hidden="true" />;

export const Eyebrow: React.FC<{ text: string }> = ({ text }) => (
  <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0A2A7A] mb-2">{text}</p>
);

/** Section heading with the green accent used in the client designs */
export const SectionHead: React.FC<{ title: React.ReactNode; sub?: string; id?: string; light?: boolean }> = ({ title, sub, id, light }) => (
  <div id={id} className="scroll-mt-28">
    <h2 className={`text-2xl sm:text-3xl font-black leading-tight ${light ? 'text-white' : NAVY}`}>{title}</h2>
    {sub && <p className={`mt-2 flex items-start gap-2.5 text-sm sm:text-base ${light ? 'text-blue-100' : 'text-[#27407A]'}`}><span className="mt-[11px] h-0.5 w-6 shrink-0 bg-emerald-500" aria-hidden="true" />{sub}</p>}
  </div>
);

export const Section: React.FC<{ title?: React.ReactNode; sub?: string; tint?: boolean; id?: string; children: React.ReactNode }> = ({ title, sub, tint, id, children }) => (
  <section id={id} className={`${tint ? 'bg-[#F4F9FE]' : 'bg-white'} py-10 sm:py-14 scroll-mt-24`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {title && <SectionHead title={title} sub={sub} />}
      <div className={title ? 'mt-6 sm:mt-7' : ''}>{children}</div>
    </div>
  </section>
);

interface HeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  /** light: white page hero fading into a photo. dark: navy hero with a custom aside. portrait: photo on the left. */
  variant?: 'light' | 'dark' | 'portrait';
  aside?: React.ReactNode;
}
export const Hero: React.FC<HeroProps> = ({ eyebrow, title, sub, children, actions, image, imageAlt = '', variant = 'light', aside }) => {
  if (variant === 'dark') {
    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-[#08224D] via-[#0B2A5B] to-[#0F4C8A] text-white">
        {image && <img src={img(image)} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-25" />}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid gap-10 items-center lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-5xl font-black leading-tight">{title}</h1>
            {sub && <p className="text-lg sm:text-2xl font-bold text-cyan-300 mt-3">{sub}</p>}
            <div className="mt-5 text-sm sm:text-base text-blue-100 space-y-3 leading-relaxed">{children}</div>
          </div>
          {aside}
        </div>
      </section>
    );
  }
  if (variant === 'portrait') {
    return (
      <section className="relative overflow-hidden bg-gradient-to-r from-[#EEF5FC] via-white to-[#F3F8FD]">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-12 lg:px-8 lg:py-12">
          <img src={img(image!)} alt={imageAlt} className="mx-auto w-full max-w-[280px] rounded-2xl object-cover shadow-2xl sm:max-w-[340px] lg:max-w-[420px]" />
          <div>
            <h1 className="text-3xl font-black leading-tight text-[#0A2A7A] sm:text-5xl">{title}</h1>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#1B2F66] sm:text-base">{children}</div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-white via-[#F3F8FE] to-[#E3EFFA]">
      {image && (
        <>
          <div className="absolute inset-y-0 right-0 w-full lg:w-[62%] lg:[mask-image:linear-gradient(to_right,transparent_0%,#000_42%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_42%)]">
            <img src={img(image)} alt={imageAlt} className="h-full w-full object-cover object-center lg:object-right" />
          </div>
          <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-white/95 via-white/85 to-white/60" aria-hidden="true" />
        </>
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-[72px]">
        <div className="max-w-xl lg:max-w-[46%]">
          {eyebrow && <Eyebrow text={eyebrow} />}
          <h1 className="text-3xl sm:text-4xl xl:text-[44px] font-black leading-[1.12] text-[#0A2A7A]">{title}</h1>
          <span className="mt-4 block h-0.5 w-12 bg-emerald-500" aria-hidden="true" />
          {sub && <p className="mt-4 text-base sm:text-xl font-bold text-[#0A2A7A] leading-snug">{sub}</p>}
          {children && <div className="mt-4 text-sm sm:text-[15px] text-[#1B2F66] space-y-3 leading-relaxed">{children}</div>}
          {actions && <div className="mt-6 flex flex-col sm:flex-row gap-3">{actions}</div>}
        </div>
      </div>
    </section>
  );
};

export const BtnPrimary: React.FC<{ onClick: () => void; children: React.ReactNode; tone?: 'navy' | 'green' | 'blue'; className?: string }> = ({ onClick, children, tone = 'navy', className = '' }) => (
  <button onClick={onClick} className={`inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-bold text-white transition active:scale-[.98] ${tone === 'green' ? 'bg-emerald-600 hover:bg-emerald-700' : tone === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-[#0A2A8F] hover:bg-[#08216F]'} ${className}`}>{children}<Arrow /></button>
);
export const BtnOutline: React.FC<{ onClick: () => void; children: React.ReactNode; className?: string }> = ({ onClick, children, className = '' }) => (
  <button onClick={onClick} className={`inline-flex items-center justify-center gap-2 rounded-md border border-[#0A2A8F] bg-white/80 px-6 py-3 text-sm font-bold text-[#0A2A8F] hover:bg-white transition active:scale-[.98] ${className}`}>{children}<Arrow /></button>
);

/** Image-topped card with a pastel body (client design language) */
export const TintCard: React.FC<{ image: string; title: string; text: string; tint?: string; onClick?: () => void; imgClass?: string; large?: boolean }> = ({ image, title, text, tint = TINTS[0], onClick, imgClass = 'h-36 sm:h-40', large }) => {
  const body = (
    <>
      <img src={img(image)} alt="" loading="lazy" className={`w-full ${imgClass} object-cover`} />
      <div className={`flex-1 p-4 ${tint}`}>
        <h3 className={`font-extrabold ${NAVY} ${large ? 'text-lg' : 'text-[15px]'} leading-snug`}>{title}</h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-[#27407A]">{text}</p>
      </div>
    </>
  );
  const cls = 'flex h-full w-full flex-col overflow-hidden rounded-xl border border-[#D7EAF7] bg-white text-left shadow-sm transition-all';
  return onClick
    ? <button onClick={onClick} className={`${cls} hover:-translate-y-1 hover:shadow-lg`}>{body}</button>
    : <div className={cls}>{body}</div>;
};

/** Plain tinted tile with centred text (no photo) */
export const TintTile: React.FC<{ title: string; text: string; tint?: string; icon?: React.ReactNode }> = ({ title, text, tint = TINTS[0], icon }) => (
  <div className={`h-full rounded-xl border border-[#D7EAF7] p-4 sm:p-5 text-center ${tint}`}>
    {icon && <div className="mb-2 flex justify-center">{icon}</div>}
    <h3 className={`font-extrabold ${NAVY} text-[15px] leading-snug`}>{title}</h3>
    <p className="mt-1.5 text-[13px] leading-relaxed text-[#27407A]">{text}</p>
  </div>
);

export const Cta: React.FC<{ title: React.ReactNode; text: string; label: string; onClick: () => void; image: string; tone?: 'navy' | 'light'; secondary?: boolean }> = ({ title, text, label, onClick, image, tone = 'navy' }) => (
  tone === 'light' ? (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#EAF3FC] via-[#F4F9FE] to-white">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] lg:[mask-image:linear-gradient(to_right,transparent_0%,#000_40%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_40%)]"><img src={img(image)} alt="" aria-hidden="true" className="h-full w-full object-cover" /></div>
      <div className="absolute inset-0 lg:hidden bg-white/85" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="max-w-xl"><span className="block h-0.5 w-10 bg-emerald-500 mb-3" /><h2 className="text-2xl sm:text-3xl font-black text-[#0A2A7A]">{title}</h2><p className="mt-3 text-sm sm:text-base text-[#1B2F66]">{text}</p></div>
        <BtnPrimary tone="blue" onClick={onClick} className="shrink-0 self-start lg:self-center">{label}</BtnPrimary>
      </div>
    </section>
  ) : (
    <section className="relative overflow-hidden bg-[#0A2463] text-white">
      <img src={img(image)} alt="" aria-hidden="true" className="absolute right-0 top-0 h-full w-full lg:w-3/5 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A2463] via-[#0A2463]/90 to-[#0A2463]/25" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="max-w-2xl"><span className="block h-0.5 w-10 bg-emerald-400 mb-3" /><h2 className="text-2xl sm:text-3xl font-black">{title}</h2><p className="mt-3 text-sm sm:text-base text-blue-100">{text}</p>
          <BtnPrimary tone="green" onClick={onClick} className="mt-6">{label}</BtnPrimary></div>
      </div>
    </section>
  )
);
