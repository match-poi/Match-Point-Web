"use client";

import { MATCH_POINT_GALLERY } from "@/constants/gallery";
import Image from "next/image";
import { useCallback, useState } from "react";

export default function GalleryMatchPoint() {
  const total = MATCH_POINT_GALLERY.length;
  const [index, setIndex] = useState(0);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const slide = MATCH_POINT_GALLERY[index];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/70">
          Galería MATCH POINT
        </p>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-semibold tabular-nums tracking-wider text-cream/55">
            {index + 1} / {total}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={goPrev}
              className="h-7 w-7 rounded-full border border-cream/30 text-cream transition-all duration-200 hover:border-lime hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              aria-label="Foto anterior"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goNext}
              className="h-7 w-7 rounded-full border border-cream/30 text-cream transition-all duration-200 hover:border-lime hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              aria-label="Foto siguiente"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <div
        className="relative mx-auto aspect-[4/3] max-w-xl overflow-hidden rounded-2xl border border-cream/20 bg-primary-dark shadow-md"
        aria-live="polite"
        aria-atomic="true"
      >
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          width={slide.width}
          height={slide.height}
          className="h-full w-full object-cover"
          sizes="(max-width: 576px) 100vw, 576px"
          priority={index === 0}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
      </div>

      <div className="mx-auto flex max-w-xl justify-center gap-1.5">
        {MATCH_POINT_GALLERY.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-200 ${
              i === index ? "w-6 bg-lime" : "w-1.5 bg-cream/35 hover:bg-cream/55"
            }`}
            aria-label={`Ver foto ${i + 1}: ${item.alt}`}
            aria-current={i === index ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
