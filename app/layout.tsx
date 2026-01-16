import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} — YouTube Creator Tools`,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body className="min-h-dvh bg-slate-950 text-slate-100 antialiased">
        {/* Background glow */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-500/12 blur-3xl" />
          <div className="absolute top-40 left-10 h-[420px] w-[420px] rounded-full bg-indigo-500/12 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-slate-950/55" />
        </div>

        {children}

        {/* ✅ SEO Footer Internal Linking */}
        <footer className="mt-16 border-t border-slate-800 bg-slate-950/20">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <div className="text-sm font-semibold text-slate-100">
                  {SITE.name}
                </div>
                <p className="mt-2 text-sm text-slate-400">
                  Free YouTube tools for creators: thumbnails, titles,
                  timestamps, embeds and more.
                </p>
              </div>

              <div>
                <div className="text-sm font-semibold text-slate-100">Tools</div>
                <ul className="mt-2 space-y-2 text-sm text-slate-300">
                  <li><Link href="/tools/youtube-thumbnail">Thumbnail Downloader</Link></li>
                  <li><Link href="/tools/youtube-title">Title Generator</Link></li>
                  <li><Link href="/tools/youtube-timestamp">Timestamp Generator</Link></li>
                  <li><Link href="/tools/youtube-embed">Embed Generator</Link></li>
                  <li><Link href="/tools/youtube-hashtag">Hashtag Generator</Link></li>
                  <li><Link href="/tools">All Tools</Link></li>
                </ul>
              </div>

              <div>
                <div className="text-sm font-semibold text-slate-100">Pages</div>
                <ul className="mt-2 space-y-2 text-sm text-slate-300">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/tools">Tools</Link></li>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/terms">Terms</Link></li>
                  <li><Link href="/about">About</Link></li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-xs text-slate-500">
              © {year} {SITE.name}. All rights reserved.
            </div>
          </div>
        </footer>

        {/* ✅ ORGANIZATION SCHEMA (WITH LOGO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE.name,
              url: "https://yttoolspro.vercel.app",
              logo: "https://yttoolspro.vercel.app/logo.png",
              sameAs: [],
            }),
          }}
        />

        {/* ✅ WEBSITE + SEARCH ACTION SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SITE.name,
              url: "https://yttoolspro.vercel.app",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://yttoolspro.vercel.app/tools?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
