import Image from "next/image";

type BrandLogoProps = {
  /** sm | md | lg — logo circular principal (no usar el zócalo horizontal acá) */
  size?: "sm" | "md" | "lg";
  className?: string;
};

const SIZES = {
  sm: "h-14 w-14 sm:h-16 sm:w-16",
  md: "h-20 w-20 sm:h-24 sm:w-24",
  lg: "h-28 w-28 sm:h-32 sm:w-32"
};

export default function BrandLogo({ size = "md", className = "" }: BrandLogoProps) {
  return (
    <Image
      src="/logo-match-point-principal.png"
      alt="Match Point Tenis"
      width={320}
      height={320}
      priority={size !== "sm"}
      className={`object-contain ${SIZES[size]} ${className}`}
    />
  );
}
