import SiteFooterBanner from "@/components/SiteFooterBanner";
import SiteTopBanner from "@/components/SiteTopBanner";
import {
  formatHotelDelLagoPriceUyu,
  HOTEL_DEL_LAGO_TOURNAMENT
} from "@/constants/events";
import {
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_PATH,
  OG_IMAGE_WIDTH,
  OG_LOCALE,
  SITE_NAME,
  absoluteUrl
} from "@/constants/site";
import { WHATSAPP_TORNEO_HOTEL_DEL_LAGO_URL } from "@/constants/whatsapp";
import { CalendarDays, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

const canonicalUrl = absoluteUrl(HOTEL_DEL_LAGO_TOURNAMENT.path);
const ogImageUrl = absoluteUrl(OG_IMAGE_PATH);
const t = HOTEL_DEL_LAGO_TOURNAMENT;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    type: "website",
    url: canonicalUrl,
    siteName: SITE_NAME,
    title: t.metaTitle,
    description: t.metaDescription,
    locale: OG_LOCALE,
    images: [
      {
        url: ogImageUrl,
        secureUrl: ogImageUrl,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: OG_IMAGE_ALT,
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: t.metaTitle,
    description: t.metaDescription,
    images: { url: ogImageUrl, alt: OG_IMAGE_ALT }
  }
};

export default function TorneoHotelDelLagoPage() {
  return (
    <>
      <SiteTopBanner />

      <main id="top" className="relative min-h-screen bg-cream text-brand-blue">
        <section className="relative z-10 border-b border-primary/20 bg-primary px-6 py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
            <div className="absolute -top-32 right-1/4 h-64 w-64 rounded-full bg-lime/20 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lime">
              {t.kicker}
            </p>
            <h1 className="mt-4 text-balance text-3xl font-semibold uppercase leading-tight text-cream sm:text-4xl md:text-[2.75rem]">
              {t.pageHeadline}
            </h1>
            <p className="mt-5 text-lg font-semibold text-lime sm:text-xl">
              {t.dateVenueLine}
            </p>
            <p className="mx-auto mt-2 text-xs font-medium uppercase tracking-[0.2em] text-cream/75">
              {t.venueLocality}
            </p>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-sm leading-relaxed text-cream/90 sm:text-base">
              {t.presentation}
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm font-semibold uppercase tracking-[0.12em] text-cream/95 sm:text-[13px]">
              {t.audienceLine}
            </p>
            <div className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
              <a
                href={t.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta text-xs tracking-[0.18em]"
              >
                {t.registrationCtaLabel}
              </a>
              <a
                href={WHATSAPP_TORNEO_HOTEL_DEL_LAGO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-cream/40 bg-cream/5 px-8 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-cream transition-all duration-200 hover:border-lime hover:bg-cream/15 hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Consultar por WhatsApp
              </a>
            </div>
            <p className="mt-5">
              <Link
                href="/#eventos"
                className="text-xs font-semibold text-cream/75 underline-offset-2 transition-colors hover:text-lime hover:underline"
              >
                Ver todos los eventos
              </Link>
            </p>
          </div>
        </section>

        <section className="relative z-10 px-6 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-primary px-6 py-10 text-center shadow-lg sm:px-10 sm:py-14">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(241,254,159,0.14),transparent_55%)]"
                aria-hidden
              />
              <div className="relative z-[1] grid gap-10 md:grid-cols-2 md:gap-8 md:text-left">
                <div className="flex flex-col items-center md:items-start">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-lime/20 text-lime">
                    <CalendarDays className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-lime">
                    Fecha
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-cream sm:text-3xl md:text-4xl">
                    {t.displayDates}
                  </p>
                </div>

                <div className="flex flex-col items-center border-t border-cream/15 pt-10 md:items-start md:border-l md:border-t-0 md:pl-10 md:pt-0">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-lime/20 text-lime">
                    <MapPin className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-lime">
                    Sede
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-cream sm:text-3xl">
                    {t.venueName}
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.22em] text-cream/80">
                    {t.venueLocality}
                  </p>
                </div>
              </div>
            </div>

            <article className="mx-auto max-w-3xl space-y-8 rounded-2xl border border-brand-blue/15 bg-white p-6 shadow-sm sm:p-10">
              <div className="space-y-2 text-center">
                <h2 className="text-lg font-semibold uppercase tracking-[0.08em] text-brand-blue sm:text-xl">
                  {t.weekendSectionTitle}
                </h2>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2">
                {t.weekendBlocks.map((block) => (
                  <li
                    key={block.title}
                    className="rounded-xl border border-brand-blue/10 bg-cream/60 p-5 text-left"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                      {block.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-brand-blue/85">{block.body}</p>
                  </li>
                ))}
              </ul>

              <p className="border-t border-brand-blue/10 pt-6 text-center text-sm leading-relaxed text-brand-blue/85 sm:text-base">
                {t.closingParagraph}
              </p>
            </article>

            <article
              id="inscripcion-y-precios"
              className="mx-auto max-w-3xl space-y-8 rounded-2xl border border-brand-blue/15 bg-white p-6 shadow-sm sm:p-10"
              aria-labelledby="inscripcion-y-precios-heading"
            >
              <div className="space-y-2 text-center">
                <h2
                  id="inscripcion-y-precios-heading"
                  className="text-lg font-semibold uppercase tracking-[0.08em] text-brand-blue sm:text-xl"
                >
                  {t.pricing.sectionTitle}
                </h2>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl border border-primary/20 bg-cream/60 p-5 sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                    {t.pricing.earlyBirdHeading}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue/80">
                    {t.pricing.earlyBirdDeadline}
                  </p>
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue/70">
                    {t.pricing.socialCategoriesHeading}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-brand-blue/90">
                    {t.pricing.socialTiers.map((tier) => (
                      <li key={tier.label} className="flex flex-wrap items-baseline gap-x-2">
                        <span>{tier.label}:</span>
                        <span className="font-semibold text-brand-blue">
                          {formatHotelDelLagoPriceUyu(tier.amountUyu)} por persona.
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-brand-blue/10 bg-white p-5 sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                    {t.pricing.primeraHeading}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-blue/90">
                    <span>{t.pricing.primeraRegistration.label}: </span>
                    <span className="font-semibold text-brand-blue">
                      {formatHotelDelLagoPriceUyu(t.pricing.primeraRegistration.amountUyu)} por
                      jugador.
                    </span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-blue/85">
                    {t.pricing.primeraEarlyBirdNote}
                  </p>
                </div>

                <div className="border-t border-brand-blue/10 pt-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-blue/70">
                    Aclaraciones
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-brand-blue/85">
                    {t.pricing.clarifications.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-center border-t border-brand-blue/10 pt-6">
                <a
                  href={t.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta text-xs tracking-[0.18em]"
                >
                  {t.registrationCtaLabel}
                </a>
              </div>
            </article>

            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href={t.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta text-xs tracking-[0.18em]"
              >
                {t.registrationCtaLabel}
              </a>
              <a
                href={WHATSAPP_TORNEO_HOTEL_DEL_LAGO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs tracking-[0.16em]"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooterBanner />
    </>
  );
}
