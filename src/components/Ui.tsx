import React from 'react';

export const img = (n: string) => `/img/${n}.jpg`;

export const Eyebrow: React.FC<{ text: string; light?: boolean }> = ({ text, light }) => (
  <div className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider ${light ? 'text-blue-200' : 'text-[#123B5D]'}`}>
    <span className="h-0.5 w-8 bg-emerald-500" />{text}
  </div>
);

interface HeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  accent?: string;
  children?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  aside?: React.ReactNode;
  reverse?: boolean;
  badge?: string;
}
/** Dark hero. The picture sits in a framed card (not stretched full-bleed) so it stays sharp on every screen. */
export const Hero: React.FC<HeroProps> = ({ eyebrow, title, accent, children, image, imageAlt = '', aside, reverse, badge }) => (
  <section className="relative overflow-hidden bg-gradient-to-br from-[#08224D] via-[#0B2A5B] to-[#0F4C8A] text-white">
    <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />
    <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid gap-10 items-center ${(image || aside) ? 'lg:grid-cols-2' : ''}`}>
      <div className={`${reverse ? 'lg:order-2' : ''} max-w-2xl`}>
        {eyebrow && <p className="text-xs font-bold tracking-widest text-blue-200 mb-3">{eyebrow}</p>}
        <h1 className="text-3xl sm:text-5xl font-black leading-tight">{title}</h1>
        {accent && <p className="text-xl sm:text-2xl font-bold text-cyan-300 mt-3">{accent}</p>}
        <div className="mt-5 text-sm sm:text-base text-blue-100 space-y-3 leading-relaxed">{children}</div>
      </div>
      {(image || aside) && (
        <div className={`${reverse ? 'lg:order-1' : ''} relative`}>
          {aside ?? (
            <>
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-cyan-400/30 to-blue-500/10 blur-xl" aria-hidden="true" />
              <img src={img(image!)} alt={imageAlt} className="relative w-full aspect-[4/3] sm:aspect-[16/10] object-cover rounded-2xl border border-white/20 shadow-2xl" />
              {badge && <span className="absolute -bottom-3 left-4 rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-extrabold shadow-lg">{badge}</span>}
            </>
          )}
        </div>
      )}
    </div>
  </section>
);

export const Section: React.FC<{ title?: string; sub?: string; tint?: boolean; id?: string; children: React.ReactNode }> = ({ title, sub, tint, id, children }) => (
  <section id={id} className={`${tint ? 'bg-[#F5FAFE]' : 'bg-white'} py-12 sm:py-14 scroll-mt-24`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {title && <h2 className="text-2xl sm:text-3xl font-black text-blue-700">{title}</h2>}
      {sub && <p className="text-sm sm:text-base mt-1.5 text-[#536B7D]">{sub}</p>}
      <div className={title ? 'mt-6' : ''}>{children}</div>
    </div>
  </section>
);

export const Card: React.FC<{ title: string; text: string; image?: string; layout?: 'top' | 'side' }> = ({ title, text, image, layout = 'top' }) => (
  <div className={`h-full border border-[#D7EAF7] bg-white rounded-lg overflow-hidden transition-shadow hover:shadow-md ${image && layout === 'side' ? 'flex' : ''}`}>
    {image && <img src={img(image)} alt="" loading="lazy" className={layout === 'side' ? 'w-24 sm:w-32 shrink-0 object-cover' : 'w-full h-36 object-cover'} />}
    <div className="p-4"><h3 className="font-bold text-blue-700 text-sm">{title}</h3><p className="text-xs sm:text-[13px] mt-1.5 leading-relaxed text-[#536B7D]">{text}</p></div>
  </div>
);

export const Cta: React.FC<{ title: string; text: string; label: string; onClick: () => void; image?: string }> = ({ title, text, label, onClick, image }) => (
  <section className="relative bg-[#0B2A5B] text-white py-12 overflow-hidden">
    {image && <img src={img(image)} alt="" aria-hidden="true" className="absolute right-0 top-0 h-full w-full lg:w-3/5 object-cover" />}
    <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A5B] via-[#0B2A5B]/90 to-[#0B2A5B]/40" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="max-w-2xl"><h2 className="text-2xl font-black">{title}</h2><p className="text-sm text-blue-100 mt-2">{text}</p></div>
      <button onClick={onClick} className="bg-emerald-600 hover:bg-emerald-700 active:scale-[.98] font-bold text-sm px-6 py-3 rounded-md shrink-0 transition">{label}</button>
    </div>
  </section>
);
