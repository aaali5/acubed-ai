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
  title: "aCubed AI | Intelligent Automation for Modern Businesses",
  description:
    "We automate the work you hate doing. aCubed AI builds intelligent automation that replaces manual, repetitive business processes with AI agents that work 24/7.",
  keywords: [
    "AI automation",
    "business automation",
    "AI agents",
    "process automation",
    "intelligent automation",
    "aCubed AI",
  ],
  openGraph: {
    title: "aCubed AI | Intelligent Automation for Modern Businesses",
    description:
      "We automate the work you hate doing. AI agents that replace manual, repetitive business processes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased noise-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
