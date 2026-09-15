"use server";

import { insertEnquiry } from "@/lib/enquiries";
import { isDatabaseConfigured } from "@/lib/mongodb";
import { looksLikeSpam, validateEnquiry } from "@/lib/validation";
import type { EnquiryState } from "@/lib/enquiry-state";

const SOURCES = ["admissions", "footer", "tour"] as const;
type Source = (typeof SOURCES)[number];

function readSource(formData: FormData): Source {
  const raw = formData.get("source");
  return SOURCES.includes(raw as Source) ? (raw as Source) : "admissions";
}

/**
 * Handles every enquiry form on the site.
 *
 * Signature is (prevState, formData) to match React's `useActionState`.
 */
export async function submitEnquiry(
  _prevState: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  // Bots are told the same thing a person is told, and nothing is written.
  if (looksLikeSpam(formData)) {
    return {
      status: "success",
      message: "Thank you — we have received your message.",
      errors: {},
    };
  }

  const result = validateEnquiry(formData);
  if (!result.ok || !result.data) {
    return {
      status: "error",
      message: "Please check the highlighted fields and try again.",
      errors: result.errors,
    };
  }

  if (!isDatabaseConfigured()) {
    console.error(
      "[enquiry] MONGODB_URI is not set — enquiry was NOT saved:",
      result.data,
    );
    return {
      status: "error",
      message:
        "We could not save your message just now. Please call or message us on WhatsApp instead — we will pick up.",
      errors: {},
    };
  }

  try {
    await insertEnquiry(result.data, readSource(formData));
  } catch (error) {
    console.error("[enquiry] failed to save:", error);
    return {
      status: "error",
      message:
        "Something went wrong on our side. Please call or message us on WhatsApp — we will pick up.",
      errors: {},
    };
  }

  return {
    status: "success",
    message:
      "Thank you — we have your enquiry and someone from the school will call you back shortly.",
    errors: {},
  };
}
