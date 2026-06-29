import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Tools Hub - Discover & Compare the Best AI Tools in 2026",
    template: "%s | AI Tools Hub",
  },
  description:
    "Find, compare, and review the best AI tools. Expert reviews, detailed comparisons, and up-to-date rankings for ChatGPT, Claude, Midjourney, and 100+ AI tools.",
  keywords: [
    "AI tools",
    "AI directory",
    "ChatGPT alternatives",
    "AI writing tools",
    "AI image generators",
    "AI coding assistants",
    "AI tool comparison",
  ],
  openGraph: {
    title: "AI Tools Hub - Discover & Compare the Best AI Tools in 2026",
    description:
      "Find, compare, and review the best AI tools. Expert reviews, detailed comparisons, and up-to-date rankings.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
