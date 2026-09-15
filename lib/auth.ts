import "server-only";
import { createHmac, timingSafeEqual, randomBytes } from "node:crypto";
import { cookies } from "next/headers";

/**
 * Single shared-password admin session.
 *
 * Appropriate for one school office reading its own enquiries; deliberately
 * not a user system. The cookie carries an expiry and an HMAC over it, so it
 * cannot be forged or extended without the secret.
 */

export const SESSION_COOKIE = "bobaes_admin";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 12; // 12 hours

function getSecret(): string | null {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 16) return null;
  return secret;
}

function sign(payload: string, secret: string): string {
  return createHmac("sha256", secret).update(payload).digest("hex");
}

/** Constant-time string comparison that tolerates differing lengths. */
function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a, "utf8");
  const bufB = Buffer.from(b, "utf8");
  if (bufA.length !== bufB.length) {
    // Still burn a comparison so the timing does not leak the length.
    timingSafeEqual(bufA, bufA);
    return false;
  }
  return timingSafeEqual(bufA, bufB);
}

export type AuthConfigError =
  | "missing-password"
  | "missing-secret"
  | null;

/** Returns which piece of configuration is missing, if any. */
export function authConfigError(): AuthConfigError {
  if (!process.env.ADMIN_PASSWORD) return "missing-password";
  if (!getSecret()) return "missing-secret";
  return null;
}

export function verifyPassword(candidate: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  return safeEqual(candidate, expected);
}

export async function createSession(): Promise<boolean> {
  const secret = getSecret();
  if (!secret) return false;

  const expiresAt = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
  const nonce = randomBytes(8).toString("hex");
  const payload = `${expiresAt}.${nonce}`;
  const value = `${payload}.${sign(payload, secret)}`;

  const store = await cookies();
  store.set(SESSION_COOKIE, value, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
  return true;
}

export async function destroySession(): Promise<void> {
  const store = await cookies();
  store.delete({ name: SESSION_COOKIE, path: "/admin" });
}

/**
 * Reads and verifies the session cookie.
 * `cookies()` is async in Next.js 16 and opts the route into dynamic
 * rendering, which is what we want for /admin.
 */
export async function isAuthenticated(): Promise<boolean> {
  const secret = getSecret();
  if (!secret) return false;

  const store = await cookies();
  const raw = store.get(SESSION_COOKIE)?.value;
  if (!raw) return false;

  const parts = raw.split(".");
  if (parts.length !== 3) return false;

  const [expiresAt, nonce, signature] = parts;
  const payload = `${expiresAt}.${nonce}`;

  if (!safeEqual(signature, sign(payload, secret))) return false;

  const expiry = Number(expiresAt);
  if (!Number.isFinite(expiry) || Date.now() > expiry) return false;

  return true;
}
