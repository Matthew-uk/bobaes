import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://bobaeseduexcellenceschools.org";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Parent enquiries must never be indexed.
      disallow: ["/admin", "/admin/"],
    },
    sitemap: new URL("/sitemap.xml", SITE_URL).toString(),
  };
}
