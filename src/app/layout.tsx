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
    "MATCH POINT | Academia de Tenis en Carrasco | Clases Particulares y Alquiler de Canchas",
  description:
    "MATCH POINT es la academia de tenis en Carrasco, Montevideo, especializada en clases particulares, entrenamientos grupales y alquiler de canchas para todos los niveles.",
  keywords: [
    "academia de tenis",
    "clases de tenis",
    "clases particulares de tenis",
    "entrenamiento de tenis",
    "alquiler de canchas de tenis",
    "tenis Carrasco",
    "tenis Montevideo",
    "MATCH POINT"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased bg-black text-pure-white">
        {children}
      </body>
    </html>
  );
}

