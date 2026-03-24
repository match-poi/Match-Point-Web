import QuizAutonivelacion from "../components/QuizAutonivelacion";
import FaqSection from "../components/FaqSection";
import Image from "next/image";
import { CalendarCheck, CircleUserRound, Hand, Instagram, Ruler, Sparkles, Zap, Users } from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-pure-white">
      {/* Halo de luz en verde lima detrás del contenido */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-lime/15 blur-3xl" />
      </div>

      {/* Hero */}
      <section
        id="top"
        className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20 sm:py-28"
      >
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.35em] uppercase text-white/70">
            Academia de tenis
          </p>

          <h1 className="mt-6 text-balance text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            <span className="block">MATCH</span>
            <span className="block text-lime drop-shadow-[0_0_24px_rgba(198,255,0,0.9)]">
              POINT
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base md:text-lg leading-relaxed text-white/75">
            Clases de tenis de alto impacto para jugadores que quieren ganar el punto decisivo.
            Metodología profesional, foco total en cada golpe y una energía que no vas a encontrar
            en otro club.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#reservar"
              className="btn-mp-pulse group relative inline-flex items-center justify-center rounded-full bg-lime px-10 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-black shadow-[0_0_55px_rgba(198,255,0,0.8)] transition-all duration-200 hover:shadow-[0_0_80px_rgba(198,255,0,1)] hover:translate-y-[1px] active:translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <span className="relative">Reservar Clase</span>
              <span className="pointer-events-none absolute inset-0 rounded-full bg-white/20 opacity-0 blur group-hover:opacity-100" />
            </a>

            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/5 px-8 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
            >
              Ver servicios
            </a>
          </div>

          {/* Navegación rápida por secciones */}
          <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
            <a href="#servicios" className="rounded-full border border-white/20 px-3 py-1 hover:border-lime hover:text-lime">
              Servicios
            </a>
            <a href="#niveles" className="rounded-full border border-white/20 px-3 py-1 hover:border-lime hover:text-lime">
              Niveles
            </a>
            <a href="#comunidad" className="rounded-full border border-white/20 px-3 py-1 hover:border-lime hover:text-lime">
              Comunidad
            </a>
            <a href="#tip" className="rounded-full border border-white/20 px-3 py-1 hover:border-lime hover:text-lime">
              Tips
            </a>
            <a href="#faq" className="rounded-full border border-white/20 px-3 py-1 hover:border-lime hover:text-lime">
              FAQ
            </a>
            <a href="#ubicacion" className="rounded-full border border-white/20 px-3 py-1 hover:border-lime hover:text-lime">
              Ubicación
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-xs text-white/45">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              Adultos · Niños · Competición
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              Entrenadores certificados
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              Programas personalizados
            </span>
          </div>
        </div>
      </section>

      {/* Nuestros Servicios */}
      <section
        id="servicios"
        className="relative border-t border-white/10 bg-gradient-to-b from-black via-black to-neutral-950 px-6 py-20"
      >
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-lime/15 blur-3xl" />
          <div className="absolute bottom-[-6rem] right-1/4 h-64 w-64 rounded-full bg-lime/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                Nuestros Servicios
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Programas diseñados para{" "}
                <span className="text-lime">ganar el punto clave</span>
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Clases Grupales */}
            <article className="group relative flex h-full flex-col rounded-2xl border border-white/12 bg-[#1a1a1a] p-6 shadow-[0_0_0_rgba(198,255,0,0)] transition-all duration-300 hover:border-lime hover:shadow-[0_0_40px_rgba(198,255,0,0.55)]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/40 text-lime">
                <Users className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-pure-white">
                Entrenamiento Grupal
              </h3>
              <p className="mt-2 text-sm text-white/75">
                La mejor forma de aprender, competir y socializar.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-white/70">
                <li>• Grupos reducidos por nivel</li>
                <li>• Máximo 4 alumnos por cancha</li>
                <li>• Materiales incluidos</li>
              </ul>
              <div className="mt-6 pt-2">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-full bg-lime px-5 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-black shadow-[0_0_24px_rgba(198,255,0,0.7)] transition hover:shadow-[0_0_32px_rgba(198,255,0,1)]"
                >
                  Consultar Horarios
                </button>
              </div>
            </article>

            {/* Clases Particulares */}
            <article className="group relative flex h-full flex-col rounded-2xl border border-white/12 bg-[#1a1a1a] p-6 shadow-[0_0_0_rgba(198,255,0,0)] transition-all duration-300 hover:border-lime hover:shadow-[0_0_40px_rgba(198,255,0,0.55)]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/40 text-lime">
                <CircleUserRound className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-pure-white">
                Clases Particulares (1-1 o 1-2)
              </h3>
              <p className="mt-2 text-sm text-white/75">
                Entrenamiento personalizado de máxima intensidad para uno o dos alumnos.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-white/70">
                <li>• Corrección técnica profunda</li>
                <li>• Ideal para parejas o amigos del mismo nivel</li>
                <li>• Flexibilidad horaria total</li>
              </ul>
              <div className="mt-6 pt-2">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-full bg-lime px-5 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-black shadow-[0_0_24px_rgba(198,255,0,0.7)] transition hover:shadow-[0_0_32px_rgba(198,255,0,1)]"
                >
                  Agendar Sesión
                </button>
              </div>
            </article>

            {/* Alquiler de Canchas */}
            <article className="group relative flex h-full flex-col rounded-2xl border border-white/12 bg-[#1a1a1a] p-6 shadow-[0_0_0_rgba(198,255,0,0)] transition-all duration-300 hover:border-lime hover:shadow-[0_0_40px_rgba(198,255,0,0.55)]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/40 text-lime">
                <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-pure-white">
                Alquiler de Pista
              </h3>
              <p className="mt-2 text-sm text-white/75">
                Reserva tu espacio para jugar tus partidos con amigos.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-white/70">
                <li>• Canchas de polvo de ladrillo premium</li>
                <li>• Iluminación LED nocturna</li>
                <li>• Alquiler de raquetas y pelotas</li>
              </ul>
              <div className="mt-6 pt-2">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-full bg-lime px-5 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-black shadow-[0_0_24px_rgba(198,255,0,0.7)] transition hover:shadow-[0_0_32px_rgba(198,255,0,1)]"
                >
                  Reservar Cancha
                </button>
              </div>
            </article>
          </div>

          {/* Beneficios */}
          <div className="mt-16 space-y-6">
            <header className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lime">
                Beneficios por estar en MATCH POINT
              </p>
              <p className="mt-2 text-sm text-white/75">
                Ventajas exclusivas para quienes entrenan en nuestra academia.
              </p>
            </header>
            <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
              {/* Alianza exclusiva con Top Ten */}
              <article className="relative overflow-hidden rounded-2xl border border-lime/60 bg-black/80 p-6 shadow-[0_0_50px_rgba(198,255,0,0.5)]">
                <div className="pointer-events-none absolute inset-0 opacity-70">
                  <div className="absolute -top-24 right-[-2rem] h-56 w-56 rounded-full bg-lime/25 blur-3xl" />
                </div>
                <div className="relative space-y-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-lime">
                    Alianza exclusiva con Top Ten
                  </p>
                  <p className="text-sm text-white/80">
                    Por ser parte de MATCH POINT, tienes un{" "}
                    <span className="font-semibold text-lime">10% OFF</span> en todas tus compras en
                    la tienda Top Ten.
                  </p>

                  <div className="mt-4 inline-flex flex-col gap-2 rounded-2xl border border-dashed border-lime/80 bg-black/90 px-4 py-3 text-center shadow-[0_0_40px_rgba(198,255,0,0.9)]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60">
                      Código de descuento
                    </span>
                    <span className="text-lg font-extrabold tracking-[0.3em] text-lime">
                      MATCHPOINT
                    </span>
                  </div>
                </div>
              </article>

              {/* Beneficios de la academia */}
              <div className="rounded-2xl border border-white/12 bg-black/80 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55">
                  Beneficios de la academia
                </p>
                <div className="mt-5 space-y-4 text-sm text-white/80">
                  <div>
                    <p className="font-semibold text-lime">Canchas Pro</p>
                    <p className="text-xs text-white/75">
                      Polvo de ladrillo premium e iluminación LED profesional.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-lime">Comunidad</p>
                    <p className="text-xs text-white/75">
                      Torneos internos, clínicas y el mejor ambiente de tenis.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-lime">Materiales</p>
                    <p className="text-xs text-white/75">
                      Prestamos raquetas de última generación para tus primeras clases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tu Camino al Éxito */}
      <section
        id="niveles"
        className="border-t border-white/10 bg-black px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <header className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                Tu Camino al Éxito
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Niveles pensados para{" "}
                <span className="text-lime">acompañar cada etapa</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-white/70">
              Desde tu primer contacto con la raqueta hasta el alto rendimiento. Un camino claro,
              estructurado y exigente, adaptado a cómo se juega hoy al tenis.
            </p>
          </header>

          {/* Tabs / tarjetas horizontales */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent" />

            <div className="flex gap-4 overflow-x-auto pb-4 pt-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              {/* Iniciantes */}
              <article className="min-w-[260px] flex-1 rounded-2xl border border-white/15 bg-neutral-950/80 px-5 py-6 transition hover:border-lime hover:bg-neutral-900/80">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-lime">
                  Iniciantes
                </h3>
                <p className="mt-3 text-sm text-white/80">
                  Tu punto de partida. Cero conocimiento, máxima motivación.
                </p>
              </article>

              {/* Pre-Principiantes */}
              <article className="min-w-[260px] flex-1 rounded-2xl border border-white/15 bg-neutral-950/80 px-5 py-6 transition hover:border-lime hover:bg-neutral-900/80">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-lime">
                  Pre-Principiantes
                </h3>
                <p className="mt-3 text-sm text-white/80">
                  Refinando el golpe. Para quienes juegan social pero buscan consistencia en el
                  peloteo.
                </p>
              </article>

              {/* Principiantes */}
              <article className="min-w-[260px] flex-1 rounded-2xl border border-white/15 bg-neutral-950/80 px-5 py-6 transition hover:border-lime hover:bg-neutral-900/80">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-lime">
                  Principiantes
                </h3>
                <p className="mt-3 text-sm text-white/80">
                  Entrando al juego. Ya mantienes el peloteo, juegas puntos y dominas el saque.
                </p>
              </article>

              {/* Pre-Intermedio */}
              <article className="min-w-[260px] flex-1 rounded-2xl border border-white/15 bg-neutral-950/80 px-5 py-6 transition hover:border-lime hover:bg-neutral-900/80">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-lime">
                  Pre-Intermedio
                </h3>
                <p className="mt-3 text-sm text-white/80">
                  Sintiendo la red. Dominio de voleas y listo para la competición social.
                </p>
              </article>

              {/* Intermedio / Avanzado */}
              <article className="min-w-[260px] flex-1 rounded-2xl border border-white/15 bg-neutral-950/80 px-5 py-6 transition hover:border-lime hover:bg-neutral-900/80">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-lime">
                  Intermedio / Avanzado
                </h3>
                <p className="mt-3 text-sm text-white/80">
                  Alto Rendimiento. Perfeccionamiento técnico y competición regular.
                </p>
              </article>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/59898260543?text=Hola%20MATCH%20POINT%2C%20quiero%20reservar%20una%20clase%20de%20prueba%20seg%C3%BAn%20mi%20nivel."
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center rounded-full bg-lime px-8 py-3 text-xs font-extrabold uppercase tracking-[0.22em] text-black shadow-[0_0_55px_rgba(198,255,0,0.8)] transition-all duration-200 hover:shadow-[0_0_80px_rgba(198,255,0,1)] hover:translate-y-[1px] active:translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <span className="relative text-center">
                Reserva tu clase según tu nivel
              </span>
              <span className="pointer-events-none absolute inset-0 rounded-full bg-white/20 opacity-0 blur group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </section>

      <QuizAutonivelacion />

      <FaqSection />

      {/* Perfil del Fundador */}
      <section className="border-t border-white/10 bg-[#1e1e1e] px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            {/* Foto / marco */}
            <div className="relative mx-auto h-64 w-64 max-w-full overflow-hidden rounded-3xl bg-black/70 sm:h-72 sm:w-72">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neutral-900 via-black to-neutral-950" />

              {/* Bordes solo en dos esquinas */}
              <div className="pointer-events-none absolute left-0 top-0 h-12 w-12 rounded-tl-3xl border-l-2 border-t-2 border-lime" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-12 w-12 rounded-br-3xl border-b-2 border-r-2 border-lime" />

              <div className="relative flex h-full w-full items-center justify-center text-center text-xs text-white/60 px-4">
                Espacio para tu foto profesional
              </div>
            </div>

            {/* Texto */}
            <div className="flex-1 space-y-4">
              <p className="inline-flex items-center rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                Fundador & Director
              </p>

              <h2 className="text-2xl font-semibold text-pure-white sm:text-3xl">
                Liderando el juego en MATCH POINT
              </h2>

              <h3 className="text-sm font-semibold text-lime">
                Mario Tomczuk
              </h3>

              <p className="text-sm text-white/80">
                Soy Mario Tomczuk, entrenador y fundador de esta academia. Mi filosofía se basa en
                que el tenis es mucho más que técnica; es disciplina, estrategia y, sobre todo,
                comunidad. Diseñé MATCH POINT para ser el lugar donde cada jugador, desde el que
                agarra una raqueta por primera vez hasta el competidor avanzado, encuentre su mejor
                versión.
              </p>

              <p className="pt-4 text-base italic text-lime">
                Mario Tomczuk
              </p>
            </div>
          </div>

          {/* Galería compacta tipo carrusel simple */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55">
                Galería MATCH POINT
              </p>
              <div className="flex gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                <button
                  type="button"
                  className="h-7 w-7 rounded-full border border-white/25 hover:border-lime hover:text-lime"
                  aria-label="Foto anterior"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="h-7 w-7 rounded-full border border-white/25 hover:border-lime hover:text-lime"
                  aria-label="Foto siguiente"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="relative mx-auto max-w-xl aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_0%_0%,rgba(198,255,0,0.18),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.12),transparent_55%)]">
              <div className="absolute inset-0 bg-[url('/map-match-point.png')] bg-cover bg-center opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Comunidad y Eventos */}
      <section id="comunidad" className="border-t border-white/10 bg-black px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-8">
          <header className="space-y-2 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
              Comunidad y Eventos
            </p>
            <h2 className="text-3xl font-semibold text-pure-white md:text-4xl">
              Compartí la pista más allá de tus clases
            </h2>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-lime/50 bg-[#111111] p-6">
              <h3 className="text-lg font-semibold text-pure-white">
                Jornadas de Partidos
              </h3>
              <p className="mt-2 text-sm text-white/75">
                Nuestros Domingos de competencia social. Formato americano para medirte con
                jugadores de tu nivel en un ambiente relajado.
              </p>
            </article>

            <article className="rounded-2xl border border-lime/50 bg-[#111111] p-6">
              <h3 className="text-lg font-semibold text-pure-white">
                Clínicas Especializadas
              </h3>
              <p className="mt-2 text-sm text-white/75">
                Sesiones intensivas de 2 horas enfocadas en golpes específicos:
                Saque, Volea o Smash.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Academia de Tips 2024 */}
      <section
        id="tip"
        className="border-t border-white/10 bg-gradient-to-r from-black via-[#050505] to-black px-6 py-20"
      >
        <div className="mx-auto max-w-6xl space-y-8">
          <header className="space-y-2 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
              Academia de Tips 2024
            </p>
            <h2 className="text-3xl font-semibold text-pure-white md:text-4xl">
              12 meses de consejos para mejorar tu tenis
            </h2>
          </header>

          <div className="grid gap-4 md:grid-cols-3">
            {/* Enero */}
            <article className="relative rounded-2xl border border-lime/70 bg-black/80 p-5 shadow-[0_0_35px_rgba(198,255,0,0.7)]">
              <div className="mb-3 flex items-center justify-between text-xs text-white/70">
                <span className="rounded-full bg-lime/10 px-3 py-1 font-semibold text-lime">
                  Enero (Activo)
                </span>
                <Hand className="h-4 w-4 text-lime" aria-hidden="true" />
              </div>
              <h3 className="text-sm font-semibold text-pure-white">
                La Empuñadura Continental
              </h3>
              <p className="mt-2 text-xs text-white/75">
                La base para el saque y la volea. Te da control, estabilidad y transición rápida
                entre golpes cerca de la red.
              </p>
            </article>

            {/* Febrero */}
            <article className="relative rounded-2xl border border-lime/70 bg-black/80 p-5 shadow-[0_0_35px_rgba(198,255,0,0.7)]">
              <div className="mb-3 flex items-center justify-between text-xs text-white/70">
                <span className="rounded-full bg-lime/10 px-3 py-1 font-semibold text-lime">
                  Febrero (Activo)
                </span>
                <Zap className="h-4 w-4 text-lime" aria-hidden="true" />
              </div>
              <h3 className="text-sm font-semibold text-pure-white">
                El Split Step
              </h3>
              <p className="mt-2 text-xs text-white/75">
                El salto de lectura para reaccionar más rápido. Aterriza justo cuando tu rival
                impacta la pelota para salir en la dirección correcta.
              </p>
            </article>

            {/* Marzo */}
            <article className="relative rounded-2xl border border-lime/70 bg-black/80 p-5 shadow-[0_0_35px_rgba(198,255,0,0.7)]">
              <div className="mb-3 flex items-center justify-between text-xs text-white/70">
                <span className="rounded-full bg-lime/10 px-3 py-1 font-semibold text-lime">
                  Marzo (Activo)
                </span>
                <Ruler className="h-4 w-4 text-lime" aria-hidden="true" />
              </div>
              <h3 className="text-sm font-semibold text-pure-white">
                Control de Distancia
              </h3>
              <p className="mt-2 text-xs text-white/75">
                Usa el brazo no hábil como “medidor” para ajustar la distancia a la pelota y
                encontrar siempre el punto ideal de impacto.
              </p>
            </article>

            {/* Abril a Diciembre - Próximamente */}
            {[
              "Abril · El Top-spin",
              "Mayo · Táctica de Dobles",
              "Junio · El Slice de Revés",
              "Julio · Juego de Pies",
              "Agosto · Saque con Efecto",
              "Septiembre · Mentalidad Ganadora",
              "Octubre · Ataque a la red",
              "Noviembre · Defensa desde el fondo",
              "Diciembre · Estrategia de Partido"
            ].map((label) => (
              <article
                key={label}
                className="relative rounded-2xl border border-white/15 bg-black/70 p-5 opacity-60"
              >
                <div className="mb-3 flex items-center justify-between text-xs text-white/60">
                  <span>{label}</span>
                  <Sparkles className="h-4 w-4 text-white/40" aria-hidden="true" />
                </div>
                <p className="text-[11px] text-white/55">Próximamente</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación y Contacto */}
      <section
        id="ubicacion"
        className="border-t border-white/10 bg-black px-6 py-20"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row">
          <div className="w-full overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-neutral-900 via-black to-neutral-950 p-3 shadow-[0_0_40px_rgba(0,0,0,0.6)] lg:max-w-[60%]">
            <div className="relative aspect-[16/9] w-full max-h-64 overflow-hidden rounded-2xl bg-[#050505]">
              <Image
                src="/map-match-point.png"
                alt="Ubicación de MATCH POINT en Carrasco"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
                priority
              />
            </div>
            <div className="mt-3 flex items-center justify-between rounded-2xl bg-black/70 px-4 py-3 text-xs text-white/70">
              <div>
                <p className="font-semibold text-pure-white">MATCH POINT · Carrasco</p>
                <p className="text-[11px] text-white/60">
                  Potosí 1657 · Montevideo · Uruguay
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Match+Point+Potosi+1657+Montevideo+Uruguay"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-lime px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-black shadow-[0_0_26px_rgba(198,255,0,0.8)] transition hover:shadow-[0_0_36px_rgba(198,255,0,1)]"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>

          <div className="flex w-full flex-col justify-between space-y-6 lg:max-w-sm">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-pure-white md:text-3xl">
                Ubicación y contacto
              </h2>
              <p className="text-sm text-white/75">
                Ubicados en el corazón de{" "}
                <span className="font-semibold text-lime">
                  Carrasco, Montevideo
                </span>
                , MATCH POINT es la academia de tenis de referencia para todos
                los niveles.
              </p>
            </div>

            <div className="space-y-4 text-sm text-white/80">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                  Dirección
                </p>
                <p className="mt-1">Potosí 1657 · Carrasco · Montevideo</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                  Horario
                </p>
                <p className="mt-1">
                  Lunes a Viernes · <span className="text-lime">08:00 a 22:00</span>
                  {"  |  "}
                  Sábados · <span className="text-lime">09:00 a 18:00</span>
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/59898260543"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center gap-2 text-lime hover:underline"
                >
                  +598 9826 0543
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/59898260543?text=Hola%20MATCH%20POINT%2C%20quiero%20coordinar%20una%20visita%20o%20clase."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-lime px-8 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-black shadow-[0_0_40px_rgba(198,255,0,0.7)] transition hover:shadow-[0_0_60px_rgba(198,255,0,1)]"
            >
              Ver opciones en WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/95 px-6 py-8 text-xs text-white/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-pure-white">
              MATCH POINT
            </p>
            <p className="text-[11px] text-white/45">
              Academia de tenis en Potosí 1657, Carrasco, Montevideo.
            </p>
            <p className="text-[11px] text-white/45">
              Lunes a Viernes 08:00 - 22:00 | Sábados 09:00 - 18:00
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.18em]">
            <a href="#top" className="hover:text-lime">
              Inicio
            </a>
            <a href="#servicios" className="hover:text-lime">
              Clases
            </a>
            <a href="#servicios" className="hover:text-lime">
              Alquiler
            </a>
            <a href="#niveles" className="hover:text-lime">
              Niveles
            </a>
            <a href="#comunidad" className="hover:text-lime">
              Comunidad
            </a>
            <a href="#tip" className="hover:text-lime">
              Tip del mes
            </a>
            <a href="#faq" className="hover:text-lime">
              Preguntas frecuentes
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-lime hover:text-lime"
              aria-label="Instagram MATCH POINT"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

