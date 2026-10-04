"use client";

import type { FaqItem } from "@/constants/faq";
import { CircleDot } from "lucide-react";
import { useId, useState } from "react";

type PageFaqAccordionProps = {
  items: readonly FaqItem[];
  heading: string;
  description?: string;
};

export default function PageFaqAccordion({ items, heading, description }: PageFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section aria-labelledby={`${baseId}-faq-heading`}>
      <header className="mb-8 space-y-2 text-center">
        <h2 id={`${baseId}-faq-heading`} className="text-xl font-semibold uppercase tracking-[0.08em] text-brand-blue sm:text-2xl">
          {heading}
        </h2>
        {description ? (
          <p className="text-sm leading-relaxed text-brand-blue/70">{description}</p>
        ) : null}
      </header>

      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `${baseId}-faq-panel-${index}`;
          const buttonId = `${baseId}-faq-button-${index}`;

          return (
            <div
              key={item.question}
              className="rounded-2xl border border-brand-blue/15 bg-white shadow-sm"
            >
              <button
                id={buttonId}
                type="button"
                onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex min-h-11 w-full items-center gap-4 px-4 py-4 text-left sm:px-5 sm:py-5"
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                    isOpen
                      ? "rotate-[-18deg] border-primary bg-lime text-brand-blue"
                      : "border-brand-blue/20 bg-cream text-brand-blue/40"
                  }`}
                >
                  <CircleDot className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="flex-1 text-sm font-medium text-brand-blue sm:text-base">
                  {item.question}
                </span>
              </button>

              {isOpen ? (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="border-t border-primary/20 px-4 pb-4 pt-2 text-sm leading-relaxed text-brand-blue/80 sm:px-5 sm:pb-5"
                >
                  {item.answer}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
