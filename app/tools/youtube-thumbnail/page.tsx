import type { Metadata } from "next";
import Link from "next/link";
import YouTubeThumbnailClient from "./YouTubeThumbnailClient";

export const metadata: Metadata = {
  title: "YouTube Thumbnail Downloader (HD, HQ, 4K) – YTToolsPro",
  description:
    "Download YouTube thumbnails in HD, HQ & 4K quality. Free YouTube thumbnail downloader tool for creators. No login required.",
};

export default function YouTubeThumbnailPage() {
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
        <span className="text-slate-200">YouTube Thumbnail Downloader</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold">YouTube Thumbnail Viewer</h1>
      <p className="mt-2 max-w-2xl text-slate-300">
        Paste any YouTube video link and get all thumbnail sizes instantly.
      </p>

      <YouTubeThumbnailClient />

      {/* ✅ Try More Tools (Internal Links for SEO + Traffic) */}
      <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/30 p-5">
        <h2 className="text-lg font-semibold">Try More Tools</h2>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
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

          <Link
            href="/tools/youtube-title"
            className="rounded-2xl border border-slate-800 bg-slate-950/20 p-4 hover:border-slate-600"
          >
            YouTube Title Generator →
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
                name: "Is this YouTube Thumbnail Viewer free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, this YouTube Thumbnail Viewer is completely free to use for all public YouTube videos.",
                },
              },
              {
                "@type": "Question",
                name: "Can I download YouTube videos using this tool?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. This tool does not download YouTube videos. It only shows publicly available thumbnail image URLs.",
                },
              },
              {
                "@type": "Question",
                name: "Which YouTube links are supported?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "YouTube watch links, Shorts links, and youtu.be short links are supported.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
