import type { Metadata } from "next";
import Link from "next/link";
import YouTubeTitleClient from "./YouTubeTitleClient";

const TITLE = "YouTube Title Generator (Viral + SEO) – YTToolsPro";
const DESC =
  "Generate catchy YouTube titles in Hindi + English with Viral/SEO styles. Free YouTube title generator for creators and Shorts.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: {
    canonical: "https://yttoolspro.vercel.app/tools/youtube-title",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "youtube title generator",
    "viral youtube titles",
    "youtube seo title",
    "youtube shorts title",
    "hindi english youtube titles",
    "best title for youtube video",
    "catchy youtube title",
  ],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: "https://yttoolspro.vercel.app/tools/youtube-title",
    siteName: "YTToolsPro",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESC,
  },
};

export default function YouTubeTitlePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* ✅ Breadcrumb (Home / Tools / This Page) */}
      <nav className="text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-200">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-slate-200">
          Tools
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">YouTube Title Generator</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold">YouTube Title Generator</h1>
      <p className="mt-2 max-w-2xl text-slate-300">
        Enter your topic and generate YouTube titles in Hindi or English. Pick a style like
        Viral, SEO, Emotional, Question, or List.
      </p>

      <YouTubeTitleClient />

      {/* ✅ Try More Tools (Internal Links for SEO + Traffic) */}
      <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/30 p-5">
        <h2 className="text-lg font-semibold">Try More Tools</h2>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Link
            href="/tools/youtube-thumbnail"
            className="rounded-2xl border border-slate-800 bg-slate-950/20 p-4 hover:border-slate-600"
          >
            YouTube Thumbnail Downloader →
          </Link>

          <Link
            href="/tools/youtube-embed"
            className="rounded-2xl border border-slate-800 bg-slate-950/20 p-4 hover:border-slate-600"
          >
            YouTube Embed Code Generator →
          </Link>

          <Link
            href="/tools/youtube-timestamp"
            className="rounded-2xl border border-slate-800 bg-slate-950/20 p-4 hover:border-slate-600"
          >
            YouTube Timestamp Link Generator →
          </Link>

          <Link
            href="/tools/youtube-hashtag"
            className="rounded-2xl border border-slate-800 bg-slate-950/20 p-4 hover:border-slate-600"
          >
            YouTube Hashtag Generator →
          </Link>
        </div>
      </section>

      {/* ✅ FAQ Schema for SEO (Google Rich Results) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is this YouTube Title Generator free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, this YouTube Title Generator is completely free to use.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use these titles for YouTube Shorts?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The generated titles work for both YouTube Shorts and normal videos.",
                },
              },
              {
                "@type": "Question",
                name: "Which languages are supported?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can generate titles in Hindi and English.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
