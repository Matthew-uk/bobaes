import type { Metadata } from "next";
import GalleryLightbox from "@/components/GalleryLightbox";
import { ButtonLink, PageHero, Section, SectionHeading } from "@/components/ui";
import { GALLERY_CATEGORIES, GALLERY_PHOTOS } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Photos",
  description:
    "Photos from BOBAES Edu-Excellence Schools: classroom learning, school life, activities, events and campus moments.",
  alternates: { canonical: "/photos" },
};

export default function PhotosPage() {
  return (
    <>
      <PageHero
        eyebrow="Photos"
        title="A closer look at life at BOBAES."
        lead="Step inside the classrooms, computer laboratory, playground, school events and everyday learning moments that shape the BOBAES experience."
        media="galleryClassroom"
      />

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end lg:gap-16">
          <SectionHeading
            eyebrow="Gallery"
            title="Learning, care and school life in pictures"
            lead="These photographs are drawn from the school's own image set and grouped so parents can browse the spaces and moments that matter."
          />

          <ul className="flex flex-wrap gap-2 lg:justify-end">
            {GALLERY_CATEGORIES.map((category) => (
              <li
                key={category}
                className="rounded-full border border-navy/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-navy"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <GalleryLightbox photos={GALLERY_PHOTOS} />
      </Section>

      <Section tone="sand" narrow>
        <SectionHeading
          align="center"
          eyebrow="Visit"
          title="Photographs help. A visit tells you more."
          lead="Book a tour and see the classrooms, computer laboratory, playground and daily rhythm for yourself."
        />
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/admissions/book-a-tour" variant="primary">
            Book a Tour
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
