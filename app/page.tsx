import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free YouTube Tools for Creators – Thumbnail, Embed, Timestamp | YTToolsPro",
  description:
    "YTToolsPro offers free YouTube tools for creators: download YouTube thumbnails in HD/4K, generate embed codes, and create timestamp links. Fast, simple, no login.",
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      {/* HERO */}
      <section>
        <h1 className="text-4xl font-bold">
          Free YouTube Tools for Creators
        </h1>
        <p className="mt-3 max-w-3xl text-slate-300">
          YTToolsPro helps YouTubers, editors, and bloggers save time with simple,
          fast, and free tools. Download YouTube thumbnails, generate embed codes,
          and create timestamp links — no login required.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/tools"
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950"
          >
            Explore YouTube Tools →
          </Link>
          <Link
            href="/tools/youtube-thumbnail"
            className="rounded-xl border border-slate-700 px-5 py-3 text-sm"
          >
            Thumbnail Downloader
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/30 p-6">
          <h2 className="text-lg font-semibold">YouTube Thumbnail Downloader</h2>
          <p className="mt-2 text-sm text-slate-300">
            Get YouTube thumbnails in default, HQ, HD, and 4K quality from any
            public video or Shorts link.
          </p>
          <Link
            href="/tools/youtube-thumbnail"
            className="mt-4 inline-block text-sm font-semibold text-white"
          >
            Use tool →
          </Link>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/30 p-6">
          <h2 className="text-lg font-semibold">YouTube Embed Code Generator</h2>
          <p className="mt-2 text-sm text-slate-300">
            Generate responsive, privacy-friendly YouTube embed codes with optional
            start time for blogs and websites.
          </p>
          <Link
            href="/tools/youtube-embed"
            className="mt-4 inline-block text-sm font-semibold text-white"
          >
            Use tool →
          </Link>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/30 p-6">
          <h2 className="text-lg font-semibold">YouTube Timestamp Link Generator</h2>
          <p className="mt-2 text-sm text-slate-300">
            Create shareable timestamp links (mm:ss) to highlight exact moments
            in YouTube videos.
          </p>
          <Link
            href="/tools/youtube-timestamp"
            className="mt-4 inline-block text-sm font-semibold text-white"
          >
            Use tool →
          </Link>
        </div>
      </section>

      {/* SEO TEXT BLOCK */}
      <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/20 p-8">
        <h2 className="text-2xl font-semibold">
          Why use YTToolsPro?
        </h2>
        <p className="mt-3 text-slate-300">
          YTToolsPro is built for creators who want fast, reliable YouTube tools
          without unnecessary complexity. Our tools work with standard YouTube
          watch links, Shorts links, and youtu.be URLs. Whether you need a thumbnail
          image for design work, an embed code for your blog, or a timestamp link
          for sharing, YTToolsPro makes the process simple and efficient.
        </p>

        <ul className="mt-4 list-disc pl-6 text-slate-300">
          <li>No account or login required</li>
          <li>Works on desktop and mobile</li>
          <li>Clean UI, no misleading downloads</li>
          <li>Optimized for creators and bloggers</li>
        </ul>
      </section>
    </main>
  );
}
