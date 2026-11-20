export type SiteLink = { label: string; href: string; description?: string };

/**
 * Identity note — the UniPod and ASR-iCIE are two distinct things:
 *   - The UNDP University Innovation Pod (UniPod) is the makerspace / prototyping
 *     facility, created under UNDP's pan-African timbuktoo Initiative.
 *   - ASR-iCIE is the host edifice: the Abdul Samad Rabiu International Centre for
 *     Innovation and Entrepreneurship, built with ASR Africa's ₦1B grant.
 * The UniPod operates *inside* ASR-iCIE. Keep that distinction in all copy.
 */
export const site = {
  name: "UNDP UniPod",
  shortName: "UniPod · UNIMAID",
  legalName: "UNDP University Innovation Pod (UniPod) — University of Maiduguri",
  host: {
    name: "Abdul Samad Rabiu International Centre for Innovation and Entrepreneurship",
    abbreviation: "ASR-iCIE",
    note: "Housed at the Abdul Samad Rabiu International Centre for Innovation & Entrepreneurship",
    funder: "ASR Africa",
  },
  tagline: "Prototype here. Build for the Lake Chad Basin.",
  description:
    "The UNDP University Innovation Pod (UniPod) at the University of Maiduguri gives students, researchers and innovators across North-East Nigeria open access to industrial prototyping tools, design-thinking studios and product-development support — taking ideas from concept to a working minimum viable product. Hosted inside the Abdul Samad Rabiu International Centre for Innovation and Entrepreneurship (ASR-iCIE).",
  founded: 2025,
  url: "https://unipod.unimaid.edu.ng",
  uniurl: "https://www.unimaid.edu.ng",
  undpurl: "https://www.undp.org/nigeria",
  timbuktoourl: "https://timbuktoo.org",
  asrcieurl: "https://asrafrica.org",
  email: "unipod@unimaid.edu.ng",
  helpdesk: "helpdesk.unipod@unimaid.edu.ng",
  labCoordinator: "labs.unipod@unimaid.edu.ng",
  partnerships: "partnerships.unipod@unimaid.edu.ng",
  phone: "+234 800 000 0000",
  address: {
    line1: "Ground & Upper Technical Wings, ASR-iCIE Complex",
    street: "University of Maiduguri, Bama Road",
    city: "Maiduguri",
    region: "Borno State",
    country: "Nigeria",
    postal: "600004",
  },
  geo: { lat: 11.8469, lng: 13.1571 },
  /** West Africa Time — UTC+1, no daylight saving. */
  timezone: "WAT",
  hours: [
    { day: "Monday – Friday", time: "08:00 — 18:00 WAT" },
    { day: "Saturday", time: "10:00 — 16:00 (booked sessions only)" },
    { day: "Sunday", time: "Closed" },
  ],
  /** Machine-readable lab hours used by the operational-status pill. */
  schedule: { openDay: 1, closeDay: 5, openHour: 8, closeHour: 18 },
  socials: [
    { label: "UNDP Nigeria", href: "https://www.undp.org/nigeria" },
    { label: "timbuktoo", href: "https://timbuktoo.org" },
    { label: "UNIMAID", href: "https://www.unimaid.edu.ng" },
    { label: "ASR Africa", href: "https://asrafrica.org" },
  ],
} as const;

export const nav: SiteLink[] = [
  { label: "Overview", href: "/", description: "What the UniPod is and who it serves" },
  { label: "About the UniPod", href: "/about", description: "Mandate, priority areas and leadership" },
  { label: "Makerspaces & Labs", href: "/facilities", description: "Seven technical zones and what you can build" },
  { label: "Book a Lab", href: "/book", description: "Workbench access, safety induction and passes" },
  { label: "Programs & Challenges", href: "/programs", description: "Hackathons, bootcamps and innovation calls" },
  { label: "Visit & Access", href: "/visit", description: "Location, hours, eligibility and tours" },
];

export const secondaryNav: SiteLink[] = [
  { label: "Ventures", href: "/startups", description: "Prototypes and ventures built at the UniPod" },
  { label: "Events", href: "/events", description: "Demo days, hackathons and open labs" },
  { label: "News", href: "/news", description: "Commissioning updates and announcements" },
  { label: "Gallery", href: "/gallery", description: "Inside the labs and the ASR-iCIE complex" },
  { label: "Get Involved", href: "/get-involved", description: "Partner, mentor or volunteer" },
  { label: "Contact", href: "/contact", description: "Helpdesk, lab coordination and partnerships" },
];

export const footerNav = [
  {
    title: "The UniPod",
    links: [
      { label: "About the UniPod", href: "/about" },
      { label: "Makerspaces & Labs", href: "/facilities" },
      { label: "Book a Lab", href: "/book" },
      { label: "Access & Eligibility", href: "/membership" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Programs & Challenges", href: "/programs" },
      { label: "Events", href: "/events" },
      { label: "News", href: "/news" },
      { label: "Ventures", href: "/startups" },
      { label: "Get Involved", href: "/get-involved" },
    ],
  },
  {
    title: "Institutions",
    links: [
      { label: "UNDP Nigeria (timbuktoo)", href: "https://www.undp.org/nigeria", external: true },
      { label: "University of Maiduguri", href: "https://www.unimaid.edu.ng", external: true },
      { label: "ASR-iCIE / ASR Africa", href: "https://asrafrica.org", external: true },
      { label: "Visit & Access", href: "/visit" },
      { label: "Contact the helpdesk", href: "/contact" },
    ],
  },
] as const;

