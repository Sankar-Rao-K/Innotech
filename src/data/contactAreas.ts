// Contact page: topic cards (client design) and the form's area choices
export interface ContactArea { name: string; text: string; image: string; starter: string }
export const CONTACT_AREAS: ContactArea[] = [
  { name: 'CMC / Pharmaceutical Development', text: 'Strategy, development planning and regulatory readiness.', image: 'con-8b', starter: 'We need a practical, phase-appropriate CMC development path and independent guidance on strategy and planning.' },
  { name: 'Formulation or Process Development', text: 'Formulation, process development, QbD/DoE and control strategy.', image: 'con-3', starter: 'We are working on formulation and process development and want support with QbD/DoE and control strategy.' },
  { name: 'Scale-Up / Process Optimization', text: 'Scale-up, process optimization and performance improvement.', image: 'con-4', starter: 'We are preparing to scale up a process and need help with optimization and risk reduction before transfer.' },
  { name: 'Project Leadership / Project Execution', text: 'Program leadership, workstream execution and milestone delivery.', image: 'con-5', starter: 'We need experienced technical project leadership to coordinate partners and deliver an upcoming milestone.' },
  { name: 'On-Site Technical Support', text: 'Technical support at client, CDMO or manufacturing sites.', image: 'con-6', starter: 'We would like on-site technical support at a CDMO or manufacturing site during a critical milestone.' },
  { name: 'MS&T / Technical Operations', text: 'Process stewardship, technical governance, troubleshooting and lifecycle support.', image: 'con-7', starter: 'We want to strengthen MS&T / Technical Operations, process stewardship and troubleshooting after launch.' },
  { name: 'Technology Transfer', text: 'End-to-end transfer support and receiving-site readiness.', image: 'con-8', starter: 'We are planning a technology transfer and want to assess receiving-site readiness and close gaps early.' },
  { name: 'Manufacturing Readiness', text: 'Process, equipment, people, systems and evidence readiness.', image: 'con-9', starter: 'We would like an independent check of manufacturing readiness before moving to commercial supply.' },
  { name: 'Validation / PPQ', text: 'Validation strategy, PPQ execution support and technical launch readiness.', image: 'con-10', starter: 'We need support with validation strategy and PPQ execution for an upcoming milestone.' },
  { name: 'Commercial Launch', text: 'Launch readiness and initial commercial stabilization.', image: 'con-20', starter: 'We are approaching launch and need help with technical launch readiness and early commercial stabilization.' },
  { name: 'Lifecycle / Post-Approval Support', text: 'CPV, change support, troubleshooting, supply continuity and cost improvement.', image: 'con-18', starter: 'We need lifecycle support: CPV, post-approval change, troubleshooting or supply continuity for a marketed product.' },
  { name: 'Specialized Products', text: 'Complex oral, modified-release, sterile ophthalmic, injectables/LAIs and drug-device combinations.', image: 'con-19', starter: 'We are developing a complex product (for example an ophthalmic, injectable or combination product) and need guidance.' },
  { name: 'AI & Digital Transformation', text: 'AI-assisted development, digital twins, MES and manufacturing intelligence.', image: 'con-14', starter: 'We want to identify where AI and digital tools can add real value in our development or technical operations.' },
  { name: 'Technical Due Diligence / Advisory', text: 'Independent technical review, risk assessment and strategic advisory for transactions and investments.', image: 'con-15', starter: 'We are evaluating an investment or partnership and need an independent technical and manufacturing risk review.' },
];
export const AREA_OTHER = 'Other';
export const ALL_AREAS = [...CONTACT_AREAS.map(a => a.name), AREA_OTHER];
export const starterFor = (name: string) => CONTACT_AREAS.find(a => a.name === name)?.starter ?? 'The challenge we would like to discuss is: ';
