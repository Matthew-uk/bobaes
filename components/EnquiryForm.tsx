"use client";

import { useActionState, useEffect, useId, useRef } from "react";
import { submitEnquiry } from "@/app/actions/enquiry";
import { initialEnquiryState } from "@/lib/enquiry-state";
import { LEVEL_OPTIONS, OTHER_ENQUIRY_OPTION } from "@/content/academics";
import { SCHOOL, whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/content/school";

type Props = {
  /** "footer" is the compact always-available version. */
  source: "admissions" | "footer" | "tour";
  variant?: "full" | "compact";
  title?: string;
  lead?: string;
};

export default function EnquiryForm({
  source,
  variant = "full",
  title,
  lead,
}: Props) {
  const [state, formAction, pending] = useActionState(
    submitEnquiry,
    initialEnquiryState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const renderedAtRef = useRef<HTMLInputElement>(null);
  const id = useId();
  const compact = variant === "compact";

  // Stamped straight onto the input rather than held in state: the value is
  // never rendered, so a re-render would be wasted work. Read by
  // looksLikeSpam() to reject submissions that came back impossibly fast.
  const stampRenderedAt = () => {
    if (renderedAtRef.current) {
      renderedAtRef.current.value = String(Date.now());
    }
  };

  useEffect(stampRenderedAt, []);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      stampRenderedAt();
    }
  }, [state.status]);

  const field = (name: string) => `${id}-${name}`;
  const err = (name: string) => state.errors[name];

  const labelCls = compact
    ? "block text-xs font-bold text-white/80"
    : "block text-sm font-bold text-navy";

  const inputCls = compact
    ? "mt-1.5 w-full rounded-lg border border-white/25 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/45 focus:border-white/60 focus:outline-none"
    : "mt-2 w-full rounded-lg border-2 border-navy/15 bg-white px-4 py-3 text-base text-ink transition-colors placeholder:text-ink-soft/50 focus:border-navy focus:outline-none";

  const errCls = compact
    ? "mt-1 text-xs font-semibold text-red-tint"
    : "mt-1.5 text-sm font-semibold text-red-deep";

  return (
    <div className={compact ? "" : "rounded-md bg-white p-6 sm:p-8 lg:p-10 shadow-[0_24px_60px_-40px_rgba(8,26,58,0.55)]"}>
      {title ? (
        <h2 className={compact ? "t-h3 text-white" : "t-h2 text-navy"}>
          {title}
        </h2>
      ) : null}
      {lead ? (
        <p className={compact ? "mt-2 text-sm text-white/70" : "t-lead mt-4"}>
          {lead}
        </p>
      ) : null}

      <form
        ref={formRef}
        action={formAction}
        className={compact ? "mt-5 space-y-3" : "mt-8 space-y-5"}
        noValidate
      >
        <input type="hidden" name="source" value={source} />
        <input ref={renderedAtRef} type="hidden" name="renderedAt" defaultValue="0" />

        {/* Honeypot. Hidden from people, not from bots. */}
        <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
          <label htmlFor={field("company")}>Company</label>
          <input
            id={field("company")}
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className={compact ? "" : "grid gap-5 sm:grid-cols-2"}>
          <div>
            <label htmlFor={field("name")} className={labelCls}>
              Your name <span className="text-red">*</span>
            </label>
            <input
              id={field("name")}
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="e.g. Mrs Adaeze Okonkwo"
              aria-invalid={err("name") ? true : undefined}
              aria-describedby={err("name") ? field("name-error") : undefined}
              className={inputCls}
            />
            {err("name") ? (
              <p id={field("name-error")} className={errCls}>
                {err("name")}
              </p>
            ) : null}
          </div>

          <div className={compact ? "" : ""}>
            <label htmlFor={field("phone")} className={labelCls}>
              Phone / WhatsApp <span className="text-red">*</span>
            </label>
            <input
              id={field("phone")}
              name="phone"
              type="tel"
              inputMode="tel"
              required
              autoComplete="tel"
              placeholder="0803 123 4567"
              aria-invalid={err("phone") ? true : undefined}
              aria-describedby={err("phone") ? field("phone-error") : undefined}
              className={inputCls}
            />
            {err("phone") ? (
              <p id={field("phone-error")} className={errCls}>
                {err("phone")}
              </p>
            ) : null}
          </div>
        </div>

        {!compact ? (
          <div>
            <label htmlFor={field("email")} className={labelCls}>
              Email{" "}
              <span className="font-normal text-ink-soft">(optional)</span>
            </label>
            <input
              id={field("email")}
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              aria-invalid={err("email") ? true : undefined}
              aria-describedby={err("email") ? field("email-error") : undefined}
              className={inputCls}
            />
            {err("email") ? (
              <p id={field("email-error")} className={errCls}>
                {err("email")}
              </p>
            ) : null}
          </div>
        ) : null}

        <div>
          <label htmlFor={field("level")} className={labelCls}>
            Which level are you asking about?{" "}
            <span className="text-red">*</span>
          </label>
          <select
            id={field("level")}
            name="level"
            required
            defaultValue=""
            aria-invalid={err("level") ? true : undefined}
            aria-describedby={err("level") ? field("level-error") : undefined}
            className={inputCls}
          >
            <option value="" disabled>
              Choose a level…
            </option>
            {LEVEL_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="text-ink">
                {opt.label}
              </option>
            ))}
            <option
              value={OTHER_ENQUIRY_OPTION.value}
              className="text-ink"
            >
              {OTHER_ENQUIRY_OPTION.label}
            </option>
          </select>
          {err("level") ? (
            <p id={field("level-error")} className={errCls}>
              {err("level")}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={field("message")} className={labelCls}>
            Your message{" "}
            <span className={compact ? "font-normal text-white/55" : "font-normal text-ink-soft"}>
              (optional)
            </span>
          </label>
          <textarea
            id={field("message")}
            name="message"
            rows={compact ? 2 : 5}
            placeholder={
              compact
                ? "How can we help?"
                : "Tell us a little about your child, or ask us anything — fees, the school day, how to visit."
            }
            aria-invalid={err("message") ? true : undefined}
            aria-describedby={err("message") ? field("message-error") : undefined}
            className={`${inputCls} resize-y`}
          />
          {err("message") ? (
            <p id={field("message-error")} className={errCls}>
              {err("message")}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={pending}
          className={
            compact
              ? "w-full rounded-md bg-red px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-deep disabled:cursor-not-allowed disabled:opacity-60"
              : "w-full rounded-md bg-red px-6 py-4 text-base font-bold text-white transition-colors hover:bg-red-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
          }
        >
          {pending ? "Sending…" : "Send my enquiry"}
        </button>

        {/* Announced to screen readers the moment the action returns. */}
        <div aria-live="polite" role="status">
          {state.status !== "idle" && state.message ? (
            <p
              className={
                state.status === "success"
                  ? compact
                    ? "rounded-lg bg-white/15 px-3 py-2.5 text-sm font-semibold text-white"
                    : "rounded-lg border-2 border-navy/15 bg-navy-tint px-4 py-3 text-sm font-semibold text-navy"
                  : compact
                    ? "rounded-lg bg-red/25 px-3 py-2.5 text-sm font-semibold text-white"
                    : "rounded-lg border-2 border-red/30 bg-red-tint px-4 py-3 text-sm font-semibold text-red-deep"
              }
            >
              {state.message}
            </p>
          ) : null}
        </div>

        <p
          className={
            compact
              ? "text-xs leading-relaxed text-white/55"
              : "text-sm leading-relaxed text-ink-soft"
          }
        >
          Prefer to talk?{" "}
          <a
            href={SCHOOL.phone.href}
            className={compact ? "font-semibold text-white underline underline-offset-2" : "font-semibold text-navy underline underline-offset-2 hover:text-red"}
          >
            Call {SCHOOL.phone.display}
          </a>{" "}
          or{" "}
          <a
            href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className={compact ? "font-semibold text-white underline underline-offset-2" : "font-semibold text-navy underline underline-offset-2 hover:text-red"}
          >
            message us on WhatsApp
          </a>
          .
        </p>
      </form>
    </div>
  );
}
