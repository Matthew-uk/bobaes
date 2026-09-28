// ⚠️ DRAFT CONTENT — NOT SUPPLIED BY THE SCHOOL. ⚠️
//
// These dates follow the usual Nigerian three-term academic year shape but
// they are INVENTED. Replace every one with the school's approved calendar
// before launch — parents will plan travel and childcare around these.
//
// See docs/CONTENT-TODO.md.

export const CALENDAR_SESSION = "2026 / 2027 session";

export type CalendarTerm = {
  id: string;
  name: string;
  window: string;
  events: { date: string; label: string }[];
  draft: boolean;
};

export const CALENDAR: CalendarTerm[] = [
  {
    id: "first-term",
    name: "First Term",
    window: "September – December 2026",
    events: [
      { date: "Mon 7 September 2026", label: "Term begins — resumption for all levels" },
      { date: "Fri 2 October 2026", label: "Independence Day holiday (observed)" },
      { date: "Mon 26 – Fri 30 October 2026", label: "Mid-term break" },
      { date: "Mon 7 – Fri 11 December 2026", label: "First term examinations" },
      { date: "Fri 18 December 2026", label: "Term ends — Christmas carol service and vacation" },
    ],
    draft: true,
  },
  {
    id: "second-term",
    name: "Second Term",
    window: "January – April 2027",
    events: [
      { date: "Mon 11 January 2027", label: "Term begins" },
      { date: "Mon 22 – Fri 26 February 2027", label: "Mid-term break" },
      { date: "Sat 13 March 2027", label: "Inter-house sports" },
      { date: "Mon 29 March – Fri 2 April 2027", label: "Second term examinations" },
      { date: "Fri 9 April 2027", label: "Term ends — Easter vacation" },
    ],
    draft: true,
  },
  {
    id: "third-term",
    name: "Third Term",
    window: "April – July 2027",
    events: [
      { date: "Mon 26 April 2027", label: "Term begins" },
      { date: "May – June 2027", label: "WAEC and NECO examinations (dates set by the examination bodies)" },
      { date: "May – June 2027", label: "Basic Education Certificate Examination (BECE)" },
      { date: "Mon 14 – Fri 18 June 2027", label: "Mid-term break" },
      { date: "Mon 5 – Fri 9 July 2027", label: "Third term examinations" },
      { date: "Fri 16 July 2027", label: "Speech and prize-giving day — session ends" },
    ],
    draft: true,
  },
];

/** ⚠️ DRAFT — confirm the real admissions windows. */
export const ADMISSIONS_DATES = [
  { label: "Admissions", date: "Ongoing", draft: false },
  { label: "Written placement test", date: "Monday–Friday · 8:00am–4:00pm", draft: false },
];
