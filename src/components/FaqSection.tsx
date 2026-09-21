"use client";

import { SITE_FAQS } from "@/constants/faq";
import { WHATSAPP_CTA_URL } from "@/constants/whatsapp";
import { CircleDot } from "lucide-react";
import { useId, useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="border-t border-brand-blue/10 bg-cream px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <header className="mb-10 space-y-3 text-center">
          <h2 className="text-3xl font-semibold text-brand-blue md:text-4xl">
            Despejá tus dudas
          </h2>
          <p className="text-sm text-brand-blue/70">
            Lo que más nos preguntan antes de sumarse al club.
          </p>
        </header>

        <div className="space-y-3">
          {SITE_FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-faq-panel-${index}`;
            const buttonId = `${baseId}-faq-button-${index}`;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-brand-blue/15 bg-white shadow-sm"
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center gap-4 px-4 py-4 text-left sm:px-5 sm:py-5"
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                      isOpen
                        ? "border-primary bg-lime text-brand-blue rotate-[-18deg]"
                        : "border-brand-blue/20 bg-cream text-brand-blue/40"
                    }`}
                  >
                    <CircleDot className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="flex-1 text-sm font-medium text-brand-blue sm:text-base">
                    {item.question}
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-200 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden border-t border-primary/20 px-4 pb-4 pt-2 text-sm text-brand-blue/80 sm:px-5 sm:pb-5">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={WHATSAPP_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center justify-center rounded-full border-2 border-accent bg-transparent px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent transition-all duration-200 hover:bg-accent hover:text-brand-blue"
          >
            ¿Querés charlar con el club? Escribinos
          </a>
        </div>
      </div>
    </section>
  );
}
