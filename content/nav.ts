/**
 * Site navigation. Maximum four top-level items by design — everything else
 * lives in a dropdown. Also drives the footer sitemap and app/sitemap.ts.
 */

export type NavChild = { label: string; href: string; description?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      {
        label: "Our Story, Mission & Values",
        href: "/about",
        description: "Who we are and what we are for",
      },
      {
        label: "Christian Foundation",
        href: "/about/christian-foundation",
        description: "Christ at the centre of the school day",
      },
      {
        label: "Facilities",
        href: "/about/facilities",
        description: "Classrooms, computer lab, library, playground",
      },
      {
        label: "Our Staff",
        href: "/about/staff",
        description: "The people who will teach your child",
      },
      {
        label: "Photos",
        href: "/photos",
        description: "Classrooms, school life, events and activities",
      },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      {
        label: "Creche",
        href: "/academics/creche",
        description: "3 months – 1 year",
      },
      {
        label: "Pre-Nursery",
        href: "/academics/pre-nursery",
        description: "1 – 2 years",
      },
      {
        label: "Nursery",
        href: "/academics/nursery",
        description: "3 – 5 years",
      },
      {
        label: "Primary",
        href: "/academics/primary",
        description: "6 – 11 years",
      },
      {
        label: "Secondary",
        href: "/academics/secondary",
        description: "10 – 14 years",
      },
      {
        label: "BECE / WAEC / NECO Registration",
        href: "/academics/exam-registration",
        description: "How examination registration works",
      },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      {
        label: "Enquire Now",
        href: "/admissions",
        description: "Send us a message and we will call you back",
      },
      {
        label: "How to Apply",
        href: "/admissions/how-to-apply",
        description: "The process, step by step",
      },
      {
        label: "Fees & Tuition",
        href: "/admissions/fees",
        description: "What is included and how payment works",
      },
      {
        label: "School Calendar",
        href: "/admissions/calendar",
        description: "Term dates and BECE timing",
      },
      {
        label: "Book a Tour",
        href: "/admissions/book-a-tour",
        description: "Come and see the school for yourself",
      },
    ],
  },
];

/** Every routable page, for app/sitemap.ts. */
export const ALL_ROUTES: string[] = Array.from(
  new Set(
    NAV.flatMap((item) => [item.href, ...(item.children ?? []).map((c) => c.href)]),
  ),
);
