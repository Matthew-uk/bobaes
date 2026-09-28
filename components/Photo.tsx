import Image from "next/image";
import { getMedia, type MediaKey } from "@/content/media";

type Props = {
  media: MediaKey;
  /** Fill the (positioned) parent instead of laying out intrinsically. */
  fill?: boolean;
  sizes?: string;
  className?: string;
  /** Only the single LCP image on a page should set this. */
  eager?: boolean;
  /** Override the manifest alt, e.g. when the image is decorative in context. */
  alt?: string;
  rounded?: boolean;
};

/**
 * Wraps next/image so that image paths, dimensions and alt text all come from
 * content/media.ts. Applies the shared warm grade so that photographs from
 * different sources read as one set.
 *
 * Note: Next.js 16 deprecated `priority` in favour of `preload`; the docs
 * recommend `loading="eager"` + `fetchPriority="high"` for an above-the-fold
 * hero, which is what `eager` does here.
 */
export default function Photo({
  media,
  fill = false,
  sizes,
  className = "",
  eager = false,
  alt,
  rounded = false,
}: Props) {
  const entry = getMedia(media);
  const resolvedAlt = alt ?? entry.alt;
  const shared = {
    src: entry.src,
    style: entry.position && !fill ? { objectPosition: entry.position } : undefined,
    className: `photo-grade ${rounded ? "rounded-lg" : ""} ${className}`.trim(),
    loading: eager ? ("eager" as const) : ("lazy" as const),
    ...(eager ? { fetchPriority: "high" as const } : {}),
  };

  if (fill) {
    return (
      <Image
        {...shared}
        alt={resolvedAlt}
        fill
        unoptimized
        sizes={sizes ?? "100vw"}
        style={{ objectFit: "cover", objectPosition: entry.position }}
      />
    );
  }

  return (
    <Image
      {...shared}
      alt={resolvedAlt}
      unoptimized
      width={entry.width}
      height={entry.height}
      sizes={sizes}
    />
  );
}
