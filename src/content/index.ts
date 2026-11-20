/**
 * UniPod content layer.
 *
 * Editorial rule for this file: the UNDP University Innovation Pod (UniPod) is the
 * makerspace and prototyping facility. The Abdul Samad Rabiu International Centre for
 * Innovation and Entrepreneurship (ASR-iCIE) is the edifice that houses it. Never
 * describe the UniPod as ASR-iCIE, and never describe ASR-iCIE as UNDP-funded — ASR
 * Africa funded the building; UNDP supplies the equipment, standards and programming.
 *
 * Fields marked `verified: false` are still awaiting confirmation against the official
 * UNDP equipment handover audit. Do not present unverified inventory as final.
 */

export type Stat = { value: string; label: string; detail?: string };

export const heroStats: Stat[] = [
  { value: "7", label: "Technical labs & studios", detail: "inside the ASR-iCIE complex" },
  { value: "5", label: "Priority innovation areas", detail: "for North-East Nigeria" },
  { value: "08:00–18:00", label: "Weekday lab hours", detail: "WAT, Monday to Friday" },
  { value: "Open", label: "Access for UNIMAID", detail: "students, staff & researchers" },
];

export const stats: Stat[] = [
  { value: "7", label: "Makerspace zones", detail: "Prototyping, CNC, electronics, energy, agro-tech, fabrication studios, media" },
  { value: "5", label: "Priority sectors", detail: "Agro-tech, renewable energy, health devices, climate resilience, digital & IoT" },
  { value: "3", label: "Access tiers", detail: "Open access, safety induction required, technician supervised" },
  { value: "2", label: "Convening spaces", detail: "Seminar room and auditorium via the ASR-iCIE complex" },
];

export const mission = {
  eyebrow: "The mandate",
  title: "Concept to working MVP, inside one building.",
  body: "The UNDP UniPod at the University of Maiduguri exists to give innovators, students and researchers across North-East Nigeria open, structured access to industrial prototyping tools, design-thinking studios and product-development support. It is not a lecture theatre and not a co-working café — it is a working pod where ideas leave as fabricated, tested, documented prototypes.",
  pillars: [
    {
      title: "Build for the Lake Chad Basin",
      body: "Priority problems are set by the region: post-harvest losses, off-grid energy, diagnostic access, water and climate resilience. Briefs start here, not in an imported playbook.",
    },
    {
      title: "Structured access, not gatekeeping",
      body: "Every lab has a defined access tier, a safety standard and a technician. Eligibility is published so nobody has to guess whether the door is open to them.",
    },
    {
      title: "Hardware and software together",
      body: "A prototype usually needs a board, an enclosure, an interface and a business case. The UniPod is laid out so a single team can do all four under one roof.",
    },
    {
      title: "Connected to a pan-African network",
      body: "As part of UNDP's timbuktoo Initiative, the UniPod links Maiduguri makers to continental innovation frameworks, venture calls and peer pods across Africa.",
    },
  ],
};


/**
 * Institutional positioning — used on the About page and in structured data.
 * This is the authoritative explanation of how the UniPod and ASR-iCIE relate.
 */
export const positioning = {
  eyebrow: "Institutional positioning",
  title: "Two institutions, one complex, clearly separated roles.",
  lead: "The names are often confused, so we state it plainly: the UniPod is the makerspace, ASR-iCIE is the building it sits in.",
  rows: [
    {
      name: "UNDP UniPod",
      short: "The makerspace",
      body: "A design, prototyping and venture-incubation facility created under UNDP's pan-African timbuktoo Initiative, in partnership with the Federal Government of Nigeria and the University of Maiduguri.",
      provides: "Technical equipment, global innovation frameworks, makerspace standards, pan-African ecosystem linkages",
    },
    {
      name: "ASR-iCIE",
      short: "The host edifice",
      body: "The Abdul Samad Rabiu International Centre for Innovation and Entrepreneurship — the purpose-built university centre and convening complex on the UNIMAID campus, constructed through ASR Africa's ₦1 billion grant.",
      provides: "Physical centre complex, seminar room and auditorium, institutional convening capacity",
    },
    {
      name: "University of Maiduguri",
      short: "The host institution",
      body: "Provides campus integration, faculty mentorship, student and researcher talent, and governance of the centre through ASR-iCIE.",
      provides: "Talent, faculty supervision, academic pathway, institutional governance",
    },
  ],
};

export type Person = { name: string; role: string; org: string; bio: string };

export const leadership: Person[] = [
  {
    name: "Prof. Mohammed Dauda",
    role: "UniPod Coordinator / Director, ASR-iCIE",
    org: "University of Maiduguri",
    bio: "FNSE, FNIMechE. Coordinates UniPod operations and technical programming within the ASR-iCIE complex, and serves as the institutional link between the university and UNDP.",
  },
  {
    name: "Prof. Mohammed Laminu Mele",
    role: "Vice-Chancellor",
    org: "University of Maiduguri",
    bio: "Host university leadership. Provides the institutional mandate and governance support that allows the UniPod to operate on campus.",
  },
  {
    name: "Miss Elsie Attafuah",
    role: "Resident Representative in Nigeria",
    org: "UNDP Nigeria",
    bio: "Leads UNDP Nigeria's country programme, including the timbuktoo Initiative under which the UniPod is equipped and supported.",
  },
];

export const timeline = [
  {
    year: "2023",
    title: "timbuktoo opens to Nigerian universities",
    body: "UNDP's pan-African timbuktoo Initiative invites Nigerian universities to host University Innovation Pods, in partnership with the Federal Government of Nigeria.",
  },
  {
    year: "2024",
    title: "The ASR-iCIE complex is commissioned",
    body: "The Abdul Samad Rabiu International Centre for Innovation and Entrepreneurship is completed on the UNIMAID campus through ASR Africa's ₦1 billion grant, providing the physical edifice the UniPod will occupy.",
  },
  {
    year: "2025",
    title: "UniPod equipment installed and handed over",
    body: "UNDP Nigeria supplies and installs the makerspace equipment — fabrication, CNC, electronics, energy and agro-processing benches — recorded through a formal handover audit.",
  },
  {
    year: "2025",
    title: "UniPod labs open to UNIMAID and the North-East",
    body: "Seven technical zones come online with published access tiers, safety inductions and technician cover, welcoming students, researchers and external innovators.",
  },
  {
    year: "2026",
    title: "Regional challenges and demo days",
    body: "The UniPod begins hosting UNDP innovation challenges, technical bootcamps and demo days in the ASR-iCIE seminar room and auditorium.",
  },
];

/* ---------------------------------------------------------------------------------------
 * LABS & MAKERSPACES
 * Every lab entry carries the five required fields:
 *   1. name + technicalFocus      2. workflows (what you can actually build)
 *   3. equipment (with `verified` flag against the UNDP handover audit)
 *   4. status (Available / In Session / Maintenance)
 *   5. access tier (Open Access / Safety Induction Required / Technician Supervised)
 * ------------------------------------------------------------------------------------- */

export type AccessTier = "Open Access" | "Safety Induction Required" | "Technician Supervised";
export type LabStatus = "Available" | "In Session" | "Maintenance";

export type Lab = {
  slug: string;
  name: string;
  technicalFocus: string;
  summary: string;
  description: string;
  workflows: string[];
  equipment: string[];
  /** True once the inventory has been reconciled against the official UNDP handover audit. */
  verified: boolean;
  status: LabStatus;
  access: AccessTier;
  accent: "ember" | "chad" | "sand";
  icon: "printer" | "cpu" | "pen" | "glasses" | "flask" | "box";
};

export const labs: Lab[] = [
  {
    slug: "prototyping-design",
    name: "Prototyping & Design Lab",
    technicalFocus: "3D printing, CAD modelling and product design workstations",
    summary: "Where a model on a screen becomes a part in your hand.",
    description:
      "The entry point for most teams. Work through parametric CAD at the design workstations, then send the file straight to the additive manufacturing bench. Tolerances, wall thickness and print orientation get reviewed with a technician before anything runs.",
    workflows: [
      "Parametric CAD modelling (part and assembly)",
      "FDM and resin additive manufacturing",
      "Design-for-manufacture review with a technician",
      "Fit, form and tolerance checking on physical parts",
      "Iteration cycles — model, print, measure, revise",
    ],
    equipment: [
      "FDM 3D printers",
      "Resin (SLA) 3D printers",
      "CAD workstations with product design software",
      "Digital callipers and measurement bench",
      "Assembly and finishing bench",
    ],
    verified: false,
    status: "Available",
    access: "Safety Induction Required",
    accent: "ember",
    icon: "printer",
  },
  {
    slug: "cnc-fabrication",
    name: "Engineering & CNC Fabrication Workshop",
    technicalFocus: "Precision machining, metalworking and structural prototyping",
    summary: "Subtractive manufacturing at structural scale.",
    description:
      "For parts that need to carry load or hold real precision. The workshop covers metalworking and CNC operation under technician supervision — no solo use, because the machines will not forgive a bad setup.",
    workflows: [
      "CNC routing and precision machining of structural parts",
      "Sheet metal cutting, folding and joining",
      "Welding and structural frame fabrication",
      "Frame and enclosure fabrication for field hardware",
      "Prototype jig and fixture making",
    ],
    equipment: [
      "CNC router",
      "Precision machining tools",
      "Metalworking bench (cutting, folding, joining)",
      "Welding station",
      "Structural assembly benches",
    ],
    verified: false,
    status: "Available",
    access: "Technician Supervised",
    accent: "chad",
    icon: "box",
  },
  {
    slug: "electronics-iot",
    name: "Electronics, Embedded Systems & IoT Lab",
    technicalFocus: "PCB prototyping, diagnostic instruments, sensors and hardware testing",
    summary: "Boards, sensors and firmware — tested on the bench, not on faith.",
    description:
      "Where most of the region's hardware ideas actually get proven. Design and etch PCBs, bring up embedded firmware, and use bench instruments to prove the circuit behaves before it goes into the field.",
    workflows: [
      "PCB design and prototyping",
      "Embedded firmware development and bring-up",
      "Sensor integration and calibration",
      "Power and signal diagnostics on bench instruments",
      "IoT device prototyping and connectivity testing",
    ],
    equipment: [
      "PCB prototyping setup",
      "Oscilloscopes and diagnostic instruments",
      "Sensor and component kits",
      "Soldering and rework stations",
      "Hardware testing benches",
    ],
    verified: false,
    status: "Available",
    access: "Safety Induction Required",
    accent: "chad",
    icon: "cpu",
  },
  {
    slug: "renewable-energy",
    name: "Renewable Energy Lab",
    technicalFocus: "Solar PV and off-grid energy prototyping and testing",
    summary: "Off-grid power, measured before it is promised.",
    description:
      "The North-East runs on off-grid solutions, so they get their own bench. Assemble and test PV systems, battery storage and charge controllers under load, and characterise real performance rather than nameplate figures.",
    workflows: [
      "Solar PV system sizing, assembly and testing",
      "Battery storage and charge controller characterisation",
      "Off-grid system load testing and efficiency measurement",
      "Inverter and DC-DC converter prototyping",
      "Field-ready energy product validation",
    ],
    equipment: [
      "Solar PV prototyping and test benches",
      "Battery test and charge/discharge rigs",
      "Load banks and power measurement instruments",
      "Charge controller and inverter test bays",
      "Irradiance and thermal measurement tools",
    ],
    verified: false,
    status: "Available",
    access: "Technician Supervised",
    accent: "ember",
    icon: "flask",
  },
];

export const labsExtra: Lab[] = [
  {
    slug: "agro-processing",
    name: "Agro-Tech & Food Processing Lab",
    technicalFocus: "Food processing, dehydration, milling and packaging for value addition",
    summary: "Post-harvest loss is a design problem, not a weather problem.",
    description:
      "Borno's economy is agricultural, and most of the value leaks after harvest. This lab lets teams build and test processing equipment — dryers, mills, packaging — that a cooperative could actually buy and run.",
    workflows: [
      "Dehydration and drying equipment prototyping",
      "Milling and size-reduction equipment testing",
      "Packaging and shelf-life trials",
      "Post-harvest handling and storage prototyping",
      "Small-scale processing line piloting",
    ],
    equipment: [
      "Food processing and dehydration equipment",
      "Milling equipment",
      "Packaging station",
      "Moisture and basic quality testing instruments",
      "Washdown-capable processing bench",
    ],
    verified: false,
    status: "Available",
    access: "Safety Induction Required",
    accent: "sand",
    icon: "flask",
  },
  {
    slug: "wood-textiles",
    name: "Wood & Textiles Fabrication Studios",
    technicalFocus: "Joinery, material fabrication and industrial garment/textile prototyping",
    summary: "Two trades that turn a design into something people can hold.",
    description:
      "Furniture, fixtures, fashion and technical textiles share a fabrication floor. Joinery for structural and product woodwork; industrial sewing and textile tooling for garment and material prototyping at a professional standard.",
    workflows: [
      "Joinery and wood product fabrication",
      "Furniture and fixture prototyping",
      "Industrial garment construction and pattern making",
      "Technical textile and material prototyping",
      "Upholstery and finishing",
    ],
    equipment: [
      "Joinery and woodworking machinery",
      "Wood assembly and finishing benches",
      "Industrial sewing machines",
      "Pattern-making and cutting tables",
      "Textile finishing equipment",
    ],
    verified: false,
    status: "Available",
    access: "Safety Induction Required",
    accent: "sand",
    icon: "pen",
  },
  {
    slug: "creatives-media",
    name: "Creatives & Digital Media Studio",
    technicalFocus: "Audio-visual production, podcasting and digital content/rendering workstations",
    summary: "If nobody can see the product, it does not exist.",
    description:
      "Product photography, demo films, podcasting and 3D rendering — the studio that makes a prototype legible to a customer, a funder or a cooperative board.",
    workflows: [
      "Product photography and demo videography",
      "Podcast and audio production",
      "Motion and graphic content for product launch",
      "3D rendering and visualisation of prototypes",
      "Pitch and demo-day media production",
    ],
    equipment: [
      "Audio-visual production kit (camera, lighting, audio)",
      "Podcast recording booth",
      "Rendering and editing workstations",
      "Product photography backdrop and lighting",
      "Content capture setup",
    ],
    verified: false,
    status: "Available",
    access: "Open Access",
    accent: "chad",
    icon: "glasses",
  },
  {
    slug: "coworking-design-thinking",
    name: "Co-Working & Design Thinking Studio",
    technicalFocus: "Collaborative ideation, sprint planning and venture-building space",
    summary: "Frame the problem properly before anyone touches a machine.",
    description:
      "A configurable studio for customer discovery, sprint planning, critique sessions and team working. This is where a brief gets sharpened — and where a lot of bad ideas get correctly killed early.",
    workflows: [
      "Design sprints and problem framing",
      "Customer discovery and interview synthesis",
      "Team co-working and build sprints",
      "Critique and prototype review sessions",
      "Venture planning and pitch preparation",
    ],
    equipment: [
      "Configurable work tables",
      "Full-height dry-wipe walls",
      "Presentation and screen-share setup",
      "Prototyping and craft supply library",
      "Quiet-focus booths",
    ],
    verified: true,
    status: "Available",
    access: "Open Access",
    accent: "ember",
    icon: "pen",
  },
];

/** Ordered catalog of all seven UniPod technical zones. */
export const allLabs: Lab[] = [...labs, ...labsExtra];

/** Shared ASR-iCIE convening spaces available to UniPod programming. */
export const conveningSpaces = [
  {
    name: "ASR-iCIE Seminar Room",
    body: "Booked through the centre for bootcamps, technical workshops and challenge briefings hosted by the UniPod.",
  },
  {
    name: "ASR-iCIE Auditorium",
    body: "Used for demo days, hackathon finals, public lectures and official commissioning events.",
  },
];


/* ---------------------------------------------------------------------------------------
 * PRIORITY INNOVATION AREAS
 * The five sectors the UniPod is explicitly mandated to serve in North-East Nigeria.
 * ------------------------------------------------------------------------------------- */

export type PriorityArea = {
  name: string;
  focus: string;
  labs: string[];
};

export const priorityAreas: PriorityArea[] = [
  {
    name: "Agro-Tech & Post-Harvest Processing",
    focus: "Drying, milling, storage and packaging equipment that cuts losses between harvest and market.",
    labs: ["Agro-Tech & Food Processing Lab", "Prototyping & Design Lab"],
  },
  {
    name: "Clean & Off-Grid Renewable Energy",
    focus: "Solar PV, battery storage and charge control for households, clinics and small enterprise.",
    labs: ["Renewable Energy Lab", "Electronics, Embedded Systems & IoT Lab"],
  },
  {
    name: "Healthcare & Diagnostic Devices",
    focus: "Diagnostic hardware, cold-chain equipment and clinical support devices built for low-resource settings.",
    labs: ["Electronics, Embedded Systems & IoT Lab", "Prototyping & Design Lab"],
  },
  {
    name: "Climate Resilience & Water / Environmental Tech",
    focus: "Water treatment, environmental monitoring and infrastructure that holds up in a changing Sahel.",
    labs: ["Renewable Energy Lab", "Engineering & CNC Fabrication Workshop"],
  },
  {
    name: "Digital Solutions, IoT & Embedded Systems",
    focus: "Sensing, connectivity and embedded firmware for products that must work on unreliable networks.",
    labs: ["Electronics, Embedded Systems & IoT Lab", "Creatives & Digital Media Studio"],
  },
];

/* ---------------------------------------------------------------------------------------
 * ACCESS & BOOKING
 * The four-step flow required by the lab booking system.
 * ------------------------------------------------------------------------------------- */

export const eligibility = [
  {
    who: "UNIMAID students",
    detail: "Any registered undergraduate or postgraduate student of the University of Maiduguri.",
    need: "Valid student ID and a @unimaid.edu.ng email",
  },
  {
    who: "Faculty & researchers",
    detail: "Academic staff and research teams running projects that need prototyping capacity.",
    need: "Staff ID and a departmental reference",
  },
  {
    who: "External innovators & startups",
    detail: "Innovators, founders and small enterprises from across North-East Nigeria — Borno, Yobe, Adamawa, Bauchi, Gombe and Taraba.",
    need: "Institutional or national ID and a short project brief",
  },
];

export const bookingSteps = [
  {
    step: "01",
    name: "Select lab or workbench",
    body: "Choose the specific UniPod lab and the date and time slot you need. Slots run in three-hour blocks within published lab hours.",
  },
  {
    step: "02",
    name: "Submit project & institutional details",
    body: "Give your name, a @unimaid.edu.ng email or institutional/national ID, and a short description of what you intend to prototype.",
  },
  {
    step: "03",
    name: "Complete safety & SOP check",
    body: "Mandatory acknowledgement before any power tool, CNC, electrical or processing machinery is operated. Inductions are held on the floor, not online only.",
  },
  {
    step: "04",
    name: "Receive access pass",
    body: "You get a confirmation reference to present at check-in to the UniPod lab technicians. No reference, no bench.",
  },
];


/* ---------------------------------------------------------------------------------------
 * PROGRAMS, HACKATHONS & CHALLENGES
 * ------------------------------------------------------------------------------------- */

export type Program = {
  slug: string;
  name: string;
  kicker: string;
  duration: string;
  mode: string;
  commitment: string;
  description: string;
  outcomes: string[];
  cohort?: string;
  status: "open" | "waitlist" | "running";
  eligibility: string;
  category: "Challenge" | "Bootcamp" | "Venture";
};

export const programs: Program[] = [
  {
    slug: "community-innovation-challenge",
    name: "Northeast Nigeria Community Innovation Challenge",
    kicker: "UNDP challenge",
    duration: "8 weeks",
    mode: "Hybrid — UniPod labs + remote",
    commitment: "Part-time, weekends",
    description:
      "A UNDP-backed challenge calling for practical responses to specific community problems across the North-East. Teams are matched with problem owners — cooperatives, clinics, local government — and build a working prototype inside the UniPod.",
    outcomes: [
      "Problem brief owned by a real community partner",
      "Equipment and consumables covered by the challenge",
      "Technical mentorship from UniPod lab leads",
      "Demo day in the ASR-iCIE auditorium",
    ],
    cohort: "Cycle 01 — applications open",
    status: "open",
    eligibility: "Any team with a UNIMAID-affiliated member or a registered North-East entity",
    category: "Challenge",
  },
  {
    slug: "young-africa-innovates",
    name: "Young Africa Innovates",
    kicker: "timbuktoo track",
    duration: "Rolling calls",
    mode: "Hybrid — continental timbuktoo programming",
    commitment: "Varies by call",
    description:
      "The UniPod serves as a Nigerian host node for Young Africa Innovates calls under UNDP's timbuktoo Initiative, supporting young innovators through application, prototype validation and continental showcase pathways.",
    outcomes: [
      "Guided application into continental timbuktoo calls",
      "Prototype validation support at the UniPod",
      "Peer comparison with other timbuktoo pods",
      "Showcase and networking pathway across Africa",
    ],
    cohort: "Next call announced via UNDP Nigeria",
    status: "waitlist",
    eligibility: "Young innovators, typically 18–35, from the North-East or studying at UNIMAID",
    category: "Challenge",
  },
  {
    slug: "maker-bootcamps",
    name: "Technical Bootcamps & Maker Training",
    kicker: "Hands-on, machine-first",
    duration: "4 – 6 weeks per track",
    mode: "On-site at the UniPod",
    commitment: "Evenings and weekends",
    description:
      "Short, intensive technical training in the specific skills that make a prototype possible: CAD and industrial 3D printing, IoT and embedded hardware, solar engineering, and product commercialisation.",
    outcomes: [
      "Machine-safe operator standard in the trained area",
      "A portfolio of built parts or devices",
      "Direct route to unattended lab booking",
      "Commercialisation clinic for teams with a product idea",
    ],
    cohort: "Track schedule published each quarter",
    status: "running",
    eligibility: "Open to all; beginner tracks assume no prior machine experience",
    category: "Bootcamp",
  },
  {
    slug: "venture-residence",
    name: "UniPod Venture Residency",
    kicker: "For teams ready to become companies",
    duration: "16 weeks",
    mode: "Hybrid — UniPod bench + remote",
    commitment: "Full-time for lead founders",
    description:
      "A residency for teams that already have a working prototype and a real problem owner. Built around weekly build and customer milestones, with lab time held open for the duration.",
    outcomes: [
      "Dedicated team bench inside the relevant lab",
      "Weekly milestone review with a UniPod coordinator",
      "Legal, IP and regulatory clinic for hardware products",
      "Demo day in front of investors and public-sector buyers",
    ],
    cohort: "Residency 01 — waitlist open",
    status: "waitlist",
    eligibility: "Teams of 2+, at least one UNIMAID student, staff member or alumnus",
    category: "Venture",
  },
];

export const allPrograms: Program[] = programs;


/* ---------------------------------------------------------------------------------------
 * VENTURES — prototypes and companies built at the UniPod.
 * PLACEHOLDER: these profiles are illustrative. Replace with verified venture records
 * (consent, founder names, cohort, current status) before public launch.
 * ------------------------------------------------------------------------------------- */

export type Startup = {
  slug: string;
  name: string;
  tagline: string;
  sector: string;
  stage: "Idea" | "Prototype" | "Pilot" | "Revenue";
  cohort: string;
  founder: string;
  highlight: string;
  description: string;
  lab: string;
};

export const startups: Startup[] = [
  {
    slug: "kalo-coldchain",
    name: "Kalo ColdChain",
    tagline: "Solar cold storage without the solar bill.",
    sector: "Agro & Energy",
    stage: "Pilot",
    cohort: "Residency 01",
    founder: "Bilkisu Umar & Suleiman Isa",
    highlight: "12 pilot sites across Borno",
    description:
      "Modular solar-hybrid cold rooms for fish and dairy traders, paid for through a per-crate usage model rather than purchased outright.",
    lab: "Renewable Energy Lab",
  },
  {
    slug: "tsatsa",
    name: "Tsatsa Water",
    tagline: "Household water purity you can see.",
    sector: "Water & Sanitation",
    stage: "Revenue",
    cohort: "Residency 01",
    founder: "Hauwa Adamu",
    highlight: "Sold-out first production run",
    description:
      "A locally manufactured reusable cartridge and a tamper-proof indicator strip that tell a household — not a lab — when stored water is no longer safe.",
    lab: "Prototyping & Design Lab",
  },
  {
    slug: "mai-gano",
    name: "Mai Gano",
    tagline: "Field data that survives a bad network.",
    sector: "Digital & IoT",
    stage: "Prototype",
    cohort: "Challenge Cycle 01",
    founder: "Abdulrahman Bukar",
    highlight: "Store-and-forward sync, 4 MB footprint",
    description:
      "A field data platform for aid and health organisations using store-and-forward sync over low-bandwidth links, piloted with two local NGOs.",
    lab: "Electronics, Embedded Systems & IoT Lab",
  },
  {
    slug: "libri-solar",
    name: "Libri Solar",
    tagline: "Repair-first microlighting for study.",
    sector: "Energy",
    stage: "Pilot",
    cohort: "Challenge Cycle 01",
    founder: "Grace Mshelia",
    highlight: "1,200+ households served",
    description:
      "A student-designed microlamp built from repairable, locally sourced parts, with a network of collect-and-repair micro-franchisees trained in the UniPod workshops.",
    lab: "Renewable Energy Lab",
  },
  {
    slug: "sarauniya-health",
    name: "Sarauniya Health",
    tagline: "Antenatal data with the women who need it.",
    sector: "Health",
    stage: "Pilot",
    cohort: "Residency 02",
    founder: "Zainab Aisha Bulama",
    highlight: "Piloting with UNIMAID Teaching Hospital",
    description:
      "A maternal health platform enabling community health workers to track high-risk pregnancies offline and refer across the hospital network.",
    lab: "Electronics, Embedded Systems & IoT Lab",
  },
  {
    slug: "sahel-heritage",
    name: "Sahel Heritage Archive",
    tagline: "Documenting Borno's craft in 3D.",
    sector: "Creative & Heritage",
    stage: "Prototype",
    cohort: "Residency 02",
    founder: "Ali Goni Modu",
    highlight: "3D archive of 30+ craft objects",
    description:
      "An interactive archive of Kanuri crafts, textiles and architecture for schools and researchers, built with the media studio's capture and rendering setup.",
    lab: "Creatives & Digital Media Studio",
  },
  {
    slug: "garin-mota",
    name: "Garin Mota",
    tagline: "Diagnostics that fit on a motorcycle.",
    sector: "Health",
    stage: "Prototype",
    cohort: "Challenge Cycle 01",
    founder: "Dr. Fatima Zara Kyari",
    highlight: "Cold-chain-safe transport case",
    description:
      "A rugged, insulated diagnostic sample transport case designed for motorcycle couriers serving rural clinics without reliable cold chain.",
    lab: "Engineering & CNC Fabrication Workshop",
  },
];


/* ---------------------------------------------------------------------------------------
 * EVENTS — demo days, hackathons, open labs and official updates.
 * PLACEHOLDER: dates, venues and capacities are illustrative pending the official
 * UniPod programming calendar. Verify before publishing.
 * ------------------------------------------------------------------------------------- */

export type EventItem = {
  slug: string;
  title: string;
  date: string;
  endDate?: string;
  time: string;
  venue: string;
  type: "Hackathon" | "Demo Day" | "Workshop" | "Open Day" | "Talk";
  summary: string;
  description: string;
  status: "upcoming" | "past";
  capacity?: string;
};

export const events: EventItem[] = [
  {
    slug: "unipod-open-lab-2026",
    title: "UniPod Open Lab — Semester Opening",
    date: "2026-02-14",
    time: "09:00 — 16:00 WAT",
    venue: "UniPod Labs, ASR-iCIE Complex, UNIMAID",
    type: "Open Day",
    summary:
      "Every UniPod lab unlocked for one day. Print a part, fire up a bench, meet the technicians, and see what the pod can actually do.",
    description:
      "One day, all seven technical zones open to walk-ins. Guided tours of the ASR-iCIE complex, live machine demonstrations, safety induction sign-ups and a showcase from teams currently resident in the labs. Bring a sketch, a broken part or nothing at all.",
    status: "upcoming",
    capacity: "Open admission",
  },
  {
    slug: "community-innovation-challenge-briefing",
    title: "Community Innovation Challenge — Briefing & Teaming",
    date: "2026-03-07",
    time: "10:00 — 14:00 WAT",
    venue: "ASR-iCIE Seminar Room",
    type: "Workshop",
    summary:
      "Problem owners present live briefs. Teams form on the day and start scoping a working prototype.",
    description:
      "The opening session of Challenge Cycle 01. Cooperatives, clinics and local government representatives present real problems from their operations. Facilitators run a structured teaming session, and UniPod lab leads explain which equipment is available for each class of solution.",
    status: "upcoming",
    capacity: "120 participants",
  },
  {
    slug: "sahel-build-sprint",
    title: "Sahel Build Sprint — Water & Post-Harvest",
    date: "2026-03-21",
    endDate: "2026-03-22",
    time: "Day 1 08:00 — Day 2 18:00 WAT",
    venue: "Prototyping & Design Lab + Electronics Lab",
    type: "Hackathon",
    summary:
      "48 hours, open benches and a working prototype by Sunday evening. Hardware expected, not optional.",
    description:
      "A deliberately physical build sprint. Teams work against two problem areas — water access and post-harvest losses — with consumables and machine access covered. Judging prioritises usability under real field conditions over presentation polish.",
    status: "upcoming",
    capacity: "80 participants",
  },
  {
    slug: "cad-3d-printing-bootcamp",
    title: "CAD & Industrial 3D Printing Bootcamp",
    date: "2026-04-11",
    endDate: "2026-04-25",
    time: "Weekends, 09:00 — 15:00 WAT",
    venue: "Prototyping & Design Lab",
    type: "Workshop",
    summary: "Three weekends from blank file to operator-level confidence.",
    description:
      "A practical certification track covering parametric CAD, print orientation and tolerancing, machine maintenance and safe operation. Participants finish with a portfolio part and the standard required for unattended lab booking.",
    status: "upcoming",
    capacity: "18 participants",
  },
  {
    slug: "demo-day-residency-01",
    title: "Demo Day — Venture Residency 01",
    date: "2026-05-30",
    time: "15:00 — 19:00 WAT",
    venue: "ASR-iCIE Auditorium",
    type: "Demo Day",
    summary: "Sixteen weeks of bench work, then a stage. The North-East's next hardware companies.",
    description:
      "The residency's public finale. Resident teams present working prototypes to investors, public-sector buyers and the university community. Limited public seats by application.",
    status: "upcoming",
    capacity: "Invitation + limited public seats",
  },
  {
    slug: "solar-engineering-clinic",
    title: "Solar Engineering Clinic",
    date: "2025-11-15",
    time: "10:00 — 16:00 WAT",
    venue: "Renewable Energy Lab",
    type: "Workshop",
    summary: "Sizing, testing and troubleshooting off-grid systems on real benches.",
    description:
      "A one-day clinic on PV sizing, battery selection and charge controller behaviour, run entirely on the lab's test benches with load testing in the afternoon.",
    status: "past",
  },
  {
    slug: "unipod-commissioning",
    title: "UniPod Equipment Handover & Lab Opening",
    date: "2025-09-12",
    time: "11:00 — 15:00 WAT",
    venue: "ASR-iCIE Complex, UNIMAID",
    type: "Open Day",
    summary: "UNDP equipment formally handed over and the UniPod labs opened for use.",
    description:
      "The formal milestone marking the handover of UNDP-supplied makerspace equipment and the opening of the seven UniPod technical zones inside the ASR-iCIE complex.",
    status: "past",
  },
  {
    slug: "embedded-iot-workshop-2025",
    title: "Embedded Systems & IoT Workshop",
    date: "2025-10-04",
    time: "09:00 — 17:00 WAT",
    venue: "Electronics, Embedded Systems & IoT Lab",
    type: "Workshop",
    summary: "Firmware, sensors and bench diagnostics in a single intensive day.",
    description:
      "Participants brought up a microcontroller, integrated two sensors, and diagnosed a deliberately faulty circuit using the lab's oscilloscopes and test benches.",
    status: "past",
  },
];


/* ---------------------------------------------------------------------------------------
 * NEWS & UPDATES — commissioning milestones, programs, ventures, partnerships.
 * PLACEHOLDER: verify dates, attributions and quotes before public launch.
 * ------------------------------------------------------------------------------------- */

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: "Milestone" | "Program" | "Venture" | "Partnership" | "Story";
  content: string[];
  featured?: boolean;
};

export const posts: Post[] = [
  {
    slug: "unipod-equipment-handover",
    title: "UNDP hands over makerspace equipment to the UNIMAID UniPod",
    excerpt:
      "Seven technical zones inside the ASR-iCIE complex are now equipped, inducted and open to students, researchers and external innovators.",
    date: "2025-09-12",
    author: "UniPod Communications",
    category: "Milestone",
    featured: true,
    content: [
      "The UNDP University Innovation Pod at the University of Maiduguri has taken formal delivery of its makerspace equipment, marking the point at which all seven technical zones inside the Abdul Samad Rabiu International Centre for Innovation and Entrepreneurship (ASR-iCIE) became operational.",
      "The equipment package covers additive manufacturing and CAD workstations, CNC and metalworking capacity, electronics and embedded systems benches, solar and off-grid energy test rigs, agro-processing machinery, wood and textile fabrication studios, and an audio-visual media studio — delivered under UNDP's pan-African timbuktoo Initiative.",
      "The UniPod operates inside the ASR-iCIE complex, which was constructed through ASR Africa's ₦1 billion grant to the university. The two are distinct: ASR-iCIE is the centre edifice and convening complex; the UniPod is the technical makerspace running within it.",
      "Access tiers, safety inductions and booking procedures are now published, and lab technicians are on the floor during weekday hours.",
    ],
  },
  {
    slug: "community-innovation-challenge-opens",
    title: "Community Innovation Challenge opens to North-East teams",
    excerpt:
      "Problem owners from cooperatives, clinics and local government bring live briefs to the UniPod for an eight-week build cycle.",
    date: "2026-02-20",
    author: "UniPod Programs",
    category: "Program",
    featured: true,
    content: [
      "Applications have opened for the Northeast Nigeria Community Innovation Challenge, an eight-week programme run from the UniPod with problem briefs supplied by real community partners.",
      "Unlike a general startup competition, the challenge begins with a specific operational problem — a cold-chain gap, a processing bottleneck, a diagnostic access constraint — and requires a working prototype by the end of the cycle.",
      "Teams keep access to the relevant UniPod lab throughout, with consumables and machine time covered by the programme. The cycle closes with a demo day in the ASR-iCIE auditorium.",
    ],
  },
  {
    slug: "young-africa-innovates-node",
    title: "UniPod becomes a host node for Young Africa Innovates",
    excerpt:
      "North-East innovators can now apply into continental timbuktoo calls through the Maiduguri pod.",
    date: "2026-01-28",
    author: "UniPod Communications",
    category: "Partnership",
    content: [
      "The UniPod will serve as a Nigerian host node for Young Africa Innovates calls under UNDP's timbuktoo Initiative, giving innovators in Borno and neighbouring states a local route into continental programming.",
      "Host-node status means applicants can validate prototypes on UniPod equipment before submission, and can be compared against peers from other timbuktoo pods across Africa.",
    ],
  },
  {
    slug: "cad-bootcamp-quarterly-schedule",
    title: "Technical bootcamp schedule published for the year",
    excerpt:
      "CAD and 3D printing, IoT and embedded hardware, solar engineering and commercialisation tracks now run on a quarterly cycle.",
    date: "2026-02-05",
    author: "UniPod Technical Team",
    category: "Program",
    content: [
      "The UniPod has published a quarterly technical bootcamp schedule covering the four tracks most requested by students and external makers: parametric CAD and industrial 3D printing, IoT and embedded hardware, solar engineering, and product commercialisation.",
      "Each track is machine-first. Participants spend the majority of each session operating equipment under technician supervision, and finish with a portfolio artefact rather than a certificate alone.",
    ],
  },
];


export const postsExtra: Post[] = [
  {
    slug: "renewable-energy-lab-commissioned",
    title: "Renewable Energy Lab benches commissioned for load testing",
    excerpt:
      "Off-grid energy prototypes can now be characterised under real load rather than judged on nameplate ratings.",
    date: "2025-11-20",
    author: "UniPod Technical Team",
    category: "Milestone",
    content: [
      "The Renewable Energy Lab's test benches are now commissioned for full load testing, allowing teams to measure actual PV output, battery behaviour and charge controller efficiency under controlled conditions.",
      "For a region where off-grid systems are the norm rather than the exception, characterising real performance — not datasheet performance — is the difference between a product that works in the field and one that fails in the first harmattan.",
    ],
  },
  {
    slug: "asrcie-unipod-relationship-explained",
    title: "ASR-iCIE and the UniPod: what each institution actually does",
    excerpt:
      "A short, plain explanation of the relationship between the host edifice built by ASR Africa and the UNDP makerspace operating inside it.",
    date: "2025-10-02",
    author: "UniPod Communications",
    category: "Story",
    content: [
      "The two names are frequently used interchangeably, so it is worth stating clearly. The Abdul Samad Rabiu International Centre for Innovation and Entrepreneurship — ASR-iCIE — is the purpose-built centre complex on the University of Maiduguri campus, constructed through ASR Africa's ₦1 billion grant. It provides the building, the seminar room and the auditorium.",
      "The UNDP University Innovation Pod is the technical makerspace operating inside that complex, created under UNDP's pan-African timbuktoo Initiative. It provides the equipment, the makerspace standards and the innovation programming.",
      "The university hosts both and provides the talent, faculty mentorship and governance that make the arrangement work. Three institutions, three distinct contributions, one address.",
    ],
  },
];

export const allPosts: Post[] = [...posts, ...postsExtra];

/* ---------------------------------------------------------------------------------------
 * GALLERY
 * PLACEHOLDER: replace with licensed photography of the actual UniPod labs inside the
 * ASR-iCIE complex. Alt text must be rewritten to describe the real photographs.
 * ------------------------------------------------------------------------------------- */

export type GalleryItem = {
  slug: string;
  title: string;
  caption: string;
  category: "Labs" | "People" | "Builds" | "Events" | "Complex";
  ratio: "wide" | "tall" | "square";
};

export const gallery: GalleryItem[] = [
  { slug: "prototyping-lab", title: "Prototyping & Design Lab", caption: "CAD workstations and the additive manufacturing bench in use.", category: "Labs", ratio: "wide" },
  { slug: "cnc-workshop", title: "CNC Fabrication Workshop", caption: "Precision machining of a structural bracket under technician supervision.", category: "Labs", ratio: "tall" },
  { slug: "electronics-bench", title: "Electronics & IoT Lab", caption: "PCB bring-up and sensor calibration on the bench instruments.", category: "Labs", ratio: "square" },
  { slug: "energy-testing", title: "Renewable Energy Lab", caption: "Load testing an off-grid solar system on the PV benches.", category: "Labs", ratio: "wide" },
  { slug: "agro-processing", title: "Agro-Tech Lab", caption: "A drying unit being assembled for a post-harvest trial.", category: "Builds", ratio: "tall" },
  { slug: "wood-textiles", title: "Wood & Textiles Studios", caption: "Joinery work and industrial sewing sharing a fabrication floor.", category: "Labs", ratio: "square" },
  { slug: "media-studio", title: "Creatives & Digital Media Studio", caption: "Product photography for a residency team's launch material.", category: "Labs", ratio: "wide" },
  { slug: "design-thinking", title: "Design Thinking Studio", caption: "Challenge teams framing a problem in the co-working studio.", category: "People", ratio: "square" },
  { slug: "asrcie-exterior", title: "The ASR-iCIE Complex", caption: "The centre edifice on the UNIMAID campus that houses the UniPod.", category: "Complex", ratio: "wide" },
  { slug: "auditorium", title: "ASR-iCIE Auditorium", caption: "Demo day setup in the shared convening space.", category: "Complex", ratio: "tall" },
  { slug: "build-sprint", title: "Sahel Build Sprint", caption: "Forty-eight hours, open benches, and a working prototype at the end.", category: "Events", ratio: "square" },
  { slug: "handover", title: "Equipment Handover", caption: "The formal handover of UNDP makerspace equipment.", category: "Events", ratio: "wide" },
];

/* ---------------------------------------------------------------------------------------
 * PARTNERS & INSTITUTIONAL ATTRIBUTION
 * ------------------------------------------------------------------------------------- */

export const partners = [
  { name: "UNDP Nigeria", note: "timbuktoo Initiative — equipment & programming" },
  { name: "University of Maiduguri", note: "Host institution" },
  { name: "ASR-iCIE / ASR Africa", note: "Host edifice — ₦1B centre complex" },
  { name: "Federal Government of Nigeria", note: "timbuktoo partner" },
  { name: "UNIMAID Teaching Hospital", note: "Health device prototyping" },
  { name: "Borno State Government", note: "Regional innovation linkage" },
  { name: "timbuktoo", note: "Pan-African network" },
  { name: "North-East Development Commission", note: "Regional development partner" },
];


/* ---------------------------------------------------------------------------------------
 * ACCESS TIERS
 * Presented as tiers of permission rather than conventional paid plans — access to the
 * UniPod is free for UNIMAID students and staff; external users apply per project.
 * ------------------------------------------------------------------------------------- */

export type Tier = {
  name: string;
  price: string;
  cadence: string;
  summary: string;
  features: string[];
  featured?: boolean;
};

export const tiers: Tier[] = [
  {
    name: "UNIMAID Student",
    price: "Free",
    cadence: "with valid student ID",
    summary: "Full use of open-access zones and inducted access to every lab on campus.",
    features: [
      "All open-access studios",
      "Safety induction for machine labs",
      "Workbench booking within lab hours",
      "Bootcamp and challenge eligibility",
      "Technician support on the floor",
    ],
    featured: true,
  },
  {
    name: "Faculty & Researcher",
    price: "Free",
    cadence: "with staff ID",
    summary: "Prototyping capacity for research projects and departmental builds.",
    features: [
      "Priority bench allocation",
      "Research project consumables allowance",
      "Technician-supervised heavy machining",
      "Seminar room booking via ASR-iCIE",
      "Student team co-supervision",
    ],
  },
  {
    name: "External Innovator",
    price: "By application",
    cadence: "per project or residency",
    summary: "For North-East founders and enterprises with a product to prototype.",
    features: [
      "Access to all technical zones",
      "Project-scoped consumables",
      "Commercialisation clinic",
      "Venture residency pathway",
      "Demo day participation",
    ],
  },
  {
    name: "Schools & Institutions",
    price: "By arrangement",
    cadence: "per programme",
    summary: "For secondary schools, NGOs and public agencies running group visits.",
    features: [
      "Structured one-day lab experiences",
      "Group manifest with a single access pass",
      "Teacher familiarisation sessions",
      "Mobile outreach where applicable",
    ],
  },
];

/* ---------------------------------------------------------------------------------------
 * OPERATING STATUS — drives the header pill.
 * ------------------------------------------------------------------------------------- */

export type OperationalStatus = {
  state: "open" | "closed";
  label: string;
  detail: string;
};

export function getOperationalStatus(now: Date = new Date()): OperationalStatus {
  // Convert to West Africa Time (UTC+1, no DST).
  const wat = new Date(now.getTime() + 60 * 60 * 1000);
  const day = wat.getUTCDay();
  const hour = wat.getUTCHours();
  const { openDay, closeDay, openHour, closeHour } = {
    openDay: 1,
    closeDay: 5,
    openHour: 8,
    closeHour: 18,
  };
  const isWeekday = day >= openDay && day <= closeDay;
  const isOpen = isWeekday && hour >= openHour && hour < closeHour;

  if (isOpen) {
    return {
      state: "open",
      label: "Labs open",
      detail: `Until ${String(closeHour).padStart(2, "0")}:00 WAT`,
    };
  }
  return {
    state: "closed",
    label: "Labs closed",
    detail: isWeekday && hour < openHour ? `Opens ${String(openHour).padStart(2, "0")}:00 WAT` : "Opens Monday 08:00 WAT",
  };
}

