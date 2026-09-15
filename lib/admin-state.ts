/**
 * Separate from app/actions/auth.ts because a "use server" module may only
 * export async functions.
 */
export type LoginState = { error: string };

export const initialLoginState: LoginState = { error: "" };
