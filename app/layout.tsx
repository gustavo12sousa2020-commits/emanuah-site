import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://emanuah-site.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Emanuàh Group | Assessoria Artística & Gestão de Talentos",
    template: "%s | Emanuàh Group",
  },

  verification: {
    other: {
      "msvalidate.01": "26201F20C306F2871A26C34471213823",
    },
  },

  description:
    "Emanuàh Group atua com assessoria artística, gestão de talentos, booking e produção de eventos, conectando artistas, eventos e experiências.",

  keywords: [
    "Emanuàh Group",
    "Emanuah Group",
    "assessoria artística",
    "gestão de talentos",
    "produção de eventos",
    "agenciamento artístico",
    "booking artístico",
    "artistas",
    "eventos",
    "shows",
    "eventos gospel",
  ],

  authors: [
    {
      name: "Emanuàh Group",
    },
  ],

  creator: "Emanuàh Group",
  publisher: "Emanuàh Group",

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Emanuàh Group",
    title: "Emanuàh Group | Assessoria Artística & Gestão de Talentos",
    description:
      "Assessoria artística, gestão de talentos, booking e produção de eventos.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Emanuàh Group | Assessoria Artística & Gestão de Talentos",
    description:
      "Assessoria artística, gestão de talentos, booking e produção de eventos.",
  },

  category: "business",
    icons: {
    icon: "/logo/emanuah-favicon.png",
    shortcut: "/logo/emanuah-favicon.png",
    apple: "/logo/emanuah-favicon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Emanuàh Group",
  alternateName: "Emanuah Group",
  url: SITE_URL,
  description:
    "Assessoria artística, gestão de talentos, booking e produção de eventos.",
  sameAs: ["https://www.instagram.com/emanuahoficial/"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55 11 94506-5689",
    contactType: "customer service",
    availableLanguage: ["pt-BR"],
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={
        geistSans.variable +
        " " +
        geistMono.variable +
        " h-full antialiased"
      }
    >
      <head>
        <meta
          name="msvalidate.01"
          content="26201F20C306F2871A26C34471213823"
        />
      </head>

      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {children}
      </body>
    </html>
  );
}