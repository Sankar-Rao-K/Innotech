import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { InquiryForm } from './InquiryForm';

interface ConsultationModalProps { isOpen: boolean; onClose: () => void; showToast: (msg: string) => void; }

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose, showToast }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:p-4 bg-[#123B5D]/50" role="dialog" aria-modal="true" aria-label="Request an initial discussion" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-t-2xl sm:rounded-xl shadow-xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-[#D7EAF7]">
        <div className="bg-[#F5FAFE] p-6 relative border-b border-[#D7EAF7]">
          <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 p-1.5 rounded-full bg-white border border-[#D7EAF7]"><X className="w-5 h-5" /></button>
          <h3 className="text-2xl font-extrabold text-[#123B5D]">Request an Initial Discussion</h3>
          <p className="text-xs text-[#536B7D] mt-1">Share a few details about your challenge. We will follow up to schedule a confidential discussion with the right InnoTech team members.</p>
        </div>
        <div className="p-6"><InquiryForm variant="modal" showToast={showToast} onDone={onClose} /></div>
      </div>
    </div>
  );
};
