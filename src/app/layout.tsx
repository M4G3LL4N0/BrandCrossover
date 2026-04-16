import React from 'react';
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

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // In production, we should handle errors at the layout level
  if (process.env.NODE_ENV === 'production') {
    try {
      return (
        <html lang="en" className={inter.variable}>
          <body className="min-h-screen bg-gradient-to-b from-[#07111f] via-[#081426] to-[#07111f] selection:bg-accent selection:text-primary">
            {children}
          </body>
        </html>
      );
    } catch (error) {
      console.error('Error in layout:', error);
      return (
        <html lang="en" className={inter.variable}>
          <body className="min-h-screen bg-gradient-to-b from-[#07111f] via-[#081426] to-[#07111f]">
            <div className="flex items-center justify-center h-full">
              <p className="text-white">An error occurred</p>
            </div>
          </body>
        </html>
      );
    }
  }

  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-gradient-to-b from-[#07111f] via-[#081426] to-[#07111f] selection:bg-accent selection:text-primary">
        {children}
      </body>
    </html>
  )
  );
