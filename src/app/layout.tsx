import type { Metadata, Viewport } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { BackToTop, ScrollProgress } from "@/components/layout/back-to-top";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/json-ld";

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — University of Maiduguri`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "UNIMAID-UniPod",
    "University Innovation Pod",
    "timbuktoo Initiative",
    "University of Maiduguri",
    "ASR-iCIE",
    "Abdul Samad Rabiu International Centre for Innovation and Entrepreneurship",
    "UNIPOD UNIMAID",
    "makerspace Nigeria",
    "prototyping lab Maiduguri",
    "3D printing Borno",
    "CNC fabrication Nigeria",
    "innovation hub North-East Nigeria",
    "UNDP Nigeria",
    "Agro-tech prototyping",
    "off-grid solar prototyping",
  ],
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: site.url,
    siteName: site.legalName,
    title: `${site.name} — University of Maiduguri`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — University of Maiduguri`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
  category: "education",
};

export const viewport: Viewport = {
  themeColor: "#06090c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const themeScript = `(function(){try{var t=localStorage.getItem("arc-theme");if(t==="light"){document.documentElement.dataset.theme="light"}}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-NG"
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ember-400 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-night-950"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <BackToTop />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </body>
    </html>
  );
}
