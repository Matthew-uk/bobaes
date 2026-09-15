import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import {
  ButtonLink,
  DraftNote,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui";
import { CALENDAR, CALENDAR_SESSION } from "@/content/calendar";
import { SCHOOL } from "@/content/school";

export const metadata: Metadata = {
  title: "School Calendar",
  description: `Term dates and key events for the ${CALENDAR_SESSION} at BOBAES Edu-Excellence Schools, Port Harcourt.`,
  alternates: { canonical: "/admissions/calendar" },
};

export default function CalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="School calendar"
        lead={`Term dates and key events for the ${CALENDAR_SESSION}. Print it, screenshot it, put it on the fridge.`}
      />

      <Section tone="paper">
        <SectionHeading
          eyebrow={CALENDAR_SESSION}
          title="Three terms, at a glance"
          lead="Examination dates set by WAEC and NECO are confirmed by those bodies each year and may shift — we will let families know as soon as they are published."
        />

        <div className="mt-14 space-y-12">
          {CALENDAR.map((term, i) => (
            <Reveal key={term.id} delay={i * 70}>
              <section
                aria-labelledby={`term-${term.id}`}
                className="overflow-hidden rounded-md border-2 border-navy/12 bg-white"
              >
                <header className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-navy/12 bg-navy-tint px-6 py-5">
                  <h2 id={`term-${term.id}`} className="t-h3 text-navy">
                    {term.name}
                  </h2>
                  <p className="t-eyebrow text-red">{term.window}</p>
                </header>

                <ul className="divide-y divide-navy/10">
                  {term.events.map((event) => (
                    <li
                      key={`${term.id}-${event.label}`}
                      className="grid gap-1 px-6 py-4 sm:grid-cols-[16rem_1fr] sm:gap-6"
                    >
                      <span className="text-sm font-bold whitespace-nowrap text-navy tabular-nums">
                        {event.date}
                      </span>
                      <span className="text-ink-soft">{event.label}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>

        <DraftNote>
          Every date on this page is invented. Replace{" "}
          <code>content/calendar.ts</code> with the school&rsquo;s approved
          calendar before launch — families will plan travel and childcare
          around these.
        </DraftNote>
      </Section>

      <Section tone="sand" narrow>
        <SectionHeading
          align="center"
          eyebrow="Dates changed?"
          title="We will always tell you directly"
        />
        <p className="mx-auto mt-5 max-w-xl text-center text-ink-soft">
          Calendar changes go out to parents by WhatsApp and through your
          child&rsquo;s class teacher, not only through this page. If you are
          unsure about a date, call the school office on{" "}
          <a
            href={SCHOOL.phone.href}
            className="font-bold text-navy underline underline-offset-4 hover:text-red"
          >
            {SCHOOL.phone.display}
          </a>
          .
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/admissions" variant="primary">
            Enquire about a place
          </ButtonLink>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
