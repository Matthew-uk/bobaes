/**
 * Hand-rolled validation for the enquiry form. Deliberately dependency-free.
 *
 * Everything here runs on the server inside the Server Action — the HTML
 * `required` attributes on the form are a convenience, not a guarantee.
 */

import { ENQUIRY_LEVEL_VALUES } from "@/content/academics";

export type FieldErrors = Partial<Record<string, string>>;

export type ValidEnquiry = {
  name: string;
  phone: string;
  email?: string;
  level: string;
  message: string;
};

const LIMITS = {
  name: 120,
  phone: 32,
  email: 200,
  message: 2000,
} as const;

/**
 * Normalises a Nigerian number to +234XXXXXXXXXX.
 * Accepts 0803…, 234803…, +234803…, and numbers with spaces, dashes or
 * parentheses. Returns null if it cannot produce a plausible number.
 */
export function normaliseNigerianPhone(input: string): string | null {
  const digits = input.replace(/[^\d+]/g, "").replace(/(?!^)\+/g, "");

  let national: string;
  if (digits.startsWith("+234")) national = digits.slice(4);
  else if (digits.startsWith("234")) national = digits.slice(3);
  else if (digits.startsWith("0")) national = digits.slice(1);
  else national = digits.replace(/^\+/, "");

  // Nigerian mobile and landline national numbers are 10 digits after the
  // trunk prefix (e.g. 802 345 6789).
  if (!/^\d{10}$/.test(national)) return null;

  return `+234${national}`;
}

function clean(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
}

/** Multi-line fields keep their line breaks. */
function cleanMultiline(value: FormDataEntryValue | null): string {
  return typeof value === "string"
    ? value.trim().replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n")
    : "";
}

export function validateEnquiry(formData: FormData): {
  ok: boolean;
  errors: FieldErrors;
  data?: ValidEnquiry;
} {
  const errors: FieldErrors = {};

  const name = clean(formData.get("name"));
  const rawPhone = clean(formData.get("phone"));
  const email = clean(formData.get("email"));
  const level = clean(formData.get("level"));
  const message = cleanMultiline(formData.get("message"));

  if (name.length < 2) {
    errors.name = "Please enter your name.";
  } else if (name.length > LIMITS.name) {
    errors.name = `Please keep this under ${LIMITS.name} characters.`;
  }

  const phone = rawPhone ? normaliseNigerianPhone(rawPhone) : null;
  if (!rawPhone) {
    errors.phone = "Please enter a phone number so we can call you back.";
  } else if (rawPhone.length > LIMITS.phone || !phone) {
    errors.phone =
      "That does not look like a Nigerian phone number. Try 0803 123 4567.";
  }

  if (email) {
    if (email.length > LIMITS.email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      errors.email = "That email address does not look right.";
    }
  }

  if (!level) {
    errors.level = "Please choose the level you are asking about.";
  } else if (!ENQUIRY_LEVEL_VALUES.includes(level)) {
    errors.level = "Please choose one of the listed options.";
  }

  if (message.length > LIMITS.message) {
    errors.message = `Please keep your message under ${LIMITS.message} characters.`;
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    errors: {},
    data: {
      name,
      phone: phone as string,
      ...(email ? { email } : {}),
      level,
      message,
    },
  };
}

/**
 * Spam heuristics that never show the submitter an error — a bot should
 * believe it succeeded.
 *
 * - `company` is a honeypot: invisible to people, irresistible to bots.
 * - `renderedAt` is stamped when the form mounts; a human takes longer than
 *   three seconds to fill in five fields.
 */
export function looksLikeSpam(formData: FormData): boolean {
  const honeypot = clean(formData.get("company"));
  if (honeypot) return true;

  const renderedAt = Number(formData.get("renderedAt"));
  if (Number.isFinite(renderedAt) && renderedAt > 0) {
    const elapsed = Date.now() - renderedAt;
    if (elapsed < 3000) return true;
    // A form left open for over 12 hours is more likely a replayed payload.
    if (elapsed > 12 * 60 * 60 * 1000) return true;
  }

  return false;
}
