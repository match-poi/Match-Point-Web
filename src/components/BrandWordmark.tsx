type BrandWordmarkProps = {
  tone: "light" | "dark";
  className?: string;
};

/** Misma escala arriba y abajo — como el pie impecable. */
const LOCKUP_SIZE =
  "block h-auto w-auto max-h-[72px] sm:max-h-[84px] md:max-h-[96px] max-w-[min(100vw-1.5rem,640px)] object-contain object-center sm:object-left";

const LOCKUP = {
  light: {
    src: "/logo-lockup-green.png",
    wrap: "inline-flex items-center bg-transparent"
  },
  dark: {
    src: "/logo-lockup-cream.png",
    wrap: "inline-flex items-center bg-cream"
  }
} as const;

export default function BrandWordmark({ tone, className = "" }: BrandWordmarkProps) {
  const { src, wrap } = LOCKUP[tone];

  return (
    <span className={`max-w-full ${wrap} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="Match Point Tenis — Entrena para jugar"
        decoding="async"
        fetchPriority={tone === "light" ? "high" : "auto"}
        className={LOCKUP_SIZE}
      />
    </span>
  );
}
