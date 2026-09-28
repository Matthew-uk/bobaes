// ⚠️ DRAFT CONTENT — NOT SUPPLIED BY THE SCHOOL. ⚠️
//
// EVERY NAIRA FIGURE BELOW IS INVENTED. They are structurally plausible for a
// Port Harcourt private school but they are NOT this school's fees.
//
// Publishing a wrong fee figure is the highest-risk error on this site:
// parents will hold the school to a number they read here. Replace all of
// these with the bursar's real schedule, or set `PUBLISH_FEE_FIGURES` to
// false to hide the amounts and show the "request the schedule" CTA instead.
//
// See docs/CONTENT-TODO.md.

/**
 * Master switch. While this is `false` the fees page renders the structure,
 * inclusions and payment terms but hides every invented amount.
 * Flip to `true` only once the figures below are the school's real ones.
 */
export const PUBLISH_FEE_FIGURES = false;

export const FEE_SESSION = "2026 / 2027 session";

export type FeeRow = {
  level: string;
  perTerm: number;
  perSession: number;
  draft: boolean;
};

export const FEE_ROWS: FeeRow[] = [
  { level: "Creche", perTerm: 150_000, perSession: 450_000, draft: true },
  { level: "Pre-Nursery", perTerm: 165_000, perSession: 495_000, draft: true },
  { level: "Nursery", perTerm: 185_000, perSession: 555_000, draft: true },
  { level: "Primary", perTerm: 220_000, perSession: 660_000, draft: true },
  { level: "Secondary (JSS)", perTerm: 275_000, perSession: 825_000, draft: true },
  { level: "Secondary (SSS)", perTerm: 310_000, perSession: 930_000, draft: true },
];

export const FEE_INCLUDES = [
  "Tuition for the full term",
  "Access to the computer laboratory and the ULESSON e-learning curriculum",
  "Library access",
  "Termly assessment and reporting",
  "Parent–teacher meetings",
];

export const FEE_EXCLUDES = [
  "Uniform and sports kit",
  "Textbooks and stationery",
  "Examination fees (WAEC, NECO, CBT) — set annually by the examination body",
  "Optional excursions and clubs",
  "Transport, where applicable",
];

/** ⚠️ DRAFT — confirm the real payment terms with the bursar. */
export const PAYMENT_TERMS = [
  {
    title: "Termly payment",
    body: "Fees are payable at the start of each term, before or during the first week.",
    draft: true,
  },
  {
    title: "Full-session payment",
    body: "Families who pay for the full session up front may be eligible for a discount. Confirm the current rate with the bursar.",
    draft: true,
  },
  {
    title: "Sibling consideration",
    body: "Families with more than one child enrolled may be eligible for a reduction. Please ask when you enquire.",
    draft: true,
  },
  {
    title: "One-off admission fee",
    body: "A one-time admission fee applies to new pupils and students in their first term only.",
    draft: true,
  },
];

export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString("en-NG")}`;
}
