import { ButtonLink } from "./ui";
import {
  SCHOOL,
  whatsappLink,
  WHATSAPP_DEFAULT_MESSAGE,
} from "@/content/school";

/**
 * Closing call to action at the foot of most pages. Two buttons carry the
 * weight; phone and WhatsApp sit beneath as plain links so the band does not
 * turn into a row of competing pills.
 */
export default function CtaBand({
  title = "Come and see the school for yourself",
  lead = "The fastest way to know whether a school is right for your child is to stand in it. Book a tour, or call the office.",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="wrap py-14 sm:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-16">
          <div>
            <h2 className="t-h2 text-white">{title}</h2>
            <p className="t-lead mt-4 max-w-2xl text-white/80">{lead}</p>
          </div>

          <div className="lg:text-right">
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ButtonLink href="/admissions/book-a-tour" variant="primary">
                Book a Tour
              </ButtonLink>
              <ButtonLink href="/admissions" variant="outlineLight">
                Apply Now
              </ButtonLink>
            </div>
            <p className="mt-5 text-sm text-white/75">
              Or call{" "}
              <a
                href={SCHOOL.phone.href}
                className="font-bold text-white underline underline-offset-4 hover:text-red-tint"
              >
                {SCHOOL.phone.display}
              </a>{" "}
              ·{" "}
              <a
                href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white underline underline-offset-4 hover:text-red-tint"
              >
                WhatsApp
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
