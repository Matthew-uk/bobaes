import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { ButtonLink, DraftNote, PageHero, Section } from "@/components/ui";
import { ELEARNING, FACILITIES } from "@/content/about";
import type { MediaKey } from "@/content/media";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Classrooms, computer laboratory, library, playground and campus security at BOBAES Edu-Excellence Schools, Port Harcourt.",
  alternates: { canonical: "/about/facilities" },
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title="The campus your child will spend the day on."
        lead="Where we show a photograph, it is of our own school. Better still, come and walk the campus yourself before you decide."
        media="facilityClassroom"
      />

      <div className="bg-paper py-16 sm:py-20 lg:py-24">
        <div className="wrap space-y-20 lg:space-y-28">
          {FACILITIES.map((facility, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={facility.name}>
                <article
                  className={`grid items-center gap-8 lg:gap-16 ${
                    i % 3 === 0
                      ? "lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
                      : "lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
                  }`}
                >
                  {facility.mediaKey ? (
                    <div className={reverse ? "lg:order-2" : ""}>
                      <div className="relative aspect-4/3 w-full overflow-hidden rounded-md">
                        <Photo
                        media={facility.mediaKey as MediaKey}
                          fill
                          sizes="(max-width: 1024px) 100vw, 55vw"
                        />
                      </div>
                    </div>
                  ) : null}

                  <div className={`${reverse ? "lg:order-1" : ""} ${facility.mediaKey ? "" : "lg:col-span-2 lg:max-w-2xl"}`}>
                    <span className="t-eyebrow text-red">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="t-h2 mt-2 text-navy">{facility.name}</h2>
                    <p className="mt-4 text-ink-soft">{facility.body}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}

          <DraftNote>
            The facility descriptions above were drafted for the build. Confirm
            each one against the real campus in <code>content/about.ts</code>{" "}
            (<code>FACILITIES</code>), and replace the placeholder photographs
            per <code>docs/PHOTO-MANIFEST.md</code>.
          </DraftNote>
        </div>
      </div>

      <Section tone="navy">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <span className="t-eyebrow text-white/60">Technology</span>
            <h2 className="t-h2 mt-3 text-white">{ELEARNING.title}</h2>
          </div>
          <div className="space-y-4 text-white/80">
            {ELEARNING.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <div className="pt-4">
              <ButtonLink href="/academics" variant="outlineLight">
                How we teach
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Book a tour and see the lab for yourself"
        lead="We would rather you saw the computer laboratory, the library and the classrooms in person than took our word for it."
      />
    </>
  );
}
