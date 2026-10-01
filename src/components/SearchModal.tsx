import React, { useState } from 'react';
import { X, Search, FlaskConical, Dna, FileText } from 'lucide-react';
import { SERVICES_DATA, EXPERTISE_DATA, BLOG_POSTS } from '../data/siteData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  navigate: (route: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, navigate }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const handleSelect = (route: string) => {
    navigate(route);
    onClose();
  };

  const filteredServices = SERVICES_DATA.filter(s => 
    s.title.toLowerCase().includes(query.toLowerCase()) || 
    s.shortDesc.toLowerCase().includes(query.toLowerCase())
  );

  const filteredExpertise = EXPERTISE_DATA.filter(e => 
    e.title.toLowerCase().includes(query.toLowerCase()) || 
    e.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredBlogs = BLOG_POSTS.filter(b => 
    b.title.toLowerCase().includes(query.toLowerCase()) || 
    b.summary.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-[#123B5D]/40 backdrop-blur-xs transition-opacity duration-200">
      <div className="bg-white rounded-xl shadow-xl max-w-xl w-full overflow-hidden border border-[#D7EAF7] max-h-[80vh] flex flex-col transition-all duration-200">
        
        {/* Search Bar Input */}
        <div className="p-3.5 border-b border-[#D7EAF7] flex items-center gap-3 bg-[#F5FAFE]">
          <Search className="w-4 h-4 text-[#2F9FEA] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, expertise, frameworks, insights..."
            className="w-full text-xs bg-transparent border-none focus:outline-none text-[#123B5D] placeholder-[#536B7D]"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#536B7D] hover:text-[#123B5D] hover:bg-[#EAF6FD] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Results */}
        <div className="p-4 overflow-y-auto space-y-4 max-h-[60vh]">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-[#536B7D] text-xs">
              Type keywords like <span className="font-semibold text-[#2F9FEA]">"LAI"</span>, <span className="font-semibold text-[#2F9FEA]">"Formulation"</span>, <span className="font-semibold text-[#2F9FEA]">"QbD"</span>, or <span className="font-semibold text-[#2F9FEA]">"Regulatory"</span> to search across the site.
            </div>
          ) : (
            <>
              {filteredServices.length === 0 && filteredExpertise.length === 0 && filteredBlogs.length === 0 && (
                <div className="text-center py-8 text-[#536B7D] text-xs">
                  No matching results found for "<span className="font-semibold text-[#123B5D]">{query}</span>".
                </div>
              )}

              {filteredServices.length > 0 && (
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#536B7D] block mb-2 px-2">Services</span>
                  <div className="space-y-1">
                    {filteredServices.map(s => (
                      <button
                        key={s.id}
                        onClick={() => handleSelect('/our-services')}
                        className="w-full text-left p-2.5 hover:bg-[#F5FAFE] rounded-lg transition-colors flex items-start gap-2.5 group"
                      >
                        <FlaskConical className="w-4 h-4 text-[#2F9FEA] mt-0.5 shrink-0" />
                        <div>
                          <div className="font-bold text-[#123B5D] text-xs group-hover:text-[#2F9FEA]">{s.title}</div>
                          <div className="text-[11px] text-[#536B7D] line-clamp-1">{s.shortDesc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredExpertise.length > 0 && (
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#536B7D] block mb-2 px-2">Core Expertise</span>
                  <div className="space-y-1">
                    {filteredExpertise.map(e => (
                      <button
                        key={e.id}
                        onClick={() => handleSelect('/our-expertise')}
                        className="w-full text-left p-2.5 hover:bg-[#F5FAFE] rounded-lg transition-colors flex items-start gap-2.5 group"
                      >
                        <Dna className="w-4 h-4 text-[#2F9FEA] mt-0.5 shrink-0" />
                        <div>
                          <div className="font-bold text-[#123B5D] text-xs group-hover:text-[#2F9FEA]">{e.title}</div>
                          <div className="text-[11px] text-[#536B7D] line-clamp-1">{e.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredBlogs.length > 0 && (
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#536B7D] block mb-2 px-2">Blogs &amp; Insights</span>
                  <div className="space-y-1">
                    {filteredBlogs.map(b => (
                      <button
                        key={b.id}
                        onClick={() => handleSelect(`/blogs/${b.slug}`)}
                        className="w-full text-left p-2.5 hover:bg-[#F5FAFE] rounded-lg transition-colors flex items-start gap-2.5 group"
                      >
                        <FileText className="w-4 h-4 text-[#2F9FEA] mt-0.5 shrink-0" />
                        <div>
                          <div className="font-bold text-[#123B5D] text-xs group-hover:text-[#2F9FEA]">{b.title}</div>
                          <div className="text-[11px] text-[#536B7D] line-clamp-1">{b.summary}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
};
