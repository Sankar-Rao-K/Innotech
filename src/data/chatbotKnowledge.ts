// InnoTech BioPharm Solutions: chatbot knowledge base (runs fully in the browser, no external API).
import { COMPANY_DETAILS } from './siteData';
import { PUBLICATIONS } from './publications';

export interface KBEntry {
  id: string;
  keywords: string[];          // single words or phrases
  answer: string;              // supports **bold**, line breaks and "• " bullets
  more?: string;               // shown when the visitor asks for "more"
  route?: string;
  routeLabel?: string;
  follow?: string[];           // suggested follow-up questions
}

const C = COMPANY_DETAILS;

export const ENTRIES: KBEntry[] = [
  { id: 'about', keywords: ['about', 'who are you', 'who is innotech', 'what do you do', 'company', 'innotech', 'firm', 'overview', 'what is innotech'],
    answer: '**InnoTech BioPharm Solutions** is an executive advisory firm that helps pharmaceutical and biotechnology organizations turn scientific knowledge into manufacturing capability, commercialization readiness, and reliable product supply.\n\nOur belief: a product is commercialized when the organization can manufacture and supply it reliably, not when development ends.',
    more: 'We work across CMC, MS&T, Technical Operations, technology transfer, validation and launch, specialized products, and AI & digital transformation.',
    route: '/about-us', routeLabel: 'About InnoTech', follow: ['What services do you offer?', 'Who is the founder?', 'Who do you work with?'] },
  { id: 'founder', keywords: ['founder', 'raj', 'thota', 'raj thota', 'principal advisor', 'leadership', 'ceo', 'who leads', 'experience', 'fda approvals', 'career'],
    answer: '**Raj Thota, MBA, MS (Pharmaceutics)** is Founder & Principal Advisor. He brings nearly three decades across pharmaceutical development, CMC, MS&T, Technical Operations, global manufacturing, technology transfer, validation, site leadership and executive advisory.\n\n• 150+ commercialized products supported\n• 41 FDA product approvals\n• $5B+ in technical M&A due diligence\n• Global manufacturing and CDMO leadership',
    route: '/our-founder', routeLabel: 'Meet the Founder', follow: ['Book a meeting', 'What is your framework?'] },
  { id: 'services', keywords: ['services', 'service', 'offer', 'offerings', 'what can i hire', 'hire', 'help with', 'consulting', 'what do you offer'],
    answer: 'You can hire InnoTech for seven kinds of work:\n• **01** Commercialization Readiness Assessments\n• **02** Technology Transfer & Commercialization Execution\n• **03** MS&T & Technical Operations Transformation\n• **04** Validation, PPQ & Technical Launch\n• **05** Specialized Products & Delivery Systems\n• **06** AI & Digital Transformation\n• **07** Executive Advisory, Due Diligence & Recovery',
    route: '/our-services', routeLabel: 'View all services', follow: ['Readiness assessments', 'Technology transfer', 'AI & digital services'] },
  { id: 'svc-readiness', keywords: ['readiness assessment', 'assessment', 'assessments', 'readiness', 'cmc readiness', 'health check', 'cdmo readiness', '30 60 90'],
    answer: '**Commercialization Readiness Assessments** are independent, structured reviews that show whether your product, process, manufacturing organization, evidence and governance are ready for the next milestone.\n\nAvailable: CMC, Technology Transfer, Manufacturing, PPQ, Technical Launch, Technical Operations Health Check and CDMO readiness.\n\nTypical output: an executive readiness view, critical gaps and risk priorities, decision points and owners, and 30/60/90-day actions.',
    route: '/our-services', routeLabel: 'See Services', follow: ['What is the readiness scale?', 'How do I get started?'] },
  { id: 'svc-transfer', keywords: ['technology transfer', 'tech transfer', 'transfer', 'receiving site', 'sending site', 'scale up', 'scale-up', 'site transfer'],
    answer: '**Technology Transfer & Commercialization Execution** supports the end-to-end move from sending-site knowledge to receiving-site manufacturing capability.\n\nThe path: Plan → Capture Knowledge → Assess Receiving-Site Fit → Close Gaps → Build Readiness → Demonstrate → Validate → Launch → Sustain.\n\nOur view: documents explain what to do; process understanding explains why.',
    route: '/our-services', routeLabel: 'See Services', follow: ['Technology Transfer Readiness Framework', 'Book a meeting'] },
  { id: 'svc-mst', keywords: ['ms&t', 'mst', 'ms t', 'technical operations', 'tech ops', 'process stewardship', 'cpv', 'continued process verification', 'technical governance', 'operating model'],
    answer: '**MS&T & Technical Operations Transformation** assesses and strengthens the operating model for technical stewardship across commercial manufacturing: organization design, process stewardship, technical governance, CPV, knowledge management, deviation/trend understanding and lifecycle improvement.\n\nMaturity path: Reactive → Stable → Proactive → Predictive → Leading.',
    route: '/our-services', routeLabel: 'See Services', follow: ['Technical Operations Operating Model'] },
  { id: 'svc-ppq', keywords: ['ppq', 'process performance qualification', 'validation', 'technical launch', 'launch', 'process validation', 'initial commercial supply'],
    answer: '**Validation, PPQ & Technical Launch** connects process validation with broader commercialization readiness: Process Understanding → Manufacturing Readiness → PPQ Readiness → Validation → Technical Launch → Initial Commercial Supply.\n\n"PPQ demonstrates the process. Commercialization demonstrates the system."',
    route: '/our-services', routeLabel: 'See Services', follow: ['PPQ Readiness Framework', 'Inspection readiness'] },
  { id: 'svc-specialized', keywords: ['specialized', 'specialised', 'lai', 'lais', 'long acting', 'long-acting', 'injectable', 'injectables', 'ophthalmic', 'eye drops', 'ocular', 'combination product', 'drug device', 'modified release', 'oral', 'liposomal', 'complex'],
    answer: '**Specialized Products & Delivery Systems**: focused support for complex oral and modified-release products, sterile ophthalmic solutions, injectables and long-acting injectables (LAIs), and drug-device combination products, covering scale-up, technology transfer, manufacturing readiness, validation, launch, lifecycle and technical recovery.\n\nWe also have publications on LAIs, ocular delivery and liposomes.',
    route: '/our-services', routeLabel: 'See Services', follow: ['Show me publications on LAIs', 'Ocular drug delivery paper'] },
  { id: 'svc-ai', keywords: ['ai', 'artificial intelligence', 'digital', 'digital twin', 'digital twins', 'mes', 'good ai practice', 'machine learning', 'analytics', 'automation', 'digital transformation', 'knowledge management'],
    answer: '**AI & Digital Transformation** helps pharmaceutical organizations find where AI and digital tools can improve technical decisions, knowledge transfer, manufacturing insight and commercialization performance, while preserving scientific, Quality and GxP accountability.\n\nTopics: AI opportunity & readiness, AI-assisted QbD and technology transfer, digital twins, MES, knowledge management, manufacturing intelligence and Good AI Practice.\n\nOpportunity screen: business value, technical feasibility, data readiness, GxP risk.',
    route: '/our-services', routeLabel: 'See Services', follow: ['AI frameworks', 'How AI is revolutionizing biopharma'] },
  { id: 'svc-advisory', keywords: ['due diligence', 'executive advisory', 'recovery', 'investor', 'investors', 'transaction', 'm&a', 'acquisition', 'board', 'technical recovery', 'rapid clarity', 'investment'],
    answer: '**Executive Advisory, Due Diligence & Recovery** gives leadership teams, boards, investors and transaction teams independent clarity on technical risk, quantifies the business consequence, sets decision priorities and builds a practical path forward.\n\nApproach: Stabilize → Diagnose → Prioritize → Remediate → Verify → Sustain.',
    route: '/our-services', routeLabel: 'See Services', follow: ['Book a meeting', 'Engagement models'] },
  { id: 'expertise', keywords: ['expertise', 'capabilities', 'capability', 'areas', 'specialities', 'specialties', 'cmc', 'late stage', 'late-stage', 'formulation', 'process development'],
    answer: 'Our expertise covers seven areas:\n• CMC & Late-Stage Development\n• MS&T & Technical Operations\n• Technology Transfer & Manufacturing Readiness\n• Validation, Launch & Commercialization\n• Specialized Products & Delivery Systems\n• AI & Digital Technical Operations\n• Technical Due Diligence & Executive Advisory',
    route: '/our-expertise', routeLabel: 'View Expertise', follow: ['What services do you offer?', 'What is CMC?'] },
  { id: 'framework', keywords: ['framework', 'enterprise commercialization', 'understand build transfer', 'stages', 'commercialization framework', 'enterprise framework', 'enablers'],
    answer: 'The **InnoTech Enterprise Commercialization Framework** runs in eight stages: **Understand** (Development) → **Build** (CMC) → **Transfer** (MS&T) → **Ready** (Engineering) → **Validate** (Manufacturing) → **Launch** (Quality) → **Supply** (Supply Chain) → **Sustain** (Commercial).\n\nEnterprise enablers: Governance, Risk Management, Knowledge Management, AI & Digital.',
    route: '/frameworks', routeLabel: 'Explore the Framework', follow: ['Framework library', 'Readiness scale'] },
  { id: 'library', keywords: ['framework library', 'library', 'planning framework', 'manufacturing readiness framework', 'inspection readiness', 'launch readiness', 'cmc governance', 'operating model', 'tools', 'executive tools', 'scorecard', 'roadmap'],
    answer: 'The **Framework Library** has nine tools: Commercialization Planning, Technology Transfer Readiness, Manufacturing Readiness, PPQ Readiness, Technical Launch Readiness, Technical Operations Operating Model, CMC Governance, Inspection Readiness, and Commercial Supply & Lifecycle.\n\nEach includes key elements, decision criteria and tools that can be tailored to your organization.',
    route: '/frameworks', routeLabel: 'Open Frameworks', follow: ['What is the readiness scale?', 'AI frameworks'] },
  { id: 'scale', keywords: ['readiness scale', 'scale', 'critical', 'at risk', 'developing', 'leading', 'decision outcomes', 'advance', 'escalate', 'hold'],
    answer: 'The **Executive Readiness Scale** has five levels: **Critical** (significant gaps), **At Risk** (material gaps), **Developing** (some gaps remain), **Ready** (manageable gaps) and **Leading** (best-in-class).\n\nDecision outcomes: Advance, Advance With Conditions, Hold, Escalate.',
    route: '/frameworks', routeLabel: 'Open Frameworks' },
  { id: 'aifw', keywords: ['ai frameworks', 'ai-assisted qbd', 'digital twin value', 'technical knowledge management', 'ai maturity'],
    answer: 'Our **AI & Digital Transformation Frameworks**: AI-Assisted QbD, AI-Assisted Technology Transfer, Good AI Practice in Pharma & Biotech, Digital Twin Value Framework, MES & Connected Technical Operations, Technical Knowledge Management, and AI-Enabled Technical Operations Maturity.',
    route: '/frameworks', routeLabel: 'Open Frameworks' },
  { id: 'clients', keywords: ['who do you work with', 'clients', 'client', 'customers', 'organizations', 'startup', 'startups', 'biotech', 'virtual', 'cdmo', 'cdmos', 'partners', 'who do you help', 'who we work with'],
    answer: 'We support:\n• Emerging & growth-stage pharma/biotech\n• Established pharmaceutical organizations\n• Virtual / externally manufactured companies\n• CDMOs & manufacturing organizations\n• Investors, boards & transaction teams\n• Technology & AI companies serving pharma',
    route: '/our-partners', routeLabel: 'Who We Work With', follow: ['When do organizations engage you?', 'Engagement models'] },
  { id: 'engage', keywords: ['when do organizations engage', 'when to engage', 'when should i contact', 'when to call', 'signs', 'when do clients engage'],
    answer: 'Organizations typically engage InnoTech when a product is moving toward commercial scale, a technology transfer or receiving-site decision is approaching, PPQ/validation/launch is at risk, a CDMO needs stronger oversight, recurring manufacturing problems need independent assessment, or leadership needs a clear view of technical risk before a transaction.',
    route: '/our-partners', routeLabel: 'Who We Work With' },
  { id: 'models', keywords: ['engagement model', 'engagement models', 'how do you work', 'how we work', 'process', 'approach', 'how does it work', 'how we partner', 'working model', 'conversation work'],
    answer: 'We work through six engagement models: Executive Advisory, Readiness Assessment, Program Support, Independent Review, Technical Recovery and Capability Building.\n\nOur approach is **Assess → Align → Build → Execute → Sustain**. A first conversation follows three steps: **Review** the challenge, **Discuss** the question and decision, then **Define** scope, timing and confidentiality.',
    route: '/our-services', routeLabel: 'See Engagement Models', follow: ['How do I get started?', 'Book a meeting'] },
  { id: 'pricing', keywords: ['price', 'pricing', 'cost', 'costs', 'quote', 'fee', 'fees', 'rates', 'budget', 'how much', 'proposal', 'charge'],
    answer: 'Engagement scope and pricing are matched to the decision, milestone, risk and capability required, so we do not publish fixed rates. Share a brief, high-level description of your challenge and the team will follow up to scope it.',
    follow: ['How do I get started?', 'Book a meeting'] },
  { id: 'start', keywords: ['get started', 'start', 'begin', 'request discussion', 'initial discussion', 'consultation', 'consult', 'talk to someone', 'speak to someone', 'next step', 'next steps', 'enquiry', 'inquiry'],
    answer: 'The easiest way to begin is the **Request an Initial Discussion** form: tell us your name, organization, primary area and a brief, high-level description of the challenge. We will follow up to schedule a confidential discussion with the right InnoTech team members.\n\nPlease do not include confidential or proprietary technical details in the form.',
    follow: ['Is my information confidential?', 'Book a meeting'] },
  { id: 'meeting', keywords: ['book', 'schedule', 'appointment', 'meeting', 'call with raj', 'meet', 'calendar', 'book a call', 'web conference', 'video call'],
    answer: 'You can book a web conference directly with Raj Thota using the scheduling link below, or send an initial discussion request and the team will reach out.' },
  { id: 'contact', keywords: ['contact', 'email', 'e-mail', 'phone', 'call', 'reach', 'address', 'location', 'office', 'where are you', 'located', 'hours', 'working hours', 'mail', 'number', 'oswego', 'illinois'],
    answer: `**Contact InnoTech**\n• Email: ${C.email}\n• Phone: ${C.phone}\n• Address: ${C.address}\n• Hours: ${C.workingHours}` },
  { id: 'confidential', keywords: ['confidential', 'confidentiality', 'nda', 'proprietary', 'secure', 'privacy', 'safe', 'sensitive', 'data'],
    answer: 'Please do not submit confidential, proprietary, unpublished technical, clinical, regulatory, formulation, process or manufacturing information through the website form or this chat. A high-level description is enough to start, and appropriate confidentiality arrangements can be put in place before substantive proprietary information is shared.',
    route: '/privacy-policy', routeLabel: 'Privacy Policy' },
  { id: 'insights', keywords: ['insights', 'publications', 'publication', 'white paper', 'white papers', 'whitepaper', 'blog', 'blogs', 'resources', 'books', 'book', 'articles', 'article', 'read', 'download', 'pdf', 'papers'],
    answer: `Our **Executive Insights** library has ${PUBLICATIONS.length} publications (${PUBLICATIONS.filter(p => p.type === 'White Paper').length} white papers and ${PUBLICATIONS.filter(p => p.type === 'Blog').length} blogs) by Raj Thota on QbD, solubility, spray drying, CMO/CDMO selection, ocular delivery, LAIs, liposomes, AI, controlled release, CMC pitfalls and more. Each can be read online or downloaded as a PDF.`,
    route: '/insights', routeLabel: 'Browse Insights', follow: ['Show me white papers', 'Latest publications', 'CMO/CDMO selection paper'] },
  { id: 'latest', keywords: ['latest', 'newest', 'recent', 'new publications', 'latest publications'],
    answer: 'The most recent publications:\n' + [...PUBLICATIONS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4).map(p => `• ${p.title}`).join('\n'),
    route: '/insights', routeLabel: 'Browse Insights' },
  { id: 'whitepapers', keywords: ['show me white papers', 'list white papers', 'all white papers'],
    answer: 'White papers:\n' + PUBLICATIONS.filter(p => p.type === 'White Paper').map(p => `• ${p.title}`).join('\n'),
    route: '/insights', routeLabel: 'Browse Insights' },
  { id: 'careers', keywords: ['careers', 'career', 'jobs', 'job', 'hiring', 'vacancy', 'vacancies', 'work for you', 'join', 'internship', 'resume', 'openings'],
    answer: `We do not list open positions on the website. If you would like to be considered for future opportunities, email your resume to ${C.email}.` },
  { id: 'hello', keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings', 'hola', 'namaste'],
    answer: 'Hello! I can tell you about InnoTech\'s services, expertise, frameworks, publications, or help you get in touch. What would you like to know?',
    follow: ['What services do you offer?', 'What is your framework?', 'Browse publications', 'Contact the team'] },
  { id: 'thanks', keywords: ['thanks', 'thank you', 'thankyou', 'thx', 'great', 'awesome', 'perfect', 'helpful', 'cool'],
    answer: 'You are welcome! Is there anything else I can help you with?', follow: ['Contact the team', 'Browse publications'] },
  { id: 'bye', keywords: ['bye', 'goodbye', 'see you', 'later', 'good night', 'exit', 'quit'],
    answer: 'Thank you for visiting InnoTech BioPharm Solutions. Reach out any time, and good luck with your commercialization journey!' },
  { id: 'human', keywords: ['human', 'agent', 'representative', 'real person', 'talk to a person', 'support', 'speak to a person', 'live chat', 'someone'],
    answer: `I am an automated assistant, but you can reach the team directly:\n• Email: ${C.email}\n• Phone: ${C.phone}\nOr request an initial discussion and they will follow up.` },
];

// publication entries are generated from the real publication data
const STOP = new Set(['the', 'and', 'for', 'with', 'from', 'drug', 'product', 'based', 'development', 'qbd', 'pharma', 'biotech', 'strategies', 'key', 'how', 'its', 'are', 'right']);
const EXTRA: Record<string, string[]> = {
  'selecting-cmo-cdmo': ['choose cdmo', 'select cdmo', 'selecting cdmo', 'cdmo', 'cmo', 'contract manufacturer', 'outsourcing', 'manufacturing partner', 'choose a cdmo'],
  'ai-revolutionizing-biopharma': ['ai', 'artificial intelligence', 'machine learning', 'drug discovery', 'clinical trials ai'],
  'solubility-enhancement': ['solubility', 'poorly soluble', 'bioavailability', 'nanocrystal', 'lipid based', 'sedds'],
  'spray-drying-qbd': ['spray drying', 'spray dried', 'dissolution', 'amorphous'],
  'liposomal-qbd': ['liposome', 'liposomes', 'liposomal', 'doxorubicin', 'nanoparticle'],
  'ocular-drug-delivery': ['ocular', 'eye', 'ophthalmic', 'hydrogel', 'eye drops'],
  'long-acting-injectables': ['lai', 'lais', 'long acting injectable', 'long-acting injectables', 'depot', 'plga'],
  'controlled-release-qbd': ['controlled release', 'extended release', 'sustained release', 'modified release'],
  'osmotic-delivery-qbd': ['osmotic', 'laser drilling', 'semi permeable'],
  'ion-exchange-resin-suspension': ['ion exchange', 'resin', 'suspension', 'coated resin'],
  'cmc-pitfalls-biotech': ['pitfalls', 'mistakes', 'early stage', 'startup', 'biotech cmc', 'cmc pitfalls'],
  'complex-generic-shortage': ['shortage', 'shortages', 'complex generic', 'complex generics', 'supply crisis', 'drug shortage'],
};
export const PUBLICATION_ENTRIES: KBEntry[] = PUBLICATIONS.map(p => ({
  id: 'pub-' + p.slug,
  keywords: [...(EXTRA[p.slug] || []), p.slug.replace(/-/g, ' '), ...p.title.toLowerCase().replace(/[^a-z0-9/ ]/g, ' ').split(' ').filter(w => w.length > 3 && !STOP.has(w))].slice(0, 20),
  answer: `**${p.title}**\n${p.type} · ${p.pages} pages · by ${p.author}\n\n${p.summary}\n\nKey takeaways:\n${p.takeaways.map(t => '• ' + t).join('\n')}`,
  route: `/insights/${p.slug}`, routeLabel: 'Read this publication', follow: ['Browse publications', 'Contact the team'],
}));

export interface Term { term: string; keys: string[]; text: string }
export const GLOSSARY: Term[] = [
  { term: 'CMC', keys: ['cmc', 'chemistry manufacturing and controls', 'chemistry manufacturing controls'], text: '**CMC (Chemistry, Manufacturing and Controls)** covers everything that shows a drug can be made consistently with the right quality: formulation, process, analytics, specifications, stability and the regulatory CMC (Module 3) package.' },
  { term: 'QbD', keys: ['qbd', 'quality by design'], text: '**QbD (Quality by Design)** is a science- and risk-based approach to development: define the target product profile and critical quality attributes, understand material and process variables, and build a control strategy that delivers reproducible quality.' },
  { term: 'MS&T', keys: ['ms&t', 'mst', 'manufacturing science and technology', 'manufacturing science'], text: '**MS&T (Manufacturing Science & Technology)** is the technical stewardship function after development: process ownership, trend understanding, CPV, technical governance and lifecycle improvement.' },
  { term: 'PPQ', keys: ['ppq', 'process performance qualification'], text: '**PPQ (Process Performance Qualification)** is the validation stage that demonstrates a commercial process performs reproducibly at scale.' },
  { term: 'CPV', keys: ['cpv', 'continued process verification', 'continuous process verification'], text: '**CPV (Continued Process Verification)** is ongoing monitoring of commercial process performance to confirm it stays in a state of control.' },
  { term: 'CDMO', keys: ['cdmo', 'cmo', 'contract manufacturing'], text: '**CDMO / CMO** are contract development and manufacturing organizations that develop or manufacture products on behalf of pharma and biotech companies. See our white paper on selecting the right CMO/CDMO.' },
  { term: 'LAI', keys: ['lai', 'lais', 'long acting injectable', 'long-acting injectables'], text: '**LAIs (Long-Acting Injectables)** are injectable products that release drug over days to months, reducing dosing frequency and improving adherence.' },
  { term: 'Technology transfer', keys: ['technology transfer', 'tech transfer'], text: '**Technology transfer** moves product and process knowledge from a sending site (often development) to a receiving site so that the process is reproduced reliably. Our view: it is knowledge transfer, not just the movement of documents.' },
  { term: 'GxP', keys: ['gxp', 'gmp', 'cgmp'], text: '**GxP** is the family of good practice regulations (GMP, GLP, GCP and so on) that govern regulated pharmaceutical work and the quality of data and processes.' },
  { term: 'DoE', keys: ['doe', 'design of experiments'], text: '**DoE (Design of Experiments)** is a structured way to study how several formulation and process variables affect quality, so critical parameters and robust operating ranges can be defined.' },
  { term: 'PAT', keys: ['pat', 'process analytical technology'], text: '**PAT (Process Analytical Technology)** uses real-time measurements during manufacturing to understand and control quality attributes.' },
  { term: 'ASD', keys: ['asd', 'amorphous solid dispersion', 'amorphous solid dispersions'], text: '**ASDs (Amorphous Solid Dispersions)** stabilize a drug in an amorphous form within a polymer matrix to improve solubility and bioavailability. See our solubility and spray-drying white papers.' },
  { term: 'QTPP', keys: ['qtpp', 'quality target product profile'], text: '**QTPP (Quality Target Product Profile)** summarizes the quality characteristics a product needs (dosage form, route, release, stability and more) and anchors QbD development.' },
  { term: 'CQA', keys: ['cqa', 'cqas', 'critical quality attribute', 'critical quality attributes'], text: '**CQAs (Critical Quality Attributes)** are physical, chemical, biological or microbiological properties that must stay within limits to ensure product quality.' },
  { term: '505(b)(2)', keys: ['505b2', '505(b)(2)', '505 b 2', 'anda'], text: '**505(b)(2)** is an FDA pathway for new formulations that can rely partly on existing data; **ANDA** is the pathway for generic equivalents. Both are discussed in our LAI and complex generics publications.' },
];

export const SUGGESTIONS_DEFAULT = ['What services do you offer?', 'What is your framework?', 'Browse publications', 'Contact the team'];
