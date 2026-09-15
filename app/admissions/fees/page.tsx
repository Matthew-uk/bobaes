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
import {
  FEE_EXCLUDES,
  FEE_INCLUDES,
  FEE_ROWS,
  FEE_SESSION,
  PAYMENT_TERMS,
  PUBLISH_FEE_FIGURES,
  formatNaira,
} from "@/content/fees";
import { SCHOOL, whatsappLink } from "@/content/school";

export const metadata: Metadata = {
  title: "Fees & Tuition",
  description:
    "What our fees cover, what they do not, and how payment works at BOBAES Edu-Excellence Schools, Port Harcourt.",
  alternates: { canonical: "/admissions/fees" },
};

const FEE_MESSAGE = `Hello ${SCHOOL.shortName}, please could you send me the current fee schedule?`;

export default function FeesPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Fees &amp; tuition"
        lead={`What a term costs, what it covers, and how payment works — for the ${FEE_SESSION}.`}
      />

      <Section tone="paper">
        {PUBLISH_FEE_FIGURES ? (
          <>
            <SectionHeading
              eyebrow={FEE_SESSION}
              title="Tuition by level"
              lead="Fees are per child. A one-off admission fee applies in the first term only."
            />

            <Reveal className="mt-12">
              <div className="overflow-x-auto rounded-md border-2 border-navy/12 bg-white">
                <table className="w-full min-w-[34rem] border-collapse text-left">
                  <caption className="sr-only">
                    Tuition fees by level for the {FEE_SESSION}
                  </caption>
                  <thead>
                    <tr className="border-b-2 border-navy/12 bg-navy-tint">
                      <th scope="col" className="px-5 py-4 text-sm font-bold text-navy">
                        Level
                      </th>
                      <th scope="col" className="px-5 py-4 text-right text-sm font-bold text-navy">
                        Per term
                      </th>
                      <th scope="col" className="px-5 py-4 text-right text-sm font-bold text-navy">
                        Per session
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {FEE_ROWS.map((row) => (
                      <tr
                        key={row.level}
                        className="border-b border-navy/10 last:border-b-0"
                      >
                        <th
                          scope="row"
                          className="px-5 py-4 text-left font-bold text-navy"
                        >
                          {row.level}
                        </th>
                        <td className="px-5 py-4 text-right tabular-nums text-ink">
                          {formatNaira(row.perTerm)}
                        </td>
                        <td className="px-5 py-4 text-right tabular-nums text-ink">
                          {formatNaira(row.perSession)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </>
        ) : (
          <>
            <SectionHeading
              eyebrow={FEE_SESSION}
              title="Ask us for the current fee schedule"
              lead="Fees vary by level and are reviewed each session, so we would rather send you the current figures than have you rely on a page that may be out of date."
            />

            <Reveal className="mt-10">
              <div className="rounded-md bg-navy p-8 text-white sm:p-10">
                <h3 className="t-h3 text-white">
                  We will send it the same day
                </h3>
                <p className="mt-3 max-w-xl text-white/80">
                  Tell us which level you are asking about and we will send you
                  the full schedule — tuition, the one-off admission fee, and
                  what is included.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <ButtonLink href="/admissions" variant="primary">
                    Request the fee schedule
                  </ButtonLink>
                  <ButtonLink
                    href={whatsappLink(FEE_MESSAGE)}
                    variant="outlineLight"
                    external
                  >
                    Ask on WhatsApp
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
            </Reveal>

            <DraftNote>
              Fee figures are hidden because <code>PUBLISH_FEE_FIGURES</code> is{" "}
              <code>false</code> in <code>content/fees.ts</code>. The amounts
              currently in that file are invented placeholders. Replace them
              with the bursar&rsquo;s real schedule, then set the flag to{" "}
              <code>true</code> to show the table.
            </DraftNote>
          </>
        )}
      </Section>

      <Section tone="sand">
        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="t-h2 text-navy">What fees include</h2>
            <ul className="mt-6 divide-y divide-navy/12 border-y border-navy/12">
              {FEE_INCLUDES.map((item) => (
                <li key={item} className="flex gap-3 py-3.5">
                  <span aria-hidden="true" className="font-bold text-red">
                    ✓
                  </span>
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="t-h2 text-navy">What they do not</h2>
            <ul className="mt-6 divide-y divide-navy/12 border-y border-navy/12">
              {FEE_EXCLUDES.map((item) => (
                <li key={item} className="flex gap-3 py-3.5">
                  <span aria-hidden="true" className="font-bold text-ink-soft">
                    —
                  </span>
                  <span className="text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading eyebrow="Payment" title="How payment works" />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {PAYMENT_TERMS.map((term, i) => (
            <Reveal as="li" key={term.title} delay={i * 60}>
              <div className="h-full rounded-md border-2 border-navy/12 bg-white p-6">
                <h3 className="t-h3 text-navy">{term.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                  {term.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <DraftNote>
          Payment terms above were drafted for the build. Confirm discounts,
          instalment options and the admission fee with the bursar, then update{" "}
          <code>PAYMENT_TERMS</code> in <code>content/fees.ts</code>.
        </DraftNote>
      </Section>

      <CtaBand
        title="Talk to us about a place"
        lead="Fees should not be the first conversation, and they do not have to be the last word either. Come and see the school first."
      />
    </>
  );
}
