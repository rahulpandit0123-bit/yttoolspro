import type { Metadata } from "next";
import Link from "next/link";
import YouTubeHashtagClient from "./YouTubeHashtagClient";

const TITLE = "YouTube Hashtag Generator (Shorts + Videos) – YTToolsPro";
const DESC =
  "Generate YouTube hashtags for Shorts and videos instantly. Paste a topic/keyword and get optimized hashtags. Free tool for creators in Hindi + English.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: {
    canonical: "https://yttoolspro.vercel.app/tools/youtube-hashtag",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "youtube hashtag generator",
    "hashtags for youtube shorts",
    "youtube shorts hashtags",
    "best hashtags for youtube",
    "youtube tags generator",
    "viral hashtags youtube",
    "hindi english hashtags",
  ],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: "https://yttoolspro.vercel.app/tools/youtube-hashtag",
    siteName: "YTToolsPro",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESC,
  },
};

export default function YouTubeHashtagPage() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this YouTube Hashtag Generator free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, this tool is completely free to use.",
        },
      },
      {
        "@type": "Question",
        name: "How many hashtags should I use on YouTube?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use a small set of relevant hashtags. Many creators use 3–15 focused hashtags depending on the content.",
        },
      },
      {
        "@type": "Question",
        name: "Does this work for YouTube Shorts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The generated hashtags can be used for Shorts and normal videos.",
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
        <span className="text-slate-200">YouTube Hashtag Generator</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold">YouTube Hashtag Generator</h1>
      <p className="mt-2 max-w-2xl text-slate-300">
        Type your topic (Hindi/English) and generate optimized hashtags for YouTube Shorts and videos. One-click copy.
      </p>

      <YouTubeHashtagClient />

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
