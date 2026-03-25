import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
