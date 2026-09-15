"use client";

import { useActionState } from "react";
import { login } from "@/app/actions/auth";
import { initialLoginState } from "@/lib/admin-state";

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialLoginState);

  return (
    <form action={formAction} className="mt-8 space-y-4">
      <div>
        <label htmlFor="password" className="block text-sm font-bold text-navy">
          Admin password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          autoFocus
          aria-invalid={state.error ? true : undefined}
          aria-describedby={state.error ? "login-error" : undefined}
          className="mt-2 w-full rounded-lg border-2 border-navy/15 bg-white px-4 py-3 text-base text-ink focus:border-navy focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-navy px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-navy-soft disabled:opacity-60"
      >
        {pending ? "Checking…" : "Sign in"}
      </button>

      <div aria-live="polite" role="status">
        {state.error ? (
          <p
            id="login-error"
            className="rounded-lg border-2 border-red/30 bg-red-tint px-4 py-3 text-sm font-semibold text-red-deep"
          >
            {state.error}
          </p>
        ) : null}
      </div>
    </form>
  );
}
