import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "BrandCrossover | Strategic Partnership Intelligence",
  description: "Discover high-upside brand collaborations with intelligent matching and partnership scoring.",
  openGraph: {
    title: "BrandCrossover | Strategic Partnership Intelligence",
    description: "Discover high-upside brand collaborations with intelligent matching and partnership scoring.",
    url: "https://brandcrossover.com",
    siteName: "BrandCrossover",
    images: [
      {
        url: "https://brandcrossover.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandCrossover | Strategic Partnership Intelligence",
    description: "Discover high-upside brand collaborations with intelligent matching and partnership scoring.",
    images: ["https://brandcrossover.com/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-gradient-to-b from-[#07111f] via-[#081426] to-[#07111f]">
        {children}
      </body>
    </html>
  );
}
