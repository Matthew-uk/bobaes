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
import { EXAM_BODIES, EXAM_STEPS } from "@/content/academics";
import { SCHOOL, whatsappLink } from "@/content/school";

export const metadata: Metadata = {
  title: "WAEC, NECO & CBT Registration",
  description:
    "How examination registration works at BOBAES Edu-Excellence Schools — WAEC, NECO and computer-based testing, step by step.",
  alternates: { canonical: "/academics/exam-registration" },
};

const EXAM_MESSAGE = `Hello ${SCHOOL.shortName}, I would like to ask about WAEC / NECO / CBT registration.`;

export default function ExamRegistrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Examinations"
        title="WAEC, NECO and CBT registration."
        lead="Registration is the point where families most often get lost. It should not be complicated, and here it is not."
        media="examsHero"
      />

      <Section tone="paper">
        <SectionHeading
          eyebrow="The examinations"
          title="What your child will sit"
        />

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {EXAM_BODIES.map((exam, i) => (
            <Reveal as="li" key={exam.id} delay={i * 70}>
              <article className="h-full rounded-md border-2 border-navy/12 bg-white p-7">
                <h2
                  className="text-2xl font-bold text-navy"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {exam.name}
                </h2>
                <p className="t-eyebrow mt-1.5 text-red">{exam.fullName}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {exam.body}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Step by step"
          title="How to register"
          lead="Four steps. Start by calling the school — deadlines are set by the examination bodies and they do not move."
        />

        <StepList steps={EXAM_STEPS} />

        <DraftNote>
          These steps were drafted for the build. Confirm the real process,
          current fees and this session&rsquo;s deadlines with the examinations
          officer, then update <code>EXAM_STEPS</code> in{" "}
          <code>content/academics.ts</code>.
        </DraftNote>

        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href={SCHOOL.phone.href} variant="primary" external>
            Call {SCHOOL.phone.display}
          </ButtonLink>
          <ButtonLink
            href={whatsappLink(EXAM_MESSAGE)}
            variant="outline"
            external
          >
            Ask on WhatsApp
          </ButtonLink>
        </div>
      </Section>

      <Section tone="navy" narrow>
        <SectionHeading
          tone="light"
          align="center"
          eyebrow="A note for parents"
          title="Check the registration slip yourself."
        />
        <p className="mx-auto mt-6 max-w-xl text-center text-white/80">
          Names and subject combinations cannot be changed after the deadline
          has passed, and a misspelled name on a certificate follows a young
          person for years. Read the printed slip carefully before you sign it —
          we will go through it with you.
        </p>
      </Section>

      <CtaBand
        title="Not yet a BOBAES student?"
        lead="Our secondary school takes candidates from JSS 1 through to SS 3. Talk to us about a place."
      />
    </>
  );
}
