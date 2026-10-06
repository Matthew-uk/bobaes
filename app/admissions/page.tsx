import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";
import { ButtonLink, PageHero, Section, SectionHeading } from "@/components/ui";
import { ADMISSIONS_DATES } from "@/content/calendar";
import {
  SCHOOL,
  whatsappLink,
  WHATSAPP_DEFAULT_MESSAGE,
} from "@/content/school";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Enquire about a place at BOBAES Edu-Excellence Schools, Port Harcourt. Admissions are ongoing — send us a message, call, or book a tour.",
  alternates: { canonical: "/admissions" },
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Admissions are ongoing."
        lead="BOBAES admits pupils and students on merit, without discrimination. Beginners are welcomed into the right class, while other incoming pupils and students sit a placement test."
        media="staffEarlyYears"
      />

      <section className="bg-paper py-16 sm:py-20 lg:py-24">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
            {/* ---- The form. The most important element on the site. ---- */}
            <Reveal>
              <EnquiryForm
                source="admissions"
                title="Send us an enquiry"
                lead="Tell us a little about your child and we will come back to you — usually the same day."
              />
            </Reveal>

            {/* ---- Faster alternatives ---- */}
            <Reveal delay={80}>
              <div className="lg:sticky lg:top-32">
                <h2 className="t-h3 text-navy">Prefer not to type?</h2>
                <p className="mt-3 text-ink-soft">
                  Plenty of parents would rather just talk. Either of these
                  reaches the same office.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <ButtonLink
                    href={SCHOOL.phone.href}
                    variant="navy"
                    external
                    className="w-full"
                  >
                    Call {SCHOOL.phone.display}
                  </ButtonLink>
                  <ButtonLink
                    href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
                    variant="outline"
                    external
                    className="w-full"
                  >
                    Message us on WhatsApp
                  </ButtonLink>
                  <ButtonLink
                    href="/admissions/book-a-tour"
                    variant="outline"
                    className="w-full"
                  >
                    Book a tour instead
                  </ButtonLink>
                </div>

                <div className="mt-10 rounded-md bg-navy-tint p-6">
                  <h3 className="t-eyebrow text-red">Visit us</h3>
                  <address className="mt-3 text-sm not-italic leading-relaxed text-navy">
                    {SCHOOL.address.street}
                    <br />
                    {SCHOOL.address.city}, {SCHOOL.address.state}
                    <br />
                    {SCHOOL.address.country}
                  </address>
                </div>

                <div className="mt-6 rounded-md border-2 border-navy/12 p-6">
                  <h3 className="t-eyebrow text-red">Key dates</h3>
                  <ul className="mt-3 space-y-3">
                    {ADMISSIONS_DATES.map((item) => (
                      <li key={item.label} className="text-sm">
                        <span className="block font-bold text-navy">
                          {item.date}
                        </span>
                        <span className="text-ink-soft">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href="/admissions/calendar"
                    variant="ghost"
                    className="mt-4 text-sm"
                  >
                    Full school calendar →
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Admission policy"
          title="Fair placement into the right class"
          lead="The primary section admits children aged 2 to 10 into Pre-Nursery through Grade 5. The secondary section admits children aged 10 to 14 into JSS 1 through JSS 3."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Merit-based admission",
              body: "Admission is based on merit and is open to all pupils and students without discrimination of any type.",
            },
            {
              title: "Placement tests",
              body: "New intakes sit a written class-placement test Monday to Friday between 8:00am and 4:00pm. Pre-Nursery pupils are exempt.",
            },
            {
              title: "School week",
              body: "School activities run Monday to Friday, except on public holidays.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-md border-2 border-navy/12 bg-white p-6"
            >
              <h2 className="t-h3 text-navy">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading
          eyebrow="Next steps"
          title="Everything else you will want to know"
          align="center"
        />
        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-3">
          <ButtonLink href="/admissions/how-to-apply" variant="outline">
            How to Apply
          </ButtonLink>
          <ButtonLink href="/admissions/fees" variant="outline">
            Fees &amp; Tuition
          </ButtonLink>
          <ButtonLink href="/admissions/calendar" variant="outline">
            School Calendar
          </ButtonLink>
          <ButtonLink href="/admissions/book-a-tour" variant="outline">
            Book a Tour
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
