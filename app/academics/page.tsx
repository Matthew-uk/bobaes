import type { Metadata } from "next";
import Link from "next/link";
import type { Route } from "next";
import CtaBand from "@/components/CtaBand";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import {
  ButtonLink,
  PageHero,
  Section,
  SectionHeading,
  SplitBlock,
} from "@/components/ui";
import { ELEARNING, PHILOSOPHY } from "@/content/about";
import { EXAM_BODIES, LEVELS } from "@/content/academics";
import type { MediaKey } from "@/content/media";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Our teaching philosophy — metacognition, brain science and multiple intelligences — and the levels we teach, from Creche through Secondary and the SSCE.",
  alternates: { canonical: "/academics" },
};

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Superior academics"
        lead={PHILOSOPHY.opening}
        media="levelPrimary"
      />

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Our teaching philosophy"
              title="Metacognition, brain science and multiple intelligences."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-5 text-ink-soft">
              {PHILOSOPHY.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------- Levels index --------------------------- */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="From 3 months to 17 years"
          title="The levels we teach"
        />

        <ul className="mt-12 border-t border-navy/15">
          {LEVELS.map((level, i) => (
            <Reveal as="li" key={level.slug} delay={i * 50}>
              <Link
                href={`/academics/${level.slug}` as Route}
                className="group grid gap-5 border-b border-navy/15 py-7 sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-center sm:gap-8 lg:grid-cols-[minmax(0,18rem)_1fr_auto]"
              >
                <div className="relative aspect-3/2 w-full overflow-hidden rounded-md bg-sand">
                  <Photo
                    media={level.mediaKey as MediaKey}
                    fill
                    sizes="(max-width: 640px) 100vw, 18rem"
                  />
                </div>
                <div>
                  <p className="t-eyebrow text-red">{level.ages}</p>
                  <h3 className="t-h3 mt-2 text-navy transition-colors group-hover:text-red">
                    {level.name}
                  </h3>
                  <p className="mt-2 max-w-xl text-ink-soft">{level.teaser}</p>
                </div>
                <span className="text-sm font-bold text-navy transition-colors group-hover:text-red">
                  See the {level.name.toLowerCase()} day{" "}
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <SplitBlock
        media="elearningBoard"
        eyebrow="E-learning"
        title={ELEARNING.title}
        tone="sand"
        weight="text"
        reverse
        actions={
          <ButtonLink href="/about/facilities" variant="outline">
            See our facilities
          </ButtonLink>
        }
      >
        {ELEARNING.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </SplitBlock>

      {/* ------------------------ Exams pointer --------------------------- */}
      <Section tone="navy">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              tone="light"
              eyebrow="Examinations"
              title="WAEC, NECO and CBT"
              lead="Our secondary school takes candidates through to the Senior Secondary Certificate Examinations, and handles registration with families rather than around them."
            />
            <div className="mt-8">
              <ButtonLink
                href="/academics/exam-registration"
                variant="outlineLight"
              >
                How registration works
              </ButtonLink>
            </div>
          </div>

          <dl className="divide-y divide-white/15 border-y border-white/15">
            {EXAM_BODIES.map((exam) => (
              <div
                key={exam.id}
                className="grid gap-1 py-4 sm:grid-cols-[6rem_1fr] sm:gap-6"
              >
                <dt className="font-display text-xl font-semibold text-white">
                  {exam.name}
                </dt>
                <dd className="text-sm text-white/75">{exam.fullName}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
