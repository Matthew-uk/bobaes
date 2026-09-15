import Link from "next/link";
import type { Route } from "next";
import Photo from "./Photo";
import Reveal from "./Reveal";
import type { MediaKey } from "@/content/media";

/* -------------------------------------------------------------------------- */
/* Buttons                                                                     */
/* -------------------------------------------------------------------------- */

const BUTTON_BASE =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold tracking-wide transition-colors duration-200 focus-visible:outline-3";

export const buttonStyles = {
  primary: `${BUTTON_BASE} bg-red text-white hover:bg-red-deep`,
  navy: `${BUTTON_BASE} bg-navy text-white hover:bg-navy-soft`,
  outline: `${BUTTON_BASE} border-2 border-navy text-navy hover:bg-navy hover:text-white`,
  outlineLight: `${BUTTON_BASE} border-2 border-white/70 text-white hover:bg-white hover:text-navy`,
  ghost: `${BUTTON_BASE} text-navy underline underline-offset-4 hover:text-red px-0`,
} as const;

type ButtonVariant = keyof typeof buttonStyles;

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  external = false,
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const cls = `${buttonStyles[variant]} ${className}`.trim();

  if (external) {
    return (
      <a
        href={href}
        className={cls}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href as Route} className={cls}>
      {children}
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* Section shells                                                              */
/* -------------------------------------------------------------------------- */

type Tone = "paper" | "sand" | "navy" | "tint" | "white";

const TONE_CLASS: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  sand: "bg-sand text-ink",
  navy: "bg-navy text-white",
  tint: "bg-navy-tint text-ink",
  white: "bg-white text-ink",
};

export function Section({
  tone = "paper",
  className = "",
  children,
  id,
  narrow = false,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
  id?: string;
  narrow?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${TONE_CLASS[tone]} py-16 sm:py-20 lg:py-24 ${className}`.trim()}
    >
      <div className={narrow ? "wrap-narrow" : "wrap"}>{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "red",
}: {
  children: React.ReactNode;
  tone?: "red" | "light";
}) {
  return (
    <p
      className={`t-eyebrow mb-4 flex items-center gap-3 ${
        tone === "light" ? "text-white/70" : "text-red"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-px w-8 shrink-0 ${tone === "light" ? "bg-white/40" : "bg-red"}`}
      />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "dark",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`.trim()}
    >
      {eyebrow ? (
        <Eyebrow tone={tone === "light" ? "light" : "red"}>{eyebrow}</Eyebrow>
      ) : null}
      <h2 className={`t-h2 ${tone === "light" ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {lead ? (
        <p
          className={`t-lead mt-5 ${tone === "light" ? "text-white/80" : ""}`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Editorial split block — the workhorse layout of this site                    */
/* -------------------------------------------------------------------------- */

export function SplitBlock({
  media,
  eyebrow,
  title,
  children,
  reverse = false,
  tone = "paper",
  actions,
  /** Uneven split keeps the rhythm off a plain 50/50 grid. */
  weight = "even",
}: {
  media: MediaKey;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  reverse?: boolean;
  tone?: Tone;
  actions?: React.ReactNode;
  weight?: "even" | "text" | "image";
}) {
  const cols =
    weight === "text"
      ? "lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
      : weight === "image"
        ? "lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
        : "lg:grid-cols-2";

  return (
    <section className={`${TONE_CLASS[tone]} py-16 sm:py-20 lg:py-24`}>
      <div className="wrap">
        <div className={`grid items-center gap-10 lg:gap-16 ${cols}`}>
          <Reveal className={reverse ? "lg:order-2" : ""}>
            <div className="relative aspect-4/3 w-full max-w-full overflow-hidden rounded-md">
              <Photo
                media={media}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          <Reveal delay={80} className={reverse ? "lg:order-1" : ""}>
            {eyebrow ? (
              <Eyebrow tone={tone === "navy" ? "light" : "red"}>
                {eyebrow}
              </Eyebrow>
            ) : null}
            <h2
              className={`t-h2 ${tone === "navy" ? "text-white" : "text-navy"}`}
            >
              {title}
            </h2>
            <div
              className={`mt-5 space-y-4 ${tone === "navy" ? "text-white/80" : "text-ink-soft"}`}
            >
              {children}
            </div>
            {actions ? (
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                {actions}
              </div>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Page hero used by every inner page                                          */
/* -------------------------------------------------------------------------- */

/**
 * With a photograph: title beside the image at full strength — the school's
 * own pictures are the point, so they are never washed out under a gradient.
 * Without one: a compact paper header rather than a tall empty band.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  media,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  media?: MediaKey;
}) {
  if (!media) {
    return (
      <header className="border-b border-navy/10 bg-paper">
        <div className="wrap py-12 sm:py-16">
          <div className="max-w-3xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="t-h1 text-navy">{title}</h1>
            {lead ? <p className="t-lead mt-5 max-w-2xl">{lead}</p> : null}
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-paper">
      <div className="wrap grid gap-8 pt-10 pb-14 sm:pt-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-center lg:gap-16 lg:pb-20">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="t-h1 text-navy">{title}</h1>
          {lead ? <p className="t-lead mt-5 max-w-xl">{lead}</p> : null}
        </div>
        <div className="relative aspect-3/2 w-full overflow-hidden rounded-md bg-sand">
          <Photo
            media={media}
            fill
            eager
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/* Numbered steps — used on How to Apply and Exam Registration                 */
/* -------------------------------------------------------------------------- */

export function StepList({
  steps,
}: {
  steps: { title: string; body: string }[];
}) {
  return (
    <ol className="mt-12 border-t border-navy/15">
      {steps.map((step, i) => (
        <Reveal as="li" key={step.title} delay={i * 60}>
          <div className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-navy/15 py-7 sm:grid-cols-[5rem_1fr] sm:gap-6">
            <span
              aria-hidden="true"
              className="font-display text-2xl leading-none text-red tabular-nums sm:text-3xl"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="max-w-2xl">
              <h3 className="t-h3 text-navy">{step.title}</h3>
              <p className="mt-2 text-ink-soft">{step.body}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

/* -------------------------------------------------------------------------- */
/* Draft-content marker (development only)                                     */
/* -------------------------------------------------------------------------- */

/**
 * Renders a visible warning in development for content the school has not
 * supplied. Silent in production so it never reaches parents, but loud enough
 * in dev that it does not get forgotten.
 */
export function DraftNote({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV === "production") return null;
  return (
    <p className="mt-6 rounded-md border-2 border-dashed border-red/50 bg-red-tint px-4 py-3 text-sm font-semibold text-red-deep">
      ⚠️ Draft content (visible in development only): {children}
    </p>
  );
}
