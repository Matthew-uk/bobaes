"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  /** Stagger in ms, for sequences of siblings. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Fade + rise on first scroll into view.
 *
 * Drives the DOM directly through `data-shown` rather than React state: the
 * element is the external system here, and this avoids a re-render per
 * revealed block on a page that may have dozens.
 *
 * Fails open. Without JS the CSS in globals.css still applies, and visitors
 * who have asked for reduced motion are handled there too — the transition and
 * the transform are removed in a media query, so nothing depends on this
 * component running at all.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const show = () => node.setAttribute("data-shown", "true");

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`reveal ${className}`.trim()}
      data-shown="false"
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
