import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrandCrossover",
  description: "Brand partnership intelligence and crossover discovery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
