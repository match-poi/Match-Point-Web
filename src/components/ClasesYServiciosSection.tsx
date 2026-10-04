"use client";

import {
  ALQUILER_CANCHA,
  CLASES_GRUPALES,
  CLASES_PARTICULARES,
  CLASES_PARTICULARES_CUPONERAS_VIGENCIA,
  SERVICES_UYU_DISCLAIMER
} from "@/constants/services";
import {
  WHATSAPP_CLASES_PARTICULARES_URL,
  whatsAppClasesGrupalesUrl
} from "@/constants/whatsapp";
import {
  QUIZ_LEVEL_SESSION_KEY,
  QUIZ_LEVEL_UPDATED_EVENT,
  readQuizLevelFromSession
} from "@/constants/quiz-session";
import {
  FeatureList,
  PriceLine,
  ServiceCardEyebrow
} from "@/components/ServicePricingBlocks";
import Link from "next/link";
import { useSyncExternalStore } from "react";

function subscribeQuizLevel(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const onStorage = (e: StorageEvent) => {
    if (e.key === null || e.key === QUIZ_LEVEL_SESSION_KEY) onStoreChange();
  };
  window.addEventListener(QUIZ_LEVEL_UPDATED_EVENT, onStoreChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(QUIZ_LEVEL_UPDATED_EVENT, onStoreChange);
    window.removeEventListener("storage", onStorage);
  };
}

function getQuizLevelSnapshot(): string | null {
  return readQuizLevelFromSession();
}

function getQuizLevelServerSnapshot(): string | null {
  return null;
}

export default function ClasesYServiciosSection() {
  const quizLevel = useSyncExternalStore(
    subscribeQuizLevel,
    getQuizLevelSnapshot,
    getQuizLevelServerSnapshot
  );

  const gruposUrl = whatsAppClasesGrupalesUrl(quizLevel);

  return (
    <section
      id="servicios"
      className="relative z-10 border-t border-primary/20 bg-primary px-6 py-20 scroll-mt-24"
      aria-labelledby="servicios-heading"
    >
      <div id="membresias" className="scroll-mt-24" aria-hidden="true" tabIndex={-1} />

      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <div className="absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-lime/20 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-1/4 h-64 w-64 rounded-full bg-cream/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lime">
              Clases y servicios
            </p>
            <h2
              id="servicios-heading"
              className="mt-3 text-3xl font-semibold text-cream md:text-4xl"
            >
              Elegí cómo querés{" "}
              <span className="text-lime">jugar en Match Point</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-cream/80">
            Entrená en un grupo fijo, reservá la cancha o tomá clases particulares adaptadas a tus
            objetivos.
          </p>
        </div>

        <p
          className="mt-6 rounded-xl border border-cream/25 bg-cream/10 px-4 py-3 text-sm font-medium text-cream"
          role="note"
        >
          {SERVICES_UYU_DISCLAIMER}
        </p>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-3">
          <article className="card-light flex flex-col">
            <ServiceCardEyebrow>{CLASES_GRUPALES.eyebrow}</ServiceCardEyebrow>
            <h3 className="mt-2 text-xl font-bold text-brand-blue">{CLASES_GRUPALES.title}</h3>
            <p className="mt-2 text-sm font-medium text-brand-blue/80">{CLASES_GRUPALES.duration}</p>

            <ul className="mt-4 rounded-xl border border-brand-blue/10 bg-cream/30 px-4 py-1">
              {CLASES_GRUPALES.plans.map((plan) => (
                <PriceLine
                  key={plan.label}
                  label={plan.label}
                  amount={plan.amount}
                  suffix={plan.suffix}
                />
              ))}
            </ul>

            <FeatureList items={CLASES_GRUPALES.details} />

            <div className="mt-6 flex flex-col gap-2">
              <a
                href={gruposUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-normal w-full text-center"
              >
                {CLASES_GRUPALES.ctaLabel}
              </a>
              <Link
                href="/clases-de-tenis/#grupales"
                className="text-center text-xs font-semibold text-brand-blue/70 underline-offset-2 hover:text-primary hover:underline"
              >
                Ver detalle de clases grupales
              </Link>
            </div>
          </article>

          <article className="card-light flex flex-col">
            <ServiceCardEyebrow>{CLASES_PARTICULARES.eyebrow}</ServiceCardEyebrow>
            <h3 className="mt-2 text-xl font-bold text-brand-blue">{CLASES_PARTICULARES.title}</h3>
            <p className="mt-2 text-sm font-medium text-brand-blue/80">
              {CLASES_PARTICULARES.duration}
            </p>

            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-brand-blue/10 bg-cream/30 px-4 py-1">
                <p className="border-b border-brand-blue/10 py-2.5 text-sm font-bold text-brand-blue">
                  {CLASES_PARTICULARES.individual.heading}
                </p>
                <ul>
                  {CLASES_PARTICULARES.individual.tiers.map((tier) => (
                    <PriceLine
                      key={tier.label}
                      label={tier.label}
                      amount={tier.amount}
                      note={"note" in tier ? tier.note : undefined}
                    />
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-brand-blue/10 bg-cream/30 px-4 py-1">
                <p className="border-b border-brand-blue/10 py-2.5 text-sm font-bold text-brand-blue">
                  {CLASES_PARTICULARES.duo.heading}
                </p>
                <p className="py-2 text-xs font-medium text-brand-blue/65">
                  {CLASES_PARTICULARES.duo.priceNote}
                </p>
                <ul>
                  {CLASES_PARTICULARES.duo.tiers.map((tier) => (
                    <PriceLine
                      key={tier.label}
                      label={tier.label}
                      amount={tier.amount}
                      note={tier.note}
                    />
                  ))}
                </ul>
              </div>

              <p className="text-xs font-medium leading-relaxed text-brand-blue/65">
                {CLASES_PARTICULARES_CUPONERAS_VIGENCIA}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <a
                href={WHATSAPP_CLASES_PARTICULARES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-normal w-full text-center"
              >
                {CLASES_PARTICULARES.ctaLabel}
              </a>
              <Link
                href="/clases-de-tenis/#particulares"
                className="text-center text-xs font-semibold text-brand-blue/70 underline-offset-2 hover:text-primary hover:underline"
              >
                Ver detalle de clases particulares
              </Link>
            </div>
          </article>

          <article
            id="alquiler"
            className="card-light flex scroll-mt-24 flex-col"
          >
            <ServiceCardEyebrow>{ALQUILER_CANCHA.eyebrow}</ServiceCardEyebrow>
            <h3 className="mt-2 text-xl font-bold text-brand-blue">{ALQUILER_CANCHA.title}</h3>
            <p className="mt-2 text-sm font-medium text-brand-blue/80">{ALQUILER_CANCHA.duration}</p>

            <ul className="mt-4 rounded-xl border border-brand-blue/10 bg-cream/30 px-4 py-1">
              {ALQUILER_CANCHA.rates.map((rate) => (
                <PriceLine key={rate.label} label={rate.label} amount={rate.amount} />
              ))}
            </ul>

            <FeatureList items={ALQUILER_CANCHA.details} />

            <div className="mt-6 flex flex-col gap-2">
              <Link
                href="/alquiler-de-cancha/"
                className="btn-cta-normal w-full text-center"
              >
                {ALQUILER_CANCHA.ctaLabel}
              </Link>
              <Link
                href="/alquiler-de-cancha/"
                className="text-center text-xs font-semibold text-brand-blue/70 underline-offset-2 hover:text-primary hover:underline"
              >
                Ver tarifas y solicitar horario
              </Link>
            </div>
          </article>
        </div>

        <div className="mt-14">
          <article className="relative overflow-hidden rounded-2xl border border-accent/40 bg-accent p-6 shadow-md">
            <div className="relative z-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <div className="flex-1 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cream/90">
                  Beneficio exclusivo para la comunidad Match Point
                </p>
                <p className="text-sm text-cream">
                  <span className="font-semibold text-lime">10% OFF</span> en Top Ten con el código{" "}
                  <span className="font-semibold">MATCHPOINT</span>.
                </p>
              </div>
              <div className="inline-flex flex-col gap-1 rounded-2xl bg-lime px-5 py-3 text-center shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-blue/70">
                  Código
                </span>
                <span className="text-lg font-extrabold tracking-[0.3em] text-brand-blue">
                  MATCHPOINT
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
