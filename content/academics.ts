/**
 * Academic levels.
 *
 * The school's own documents describe its teaching philosophy (see
 * content/about.ts) but do NOT contain per-level curriculum detail.
 * Everything below marked `draft: true` is plausible draft copy written for
 * the build and must be reviewed by the school. See docs/CONTENT-TODO.md.
 */

import type { MediaKey } from "@/content/media";

export type LevelSlug =
  | "creche"
  | "pre-nursery"
  | "nursery"
  | "primary"
  | "secondary";

export type Level = {
  slug: LevelSlug;
  name: string;
  ages: string;
  /** Shown in the age-range teaser on the homepage. */
  teaser: string;
  intro: string;
  /** "A day in the life" — time-of-day rhythm rather than a subject list. */
  day: { time: string; what: string }[];
  focus: { title: string; body: string }[];
  mediaKey: MediaKey | null;
  draft: boolean;
};

export const LEVELS: Level[] = [
  {
    slug: "creche",
    name: "Creche",
    ages: "3 months – 1 year",
    teaser: "Warm, attentive care for your youngest.",
    intro:
      "Our creche is about one thing: that your baby is safe, settled and genuinely cared for while you are away. Small numbers, familiar faces, and a daily report so you know exactly how the day went.",
    day: [
      { time: "Arrival", what: "A calm handover, and a note from you on how the night went." },
      { time: "Morning", what: "Feeding, nappy changes and sleep, all on your child's own rhythm rather than a timetable." },
      { time: "Midday", what: "Floor play, songs and gentle sensory activities — texture, sound and colour." },
      { time: "Afternoon", what: "Rest, a second feed, and outdoor air when the weather allows." },
      { time: "Collection", what: "A written daily report: feeds, sleep, mood and milestones." },
    ],
    focus: [
      { title: "Attachment and security", body: "Consistent carers, so your child builds a bond rather than meeting a new face each week." },
      { title: "Sensory development", body: "Safe, clean materials chosen to stimulate touch, sight and sound." },
      { title: "Daily communication", body: "You never collect your child wondering how the day actually went." },
    ],
    mediaKey: null,
    draft: true,
  },
  {
    slug: "pre-nursery",
    name: "Pre-Nursery",
    ages: "1 – 2 years",
    teaser: "First steps into a classroom, at their pace.",
    intro:
      "Pre-nursery is a child's first experience of a room that belongs to them and to other children. The work here is social as much as academic — sharing, waiting, joining in, and discovering that learning is enjoyable.",
    day: [
      { time: "Arrival", what: "Free play while the room fills up, so nobody is rushed through the door." },
      { time: "Circle time", what: "Songs, names, the weather, and the day's story." },
      { time: "Activity", what: "Messy play, building, sorting and early mark-making." },
      { time: "Outdoor", what: "Supervised play — climbing, running, balance." },
      { time: "Rest & collection", what: "A nap, a snack, and a summary of the day for you." },
    ],
    focus: [
      { title: "Language explosion", body: "Constant narration, rhyme and song during the period when vocabulary grows fastest." },
      { title: "Independence", body: "Early self-help skills — hands, cups, shoes, tidying up." },
      { title: "Playing alongside others", body: "The first real practice at being part of a group." },
    ],
    mediaKey: null,
    draft: true,
  },
  {
    slug: "nursery",
    name: "Nursery",
    ages: "3 – 5 years",
    teaser: "Where curiosity becomes reading and number.",
    intro:
      "Nursery is where formal learning begins in earnest, and where our inquiry-based approach shows most clearly. Children are taught to ask before they are told, and phonics, number and writing are built on top of that curiosity rather than in place of it.",
    day: [
      { time: "Arrival", what: "Settling activity and register." },
      { time: "Literacy", what: "Phonics, letter formation, shared reading and storytelling." },
      { time: "Numeracy", what: "Counting, patterns, shape and early problem-solving with real objects." },
      { time: "Break", what: "Snack and outdoor play." },
      { time: "Discovery", what: "Rotating focus: science, creative arts, music, or Bible story." },
      { time: "Close", what: "Review of the day and preparation for home." },
    ],
    focus: [
      { title: "Phonics and early reading", body: "A structured, sound-first route into reading, at a pace each child can hold." },
      { title: "Number sense", body: "Understanding what numbers mean before drilling what they do." },
      { title: "Inquiry", body: "Questions are the lesson. Children are taught to wonder aloud and test their ideas." },
      { title: "Christian foundation", body: "Bible stories and character talk woven into the week, warmly and age-appropriately." },
    ],
    mediaKey: null,
    draft: true,
  },
  {
    slug: "primary",
    name: "Primary",
    ages: "6 – 11 years",
    teaser: "Strong fundamentals, real digital literacy.",
    intro:
      "Our primary school covers the full Nigerian curriculum, taught through the principles of multiple intelligences — because the child who cannot sit still is not the child who cannot learn. This is also where the ULESSON digital curriculum enters properly.",
    day: [
      { time: "Assembly", what: "The whole school together — notices, song and a short devotion." },
      { time: "Core lessons", what: "English, Mathematics and Basic Science in the sharpest part of the morning." },
      { time: "Break", what: "Snack and supervised play." },
      { time: "Computer lab", what: "ULESSON e-learning and practical technological literacy." },
      { time: "Afternoon", what: "Social studies, creative arts, civic education and physical education." },
      { time: "Close", what: "Homework set, bags checked, supervised dismissal." },
    ],
    focus: [
      { title: "Mastery of the basics", body: "Reading fluency, written English and mathematical confidence come first." },
      { title: "Metacognition", body: "Children are taught how they learn, not only what to learn — how to plan, check and correct their own work." },
      { title: "Digital literacy", body: "Regular, structured computer lab time with the ULESSON curriculum." },
      { title: "Independent learning", body: "Responsibility is released gradually, so children arrive in secondary able to work alone." },
    ],
    mediaKey: null,
    draft: true,
  },
  {
    slug: "secondary",
    name: "Secondary",
    ages: "10 – 14 years",
    teaser: "JSS 1 through JSS 3, with focused examination preparation.",
    intro:
      "Our secondary section offers JSS 1 through JSS 3. The academic demand is real, and so is the support — teachers who notice, focused preparation and a clear placement process for new students.",
    day: [
      { time: "Assembly", what: "Devotion, notices and the day's expectations." },
      { time: "Morning periods", what: "Core subjects — English, Mathematics, the sciences and languages." },
      { time: "Break", what: "" },
      { time: "Afternoon periods", what: "Electives by stream: sciences, commercial or arts." },
      { time: "Prep", what: "Supervised study, coursework and exam preparation for senior classes." },
      { time: "Close", what: "Dismissal, with extra coaching for examination classes." },
    ],
    focus: [
      { title: "Examination readiness", body: "Structured preparation for State BECE and NECO BECE, with the school guiding families through the process." },
      { title: "Subject depth", body: "Science, commercial and arts streams taught by subject specialists." },
      { title: "Critical thinking", body: "Students are pushed to argue, justify and defend a position — not to memorise one." },
      { title: "Character and direction", body: "Mentoring on conduct, faith and what comes after school." },
    ],
    mediaKey: null,
    draft: true,
  },
];

export function getLevel(slug: LevelSlug): Level {
  const level = LEVELS.find((l) => l.slug === slug);
  if (!level) throw new Error(`Unknown level: ${slug}`);
  return level;
}

/** Options for the enquiry form's "intended level" select. */
export const LEVEL_OPTIONS = LEVELS.map((l) => ({
  value: l.slug,
  label: `${l.name} (${l.ages})`,
}));

export const LEVEL_SLUGS = LEVELS.map((l) => l.slug);

/** Extra non-level option on the enquiry form. */
export const OTHER_ENQUIRY_OPTION = {
  value: "other",
  label: "Something else / not sure yet",
};

export const ENQUIRY_LEVEL_VALUES = [
  ...LEVEL_SLUGS,
  OTHER_ENQUIRY_OPTION.value,
] as string[];

/* -------------------------------------------------------------------------- */
/* Examinations                                                               */
/* -------------------------------------------------------------------------- */

export const EXAM_BODIES = [
  {
    id: "state-bece-neco-bece",
    name: "State BECE / NECO BECE",
    fullName: "Basic Education Certificate Examination",
    body: "Basic Education Certificate Examinations taken at the end of the junior secondary stage. The school will confirm the current registration arrangements and dates.",
  },
  {
    id: "waec",
    name: "WAEC",
    fullName: "West African Examinations Council",
    body: "External examination guidance where applicable. The school office will confirm the current registration arrangements before families make plans.",
  },
  {
    id: "neco",
    name: "NECO",
    fullName: "National Examinations Council",
    body: "External examination guidance where applicable. Families should confirm the current route, requirements and timing with the school office.",
  },
  {
    id: "cbt",
    name: "CBT",
    fullName: "Computer-Based Testing",
    body: "Computer-based examinations, including UTME practice and preparation. Our computer laboratory is used for familiarisation so no candidate meets a keyboard for the first time on exam day.",
  },
];

/**
 * ⚠️ DRAFT — the exact registration steps and deadlines were not supplied.
 * Confirm with the school office before launch.
 */
export const EXAM_STEPS = [
  {
    title: "Speak to the school office",
    body: "Call or message the school to confirm which examination your child is registering for and the current deadline.",
    draft: true,
  },
  {
    title: "Submit the candidate's details",
    body: "Full name as it appears on the birth certificate, date of birth, passport photograph and subject combination.",
    draft: true,
  },
  {
    title: "Pay the registration fee",
    body: "The fee is set by the examination body each year. The school will confirm the current amount and payment method.",
    draft: true,
  },
  {
    title: "Confirm and collect",
    body: "Check the printed registration slip carefully — names and subjects cannot be changed after the deadline — then collect the examination details.",
    draft: true,
  },
];
