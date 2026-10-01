import React from 'react';

export const img = (n: string) => `/img/${n}.jpg`;

export const Hero: React.FC<{ eyebrow?: string; title: React.ReactNode; accent?: string; children?: React.ReactNode; image?: string; left?: React.ReactNode }> = ({ eyebrow, title, accent, children, image, left }) => (
  <section className="relative bg-[#0B2A5B] text-white overflow-hidden">
    {image && <img src={img(image)} alt="" aria-hidden="true" className="absolute right-0 top-0 h-full w-full lg:w-3/5 object-cover" />}
    <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A5B] via-[#0B2A5B]/90 lg:via-[#0B2A5B]/70 to-transparent" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex gap-8 items-center">
      {left}
      <div className="max-w-2xl">
        {eyebrow && <p className="text-xs font-bold tracking-widest text-blue-200 mb-2">{eyebrow}</p>}
        <h1 className="text-4xl sm:text-5xl font-black leading-tight">{title}</h1>
        {accent && <p className="text-2xl font-bold text-cyan-300 mt-2">{accent}</p>}
        <div className="mt-4 text-sm text-blue-100 space-y-2">{children}</div>
      </div>
    </div>
  </section>
);
export const Section: React.FC<{ title?: string; sub?: string; tint?: boolean; children: React.ReactNode }> = ({ title, sub, tint, children }) => (
  <section className={tint ? 'bg-[#F5FAFE] py-12' : 'py-12'}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {title && <h2 className="text-3xl font-black text-blue-700">{title}</h2>}
      {sub && <p className="text-sm mt-1">{sub}</p>}
      <div className={title ? 'mt-6' : ''}>{children}</div>
    </div>
  </section>
);
export const Card: React.FC<{ title: string; text: string; image?: string; layout?: 'top' | 'side' }> = ({ title, text, image, layout = 'top' }) => (
  <div className={`border border-[#D7EAF7] bg-white rounded-lg overflow-hidden ${image && layout === 'side' ? 'flex' : ''}`}>
    {image && <img src={img(image)} alt={title} loading="lazy" className={layout === 'side' ? 'w-28 sm:w-32 shrink-0 object-cover' : 'w-full h-36 object-cover'} />}
    <div className="p-4"><h3 className="font-bold text-blue-700 text-sm">{title}</h3><p className="text-xs mt-1.5 leading-relaxed">{text}</p></div>
  </div>
);
export const Flow: React.FC<{ items: string[] }> = ({ items }) => (
  <ol className="flex flex-wrap gap-2 text-[11px] font-bold text-[#123B5D]">{items.map(i => <li key={i} className="bg-[#EAF6FD] rounded px-3 py-2">{i}</li>)}</ol>
);
export const Cta: React.FC<{ title: string; text: string; label: string; onClick: () => void; image?: string }> = ({ title, text, label, onClick, image }) => (
  <section className="relative bg-[#0B2A5B] text-white py-12 overflow-hidden">
    {image && <img src={img(image)} alt="" aria-hidden="true" className="absolute right-0 top-0 h-full w-full lg:w-3/5 object-cover" />}
    <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A5B] via-[#0B2A5B]/85 to-transparent" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="max-w-2xl"><h2 className="text-2xl font-black">{title}</h2><p className="text-sm text-blue-100 mt-2">{text}</p></div>
      <button onClick={onClick} className="bg-emerald-600 hover:bg-emerald-700 font-bold text-sm px-6 py-3 rounded-md shrink-0">{label}</button>
    </div>
  </section>
);
