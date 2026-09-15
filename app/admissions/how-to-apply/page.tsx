import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import {
  ButtonLink,
  DraftNote,
  PageHero,
  Section,
  SectionHeading,
  StepList,
} from "@/components/ui";
import { SCHOOL } from "@/content/school";

export const metadata: Metadata = {
  title: "How to Apply",
  description:
    "The admissions process at BOBAES Edu-Excellence Schools, step by step — from first enquiry to your child's first day.",
  alternates: { canonical: "/admissions/how-to-apply" },
};

/** ⚠️ DRAFT — confirm the real process with the school office before launch. */
const STEPS = [
  {
    title: "Get in touch",
    body: "Send an enquiry, call, or message us on WhatsApp. Tell us your child's age and the level you are considering. Someone from the school will call you back, usually the same day.",
  },
  {
    title: "Visit the school",
    body: "Come and see the campus during a school day. You will meet the head of the relevant section, see the classrooms your child would be in, and ask whatever you need to ask.",
  },
  {
    title: "Complete the application form",
    body: "Collect a form from the school office, or ask us to send one. You will need your child's birth certificate, recent passport photographs, and — for a transfer — the last report card from their current school.",
  },
  {
    title: "Entrance assessment",
    body: "From Primary upward, children sit a short, age-appropriate assessment so we can place them in the right class. It is not a test to pass or fail; it tells us where to start.",
  },
  {
    title: "Offer and acceptance",
    body: "We confirm the place, the level, and the fees for the term. Once the admission fee and first term's fees are settled, the place is held.",
  },
  {
    title: "Preparing for the first day",
    body: "Uniform list, book list, term dates and drop-off arrangements. We will walk you through all of it — nobody should arrive on day one guessing.",
  },
];

const REQUIREMENTS = [
  "Your child's birth certificate or age declaration",
  "Two recent passport photographs",
  "The last report card or transcript, for transferring pupils",
  "A transfer certificate from the previous school, where applicable",
  "Immunisation record, for creche and pre-nursery",
  "A parent or guardian's phone number and address",
];

export default function HowToApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="How to apply"
        lead="Six steps, and we walk you through every one of them. Start whenever you are ready — we take applications all year round."
        media="levelSecondary"
      />

      <Section tone="paper">
        <SectionHeading
          eyebrow="The process"
          title="From first call to first day"
        />
        <StepList steps={STEPS} />
        <DraftNote>
          This process was drafted for the build. Confirm the real steps,
          assessment arrangements and required documents with the school office,
          then update this page and the list below.
        </DraftNote>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Come prepared"
              title="What to bring"
              lead="Having these to hand makes the whole thing take one visit rather than three."
            />
          </Reveal>

          <Reveal delay={80}>
            <ul className="divide-y divide-navy/12 border-y border-navy/12">
              {REQUIREMENTS.map((item) => (
                <li key={item} className="flex gap-3 py-4">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red"
                  />
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/admissions" variant="primary">
                Start your enquiry
              </ButtonLink>
              <ButtonLink href={SCHOOL.phone.href} variant="outline" external>
                Call {SCHOOL.phone.display}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
