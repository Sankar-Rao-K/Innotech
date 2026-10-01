import React, { useState } from 'react';
import { JOB_OPENINGS, JobOpening } from '../data/siteData';
import { MapPin, Clock, ChevronDown, ChevronUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { AnimateOnScroll } from '../components/AnimateOnScroll';

interface CareersPageProps {
  showToast: (msg: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ showToast }) => {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(JOB_OPENINGS[0]?.id || null);
  const [applyingJob, setApplyingJob] = useState<JobOpening | null>(null);
  const [applicantData, setApplicantData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    coverNote: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    showToast('Application submitted successfully!');
    setTimeout(() => {
      setIsSubmitted(false);
      setApplyingJob(null);
      setApplicantData({ name: '', email: '', phone: '', linkedin: '', coverNote: '' });
    }, 2500);
  };

  return (
    <div className="font-sans text-[#536B7D] bg-white min-h-screen">
      
      {/* Header Banner - Light Sky Blue #EAF6FD */}
      <section className="bg-[#EAF6FD] text-[#123B5D] py-16 border-b border-[#D7EAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <AnimateOnScroll type="fade-down" delay={0.05}>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F9FEA] bg-white px-3 py-1 rounded-md border border-[#D7EAF7]">
              Join Our Scientific Team
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll type="fade-up" delay={0.12}>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#123B5D]">
              Careers at InnoTech BioPharm
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll type="fade-up" delay={0.2}>
            <p className="text-[#536B7D] text-xs sm:text-sm max-w-2xl mx-auto font-normal">
              Shape the future of biopharmaceutical formulation and drug delivery science alongside industry-leading experts.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
          
          <AnimateOnScroll type="fade-up" delay={0.1}>
            <div className="space-y-1">
              <h2 className="text-2xl font-extrabold text-[#123B5D]">Current Open Positions</h2>
              <p className="text-[#536B7D] text-xs">
                We are continually looking for passionate formulation scientists, analytical chemists, and regulatory CMC experts.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="space-y-4">
            {JOB_OPENINGS.map((job) => {
              const isExpanded = expandedJobId === job.id;
              return (
                <div
                  key={job.id}
                  className="bg-[#F5FAFE] rounded-xl border border-[#D7EAF7] overflow-hidden transition-all"
                >
                  <div
                    onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                    className="p-5 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white hover:bg-[#F5FAFE] transition-colors"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F9FEA] bg-[#EAF6FD] px-2.5 py-0.5 rounded inline-block">
                        {job.department}
                      </span>
                      <h3 className="font-extrabold text-base text-[#123B5D]">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#536B7D] font-medium">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#2F9FEA]" />
                          {job.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#2F9FEA]" />
                          {job.type}
                        </span>
                        <span>•</span>
                        <span>{job.experience}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setApplyingJob(job);
                        }}
                        className="bg-[#2F9FEA] hover:bg-[#2389D2] text-white font-extrabold text-xs px-5 py-2.5 rounded-lg transition-colors flex items-center gap-1.5"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="p-1 text-[#536B7D]">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="p-6 border-t border-[#D7EAF7] bg-[#F5FAFE] space-y-4 text-xs text-[#536B7D]">
                      <p className="leading-relaxed font-normal">{job.description}</p>

                      <div className="space-y-2">
                        <h4 className="font-bold text-[#123B5D] uppercase tracking-wider text-[11px]">Key Responsibilities</h4>
                        <ul className="space-y-1.5 pl-1">
                          {job.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#2F9FEA] shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2 pt-2">
                        <h4 className="font-bold text-[#123B5D] uppercase tracking-wider text-[11px]">Requirements</h4>
                        <ul className="space-y-1.5 pl-1">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#2F9FEA] shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Application Modal */}
      {applyingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#123B5D]/40">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 border border-[#D7EAF7] shadow-lg space-y-4">
            <div className="flex items-center justify-between border-b border-[#D7EAF7] pb-3">
              <div>
                <h3 className="font-extrabold text-base text-[#123B5D]">Apply for Position</h3>
                <p className="text-xs font-bold text-[#2F9FEA]">{applyingJob.title}</p>
              </div>
              <button onClick={() => setApplyingJob(null)} className="text-[#536B7D] hover:text-[#123B5D] font-bold text-sm">
                ✕
              </button>
            </div>

            {isSubmitted ? (
              <div className="bg-[#EAF6FD] border border-[#D7EAF7] text-[#123B5D] p-4 rounded-lg flex items-center gap-2 text-xs">
                <CheckCircle2 className="w-5 h-5 text-[#2F9FEA] shrink-0" />
                <span>Application submitted! Our HR team will reach out shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-3 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-[#123B5D]">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={applicantData.name}
                    onChange={(e) => setApplicantData({ ...applicantData, name: e.target.value })}
                    placeholder="Dr. Alex Smith"
                    className="w-full px-3 py-2 bg-[#F5FAFE] rounded border border-[#D7EAF7] focus:outline-none focus:ring-1 focus:ring-[#2F9FEA]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-bold text-[#123B5D]">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={applicantData.email}
                      onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-3 py-2 bg-[#F5FAFE] rounded border border-[#D7EAF7] focus:outline-none focus:ring-1 focus:ring-[#2F9FEA]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#123B5D]">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={applicantData.phone}
                      onChange={(e) => setApplicantData({ ...applicantData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3 py-2 bg-[#F5FAFE] rounded border border-[#D7EAF7] focus:outline-none focus:ring-1 focus:ring-[#2F9FEA]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#123B5D]">LinkedIn Profile URL</label>
                  <input
                    type="url"
                    value={applicantData.linkedin}
                    onChange={(e) => setApplicantData({ ...applicantData, linkedin: e.target.value })}
                    placeholder="https://linkedin.com/in/profile"
                    className="w-full px-3 py-2 bg-[#F5FAFE] rounded border border-[#D7EAF7] focus:outline-none focus:ring-1 focus:ring-[#2F9FEA]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#123B5D]">Cover Note / Background *</label>
                  <textarea
                    rows={3}
                    required
                    value={applicantData.coverNote}
                    onChange={(e) => setApplicantData({ ...applicantData, coverNote: e.target.value })}
                    placeholder="Brief summary of relevant pharmaceutical experience..."
                    className="w-full px-3 py-2 bg-[#F5FAFE] rounded border border-[#D7EAF7] focus:outline-none focus:ring-1 focus:ring-[#2F9FEA]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setApplyingJob(null)}
                    className="px-4 py-2 bg-[#F5FAFE] text-[#536B7D] font-bold rounded hover:bg-[#EAF6FD] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#2F9FEA] hover:bg-[#2389D2] text-white font-extrabold rounded transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
