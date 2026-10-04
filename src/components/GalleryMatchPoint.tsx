"use client";

import { MATCH_POINT_GALLERY } from "@/constants/gallery";
import Image from "next/image";
import { useCallback, useId, useState } from "react";

export default function GalleryMatchPoint() {
  const carouselId = useId();
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
    <div className="space-y-3" role="region" aria-roledescription="carrusel" aria-label="Galería MATCH POINT">
      <div className="flex items-center justify-between gap-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/70">
          Galería MATCH POINT
        </p>
        <div className="flex items-center gap-3">
          <span
            id={`${carouselId}-status`}
            className="text-[10px] font-semibold tabular-nums tracking-wider text-cream/55"
            aria-live="polite"
          >
            {index + 1} / {total}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-cream/30 text-lg text-cream transition-all duration-200 hover:border-lime hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              aria-label="Foto anterior"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goNext}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-cream/30 text-lg text-cream transition-all duration-200 hover:border-lime hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
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
        aria-labelledby={`${carouselId}-status`}
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

      <div
        className="mx-auto flex max-w-xl flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Seleccionar foto de la galería"
      >
        {MATCH_POINT_GALLERY.map((item, i) => (
          <button
            key={item.src}
            type="button"
            role="tab"
            onClick={() => setIndex(i)}
            className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-2 text-[10px] font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ${
              i === index
                ? "bg-lime text-brand-blue"
                : "bg-cream/20 text-cream/80 hover:bg-cream/35"
            }`}
            aria-label={`Ver foto ${i + 1}: ${item.alt}`}
            aria-selected={i === index}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
