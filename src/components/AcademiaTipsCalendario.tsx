"use client";

import {
  ChevronDown,
  Hand,
  Lock,
  Ruler,
  Shield,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const TIPS_YEAR = 2026;

type TipIcon = typeof Hand;

type MonthTip = {
  id: number;
  short: string;
  label: string;
  theme: string;
  icon: TipIcon;
  body: string;
};

const MONTHS: MonthTip[] = [
  {
    id: 0,
    short: "Ene",
    label: "Enero",
    theme: "La Empuñadura Continental",
    icon: Hand,
    body:
      "La base para el saque y la volea. Te da control, estabilidad y transición rápida entre golpes cerca de la red. Practicá en peloteos cortos antes de llevarla al saque."
  },
  {
    id: 1,
    short: "Feb",
    label: "Febrero",
    theme: "El Split Step",
    icon: Zap,
    body:
      "El salto de lectura para reaccionar más rápido. Aterrizá justo cuando tu rival impacta la pelota para salir en la dirección correcta. Sin split step, llegás tarde a casi todo."
  },
  {
    id: 2,
    short: "Mar",
    label: "Marzo",
    theme: "Control de Distancia",
    icon: Ruler,
    body:
      "Usá el brazo no hábil como medidor para ajustar la distancia a la pelota y encontrar siempre el punto ideal de impacto. Menos prisa, más repetición con buen espacio corporal."
  },
  {
    id: 3,
    short: "Abr",
    label: "Abril",
    theme: "El Top-spin",
    icon: Sparkles,
    body:
      "Generá efecto con aceleración de abajo hacia arriba, no solo con fuerza. Buscá margen sobre la red y profundidad al fondo. El topspin te da seguridad cuando el rival te presiona."
  },
  {
    id: 4,
    short: "May",
    label: "Mayo",
    theme: "Táctica de Dobles",
    icon: Users,
    body:
      "En dobles, la red manda: uno cubre, el otro ataca. Comunicación simple (“mía”, “tuya”) y movimientos en espejo. El objetivo es incomodar al rival con ángulos, no solo pegar fuerte."
  },
  {
    id: 5,
    short: "Jun",
    label: "Junio",
    theme: "El Slice de Revés",
    icon: Ruler,
    body:
      "El slice bajo cambia el ritmo del punto. Mantené la muñeca firme, swing compacto y contacto adelante. Usalo para sacar al rival de la zona cómoda o para acercarte a la red."
  },
  {
    id: 6,
    short: "Jul",
    label: "Julio",
    theme: "Juego de Pies",
    icon: Zap,
    body:
      "La base del tenis moderno está en los pies. Trabajá ajustes cortos entre golpes, split step antes del impacto del rival y primera reacción hacia la pelota. Planteo → lectura → desplazamiento."
  },
  {
    id: 7,
    short: "Ago",
    label: "Agosto",
    theme: "Saque con Efecto",
    icon: Hand,
    body:
      "El saque efectivo no es solo fuerza: toss estable, contacto arriba y pronación controlada. Empezá apuntando al cuerpo del rival y después abrí ángulos. Mismo ritual en cada punto."
  },
  {
    id: 8,
    short: "Sep",
    label: "Septiembre",
    theme: "Mentalidad Ganadora",
    icon: Target,
    body:
      "Entre punto y punto, respirá y definí una consigna simple (“profundidad”, “primer saque adentro”). La constancia mental gana partidos tanto como un buen drive."
  },
  {
    id: 9,
    short: "Oct",
    label: "Octubre",
    theme: "Ataque a la red",
    icon: Trophy,
    body:
      "Subí con un golpe que obligue: approach profundo o slice que flote. Primer paso explosivo, split en la volea y raqueta adelante. No subas por subir: subí cuando el rival esté incómodo."
  },
  {
    id: 10,
    short: "Nov",
    label: "Noviembre",
    theme: "Defensa desde el fondo",
    icon: Shield,
    body:
      "Cuando te presionan, bajá el centro de gravedad y buscá altura y profundidad para ganar tiempo. No busques el winner de entrada: recuperá la neutralidad y esperá tu pelota corta."
  },
  {
    id: 11,
    short: "Dic",
    label: "Diciembre",
    theme: "Estrategia de Partido",
    icon: Sparkles,
    body:
      "Antes de jugar, definí un plan A (tu arma) y un plan B (si el rival la neutraliza). Anotá qué funcionó en el set anterior. En Match Point jugamos inteligente, no solo fuerte."
  }
];

function isMonthUnlocked(monthIndex: number, now: Date): boolean {
  const year = now.getFullYear();
  if (year > TIPS_YEAR) return true;
  if (year < TIPS_YEAR) return false;
  return now.getMonth() >= monthIndex;
}

function defaultSelectedMonth(now: Date): number {
  if (now.getFullYear() === TIPS_YEAR) return now.getMonth();
  if (now.getFullYear() > TIPS_YEAR) return 11;
  return 0;
}

function tipsIntroCopy(now: Date, mounted: boolean): string {
  if (!mounted) {
    return "Calendario mensual de tips técnicos del club. El mes en curso se muestra primero.";
  }
  if (now.getFullYear() === TIPS_YEAR && now.getMonth() === 9) {
    return "Octubre ya está activo: este es el tip del mes. Los meses anteriores del calendario 2026 quedan en el archivo expandible.";
  }
  if (now.getFullYear() === TIPS_YEAR && now.getMonth() < 9) {
    return "Elegí un mes desbloqueado para leer el tip. Los meses futuros se habilitan el 1 de cada mes.";
  }
  return "Todos los meses de 2026 están disponibles. El tip del mes en curso aparece primero; el resto queda en el archivo.";
}

export default function AcademiaTipsCalendario() {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState<Date>(() => new Date());
  const [selectedId, setSelectedId] = useState(0);

  useEffect(() => {
    const current = new Date();
    setNow(current);
    setSelectedId(defaultSelectedMonth(current));
    setMounted(true);
  }, []);

  const currentMonthId = mounted ? defaultSelectedMonth(now) : 0;
  const featured = MONTHS[currentMonthId] ?? MONTHS[0];
  const FeaturedIcon = featured.icon;
  const featuredUnlocked = mounted ? isMonthUnlocked(currentMonthId, now) : false;

  const archiveMonths = useMemo(() => {
    if (!mounted) return [];
    return MONTHS.filter(
      (month) => month.id < currentMonthId && isMonthUnlocked(month.id, now)
    ).reverse();
  }, [mounted, currentMonthId, now]);

  const selected = mounted ? MONTHS[selectedId] ?? MONTHS[0] : MONTHS[0];
  const unlocked = mounted ? isMonthUnlocked(selectedId, now) : false;
  const isActive = unlocked;
  const Icon = selected.icon;

  return (
    <section id="tip" className="relative z-10 border-t border-brand-blue/10 bg-cream px-6 py-20">
      <div className="relative z-10 mx-auto max-w-6xl space-y-10">
        <header className="space-y-2 text-center">
          <p className="section-label">Academia de Tips {TIPS_YEAR}</p>
          <h2 className="text-3xl font-semibold text-brand-blue md:text-4xl">
            Tip del mes — calendario {TIPS_YEAR}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-brand-blue/70">
            {tipsIntroCopy(now, mounted)}
          </p>
        </header>

        {!mounted ? (
          <div className="rounded-2xl border border-brand-blue/15 bg-white p-8 text-center text-sm text-brand-blue/60">
            Cargando calendario de tips…
          </div>
        ) : (
          <>
            <article className="rounded-2xl border border-primary/35 bg-lime/35 p-6 shadow-sm">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <FeaturedIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                      Tip del mes · {featured.label} {TIPS_YEAR}
                    </p>
                    <h3 className="text-lg font-semibold text-brand-blue">{featured.theme}</h3>
                  </div>
                </div>
                {featuredUnlocked ? (
                  <span className="rounded-full bg-lime px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                    Activo ahora
                  </span>
                ) : (
                  <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-blue/60">
                    Se desbloquea el 1 de {featured.label}
                  </span>
                )}
              </div>
              {featuredUnlocked ? (
                <p className="text-sm leading-relaxed text-brand-blue/80">{featured.body}</p>
              ) : (
                <p className="text-sm text-brand-blue/60">
                  Volvé el 1 de {featured.label} de {TIPS_YEAR} para leer este tip en la web.
                </p>
              )}
            </article>

            {archiveMonths.length > 0 ? (
              <details className="rounded-2xl border border-brand-blue/15 bg-white p-4 shadow-sm sm:p-5">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-brand-blue [&::-webkit-details-marker]:hidden">
                  <span>Archivo de tips anteriores ({archiveMonths.length})</span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-brand-blue/50" aria-hidden />
                </summary>
                <ul className="mt-4 space-y-2 border-t border-brand-blue/10 pt-4">
                  {archiveMonths.map((month) => (
                    <li key={month.id}>
                      <button
                        type="button"
                        onClick={() => setSelectedId(month.id)}
                        className="flex min-h-11 w-full items-center justify-between gap-3 rounded-xl border border-brand-blue/10 px-3 py-2 text-left text-sm text-brand-blue transition-colors hover:border-primary hover:bg-lime/30"
                      >
                        <span>
                          <span className="font-semibold">{month.label}</span>
                          <span className="text-brand-blue/65"> — {month.theme}</span>
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                          Ver
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </details>
            ) : null}

            <div className="rounded-2xl border border-brand-blue/15 bg-white p-4 shadow-sm sm:p-6">
              <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.28em] text-brand-blue/55">
                Calendario completo {TIPS_YEAR}
              </p>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12">
                {MONTHS.map((month) => {
                  const monthUnlocked = isMonthUnlocked(month.id, now);
                  const isSelected = selectedId === month.id;

                  return (
                    <button
                      key={month.id}
                      type="button"
                      disabled={!monthUnlocked}
                      onClick={() => setSelectedId(month.id)}
                      className={`relative flex min-h-11 flex-col items-center justify-center rounded-xl border px-2 py-3 text-center transition-all duration-200 ${
                        !monthUnlocked
                          ? "cursor-not-allowed border-brand-blue/10 bg-cream/50 text-brand-blue/35"
                          : isSelected
                            ? "border-primary bg-lime shadow-sm"
                            : "border-primary/40 bg-lime/40 hover:border-primary hover:bg-lime/60"
                      }`}
                    >
                      {!monthUnlocked && (
                        <Lock
                          className="absolute right-1 top-1 h-3 w-3 text-brand-blue/30"
                          aria-hidden
                        />
                      )}
                      <span className="text-sm font-bold text-brand-blue">{month.short}</span>
                      {monthUnlocked ? (
                        <span className="mt-1 text-[9px] font-bold uppercase tracking-wide text-primary">
                          Activo
                        </span>
                      ) : (
                        <span className="mt-1 text-[9px] text-brand-blue/40">1 {month.label}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {selectedId !== currentMonthId ? (
              <article
                className={`rounded-2xl border p-6 shadow-sm ${
                  isActive ? "border-primary/35 bg-lime/35" : "border-brand-blue/10 bg-cream"
                }`}
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                        {selected.label} {TIPS_YEAR}
                      </p>
                      <h3 className="text-lg font-semibold text-brand-blue">{selected.theme}</h3>
                    </div>
                  </div>
                  {isActive && (
                    <span className="rounded-full bg-lime px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                      Tip activo
                    </span>
                  )}
                  {!unlocked && (
                    <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-blue/60">
                      Se desbloquea el 1 de {selected.label}
                    </span>
                  )}
                </div>

                {!unlocked && (
                  <p className="text-sm text-brand-blue/60">
                    Este tip ya está listo en el calendario del club. Se habilita automáticamente el
                    1 de {selected.label} de {TIPS_YEAR}.
                  </p>
                )}

                {unlocked && (
                  <p className="text-sm leading-relaxed text-brand-blue/80">{selected.body}</p>
                )}
              </article>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}
