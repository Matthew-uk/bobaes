"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  authConfigError,
  createSession,
  destroySession,
  verifyPassword,
} from "@/lib/auth";
import { setHandled } from "@/lib/enquiries";
import { isAuthenticated } from "@/lib/auth";
import type { LoginState } from "@/lib/admin-state";

export async function login(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const configError = authConfigError();
  if (configError === "missing-password") {
    return { error: "ADMIN_PASSWORD is not set on the server." };
  }
  if (configError === "missing-secret") {
    return {
      error:
        "ADMIN_SESSION_SECRET is not set, or is shorter than 16 characters.",
    };
  }

  const password = formData.get("password");
  if (typeof password !== "string" || !password) {
    return { error: "Enter the admin password." };
  }

  if (!verifyPassword(password)) {
    // Slow down brute-force attempts a little without holding a connection.
    await new Promise((r) => setTimeout(r, 600));
    return { error: "That password is not correct." };
  }

  const created = await createSession();
  if (!created) return { error: "Could not start a session." };

  redirect("/admin");
}

export async function logout(): Promise<void> {
  await destroySession();
  redirect("/admin/login");
}

/** Toggle an enquiry between "new" and "handled" from the admin list. */
export async function toggleHandled(formData: FormData): Promise<void> {
  if (!(await isAuthenticated())) return;

  const id = formData.get("id");
  const handled = formData.get("handled") === "true";
  if (typeof id !== "string") return;

  await setHandled(id, handled);
  revalidatePath("/admin");
}
