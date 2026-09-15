import Image from "next/image";

/**
 * The school crest (public/brand/crest.png — the supplied logo with its baked-in
 * background removed) beside a typeset wordmark. The crest's own lettering is
 * illegible at header size, so the name is set in type next to it.
 * Never recolour or stretch the crest.
 */

type Props = {
  /** "light" for navy backgrounds, "dark" for paper backgrounds. */
  tone?: "light" | "dark";
  size?: "md" | "lg";
  className?: string;
};

export default function Logo({ tone = "dark", size = "md", className = "" }: Props) {
  const light = tone === "light";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/brand/crest.png"
        alt=""
        width={571}
        height={640}
        sizes={size === "lg" ? "64px" : "48px"}
        className={size === "lg" ? "h-16 w-auto" : "h-11 w-auto sm:h-12"}
      />

      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-semibold tracking-tight ${
            size === "lg" ? "text-xl" : "text-[1.05rem] sm:text-lg"
          } ${light ? "text-white" : "text-navy"}`}
        >
          BOBAES
        </span>
        <span
          className={`mt-1 text-[0.55rem] font-bold uppercase tracking-[0.16em] sm:text-[0.6rem] ${
            light ? "text-white/70" : "text-ink-soft"
          }`}
        >
          Edu-Excellence Schools
        </span>
      </span>
    </span>
  );
}
