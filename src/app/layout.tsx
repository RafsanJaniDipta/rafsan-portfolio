import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rafsandev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rafsan Jani Dipta — Full Stack Developer",
  description:
    "Full-stack developer from Bangladesh. I turn ideas into production-ready applications with Next.js, Node.js, PostgreSQL, and more.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Bangladesh",
    "Rafsan Jani Dipta",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Rafsan Jani Dipta — Full Stack Developer",
    description: "I turn ideas into full-stack reality.",
    url: siteUrl,
    siteName: "Rafsan Jani Dipta",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafsan Jani Dipta — Full Stack Developer",
    description: "I turn ideas into full-stack reality.",
    creator: "@RafsanJaniDipta",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/*
          Runs before first paint so the saved theme is applied without a flash.
          Falls back to the OS preference when nothing is stored.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(!t){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
