import { COMPANY_DETAILS } from '../data/siteData';

export interface Inquiry { name: string; company: string; email: string; area: string; challenge: string; }

// No backend exists in this project, so the inquiry opens the visitor's mail client addressed to InnoTech.
// Replace with a POST to a real endpoint (Formspree / EmailJS / Express route) for production.
export function submitInquiry(d: Inquiry) {
  const subject = encodeURIComponent(`Initial Discussion Request: ${d.area}`);
  const body = encodeURIComponent(`Name: ${d.name}\nCompany: ${d.company}\nEmail: ${d.email}\nPrimary Area: ${d.area}\n\nChallenge:\n${d.challenge}`);
  window.location.href = `mailto:${COMPANY_DETAILS.email}?subject=${subject}&body=${body}`;
}
