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

export const metadata: Metadata = {
  metadataBase: new URL("https://emanuah.netlify.app"),

  title: {
    default: "Emanuah Group | Assessoria Artística & Gestão de Talentos",
    template: "%s | Emanuah Group",
  },

  description:
    "Emanuah Group: assessoria artística, gestão de talentos e produção de eventos. Conectamos artistas, marcas e experiências.",

  keywords: [
    "Emanuah Group",
    "assessoria artística",
    "gestão de talentos",
    "produção de eventos",
    "agenciamento artístico",
    "booking artístico",
    "artistas",
    "eventos",
  ],

  authors: [
    {
      name: "Emanuah Group",
    },
  ],

  creator: "Emanuah Group",
  publisher: "Emanuah Group",

  alternates: {
    canonical: "https://emanuah.netlify.app/",
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
    url: "https://emanuah.netlify.app/",
    siteName: "Emanuah Group",
    title: "Emanuah Group | Assessoria Artística & Gestão de Talentos",
    description:
      "Assessoria artística, gestão de talentos e produção de eventos.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Emanuah Group | Assessoria Artística & Gestão de Talentos",
    description:
      "Assessoria artística, gestão de talentos e produção de eventos.",
  },

  category: "business",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}