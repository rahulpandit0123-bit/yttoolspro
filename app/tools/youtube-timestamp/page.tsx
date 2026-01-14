import type { Metadata } from "next";
import Link from "next/link";
import YouTubeTimestampClient from "./YouTubeTimestampClient";

export const metadata: Metadata = {
  title: "YouTube Timestamp Link Generator (mm:ss) – YTToolsPro",
  description:
    "Create YouTube timestamp links in seconds. Convert mm:ss into shareable YouTube time links. Free tool for creators and editors.",
};

export default function YouTubeTimestampPage() {
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
    </main>
  );
}
