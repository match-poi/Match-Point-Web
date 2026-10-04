import { HOME_ACCESOS } from "@/constants/home";
import { CalendarRange, GraduationCap, Trophy } from "lucide-react";
import Link from "next/link";

const ICONS = {
  clases: GraduationCap,
  alquiler: CalendarRange,
  torneo: Trophy
} as const;

export default function AccesosPrincipales() {
  return (
    <section
      className="relative z-10 border-t border-brand-blue/10 bg-cream px-4 pb-12 pt-2 sm:px-6 sm:pb-16"
      aria-labelledby="accesos-principales-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="accesos-principales-heading" className="sr-only">
          Accesos principales
        </h2>
        <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {HOME_ACCESOS.map((item) => {
            const Icon = ICONS[item.id];

            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="group flex min-h-[4.75rem] items-center gap-3 rounded-2xl border border-brand-blue/10 bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:border-primary/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:min-h-[5.5rem] sm:flex-col sm:items-start sm:gap-2 sm:px-5 sm:py-4"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-cream">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-brand-blue sm:text-base">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-snug text-brand-blue/65 sm:mt-1 sm:text-sm sm:leading-relaxed">
                      {item.description}
                    </span>
                  </span>
                  <span
                    className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-accent sm:mt-auto sm:inline-block"
                    aria-hidden="true"
                  >
                    Ir →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
