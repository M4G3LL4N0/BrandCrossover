import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "BrandCrossover | Crossover Intelligence for CPG & Brands",
  description:
    "Discover profitable brand crossovers, score adjacency and upside, and launch collaborations—from nostalgia-meets-popcorn lanes to category expansion you can defend.",
  openGraph: {
    title: "BrandCrossover | Crossover Intelligence for CPG & Brands",
    description:
      "Discover profitable brand crossovers, score opportunities, and launch collaborations with an intelligence layer built for brand teams and licensors.",
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
    title: "BrandCrossover | Crossover Intelligence for CPG & Brands",
    description:
      "Discover profitable brand crossovers, score adjacency and upside, and launch collaborations.",
    images: ["https://brandcrossover.com/og-image.png"],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.className}`}>
      <body className="relative min-h-screen selection:bg-accent selection:text-primary flex flex-col text-white antialiased">
        <SiteNav />
        <div className="relative z-[1] flex-1">{children}</div>
        <footer>
          <div className="container footer-content">
            <div>
              <strong>BrandCrossover</strong>
              <span className="text-muted" style={{ marginLeft: 10 }}>
                Collaboration intelligence for product expansion
              </span>
            </div>
            <nav className="footer-links" aria-label="Footer">
              <Link href="/report-demo">Sample report</Link>
              <Link href="/#waitlist">Waitlist</Link>
              <Link href="/#intake">Brand intake</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
