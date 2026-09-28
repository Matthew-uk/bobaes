import Link from "next/link";
import type { Route } from "next";
import CtaBand from "./CtaBand";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { ButtonLink, DraftNote, PageHero, Section, SectionHeading } from "./ui";
import { LEVELS, type Level } from "@/content/academics";
import type { MediaKey } from "@/content/media";

/**
 * One template, five levels. The differences between Creche and Secondary are
 * data (content/academics.ts), not layout.
 */
export default function LevelPage({ level }: { level: Level }) {
  const others = LEVELS.filter((l) => l.slug !== level.slug);

  return (
    <>
      <PageHero
        eyebrow={`Academics · ${level.ages}`}
        title={level.name}
        lead={level.teaser}
        media={level.mediaKey ?? undefined}
      />

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <Reveal>
            <p className="t-lead text-ink">{level.intro}</p>

            <h2 className="t-h2 mt-14 text-navy">A day in the life</h2>
            <ol className="mt-8 space-y-0">
              {level.day
                .filter((slot) => slot.what)
                .map((slot) => (
                  <li
                    key={slot.time}
                    className="grid gap-1 border-t border-navy/12 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6"
                  >
                    <span className="t-eyebrow pt-1 text-red">{slot.time}</span>
                    <span className="text-ink-soft">{slot.what}</span>
                  </li>
                ))}
            </ol>
          </Reveal>

          {level.mediaKey ? (
            <Reveal delay={80}>
              <div className="relative aspect-3/4 w-full overflow-hidden rounded-md lg:sticky lg:top-32">
                <Photo
                  media={level.mediaKey as MediaKey}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </Reveal>
          ) : null}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="What we focus on"
          title={`What matters most in ${level.name.toLowerCase()}`}
        />

        <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {level.focus.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 60}>
              <div className="border-t-2 border-navy/15 pt-5">
                <h3 className="t-h3 text-navy">{item.title}</h3>
                <p className="mt-2.5 text-ink-soft">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        {level.draft ? (
          <DraftNote>
            The daily rhythm and focus areas for {level.name} were drafted for
            the build. Confirm them with the {level.name.toLowerCase()} lead and
            update <code>content/academics.ts</code>.
          </DraftNote>
        ) : null}

        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href="/admissions" variant="primary">
            Apply for {level.name}
          </ButtonLink>
          <ButtonLink href="/admissions/book-a-tour" variant="outline">
            Book a Tour
          </ButtonLink>
        </div>
      </Section>

      <Section tone="paper">
        <h2 className="t-h3 text-navy">Other levels</h2>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {others.map((other) => (
            <li key={other.slug}>
              <Link
                href={`/academics/${other.slug}` as Route}
                className="inline-flex items-baseline gap-2 rounded-md border-2 border-navy/15 px-5 py-2.5 text-sm font-bold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
              >
                {other.name}
                <span className="text-xs font-normal opacity-70">
                  {other.ages}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
