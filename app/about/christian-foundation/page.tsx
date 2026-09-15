import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { ButtonLink, PageHero, Section, SectionHeading } from "@/components/ui";
import { PILLARS } from "@/content/about";

export const metadata: Metadata = {
  title: "Our Christian Foundation",
  description:
    "Christ is preeminent in all things. How the Christian foundation of BOBAES Edu-Excellence Schools shapes an ordinary school day — warmly, and without pressure.",
  alternates: { canonical: "/about/christian-foundation" },
};

const PREEMINENCE = PILLARS[0];

export default function ChristianFoundationPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Christian foundation"
        title="Christ is preeminent in all things."
        lead={PREEMINENCE.scripture}
        media="aboutChristianFoundation"
      />

      <Section tone="paper" narrow>
        <Reveal>
          <p className="t-lead text-ink">{PREEMINENCE.body}</p>

          <div className="my-12 border-l-4 border-red pl-6">
            <p
              className="text-xl leading-snug text-navy sm:text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              &ldquo;He is the image of the invisible God, the firstborn over
              all creation… and in all things He may have the preeminence.&rdquo;
            </p>
            <p className="t-eyebrow mt-4 text-ink-soft">
              {PREEMINENCE.scripture}
            </p>
          </div>

          <div className="space-y-5 text-ink-soft">
            <p>
              In practice that means faith is not a subject bolted on to the
              timetable once a week. It is the assumption underneath the rest of
              it — why honesty matters in a maths test, why a child is treated
              with dignity when they are struggling, why a teacher keeps going
              with a pupil who has not understood yet.
            </p>
            <p>
              The school day opens with devotion, and Bible teaching runs
              through the week at a level each age can actually hold. It is
              warm, and it is age-appropriate. Children are not frightened into
              belief here.
            </p>
            <p>
              Families of other faiths are welcome and are treated with the same
              respect and dignity we ask of everyone — that is one of our core
              values, and it is not conditional. We simply tell you plainly who
              we are, so that you can decide with your eyes open.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="What makes us a top private school"
          title="Three commitments, in the school's own words"
        />

        <ul className="mt-12 border-t border-navy/15">
          {PILLARS.map((pillar, i) => (
            <Reveal as="li" key={pillar.id} delay={i * 80}>
              <article className="grid gap-6 border-b border-navy/15 py-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-center md:gap-12">
                <div className={`relative aspect-3/2 w-full overflow-hidden rounded-md bg-paper ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <Photo
                    media={pillar.mediaKey}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div>
                <h3 className="t-h2 text-navy">{pillar.title}</h3>
                {"scripture" in pillar && pillar.scripture ? (
                  <p className="t-eyebrow mt-2 text-red">{pillar.scripture}</p>
                ) : null}
                <p className="mt-4 max-w-xl text-ink-soft">
                  {pillar.body}
                </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href="/about/facilities" variant="outline">
            See our facilities
          </ButtonLink>
          <ButtonLink href="/about/staff" variant="ghost">
            Meet our staff →
          </ButtonLink>
        </div>
      </Section>

      <CtaBand
        title="Come and see how a morning actually runs"
        lead="The best way to judge whether this is the right environment for your child is to visit during a school day."
      />
    </>
  );
}
