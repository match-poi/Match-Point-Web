export function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-brand-blue/80">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function PriceLine({
  label,
  amount,
  suffix,
  note
}: {
  label: string;
  amount: string;
  suffix?: string;
  note?: string;
}) {
  return (
    <li className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-b border-brand-blue/10 py-2.5 last:border-b-0">
      <span className="text-sm font-medium text-brand-blue">{label}</span>
      <span className="text-right">
        <span className="text-lg font-bold tabular-nums text-brand-blue">{amount}</span>
        {suffix ? (
          <span className="ml-0.5 text-sm font-medium text-brand-blue/70">{suffix}</span>
        ) : null}
        {note ? (
          <span className="mt-0.5 block text-xs font-medium text-brand-blue/60">{note}</span>
        ) : null}
      </span>
    </li>
  );
}

export function ServiceCardEyebrow({ children }: { children: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-blue/60">
      {children}
    </p>
  );
}
