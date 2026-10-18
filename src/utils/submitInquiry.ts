import { COMPANY_DETAILS } from '../data/siteData';

export interface Inquiry { name: string; company: string; email: string; area: string; challenge: string }

export const inquiryText = (d: Inquiry) =>
  `Name: ${d.name}\nCompany: ${d.company}\nEmail: ${d.email}\nPrimary Area: ${d.area}\n\nChallenge:\n${d.challenge}`;

// The site has no backend, so the request opens the visitor's email app addressed to InnoTech.
// To post to a server instead, replace the body of this function with a fetch() call.
export function submitInquiry(d: Inquiry) {
  const subject = encodeURIComponent(`Initial Discussion Request: ${d.area}`);
  const body = encodeURIComponent(inquiryText(d));
  window.location.href = `mailto:${COMPANY_DETAILS.email}?subject=${subject}&body=${body}`;
}
