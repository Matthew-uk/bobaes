import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";
import { isAuthenticated } from "@/lib/auth";

// Rendered per request — see the note in app/admin/layout.tsx.
export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  if (await isAuthenticated()) redirect("/admin");

  return (
    <div className="wrap-narrow py-20 lg:py-28">
      <h1 className="t-h2 text-navy">School office sign-in</h1>
      <p className="mt-3 text-ink-soft">
        Enter the admin password to see enquiries sent through the website.
      </p>
      <LoginForm />
    </div>
  );
}
