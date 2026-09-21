import JsonLd from "@/components/JsonLd";
import {
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_PATH,
  OG_IMAGE_WIDTH,
  OG_LOCALE,
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_NAME,
  SITE_TITLE_DEFAULT,
  SITE_TITLE_TEMPLATE,
  SITE_URL,
  THEME_COLOR
} from "@/constants/site";
import { buildStructuredDataGraph } from "@/lib/structured-data";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE_DEFAULT,
    template: SITE_TITLE_TEMPLATE
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Lic. Mario Tomczuk", url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "sports",
  formatDetection: {
    telephone: true,
    email: false,
    address: false
  },
  alternates: {
    canonical: SITE_URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    locale: OG_LOCALE,
    images: [
      {
        url: OG_IMAGE_PATH,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: OG_IMAGE_ALT,
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    images: {
      url: OG_IMAGE_PATH,
      alt: OG_IMAGE_ALT
    }
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo-match-point-principal.png", type: "image/png" }]
  },
  manifest: "/manifest.webmanifest"
};

export const viewport: Viewport = {
  themeColor: THEME_COLOR
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = buildStructuredDataGraph();

  return (
    <html lang={SITE_LOCALE} className={inter.variable}>
      <body className="min-h-screen font-sans antialiased bg-cream text-brand-blue">
        <JsonLd data={structuredData} />
        {children}
      </body>
    </html>
  );
}
