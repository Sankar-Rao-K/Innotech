import {
  formulationLabImg,
  ocularDeliveryImg,
  processScaleUpImg,
  solubilityImg
} from '../assets/images';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  publishedAt: string;
  readTime: string;
  image: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      text: string;
      bullets?: string[];
      keyTakeaway?: string;
    }[];
    conclusion: string;
  };
  tags: string[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  applicableTo: string[];
}

export interface TechnologyExpertise {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  applications: string[];
  icon: string;
  image: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const COMPANY_DETAILS = {
  name: "InnoTech BioPharm Solutions LLC",
  tagline: "Innovate with Confidence, Commercialize with Excellence",
  subTagline: "Comprehensive Chemistry, Manufacturing, and Controls (CMC) Solutions for the Biopharmaceutical Industry",
  address: "111 Spencer Ln, Oswego, IL 60543, USA",
  addressShort: "Oswego, IL, USA",
  phone: "+1 (774) 283-1540",
  email: "services@innotechbiopharm.com",
  workingHours: "Monday - Friday: 8:00 AM - 6:00 PM CST",
  founder: {
    name: "Raj Thota, MBA, MS",
    title: "Founder & Principal Consultant",
    experience: "20+ Years International Executive Leadership in Drug Development",
    bio: "Raj Thota is an accomplished biopharmaceutical executive with over two decades of global experience in leading Chemistry, Manufacturing, and Controls (CMC) strategy, formulation science, and drug delivery development. Throughout his career in top tier pharmaceutical organizations and CDMOs, Raj has led the development and scale-up of numerous complex parenteral, targeted, and long-acting drug products from early discovery to commercial launch.",
    education: [
      "Master of Business Administration (MBA)",
      "Master of Science (MS) in Pharmaceutical Technology",
      "Certified Quality by Design (QbD) & Six Sigma Specialist"
    ]
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "formulation-development",
    slug: "formulation-development",
    title: "Formulation Science & Development",
    shortDesc: "Comprehensive formulation strategy for small molecules, biologics, LNPs, and complex parenteral systems.",
    fullDesc: "Our formulation development team combines deep biopharmaceutical science with Quality by Design (QbD) principles to create stable, robust, and commercially viable formulations. We specialize in overcoming challenging drug properties including low solubility, bioavailability limitations, and strict release requirements.",
    iconName: "FlaskConical",
    features: [
      "Pre-formulation screening and physicochemical characterization",
      "Solubility & bioavailability enhancement (nano-suspensions, liposomes, amorphous solid dispersions)",
      "Long-Acting Injectable (LAI) depot formulation development",
      "Lipid Nanoparticle (LNP) & RNA/DNA encapsulation optimization",
      "Ocular, topical, and complex injectable formulations"
    ],
    deliverables: [
      "Robust candidate formulations with defined CQA ranges",
      "Accelerated & long-term stability testing packages",
      "Scale-up baseline parameters & prototype batches"
    ],
    applicableTo: ["Biotech Startups", "Specialty Pharma", "CDMO Partners"]
  },
  {
    id: "analytical-testing",
    slug: "analytical-testing",
    title: "Analytical & Bioanalytical Testing",
    shortDesc: "Cutting-edge analytical method development, validation, stability testing, and characterization.",
    fullDesc: "InnoTech BioPharm Solutions delivers comprehensive analytical testing and method development designed to satisfy international regulatory standards (FDA, EMA, ICH). We specialize in state-of-the-art analytical techniques for complex therapeutics.",
    iconName: "TestTube2",
    features: [
      "HPLC/UPLC method development, transfer, and validation",
      "Biologics characterization (mAbs, peptides, recombinant proteins)",
      "Extractables & Leachables (E&L) risk assessment and testing",
      "Nitrosamine impurity screening & quantitative estimation",
      "Forced degradation studies and dissolution profiling"
    ],
    deliverables: [
      "Validated analytical methods compliant with ICH Q2(R1)",
      "Comprehensive stability protocols and trend reports",
      "Certificate of Analysis (CoA) for clinical batches"
    ],
    applicableTo: ["Emerging Biotech", "Mid-Size Pharma", "Research Institutes"]
  },
  {
    id: "process-development",
    slug: "process-development",
    title: "Process Development & Scale-Up",
    shortDesc: "QbD-driven process optimization, Design of Experiments (DoE), and seamless technology transfer.",
    fullDesc: "We design and optimize scalable manufacturing processes that minimize cost, reduce cycle times, and guarantee reproducible product quality. By utilizing DoE modeling and digital twins, we bridge the gap between bench scale and commercial cGMP facilities.",
    iconName: "Cpu",
    features: [
      "Design of Experiments (DoE) process parameter optimization",
      "Critical Process Parameter (CPP) & Critical Quality Attribute (CQA) mapping",
      "Scale-up from bench scale to pilot and cGMP production levels",
      "Technology transfer documentation and protocol generation",
      "Process Validation strategy and continuous process verification"
    ],
    deliverables: [
      "Scale-up risk assessment matrix and DoE summary report",
      "Master Batch Records (MBR) and Tech Transfer Packages",
      "Manufacturing process design space definition"
    ],
    applicableTo: ["CDMOs & CMOs", "Specialty Pharma", "Clinical Trial Sponsors"]
  },
  {
    id: "gmp-manufacturing",
    slug: "gmp-manufacturing",
    title: "GMP Manufacturing & CDMO Support",
    shortDesc: "Strategic CDMO selection, clinical trial material (CTM) oversight, and audit readiness.",
    fullDesc: "Navigating CDMO partnerships requires deep technical vigilance. InnoTech BioPharm Solutions acts as an extension of your technical team, managing vendor selection, protocol reviews, manufacturing oversight, and batch release troubleshooting.",
    iconName: "Factory",
    features: [
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
    applicableTo: ["Biotech Startups", "Mid-Size Pharma"]
  },
  {
    id: "regulatory-cmc",
    slug: "regulatory-cmc",
    title: "Regulatory CMC Strategy & Filings",
    shortDesc: "Module 3 documentation, IND/NDA/BLA regulatory support, and agency query resolution.",
    fullDesc: "Regulatory compliance is embedded into every stage of our work. We author, review, and finalize high-quality regulatory CMC filings (IND, IMPD, NDA, BLA, ANDA) to accelerate agency approvals and avoid costly clinical holds.",
    iconName: "FileCheck",
    features: [
      "Authoring and reviewing eCTD Module 3 (Quality) documentation",
      "IND / IMPD / BLA / NDA submission package preparation",
      "Regulatory briefing document drafting for FDA Type A/B/C meetings",
      "Responses to Health Authority Information Requests (IRs)",
      "Post-approval lifecycle management & change control assessment"
    ],
    deliverables: [
      "Complete Module 3 regulatory sections ready for eCTD publishing",
      "Comprehensive CMC Gap Analysis and Risk Mitigation Strategy",
      "Health Authority meeting pre-reads and response packages"
    ],
    applicableTo: ["All Biopharmaceutical Clients", "Universities", "Global Sponsors"]
  }
];

export const EXPERTISE_DATA: TechnologyExpertise[] = [
  {
    id: "long-acting-injectables",
    slug: "long-acting-injectables",
    title: "Long-Acting Injectables (LAIs)",
    subtitle: "Microparticles, Liposomes, In-Situ Gels, and Oil Depots",
    description: "Long-acting injectable formulations provide sustained therapeutic drug levels over weeks or months, vastly improving patient compliance. InnoTech BioPharm Solutions specializes in complex depot matrix systems, PLGA microspheres, and in-situ forming gel depots.",
    highlights: [
      "PLGA microspheres & microparticle engineering",
      "In-situ forming gel matrices (sucrose acetate, biodegradable polymers)",
      "Oil-based suspensions and solution depots",
      "In-vitro dissolution/release method development correlating to in-vivo PK"
    ],
    applications: ["Oncology", "Central Nervous System (CNS)", "Ophthalmology", "Chronic Infectious Diseases"],
    icon: "Syringe",
    image: ""
  },
  {
    id: "lipid-nanoparticles",
    slug: "lipid-nanoparticles",
    title: "Lipid Nanoparticles (LNPs) & Nucleic Acids",
    subtitle: "mRNA, siRNA, DNA, and Oligonucleotide Delivery",
    description: "Unlocking the potential of nucleic acid therapeutics requires sophisticated nanoparticle delivery vehicles. We offer specialized LNP development focusing on lipid composition, N/P ratio, encapsulation efficiency, and lyophilization for room-temperature stability.",
    highlights: [
      "Ionizable lipid formulation optimization",
      "Microfluidic mixing process development & scale-up",
      "High encapsulation efficiency (>90%) with tight PDI",
      "Lyophilization & long-term storage stability enhancement"
    ],
    applications: ["Gene Therapy", "mRNA Vaccines", "RNAi Therapeutics", "Rare Diseases"],
    icon: "Dna",
    image: ""
  },
  {
    id: "ocular-drug-delivery",
    slug: "ocular-drug-delivery",
    title: "Ocular Drug Delivery Systems",
    subtitle: "Anterior & Posterior Segment Targeted Therapeutics",
    description: "Ophthalmic delivery presents unique physiological barriers. We engineer bioadhesive gels, intraocular micro-implants, and nano-emulsions tailored for targeted anterior and posterior ocular tissue penetration.",
    highlights: [
      "Bioadhesive in-situ gels for extended corneal contact",
      "Bioerodible intravitreal implants and sustained depots",
      "Preservative-free sterile formulation design",
      "Particle size reduction for zero irritation"
    ],
    applications: ["Age-Related Macular Degeneration (AMD)", "Glaucoma", "Diabetic Retinopathy", "Dry Eye Syndrome"],
    icon: "Eye",
    image: ""
  },
  {
    id: "solubility-enhancement",
    slug: "solubility-enhancement",
    title: "Solubility & Bioavailability Enhancement",
    subtitle: "Overcoming BCS Class II and IV Molecule Challenges",
    description: "Over 70% of candidate molecules in drug discovery suffer from poor aqueous solubility. InnoTech BioPharm Solutions utilizes proven solubility technologies to elevate bioavailability and therapeutic index.",
    highlights: [
      "Amorphous Solid Dispersions (ASD) via Spray Drying & Hot Melt Extrusion",
      "Self-Emulsifying Drug Delivery Systems (SEDDS / SNEDDS)",
      "Nano-crystals and media milling technologies",
      "Cyclodextrin complexation and co-crystal formation"
    ],
    applications: ["Oral Solid Dosages", "Poorly Soluble Injectables", "Oncology Small Molecules"],
    icon: "Sparkles",
    image: ""
  },
  {
    id: "hpapi-formulation",
    slug: "hpapi-formulation",
    title: "High Potency APIs (HPAPIs)",
    subtitle: "Containment, Safety, and Precision Dosage",
    description: "Handling highly potent active pharmaceutical ingredients demands specialized containment strategy, precise dose uniformity, and strict safety protocols to ensure patient efficacy and operator safety.",
    highlights: [
      "OEL / ADE containment assessment and formulation design",
      "Low-dose accuracy and micro-encapsulation techniques",
      "Cross-contamination prevention & cleaning validation protocols",
      "Specialty oncology and hormonal drug products"
    ],
    applications: ["Targeted Cancer Therapies", "Immunosuppressants", "Endocrine Disorders"],
    icon: "ShieldAlert",
    image: ""
  }
];

export const CLIENT_SEGMENTS = [
  {
    title: "Emerging Biotech & Startups",
    desc: "Lean, high-speed CMC development designed to reach First-In-Human (FIH) clinical trials efficiently without wasting valuable capital.",
    icon: "Rocket",
    perks: [
      "Early-stage formulation screening",
      "IND-enabling CMC roadmap & documentation",
      "Flexible, milestone-based consulting models"
    ]
  },
  {
    title: "Mid-Size & Specialty Pharma",
    desc: "Scalable formulation and analytical strategy to overcome technical hurdles, life-cycle extension, and multi-country regulatory filings.",
    icon: "Building2",
    perks: [
      "Formulation re-design & 505(b)(2) strategy",
      "CDMO technology transfer oversight",
      "Comprehensive Module 3 authoring"
    ]
  },
  {
    title: "CMOs & CDMO Partners",
    desc: "Specialized analytical method validation, process troubleshooting, scale-up modeling, and external technical advisory.",
    icon: "Factory",
    perks: [
      "DoE process design space validation",
      "Complex fill-finish troubleshooting",
      "Analytical method transfer & validation"
    ]
  },
  {
    title: "Universities & Research Institutes",
    desc: "Translating benchtop academic drug discoveries into scalable, regulatory-compliant biopharmaceutical drug product candidates.",
    icon: "GraduationCap",
    perks: [
      "Translational CMC strategy",
      "Grant CMC narrative drafting",
      "Proof-of-Concept formulation scale-up"
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "mastering-long-acting-injectables",
    slug: "mastering-long-acting-injectables",
    title: "Mastering Long-Acting Injectables (LAIs): InnoTech BioPharm Solutions' Proven QbD Strategies for Successful Development",
    summary: "Long-acting injectables (LAIs) represent a transformative milestone in patient compliance and therapeutic efficacy. Discover how Quality-by-Design (QbD) principles and advanced polymer science overcome release kinetics hurdles.",
    category: "Formulation Science",
    author: {
      name: "Raj Thota, MBA, MS",
      role: "Founder & Principal Consultant",
      image: ""
    },
    publishedAt: "September 18, 2026",
    readTime: "7 min read",
    image: formulationLabImg,
    tags: ["Long-Acting Injectables", "QbD", "PLGA", "Depot Formulations", "Parenteral"],
    content: {
      intro: "Long-acting injectables (LAIs) have revolutionized the treatment landscape for chronic conditions such as schizophrenia, substance use disorders, oncology, and HIV management. By delivering sustained therapeutic drug levels over periods ranging from several weeks to months, LAIs eliminate the burden of daily oral dosing and drastically reduce non-compliance rates. However, designing an LAI system requires overcoming intricate formulation, polymer degradation, and burst release challenges.",
      sections: [
        {
          heading: "The Quality-by-Design (QbD) Framework for LAIs",
          text: "At InnoTech BioPharm Solutions, we implement a rigorous Quality-by-Design approach starting with defining the Quality Target Product Profile (QTPP). For long-acting injectables, key QTPP parameters include target therapeutic window, dose volume, syringeability, needle gauge (e.g., 21G–25G), burst release threshold (<10%), and degradation profile.",
          bullets: [
            "Identification of Critical Quality Attributes (CQAs) such as particle size distribution, glass transition temperature (Tg), and drug loading efficiency.",
            "Understanding Critical Material Attributes (CMAs) including polymer lactide-to-glycolide (L:G) ratios, molecular weight distribution, and terminal end-groups (capped vs uncapped).",
            "Screening Critical Process Parameters (CPPs) such as homogenization speed, solvent evaporation rates, and microfluidic flow ratios."
          ],
          keyTakeaway: "A well-structured QbD framework mitigates late-stage manufacturing failures and establishes a clear design space accepted by regulatory authorities."
        },
        {
          heading: "Overcoming Initial Burst Release and Achieving Zero-Order Release",
          text: "One of the most persistent hurdles in LAI development is avoiding an initial high burst release of active pharmaceutical ingredient (API), which can cause acute toxicity or dose dumping. InnoTech BioPharm utilizes multi-layered polymeric coatings, optimized solvent removal profiles, and targeted surfactant blends to control initial surface wash-off and deliver sustained zero-order or pseudo-zero-order release kinetics.",
          bullets: [
            "Microparticle double-emulsion (w/o/w) engineering with controlled shear rate.",
            "In-situ gel matrix formulation using biodegradable polymers that solidify cleanly upon subcutaneous contact.",
            "Advanced biorelevant in-vitro dissolution method development correlating directly with in-vivo pharmacokinetics (IVIVC)."
          ]
        },
        {
          heading: "Scale-Up Considerations and cGMP Tech Transfer",
          text: "Moving from laboratory scale (10 grams) to commercial production (tens of kilograms) requires careful fluid dynamics and sterile processing considerations. Shear forces during emulsification and aseptic filtration steps must be characterized accurately to preserve particle size uniformity.",
          keyTakeaway: "InnoTech BioPharm Solutions provides step-by-step tech transfer protocols and person-in-plant support to guarantee successful production runs at partner CDMO facilities."
        }
      ],
      conclusion: "LAIs represent the pinnacle of drug delivery engineering. By marrying polymer science with QbD modeling, InnoTech BioPharm Solutions empowers sponsors to convert promising APIs into market-leading long-acting parenteral therapies."
    }
  },
  {
    id: "qbd-based-approach-to-ocular-drug-delivery",
    slug: "qbd-based-approach-to-ocular-drug-delivery",
    title: "QbD-Based Approach to Ocular Drug Delivery: Challenges, Solutions, and Innovations",
    summary: "Ocular drug delivery requires navigating steep anatomical barriers and strict safety criteria. Explore how bioadhesive gels, intraocular micro-implants, and nano-emulsions enable extended residence time and posterior segment targeting.",
    category: "Ophthalmic Therapeutics",
    author: {
      name: "Raj Thota, MBA, MS",
      role: "Founder & Principal Consultant",
      image: ""
    },
    publishedAt: "August 29, 2026",
    readTime: "6 min read",
    image: ocularDeliveryImg,
    tags: ["Ocular Delivery", "In-Situ Gels", "Intravitreal Implants", "Nanoparticles", "Bioavailability"],
    content: {
      intro: "Delivering therapeutic agents to the anterior and posterior segments of the eye remains one of the most demanding challenges in pharmaceutical science. Physiological mechanisms—including nasolacrimal drainage, corneal epithelial tight junctions, and vitreous clearance—limit topical drug bio-absorption to less than 5%. InnoTech BioPharm Solutions addresses these limitations through innovative QbD-engineered formulation platforms.",
      sections: [
        {
          heading: "Addressing Anterior Segment Barriers with Bioadhesive In-Situ Gels",
          text: "Conventional eye drops suffer from rapid drainage and frequent dosing requirements. InnoTech BioPharm develops thermo-sensitive and ion-sensitive in-situ gel systems that transition from liquid state at room temperature to a clear gel upon contact with tear fluid ions and ocular temperature.",
          bullets: [
            "Polymers utilized: Gellan gum, alginate, and Pluronic F-127 combinations.",
            "Increased corneal precorneal residence time from minutes to several hours.",
            "Preservative-free single-dose packaging compatibility."
          ],
          keyTakeaway: "In-situ gels significantly improve patient compliance and reduce systemic toxicity caused by excessive nasolacrimal absorption."
        },
        {
          heading: "Posterior Segment Targeting & Intravitreal Depot Implants",
          text: "For back-of-the-eye diseases such as wet AMD, diabetic macular edema, and retinal vein occlusion, frequent intravitreal injections carry risks of endophthalmitis and retinal detachment. Sustained-release bioerodible implants engineered with tailored poly(lactic-co-glycolic acid) (PLGA) ratios enable drug delivery lasting 3 to 6 months per administration.",
          bullets: [
            "Extrusion and micro-molding fabrication of micro-rod implants.",
            "Zero-order release profiles over 180 days with intact drug integrity.",
            "Sterilization validation via gamma irradiation or aseptic processing without thermal degradation."
          ]
        }
      ],
      conclusion: "Through targeted QbD methodologies, InnoTech BioPharm Solutions helps biotechnology partners navigate ocular formulation design space, ensuring ocular tolerance, stability, and therapeutic success."
    }
  },
  {
    id: "optimizing-liposomal-drug-delivery",
    slug: "optimizing-liposomal-drug-delivery",
    title: "Optimizing Liposomal Drug Delivery: Advanced Formulation and Scale-Up Strategies",
    summary: "Liposomal delivery systems enhance tumor targeting, reduce systemic toxicity, and solubilize difficult drugs. Learn about lipid selection, microfluidic manufacturing, and remote loading techniques.",
    category: "Targeted Delivery",
    author: {
      name: "Raj Thota, MBA, MS",
      role: "Founder & Principal Consultant",
      image: ""
    },
    publishedAt: "July 14, 2026",
    readTime: "8 min read",
    image: processScaleUpImg,
    tags: ["Liposomes", "Nanomedicine", "Oncology", "Microfluidics", "Scale-Up"],
    content: {
      intro: "Liposomal formulations have gained widespread clinical acceptance due to their ability to alter drug pharmacokinetics, extend circulation half-life, and direct active agents to disease sites via the Enhanced Permeability and Retention (EPR) effect. However, lipid stability, batch-to-batch reproducibility, and active loading efficiency remain critical developmental considerations.",
      sections: [
        {
          heading: "Rational Lipid Selection and Membrane Rigidity Engineering",
          text: "The selection of structural lipids (e.g., DSPC, DPPC, POPC) combined with cholesterol ratios determines the phase transition temperature (Tm) and membrane fluidity of liposomal vesicles. PEGylated lipids (e.g., DSPE-mPEG2000) create a steric barrier that prevents opsonization and macrophage clearance.",
          bullets: [
            "Optimizing lipid molar ratios to prevent premature drug leakage in plasma.",
            "Transitioning from traditional thin-film hydration to high-throughput microfluidic cross-flow mixing.",
            "Particle sizing control achieving monodisperse populations (<100 nm with PDI < 0.1)."
          ]
        },
        {
          heading: "Active Transmembrane Gradient Loading",
          text: "For weakly basic API molecules, active remote loading driven by ammonium sulfate or pH gradients yields encapsulation efficiencies exceeding 95%, while maintaining high drug-to-lipid ratios.",
          keyTakeaway: "Gradient loading produces highly stable internal crystalline drug complexes, protecting the API from rapid enzymatic degradation."
        }
      ],
      conclusion: "InnoTech BioPharm Solutions brings deep expertise in designing custom lipid nanoparticle and liposomal platforms from early proof-of-concept through to commercial CDMO technology transfer."
    }
  },
  {
    id: "comprehensive-solubility-enhancement-strategies",
    slug: "comprehensive-solubility-enhancement-strategies",
    title: "Comprehensive Solubility Enhancement Strategies for Poorly Soluble Drugs",
    summary: "Overcoming BCS Class II and IV drug solubility hurdles requires a toolkit of technology platforms. Review spray-dried dispersions, hot-melt extrusion, and self-emulsifying technology.",
    category: "Bioavailability",
    author: {
      name: "Raj Thota, MBA, MS",
      role: "Founder & Principal Consultant",
      image: ""
    },
    publishedAt: "June 02, 2026",
    readTime: "6 min read",
    image: solubilityImg,
    tags: ["Solubility", "Amorphous Solid Dispersions", "Spray Drying", "HME", "SEDDS"],
    content: {
      intro: "Poor aqueous solubility is the single most common cause of early lead attrition in modern pharmaceutical discovery pipelines. Compounds classified under BCS Class II (low solubility, high permeability) and BCS Class IV (low solubility, low permeability) require specialized formulation platforms to achieve therapeutic exposure in pre-clinical models and human trials.",
      sections: [
        {
          heading: "Amorphous Solid Dispersions (ASDs): Spray Drying vs. Hot-Melt Extrusion",
          text: "Converting a crystalline drug into its high-energy amorphous form dramatically enhances dissolution rate and thermodynamic solubility. Polymer matrices (e.g., HPMCAS, COPVIDONE, PVA) lock the drug in its amorphous state, preventing recrystallization during storage and gastrointestinal transit.",
          bullets: [
            "Spray-Dried Dispersions (SDD): Ideal for heat-sensitive or high-melting-point APIs using organic solvent systems.",
            "Hot-Melt Extrusion (HME): Solvent-free continuous process ideal for robust molecules with suitable thermal profiles.",
            "Solid-state characterization via Powder X-Ray Diffraction (PXRD), DSC, and mDSC."
          ]
        },
        {
          heading: "Self-Emulsifying Drug Delivery Systems (SEDDS / SNEDDS)",
          text: "For highly lipophilic molecules (LogP > 4), isotropic mixtures of oils, surfactants, and co-surfactants form fine micro-emulsions (<50 nm) spontaneously upon dilution with aqueous GI fluid.",
          keyTakeaway: "SEDDS bypasses dissolution rate limitations and avoids hepatic first-pass metabolism by promoting lymphatic absorption."
        }
      ],
      conclusion: "Selecting the right solubility technology early in development saves millions in clinical trials. InnoTech BioPharm Solutions conducts systematic pre-formulation screening to pinpoint the optimal technology path for your drug candidate."
    }
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "job-1",
    title: "Senior CMC Formulation Scientist - Parenterals & LAIs",
    department: "Formulation R&D",
    location: "Oswego, IL / Hybrid",
    type: "Full-Time",
    experience: "5+ Years Post-PhD / 8+ Years MS",
    description: "We are seeking an experienced Senior Formulation Scientist to lead client projects focused on parenteral drug product development, PLGA microparticles, long-acting injectables, and lipid nanoparticles.",
    responsibilities: [
      "Design and execute formulation screening experiments using Quality by Design (QbD) principles",
      "Develop complex parenteral dosage forms including LAIs, in-situ gels, and liposomes",
      "Lead technical discussions with client project teams and present progress reports",
      "Author eCTD Module 3 sections and technology transfer documentation for CDMO scale-up"
    ],
    requirements: [
      "PhD or MS in Pharmaceutical Sciences, Chemical Engineering, Chemistry or related field",
      "Minimum 5 years hands-on experience in complex formulation development and aseptic processing",
      "Demonstrated track record with polymer chemistry, PLGA microparticles, or LNP systems",
      "Strong written and oral communication skills"
    ]
  },
  {
    id: "job-2",
    title: "Analytical Development Lead - Biologics & Small Molecules",
    department: "Analytical Sciences",
    location: "Oswego, IL / On-Site",
    type: "Full-Time",
    experience: "6+ Years Experience",
    description: "Looking for an Analytical Lead to manage analytical method development, characterization, stability testing, and validation across HPLC, LC-MS, SEC, and dissolution platforms.",
    responsibilities: [
      "Develop and validate stability-indicating analytical methods compliant with ICH Q2(R1)",
      "Perform extractables & leachables and nitrosamine risk assessments for pharmaceutical packages",
      "Oversee stability study protocols and data trending according to ICH guidelines",
      "Collaborate with quality control teams at partner CDMO facilities"
    ],
    requirements: [
      "BS/MS/PhD in Analytical Chemistry, Biochemistry or related discipline",
      "In-depth knowledge of HPLC/UPLC, LC-MS, UV-Vis, and particle sizing instruments",
      "Strong understanding of cGMP regulations and regulatory CMC expectations",
      "Experience with biologics characterization is highly desirable"
    ]
  },
  {
    id: "job-3",
    title: "Regulatory CMC Consultant",
    department: "Regulatory Affairs",
    location: "Remote / Hybrid",
    type: "Full-Time or Contract",
    experience: "7+ Years Industry Experience",
    description: "Join our regulatory team to author, review, and finalize eCTD Module 3 documents, IND/BLA/NDA filings, and manage Health Authority interactions for global pharmaceutical clients.",
    responsibilities: [
      "Author eCTD Module 3 (Quality) sub-sections for IND, IMPD, NDA, and BLA filings",
      "Perform regulatory gap analysis on client CMC packages and develop mitigation plans",
      "Draft responses to FDA/EMA Information Requests and deficiencies",
      "Advise clients on global regulatory CMC submission strategy"
    ],
    requirements: [
      "Advanced degree (MS, PhD, PharmD) in Life Sciences or Regulatory Affairs",
      "7+ years of experience authoring regulatory CMC documentation in biotech or pharma",
      "Proven success leading successful FDA IND/NDA/BLA submissions",
      "Deep understanding of ICH guidelines, FDA guidance documents, and cGMP standards"
    ]
  }
];

export const FAQS = [
  {
    q: "What types of therapeutic modalities does InnoTech BioPharm Solutions support?",
    a: "We support a wide spectrum of drug modalities, including small molecules, biologics (monoclonal antibodies, recombinant proteins), peptides, oligonucleotides, lipid nanoparticles (LNPs) for mRNA/DNA delivery, long-acting injectables (LAIs), ocular therapeutics, and high potency APIs (HPAPIs)."
  },
  {
    q: "How does InnoTech BioPharm Solutions collaborate with sponsors and CDMOs?",
    a: "We operate as an agile, seamless extension of your technical team. Depending on your needs, we provide strategic CMC consulting, hands-on formulation design, regulatory Module 3 authoring, vendor/CDMO selection, or Person-in-Plant (PIP) oversight during cGMP scale-up runs."
  },
  {
    q: "What is your approach to Quality by Design (QbD)?",
    a: "We integrate QbD into early development by defining the Quality Target Product Profile (QTPP), identifying Critical Quality Attributes (CQAs), and conducting Design of Experiments (DoE) studies to map out a clear operational design space that ensures robust process scale-up and regulatory compliance."
  },
  {
    q: "Where is InnoTech BioPharm Solutions located, and do you serve international clients?",
    a: "Our headquarters is located at 111 Spencer Ln, Oswego, IL 60543, USA. We serve biotech, pharmaceutical, and CDMO clients globally across North America, Europe, Asia, and emerging markets."
  }
];
