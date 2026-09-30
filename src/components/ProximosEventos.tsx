import { HOTEL_DEL_LAGO_TOURNAMENT, OPEN_TRAINING_EVENT } from "@/constants/events";
import {
  WHATSAPP_CTA_URL,
  WHATSAPP_RESERVAR_EVENTO_URL,
  WHATSAPP_TORNEO_HOTEL_DEL_LAGO_URL
} from "@/constants/whatsapp";
import { CalendarDays, Sparkles, Trophy } from "lucide-react";
import Link from "next/link";

export default function ProximosEventos() {
  return (
    <section id="eventos" className="border-t border-brand-blue/10 bg-cream px-6 py-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="space-y-3 text-center">
          <p className="section-label">Social & Eventos</p>
          <h2 className="text-3xl font-semibold text-brand-blue md:text-4xl">
            Próximos Eventos del Club
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-brand-blue/70">
            Entrenamiento con cupos limitados y torneo en Punta del Este con inscripciones abiertas.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-5 lg:items-stretch">
          {/* Evento abierto */}
          <article className="card-light flex flex-col gap-4 lg:col-span-2">
            <div className="flex items-start justify-between gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Trophy className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="rounded-full bg-lime px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                Inscripciones abiertas
              </span>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                Entrenamiento
              </p>
              <h3 className="mt-1 text-lg font-semibold text-brand-blue">
                {OPEN_TRAINING_EVENT.name}
              </h3>
            </div>

            <p className="flex items-center gap-2 text-xs text-brand-blue/60">
              <CalendarDays className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {OPEN_TRAINING_EVENT.displayDate}
            </p>

            <p className="flex-1 text-sm leading-relaxed text-brand-blue/70">
              Sesión práctica para jugar torneos sociales con más seguridad: puntos, ritmo de
              partido y táctica en situaciones reales. Cupos limitados.
            </p>

            <a
              href={WHATSAPP_RESERVAR_EVENTO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-sm mt-2 w-full text-center text-[10px] tracking-[0.16em]"
            >
              Reservar lugar
            </a>
          </article>

          {/* Save the date — eventazo oculto */}
          <article
            className="relative overflow-hidden rounded-2xl border border-brand-blue/15 bg-primary px-6 py-10 text-center shadow-md lg:col-span-3 lg:px-10 lg:py-12"
            aria-label="Torneo Match Point — Hotel del Lago, Punta del Este"
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(241,254,159,0.12),transparent_55%)]"
              aria-hidden
            />
            <p
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-4xl font-black uppercase tracking-[0.2em] text-cream/[0.06] sm:text-5xl"
              aria-hidden
            >
              Eventazo
            </p>

            <div className="relative z-[1] flex min-h-[220px] flex-col items-center justify-center gap-4 lg:min-h-[260px]">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Sparkles className="h-5 w-5 text-lime/80" aria-hidden="true" />
                <span className="rounded-full bg-lime px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                  Inscripciones abiertas
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-lime">
                {HOTEL_DEL_LAGO_TOURNAMENT.kicker}
              </p>
              <p className="max-w-lg text-balance text-lg font-semibold uppercase leading-snug text-cream sm:text-xl">
                {HOTEL_DEL_LAGO_TOURNAMENT.tagline}
              </p>
              <p className="text-base font-semibold text-lime sm:text-lg">
                {HOTEL_DEL_LAGO_TOURNAMENT.dateVenueShort}
              </p>
              <p className="max-w-md text-sm leading-relaxed text-cream/80">
                {HOTEL_DEL_LAGO_TOURNAMENT.cardTeaser}
              </p>
              <div className="mt-1 flex w-full max-w-sm flex-col gap-2.5">
                <a
                  href={HOTEL_DEL_LAGO_TOURNAMENT.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-sm w-full text-center text-[10px] tracking-[0.16em]"
                >
                  {HOTEL_DEL_LAGO_TOURNAMENT.registrationCtaLabel}
                </a>
                <a
                  href={WHATSAPP_TORNEO_HOTEL_DEL_LAGO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border-2 border-cream/40 bg-cream/5 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-cream transition-all duration-200 hover:border-lime hover:bg-cream/15 hover:text-lime"
                >
                  Consultar por WhatsApp
                </a>
                <Link
                  href={HOTEL_DEL_LAGO_TOURNAMENT.path}
                  className="text-[10px] font-semibold uppercase tracking-[0.14em] text-cream/70 underline-offset-2 transition-colors hover:text-lime hover:underline"
                >
                  Ver página del torneo
                </Link>
              </div>
            </div>
          </article>
        </div>

        <div className="flex justify-center pt-2">
          <a
            href={WHATSAPP_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-accent underline-offset-2 transition-colors duration-200 hover:text-[#e55a00] hover:underline"
          >
            Consultar fechas por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
