import SiteFooterBanner from "@/components/SiteFooterBanner";
import SiteTopBanner from "@/components/SiteTopBanner";
import { HOTEL_DEL_LAGO_TOURNAMENT } from "@/constants/events";
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
import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

const canonicalUrl = absoluteUrl(HOTEL_DEL_LAGO_TOURNAMENT.path);
const ogImageUrl = absoluteUrl(OG_IMAGE_PATH);

export const metadata: Metadata = {
  title: HOTEL_DEL_LAGO_TOURNAMENT.metaTitle,
  description: HOTEL_DEL_LAGO_TOURNAMENT.metaDescription,
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    type: "website",
    url: canonicalUrl,
    siteName: SITE_NAME,
    title: HOTEL_DEL_LAGO_TOURNAMENT.metaTitle,
    description: HOTEL_DEL_LAGO_TOURNAMENT.metaDescription,
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
    title: HOTEL_DEL_LAGO_TOURNAMENT.metaTitle,
    description: HOTEL_DEL_LAGO_TOURNAMENT.metaDescription,
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
              Torneo Match Point
            </p>
            <h1 className="mt-4 text-balance text-3xl font-semibold text-cream sm:text-4xl md:text-5xl">
              {HOTEL_DEL_LAGO_TOURNAMENT.pageTitle}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-sm leading-relaxed text-cream/85 sm:text-base">
              {HOTEL_DEL_LAGO_TOURNAMENT.intro}
            </p>
            <div className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
              <a
                href={HOTEL_DEL_LAGO_TOURNAMENT.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta text-xs tracking-[0.18em]"
              >
                {HOTEL_DEL_LAGO_TOURNAMENT.registrationCtaLabel}
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
          <div className="mx-auto max-w-6xl">
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
                    {HOTEL_DEL_LAGO_TOURNAMENT.displayDates}
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
                    {HOTEL_DEL_LAGO_TOURNAMENT.venueName}
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.22em] text-cream/80">
                    {HOTEL_DEL_LAGO_TOURNAMENT.venueLocality}
                  </p>
                </div>
              </div>
            </div>

            <article className="mt-8 rounded-2xl border border-brand-blue/15 bg-white p-6 text-center shadow-sm sm:p-8">
              <div className="mx-auto flex max-w-lg flex-col items-center gap-3">
                <Sparkles className="h-5 w-5 text-accent" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-brand-blue/80 sm:text-base">
                  {HOTEL_DEL_LAGO_TOURNAMENT.categoriesFormatPendingCopy}
                </p>
              </div>
            </article>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href={HOTEL_DEL_LAGO_TOURNAMENT.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta text-xs tracking-[0.18em]"
              >
                {HOTEL_DEL_LAGO_TOURNAMENT.registrationCtaLabel}
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
