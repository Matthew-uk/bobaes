import type { MetadataRoute } from "next";
import { ALL_ROUTES } from "@/content/nav";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://bobaeseduexcellenceschools.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return ALL_ROUTES.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    // Admissions is the conversion goal, so it ranks alongside the homepage.
    priority: route === "/" ? 1 : route.startsWith("/admissions") ? 0.9 : 0.7,
  }));
}
