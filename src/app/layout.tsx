import "@/styles/tailwind.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import RadioBackground from "@/components/RadioBackground";
import { profile } from "@/data/resume";
import { siteUrl } from "@/lib/site";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} | ${profile.role}`,
  description: profile.summary,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.summary,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-ink text-fg">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.word{transform:none!important}`}</style>
        </noscript>
        <RadioBackground />
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
