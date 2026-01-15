import type { Metadata } from "next";
import Link from "next/link";
import YouTubeTimestampClient from "./YouTubeTimestampClient";

const TITLE = "YouTube Timestamp Link Generator (mm:ss) – YTToolsPro";
const DESC =
  "Create YouTube timestamp links in seconds. Convert mm:ss into shareable YouTube time links. Free tool for creators and editors.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: {
    canonical: "https://yttoolspro.vercel.app/tools/youtube-timestamp",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "youtube timestamp link generator",
    "youtube timestamp",
    "youtube time link",
    "timestamp url youtube",
    "youtube share link with time",
    "youtu.be t link",
  ],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: "https://yttoolspro.vercel.app/tools/youtube-timestamp",
    siteName: "YTToolsPro",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESC,
  },
};

export default function YouTubeTimestampPage() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this YouTube Timestamp Link Generator free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, this YouTube Timestamp Link Generator is completely free to use.",
        },
      },
      {
        "@type": "Question",
        name: "How do I create a timestamp link for YouTube?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Paste your YouTube link, enter time like 2:35, and copy the generated share link.",
        },
      },
      {
        "@type": "Question",
        name: "Does it support Shorts and youtu.be links?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. It supports YouTube watch links, Shorts links, and youtu.be short links.",
        },
      },
    ],
  };

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
        <span className="text-slate-200">YouTube Timestamp Link Generator</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold">YouTube Timestamp Link Generator</h1>
      <p className="mt-2 max-w-2xl text-slate-300">
        Paste a YouTube link and enter time (mm:ss). Get a shareable timestamp link instantly.
      </p>

      <YouTubeTimestampClient />

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
            href="/tools/youtube-hashtag"
            className="rounded-2xl border border-slate-800 bg-slate-950/20 p-4 hover:border-slate-600"
          >
            YouTube Hashtag Generator →
          </Link>

          <Link
            href="/tools/youtube-title"
            className="rounded-2xl border border-slate-800 bg-slate-950/20 p-4 hover:border-slate-600"
          >
            YouTube Title Generator →
          </Link>
        </div>
      </section>

      {/* ✅ FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </main>
  );
}
