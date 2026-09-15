import type { FieldErrors } from "./validation";

/**
 * Lives outside app/actions/enquiry.ts because a "use server" module may only
 * export async functions — a plain object exported from one arrives as
 * `undefined` on the client.
 */
export type EnquiryState = {
  status: "idle" | "success" | "error";
  message: string;
  errors: FieldErrors;
};

export const initialEnquiryState: EnquiryState = {
  status: "idle",
  message: "",
  errors: {},
};
