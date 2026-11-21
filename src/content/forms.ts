export type Sheet =
  | { kind: "text" | "email" | "tel" | "textarea"; name: string; label: string; placeholder?: string; required?: boolean; wide?: boolean }
  | { kind: "select"; name: string; label: string; options: string[]; required?: boolean; wide?: boolean };

export type FormCopy = {
  title: string;
  description: string;
  submit: string;
  successTitle: string;
  successBody: string;
  fields: Sheet[];
  note?: string;
};


const nameFields: Sheet[] = [
  { kind: "text", name: "fullName", label: "Full name", placeholder: "Aisha Bukar", required: true, wide: true },
  { kind: "email", name: "email", label: "Email address", placeholder: "you@unimaid.edu.ng", required: true },
  { kind: "tel", name: "phone", label: "Phone / WhatsApp", placeholder: "+234 ..." },
];
export const extraForms: Record<"partner" | "volunteer", FormCopy> = {
  partner: {
    title: "Partner with the UniPod",
    description:
      "Bring a problem, a brief, equipment or funding. We will structure a programme or a challenge around it, inside the UniPod labs.",
    submit: "Start a conversation",
    successTitle: "Thank you",
    successBody: "The UniPod coordination team will reach out within three working days.",
    fields: [
      ...nameFields,
      { kind: "text", name: "organisation", label: "Organisation", required: true },
      {
        kind: "select",
        name: "interest",
        label: "Partnership type",
        options: ["Corporate / industry", "Government / agency", "NGO / development", "University / research", "Individual donor", "Equipment donation"],
        required: true,
      },
      {
        kind: "textarea",
        name: "details",
        label: "What would you like to do together?",
        placeholder: "Challenges, equipment, funding, placements, research...",
        required: true,
        wide: true,
      },
    ],
  },
  volunteer: {
    title: "Join the volunteer crew",
    description: "Mentor a cohort, teach a workshop, or help run an event. A few hours a month goes a long way.",
    submit: "Register interest",
    successTitle: "Welcome aboard",
    successBody: "We'll add you to the volunteer list and reach out before the next program cycle.",
    fields: [
      ...nameFields,
      {
        kind: "select",
        name: "role",
        label: "How would you like to help?",
        options: ["Mentor", "Workshop facilitator", "Event crew", "Translation / language", "Photography & video", "School visit host", "Other"],
        required: true,
      },
      {
        kind: "textarea",
        name: "background",
        label: "A little about your background",
        placeholder: "Skills, availability, and why this matters to you.",
        wide: true,
      },
    ],
  },
};





export const forms = {
  booking: {
    title: "Book a lab or workbench",
    description:
      "Choose the lab, the slot and what you intend to prototype. Every booking is reviewed by a UniPod lab technician before an access pass is issued.",
    submit: "Request access pass",
    successTitle: "Booking request received",
    successBody:
      "A UniPod lab technician will confirm your slot. Bring your confirmation reference to check-in — no reference, no bench.",
    fields: [
      ...nameFields,
      {
        kind: "text",
        name: "institutionId",
        label: "Student / staff / national ID",
        placeholder: "UNIMAID matric no., staff no., or NIN",
        required: true,
      },
      {
        kind: "select",
        name: "eligibility",
        label: "You are a…",
        options: ["UNIMAID student", "UNIMAID faculty / researcher", "External innovator / startup", "School or institution group"],
        required: true,
      },
      {
        kind: "select",
        name: "lab",
        label: "Lab or workbench",
        options: [
          "Prototyping & Design Lab",
          "Engineering & CNC Fabrication Workshop",
          "Electronics, Embedded Systems & IoT Lab",
          "Renewable Energy Lab",
          "Agro-Tech & Food Processing Lab",
          "Wood & Textiles Fabrication Studios",
          "Creatives & Digital Media Studio",
          "Co-Working & Design Thinking Studio",
        ],
        required: true,
        wide: true,
      },
      {
        kind: "select",
        name: "slot",
        label: "Preferred slot",
        options: ["Morning (08:00 — 11:00)", "Midday (11:00 — 14:00)", "Afternoon (14:00 — 18:00)", "Saturday session (10:00 — 16:00)"],
        required: true,
      },
      {
        kind: "text",
        name: "date",
        label: "Preferred date",
        placeholder: "DD/MM/YYYY",
        required: true,
      },
      {
        kind: "textarea",
        name: "project",
        label: "What will you prototype?",
        placeholder: "The problem, your approach, and which machines you expect to need.",
        required: true,
        wide: true,
      },
      {
        kind: "select",
        name: "safety",
        label: "Safety & SOP acknowledgement",
        options: [
          "I have completed the safety induction",
          "I have not yet — please schedule an induction",
        ],
        required: true,
        wide: true,
      },
    ],
    note: "Booking is free for UNIMAID students and staff. External innovators are assessed per project. Power tools, CNC, electrical and processing machinery require a completed safety induction before use.",
  },
  membership: {
    title: "Access & eligibility enquiry",
    description:
      "Not sure whether you qualify, or which lab you need? Tell us what you want to build and we will point you at the right space and access tier.",
    submit: "Send enquiry",
    successTitle: "Enquiry received",
    successBody: "A UniPod coordinator will reply within five working days.",
    fields: [
      ...nameFields,
      {
        kind: "select",
        name: "affiliation",
        label: "Affiliation",
        options: ["UNIMAID student", "UNIMAID staff / researcher", "Alumnus", "Other institution", "Independent innovator"],
        required: true,
      },
      {
        kind: "select",
        name: "lab",
        label: "Lab you are interested in",
        options: [
          "Prototyping & Design Lab",
          "Engineering & CNC Fabrication Workshop",
          "Electronics, Embedded Systems & IoT Lab",
          "Renewable Energy Lab",
          "Agro-Tech & Food Processing Lab",
          "Wood & Textiles Fabrication Studios",
          "Creatives & Digital Media Studio",
          "Co-Working & Design Thinking Studio",
          "Not sure yet",
        ],
        wide: true,
      },
      {
        kind: "textarea",
        name: "project",
        label: "What will you build?",
        placeholder: "A short paragraph: the problem, and your first step.",
        required: true,
        wide: true,
      },
    ],
    note: "Access is free for all UNIMAID students and staff. External innovators apply per project or join a venture residency.",
  },
  contact: {
    title: "Contact the UniPod helpdesk",
    description: "Laboratory coordination, partnerships, press and visits. We reply within two working days.",
    submit: "Send message",
    successTitle: "Message sent",
    successBody: "Thank you — the UniPod team will get back to you within two working days.",
    fields: [
      ...nameFields,
      {
        kind: "select",
        name: "topic",
        label: "Topic",
        options: ["General enquiry", "Lab booking", "Safety induction", "Partnership", "Press & media", "School or group visit", "Equipment donation", "Other"],
        required: true,
        wide: true,
      },
      { kind: "textarea", name: "message", label: "Message", placeholder: "How can we help?", required: true, wide: true },
    ],
  },
} satisfies Record<string, FormCopy>;

