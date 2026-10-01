import React from 'react';
import { BLOG_POSTS } from '../data/siteData';
import { ArrowLeft, Calendar, Clock, Share2, Tag, ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import { AnimateOnScroll } from '../components/AnimateOnScroll';

interface BlogDetailPageProps {
  slug: string;
  navigate: (route: string) => void;
  openConsultationModal: () => void;
  showToast: (msg: string) => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ slug, navigate, openConsultationModal, showToast }) => {
  const post = BLOG_POSTS.find((b) => b.slug === slug) || BLOG_POSTS[0];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Article URL copied to clipboard!');
    }
  };

  const relatedPosts = BLOG_POSTS.filter((b) => b.id !== post.id).slice(0, 2);

  return (
    <div className="font-sans text-[#536B7D] bg-white min-h-screen pb-16">
      
      {/* Top Navigation Bar */}
      <div className="bg-[#F5FAFE] text-[#123B5D] py-3.5 px-4 sm:px-6 lg:px-8 border-b border-[#D7EAF7]">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/blogs')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#2F9FEA] hover:text-[#2389D2] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Blogs &amp; Insights
          </button>

          <button
            onClick={handleShare}
            className="px-3 py-1.5 rounded-lg bg-white border border-[#D7EAF7] hover:bg-[#EAF6FD] text-[#123B5D] transition-colors flex items-center gap-1.5 text-xs font-semibold"
          >
            <Share2 className="w-3.5 h-3.5 text-[#2F9FEA]" />
            Share Article
          </button>
        </div>
      </div>

      {/* Hero Header - Light Sky Blue Background */}
      <header className="bg-[#EAF6FD] text-[#123B5D] pt-8 pb-14 border-b border-[#D7EAF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2F9FEA] bg-white px-3 py-1 rounded-md border border-[#D7EAF7]">
            {post.category}
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#123B5D] leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#536B7D] pt-2 border-t border-[#D7EAF7]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#2F9FEA] text-white text-xs font-extrabold flex items-center justify-center shrink-0 border border-[#D7EAF7]">
                RT
              </div>
              <div>
                <span className="font-bold text-[#123B5D] block">{post.author.name}</span>
                <span className="text-[10px] text-[#536B7D]">{post.author.role}</span>
              </div>
            </div>

            <span className="hidden sm:inline text-[#D7EAF7]">•</span>

            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#2F9FEA]" />
              <span>{post.publishedAt}</span>
            </div>

            <span className="hidden sm:inline text-[#D7EAF7]">•</span>

            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#2F9FEA]" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Article Header Banner & Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        
        {/* Publication Banner Card */}
        <AnimateOnScroll type="scale-up" delay={0.1}>
          <div className="rounded-xl overflow-hidden border border-[#D7EAF7] mb-8 bg-[#123B5D] text-white p-8">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#4DB3F5] bg-[#123B5D]/80 px-3 py-1 rounded border border-[#4DB3F5]/30">
                INNOTECH TECHNICAL PAPER
              </span>
              <span className="text-xs font-mono text-slate-300">PUBLICATION ID: #ITB-2026</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white leading-snug mb-2">
              {post.title}
            </h3>
            <p className="text-xs text-[#EAF6FD] font-normal leading-relaxed max-w-2xl">
              {post.summary}
            </p>
          </div>
        </AnimateOnScroll>

        {/* Article Body */}
        <article className="bg-white p-6 sm:p-10 rounded-2xl border border-[#D7EAF7] space-y-8 text-left">
          
          {/* Intro Lead */}
          <AnimateOnScroll type="fade-up" delay={0.15}>
            <div className="text-sm sm:text-base text-[#123B5D] font-medium leading-relaxed border-l-4 border-[#2F9FEA] pl-4 py-1 bg-[#F5FAFE] rounded-r-lg">
              {post.content.intro}
            </div>
          </AnimateOnScroll>

          {/* Dynamic Sections */}
          {post.content.sections.map((sec, idx) => (
            <AnimateOnScroll key={idx} type="fade-up" delay={0.1}>
              <section className="space-y-3 pt-3 border-t border-[#D7EAF7]">
                <h2 className="text-lg sm:text-xl font-extrabold text-[#123B5D] leading-snug">
                  {sec.heading}
                </h2>
                <p className="text-[#536B7D] text-xs sm:text-sm leading-relaxed font-normal">
                  {sec.text}
                </p>

                {sec.bullets && (
                  <ul className="space-y-1.5 pt-1">
                    {sec.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#123B5D]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2F9FEA] shrink-0 mt-0.5" />
                        <span className="text-[#536B7D] font-normal">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.keyTakeaway && (
                  <div className="bg-[#EAF6FD] text-[#123B5D] p-4 rounded-lg border border-[#D7EAF7] text-xs leading-relaxed space-y-1">
                    <span className="font-extrabold uppercase tracking-wider text-[#2F9FEA] block text-[10px]">
                      Key Technical Takeaway
                    </span>
                    <p>{sec.keyTakeaway}</p>
                  </div>
                )}
              </section>
            </AnimateOnScroll>
          ))}

          {/* Conclusion */}
          <AnimateOnScroll type="fade-up" delay={0.2}>
            <div className="bg-[#F5FAFE] text-[#123B5D] p-6 rounded-xl border border-[#D7EAF7] space-y-2">
              <h3 className="font-bold text-sm text-[#2F9FEA]">Conclusion &amp; Regulatory Perspective</h3>
              <p className="text-xs text-[#536B7D] leading-relaxed font-normal">
                {post.content.conclusion}
              </p>
            </div>
          </AnimateOnScroll>

          {/* Tags List */}
          <div className="pt-4 border-t border-[#D7EAF7] flex flex-wrap items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-[#536B7D]" />
            {post.tags.map((tag, i) => (
              <span key={i} className="bg-[#F5FAFE] text-[#123B5D] text-xs font-semibold px-2.5 py-0.5 rounded border border-[#D7EAF7]">
                #{tag}
              </span>
            ))}
          </div>

          {/* Consultation CTA Inside Article */}
          <AnimateOnScroll type="scale-up" delay={0.25}>
            <div className="pt-4 border-t border-[#D7EAF7] bg-[#EAF6FD] p-6 rounded-xl text-[#123B5D] flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#D7EAF7]">
              <div className="space-y-0.5 text-center sm:text-left">
                <h4 className="font-bold text-sm text-[#123B5D]">Have questions about this technology platform?</h4>
                <p className="text-xs text-[#536B7D] font-normal">Consult directly with Founder Raj Thota and our formulation team.</p>
              </div>
              <button
                onClick={openConsultationModal}
                className="bg-[#2F9FEA] hover:bg-[#2389D2] text-white font-extrabold text-xs px-5 py-2.5 rounded-lg transition-colors shrink-0 flex items-center gap-2"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </AnimateOnScroll>

        </article>

        {/* Related Articles Section */}
        <section className="mt-12 space-y-4 text-left">
          <h3 className="text-lg font-extrabold text-[#123B5D]">
            Related Articles &amp; Insights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedPosts.map((rel) => (
              <div
                key={rel.id}
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(`/blogs/${rel.slug}`);
                }}
                className="bg-[#F5FAFE] rounded-xl overflow-hidden border border-[#D7EAF7] hover:border-[#2F9FEA] transition-all cursor-pointer p-4 flex gap-3 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#EAF6FD] text-[#2F9FEA] flex items-center justify-center shrink-0 mt-0.5">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="space-y-1 flex-1">
                  <span className="text-[10px] font-bold text-[#2F9FEA] bg-white px-2 py-0.5 rounded inline-block border border-[#D7EAF7]">
                    {rel.category}
                  </span>
                  <h4 className="font-bold text-xs text-[#123B5D] group-hover:text-[#2F9FEA] transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-[11px] text-[#536B7D]">{rel.readTime}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

    </div>
  );
};
