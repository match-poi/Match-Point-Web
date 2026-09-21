import AcademiaTipsLazy from "../components/AcademiaTipsLazy";
import SiteFooterBanner from "../components/SiteFooterBanner";
import SiteTopBanner from "../components/SiteTopBanner";
import QuizAutonivelacion from "../components/QuizAutonivelacion";
import FaqSection from "../components/FaqSection";
import ExperienciaPilares from "../components/ExperienciaPilares";
import ProximosEventos from "../components/ProximosEventos";
import { CLUB_INSTAGRAM_REEL_URL, FOUNDER_PHOTO_SRC } from "../constants/club";
import {
  WHATSAPP_CTA_URL,
  WHATSAPP_DISPLAY_NUMBER,
  WHATSAPP_MEMBERSHIP_URL
} from "../constants/whatsapp";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <SiteTopBanner />

    <main className="relative min-h-screen bg-cream text-brand-blue">
      {/* Halo suave verde olivo */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-60">
        <div className="absolute -top-40 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
      </div>

      {/* Hero */}
      <section
        id="top"
        className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-8 sm:pb-20 sm:pt-10"
      >
        <div className="max-w-3xl">
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-brand-blue sm:text-5xl md:text-6xl">
            Tu club de tenis en Montevideo
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base md:text-lg leading-relaxed text-brand-blue/75">
            Entrenamiento, competencia y comunidad en un solo lugar.
          </p>

          <div className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_MEMBERSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              Quiero ser Socio
            </a>

            <a
              href={CLUB_INSTAGRAM_REEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Conocer el Club
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-xs text-brand-blue/60">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Cancha premium · Carrasco
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Torneos y Ranking MP
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Comunidad activa de socios
            </span>
          </div>
        </div>
      </section>

      {/* Experiencia MatchPoint Club */}
      <section
        id="experiencia"
        className="relative z-10 border-t border-brand-blue/10 bg-cream px-6 py-20"
      >
        <div className="mx-auto max-w-6xl space-y-10">
          <header className="space-y-3 text-center">
            <p className="section-label">Experiencia MatchPoint Club</p>
            <h2 className="text-3xl font-semibold text-brand-blue md:text-4xl">
              Más que una cancha: un ecosistema completo de tenis
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-brand-blue/70">
              Tocá cada pilar para ver más. Infraestructura, comunidad, competencia y beneficios de
              socio.
            </p>
          </header>

          <ExperienciaPilares />
        </div>
      </section>

      {/* Membresías y Planes */}
      <section
        id="membresias"
        className="relative z-10 border-t border-primary/20 bg-primary px-6 py-20"
      >
        <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
          <div className="absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-lime/20 blur-3xl" />
          <div className="absolute bottom-[-6rem] right-1/4 h-64 w-64 rounded-full bg-cream/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lime">
                Membresías y Planes
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-cream md:text-4xl">
                Elegí cómo querés{" "}
                <span className="text-lime">pertenecer al club</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-cream/80">
              Cada plan suma algo distinto: jugar y conectar, entrenar con método, o competir con
              Ranking MP.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {/* Plan Jugador */}
            <article className="card-light flex h-full flex-col">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-blue/60">
                Plan Jugador
              </p>
              <h3 className="mt-2 text-2xl font-bold text-brand-blue">Viví el club</h3>
              <p className="mt-2 text-sm text-brand-blue/70">
                Ideal si querés jugar seguido, conocer gente y usar la cancha sin clases fijas.
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-brand-blue/80">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Reserva de cancha (turno estándar)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Comunidad y juego por nivel
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Encuentros sociales dominicales
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  10% OFF Top Ten — código MATCHPOINT
                </li>
                <li className="flex items-center gap-2 text-brand-blue/50 line-through decoration-brand-blue/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue/20" />
                  Clases grupales incluidas
                </li>
              </ul>
              <a
                href={WHATSAPP_MEMBERSHIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-6 w-full text-xs tracking-[0.16em]"
              >
                Consultar Plan Jugador
              </a>
            </article>

            {/* Plan Entrenamiento — más popular */}
            <article className="relative flex h-full flex-col rounded-2xl border-2 border-primary bg-white p-6 shadow-lg">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime px-4 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-blue">
                Más popular
              </span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-blue/60">
                Plan Entrenamiento
              </p>
              <h3 className="mt-2 text-2xl font-bold text-brand-blue">Mejorá con método</h3>
              <p className="mt-2 text-sm text-brand-blue/70">
                Plan Jugador + clases semanales por nivel. El equilibrio entre progreso y comunidad.
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-brand-blue/80">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Todo lo del Plan Jugador
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  1 clase grupal semanal por nivel
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Hasta 4 alumnos por cancha · materiales incluidos
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Prioridad en reservas de cancha
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Descuento en clínicas del club
                </li>
              </ul>
              <a
                href={WHATSAPP_MEMBERSHIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta mt-6 w-full text-xs tracking-[0.16em]"
              >
                Quiero ser Socio
              </a>
            </article>

            {/* Plan Competición */}
            <article className="card-light flex h-full flex-col">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-blue/60">
                Plan Competición
              </p>
              <h3 className="mt-2 text-2xl font-bold text-brand-blue">Competí en serio</h3>
              <p className="mt-2 text-sm text-brand-blue/70">
                Para quienes buscan torneos, Ranking MP y acompañamiento técnico de competencia.
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-brand-blue/80">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Todo lo del Plan Jugador
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Ranking MP oficial + fechas del calendario
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Inscripción preferencial a torneos internos
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  2 clínicas de competencia incluidas al año
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Seguimiento técnico con coach del club
                </li>
              </ul>
              <a
                href={WHATSAPP_MEMBERSHIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-6 w-full text-xs tracking-[0.16em]"
              >
                Consultar Plan Competición
              </a>
            </article>
          </div>

          {/* Alianza Top Ten */}
          <div className="mt-14">
            <article className="relative overflow-hidden rounded-2xl border border-accent/40 bg-accent p-6 shadow-md">
              <div className="relative z-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                <div className="flex-1 space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/90">
                    Beneficio exclusivo de socio
                  </p>
                  <p className="text-sm text-cream">
                    <span className="font-semibold text-lime">10% OFF</span> en Top Ten con tu
                    membresía activa del club.
                  </p>
                </div>
                <div className="inline-flex flex-col gap-1 rounded-2xl bg-lime px-5 py-3 text-center shadow-sm">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-blue/70">
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

      {/* Tu Camino al Éxito */}
      <section
        id="niveles"
        className="relative z-10 border-t border-brand-blue/10 bg-cream px-6 py-20"
      >
        <div className="relative z-10 mx-auto max-w-6xl">
          <header className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">Tu Camino al Éxito</p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-blue md:text-4xl">
                Niveles pensados para{" "}
                <span className="text-primary">acompañar cada etapa</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-brand-blue/70">
              Desde tu primer contacto con la raqueta hasta el alto rendimiento. Un camino claro,
              estructurado y exigente, adaptado a cómo se juega hoy al tenis.
            </p>
          </header>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream to-transparent" />

            <div className="flex gap-4 overflow-x-auto pb-4 pt-2">
              {/* Iniciantes — activo */}
              <article className="min-w-[260px] flex-1 rounded-2xl border-2 border-primary bg-lime px-5 py-6 shadow-sm transition-all duration-200">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Iniciantes
                </h3>
                <p className="mt-3 text-sm text-brand-blue/80">
                  Tu punto de partida. Cero conocimiento, máxima motivación.
                </p>
              </article>

              {/* Pre-Principiantes */}
              <article className="min-w-[260px] flex-1 rounded-2xl border border-brand-blue/20 bg-white px-5 py-6 transition-all duration-200 hover:border-primary hover:bg-lime/40">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Pre-Principiantes
                </h3>
                <p className="mt-3 text-sm text-brand-blue/80">
                  Refinando el golpe. Para quienes juegan social pero buscan consistencia en el
                  peloteo.
                </p>
              </article>

              {/* Principiantes */}
              <article className="min-w-[260px] flex-1 rounded-2xl border border-brand-blue/20 bg-white px-5 py-6 transition-all duration-200 hover:border-primary hover:bg-lime/40">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Principiantes
                </h3>
                <p className="mt-3 text-sm text-brand-blue/80">
                  Entrando al juego. Ya mantienes el peloteo, juegas puntos y dominas el saque.
                </p>
              </article>

              {/* Pre-Intermedio */}
              <article className="min-w-[260px] flex-1 rounded-2xl border border-brand-blue/20 bg-white px-5 py-6 transition-all duration-200 hover:border-primary hover:bg-lime/40">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Pre-Intermedio
                </h3>
                <p className="mt-3 text-sm text-brand-blue/80">
                  Sintiendo la red. Dominio de voleas y listo para la competición social.
                </p>
              </article>

              {/* Intermedio / Avanzado */}
              <article className="min-w-[260px] flex-1 rounded-2xl border border-brand-blue/20 bg-white px-5 py-6 transition-all duration-200 hover:border-primary hover:bg-lime/40">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Intermedio / Avanzado
                </h3>
                <p className="mt-3 text-sm text-brand-blue/80">
                  Alto Rendimiento. Perfeccionamiento técnico y competición regular.
                </p>
              </article>
            </div>
          </div>

          <div className="relative z-20 mt-10 flex justify-center">
            <a
              href={WHATSAPP_MEMBERSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta text-xs tracking-[0.22em]"
            >
              Unirme al Club
            </a>
          </div>
        </div>
      </section>

      <QuizAutonivelacion />

      <FaqSection />

      {/* Perfil del Fundador */}
      <section className="relative z-10 border-t border-primary/20 bg-primary px-6 py-20">
        <div className="relative z-10 mx-auto max-w-6xl space-y-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            {/* Foto / marco */}
            <div className="relative mx-auto h-64 w-64 max-w-full overflow-hidden rounded-3xl border-2 border-cream/25 bg-primary-dark sm:h-72 sm:w-72">
              <Image
                src={FOUNDER_PHOTO_SRC}
                alt="Lic. Mario Tomczuk — Match Point Club"
                width={768}
                height={1024}
                className="h-full w-full object-cover object-top"
                sizes="(max-width: 288px) 288px, 288px"
              />

              <div className="pointer-events-none absolute left-0 top-0 h-12 w-12 rounded-tl-3xl border-l-2 border-t-2 border-lime" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-12 w-12 rounded-br-3xl border-b-2 border-r-2 border-lime" />
            </div>

            {/* Texto */}
            <div className="flex-1 space-y-4">
              <p className="inline-flex items-center rounded-full border border-cream/30 bg-cream/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/90">
                Fundador & Director
              </p>

              <h2 className="text-2xl font-semibold text-cream sm:text-3xl">
                Liderando el juego en MATCH POINT
              </h2>

              <h3 className="text-sm font-semibold text-lime">
                Lic. Mario Tomczuk
              </h3>

              <p className="text-sm text-cream/85">
                Soy Lic. Mario Tomczuk, entrenador y fundador de Match Point Club. Creé este espacio
                para que el tenis sea técnica, pero también pertenencia: un lugar en Carrasco donde
                entrenás, competís y crecés con otros socios.
              </p>

              <div className="grid gap-4 pt-2 sm:grid-cols-3">
                <div className="rounded-xl border border-cream/20 bg-cream/5 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime">Misión</p>
                  <p className="mt-2 text-xs text-cream/85">
                    Acercar el tenis de calidad a todos los niveles, con método y calidez.
                  </p>
                </div>
                <div className="rounded-xl border border-cream/20 bg-cream/5 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime">Visión</p>
                  <p className="mt-2 text-xs text-cream/85">
                    Ser un club de referencia en Montevideo por comunidad, formación y competencia.
                  </p>
                </div>
                <div className="rounded-xl border border-cream/20 bg-cream/5 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime">Valores</p>
                  <p className="mt-2 text-xs text-cream/85">
                    Respeto, constancia, juego limpio y espíritu de club.
                  </p>
                </div>
              </div>

              <p className="text-sm text-cream/85">
                <span className="font-semibold text-cream">Recorrido profesional:</span> formación
                en tenis y educación física, años entrenando desde iniciantes hasta competidores, y
                dirección técnica de Match Point en Carrasco — combinando clínica, planificación y
                cultura de equipo.
              </p>

              <p className="pt-2 text-base italic text-lime">
                Lic. Mario Tomczuk
              </p>
            </div>
          </div>

          {/* Galería compacta tipo carrusel simple */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/70">
                Galería MATCH POINT
              </p>
              <div className="flex gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/70">
                <button
                  type="button"
                  className="h-7 w-7 rounded-full border border-cream/30 text-cream transition-all duration-200 hover:border-lime hover:text-lime"
                  aria-label="Foto anterior"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="h-7 w-7 rounded-full border border-cream/30 text-cream transition-all duration-200 hover:border-lime hover:text-lime"
                  aria-label="Foto siguiente"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="relative mx-auto aspect-[4/3] max-w-xl overflow-hidden rounded-2xl border border-cream/20 bg-primary-dark">
              <div className="absolute inset-0 bg-[url('/map-match-point.png')] bg-cover bg-center opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <ProximosEventos />

      {/* Comunidad del Club */}
      <section
        id="comunidad"
        className="relative z-10 border-t border-brand-blue/10 bg-white px-6 py-16"
      >
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-brand-blue/10 bg-cream p-6">
              <h3 className="text-lg font-semibold text-brand-blue">
                Jornadas de Partidos
              </h3>
              <p className="mt-2 text-sm text-brand-blue/70">
                Nuestros domingos de competencia social. Formato americano para medirte con
                jugadores de tu nivel en un ambiente relajado.
              </p>
            </article>

            <article className="rounded-2xl border border-brand-blue/10 bg-cream p-6">
              <h3 className="text-lg font-semibold text-brand-blue">
                Clínicas Especializadas
              </h3>
              <p className="mt-2 text-sm text-brand-blue/70">
                Sesiones intensivas de 2 horas enfocadas en golpes específicos:
                Saque, Volea o Smash.
              </p>
            </article>
          </div>
        </div>
      </section>

      <AcademiaTipsLazy />

      {/* Ubicación y Contacto */}
      <section
        id="ubicacion"
        className="relative z-10 border-t border-brand-blue/10 bg-cream px-6 py-20"
      >
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row">
          <div className="w-full overflow-hidden rounded-2xl border border-brand-blue/10 bg-white p-3 shadow-sm lg:max-w-[60%]">
            <div className="relative aspect-[16/9] w-full max-h-64 overflow-hidden rounded-2xl bg-cream">
              <Image
                src="/map-match-point.png"
                alt="Ubicación de MATCH POINT en Carrasco"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
                priority
              />
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-cream px-4 py-3 text-xs text-brand-blue/70">
              <div>
                <p className="font-semibold text-brand-blue">MATCH POINT · Carrasco</p>
                <p className="text-[11px] text-brand-blue/60">
                  Potosí 1657 · Montevideo · Uruguay
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
                <a
                  href={WHATSAPP_CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-sm"
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Match+Point+Potosi+1657+Montevideo+Uruguay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-blue/60 underline-offset-2 transition-colors duration-200 hover:text-brand-blue hover:underline"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col justify-between space-y-6 lg:max-w-sm">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-brand-blue md:text-3xl">
                Ubicación y contacto
              </h2>
              <p className="text-sm text-brand-blue/75">
                Ubicados en el corazón de{" "}
                <span className="font-semibold text-accent">
                  Carrasco, Montevideo
                </span>
                , MATCH POINT es el club de tenis de referencia para todos
                los niveles.
              </p>
            </div>

            <div className="space-y-4 text-sm text-brand-blue/80">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue/50">
                  Dirección
                </p>
                <p className="mt-1">Potosí 1657 · Carrasco · Montevideo</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue/50">
                  Horario
                </p>
                <p className="mt-1">
                  Lunes a Viernes · <span className="text-accent">08:00 a 22:00</span>
                  {"  |  "}
                  Sábados · <span className="text-accent">09:00 a 18:00</span>
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue/50">
                  WhatsApp
                </p>
                <a
                  href={WHATSAPP_CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 mt-1 inline-flex cursor-pointer items-center gap-2 font-semibold text-accent transition-colors duration-200 hover:text-[#e55a00] hover:underline"
                >
                  {WHATSAPP_DISPLAY_NUMBER}
                </a>
              </div>
            </div>

            <a
              href={WHATSAPP_MEMBERSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta text-xs tracking-[0.18em]"
            >
              Quiero ser Socio
            </a>
          </div>
        </div>
      </section>

      <SiteFooterBanner />
    </main>
    </>
  );
}

