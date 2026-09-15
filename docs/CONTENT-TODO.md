# Content to replace before launch

The school supplied four Word documents. Their text is used **verbatim in
substance** wherever it covers a section, and those parts are safe.

Everything listed here is **not** from the school. It was drafted during the
build so the pages have real structure and rhythm, and it must be reviewed —
in some cases it is actively risky to publish as-is.

Nothing on this list is marked in the live UI. In development only, a dashed
red `⚠️ Draft content` note appears under the affected sections
(`DraftNote` in `components/ui.tsx`); it renders nothing in production.

---

## 🔴 Must not go live unreviewed

These two are the highest-risk items on the site.

### Parent testimonials — `content/testimonials.ts`
Three quotes were written for the build. **No parent said them.** Attributions
are deliberately left as bracketed placeholders (`[Parent name to be
supplied]`) so nothing can be mistaken for a genuine endorsement.

Collect real quotes with permission, and replace the quote **and** the
attribution together. Never put a real parent's name against an invented quote.

Appears on: the homepage.

### Fees — `content/fees.ts`
**Every Naira figure is invented.** Parents will hold the school to a number
they read on the site.

The figures are currently **hidden**: `PUBLISH_FEE_FIGURES` is `false`, so
`/admissions/fees` shows the structure, inclusions and payment terms with a
"request the fee schedule" CTA instead of a price table. Replace `FEE_ROWS`
with the bursar's real schedule, then set the flag to `true` to show the table.

`PAYMENT_TERMS` (discounts, instalments, the one-off admission fee) is also
drafted and needs the bursar's confirmation.

---

## 🟡 Needs the school's real information

### Staff — `content/staff.ts`
All five people are placeholders with bracketed names and prompt-style bios.
No real staff names, photographs or biographies were supplied.

Replace the records **and** the matching portraits (see
`docs/PHOTO-MANIFEST.md`, the `staff*` slots). Appears on `/about/staff`.

### School calendar — `content/calendar.ts`
Every term date and event is invented. It follows the usual Nigerian
three-term shape, but families will plan travel and childcare around these.

Also check `ADMISSIONS_DATES`, used on the admissions page.
Appears on `/admissions/calendar` and `/admissions`.

### Per-level curriculum — `content/academics.ts`
The teaching philosophy and e-learning text are the school's own. The
**per-level detail is not**: for each of the five levels, `intro`, the
"day in the life" rhythm, and the focus areas were drafted.

Each level carries `draft: true`. Confirm with the section leads.
Appears on each `/academics/<level>` page.

### Examination registration steps — `content/academics.ts` (`EXAM_STEPS`)
The four registration steps are drafted. Confirm the real process, current
fees and this session's deadlines with the examinations officer.
Appears on `/academics/exam-registration`.

### Facilities — `content/about.ts` (`FACILITIES`)
The seven facility descriptions are drafted. Confirm each one describes the
real campus. The Science Laboratory and Home Economics Room entries were
added because the school's photographs show them (9.jpg, 13.jpg). Appears on `/about/facilities`.

### How to apply — `app/admissions/how-to-apply/page.tsx`
The six-step process and the "what to bring" list are drafted. Confirm the
real steps, entrance assessment arrangements and required documents with the
school office. (This copy is inline in the page rather than in `content/`.)

---

## 🟠 Contact details to confirm

In `content/school.ts`:

| Field | Current value | Status |
|---|---|---|
| Name, motto, address | from `BOBAES_Profile.docx` | ✅ real |
| Phone | `09024959076` | ✅ real (from the profile document) |
| Email | `bobaeseduexcellence@gmail.com` | ⚠️ read from the school's pull-up banner (`public/bobaes-img/14.jpg`) — confirm it is monitored |
| Facebook | `https://www.facebook.com/` | ⚠️ **placeholder** — needs the real page URL | (the footer hides the link while it is the placeholder)

Also visible on that banner but **not used** until confirmed: a website,
`bobaeseduexcellence.org`, and a second phone number that is partly hidden
(`…5614277`).

The phone number is also used for the WhatsApp links. If the school uses a
**different** number for WhatsApp than for calls, split them in
`content/school.ts` — right now both derive from the one number.

---

## ⚙️ Configuration before deploying

Copy `.env.example` to `.env.local` and set:

| Variable | Why |
|---|---|
| `MONGODB_URI` | Without it the enquiry form cannot save, and tells the parent to call instead |
| `MONGODB_DB` | Defaults to `bobaes` |
| `ADMIN_PASSWORD` | The shared password the office types at `/admin/login` |
| `ADMIN_SESSION_SECRET` | Signs the admin cookie; 16+ chars (`openssl rand -hex 32`) |
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, Open Graph tags, `sitemap.xml`, `robots.txt` |

Also outstanding:

- **The logo.** ✅ Done — the real crest (`public/brand/crest.png`, background
  removed from the supplied `logo.png`) is used in the header, footer and app icons.
  A true vector or transparent original from the designer would still be better.
- **Brand colours.** ✅ Sampled from the crest (royal blue `#254077`, crimson
  `#97161b` / `#c42c2e`) and set in `app/globals.css`.
- **WAEC / NECO / CBT logos.** The exam section currently uses text, not the
  official marks. Add them only if the school is licensed to display them.
- **Open Graph image.** ✅ `app/opengraph-image.jpg` (the school building, 2.jpg).
