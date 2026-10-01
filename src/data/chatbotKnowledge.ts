// InnoTech BioPharm Solutions - Local Chatbot Knowledge Base
// Factual website knowledge registry for zero-external-API customer care engine

export interface ServiceKnowledge {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  capabilities: string[];
  deliverables: string[];
  route: string;
  keywords: string[];
}

export interface ExpertiseKnowledge {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  highlights: string[];
  applications: string[];
  route: string;
  keywords: string[];
}

export interface FaqKnowledge {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  category: string;
}

export interface TerminologyKnowledge {
  term: string;
  fullName: string;
  explanation: string;
  keywords: string[];
}

export const CHATBOT_KNOWLEDGE = {
  company: {
    name: "InnoTech BioPharm Solutions LLC",
    tagline: "Innovate with Confidence, Commercialize with Excellence",
    subTagline: "Comprehensive Chemistry, Manufacturing, and Controls (CMC) Solutions for the Biopharmaceutical Industry",
    headquarters: "111 Spencer Ln, Oswego, IL 60543, USA",
    locationShort: "Oswego, Illinois, USA",
    phone: "+1 (774) 283-1540",
    phoneDisplay: "+1 (774) 283-1540",
    email: "services@innotechbiopharm.com",
    workingHours: "Monday - Friday: 8:00 AM - 6:00 PM CST",
    website: "https://www.innotechbiopharm.com",
    consultationLink: "https://appt.link/meet-with-raj-thota-vsfTzL3o/web-conference",
    summary: "At InnoTech BioPharm Solutions, we are more than just a service provider—we are a trusted partner in pharmaceutical innovation. Our expertise in QbD based CMC development, process optimization, and regulatory compliance enables us to deliver high-impact solutions that help biotech and pharmaceutical companies accelerate their drug development pipelines. With a deep commitment to scientific excellence, efficiency, and regulatory alignment, we empower our clients to navigate complex pharmaceutical landscapes with confidence.",
    mission: "At InnoTech BioPharm Solutions, our mission is to empower biotech and pharmaceutical companies by providing innovative, high-quality, and efficient CMC solutions that accelerate drug development and commercialization. We are dedicated to ensuring the highest scientific and regulatory standards while driving speed, efficiency, and precision in pharmaceutical manufacturing processes. By leveraging cutting-edge technology, regulatory foresight, and expert-driven solutions, we help our clients bring life-changing therapies to market faster, safer, and more effectively.",
    vision: "We envision a future where scientific excellence, technological advancements, and regulatory expertise seamlessly integrate to revolutionize pharmaceutical manufacturing and development. At InnoTech BioPharm Solutions, we strive to become a global leader in CMC services, setting new industry standards in process innovation, regulatory compliance, and efficiency. Our goal is to be the trusted partner for pharmaceutical innovators, ensuring that every breakthrough therapy reaches the patients who need it most without delays or compromises in quality.",
    values: [
      "1. Scientific Excellence & Innovation (QbD, AI-Driven Process Optimization, Advanced Analytical & Formulation Sciences)",
      "2. Integrity & Compliance (Global FDA/EMA/ICH Compliance, Data Integrity & Traceability via digital QMS, Ethical Leadership)",
      "3. Client-Centric Approach (Customized CMC Solutions, Proactive Hands-on Engagement, Long-Term Partnerships)",
      "4. Speed & Efficiency (AI-Powered Workflow Acceleration, Module 3 Regulatory Readiness, Agile Manufacturing & Scale-Up)",
      "5. Global Impact (Enable Breakthrough Therapies, Expand Global Access to Quality Medicine, Advance Scientific Knowledge)"
    ]
  },

  founder: {
    name: "Raj Thota, MBA, MS",
    title: "Founder & Principal Consultant",
    experienceYears: "20+",
    fdaApprovals: "41",
    productsSupported: "150+",
    dueDiligence: "$5B+",
    summary: "Raj Thota is an executive drug development leader with 20+ years experience guiding CMC, formulation, and tech transfer in top global pharmaceutical companies and CDMOs. He holds an MBA, an MS in Pharmaceutical Technology, and is a certified QbD & Six Sigma specialist."
  },

  whatsapp: {
    number: "17742831540",
    display: "+1 (774) 283-1540",
    baseUrl: "https://wa.me/17742831540",
    defaultMessage: "Hello InnoTech BioPharm, I would like to discuss a project with your team.",
    pricingMessage: "Hello InnoTech BioPharm, I would like to discuss project scope and receive a custom pricing quote.",
    formulationMessage: "Hello InnoTech BioPharm, I would like to discuss our formulation development project requirements.",
    cmcMessage: "Hello InnoTech BioPharm, I would like to discuss CMC advisory and regulatory filing support for our program."
  },

  services: [
    {
      id: "formulation-development",
      name: "Formulation Science & Development",
      shortDesc: "Comprehensive formulation design for small molecules, biologics, LNPs, and complex parenterals.",
      fullDesc: "We combine deep biopharmaceutical science with Quality by Design (QbD) principles to create stable, scalable formulations. We overcome low aqueous solubility, poor bioavailability, and strict release kinetics.",
      capabilities: [
        "Pre-formulation screening and physicochemical characterization",
        "Solubility & bioavailability enhancement (amorphous dispersions, SEDDS, nano-crystals)",
        "Long-Acting Injectable (LAI) depot formulation design",
        "Lipid Nanoparticle (LNP) RNA/DNA encapsulation optimization",
        "Sterile ocular, topical, and complex injectable systems"
      ],
      deliverables: [
        "Robust candidate formulations with defined CQA ranges",
        "Accelerated and long-term ICH stability testing packages",
        "Scale-up baseline parameters and prototype batches"
      ],
      route: "/our-services",
      keywords: ["formulation", "pre-formulation", "solubility", "bioavailability", "parenteral", "injectable", "depot", "excipient", "dosage form", "liquid", "suspension"]
    },
    {
      id: "analytical-testing",
      name: "Analytical & Bioanalytical Testing",
      shortDesc: "Cutting-edge analytical method development, ICH validation, stability protocols, and characterization.",
      fullDesc: "We provide comprehensive analytical testing compliant with FDA, EMA, and ICH Q2(R1) guidelines. Our team develops stability-indicating assays and conducts thorough impurity characterization.",
      capabilities: [
        "HPLC/UPLC method development, transfer, and ICH validation",
        "Biologics characterization (mAbs, peptides, recombinant proteins)",
        "Extractables & Leachables (E&L) risk assessments and testing",
        "Nitrosamine impurity screening and quantification",
        "Forced degradation studies and dissolution profiling"
      ],
      deliverables: [
        "Validated analytical methods compliant with ICH Q2(R1)",
        "Comprehensive stability protocols and trend reports",
        "Certificate of Analysis (CoA) support for clinical batches"
      ],
      route: "/our-services",
      keywords: ["analytical", "bioanalytical", "testing", "hplc", "uplc", "stability", "ich", "validation", "assay", "impurities", "nitrosamines", "extractables", "leachables", "forced degradation"]
    },
    {
      id: "process-development",
      name: "Process Development & Scale-Up",
      shortDesc: "QbD-driven process optimization, Design of Experiments (DoE), and seamless tech transfer.",
      fullDesc: "We design and optimize scalable manufacturing processes that minimize cost, reduce cycle times, and guarantee reproducible batch quality. We translate laboratory benchtop processes to commercial cGMP facilities.",
      capabilities: [
        "Design of Experiments (DoE) process parameter optimization",
        "Critical Process Parameter (CPP) & Critical Quality Attribute (CQA) mapping",
        "Scale-up from bench scale to pilot and cGMP production",
        "Technology transfer documentation and protocol generation",
        "Process Validation strategy and continuous verification"
      ],
      deliverables: [
        "Scale-up risk assessment matrix and DoE summary report",
        "Master Batch Records (MBR) and Tech Transfer Packages",
        "Manufacturing process design space definition"
      ],
      route: "/our-capabilities",
      keywords: ["process", "scale-up", "scale up", "doe", "design of experiments", "technology transfer", "tech transfer", "cpp", "cqa", "pilot", "commercialization", "mbr", "master batch record"]
    },
    {
      id: "gmp-manufacturing",
      name: "GMP Manufacturing & CDMO Support",
      shortDesc: "Strategic CDMO selection, clinical trial material (CTM) oversight, and audit readiness.",
      fullDesc: "We act as an embedded technical team managing CDMO partnerships, contractor evaluations, protocol reviews, Person-in-Plant (PIP) oversight, and batch deviation investigations.",
      capabilities: [
        "CDMO evaluation, selection, and technical due diligence",
        "Person-in-Plant (PIP) oversight during critical cGMP runs",
        "Clinical Trial Material (CTM) supply chain planning",
        "Deviation investigation and Root Cause Analysis (RCA)",
        "Quality Agreement drafting and cGMP audit readiness"
      ],
      deliverables: [
        "CDMO capability evaluation report & scoring matrix",
        "On-site run monitoring logs and technical batch audits",
        "CAPA recommendations and resolution protocols"
      ],
      route: "/our-services",
      keywords: ["cdmo", "cmo", "gmp", "cgmp", "manufacturing", "vendor", "contractor", "person-in-plant", "pip", "ctm", "clinical trial material", "audit", "cleanroom"]
    },
    {
      id: "regulatory-cmc",
      name: "Regulatory CMC Strategy & Filings",
      shortDesc: "Module 3 documentation, IND/NDA/BLA regulatory support, and agency query resolution.",
      fullDesc: "We author, review, and finalize high-integrity regulatory CMC filings (IND, IMPD, NDA, BLA, ANDA) to accelerate FDA and EMA agency approvals and avoid clinical holds.",
      capabilities: [
        "Authoring and reviewing eCTD Module 3 (Quality) documentation",
        "IND / IMPD / BLA / NDA submission package preparation",
        "Regulatory briefing document drafting for FDA Type A/B/C meetings",
        "Responses to Health Authority Information Requests (IRs)",
        "Post-approval lifecycle management & change controls"
      ],
      deliverables: [
        "Complete Module 3 regulatory sections ready for eCTD publishing",
        "Comprehensive CMC Gap Analysis and Risk Mitigation Strategy",
        "Health Authority meeting pre-reads and response packages"
      ],
      route: "/our-services",
      keywords: ["regulatory", "cmc", "module 3", "ectd", "ind", "nda", "bla", "impd", "fda", "ema", "health authority", "information request", "filing", "submission", "clinical hold"]
    }
  ] as ServiceKnowledge[],

  expertise: [
    {
      id: "long-acting-injectables",
      name: "Long-Acting Injectables (LAIs)",
      subtitle: "Microparticles, Liposomes, In-Situ Gels, and Oil Depots",
      description: "Sustained therapeutic drug delivery systems providing continuous exposure over weeks to months, optimizing patient compliance and therapeutic efficacy.",
      highlights: [
        "PLGA microspheres & microparticle engineering",
        "In-situ forming gel matrices (biodegradable polymers)",
        "In-vitro dissolution correlating to in-vivo PK",
        "Controlled initial burst release (<10%)"
      ],
      applications: ["Oncology", "Central Nervous System (CNS)", "Ophthalmology", "Chronic Infectious Diseases"],
      route: "/our-expertise",
      keywords: ["lai", "long-acting", "long acting", "injectables", "depot", "plga", "microspheres", "microparticles", "burst release", "sustained release"]
    },
    {
      id: "lipid-nanoparticles",
      name: "Lipid Nanoparticles (LNPs)",
      subtitle: "mRNA, siRNA, DNA, and Oligonucleotide Delivery",
      description: "Sophisticated nanoparticle delivery vehicles optimizing ionizable lipids, N/P ratios, microfluidic manufacturing, and high encapsulation efficiency (>90%).",
      highlights: [
        "Ionizable lipid formulation optimization",
        "Microfluidic mixing process development & scale-up",
        "High encapsulation efficiency (>90%) with tight PDI",
        "Lyophilization for room-temperature storage stability"
      ],
      applications: ["Gene Therapy", "mRNA Vaccines", "RNAi Therapeutics", "Rare Diseases"],
      route: "/our-expertise",
      keywords: ["lnp", "lipid nanoparticles", "mrna", "sirna", "rnai", "dna", "oligonucleotide", "nucleic acid", "encapsulation", "microfluidics"]
    },
    {
      id: "ocular-drug-delivery",
      name: "Ocular Drug Delivery Systems",
      subtitle: "Anterior & Posterior Segment Targeted Therapeutics",
      description: "Engineered formulations tailored to overcome ophthalmic physiological barriers, including bioadhesive in-situ gels and intravitreal implants.",
      highlights: [
        "Bioadhesive in-situ gels for extended corneal residence",
        "Intravitreal sustained-release micro-implants",
        "Preservative-free sterile formulation design",
        "Non-irritating particle sizing"
      ],
      applications: ["AMD", "Glaucoma", "Diabetic Retinopathy", "Dry Eye Syndrome"],
      route: "/our-expertise",
      keywords: ["ocular", "ophthalmic", "eye", "intravitreal", "cornea", "retina", "glaucoma", "amd", "implants"]
    },
    {
      id: "solubility-enhancement",
      name: "Solubility & Bioavailability Enhancement",
      subtitle: "BCS Class II and IV Molecule Solutions",
      description: "Systematic pre-formulation screening utilizing spray-dried amorphous dispersions, hot melt extrusion, and self-emulsifying systems to elevate drug exposure.",
      highlights: [
        "Amorphous Solid Dispersions (ASD) via Spray Drying & HME",
        "Self-Emulsifying Drug Delivery Systems (SEDDS / SNEDDS)",
        "Nano-crystals and wet media milling",
        "Cyclodextrin complexation and co-crystals"
      ],
      applications: ["Oral Solid Dosages", "Poorly Soluble Injectables", "Oncology Small Molecules"],
      route: "/our-expertise",
      keywords: ["solubility", "bioavailability", "bcs", "bcs class ii", "bcs class iv", "asd", "amorphous", "spray drying", "hme", "hot melt extrusion", "sedds", "snedds"]
    },
    {
      id: "hpapi-formulation",
      name: "High Potency APIs (HPAPIs)",
      subtitle: "Containment, Safety, and Low-Dose Accuracy",
      description: "Safe formulation and process design for potent molecules requiring Occupational Exposure Band (OEB) controls and tight dose uniformity.",
      highlights: [
        "OEL / ADE containment assessment",
        "Low-dose accuracy and micro-encapsulation",
        "Cross-contamination prevention & cleaning validation",
        "Specialty oncology and hormonal drug products"
      ],
      applications: ["Targeted Cancer Therapies", "Immunosuppressants", "Endocrine Disorders"],
      route: "/our-expertise",
      keywords: ["hpapi", "high potency", "potent", "oeb", "oel", "ade", "containment", "cytotoxic", "oncology"]
    }
  ] as ExpertiseKnowledge[],

  terminology: [
    {
      term: "CMC",
      fullName: "Chemistry, Manufacturing, and Controls",
      explanation: "CMC covers the chemical characterization, laboratory formulation, manufacturing process, analytical testing, stability, and packaging required by regulatory agencies (FDA, EMA) to demonstrate that a drug is safe, consistent, and reproducible.",
      keywords: ["cmc", "what is cmc", "chemistry manufacturing and controls"]
    },
    {
      term: "QbD",
      fullName: "Quality by Design",
      explanation: "A systematic, scientific approach to pharmaceutical development that begins with predefined objectives and emphasizes product and process understanding based on sound science and quality risk management.",
      keywords: ["qbd", "what is qbd", "quality by design"]
    },
    {
      term: "DoE",
      fullName: "Design of Experiments",
      explanation: "A structured, statistical methodology used in pharmaceutical development to simultaneously investigate multiple formulation and process variables, determining critical relationships and establishing an optimal design space.",
      keywords: ["doe", "what is doe", "design of experiments"]
    },
    {
      term: "eCTD Module 3",
      fullName: "Electronic Common Technical Document - Quality",
      explanation: "The section of regulatory drug submissions (IND, NDA, BLA, IMPD) dedicated exclusively to Quality data, detailing drug substance synthesis, drug product formulation, specifications, analytical methods, validation, and stability profiles.",
      keywords: ["module 3", "ectd", "ectd module 3", "quality module"]
    },
    {
      term: "CQA & CPP",
      fullName: "Critical Quality Attributes & Critical Process Parameters",
      explanation: "CQAs are physical, chemical, or biological properties that must remain within defined limits to ensure desired product quality. CPPs are manufacturing process variables whose variation impacts a CQA and must therefore be controlled.",
      keywords: ["cqa", "cpp", "critical quality attributes", "critical process parameters"]
    },
    {
      term: "CDMO",
      fullName: "Contract Development and Manufacturing Organization",
      explanation: "External partner companies that provide drug development and manufacturing services on a contract basis. InnoTech BioPharm Solutions advises sponsors on CDMO selection, technical transfer, and person-in-plant oversight.",
      keywords: ["cdmo", "cmo", "contract development", "contract manufacturer"]
    }
  ] as TerminologyKnowledge[],

  faqs: [
    {
      id: "faq-modalities",
      question: "What types of therapeutic modalities does InnoTech BioPharm Solutions support?",
      answer: "InnoTech BioPharm Solutions supports a wide spectrum of drug modalities, including small molecules, biologics (monoclonal antibodies, recombinant proteins), peptides, oligonucleotides, lipid nanoparticles (LNPs) for mRNA/DNA delivery, long-acting injectables (LAIs), ocular therapeutics, and high potency APIs (HPAPIs).",
      keywords: ["modalities", "molecules", "biologics", "types of drugs", "small molecule", "large molecule", "mrna", "peptides"],
      category: "Capabilities"
    },
    {
      id: "faq-collaboration",
      question: "How does InnoTech BioPharm Solutions collaborate with sponsors and CDMOs?",
      answer: "We operate as an agile, embedded extension of your technical team. Depending on your needs, we provide strategic CMC consulting, hands-on formulation design, regulatory Module 3 authoring, CDMO selection, or Person-in-Plant (PIP) oversight during cGMP scale-up runs.",
      keywords: ["collaborate", "partnership", "engagement", "how do you work", "consulting model", "contract"],
      category: "Engagement"
    },
    {
      id: "faq-qbd",
      question: "What is your approach to Quality by Design (QbD)?",
      answer: "We integrate QbD into early development by defining the Quality Target Product Profile (QTPP), identifying Critical Quality Attributes (CQAs), and conducting Design of Experiments (DoE) studies to map out an operational design space that ensures robust process scale-up and regulatory compliance.",
      keywords: ["approach to qbd", "qbd strategy", "quality target product profile", "qtpp", "design space"],
      category: "Methodology"
    },
    {
      id: "faq-location",
      question: "Where is InnoTech BioPharm Solutions located, and do you serve international clients?",
      answer: "Our headquarters is located at 111 Spencer Ln, Oswego, IL 60543, USA. We serve biotech, pharmaceutical, and CDMO clients globally across North America, Europe, Asia, and international markets.",
      keywords: ["location", "where are you", "headquarters", "address", "international", "global", "office", "illinois"],
      category: "Company"
    },
    {
      id: "faq-mission",
      question: "What is InnoTech BioPharm Solutions' mission?",
      answer: "Our mission is to empower biotech and pharmaceutical companies by providing innovative, high-quality, and efficient CMC solutions that accelerate drug development and commercialization. We are dedicated to ensuring the highest scientific and regulatory standards while driving speed, efficiency, and precision in pharmaceutical manufacturing processes.",
      keywords: ["mission", "our mission", "company mission", "purpose", "what is your mission"],
      category: "About"
    },
    {
      id: "faq-vision",
      question: "What is InnoTech BioPharm Solutions' vision?",
      answer: "We envision a future where scientific excellence, technological advancements, and regulatory expertise seamlessly integrate to revolutionize pharmaceutical manufacturing and development, setting new industry standards in process innovation, regulatory compliance, and efficiency so breakthrough therapies reach patients without delay.",
      keywords: ["vision", "our vision", "company vision", "what is your vision"],
      category: "About"
    },
    {
      id: "faq-values",
      question: "What are InnoTech BioPharm Solutions' core values?",
      answer: "Our five core values are: 1. Scientific Excellence & Innovation (QbD, AI-driven process optimization, advanced analytical sciences); 2. Integrity & Compliance (FDA/EMA/ICH global standards, data integrity via digital QMS); 3. Client-Centric Approach (customized CMC solutions, long-term partnerships); 4. Speed & Efficiency (workflow acceleration, Module 3 readiness); and 5. Global Impact (enabling breakthrough therapies worldwide).",
      keywords: ["values", "core values", "principles", "what are your values", "ethics"],
      category: "About"
    }
  ] as FaqKnowledge[],

  clientSegments: [
    {
      segment: "Emerging Biotech & Startups",
      description: "Lean, high-speed CMC development designed to reach First-In-Human (FIH) clinical trials efficiently without capital waste.",
      services: "Early formulation screening, IND-enabling CMC roadmaps, milestone-based consulting."
    },
    {
      segment: "Mid-Size & Specialty Pharma",
      description: "Scalable formulation and analytical strategy for complex delivery, 505(b)(2) lifecycle extension, and multi-country filings.",
      services: "Formulation re-design, CDMO technology transfer, comprehensive Module 3 authoring."
    },
    {
      segment: "CMOs & CDMO Partners",
      description: "Specialized analytical method validation, process troubleshooting, scale-up modeling, and external technical advisory.",
      services: "DoE process validation, fill-finish troubleshooting, analytical method transfer."
    },
    {
      segment: "Universities & Research Institutes",
      description: "Translating benchtop academic discoveries into scalable, regulatory-compliant biopharmaceutical drug product candidates.",
      services: "Translational CMC strategy, grant narrative drafting, PoC scale-up."
    }
  ],

  objections: {
    price: {
      intent: "PRICE_OBJECTION",
      response: "Because biopharmaceutical development projects vary widely in scope, molecule complexity, and regulatory milestones, pricing is tailored specifically to each client's program requirements. The InnoTech BioPharm team will discuss your specific deliverables and provide a customized proposal.",
      cta: "Chat on WhatsApp"
    },
    timeline: {
      intent: "TIMELINE_OBJECTION",
      response: "Project timelines depend on the phase of development—such as rapid pre-formulation feasibility screening, tech transfer oversight, or full eCTD Module 3 regulatory authoring. Our agile consulting model eliminates agency bloat to achieve faster turnaround for milestone-critical submissions."
    },
    capability: {
      intent: "CAPABILITY_DOUBT",
      response: "InnoTech BioPharm Solutions has supported over 150 commercial and clinical drug products, contributing to 41 FDA product approvals across complex parenterals, oral solids, ocular systems, and combination products. We specialize precisely in areas where standard CROs often face challenges, including Long-Acting Injectables, LNPs, and poor solubility molecules."
    },
    trust: {
      intent: "TRUST_CONCERN",
      response: "Our advisory is led by Raj Thota, MBA, MS, who brings 20+ years of executive leadership in CMC, formulation, and commercial scale-up with 41 FDA approvals. We operate under strict client confidentiality (100% NDA adherence) and maintain proven Quality-by-Design methodologies."
    },
    custom: {
      intent: "CUSTOM_PROJECT",
      response: "We routinely design customized development programs tailored to unique sponsor requirements, whether you need a rapid technical audit, an embedded CMC lead for an IND filing, or troubleshooting for a CDMO batch deviation."
    }
  }
};
