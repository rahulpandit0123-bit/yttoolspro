import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YouTube Tools — YTToolsPro",
  description:
    "Free YouTube tools for creators: Thumbnail Downloader, Embed Code Generator, Timestamp Link Generator, Hashtag Generator, Title Generator.",
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
      <Link href="/" className="text-sm text-slate-400 hover:text-slate-200">
        ← Home
      </Link>

      <h1 className="mt-4 text-3xl font-bold">All YouTube Tools</h1>
      <p className="mt-2 max-w-2xl text-slate-300">
        Fast, free tools for YouTube creators (Hindi + English).
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {tools.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="rounded-3xl border border-slate-800 bg-slate-900/30 p-5 hover:border-slate-600"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="text-lg font-semibold">{t.title}</div>
              {t.badge ? (
                <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-200">
                  {t.badge}
                </span>
              ) : null}
            </div>

            <p className="mt-2 text-sm text-slate-300">{t.desc}</p>
            <div className="mt-4 text-sm font-semibold text-white">
              Use tool →
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
