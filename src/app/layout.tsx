import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

// Local fallback for Inter font
const inter = localFont({
  src: [
    {
      path: '../public/fonts/Inter.woff2',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "BrandCrossover",
  description: "Discover, score, and launch the most profitable brand collaborations."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body>{children}</body>
    </html>
  );
}
