import { WHATSAPP_CTA_URL } from "@/constants/whatsapp";
import { CalendarDays } from "lucide-react";

const CALENDAR_2027 = [
  { quarter: "Q1 · Ene–Mar", items: ["Ranking MP — Fecha 1", "Clínica de Saque", "Torneo Social de Verano"] },
  { quarter: "Q2 · Abr–Jun", items: ["Ranking MP — Fecha 2", "Copa Match Point (dobles)", "Clínica de Volea"] },
  { quarter: "Q3 · Jul–Sep", items: ["Ranking MP — Fecha 3", "Torneo Interno de Invierno", "Encuentros sociales dominicales"] },
  { quarter: "Q4 · Oct–Dic", items: ["Ranking MP — Final", "Copa de cierre de año", "Clínica de competencia"] }
];

export default function CalendarioClub2027() {
  return (
    <div id="calendario-2027" className="mx-auto max-w-6xl space-y-8 pt-4">
      <header className="space-y-2 text-center">
        <p className="section-label">Calendario 2027</p>
        <h3 className="text-2xl font-semibold text-brand-blue md:text-3xl">
          Planificá tu año en el club
        </h3>
        <p className="mx-auto max-w-2xl text-sm text-brand-blue/70">
          Fechas estimadas para reservar torneos, clínicas y fechas del Ranking MP con anticipación.
          Confirmamos detalles finales por WhatsApp.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CALENDAR_2027.map((block) => (
          <article
            key={block.quarter}
            className="rounded-2xl border border-brand-blue/15 bg-white p-5 shadow-sm"
          >
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              {block.quarter}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-brand-blue/80">
              {block.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <a
          href={WHATSAPP_CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta text-xs tracking-[0.18em]"
        >
          Reservar cupo en eventos 2027
        </a>
        <p className="text-center text-xs text-brand-blue/55">
          Inscripciones anticipadas para socios activos
        </p>
      </div>
    </div>
  );
}
