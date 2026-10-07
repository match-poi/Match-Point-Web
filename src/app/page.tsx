import AccesosPrincipales from "../components/AccesosPrincipales";
import AcademiaTipsLazy from "../components/AcademiaTipsLazy";
import SiteFooterBanner from "../components/SiteFooterBanner";
import SiteTopBanner from "../components/SiteTopBanner";
import QuizAutonivelacion from "../components/QuizAutonivelacion";
import FaqSection from "../components/FaqSection";
import ExperienciaPilares from "../components/ExperienciaPilares";
import ClasesYServiciosSection from "../components/ClasesYServiciosSection";
import EmpezarEsSimpleSection from "../components/EmpezarEsSimpleSection";
import GalleryMatchPoint from "../components/GalleryMatchPoint";
import HomeNivelesSection from "../components/HomeNivelesSection";
import ProximosEventos from "../components/ProximosEventos";
import { FOUNDER_PHOTO_SRC } from "../constants/club";
import { GOOGLE_MAPS_DIRECTIONS_URL, HOME_CLUB, HOME_FOUNDER, HOME_HERO } from "../constants/home";
import {
  WHATSAPP_CONSULTAR_CLASES_URL,
  WHATSAPP_CTA_URL,
  WHATSAPP_DISPLAY_NUMBER
} from "../constants/whatsapp";
import Image from "next/image";

export default function HomePage() {
  const heroImage = HOME_HERO.image;

  return (
    <>
      <SiteTopBanner />

      <main className="relative min-h-screen bg-cream text-brand-blue">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-60">
          <div className="absolute -top-40 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        </div>

        <section
          id="top"
          className="relative z-10 mx-auto max-w-6xl px-4 pb-14 pt-6 sm:px-6 sm:pb-20 sm:pt-8"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="min-w-0 max-w-3xl">
              <h1 className="text-balance text-4xl font-extrabold tracking-tight text-brand-blue sm:text-5xl md:text-6xl">
                {HOME_HERO.title}
              </h1>

              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-brand-blue/75 md:text-lg">
                {HOME_HERO.description}
              </p>

              <div className="relative z-10 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href={WHATSAPP_CONSULTAR_CLASES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-normal"
                >
                  {HOME_HERO.primaryCtaLabel}
                </a>

                <a href={HOME_HERO.secondaryCtaHref} className="btn-secondary">
                  {HOME_HERO.secondaryCtaLabel}
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-blue/65">
                {HOME_HERO.highlights.map((label) => (
                  <span key={label} className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl min-w-0 lg:mx-0 lg:max-w-none">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-blue/10 bg-white shadow-md">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={heroImage.width}
                  height={heroImage.height}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <AccesosPrincipales />

        <ClasesYServiciosSection />

        <EmpezarEsSimpleSection />

        <section
          id="experiencia"
          className="relative z-10 scroll-mt-24 border-t border-brand-blue/10 bg-cream px-4 py-16 sm:px-6 sm:py-20"
        >
          <div className="mx-auto max-w-6xl space-y-8">
            <header className="space-y-4 text-center">
              <p className="section-label">{HOME_CLUB.eyebrow}</p>
              <h2 className="text-3xl font-semibold text-brand-blue md:text-4xl">{HOME_CLUB.title}</h2>
              <p className="mx-auto max-w-2xl text-base text-brand-blue/70">{HOME_CLUB.intro}</p>
            </header>

            <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-3">
              {HOME_CLUB.essentials.map((item) => (
                <li
                  key={item.label}
                  className="rounded-xl border border-brand-blue/10 bg-white px-4 py-3 text-center sm:text-left"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-blue/50">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-brand-blue/85">{item.value}</p>
                </li>
              ))}
            </ul>

            <ExperienciaPilares />
          </div>
        </section>

        <HomeNivelesSection />

        <QuizAutonivelacion />

        <ProximosEventos />

        <section className="relative z-10 border-t border-primary/20 bg-primary px-4 py-16 sm:px-6 sm:py-20">
          <div className="relative z-10 mx-auto max-w-6xl space-y-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
              <div className="relative mx-auto h-56 w-56 max-w-full shrink-0 overflow-hidden rounded-3xl border-2 border-cream/25 bg-primary-dark sm:h-64 sm:w-64">
                <Image
                  src={FOUNDER_PHOTO_SRC}
                  alt="Lic. Mario Tomczuk — Match Point Club"
                  width={768}
                  height={1024}
                  className="h-full w-full object-cover object-top"
                  sizes="(max-width: 256px) 256px, 256px"
                />

                <div className="pointer-events-none absolute left-0 top-0 h-12 w-12 rounded-tl-3xl border-l-2 border-t-2 border-lime" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-12 w-12 rounded-br-3xl border-b-2 border-r-2 border-lime" />
              </div>

              <div className="min-w-0 flex-1 space-y-4">
                <p className="inline-flex flex-wrap items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/90">
                  <span>{HOME_FOUNDER.badge}</span>
                  <span className="text-lime">{HOME_FOUNDER.certification}</span>
                </p>

                <h2 className="text-2xl font-semibold text-cream sm:text-3xl">
                  {HOME_FOUNDER.headline}
                </h2>

                <p className="text-sm leading-relaxed text-cream/85">{HOME_FOUNDER.lead}</p>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-cream/20 bg-cream/5 p-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime">Misión</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-cream/85">
                      {HOME_FOUNDER.mission}
                    </p>
                  </div>
                  <div className="rounded-xl border border-cream/20 bg-cream/5 p-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime">Visión</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-cream/85">
                      {HOME_FOUNDER.vision}
                    </p>
                  </div>
                  <div className="rounded-xl border border-cream/20 bg-cream/5 p-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime">Valores</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-cream/85">
                      {HOME_FOUNDER.values}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-cream/85">{HOME_FOUNDER.professional}</p>
              </div>
            </div>

            <GalleryMatchPoint />
          </div>
        </section>

        <AcademiaTipsLazy />

        <FaqSection />

        <section
          id="ubicacion"
          className="relative z-10 scroll-mt-24 border-t border-brand-blue/10 bg-cream px-4 py-16 sm:px-6 sm:py-20"
        >
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-2xl border border-brand-blue/10 bg-white p-3 shadow-sm">
              <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-8 lg:p-2">
                <div className="min-w-0">
                  <h2 className="text-2xl font-semibold text-brand-blue md:text-3xl">
                    Ubicación y contacto
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-brand-blue/75">
                    En el corazón de{" "}
                    <span className="font-semibold text-accent">Carrasco, Montevideo</span>. Potosí
                    1657 — club de tenis para todos los niveles.
                  </p>

                  <dl className="mt-5 space-y-3 text-sm text-brand-blue/80">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue/50">
                        Dirección
                      </dt>
                      <dd className="mt-1">Potosí 1657 · Carrasco · Montevideo</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue/50">
                        Horario
                      </dt>
                      <dd className="mt-1">
                        Lun–Vie · <span className="text-accent">08:00–22:00</span>
                        {" · "}
                        Sáb · <span className="text-accent">09:00–18:00</span>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue/50">
                        WhatsApp
                      </dt>
                      <dd className="mt-1">
                        <a
                          href={WHATSAPP_CTA_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-accent transition-colors duration-200 hover:text-[#e55a00] hover:underline"
                        >
                          {WHATSAPP_DISPLAY_NUMBER}
                        </a>
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href={GOOGLE_MAPS_DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-center"
                    >
                      Cómo llegar
                    </a>
                    <a
                      href={WHATSAPP_CTA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cta-normal text-center"
                    >
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-cream">
                    <Image
                      src="/map-match-point.png"
                      alt="Ubicación de MATCH POINT en Carrasco"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                    />
                  </div>
                  <p className="mt-3 text-center text-[11px] text-brand-blue/60 lg:text-left">
                    MATCH POINT · Potosí 1657 · Montevideo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SiteFooterBanner />
      </main>
    </>
  );
}
