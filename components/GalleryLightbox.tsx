"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getMedia } from "@/content/media";
import type { GalleryPhoto } from "@/content/gallery";

export default function GalleryLightbox({ photos }: { photos: GalleryPhoto[] }) {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : photos[active];
  const currentMedia = current ? getMedia(current.mediaKey) : null;

  useEffect(() => {
    if (active === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((value) => (value === null ? value : (value + 1) % photos.length));
      }
      if (event.key === "ArrowLeft") {
        setActive((value) =>
          value === null ? value : (value - 1 + photos.length) % photos.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [active, photos.length]);

  const move = (direction: 1 | -1) => {
    setActive((value) =>
      value === null ? value : (value + direction + photos.length) % photos.length,
    );
  };

  return (
    <>
      <ul className="mt-12 grid auto-rows-[16rem] gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[15rem]">
        {photos.map((photo, index) => {
          const media = getMedia(photo.mediaKey);
          return (
            <li
              key={photo.id}
              className={photo.featured ? "sm:col-span-2 lg:row-span-2" : ""}
            >
              <button
                type="button"
                onClick={() => setActive(index)}
                className="group relative h-full w-full overflow-hidden rounded-md bg-sand text-left"
                aria-label={`View ${photo.title}`}
              >
                <Image
                  src={media.src}
                  alt={media.alt}
                  fill
                  unoptimized
                  sizes={
                    photo.featured
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  }
                  className="photo-grade object-cover transition duration-500 group-hover:scale-[1.04]"
                  style={{ objectPosition: media.position }}
                />
                <span className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <span className="t-eyebrow block text-white/75">
                    {photo.category}
                  </span>
                  <span className="mt-1 block font-display text-xl font-semibold leading-tight">
                    {photo.title}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {current && currentMedia ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-100 bg-navy-deep/95 px-4 py-5 text-white sm:px-8"
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-bold text-navy transition-colors hover:bg-red-tint sm:right-8 sm:top-6"
            onClick={() => setActive(null)}
          >
            Close
          </button>

          <div className="mx-auto flex h-full max-w-6xl flex-col justify-center gap-5">
            <div className="relative min-h-0 flex-1 overflow-hidden rounded-md bg-black/20">
              <Image
                src={currentMedia.src}
                alt={currentMedia.alt}
                fill
                unoptimized
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="t-eyebrow text-white/60">{current.category}</p>
                <h2 className="mt-1 font-display text-2xl font-semibold text-white">
                  {current.title}
                </h2>
                <p className="mt-1 text-sm text-white/75">{current.description}</p>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  className="rounded-md border border-white/50 px-4 py-2 text-sm font-bold transition-colors hover:bg-white hover:text-navy"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  className="rounded-md border border-white/50 px-4 py-2 text-sm font-bold transition-colors hover:bg-white hover:text-navy"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
