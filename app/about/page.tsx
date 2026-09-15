import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import {
  ButtonLink,
  PageHero,
  Section,
  SectionHeading,
  SplitBlock,
} from "@/components/ui";
import {
  CORE_VALUES,
  FOCUS,
  GOAL,
  MISSION,
  VISION,
  WELCOME,
} from "@/content/about";
import { SCHOOL } from "@/content/school";

export const metadata: Metadata = {
  title: "Our Story, Mission & Values",
  description:
    "Who BOBAES Edu-Excellence Schools are, what we are for, and the values we hold: honesty and integrity, respect and dignity, compassion, accountability and teamwork.",
  alternates: { canonical: "/about" },
};

const PURPOSE = [
  { label: "Our Goal", body: GOAL },
  { label: "Our Mission", body: MISSION },
  { label: "Our Vision", body: VISION },
  { label: "Our Focus", body: FOCUS },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={WELCOME.heading}
        lead={WELCOME.body}
        media="aboutStory"
      />

      <Section tone="paper">
        <SectionHeading
          eyebrow={SCHOOL.motto}
          title="What we are here to do"
          lead="Four statements the school holds itself to. They are short on purpose — a parent should be able to hold us to them."
        />

        <dl className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {PURPOSE.map((item, i) => (
            <Reveal key={item.label} delay={i * 70}>
              <dt className="t-eyebrow text-red">{item.label}</dt>
              <dd
                className="mt-3 text-lg leading-relaxed text-navy"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.body}
              </dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      <SplitBlock
        media="homeTeaser"
        eyebrow="Core values"
        title="Goodness, integrity and knowledge — connected."
        tone="sand"
        weight="text"
        reverse
        actions={
          <>
            <ButtonLink href="/about/christian-foundation" variant="outline">
              Our Christian foundation
            </ButtonLink>
            <ButtonLink href="/about/staff" variant="ghost">
              Meet our staff →
            </ButtonLink>
          </>
        }
      >
        <p>
          The school motto is not decoration. It describes an order: goodness
          and integrity come first, and knowledge is built on top of them. These
          are the five values that follow from it.
        </p>
        <ul className="mt-6 space-y-3">
          {CORE_VALUES.map((value) => (
            <li key={value.title} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red"
              />
              <span className="text-ink">
                <strong className="font-bold text-navy">{value.title}</strong>{" "}
                {value.body.slice(value.title.length).replace(/^\s+/, "")}
              </span>
            </li>
          ))}
        </ul>
      </SplitBlock>

      <Section tone="navy">
        <SectionHeading
          tone="light"
          eyebrow="Where to next"
          title="Look a little closer"
          align="center"
        />
        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-3">
          <ButtonLink href="/about/christian-foundation" variant="outlineLight">
            Christian Foundation
          </ButtonLink>
          <ButtonLink href="/about/facilities" variant="outlineLight">
            Facilities
          </ButtonLink>
          <ButtonLink href="/about/staff" variant="outlineLight">
            Our Staff
          </ButtonLink>
          <ButtonLink href="/academics" variant="outlineLight">
            Academics
          </ButtonLink>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
