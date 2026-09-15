// ⚠️ DRAFT CONTENT — NOT SUPPLIED BY THE SCHOOL. ⚠️
//
// These quotes were written for the build. No real parent said them.
// Attributions are deliberately left as bracketed placeholders so that
// nothing here can be mistaken for a genuine endorsement if it reaches
// a live server before the school collects real testimonials.
//
// Replace the quote AND the attribution together. Do not publish a real
// name against an invented quote.
//
// See docs/CONTENT-TODO.md.

export type Testimonial = {
  id: string;
  quote: string;
  attribution: string;
  detail: string;
  draft: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "What sold us was the first visit. The teachers knew every child in the room by name, and nobody was sitting quietly at the back being overlooked.",
    attribution: "[Parent name to be supplied]",
    detail: "[Parent of a Primary 3 pupil]",
    draft: true,
  },
  {
    id: "t2",
    quote:
      "Our daughter started in nursery barely speaking to anyone. She now comes home and explains her day to us in full sentences, unprompted.",
    attribution: "[Parent name to be supplied]",
    detail: "[Parent of a Nursery pupil]",
    draft: true,
  },
  {
    id: "t3",
    quote:
      "The school walked us through the WAEC registration step by step. As a first-time parent at that stage, that mattered more than I expected.",
    attribution: "[Parent name to be supplied]",
    detail: "[Parent of an SS 3 student]",
    draft: true,
  },
];
