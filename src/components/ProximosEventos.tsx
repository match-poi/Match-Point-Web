import CalendarioClub2027 from "@/components/CalendarioClub2027";
import { WHATSAPP_CTA_URL } from "@/constants/whatsapp";
import { CalendarDays, Trophy, Users, Zap } from "lucide-react";

const EVENTS = [
  {
    type: "Torneo",
    icon: Trophy,
    title: "Copa Match Point — Otoño",
    date: "Estimado · 18 Oct 2026",
    desc: "Torneo interno por categorías. Formato americano, premios simbólicos y ranking MP.",
    tag: "Inscripciones abiertas"
  },
  {
    type: "Clínica",
    icon: Zap,
    title: "Clínica Intensiva de Saque",
    date: "Estimado · 8 Nov 2026",
    desc: "Dos horas de técnica con el staff del club. Ideal para socios Plan Entrenamiento y Competición.",
    tag: "Cupos limitados"
  },
  {
    type: "Social",
    icon: Users,
    title: "Encuentro Social Dominical",
    date: "Todos los domingos · 10:00",
    desc: "Partidos por nivel, ambiente relajado y comunidad activa. Sumate aunque vayas solo.",
    tag: "Recurrente"
  },
  {
    type: "Ranking",
    icon: Trophy,
    title: "Ranking MP — Fecha 1 (2027)",
    date: "Estimado · 24 Ene 2027",
    desc: "Primera fecha oficial del ranking interno. Reservá con anticipación para asegurar tu lugar.",
    tag: "Preventa 2027"
  }
];

export default function ProximosEventos() {
  return (
    <section id="eventos" className="border-t border-brand-blue/10 bg-cream px-6 py-20">
      <div className="mx-auto max-w-6xl space-y-14">
        <header className="space-y-3 text-center">
          <p className="section-label">Social & Eventos</p>
          <h2 className="text-3xl font-semibold text-brand-blue md:text-4xl">
            Próximos Eventos del Club
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-brand-blue/70">
            Torneos, clínicas y encuentros sociales. Fechas estimadas — te confirmamos por WhatsApp.
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {EVENTS.map((event) => {
            const Icon = event.icon;
            return (
              <article key={event.title} className="card-light flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-lime px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                    {event.tag}
                  </span>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                    {event.type}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-brand-blue">{event.title}</h3>
                </div>

                <p className="flex items-center gap-2 text-xs text-brand-blue/60">
                  <CalendarDays className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {event.date}
                </p>

                <p className="flex-1 text-sm text-brand-blue/70">{event.desc}</p>
              </article>
            );
          })}
        </div>

        <div className="flex justify-center">
          <a href="#calendario-2027" className="btn-secondary text-xs tracking-[0.18em]">
            Consultar calendario completo
          </a>
        </div>

        <CalendarioClub2027 />

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
