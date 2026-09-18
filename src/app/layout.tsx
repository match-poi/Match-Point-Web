import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title:
    "MATCH POINT Club | Tu club de tenis en Montevideo | Comunidad, Ligas y Membresías",
  description:
    "MATCH POINT es tu club de tenis en Carrasco, Montevideo. Entrenamiento, competencia, ligas internas, torneos y una comunidad activa para todos los niveles.",
  keywords: [
    "club de tenis",
    "club de tenis Montevideo",
    "tenis Carrasco",
    "membresía tenis",
    "ligas de tenis",
    "torneos de tenis",
    "comunidad tenis",
    "MATCH POINT Club"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased bg-cream text-brand-blue">
        {children}
      </body>
    </html>
  );
}

