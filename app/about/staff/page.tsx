import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { PageHero, Section, SectionHeading } from "@/components/ui";
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
        title="The people serving your child."
        lead="Leadership, teaching and administration work together so each school day is orderly, attentive and purposeful."
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
                {member.photoAvailable ? (
                  <div className="relative aspect-4/5 w-full overflow-hidden rounded-md">
                    <Photo
                      media={member.mediaKey as MediaKey}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-4/5 w-full items-center justify-center rounded-md border-2 border-navy/12 bg-navy-tint p-8 text-center">
                    <div>
                      <div
                        aria-hidden="true"
                        className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-navy text-2xl font-bold text-white"
                      >
                        GO
                      </div>
                      <p className="mt-5 text-sm font-semibold text-navy">
                        Photograph not currently available
                      </p>
                    </div>
                  </div>
                )}
                <h2 className="t-h3 mt-5 text-navy">{member.name}</h2>
                <p className="t-eyebrow mt-1.5 text-red">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {member.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>

      </Section>

      <CtaBand
        title="Meet them in person"
        lead="Book a tour and we will introduce you to the people who would be teaching your child."
      />
    </>
  );
}
