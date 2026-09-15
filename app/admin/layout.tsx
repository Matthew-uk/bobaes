import type { Metadata } from "next";

/**
 * Admin routes must render per request.
 *
 * Without this Next prerenders them at build time: `cookies()` returns nothing
 * during the build, so the "not signed in" redirect gets baked into a static
 * response and served to everyone forever — the office could never reach the
 * enquiry list, however valid their session.
 */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin",
  // Keep the enquiry list out of search results under all circumstances.
  robots: { index: false, follow: false, nocache: true },
};

/**
 * The auth guard itself lives in app/admin/page.tsx rather than here: layouts
 * do not re-render on client-side navigation, so a layout is the wrong place
 * to rely on for access control. Each admin page checks for itself.
 */
export default function AdminLayout({ children }: LayoutProps<"/admin">) {
  return <div className="bg-paper">{children}</div>;
}
