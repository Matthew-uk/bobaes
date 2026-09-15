/**
 * PHOTO MANIFEST — the single place image paths live.
 *
 * Real photographs come from `public/bobaes-img/` (supplied by the school).
 * Slots with no matching photograph still point at a generated placeholder in
 * `public/photos/placeholder/` and carry `placeholder: true` — see
 * docs/PHOTO-MANIFEST.md for what each of those is waiting for.
 *
 * `alt` describes what is actually in the photograph. `position` is a CSS
 * object-position used when a slot crops the image (faces, watermarks).
 */

export type MediaEntry = {
  /** Path under /public. */
  src: string;
  /** Meaningful alt text. Empty string only for purely decorative images. */
  alt: string;
  width: number;
  height: number;
  /** CSS object-position for cropped slots. Defaults to centre. */
  position?: string;
  /** What this slot is for / waiting for — read by docs/PHOTO-MANIFEST.md. */
  note: string;
  /** True while this is still a generated placeholder. */
  placeholder: boolean;
};

const P = "/photos/placeholder";
const R = "/bobaes-img";

export const MEDIA = {
  /* ---- Home ---- */
  homeHero: {
    src: `${R}/3.jpg`,
    alt: "A young BOBAES pupil in school uniform, the school crest on his shirt, during a school performance",
    width: 2048,
    height: 1356,
    position: "46% 40%",
    note: "Homepage hero.",
    placeholder: false,
  },
  homeTeaser: {
    src: `${R}/8.jpg`,
    alt: "Pupils in BOBAES uniform walking across the school compound with two members of staff",
    width: 1440,
    height: 1080,
    // Keeps the phone-camera watermark (bottom left) out of the crop.
    position: "75% 0%",
    note: "Age-range teaser, portrait crop.",
    placeholder: false,
  },

  /* ---- School life (homepage gallery) ---- */
  lifeDance: {
    src: `${R}/15.jpg`,
    alt: "Pupils in wrappers performing a cultural dance",
    width: 2048,
    height: 1157,
    position: "50% 30%",
    note: "School life gallery.",
    placeholder: false,
  },
  lifeChoir: {
    src: `${R}/4.jpg`,
    alt: "Students in white shirts and red ties singing together at a school event",
    width: 2048,
    height: 1356,
    position: "50% 40%",
    note: "School life gallery.",
    placeholder: false,
  },
  lifeHomeEconomics: {
    src: `${R}/13.jpg`,
    alt: "Pupils in aprons and caps listening to their teacher during a home economics lesson",
    width: 1632,
    height: 1224,
    note: "School life gallery.",
    placeholder: false,
  },
  lifeScience: {
    src: `${R}/9.jpg`,
    alt: "A student in a BOBAES lab coat watching a diffusion experiment in the science laboratory",
    width: 780,
    height: 1040,
    position: "40% 45%",
    note: "School life gallery.",
    placeholder: false,
  },
  lifeExcursion: {
    src: `${R}/20.jpg`,
    alt: "Primary pupils in BOBAES uniform with their teachers on a class excursion",
    width: 1000,
    height: 607,
    position: "50% 40%",
    note: "School life gallery.",
    placeholder: false,
  },
  elearningBoard: {
    src: `${R}/6.jpg`,
    alt: "Pupils, staff and guests gathered in front of an interactive board at a school programme",
    width: 1728,
    height: 972,
    position: "50% 60%",
    note: "E-learning section.",
    placeholder: false,
  },

  /* ---- About ---- */
  aboutStory: {
    src: `${R}/2.jpg`,
    alt: "Pupils performing in front of the BOBAES school building at an end-of-session celebration",
    width: 2048,
    height: 1356,
    position: "50% 70%",
    note: "The campus.",
    placeholder: false,
  },
  aboutChristianFoundation: {
    src: `${R}/14.jpg`,
    alt: "Early-years pupils dressed in festive red with staff in BOBAES polo shirts at the school's Christmas celebration",
    width: 2048,
    height: 1356,
    position: "50% 55%",
    note: "Christian foundation.",
    placeholder: false,
  },
  aboutPartnership: {
    src: `${P}/about-partnership.svg`,
    alt: "A teacher speaking with a parent at BOBAES",
    width: 1600,
    height: 1200,
    note: "A parent–teacher conversation. Two adults, one child if possible.",
    placeholder: true,
  },
  aboutSafety: {
    src: `${R}/8.jpg`,
    alt: "Pupils walking with staff inside the school's fenced compound",
    width: 1440,
    height: 1080,
    position: "75% 0%",
    note: "Controlled, supervised campus.",
    placeholder: false,
  },

  /* ---- Facilities ---- */
  facilityClassroom: {
    src: `${R}/11.jpg`,
    alt: "Secondary students at their desks in a BOBAES classroom",
    width: 1632,
    height: 1224,
    position: "50% 60%",
    note: "Classroom.",
    placeholder: false,
  },
  facilityScienceLab: {
    src: `${R}/9.jpg`,
    alt: "A student in a BOBAES lab coat carrying out an experiment in the science laboratory",
    width: 780,
    height: 1040,
    position: "40% 45%",
    note: "Science laboratory.",
    placeholder: false,
  },
  facilityHomeEconomics: {
    src: `${R}/13.jpg`,
    alt: "A home economics lesson with pupils seated around a long worktable",
    width: 1632,
    height: 1224,
    note: "Home economics room.",
    placeholder: false,
  },
  facilityComputerLab: {
    src: `${P}/facility-computer-lab.svg`,
    alt: "The computer laboratory at BOBAES Edu-Excellence Schools",
    width: 1400,
    height: 1050,
    note: "Show the actual number of working machines. This backs a specific claim.",
    placeholder: true,
  },
  facilityLibrary: {
    src: `${P}/facility-library.svg`,
    alt: "The library at BOBAES Edu-Excellence Schools",
    width: 1400,
    height: 1050,
    note: "Shelves and reading space.",
    placeholder: true,
  },
  facilityPlayground: {
    src: `${P}/facility-playground.svg`,
    alt: "The playground at BOBAES Edu-Excellence Schools",
    width: 1400,
    height: 1050,
    note: "Equipment and safe surfacing, ideally with children using it.",
    placeholder: true,
  },
  facilitySecurity: {
    src: `${P}/facility-security.svg`,
    alt: "Security and supervised access at the BOBAES campus",
    width: 1400,
    height: 1050,
    note: "Perimeter, gate or sign-in desk.",
    placeholder: true,
  },

  /* ---- Academic levels ---- */
  levelCreche: {
    src: `${P}/level-creche.svg`,
    alt: "A carer with a baby in the BOBAES creche",
    width: 1600,
    height: 1200,
    note: "Requires explicit written parental consent. Faces of infants — handle carefully.",
    placeholder: true,
  },
  levelPreNursery: {
    src: `${R}/14.jpg`,
    alt: "Early-years children with their carers at the school's Christmas celebration",
    width: 2048,
    height: 1356,
    position: "50% 60%",
    note: "Pre-nursery.",
    placeholder: false,
  },
  levelNursery: {
    src: `${R}/7.jpg`,
    alt: "Young pupils in aprons and chef hats during a cooking activity",
    width: 1080,
    height: 810,
    position: "60% 50%",
    note: "Nursery.",
    placeholder: false,
  },
  levelPrimary: {
    src: `${R}/1.jpg`,
    alt: "Primary pupils in BOBAES uniform performing, one holding a microphone",
    width: 2048,
    height: 1356,
    position: "40% 40%",
    note: "Primary.",
    placeholder: false,
  },
  levelSecondary: {
    src: `${R}/5.jpg`,
    alt: "Secondary students in white shirts and red ties at a school event",
    width: 2048,
    height: 1356,
    position: "50% 30%",
    note: "Secondary.",
    placeholder: false,
  },

  /* ---- Staff (replace alongside content/staff.ts) ---- */
  staffHead: {
    src: `${P}/staff-1.svg`,
    alt: "Portrait of the Head of School at BOBAES Edu-Excellence Schools",
    width: 800,
    height: 1000,
    note: "Portrait 4:5, natural light, warm expression, plain background. Consistent framing across all five staff portraits.",
    placeholder: true,
  },
  staffPrimary: {
    src: `${P}/staff-2.svg`,
    alt: "Portrait of the Head of Primary at BOBAES Edu-Excellence Schools",
    width: 800,
    height: 1000,
    note: "Portrait 4:5, matched to the other staff portraits.",
    placeholder: true,
  },
  staffSecondary: {
    src: `${P}/staff-3.svg`,
    alt: "Portrait of the Head of Secondary at BOBAES Edu-Excellence Schools",
    width: 800,
    height: 1000,
    note: "Portrait 4:5, matched to the other staff portraits.",
    placeholder: true,
  },
  staffEarlyYears: {
    src: `${P}/staff-4.svg`,
    alt: "Portrait of the Early Years Lead at BOBAES Edu-Excellence Schools",
    width: 800,
    height: 1000,
    note: "Portrait 4:5, matched to the other staff portraits.",
    placeholder: true,
  },
  staffExams: {
    src: `${P}/staff-5.svg`,
    alt: "Portrait of the Examinations Officer at BOBAES Edu-Excellence Schools",
    width: 800,
    height: 1000,
    note: "Portrait 4:5, matched to the other staff portraits.",
    placeholder: true,
  },

  /* ---- Admissions ---- */
  admissionsHero: {
    src: `${R}/17.jpg`,
    alt: "Smiling secondary students in BOBAES blazers",
    width: 1280,
    height: 720,
    position: "50% 30%",
    note: "Admissions.",
    placeholder: false,
  },
  admissionsTour: {
    src: `${R}/2.jpg`,
    alt: "The BOBAES school building and forecourt",
    width: 2048,
    height: 1356,
    position: "50% 60%",
    note: "Book a tour.",
    placeholder: false,
  },
  examsHero: {
    src: `${R}/12.jpg`,
    alt: "Students writing a paper in a classroom arranged for examinations, with a teacher at the front",
    width: 1632,
    height: 1224,
    position: "50% 60%",
    note: "Examinations.",
    placeholder: false,
  },
} as const satisfies Record<string, MediaEntry>;

export type MediaKey = keyof typeof MEDIA;

export function getMedia(key: MediaKey): MediaEntry {
  return MEDIA[key];
}

/** True while any slot is still a generated placeholder — used by docs tooling. */
export const ALL_MEDIA_KEYS = Object.keys(MEDIA) as MediaKey[];
