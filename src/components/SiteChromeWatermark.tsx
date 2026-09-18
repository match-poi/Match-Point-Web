type SiteChromeWatermarkProps = {
  variant: "primary" | "cream";
};

/** Decoración suave solo con CSS — sin imágenes que generen “parches” blancos. */
export default function SiteChromeWatermark({ variant }: SiteChromeWatermarkProps) {
  const ringClass =
    variant === "primary"
      ? "bg-[radial-gradient(circle_at_78%_42%,rgba(245,247,232,0.09),transparent_42%)]"
      : "bg-[radial-gradient(circle_at_12%_88%,rgba(115,135,101,0.07),transparent_45%)]";

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 ${ringClass}`}
      aria-hidden
    />
  );
}
