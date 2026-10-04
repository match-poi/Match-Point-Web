import JsonLd from "@/components/JsonLd";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import SolicitarHorarioAlquilerForm from "@/components/SolicitarHorarioAlquilerForm";
import { FeatureList, PriceLine, ServiceCardEyebrow } from "@/components/ServicePricingBlocks";
import SiteFooterBanner from "@/components/SiteFooterBanner";
import SiteTopBanner from "@/components/SiteTopBanner";
import {
  ALQUILER_DE_CANCHA_PAGE,
  ALQUILER_DE_CANCHA_PATH
} from "@/constants/alquiler-de-cancha";
import { GOOGLE_MAPS_DIRECTIONS_URL } from "@/constants/home";
import { ALQUILER_CANCHA, SERVICES_UYU_DISCLAIMER } from "@/constants/services";
import {
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_PATH,
  OG_IMAGE_WIDTH,
  OG_LOCALE,
  SITE_NAME,
  absoluteUrl
} from "@/constants/site";
import { WHATSAPP_ALQUILER_CANCHA_URL } from "@/constants/whatsapp";
import { buildBreadcrumbListJsonLd } from "@/lib/structured-data";
import { MapPin } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const page = ALQUILER_DE_CANCHA_PAGE;
const canonicalUrl = absoluteUrl(ALQUILER_DE_CANCHA_PATH);
const ogImageUrl = absoluteUrl(OG_IMAGE_PATH);

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    type: "website",
    url: canonicalUrl,
    siteName: SITE_NAME,
    title: page.metaTitle,
    description: page.metaDescription,
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
    title: page.metaTitle,
    description: page.metaDescription,
    images: { url: ogImageUrl, alt: OG_IMAGE_ALT }
  }
};

export default function AlquilerDeCanchaPage() {
  const breadcrumbJsonLd = buildBreadcrumbListJsonLd([
    { name: "Inicio", url: absoluteUrl("/") },
    { name: page.h1, url: canonicalUrl }
  ]);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <SiteTopBanner />

      <main id="top" className="relative min-h-screen bg-cream text-brand-blue">
        <PageBreadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Alquiler de cancha" }
          ]}
        />

        <section className="relative z-10 border-b border-primary/20 bg-primary px-6 py-14 sm:py-16">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
            <div className="absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-lime/20 blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lime">
              Polvo de ladrillo · Iluminación
            </p>
            <h1 className="mt-4 text-balance text-[clamp(1.375rem,5.5vw,2.75rem)] font-semibold uppercase leading-[1.15] text-cream">
              {page.h1}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-cream/90">
              {page.intro}
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-lime">
              {page.locationLine}
            </p>
            <p className="mt-6">
              <Link
                href="/"
                className="text-xs font-semibold text-cream/75 underline-offset-2 transition-colors hover:text-lime hover:underline"
              >
                ← Volver al inicio
              </Link>
            </p>
          </div>
        </section>

        <section className="relative z-10 px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-6xl space-y-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <article className="card-light flex flex-col">
                <ServiceCardEyebrow>{ALQUILER_CANCHA.eyebrow}</ServiceCardEyebrow>
                <h2 className="mt-2 text-xl font-bold text-brand-blue">{ALQUILER_CANCHA.title}</h2>
                <p className="mt-2 text-sm font-medium text-brand-blue/80">{ALQUILER_CANCHA.duration}</p>

                <p
                  className="mt-4 rounded-xl border border-brand-blue/15 bg-cream/40 px-4 py-3 text-sm font-medium text-brand-blue"
                  role="note"
                >
                  {SERVICES_UYU_DISCLAIMER}
                </p>

                <ul className="mt-4 rounded-xl border border-brand-blue/10 bg-cream/30 px-4 py-1">
                  {ALQUILER_CANCHA.rates.map((rate) => (
                    <PriceLine key={rate.label} label={rate.label} amount={rate.amount} />
                  ))}
                </ul>

                <FeatureList items={ALQUILER_CANCHA.details} />

                <div className="mt-6 flex items-start gap-3 rounded-xl border border-brand-blue/10 bg-cream/30 p-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div className="text-sm leading-relaxed text-brand-blue/85">
                    <p className="font-semibold text-brand-blue">{page.locationLine}</p>
                    <a
                      href={GOOGLE_MAPS_DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block font-semibold text-primary underline-offset-2 hover:underline"
                    >
                      Cómo llegar en Google Maps
                    </a>
                  </div>
                </div>

                <a
                  href={WHATSAPP_ALQUILER_CANCHA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary mt-6 w-full text-center text-xs tracking-[0.14em]"
                >
                  Consulta general por WhatsApp
                </a>
              </article>

              <div className="space-y-6">
                <div className="overflow-hidden rounded-2xl border border-brand-blue/10 shadow-sm">
                  <Image
                    src={page.image.src}
                    alt={page.image.alt}
                    width={page.image.width}
                    height={page.image.height}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>

                <SolicitarHorarioAlquilerForm />

                <p
                  className="rounded-xl border border-brand-blue/15 bg-white px-4 py-3 text-sm leading-relaxed text-brand-blue/80"
                  role="note"
                >
                  {page.formDisclaimer}
                </p>
              </div>
            </div>

            <p className="text-center">
              <Link
                href="/#alquiler"
                className="text-xs font-semibold text-brand-blue/70 underline-offset-2 hover:text-primary hover:underline"
              >
                Ver resumen en la home
              </Link>
            </p>
          </div>
        </section>
      </main>

      <SiteFooterBanner />
    </>
  );
}
