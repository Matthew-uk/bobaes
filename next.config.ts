import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Type-checks every <Link href> and router.push across a nav-heavy site.
  typedRoutes: true,
  images: {
    // Next 16 restricts qualities to [75] unless declared explicitly.
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
