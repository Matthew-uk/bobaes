import Link from "next/link";
import type { Route } from "next";
import Logo from "./Logo";
import EnquiryForm from "./EnquiryForm";
import { NAV } from "@/content/nav";
import { SCHOOL, whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/content/school";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="wrap py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-20">
          {/* --- Contact + sitemap --- */}
          <div>
            <Logo tone="light" size="lg" />

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
              {SCHOOL.tagline}
            </p>

            <address className="mt-8 space-y-3 text-sm not-italic">
              <p className="text-white/70">
                {SCHOOL.address.street}
                <br />
                {SCHOOL.address.city}, {SCHOOL.address.state}
              </p>

              <p>
                <a
                  href={SCHOOL.phone.href}
                  className="font-bold text-white underline-offset-4 transition-colors hover:text-red-tint hover:underline"
                >
                  {SCHOOL.phone.display}
                </a>
              </p>

              <p>
                <a
                  href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white/85 underline-offset-4 transition-colors hover:text-red-tint hover:underline"
                >
                  Message us on WhatsApp
                </a>
              </p>

              <p>
                <a
                  href={`mailto:${SCHOOL.email}`}
                  className="text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {SCHOOL.email}
                </a>
              </p>

              {SCHOOL.social.facebook !== "https://www.facebook.com/" ? (
              <p>
                <a
                  href={SCHOOL.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  Facebook
                </a>
              </p>
              ) : null}
            </address>

            <nav
              aria-label="Footer"
              className="mt-12 grid gap-8 sm:grid-cols-3"
            >
              {NAV.filter((item) => item.children).map((item) => (
                <div key={item.label}>
                  <h2 className="t-eyebrow mb-4 text-white/50">{item.label}</h2>
                  <ul className="space-y-2.5">
                    {item.children!.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href as Route}
                          className="text-sm text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          {/* --- Always-available compact enquiry form --- */}
          <div className="rounded-md border border-white/15 p-6 sm:p-8">
            <EnquiryForm
              source="footer"
              variant="compact"
              title="Ask us a question"
              lead="Leave your number and someone from the school will call you back."
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-3 pt-6 pb-24 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SCHOOL.name}. {SCHOOL.motto}.
          </p>
          <p>
            {SCHOOL.address.city}, {SCHOOL.address.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
