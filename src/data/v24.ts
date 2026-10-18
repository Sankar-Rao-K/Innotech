// V2.4 website copy — sourced from "InnoTech Website V2.4 Complete Web Builder Package".
import type { PhotoKey } from '../assets/photos';

export const STRAP = 'BUILD PRODUCTS. BUILD MANUFACTURING. BUILD CAPABILITY.';
export const DESCRIPTOR = 'End-to-End Pharmaceutical Development, CMC & Commercialization Support';
export const LINKEDIN = 'https://www.linkedin.com/';

export const HERO_STAGES = ['Development', 'Scale-Up', 'Transfer', 'Validate', 'Commercialize', 'Sustain'];

export const LIFECYCLE = ['Development', 'CMC', 'Scale-Up', 'Technology Transfer', 'Manufacturing Readiness', 'Validation / PPQ', 'Commercial Launch', 'Reliable Supply', 'Lifecycle Management'];

export const STRATEGY_TO_EXECUTION: [string, string][] = [
  ['Advise', 'CMC strategy, commercialization strategy, independent assessment, technical due diligence and executive decision support.'],
  ['Develop', 'Formulation and process development, QbD, process optimization, scale-up, control strategy and CMC development support.'],
  ['Lead & Execute', 'Technical project leadership, workstream coordination, technology transfer, engineering/scale-up support, validation, PPQ, launch and technical problem-solving.'],
  ['Support On-Site', 'Hands-on technical support at development, CDMO and manufacturing sites during critical program milestones.'],
];

export const VALUE_AREAS: { title: string; text: string; to: string }[] = [
  { title: 'CMC Development & Product Development', text: 'Build product and process understanding, development strategy and a scalable path forward.', to: '/our-services#cmc' },
  { title: 'Process Development, Optimization & Scale-Up', text: 'Strengthen process performance and translate development conditions toward manufacturing reality.', to: '/our-expertise#process' },
  { title: 'Project Leadership & Execution Support', text: 'Coordinate technical workstreams, partners, milestones, risks and execution.', to: '/our-services#leadership' },
  { title: 'Technology Transfer & Manufacturing Readiness', text: 'Transfer knowledge and establish reproducible receiving-site capability.', to: '/our-services#transfer' },
  { title: 'MS&T, Validation, PPQ & Commercial Launch', text: 'Build technical stewardship, validation readiness, launch capability and initial commercial supply.', to: '/our-services#validation' },
  { title: 'Lifecycle Management & Technical Operations', text: 'Support CPV, post-approval change, process improvement, troubleshooting and supply continuity.', to: '/our-services#lifecycle' },
  { title: 'Executive Advisory, AI/Digital & Technical Due Diligence', text: 'Support strategic decisions, investment questions, technical risk and digital transformation.', to: '/our-services#advisory' },
];

export const SUPPORT: { title: string; text: string; priority?: boolean }[] = [
  { title: 'Emerging Biotech & Small Pharma', text: 'End-to-end CMC and technical program support without requiring every capability to be built internally.', priority: true },
  { title: 'Virtual / Externally Manufactured Companies', text: 'Product ownership, CDMO coordination, technical governance and execution support.' },
  { title: 'Established Pharmaceutical Organizations', text: 'MS&T, Technical Operations, technology transfer, manufacturing readiness, validation, launch, lifecycle and transformation support.' },
  { title: 'CDMOs & Manufacturing Organizations', text: 'Transfer readiness, process stewardship, validation readiness, technical governance and customer delivery.' },
  { title: 'Investors, Boards & Transaction Teams', text: 'Independent technical due diligence and commercialization-risk assessment.' },
  { title: 'Technology & AI Companies Serving Pharma', text: 'Translate pharmaceutical workflows and GxP realities into useful digital solutions.' },
];

export const DIFFERENCE: [string, string][] = [
  ['Strategy Connected to Execution', 'Recommendations are designed to be implemented.'],
  ['Development Connected to Manufacturing', 'Product/process knowledge is built with scale-up, transfer and manufacturing in mind.'],
  ['Technology Transfer Is Knowledge Transfer', 'Documents describe the process; understanding makes it reproducible.'],
  ['Readiness Is Evidence-Based', 'Calendar progress does not equal manufacturing readiness.'],
  ['Risk Should Be Visible Early', 'Earlier visibility creates more technical and business options.'],
  ['Digital Technology Must Serve the Process', 'AI and digital tools should strengthen pharmaceutical decisions, not replace accountable experts.'],
];

export const FOUNDER_STATS: [string, string][] = [
  ['150+', 'Commercialized Products Supported'],
  ['41', 'FDA Product Approvals'],
  ['$5B+', 'Technical M&A Due Diligence'],
  ['Global', 'Manufacturing & CDMO Leadership'],
  ['~30 yrs', 'Across the Development-to-Commercial Lifecycle'],
];

// ---------------- Insights & Resources ----------------
export type PubType = 'White Paper' | 'Executive Guide' | 'Playbook' | 'Learning Series';
export interface Pub { id: string; title: string; type: PubType; text: string; cover?: string; topics: string[]; featured?: boolean }

export const PUBS: Pub[] = [
  { id: 'gap', title: 'Good AI Practice in Pharma & Biotech', type: 'Executive Guide', cover: 'cover-ai', featured: true, topics: ['AI, Digital Twins & Manufacturing Intelligence'], text: 'Executive interpretation for pharmaceutical and biotechnology development, manufacturing and commercialization.' },
  { id: 'qbd', title: 'The Evolution of QbD', type: 'White Paper', cover: 'cover-qbd', featured: true, topics: ['QbD & Product / Process Development'], text: 'Understand. Predict. Integrate. Sustain.' },
  { id: 'dd', title: 'Investor Technical Due Diligence Series', type: 'Executive Guide', cover: 'cover-dd', featured: true, topics: ['Technical Due Diligence & Investment'], text: 'Connecting technical risk, capital requirements and investment decisions.' },
  { id: 'eye', title: 'Commercializing Sterile Ophthalmic Eye Drops', type: 'Playbook', cover: 'cover-eye', featured: true, topics: ['Sterile, Complex & Combination Products', 'Validation, PPQ & Commercialization'], text: 'Technical Operations and commercialization playbook.' },
  { id: 'els', title: 'Executive Learning Series: From Small Molecules to Biologics', type: 'Learning Series', cover: 'cover-mol', featured: true, topics: ['Leadership & Organizational Capability'], text: 'Building the next generation of commercialization leaders.' },
  { id: 'ent', title: 'Enterprise Commercialization', type: 'White Paper', featured: true, topics: ['Validation, PPQ & Commercialization', 'Lifecycle Management'], text: 'The science of commercialization. Featured as publication-ready content becomes available.' },
  { id: 'cmc', title: 'Early-Stage Biotech CMC Pitfalls', type: 'White Paper', topics: ['Pharmaceutical Development & CMC'], text: 'Legacy technical paper retained for emerging-biotech and external-manufacturing teams.' },
  { id: 'cdmo', title: 'CDMO / CMO Selection', type: 'White Paper', topics: ['Technology Transfer & Manufacturing', 'Pharmaceutical Development & CMC'], text: 'Legacy technical paper on selecting and managing external manufacturing partners.' },
  { id: 'aiqbd', title: 'AI-Assisted QbD & Technology Transfer', type: 'White Paper', topics: ['AI, Digital Twins & Manufacturing Intelligence', 'QbD & Product / Process Development'], text: 'Applying AI to pharmaceutical development and transfer workflows.' },
  { id: 'dd2', title: 'Drug-Device & Autoinjector Combination Products', type: 'White Paper', topics: ['Sterile, Complex & Combination Products'], text: 'Technical perspective on development and commercialization of combination products.' },
];

export const TOPICS = ['Pharmaceutical Development & CMC', 'QbD & Product / Process Development', 'MS&T & Technical Operations', 'Technology Transfer & Manufacturing', 'Validation, PPQ & Commercialization', 'Sterile, Complex & Combination Products', 'AI, Digital Twins & Manufacturing Intelligence', 'Lifecycle Management', 'Technical Due Diligence & Investment', 'Leadership & Organizational Capability'];

export const FRAMEWORKS: [string, string][] = [
  ['Enterprise Commercialization Framework', 'Connect development, CMC, MS&T, manufacturing, launch and lifecycle.'],
  ['Commercialization Planning Framework', 'Integrate technical milestones, manufacturing capability, regulatory needs, supply dependencies and launch readiness.'],
  ['Technology Transfer Readiness Framework', 'Assess knowledge, receiving-site fit, risks, gaps and execution readiness.'],
  ['Manufacturing Readiness Framework', 'Evaluate whether process, equipment, people, systems and evidence can support reliable manufacturing.'],
  ['PPQ & Validation Readiness Framework', 'Connect process understanding, site readiness, evidence and validation execution.'],
  ['Technical Operations Operating Model', 'Define process stewardship, governance, knowledge, performance and lifecycle responsibilities.'],
];

export const ARTICLE_FILTERS = ['CMC Development', 'Formulation', 'QbD', 'Drug Delivery', 'Manufacturing', 'Technology Transfer', 'AI & Digital', 'Commercialization'];
export const ARTICLE_TAGS: Record<string, string[]> = {
  'mastering-long-acting-injectables': ['Drug Delivery', 'Formulation', 'QbD'],
  'qbd-based-approach-to-ocular-drug-delivery': ['QbD', 'Drug Delivery', 'CMC Development'],
  'optimizing-liposomal-drug-delivery': ['Drug Delivery', 'Formulation', 'Manufacturing'],
  'comprehensive-solubility-enhancement-strategies': ['Formulation', 'CMC Development', 'Drug Delivery'],
};
export const ARTICLE_SUBJECTS = ['QbD', 'Osmotic delivery', 'Ion-exchange resin systems', 'Controlled-release products', 'Long-acting injectables', 'Ocular delivery', 'Liposomal delivery', 'Solubility enhancement / spray drying', 'CDMO selection', 'Early-stage CMC', 'AI and pharmaceutical development'];

export const QBD_SERIES: [string, string, string][] = [
  ['Understand', 'Foundational QbD', 'Build scientific understanding and control.'],
  ['Predict', 'Digital-QbD', 'Use analytics, models, AI/ML, PAT and digital twins to strengthen prediction.'],
  ['Integrate', 'Combination-Product QbD', 'Expand the system boundary to drug/biologic, device, container, interfaces, manufacturing/assembly and user.'],
  ['Sustain', 'Enterprise QbD', 'Connect knowledge, control, performance, governance and learning across the lifecycle.'],
];

export const LEARNING_PATH = ['Foundation', 'Drug Substance', 'Drug Product', 'Technology Transfer', 'Scale-Up & Manufacturing', 'Validation & Control', 'Commercialization', 'Leadership'];

export const PERSPECTIVES: [string, string, PhotoKey][] = [
  ['Why Commercialization Risk Should Be Visible Before Launch', 'Early visibility creates more technical and business options, and a stronger path to reliable supply.', 'review'],
  ['Technology Transfer Is Not the Movement of Documents', 'Successful transfer requires knowledge, understanding, people and execution readiness.', 'floor'],
  ['Start with the Pharmaceutical Problem, Not the AI Technology', 'Real value comes from applying AI to well-defined pharmaceutical problems within GxP and business context.', 'data'],
];

export const PRIMARY_AREAS = ['CMC / Pharmaceutical Development', 'Formulation or Process Development', 'Scale-Up / Process Optimization', 'Project Leadership / Project Execution', 'On-Site Technical Support', 'MS&T / Technical Operations', 'Technology Transfer', 'Manufacturing Readiness', 'Validation / PPQ', 'Commercial Launch', 'Lifecycle / Post-Approval Support', 'Specialized Products', 'AI & Digital Transformation', 'Technical Due Diligence / Advisory', 'Other'];

export const ENGAGEMENT_MODELS: [string, string][] = [
  ['Advisory', 'Independent technical or strategic guidance.'],
  ['Project-Based', 'Defined scope, deliverables and milestones.'],
  ['Program Leadership', 'Lead or coordinate a technical / CMC workstream or broader program.'],
  ['Embedded / Fractional Support', "Operate as an extension of the client's technical organization."],
  ['On-Site Support', 'Experienced technical support at development, CDMO or manufacturing sites.'],
  ['Execution & Recovery', 'Hands-on support for development, transfers, scale-up, PPQ, launch, investigations or troubled programs.'],
];

// ---------------- Services (Page 4) ----------------
export interface Feature {
  id: string; title: string; photo: PhotoKey; paras: string[]; scope?: string[]; scopeLabel?: string;
  flow?: string[]; quote?: string; related: [string, string][]; short: string;
}
const X = '/our-expertise', I = '/insights';
export const SERVICES: Feature[] = [
  { id: 'cmc', short: 'CMC Development', title: 'CMC Development & Product Development Support', photo: 'formulation',
    paras: ['Support emerging biotech, small pharma and other organizations in building a practical, phase-appropriate CMC development path.', 'Where specialized laboratory testing is required, InnoTech can help define, coordinate and oversee work through qualified laboratories or development partners.'],
    scopeLabel: 'Potential scope', scope: ['CMC strategy', 'Formulation/process development support', 'QbD / DoE', 'Process optimization', 'Control strategy', 'Scale-up', 'Analytical/stability strategy coordination', 'Development planning', 'Regulatory CMC / Module 3 support', 'Vendor/CDMO oversight'],
    related: [['Related expertise', X + '#cmc'], ['Related insights', I]] },
  { id: 'leadership', short: 'Project Leadership', title: 'Project Leadership & Project Execution', photo: 'team',
    paras: ['Provide experienced technical leadership to convert strategy into an executable program.', 'Engagements can range from a defined workstream to broader program leadership.'],
    scopeLabel: 'Support may include', scope: ['Integrated project plans', 'Technical workstream leadership', 'CRO/CDMO coordination', 'Risk registers', 'Milestone management', 'Cross-functional decision-making', 'Meeting leadership', 'Technical issue resolution', 'Executive escalation'],
    related: [['Related expertise', X + '#leadership'], ['Related insights', I]] },
  { id: 'onsite', short: 'On-Site Support', title: 'On-Site Technical & Manufacturing Support', photo: 'floor',
    paras: ['Provide hands-on support at client, CDMO or manufacturing sites when critical milestones require experienced technical presence.', 'On-site support is matched to the product, site, milestone and required expertise.'],
    scopeLabel: 'Potential support', scope: ['Scale-up and engineering batches', 'Equipment/process fit', 'Technology transfer', 'Manufacturing troubleshooting', 'Investigations', 'Validation / PPQ execution support', 'Launch support', 'Early commercial stabilization'],
    related: [['Related expertise', X + '#process'], ['Related insights', I]] },
  { id: 'transfer', short: 'Technology Transfer', title: 'Technology Transfer & Manufacturing Readiness', photo: 'plant',
    paras: ['Support the end-to-end transition from sending-site knowledge to receiving-site manufacturing capability.', 'Support may include transfer strategy, risk assessment, process/equipment fit, knowledge-transfer structure, readiness reviews, engineering/scale-up support, validation preparation and early commercial stabilization.'],
    flow: ['Plan', 'Capture knowledge', 'Assess receiving-site fit', 'Close gaps', 'Build readiness', 'Demonstrate', 'Validate', 'Launch', 'Sustain'],
    related: [['Related expertise', X + '#transfer'], ['Related insights', I + '#frameworks']] },
  { id: 'mst', short: 'MS&T & TechOps', title: 'MS&T & Technical Operations Support', photo: 'analytical',
    paras: ['Support or strengthen the technical stewardship required across commercial manufacturing.', 'Support can be project-based, embedded or transformation-oriented.'],
    scopeLabel: 'Areas include', scope: ['Process stewardship', 'Technical governance', 'CPV', 'Knowledge management', 'Escalation', 'Technical investigations', 'Troubleshooting', 'Process improvement', 'Lifecycle change', 'Interfaces with Manufacturing, Quality, Engineering, Regulatory and Supply'],
    related: [['Related expertise', X + '#mst'], ['Related insights', I]] },
  { id: 'validation', short: 'Validation & Launch', title: 'Validation, PPQ & Commercial Launch', photo: 'vials',
    paras: ['Connect process validation with broader commercialization readiness.', 'Support may include validation strategy, readiness review, PPQ planning/execution support, issue management, technical launch readiness and initial commercial stabilization.'],
    flow: ['Process understanding', 'Manufacturing readiness', 'PPQ readiness', 'Validation', 'Technical launch', 'Initial commercial supply'],
    quote: 'PPQ demonstrates the process. Commercialization demonstrates the system.',
    related: [['Related expertise', X + '#validation'], ['Related insights', I]] },
  { id: 'specialized', short: 'Specialized Products', title: 'Specialized Product Development & Commercialization', photo: 'device',
    paras: ['Focused support for complex oral and modified-release products, sterile ophthalmics, injectables/LAIs and drug-device combination products.', 'Engagements may address development, process optimization, scale-up, technology transfer, manufacturing readiness, validation, launch, lifecycle management and technical recovery.'],
    related: [['Related expertise', X + '#specialized'], ['Related insights', I]] },
  { id: 'lifecycle', short: 'Lifecycle', title: 'Lifecycle Management & Post-Approval Support', photo: 'warehouse',
    paras: ['Support products after launch as manufacturing knowledge, regulatory commitments, sites, equipment, processes and supply requirements evolve.'],
    scope: ['CPV', 'Process optimization', 'Post-approval CMC change support', 'Site / equipment changes', 'Product transfers', 'Manufacturing troubleshooting', 'Cost & productivity improvement', 'Supply continuity', 'Technical risk management'],
    related: [['Related expertise', X + '#validation'], ['Related insights', I]] },
  { id: 'advisory', short: 'Advisory & AI', title: 'Executive Advisory, Technical Due Diligence & AI/Digital', photo: 'exec',
    paras: ['Independent support for leadership teams, boards, investors, transactions and technical programs requiring rapid clarity or specialized strategic perspective.'],
    scope: ['Technical due diligence', 'Commercialization risk', 'CMC / manufacturing assessment', 'AI opportunity & readiness', 'AI-assisted QbD', 'AI-assisted technology transfer', 'Digital twins', 'MES', 'Knowledge management', 'Manufacturing intelligence', 'Good AI Practice'],
    quote: 'Pharmaceutical expertise first. Digital technology applied with purpose.',
    related: [['Related expertise', X + '#ai'], ['Related insights', I]] },
];

// ---------------- Expertise (Page 3) ----------------
export const EXPERTISE: Feature[] = [
  { id: 'cmc', short: 'CMC & Development', title: 'CMC & Pharmaceutical Development', photo: 'formulation',
    paras: ['Support product and process development with commercialization in mind.'],
    scopeLabel: 'Focus areas', scope: ['CMC strategy', 'Formulation development', 'Process development', 'QbD', 'Risk assessment', 'DoE strategy', 'Control strategy', 'Scale-up/scale-down', 'Process characterization', 'Development/manufacturing feasibility', 'Clinical-to-commercial planning', 'Regulatory CMC / Module 3 support'],
    related: [['Related service', '/our-services#cmc'], ['Related insights', I]] },
  { id: 'process', short: 'Process & Scale-Up', title: 'Process Development, Optimization & Scale-Up', photo: 'tablets',
    paras: ['Translate laboratory and development knowledge toward robust manufacturing.'],
    scopeLabel: 'Support includes', scope: ['Process optimization', 'Scale-up strategy', 'Equipment/process understanding', 'Engineering batches', 'Troubleshooting', 'Process characterization', 'Risk reduction before transfer or validation'],
    related: [['Related service', '/our-services#onsite'], ['Related insights', I]] },
  { id: 'leadership', short: 'Leadership & Execution', title: 'Project Leadership & Technical Execution', photo: 'team',
    paras: ['Translate technical strategy into coordinated execution across internal teams, CROs, CDMOs, manufacturing sites, Quality, Regulatory and external partners.'],
    scopeLabel: 'Areas include', scope: ['Project planning', 'Technical workstreams', 'Development execution', 'Partner coordination', 'Risk management', 'Milestone management', 'Technical decisions', 'Issue resolution'],
    related: [['Related service', '/our-services#leadership'], ['Related insights', I]] },
  { id: 'mst', short: 'MS&T & TechOps', title: 'MS&T & Technical Operations', photo: 'floor',
    paras: ['Build and support technical stewardship after development.'],
    scopeLabel: 'Areas include', scope: ['Process ownership', 'Manufacturing science', 'CPV', 'Technical governance', 'Deviation/trend understanding', 'Lifecycle improvement', 'Knowledge management', 'Cross-functional technical decision-making'],
    related: [['Related service', '/our-services#mst'], ['Related insights', I]] },
  { id: 'transfer', short: 'Technology Transfer', title: 'Technology Transfer & Manufacturing Readiness', photo: 'plant',
    paras: ['Transfer product knowledge, process understanding, analytical capability, control strategy and manufacturing experience, not just documents.'],
    scopeLabel: 'Assess', scope: ['Receiving-site fit', 'Equipment/process gaps', 'Knowledge transfer', 'Risk', 'Engineering readiness', 'Training', 'Execution readiness'],
    related: [['Related service', '/our-services#transfer'], ['Related insights', I + '#frameworks']] },
  { id: 'validation', short: 'Validation & Lifecycle', title: 'Validation, Launch & Lifecycle Management', photo: 'vials',
    paras: ['Integrate validation strategy with manufacturing and organizational readiness.'],
    scopeLabel: 'Support includes', scope: ['PPQ readiness', 'Process validation', 'Technical launch', 'Initial commercial supply', 'Post-approval change', 'CPV', 'Process improvement', 'Lifecycle transition'],
    related: [['Related service', '/our-services#validation'], ['Related insights', I]] },
  { id: 'specialized', short: 'Specialized Products', title: 'Specialized Products & Delivery Systems', photo: 'device',
    paras: ['Experience includes complex oral and modified-release products, sterile ophthalmic solutions, injectable/long-acting injectable programs and drug-device combination products.', 'Support is tailored to the actual product, process, delivery system and manufacturing environment.'],
    related: [['Related service', '/our-services#specialized'], ['Related insights', I]] },
  { id: 'ai', short: 'AI, Digital & DD', title: 'AI, Digital & Technical Due Diligence', photo: 'data',
    paras: ['Apply AI, digital twins, MES, analytics and knowledge-management approaches to pharmaceutical workflows; and evaluate product, process, manufacturing, CMC, supply and commercialization risks for business decisions.'],
    related: [['Related service', '/our-services#advisory'], ['Related insights', I]] },
];

export const TRIGGERS = [
  'A product or formulation needs a practical CMC development path.',
  'Internal technical resources are limited or a program needs experienced project leadership.',
  'A development, scale-up, transfer, engineering, validation or PPQ milestone requires execution support.',
  'On-site technical support is needed at a client, CDMO or manufacturing facility.',
  'A product is moving from development toward commercial scale.',
  'A technology transfer or receiving-site readiness decision is approaching.',
  'PPQ, validation, launch or initial commercial supply is at risk.',
  'A CDMO or manufacturing network needs stronger technical oversight.',
  'Recurring manufacturing problems require independent assessment and hands-on remediation.',
  'MS&T / Technical Operations capability needs to be built or transformed.',
  'Leadership needs a clearer technical-risk view before an investment or transaction.',
  'AI/digital opportunities need prioritization within real pharmaceutical workflows.',
];

export const OTHER_ORGS: [string, string][] = [
  ['Virtual / Externally Manufactured Companies', "Function as an experienced extension of the technical organization, coordinating CMC, CDMOs, manufacturing partners and critical technical milestones."],
  ['Established Pharmaceutical Organizations', 'Strengthen MS&T, Technical Operations, technology transfer, launch readiness, lifecycle performance or transformation.'],
  ['CDMOs & Manufacturing Organizations', 'Improve transfer readiness, process stewardship, technical governance, validation readiness and customer delivery.'],
  ['Investors, Boards & Transaction Teams', 'Understand technical risk, manufacturing readiness, commercialization exposure and value-creation priorities.'],
  ['Technology & AI Companies Serving Pharma', 'Translate pharmaceutical workflows, GxP expectations and commercialization needs into useful digital solutions.'],
];

export const HOW_WE_PARTNER = ['CMC Development Support', 'Project Leadership', 'Project Execution', 'On-Site Technical Support', 'Executive Advisory', 'Independent Technical Review', 'Readiness Assessment', 'Technical Recovery & Capability Building'];
