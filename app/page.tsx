import Link from "next/link";
import type { Route } from "next";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { ButtonLink, Eyebrow, SectionHeading, DraftNote } from "@/components/ui";
import { SCHOOL, whatsappLink, WHATSAPP_TOUR_MESSAGE } from "@/content/school";
import { ELEARNING, GOAL, PHILOSOPHY, PILLARS } from "@/content/about";
import { EXAM_BODIES, LEVELS } from "@/content/academics";
import { TESTIMONIALS } from "@/content/testimonials";
import type { MediaKey } from "@/content/media";

const WELCOME_COPY = [
  `${SCHOOL.name}, Port Harcourt, Rivers State, Nigeria is a co-educational day Nursery, Primary and Junior Secondary school. It is open to all, irrespective of religion, ethnicity, nationality or race.`,
  "We provide a well-rounded education in terms of conscience, competence, compassion and commitment. At graduation, we expect our students to be open to growth, intellectually competent, loving, religious and committed to promoting justice.",
  "We admit pupils into Nursery, Primary and JSS 1 to JSS 3 classes. Prospective students into JSS 1 take an entrance examination at a date communicated to candidates, with English Language and Mathematics based on the NERDC curriculum for Basic 4-6.",
  "If what you want for your child is a world-class education, then you are right to consider BOBAES Edu-Excellence Schools.",
];

/** Short facts, each taken from the school's own documents. */
const FACTS = [
  { term: "Nursery to JSS 3", detail: "Nursery, Primary and junior secondary education" },
  { term: "Christ-centred", detail: "Colossians 1:15–18 at the heart of the school" },
  { term: "ULESSON e-learning", detail: "Digital curriculum alongside classroom teaching" },
  { term: "Admissions ongoing", detail: "Placement tests Monday to Friday, 8:00am to 4:00pm" },
];

const LIFE: { media: MediaKey; caption: string }[] = [
  { media: "lifeDance", caption: "Outdoor sports" },
  { media: "lifeScience", caption: "Library study" },
  { media: "lifeChoir", caption: "Early-years classroom" },
  { media: "lifeHomeEconomics", caption: "Computer laboratory" },
  { media: "lifeExcursion", caption: "Playground activity" },
];

export default function HomePage() {
  return (
    <>
      {/* ------------------------------ Hero ------------------------------ */}
      <section className="bg-paper">
        <div className="wrap grid gap-10 pt-10 pb-14 sm:pt-14 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:items-center lg:gap-14 lg:pt-16 lg:pb-20">
          <div>
            <Eyebrow>
              Nursery to JSS 3
              <span className="hidden sm:inline"> · Port Harcourt</span>
            </Eyebrow>
            <h1 className="t-display text-navy">
              Connecting goodness, integrity{" "}
              <span className="text-red">and knowledge.</span>
            </h1>
            <p className="t-lead mt-6 max-w-xl">
              {SCHOOL.name} offers exclusive education based on Nigerian and
              International standards. {GOAL}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/admissions" variant="primary">
                Apply Now
              </ButtonLink>
              <ButtonLink href="/admissions/book-a-tour" variant="outline">
                Book a Tour
              </ButtonLink>
            </div>

            <p className="mt-7 text-sm text-ink-soft">
              Call{" "}
              <a
                href={SCHOOL.phone.href}
                className="font-bold text-navy underline underline-offset-4 hover:text-red"
              >
                {SCHOOL.phone.display}
              </a>{" "}
              · {SCHOOL.address.street}, {SCHOOL.address.city}
            </p>
          </div>

          <figure>
            <div className="relative aspect-3/2 w-full overflow-hidden rounded-md bg-sand lg:aspect-5/4">
              <Photo
                media="homeHero"
                fill
                eager
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
            <figcaption className="mt-3 text-xs text-ink-soft">
              Pupils working at their desks in a BOBAES classroom.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ----------------------------- Facts ------------------------------ */}
      <section aria-label="At a glance" className="bg-navy-deep text-white">
        <dl className="wrap grid grid-cols-1 gap-x-10 gap-y-6 py-9 sm:grid-cols-2 lg:grid-cols-4">
          {FACTS.map((fact) => (
            <div key={fact.term} className="border-l-2 border-red pl-4">
              <dt className="font-display text-lg font-semibold">{fact.term}</dt>
              <dd className="mt-1 text-sm leading-snug text-white/70">
                {fact.detail}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-paper py-16 sm:py-20 lg:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Welcome"
              title="A foundation for lifelong learning and global citizenship"
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-5 text-ink-soft">
              {WELCOME_COPY.map((paragraph) => (
                <p key={paragraph.slice(0, 60)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------- Pillars ----------------------------- */}
      <section className="bg-paper py-16 sm:py-20 lg:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="Who we are"
                title="What makes us a top private school"
              />
              <div className="relative mt-10 aspect-4/3 w-full overflow-hidden rounded-md bg-sand">
                <Photo
                  media="aboutChristianFoundation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </Reveal>

          <ol className="border-t border-navy/15">
            {PILLARS.map((pillar, i) => (
              <Reveal as="li" key={pillar.id} delay={i * 60}>
                <div className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-navy/15 py-9 sm:grid-cols-[4rem_1fr] sm:gap-6">
                  <span
                    aria-hidden="true"
                    className="font-display text-2xl leading-none text-red tabular-nums sm:text-3xl"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="t-h3 text-navy">{pillar.title}</h3>
                    {"scripture" in pillar ? (
                      <p className="t-eyebrow mt-2 text-red">{pillar.scripture}</p>
                    ) : null}
                    <p className="mt-3 text-ink-soft">{pillar.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------- The whole journey ---------------------- */}
      <section className="bg-sand py-16 sm:py-20 lg:py-28">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-16">
            <Reveal>
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-md sm:aspect-3/2 lg:aspect-4/5">
                <Photo
                  media="homeTeaser"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </Reveal>

            <Reveal delay={80}>
              <Eyebrow>From 3 months to JSS 3</Eyebrow>
              <h2 className="t-h2 text-navy">
                One school, the whole way through.
              </h2>
              <p className="t-lead mt-5">
                From the early years through JSS 3, under one set of values.
                Choose the stage your child is at:
              </p>

              <ul className="mt-8 divide-y divide-navy/12 border-y border-navy/12">
                {LEVELS.map((level) => (
                  <li key={level.slug}>
                    <Link
                      href={`/academics/${level.slug}` as Route}
                      className="group flex items-baseline justify-between gap-4 py-4"
                    >
                      <span className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
                        <span className="font-display text-lg font-semibold text-navy transition-colors group-hover:text-red">
                          {level.name}
                        </span>
                        <span className="text-sm text-ink-soft">
                          {level.teaser}
                        </span>
                      </span>
                      <span className="shrink-0 text-xs font-bold whitespace-nowrap text-ink-soft">
                        {level.ages}
                        <span aria-hidden="true" className="ml-2 text-red transition-transform group-hover:translate-x-0.5">
                          →
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --------------------------- How we teach ------------------------- */}
      <section className="bg-paper py-16 sm:py-20 lg:py-28">
        <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20">
          <Reveal>
            <Eyebrow>How we teach</Eyebrow>
            <p className="font-display text-[clamp(1.5rem,1.15rem+1.2vw,2.125rem)] leading-[1.25] font-medium text-navy">
              {PHILOSOPHY.opening}
            </p>
          </Reveal>
          <Reveal delay={80} className="lg:pt-10">
            <div className="space-y-4 text-ink-soft">
              <p>{PHILOSOPHY.body[1]}</p>
              <p>{ELEARNING.body[0]}</p>
            </div>
            <ButtonLink href="/academics" variant="ghost" className="mt-5">
              Our approach to academics →
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* --------------------------- School life -------------------------- */}
      <section className="border-t border-navy/10 bg-paper py-16 sm:py-20 lg:py-24">
        <div className="wrap">
          <SectionHeading
            eyebrow="Life at BOBAES"
            title="Classrooms, computers, sports and play"
          />

          <ul className="-mx-5 mt-10 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 pb-2 md:-mx-10 md:scroll-px-10 md:px-10 lg:mx-0 lg:grid lg:grid-cols-4 lg:grid-rows-[repeat(2,14rem)] lg:overflow-visible lg:px-0 lg:pb-0 xl:grid-rows-[repeat(2,16rem)]">
            {LIFE.map((item, i) => (
              <li
                key={item.media}
                className={`w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-auto ${
                  i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <figure className="relative aspect-4/3 w-full overflow-hidden rounded-md bg-sand lg:aspect-auto lg:h-full">
                  <Photo
                    media={item.media}
                    fill
                    sizes={
                      i === 0
                        ? "(max-width: 640px) 82vw, (max-width: 1024px) 46vw, 50vw"
                        : "(max-width: 640px) 82vw, (max-width: 1024px) 46vw, 25vw"
                    }
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/65 to-transparent px-4 pt-10 pb-3 text-sm font-semibold text-white">
                    {item.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href="/photos" variant="outline">
              View more photos
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* --------------------------- Examinations ------------------------- */}
      <section className="bg-navy text-white">
        <div className="wrap grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
          <Reveal>
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-md">
              <Photo
                media="examsHero"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <Eyebrow tone="light">Examinations</Eyebrow>
            <h2 className="t-h2 text-white">
              BECE, WAEC, NECO and CBT guidance.
            </h2>
            <p className="t-lead mt-5 text-white/80">
              Our school guides families through State BECE, NECO BECE and
              other relevant examination registration so deadlines and details
              are clear.
            </p>

            <dl className="mt-8 divide-y divide-white/15 border-y border-white/15">
              {EXAM_BODIES.map((exam) => (
                <div key={exam.id} className="grid gap-1 py-4 sm:grid-cols-[6rem_1fr] sm:gap-6">
                  <dt className="font-display text-xl font-semibold">{exam.name}</dt>
                  <dd className="text-sm leading-relaxed text-white/75">
                    {exam.fullName}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <ButtonLink href="/academics/exam-registration" variant="outlineLight">
                How registration works
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------- Testimonials --------------------------- */}
      {/* <section className="bg-sand py-16 sm:py-20 lg:py-24">
        <div className="wrap">
          <SectionHeading eyebrow="From our parents" title="What families tell us" />

          <ul className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-12">
            {TESTIMONIALS.map((t, i) => (
              <Reveal as="li" key={t.id} delay={i * 70}>
                <figure className="flex h-full flex-col border-t-2 border-red pt-6">
                  <blockquote className="flex-1">
                    <p className="font-display text-lg leading-snug text-navy">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="block font-bold text-navy">{t.attribution}</span>
                    <span className="text-ink-soft">{t.detail}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>

          <DraftNote>
            These quotes were written for the build — no parent said them.
            Collect real testimonials and replace both quote and attribution in{" "}
            <code>content/testimonials.ts</code>.
          </DraftNote>
        </div>
      </section> */}

      {/* ---------------------------- CTA --------------------------------- */}
      <CtaBand
        title="Come and see the school"
        lead={`Send an enquiry and we will call you back, or visit us at ${SCHOOL.address.street}, ${SCHOOL.address.city}.`}
      />

      {/* Screen-reader-only shortcut so the WhatsApp tour message is reachable
          from the homepage without relying solely on the floating button. */}
      <a href={whatsappLink(WHATSAPP_TOUR_MESSAGE)} className="sr-only">
        Book a tour on WhatsApp
      </a>
    </>
  );
}
