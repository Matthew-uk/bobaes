import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { ButtonLink, PageHero, Section, SectionHeading } from "@/components/ui";
import {
  SCHOOL,
  whatsappLink,
  WHATSAPP_TOUR_MESSAGE,
} from "@/content/school";

export const metadata: Metadata = {
  title: "Book a Tour",
  description:
    "Visit BOBAES Edu-Excellence Schools in Port Harcourt. Book a tour during a school day and see the classrooms, computer lab and playground for yourself.",
  alternates: { canonical: "/admissions/book-a-tour" },
};

const WHAT_YOU_SEE = [
  {
    title: "The classrooms, occupied",
    body: "We schedule tours during teaching hours on purpose. An empty school tells you nothing.",
  },
  {
    title: "The section head for your child's level",
    body: "You will meet the person who would actually be responsible for your child, and can ask them anything.",
  },
  {
    title: "The computer lab and library",
    body: "Count the machines. Look at the books. We would rather you checked than took our word for it.",
  },
  {
    title: "Drop-off, pick-up and security",
    body: "How the gate works, who is allowed to collect your child, and what happens if plans change.",
  },
];

export default function BookATourPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Come and see the school."
        lead="Twenty minutes on the campus will tell you more than any website can — this one included."
        media="admissionsTour"
      />

      {/* Fastest path first: WhatsApp and phone, before the form. */}
      <section className="bg-navy text-white">
        <div className="wrap py-14 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center lg:gap-16">
            <div>
              <h2 className="t-h2 text-white">
                The quickest way is to message us.
              </h2>
              <p className="t-lead mt-4 text-white/80">
                Send us a WhatsApp with a day that suits you and we will confirm
                a time. Tours run during school hours, Monday to Friday.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ButtonLink
                href={whatsappLink(WHATSAPP_TOUR_MESSAGE)}
                variant="primary"
                external
              >
                Book on WhatsApp
              </ButtonLink>
              <ButtonLink
                href={SCHOOL.phone.href}
                variant="outlineLight"
                external
              >
                Call {SCHOOL.phone.display}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="On the day"
              title="What you will actually see"
            />
            <ul className="mt-8 divide-y divide-navy/12 border-y border-navy/12">
              {WHAT_YOU_SEE.map((item) => (
                <li key={item.title} className="py-5">
                  <h3 className="font-bold text-navy">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>

            <div className="relative mt-10 aspect-3/2 w-full overflow-hidden rounded-md">
              <Photo
                media="aboutSafety"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <EnquiryForm
              source="tour"
              title="Or request a tour here"
              lead="Tell us which level you are interested in and roughly when suits you. We will call to confirm a time."
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="sand" narrow>
        <SectionHeading
          align="center"
          eyebrow="Finding us"
          title="Where we are"
        />
        <address className="mt-6 text-center text-lg not-italic leading-relaxed text-navy">
          {SCHOOL.address.street}
          <br />
          {SCHOOL.address.city}, {SCHOOL.address.state}
          <br />
          {SCHOOL.address.country}
        </address>
        <p className="mt-6 text-center text-sm text-ink-soft">
          Lost on the way? Call{" "}
          <a
            href={SCHOOL.phone.href}
            className="font-bold text-navy underline underline-offset-4 hover:text-red"
          >
            {SCHOOL.phone.display}
          </a>{" "}
          and we will talk you in.
        </p>
      </Section>
    </>
  );
}
