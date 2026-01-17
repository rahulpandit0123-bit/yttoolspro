import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} — Free YouTube Tools`,
  description: SITE.tagline.en,
  verification: {
    google: "jbCvKyPSFRZNqKaVz__-06gXnGHGaF-e5nHN-F21HHI",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* LOGO ONLY */}
        <Link href="/" className="flex items-center">
          <div className="relative">

            {/* Glow */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-fuchsia-500/25 via-purple-500/25 to-cyan-500/25 blur-2xl" />

            {/* ✅ LOGO (UNCHANGED) */}
            <img
              src="/logo.png"
              alt="YTToolsPro Logo"
              className="relative h-[60px] w-[120px] scale-[2] object-contain origin-left"
            />

          </div>
        </Link>

        {/* NAV MENU */}
        <nav className="flex items-center gap-8 text-sm text-slate-300">
          <Link href="/tools" className="hover:text-white transition">
            Tools
          </Link>

          <Link
            href="/tools/youtube-thumbnail"
            className="hidden md:block hover:text-white transition"
          >
            Thumbnail
          </Link>

          <Link
            href="/tools/youtube-title"
            className="hidden md:block hover:text-white transition"
          >
            Title
          </Link>

          <Link
            href="/tools/youtube-timestamp"
            className="hidden md:block hover:text-white transition"
          >
            Timestamp
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased overflow-x-hidden">

        {/* BACKGROUND GLOW */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
          <div className="absolute -top-40 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-fuchsia-500/12 blur-3xl" />
          <div className="absolute top-40 left-10 h-[380px] w-[380px] rounded-full bg-indigo-500/12 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        {/* HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main className="relative">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="border-t border-slate-800 bg-slate-950/40">
          <div className="mx-auto max-w-7xl px-6 py-10">

            <div className="grid gap-8 md:grid-cols-3">

              <div>
                <h3 className="font-semibold text-white">{SITE.name}</h3>
                <p className="mt-3 text-sm text-slate-400">
                  Professional YouTube tools for creators. Download thumbnails,
                  generate titles, timestamps, embeds and more.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">Tools</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  <li><Link href="/tools/youtube-thumbnail">Thumbnail Downloader</Link></li>
                  <li><Link href="/tools/youtube-title">Title Generator</Link></li>
                  <li><Link href="/tools/youtube-timestamp">Timestamp Generator</Link></li>
                  <li><Link href="/tools/youtube-embed">Embed Generator</Link></li>
                  <li><Link href="/tools/youtube-hashtag">Hashtag Generator</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-white">Pages</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/tools">Tools</Link></li>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/terms">Terms</Link></li>
                  <li><Link href="/about">About</Link></li>
                </ul>
              </div>

            </div>

            <div className="mt-8 text-center text-xs text-slate-500">
              © {year} {SITE.name}. All rights reserved.
            </div>

          </div>
        </footer>

        {/* SEO SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE.name,
              url: "https://yttoolspro.vercel.app",
              logo: "https://yttoolspro.vercel.app/logo.png",
            }),
          }}
        />

      </body>
    </html>
  );
}
