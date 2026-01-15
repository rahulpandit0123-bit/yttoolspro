import type { Metadata } from "next";
import Link from "next/link";
import ToolsClient from "./ToolsClient";

export const metadata: Metadata = {
  title: "YouTube Tools (Free) – Thumbnail, Embed, Timestamp | YTToolsPro",
  description:
    "Explore free YouTube creator tools: YouTube Thumbnail Downloader, Embed Code Generator, Timestamp Link Generator, Hashtag Generator, and Title Generator. Fast, simple, and no login required.",
};

const tools = [
  {
    title: "YouTube Thumbnail Downloader",
    desc: "Get all thumbnail sizes (Default, HQ, HD/4K) instantly from any YouTube link.",
    href: "/tools/youtube-thumbnail",
    badge: "Most searched",
  },
  {
    title: "YouTube Embed Code Generator",
    desc: "Generate privacy-friendly, responsive YouTube embed code with optional start time.",
    href: "/tools/youtube-embed",
    badge: "Bloggers",
  },
  {
    title: "YouTube Timestamp Link Generator",
    desc: "Create shareable timestamp links (mm:ss) for YouTube videos in seconds.",
    href: "/tools/youtube-timestamp",
    badge: "Creators",
  },
  {
    title: "YouTube Hashtag Generator",
    desc: "Generate optimized hashtags for Shorts and videos (Hindi + English). One-click copy.",
    href: "/tools/youtube-hashtag",
    badge: "High traffic",
  },
  {
    title: "YouTube Title Generator",
    desc: "Generate catchy YouTube titles (Hindi + English) with Viral/SEO styles. One-click copy.",
    href: "/tools/youtube-title",
    badge: "High traffic",
  },
];

export default function ToolsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-200">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">Tools</span>
      </nav>

      {/* ✅ Attractive UI (search + filters + cards) */}
      <ToolsClient tools={tools} />

      {/* ✅ Extra SEO text (helps Google understand the page) */}
      <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/20 p-6">
        <h2 className="text-xl font-semibold">Free YouTube Tools by YTToolsPro</h2>
        <p className="mt-3 text-slate-300">
          YTToolsPro is a collection of fast, free YouTube utilities made for creators (Hindi + English).
          Use these tools to download YouTube thumbnails, generate embed codes, create timestamp links,
          and generate hashtags & titles for Shorts and videos.
        </p>

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
    </main>
  );
}
