"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/report-demo", label: "Sample report" },
  { href: "/#intake", label: "Brand intake" },
  { href: "/#waitlist", label: "Waitlist" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/90 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between gap-3">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-widest"
          onClick={() => setOpen(false)}
        >
          BrandCrossover
        </Link>
        <nav className="hidden items-center gap-2 sm:flex" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="btn btn-secondary text-sm py-2 px-3">
              {l.label}
            </Link>
          ))}
          <Link href="/#intake" className="btn text-sm py-2 px-3">
            Submit brand
          </Link>
        </nav>
        <div className="flex items-center gap-2 sm:hidden">
          <Link href="/#intake" className="btn text-xs py-2 px-3" onClick={() => setOpen(false)}>
            Intake
          </Link>
          <button
            type="button"
            className="btn btn-secondary inline-flex h-10 w-10 items-center justify-center p-0"
            aria-expanded={open}
            aria-controls="brandcrossover-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="brandcrossover-mobile-nav"
          className="container flex flex-col gap-2 border-t border-white/10 py-4 sm:hidden"
          aria-label="Mobile"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="btn btn-secondary w-full justify-center"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
