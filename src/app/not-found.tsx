import Link from "next/link";
import { SITE_TITLE_DEFAULT } from "@/constants/site";

export const metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true }
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center text-brand-blue">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">404</p>
      <h1 className="mt-4 text-2xl font-semibold">No encontramos esta página</h1>
      <p className="mt-3 max-w-md text-sm text-brand-blue/70">
        El enlace puede estar desactualizado. Volvé al inicio de {SITE_TITLE_DEFAULT.split("|")[0]?.trim()}.
      </p>
      <Link href="/" className="btn-cta mt-8 text-xs tracking-[0.16em]">
        Ir al inicio
      </Link>
    </main>
  );
}
