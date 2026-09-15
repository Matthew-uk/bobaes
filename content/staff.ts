// ⚠️ DRAFT CONTENT — NOT SUPPLIED BY THE SCHOOL. ⚠️
//
// These people are invented. No real staff names, photographs or biographies
// were provided in the source documents. Every record below must be replaced
// with real staff before this site goes live.
//
// See docs/CONTENT-TODO.md.

export type StaffMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  mediaKey: string;
  draft: boolean;
};

export const STAFF: StaffMember[] = [
  {
    id: "head-of-school",
    name: "[Head of School — name to be supplied]",
    role: "Head of School",
    bio: "A short, warm paragraph in the head's own voice: why they came into education, how long they have been at BOBAES, and what they want a parent to feel on the first visit. Two or three sentences is plenty.",
    mediaKey: "staffHead",
    draft: true,
  },
  {
    id: "head-of-primary",
    name: "[Head of Primary — name to be supplied]",
    role: "Head of Primary",
    bio: "Who leads the primary school, their background and how they think about the years between reading fluently and starting secondary.",
    mediaKey: "staffPrimary",
    draft: true,
  },
  {
    id: "head-of-secondary",
    name: "[Head of Secondary — name to be supplied]",
    role: "Head of Secondary",
    bio: "Who leads the secondary school, subject background, and their approach to preparing candidates for WAEC and NECO.",
    mediaKey: "staffSecondary",
    draft: true,
  },
  {
    id: "early-years-lead",
    name: "[Early Years Lead — name to be supplied]",
    role: "Early Years Lead",
    bio: "The person a parent of a creche or nursery child will deal with daily. This is the most important bio on the page for young families — make it warm.",
    mediaKey: "staffEarlyYears",
    draft: true,
  },
  {
    id: "examinations-officer",
    name: "[Examinations Officer — name to be supplied]",
    role: "Examinations Officer",
    bio: "The contact point for WAEC, NECO and CBT registration. Include how and when parents should reach them.",
    mediaKey: "staffExams",
    draft: true,
  },
];
