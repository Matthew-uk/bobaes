/**
 * PHOTO MANIFEST — the single place image paths live.
 *
 * Real photographs come from `public/img/` (supplied by the school).
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
const R = "/img";

export const MEDIA = {
  /* ---- Home ---- */
  homeHero: {
    src: `${R}/17.png`,
    alt: "BOBAES pupils working at their desks in a classroom",
    width: 4032,
    height: 3024,
    position: "50% 55%",
    note: "Homepage hero.",
    placeholder: false,
  },
  homeTeaser: {
    src: `${R}/10.png`,
    alt: "BOBAES pupils in uniform in the school courtyard",
    width: 4032,
    height: 3024,
    position: "50% 45%",
    note: "Age-range teaser.",
    placeholder: false,
  },

  /* ---- School life (homepage gallery) ---- */
  lifeDance: {
    src: `${R}/3.png`,
    alt: "BOBAES pupils taking part in an outdoor football activity",
    width: 3024,
    height: 4032,
    position: "50% 30%",
    note: "School life gallery.",
    placeholder: false,
  },
  lifeChoir: {
    src: `${R}/14.png`,
    alt: "Early-years pupils working together in a classroom activity",
    width: 4032,
    height: 3024,
    position: "50% 45%",
    note: "School life gallery.",
    placeholder: false,
  },
  lifeHomeEconomics: {
    src: `${R}/9.png`,
    alt: "BOBAES pupils using computers in the computer laboratory",
    width: 3024,
    height: 4032,
    position: "50% 45%",
    note: "School life gallery.",
    placeholder: false,
  },
  lifeScience: {
    src: `${R}/19.png`,
    alt: "BOBAES pupils reading and studying in the school library",
    width: 4032,
    height: 3024,
    position: "50% 45%",
    note: "School life gallery.",
    placeholder: false,
  },
  lifeExcursion: {
    src: `${R}/5.png`,
    alt: "BOBAES pupils using playground equipment during supervised play",
    width: 4032,
    height: 3024,
    position: "50% 45%",
    note: "School life gallery.",
    placeholder: false,
  },
  elearningBoard: {
    src: `${R}/9.png`,
    alt: "BOBAES pupils using computers in the computer laboratory",
    width: 3024,
    height: 4032,
    position: "50% 45%",
    note: "E-learning section.",
    placeholder: false,
  },

  /* ---- About ---- */
  aboutStory: {
    src: `${R}/10.png`,
    alt: "BOBAES pupils in school uniform in the school playground",
    width: 4032,
    height: 3024,
    position: "50% 45%",
    note: "The campus.",
    placeholder: false,
  },
  aboutChristianFoundation: {
    src: `${R}/15.png`,
    alt: "An early-years classroom lesson at BOBAES",
    width: 4032,
    height: 3024,
    position: "50% 50%",
    note: "Christian foundation.",
    placeholder: false,
  },
  aboutPartnership: {
    src: `${R}/16.png`,
    alt: "A BOBAES teacher guiding pupils during classroom work",
    width: 4032,
    height: 3024,
    position: "50% 45%",
    note: "Teacher partnership and classroom support.",
    placeholder: false,
  },
  aboutSafety: {
    src: `${R}/5.png`,
    alt: "BOBAES pupils enjoying supervised playground time",
    width: 4032,
    height: 3024,
    position: "50% 45%",
    note: "Supervised play and care.",
    placeholder: false,
  },

  /* ---- Facilities ---- */
  facilityClassroom: {
    src: `${R}/18.png`,
    alt: "BOBAES pupils studying at their desks in a classroom",
    width: 4032,
    height: 3024,
    position: "50% 55%",
    note: "Classroom.",
    placeholder: false,
  },
  facilityScienceLab: {
    src: `${P}/facility-classroom.svg`,
    alt: "The science laboratory at BOBAES Edu-Excellence Schools",
    width: 1400,
    height: 1050,
    note: "Remove until the school supplies the laboratory photograph.",
    placeholder: true,
  },
  facilityHomeEconomics: {
    src: `${P}/facility-classroom.svg`,
    alt: "The home economics room at BOBAES Edu-Excellence Schools",
    width: 1400,
    height: 1050,
    note: "Home economics room.",
    placeholder: true,
  },
  facilityComputerLab: {
    src: `${R}/9.png`,
    alt: "The computer laboratory at BOBAES Edu-Excellence Schools",
    width: 3024,
    height: 4032,
    position: "50% 45%",
    note: "Computer laboratory and e-learning.",
    placeholder: false,
  },
  facilityLaboratory: {
    src: `${P}/facility-classroom.svg`,
    alt: "The science laboratory at BOBAES Edu-Excellence Schools",
    width: 1400,
    height: 1050,
    note: "Remove until the school supplies the science laboratory photograph.",
    placeholder: true,
  },
  facilityLibrary: {
    src: `${R}/19.png`,
    alt: "BOBAES pupils reading and studying in the school library",
    width: 4032,
    height: 3024,
    position: "50% 45%",
    note: "Library.",
    placeholder: false,
  },
  facilityPlayground: {
    src: `${R}/5.png`,
    alt: "BOBAES pupils using playground equipment during supervised play",
    width: 4032,
    height: 3024,
    position: "50% 45%",
    note: "Playground.",
    placeholder: false,
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
    src: `${R}/6.png`,
    alt: "Pre-nursery pupils on the BOBAES playground",
    width: 3024,
    height: 4032,
    position: "50% 35%",
    note: "Pre-nursery, pending the school's preferred supplied photograph.",
    placeholder: false,
  },
  levelNursery: {
    src: `${R}/13.png`,
    alt: "Nursery pupils learning letters with a teacher at BOBAES",
    width: 4032,
    height: 3024,
    position: "50% 45%",
    note: "Nursery classroom, pending the school's preferred supplied photograph.",
    placeholder: false,
  },
  levelPrimary: {
    src: `${R}/18.png`,
    alt: "Primary pupils studying in a BOBAES classroom",
    width: 4032,
    height: 3024,
    position: "50% 55%",
    note: "Primary classroom, pending the school's preferred supplied photograph.",
    placeholder: false,
  },
  levelSecondary: {
    src: `${R}/10.png`,
    alt: "Older BOBAES pupils in uniform in the school courtyard",
    width: 4032,
    height: 3024,
    position: "50% 45%",
    note: "Secondary/general student photograph, pending the school's preferred supplied photograph.",
    placeholder: false,
  },

  /* ---- Staff (replace alongside content/staff.ts) ---- */
  staffHead: {
    src: `${R}/20.png`,
    alt: "Mr Kelechi Romanus Ukeje seated at his desk",
    width: 4032,
    height: 3024,
    position: "48% 35%",
    note: "Principal portrait supplied by the school.",
    placeholder: false,
  },
  staffPrimary: {
    src: `${R}/22.png`,
    alt: "Ogochukwu M. Igboanugo seated at her desk",
    width: 4032,
    height: 3024,
    position: "42% 35%",
    note: "Lead Teacher portrait supplied by the school.",
    placeholder: false,
  },
  staffSecondary: {
    src: `${R}/21.png`,
    alt: "Mr Christopher Chilekwe Nnamdi seated at his desk",
    width: 4032,
    height: 3024,
    position: "40% 35%",
    note: "Manager portrait supplied by the school.",
    placeholder: false,
  },
  staffEarlyYears: {
    src: `${P}/staff-4.svg`,
    alt: "",
    width: 800,
    height: 1000,
    note: "No photograph currently available for Gloria Obinna. Use an intentional no-photo treatment; do not substitute a fake portrait.",
    placeholder: true,
  },
  staffExams: {
    src: `${P}/staff-5.svg`,
    alt: "A staff portrait at BOBAES Edu-Excellence Schools",
    width: 800,
    height: 1000,
    note: "Portrait 4:5, matched to the other staff portraits.",
    placeholder: true,
  },

  /* ---- Admissions ---- */
  admissionsHero: {
    src: `${R}/22.png`,
    alt: "A BOBAES administrator working at the admissions desk",
    width: 4032,
    height: 3024,
    position: "50% 45%",
    note: "Admissions.",
    placeholder: false,
  },
  admissionsTour: {
    src: `${R}/10.png`,
    alt: "BOBAES pupils in the school playground",
    width: 4032,
    height: 3024,
    position: "50% 45%",
    note: "Book a tour.",
    placeholder: false,
  },
  examsHero: {
    src: `${R}/18.png`,
    alt: "BOBAES pupils writing and studying in a classroom",
    width: 4032,
    height: 3024,
    position: "50% 55%",
    note: "Examinations.",
    placeholder: false,
  },

  /* ---- Gallery ---- */
  galleryClassroom: {
    src: `${R}/17.png`,
    alt: "BOBAES pupils writing in a bright classroom",
    width: 4032,
    height: 3024,
    position: "50% 55%",
    note: "Gallery: classroom learning.",
    placeholder: false,
  },
  galleryTeacherGuided: {
    src: `${R}/16.png`,
    alt: "A BOBAES teacher guiding young pupils during table work",
    width: 4032,
    height: 3024,
    position: "50% 45%",
    note: "Gallery: teacher-guided learning.",
    placeholder: false,
  },
  galleryEarlyYears: {
    src: `${R}/13.png`,
    alt: "Early-years pupils learning with colourful classroom materials",
    width: 4032,
    height: 3024,
    position: "50% 45%",
    note: "Gallery: early years.",
    placeholder: false,
  },
  galleryComputerLab: {
    src: `${R}/9.png`,
    alt: "Pupils working on desktop computers in the computer laboratory",
    width: 3024,
    height: 4032,
    position: "50% 45%",
    note: "Gallery: computer laboratory.",
    placeholder: false,
  },
  galleryPlayground: {
    src: `${R}/5.png`,
    alt: "BOBAES pupils playing on a trampoline during supervised outdoor time",
    width: 4032,
    height: 3024,
    position: "50% 45%",
    note: "Gallery: playground.",
    placeholder: false,
  },
  gallerySports: {
    src: `${R}/4.png`,
    alt: "BOBAES pupils playing football on the school field",
    width: 3024,
    height: 4032,
    position: "50% 35%",
    note: "Gallery: sports.",
    placeholder: false,
  },
  galleryAssembly: {
    src: `/bobaes-img/4.jpg`,
    alt: "BOBAES pupils singing during an outdoor school assembly",
    width: 2048,
    height: 1356,
    position: "50% 40%",
    note: "Gallery: assembly.",
    placeholder: false,
  },
  galleryGraduation: {
    src: `/bobaes-img/18.jpg`,
    alt: "BOBAES pupils in graduation gowns with gift bags",
    width: 1139,
    height: 720,
    position: "50% 45%",
    note: "Gallery: events.",
    placeholder: false,
  },
  galleryExcursion: {
    src: `/bobaes-img/14.jpg`,
    alt: "BOBAES pupils and staff on an outdoor school outing",
    width: 2048,
    height: 1356,
    position: "50% 45%",
    note: "Gallery: outings.",
    placeholder: false,
  },
  galleryScience: {
    src: `/bobaes-img/10.jpg`,
    alt: "BOBAES pupils carrying out a science practical",
    width: 780,
    height: 1040,
    position: "50% 40%",
    note: "Gallery: practical learning.",
    placeholder: false,
  },
} as const satisfies Record<string, MediaEntry>;

export type MediaKey = keyof typeof MEDIA;

export function getMedia(key: MediaKey): MediaEntry {
  return MEDIA[key];
}

/** True while any slot is still a generated placeholder — used by docs tooling. */
export const ALL_MEDIA_KEYS = Object.keys(MEDIA) as MediaKey[];
