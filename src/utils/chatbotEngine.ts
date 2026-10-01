// InnoTech BioPharm Solutions - Local Rule-Based Chatbot Engine
// Zero-external-API, 100% in-browser customer care intelligence system

import { CHATBOT_KNOWLEDGE, ServiceKnowledge, ExpertiseKnowledge } from '../data/chatbotKnowledge';

export interface ChatAction {
  type: 'whatsapp' | 'route' | 'consultation' | 'link';
  label: string;
  url?: string;
  route?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
  action?: ChatAction;
  suggestions?: string[];
}

export interface ConversationContext {
  lastService: ServiceKnowledge | null;
  lastExpertise: ExpertiseKnowledge | null;
  lastTopic: string | null;
  intentHistory: string[];
}

// Global in-session context
let sessionContext: ConversationContext = {
  lastService: null,
  lastExpertise: null,
  lastTopic: null,
  intentHistory: []
};

export function getSessionContext(): ConversationContext {
  return sessionContext;
}

export function resetSessionContext(): void {
  sessionContext = {
    lastService: null,
    lastExpertise: null,
    lastTopic: null,
    intentHistory: []
  };
}

// Clean and normalize input string
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildWhatsAppUrl(message: string): string {
  return `${CHATBOT_KNOWLEDGE.whatsapp.baseUrl}?text=${encodeURIComponent(message)}`;
}

// Check if any word or phrase in list exists in query
function matchesAny(query: string, patterns: string[]): boolean {
  return patterns.some((p) => {
    const cleanPattern = p.toLowerCase();
    if (cleanPattern.includes(' ')) {
      return query.includes(cleanPattern);
    }
    // Match whole words for short patterns
    const regex = new RegExp(`\\b${cleanPattern}\\b`, 'i');
    return regex.test(query);
  });
}

export function processUserQuery(rawInput: string): ChatMessage {
  const query = normalizeText(rawInput);
  const now = new Date();
  const msgId = `msg-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;

  // Default quick suggestions shown after responses
  const standardSuggestions = [
    "What services do you offer?",
    "What is CMC?",
    "Formulation development",
    "How can I get a quote?",
    "Contact the team"
  ];

  // 1. Empty or very short input
  if (!query) {
    return {
      id: msgId,
      sender: 'bot',
      text: "Hello! Welcome to InnoTech BioPharm Solutions. How can I assist you with our CMC, formulation, or analytical services today?",
      timestamp: now,
      suggestions: standardSuggestions
    };
  }

  // 2. Medical / Diagnosis Safety Guard
  if (
    matchesAny(query, [
      "cure me",
      "treat my disease",
      "diagnose",
      "prescription",
      "my symptoms",
      "medical advice for me",
      "dose for me",
      "should i take this medicine",
      "patient treatment"
    ])
  ) {
    return {
      id: msgId,
      sender: 'bot',
      text: "InnoTech BioPharm Solutions is an enterprise B2B biopharmaceutical consulting and drug development advisory for pharmaceutical sponsors and biotech companies. We cannot provide personal medical diagnoses, patient treatment advice, or prescriptions. For medical concerns, please consult a licensed healthcare professional.",
      timestamp: now,
      suggestions: ["What services do you offer?", "How do you work with sponsors?"]
    };
  }

  // 3. Greetings
  if (
    matchesAny(query, [
      "hi", "hello", "hey", "greetings", "good morning", "good afternoon", "good evening", "howdy", "start"
    ]) && query.split(' ').length <= 3
  ) {
    return {
      id: msgId,
      sender: 'bot',
      text: "Hello! Welcome to InnoTech BioPharm Solutions. I'm here to help you explore our CMC advisory, formulation science, analytical testing, and scale-up capabilities, or connect directly with our technical leads. What would you like to know?",
      timestamp: now,
      suggestions: [
        "What services do you provide?",
        "What is CMC?",
        "Tell me about Raj Thota",
        "How can I get a quote?"
      ]
    };
  }

  // 4. PRICE / COST / QUOTE QUESTIONS (Critical special flow: Never invent prices!)
  const isPriceQuery = matchesAny(query, [
    "price", "pricing", "cost", "how much", "quote", "budget", "fee", "fees", "rates", 
    "charges", "charge", "expensive", "estimate", "quotation", "how much does it cost", 
    "how much will this cost", "cost of formulation", "cmc cost", "development cost"
  ]);

  if (isPriceQuery) {
    sessionContext.intentHistory.push("PRICE_REQUEST");
    const targetService = sessionContext.lastService?.name || sessionContext.lastExpertise?.name;

    const serviceMention = targetService 
      ? `for ${targetService}`
      : "for your development program";

    const prefilledText = targetService
      ? `Hello InnoTech BioPharm, I would like to discuss a project and receive pricing details for ${targetService}.`
      : "Hello InnoTech BioPharm, I would like to discuss our project scope and receive a custom pricing quote.";

    return {
      id: msgId,
      sender: 'bot',
      text: `Pricing ${serviceMention} depends on your specific molecule attributes, development phase, required batch volumes, and regulatory deliverables. To discuss your exact scope and receive a customized proposal, you can connect directly with our technical team on WhatsApp.`,
      timestamp: now,
      action: {
        type: 'whatsapp',
        label: 'Chat on WhatsApp',
        url: buildWhatsAppUrl(prefilledText)
      },
      suggestions: [
        "What services do you provide?",
        "Schedule a Consultation",
        "Tell me about your track record"
      ]
    };
  }

  // 5. QUOTE / PROJECT DISCUSSION REQUESTS
  if (
    matchesAny(query, [
      "i need a quote", "request a quote", "get a quote", "i have a project", 
      "discuss my project", "discuss a project", "need pharmaceutical development support",
      "how do i get started", "how to start", "start project", "onboard"
    ])
  ) {
    sessionContext.intentHistory.push("QUOTE_REQUEST");
    const prefilledText = sessionContext.lastService 
      ? `Hello InnoTech BioPharm, I have a project regarding ${sessionContext.lastService.name} and would like to discuss next steps.`
      : "Hello InnoTech BioPharm, I have a pharmaceutical project and would like to discuss next steps with your team.";

    return {
      id: msgId,
      sender: 'bot',
      text: "We would be glad to evaluate your project requirements! InnoTech BioPharm Solutions works with biotech startups, specialty pharma, and CDMOs. You can start by connecting directly on WhatsApp or scheduling an executive consultation.",
      timestamp: now,
      action: {
        type: 'whatsapp',
        label: 'Chat on WhatsApp',
        url: buildWhatsAppUrl(prefilledText)
      },
      suggestions: [
        "What services do you provide?",
        "What is your engagement model?",
        "Where are you located?"
      ]
    };
  }

  // 6. CONTACT / SPEAK WITH SOMEONE
  if (
    matchesAny(query, [
      "contact", "speak with someone", "can i speak with someone", "talk to someone", 
      "call", "phone", "email", "reach out", "get in touch", "phone number", 
      "email address", "speak to raj", "talk to raj", "consultation", "human", "representative"
    ])
  ) {
    sessionContext.intentHistory.push("CONTACT_REQUEST");
    return {
      id: msgId,
      sender: 'bot',
      text: `You can reach InnoTech BioPharm Solutions directly:\n\n• Phone / WhatsApp: ${CHATBOT_KNOWLEDGE.company.phone}\n• Email: ${CHATBOT_KNOWLEDGE.company.email}\n• Headquarters: ${CHATBOT_KNOWLEDGE.company.headquarters}\n• Hours: ${CHATBOT_KNOWLEDGE.company.workingHours}\n\nOur team is available immediately on WhatsApp.`,
      timestamp: now,
      action: {
        type: 'whatsapp',
        label: 'Chat on WhatsApp',
        url: buildWhatsAppUrl(CHATBOT_KNOWLEDGE.whatsapp.defaultMessage)
      },
      suggestions: [
        "How can I get a quote?",
        "What services do you provide?",
        "Where are you located?"
      ]
    };
  }

  // 7. LOCATION / ADDRESS
  if (matchesAny(query, ["where are you", "location", "address", "where is", "located", "headquarters", "illinois", "chicago", "oswego"])) {
    return {
      id: msgId,
      sender: 'bot',
      text: `InnoTech BioPharm Solutions is headquartered at ${CHATBOT_KNOWLEDGE.company.headquarters} (Oswego, Illinois, USA). We partner with biotech and pharmaceutical sponsors both across North America and globally.`,
      timestamp: now,
      action: {
        type: 'route',
        label: 'Contact Page',
        route: '/contact-us'
      },
      suggestions: ["What services do you provide?", "Chat on WhatsApp"]
    };
  }

  // 8. OBJECTIONS & CAPABILITY DOUBTS
  // Timeline objection
  if (matchesAny(query, ["how long", "timeline", "turnaround", "how fast", "duration", "how much time", "lead time"])) {
    sessionContext.intentHistory.push("TIMELINE_OBJECTION");
    return {
      id: msgId,
      sender: 'bot',
      text: `${CHATBOT_KNOWLEDGE.objections.timeline.response}\n\nWould you like to discuss the expected milestones for your specific program?`,
      timestamp: now,
      action: {
        type: 'whatsapp',
        label: 'Chat on WhatsApp',
        url: buildWhatsAppUrl("Hello InnoTech BioPharm, I would like to discuss project timelines for our drug development program.")
      },
      suggestions: ["How can I get a quote?", "Formulation development", "Regulatory CMC"]
    };
  }

  // Capability doubt ("Can you handle my project?", "Do you work with my type of project?")
  if (matchesAny(query, ["can you handle", "my type of project", "do you work with my", "suitable for", "are you capable", "can you do this"])) {
    sessionContext.intentHistory.push("CAPABILITY_DOUBT");
    return {
      id: msgId,
      sender: 'bot',
      text: `${CHATBOT_KNOWLEDGE.objections.capability.response}\n\nWhat therapeutic modality or formulation type is your project focused on?`,
      timestamp: now,
      suggestions: ["Long-Acting Injectables", "Lipid Nanoparticles", "Solubility Enhancement", "Regulatory CMC"]
    };
  }

  // Trust / Track Record ("Why should I work with you?", "What certifications do you have?", "Track record")
  if (matchesAny(query, ["why work with you", "why should i work", "why choose", "certifications", "certified", "track record", "approvals", "credentials", "reputation", "experience"])) {
    sessionContext.intentHistory.push("TRUST_CONCERN");
    return {
      id: msgId,
      sender: 'bot',
      text: `InnoTech BioPharm Solutions offers a proven industry track record:\n\n• 41 FDA Product Approvals supported across parenterals, oral solids, and devices\n• 150+ Commercial and clinical products developed\n• 20+ Years Executive Leadership by Founder Raj Thota, MBA, MS\n• $5B+ In technical due diligence evaluated\n• Strict Quality by Design (QbD) & 100% NDA Client Confidentiality`,
      timestamp: now,
      action: {
        type: 'route',
        label: 'View What Sets Us Apart',
        route: '/what-sets-us-apart'
      },
      suggestions: ["Who is Raj Thota?", "What services do you provide?", "Chat on WhatsApp"]
    };
  }

  // 9. TERMINOLOGY EXPLANATIONS (CMC, QbD, DoE, eCTD Module 3, CQA, CDMO)
  for (const term of CHATBOT_KNOWLEDGE.terminology) {
    if (matchesAny(query, term.keywords)) {
      sessionContext.lastTopic = term.term;
      return {
        id: msgId,
        sender: 'bot',
        text: `**${term.term} (${term.fullName})**:\n\n${term.explanation}`,
        timestamp: now,
        suggestions: [
          "What services do you provide?",
          "How can I get a quote?",
          "Tell me about Quality by Design"
        ]
      };
    }
  }

  // 10. FOUNDER INFO (Raj Thota)
  if (matchesAny(query, ["raj", "thota", "founder", "ceo", "principal", "who runs", "who founded", "leadership", "background of raj"])) {
    sessionContext.lastTopic = "Raj Thota";
    return {
      id: msgId,
      sender: 'bot',
      text: `InnoTech BioPharm Solutions was founded by **${CHATBOT_KNOWLEDGE.founder.name}** (${CHATBOT_KNOWLEDGE.founder.title}).\n\n${CHATBOT_KNOWLEDGE.founder.summary}\n\n• Experience: ${CHATBOT_KNOWLEDGE.founder.experienceYears} years in pharma & CDMO leadership\n• Track record: ${CHATBOT_KNOWLEDGE.founder.fdaApprovals} FDA product approvals\n• Products: Over ${CHATBOT_KNOWLEDGE.founder.productsSupported} clinical and commercial products supported.`,
      timestamp: now,
      action: {
        type: 'route',
        label: 'View Founder Profile',
        route: '/our-founder'
      },
      suggestions: [
        "What services do you provide?",
        "Schedule a Consultation",
        "Chat on WhatsApp"
      ]
    };
  }

  // 11. SPECIFIC SERVICES MATCHING
  // Check exact service keywords
  for (const service of CHATBOT_KNOWLEDGE.services) {
    if (matchesAny(query, service.keywords)) {
      sessionContext.lastService = service;
      sessionContext.lastTopic = service.name;
      sessionContext.intentHistory.push(service.id);

      const bulletList = service.capabilities.slice(0, 3).map(c => `• ${c}`).join('\n');
      return {
        id: msgId,
        sender: 'bot',
        text: `**${service.name}**\n\n${service.fullDesc}\n\n**Key Capabilities:**\n${bulletList}`,
        timestamp: now,
        action: {
          type: 'whatsapp',
          label: 'Inquire on WhatsApp',
          url: buildWhatsAppUrl(`Hello InnoTech BioPharm, I would like to learn more and inquire about ${service.name}.`)
        },
        suggestions: [
          "How much does it cost?",
          "What deliverables are included?",
          "View all services"
        ]
      };
    }
  }

  // 12. SPECIFIC TECHNOLOGY PLATFORMS / EXPERTISE
  for (const exp of CHATBOT_KNOWLEDGE.expertise) {
    if (matchesAny(query, exp.keywords)) {
      sessionContext.lastExpertise = exp;
      sessionContext.lastTopic = exp.name;

      const highlights = exp.highlights.slice(0, 3).map(h => `• ${h}`).join('\n');
      return {
        id: msgId,
        sender: 'bot',
        text: `**${exp.name}** (${exp.subtitle})\n\n${exp.description}\n\n**Core Highlights:**\n${highlights}`,
        timestamp: now,
        action: {
          type: 'whatsapp',
          label: 'Discuss Platform on WhatsApp',
          url: buildWhatsAppUrl(`Hello InnoTech BioPharm, I would like to discuss ${exp.name} for our project.`)
        },
        suggestions: [
          "How much does it cost?",
          "Can you handle our project?",
          "Explore all expertise"
        ]
      };
    }
  }

  // 13. GENERAL SERVICES OVERVIEW
  if (
    matchesAny(query, [
      "what services do you offer", "what services", "services", "capabilities", 
      "what do you do", "solutions", "all services", "service overview"
    ])
  ) {
    sessionContext.lastTopic = "Services";
    return {
      id: msgId,
      sender: 'bot',
      text: "InnoTech BioPharm Solutions provides five core biopharmaceutical services:\n\n1. **Formulation Science & Development**: Parenterals, LNPs, LAIs, and solubility enhancement.\n2. **Analytical & Bioanalytical Testing**: HPLC/UPLC, ICH Q2(R1) validation, and stability.\n3. **Process Development & Scale-Up**: DoE optimization, CPP/CQA mapping, and tech transfer.\n4. **GMP Manufacturing & CDMO Support**: Vendor audit, Person-in-Plant (PIP), and deviation RCA.\n5. **Regulatory CMC Strategy & Filings**: eCTD Module 3, IND, NDA, and BLA authoring.",
      timestamp: now,
      action: {
        type: 'route',
        label: 'View Services Page',
        route: '/our-services'
      },
      suggestions: [
        "Formulation Development",
        "Analytical Testing",
        "Regulatory CMC",
        "How can I get a quote?"
      ]
    };
  }

  // 14. FAQS MATCH
  for (const faq of CHATBOT_KNOWLEDGE.faqs) {
    if (matchesAny(query, faq.keywords)) {
      return {
        id: msgId,
        sender: 'bot',
        text: faq.answer,
        timestamp: now,
        suggestions: [
          "What services do you provide?",
          "How can I get a quote?",
          "Chat on WhatsApp"
        ]
      };
    }
  }

  // 15. CAREERS / JOB OPENINGS
  if (matchesAny(query, ["job", "jobs", "career", "careers", "hiring", "work for you", "apply", "openings", "positions"])) {
    return {
      id: msgId,
      sender: 'bot',
      text: "InnoTech BioPharm Solutions is actively expanding! We have open positions for Senior CMC Formulation Scientists, Analytical Development Leads, and Regulatory CMC Consultants in Oswego, IL, and remote/hybrid roles.",
      timestamp: now,
      action: {
        type: 'route',
        label: 'View Careers Page',
        route: '/careers'
      },
      suggestions: ["What services do you provide?", "Contact the team"]
    };
  }

  // 16. CLIENT SEGMENTS (Startups, Pharma, Universities, CDMOs)
  if (matchesAny(query, ["startup", "startups", "biotech startup", "emerging biotech", "universities", "academic", "cdmo partner"])) {
    return {
      id: msgId,
      sender: 'bot',
      text: "We tailor our consulting models for specific partner types:\n\n• **Emerging Biotech & Startups**: Rapid, capital-efficient FIH formulation and IND-enabling roadmaps.\n• **Mid-Size & Specialty Pharma**: 505(b)(2) lifecycle extension, CDMO tech transfer, and Module 3.\n• **CDMO Partners**: DoE process validation and fill-finish troubleshooting.\n• **Universities**: Translating benchtop discoveries into scalable, regulatory candidates.",
      timestamp: now,
      suggestions: [
        "How can I get a quote?",
        "What services do you provide?",
        "Chat on WhatsApp"
      ]
    };
  }

  // 17. CONTEXTUAL FOLLOW-UP FOR "IT" / PRONOUNS
  if (
    (query.includes("it") || query.includes("that") || query.includes("this") || query.includes("more")) &&
    sessionContext.lastService
  ) {
    const s = sessionContext.lastService;
    return {
      id: msgId,
      sender: 'bot',
      text: `Regarding **${s.name}**:\n\n${s.fullDesc}\n\n**Expected Deliverables:**\n${s.deliverables.map(d => `• ${d}`).join('\n')}\n\nWould you like to discuss scope and pricing for ${s.name}?`,
      timestamp: now,
      action: {
        type: 'whatsapp',
        label: 'Discuss on WhatsApp',
        url: buildWhatsAppUrl(`Hello InnoTech BioPharm, I would like to discuss scope and pricing for ${s.name}.`)
      },
      suggestions: ["How much does it cost?", "How long does it take?", "Contact the team"]
    };
  }

  // 18. SAFE UNKNOWN FALLBACK (Never hallucinate, never invent information)
  sessionContext.intentHistory.push("UNKNOWN");
  return {
    id: msgId,
    sender: 'bot',
    text: "I don't have enough specific information on that topic from the InnoTech BioPharm website. For your custom question or detailed scientific inquiry, I recommend speaking directly with our technical team on WhatsApp or submitting a consultation request.",
    timestamp: now,
    action: {
      type: 'whatsapp',
      label: 'Chat on WhatsApp',
      url: buildWhatsAppUrl(`Hello InnoTech BioPharm, I have an inquiry: ${rawInput}`)
    },
    suggestions: [
      "What services do you provide?",
      "What is CMC?",
      "How can I get a quote?",
      "Direct Contact Details"
    ]
  };
}
