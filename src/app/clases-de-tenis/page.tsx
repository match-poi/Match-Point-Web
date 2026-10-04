import JsonLd from "@/components/JsonLd";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import PageFaqAccordion from "@/components/PageFaqAccordion";
import {
  FeatureList,
  PriceLine,
  ServiceCardEyebrow
} from "@/components/ServicePricingBlocks";
import SiteFooterBanner from "@/components/SiteFooterBanner";
import SiteTopBanner from "@/components/SiteTopBanner";
import {
  CLASES_DE_TENIS_FAQS,
  CLASES_DE_TENIS_PAGE,
  CLASES_DE_TENIS_PATH
} from "@/constants/clases-de-tenis";
import {
  CLASES_GRUPALES,
  CLASES_PARTICULARES,
  CLASES_PARTICULARES_CUPONERAS_VIGENCIA,
  SERVICES_UYU_DISCLAIMER
} from "@/constants/services";
import {
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_PATH,
  OG_IMAGE_WIDTH,
  OG_LOCALE,
  SITE_NAME,
  absoluteUrl
} from "@/constants/site";
import {
  WHATSAPP_CLASES_PARTICULARES_URL,
  WHATSAPP_CLASES_GRUPALES_URL
} from "@/constants/whatsapp";
import { buildBreadcrumbListJsonLd, buildFaqPageJsonLd } from "@/lib/structured-data";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const page = CLASES_DE_TENIS_PAGE;
const canonicalUrl = absoluteUrl(CLASES_DE_TENIS_PATH);
const ogImageUrl = absoluteUrl(OG_IMAGE_PATH);

const GALLERY_PHOTOS = [
  {
    src: "/galeria/galeria-04-entrenamiento-cancha.jpg",
    alt: "Entrenamiento en cancha entre entrenador y jugador en Match Point",
    width: 864,
    height: 1152
  },
  {
    src: "/galeria/galeria-05-entrenador-pelotas.jpg",
    alt: "Entrenador con cesto de pelotas en cancha de polvo de ladrillo",
    width: 864,
    height: 1152
  },
  {
    src: "/galeria/galeria-03-grupo-torneo.jpg",
    alt: "Grupo de jugadores en cancha en Match Point, Carrasco",
    width: 864,
    height: 1152
  }
] as const;

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

export default function ClasesDeTenisPage() {
  const breadcrumbJsonLd = buildBreadcrumbListJsonLd([
    { name: "Inicio", url: absoluteUrl("/") },
    { name: page.h1, url: canonicalUrl }
  ]);
  const faqJsonLd = buildFaqPageJsonLd(CLASES_DE_TENIS_FAQS, canonicalUrl);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <SiteTopBanner />

      <main id="top" className="relative min-h-screen bg-cream text-brand-blue">
        <PageBreadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Clases de tenis" }
          ]}
        />

        <section className="relative z-10 border-b border-primary/20 bg-primary px-6 py-14 sm:py-16">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
            <div className="absolute -top-32 right-1/4 h-64 w-64 rounded-full bg-lime/20 blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lime">
              Carrasco · Montevideo
            </p>
            <h1 className="mt-4 text-balance text-[clamp(1.375rem,5.5vw,2.75rem)] font-semibold uppercase leading-[1.15] text-cream">
              {page.h1}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-cream/90">
              {page.intro}
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
            <article className="mx-auto max-w-4xl rounded-2xl border border-brand-blue/15 bg-white p-6 shadow-sm sm:p-10">
              <h2 className="text-center text-lg font-semibold uppercase tracking-[0.08em] text-brand-blue sm:text-xl">
                {page.comparison.title}
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-brand-blue/10 bg-cream/50 p-5">
                  <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-primary">
                    {page.comparison.grupales.heading}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-brand-blue/85">
                    {page.comparison.grupales.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="text-accent" aria-hidden="true">
                          ·
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-brand-blue/10 bg-cream/50 p-5">
                  <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-primary">
                    {page.comparison.particulares.heading}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-brand-blue/85">
                    {page.comparison.particulares.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="text-accent" aria-hidden="true">
                          ·
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <div
              className="rounded-xl border border-cream/25 bg-primary/10 px-4 py-3 text-center text-sm font-medium text-brand-blue"
              role="note"
            >
              {SERVICES_UYU_DISCLAIMER}
            </div>

            <div className="grid items-start gap-6 lg:grid-cols-2">
              <article
                id="grupales"
                className="card-light flex scroll-mt-24 flex-col"
              >
                <ServiceCardEyebrow>{CLASES_GRUPALES.eyebrow}</ServiceCardEyebrow>
                <h2 className="mt-2 text-xl font-bold text-brand-blue">{CLASES_GRUPALES.title}</h2>
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
                <a
                  href={WHATSAPP_CLASES_GRUPALES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-normal mt-6 w-full text-center"
                >
                  {CLASES_GRUPALES.ctaLabel}
                </a>
              </article>

              <article
                id="particulares"
                className="card-light flex scroll-mt-24 flex-col"
              >
                <ServiceCardEyebrow>{CLASES_PARTICULARES.eyebrow}</ServiceCardEyebrow>
                <h2 className="mt-2 text-xl font-bold text-brand-blue">{CLASES_PARTICULARES.title}</h2>
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
                <a
                  href={WHATSAPP_CLASES_PARTICULARES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-normal mt-6 w-full text-center"
                >
                  {CLASES_PARTICULARES.ctaLabel}
                </a>
              </article>
            </div>

            <article className="mx-auto max-w-3xl rounded-2xl border border-brand-blue/15 bg-white p-6 shadow-sm sm:p-10">
              <h2 className="text-center text-lg font-semibold uppercase tracking-[0.08em] text-brand-blue">
                {page.steps.title}
              </h2>
              <ol className="mt-6 space-y-4">
                {page.steps.items.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-4 rounded-xl border border-brand-blue/10 bg-cream/40 p-4 text-sm leading-relaxed text-brand-blue/85"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-center text-sm leading-relaxed text-brand-blue/75">
                {page.quizCta}{" "}
                <Link
                  href="/#quiz-nivel"
                  className="font-semibold text-primary underline-offset-2 hover:underline"
                >
                  Ir al quiz de nivel
                </Link>
              </p>
            </article>

            <section aria-labelledby="clases-galeria-heading">
              <h2
                id="clases-galeria-heading"
                className="text-center text-lg font-semibold uppercase tracking-[0.08em] text-brand-blue"
              >
                {page.galleryHeading}
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                {GALLERY_PHOTOS.map((photo) => (
                  <li key={photo.src} className="overflow-hidden rounded-2xl border border-brand-blue/10">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      className="h-full w-full object-cover"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </li>
                ))}
              </ul>
            </section>

            <article
              id="faq-clases"
              className="mx-auto max-w-3xl scroll-mt-24 rounded-2xl border border-brand-blue/15 bg-cream/30 p-6 sm:p-10"
            >
              <PageFaqAccordion
                heading="Preguntas sobre las clases"
                description="Duración, edades, niveles y cuponeras."
                items={CLASES_DE_TENIS_FAQS}
              />
            </article>

            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_CLASES_GRUPALES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta min-h-11 w-full text-xs tracking-[0.16em] sm:w-auto"
              >
                Consultar clases grupales
              </a>
              <a
                href={WHATSAPP_CLASES_PARTICULARES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary min-h-11 w-full text-xs tracking-[0.16em] sm:w-auto"
              >
                Coordinar clase particular
              </a>
            </div>

            <p className="text-center">
              <Link
                href="/#servicios"
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
