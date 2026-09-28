import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import {
  ButtonLink,
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

const STEPS = [
  {
    title: "Submit the filled form",
    body: "Submit the completed admission form with two recent passport photographs.",
  },
  {
    title: "Attach the required documents",
    body: "Attach a photocopy of the child's Birth Certificate and Health Form.",
  },
  {
    title: "Take the placement test",
    body: "The child sits for a written class-placement test Monday to Friday, between 8:00am and 4:00pm. Children going into Pre-Nursery are exempt.",
  },
  {
    title: "Receive the admission documents",
    body: "The admission letter and other documents will be issued after the test result is available.",
  },
  {
    title: "Pay the school fees",
    body: "Pay the school fees into the designated bank account through the school account section. Refer to the school fees bill for the account and payment details.",
  },
];

const REQUIREMENTS = [
  "A photocopy of your child's Birth Certificate",
  "Two recent passport photographs",
  "A photocopy of the child's Health Form",
];

export default function HowToApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="How to apply"
        lead="Five steps from the completed form to payment. Admissions are ongoing, so start whenever you are ready."
      />

      <Section tone="paper">
        <SectionHeading
          eyebrow="The process"
          title="From first call to first day"
        />
        <StepList steps={STEPS} />
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
