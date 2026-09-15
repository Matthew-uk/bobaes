import { redirect } from "next/navigation";
import { logout, toggleHandled } from "@/app/actions/auth";
import { isAuthenticated } from "@/lib/auth";
import { countEnquiries, listEnquiries, type EnquiryView } from "@/lib/enquiries";
import { isDatabaseConfigured } from "@/lib/mongodb";
import { LEVELS } from "@/content/academics";
import { whatsappLink } from "@/content/school";

// Rendered per request — see the note in app/admin/layout.tsx.
export const dynamic = "force-dynamic";

/** Slug -> human label, so the office does not read "pre-nursery". */
const LEVEL_LABEL: Record<string, string> = {
  ...Object.fromEntries(LEVELS.map((l) => [l.slug, l.name])),
  other: "Not sure yet",
};

function formatWhen(iso: string): string {
  return new Date(iso).toLocaleString("en-NG", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default async function AdminPage() {
  if (!(await isAuthenticated())) redirect("/admin/login");

  if (!isDatabaseConfigured()) {
    return (
      <div className="wrap-narrow py-20">
        <h1 className="t-h2 text-navy">Enquiries</h1>
        <p className="mt-4 rounded-lg border-2 border-red/30 bg-red-tint px-4 py-3 text-sm font-semibold text-red-deep">
          MONGODB_URI is not set, so there is no database to read. Copy
          .env.example to .env.local and fill it in.
        </p>
      </div>
    );
  }

  let enquiries: EnquiryView[] = [];
  let counts = { total: 0, unhandled: 0 };
  let error: string | null = null;

  try {
    [enquiries, counts] = await Promise.all([
      listEnquiries(),
      countEnquiries(),
    ]);
  } catch (e) {
    error = e instanceof Error ? e.message : "Could not reach the database.";
  }

  return (
    <div className="wrap py-12 lg:py-16">
      <header className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-navy/12 pb-6">
        <div>
          <h1 className="t-h2 text-navy">Enquiries</h1>
          <p className="mt-2 text-sm text-ink-soft">
            {counts.total} total · <strong>{counts.unhandled} new</strong>
          </p>
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="rounded-full border-2 border-navy/20 px-5 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            Sign out
          </button>
        </form>
      </header>

      {error ? (
        <p className="mt-8 rounded-lg border-2 border-red/30 bg-red-tint px-4 py-3 text-sm font-semibold text-red-deep">
          {error}
        </p>
      ) : null}

      {!error && enquiries.length === 0 ? (
        <p className="mt-10 text-ink-soft">
          No enquiries yet. They will appear here as soon as a parent submits
          the form.
        </p>
      ) : null}

      <ul className="mt-8 space-y-4">
        {enquiries.map((enquiry) => (
          <li
            key={enquiry.id}
            className={`rounded-2xl border-2 bg-white p-6 ${
              enquiry.handled ? "border-navy/10 opacity-65" : "border-red/25"
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="t-h3 text-navy">{enquiry.name}</h2>
                  {!enquiry.handled ? (
                    <span className="rounded-full bg-red px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white">
                      New
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-ink-soft">
                  {LEVEL_LABEL[enquiry.level] ?? enquiry.level} · via{" "}
                  {enquiry.source} · {formatWhen(enquiry.createdAt)}
                </p>
              </div>

              <form action={toggleHandled}>
                <input type="hidden" name="id" value={enquiry.id} />
                <input
                  type="hidden"
                  name="handled"
                  value={(!enquiry.handled).toString()}
                />
                <button
                  type="submit"
                  className="rounded-full border-2 border-navy/20 px-4 py-2 text-xs font-bold text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  {enquiry.handled ? "Mark as new" : "Mark as handled"}
                </button>
              </form>
            </div>

            {enquiry.message ? (
              <p className="mt-4 whitespace-pre-line rounded-lg bg-paper p-4 text-sm text-ink">
                {enquiry.message}
              </p>
            ) : null}

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={`tel:${enquiry.phone}`}
                className="rounded-full bg-navy px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-navy-soft"
              >
                Call {enquiry.phone}
              </a>
              <a
                href={whatsappLink(
                  `Hello ${enquiry.name}, thank you for your enquiry to BOBAES Edu-Excellence Schools.`,
                ).replace(
                  /wa\.me\/\d+/,
                  `wa.me/${enquiry.phone.replace(/\D/g, "")}`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-navy/20 px-4 py-2 text-xs font-bold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                WhatsApp
              </a>
              {enquiry.email ? (
                <a
                  href={`mailto:${enquiry.email}`}
                  className="rounded-full border-2 border-navy/20 px-4 py-2 text-xs font-bold text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  {enquiry.email}
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
