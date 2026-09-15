import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { DraftNote, PageHero, Section, SectionHeading } from "@/components/ui";
import { STAFF } from "@/content/staff";
import type { MediaKey } from "@/content/media";
import { PILLARS } from "@/content/about";

export const metadata: Metadata = {
  title: "Our Staff",
  description:
    "Meet the people who will teach your child at BOBAES Edu-Excellence Schools, Port Harcourt.",
  alternates: { canonical: "/about/staff" },
};

const PARTNERSHIP = PILLARS[1];

export default function StaffPage() {
  return (
    <>
      <PageHero
        eyebrow="Our staff"
        title="The people who will teach your child."
        lead="A school is only ever as good as the adults in the room. These are ours."
      />

      <Section tone="paper">
        <SectionHeading
          eyebrow="Partnering with parents"
          title={PARTNERSHIP.title}
          lead={PARTNERSHIP.body}
        />

        <ul className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {STAFF.map((member, i) => (
            <Reveal as="li" key={member.id} delay={i * 70}>
              <article>
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-md">
                  <Photo
                    media={member.mediaKey as MediaKey}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h2 className="t-h3 mt-5 text-navy">{member.name}</h2>
                <p className="t-eyebrow mt-1.5 text-red">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {member.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>

        <DraftNote>
          Every person on this page is a placeholder — no real staff names,
          photographs or biographies were supplied. Replace{" "}
          <code>content/staff.ts</code> and the matching portraits before
          launch.
        </DraftNote>
      </Section>

      <CtaBand
        title="Meet them in person"
        lead="Book a tour and we will introduce you to the people who would be teaching your child."
      />
    </>
  );
}
