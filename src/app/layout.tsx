import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Poppins,
  Bebas_Neue,
  Rethink_Sans,
  DM_Sans,
  Inter,
  Manrope,
  Figtree,
  League_Gothic,
} from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import LenisScrollProvider from "./LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
}) 

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const league = League_Gothic({
  variable: "--font-league-gothic",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

const rethink = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Kevin Ragil | Portfolio",
    template: "%s | Kevin Ragil",
  },
  description:
    "Portfolio website Kevin Ragil — Full Stack Developer yang berfokus pada pengembangan aplikasi web modern dengan React, Next.js, dan teknologi terkini.",
  keywords: [
    "Kevin Ragil",
    "Portfolio",
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Kevin Ragil" }],
  creator: "Kevin Ragil",
  metadataBase: new URL("https://kevinragil.my.id"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Kevin Ragil Portfolio",
    title: "Kevin Ragil | Portfolio",
    description:
      "Portfolio website Kevin Ragil — Full Stack Developer yang berfokus pada pengembangan aplikasi web modern dengan React, Next.js, dan teknologi terkini.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Ragil | Portfolio",
    description:
      "Portfolio website Kevin Ragil — Full Stack Developer yang berfokus pada pengembangan aplikasi web modern.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${figtree.variable} ${manrope.variable} ${inter.variable} ${dmSans.variable} ${rethink.variable} ${league.variable} ${bebas.variable} ${poppins.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <LenisScrollProvider>{children}</LenisScrollProvider>
        </Providers>
      </body>
    </html>
  );
}
