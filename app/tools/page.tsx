import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YouTube Tools (Free) – Thumbnail, Embed, Timestamp | YTToolsPro",
  description:
    "Explore free YouTube creator tools: YouTube Thumbnail Downloader, Embed Code Generator, Timestamp Link Generator, and Hashtag Generator. Fast, simple, and no login required.",
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
];

export default function ToolsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <Link href="/" className="text-sm text-slate-400 hover:text-slate-200">
        ← Home
      </Link>

      <h1 className="mt-4 text-3xl font-bold">Free YouTube Tools for Creators</h1>
      <p className="mt-2 max-w-3xl text-slate-300">
        Use these free tools to speed up your YouTube workflow. Copy thumbnail URLs,
        generate responsive embed codes, create timestamp links, and generate hashtags.
        No sign-up required.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {tools.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="block rounded-3xl border border-slate-800 bg-slate-900/30 p-5 hover:border-slate-600 transition"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xl font-semibold">{t.title}</div>
                <div className="mt-2 text-sm text-slate-300">{t.desc}</div>
              </div>
              <span className="shrink-0 rounded-full border border-slate-700 bg-slate-950/40 px-3 py-1 text-xs text-slate-200">
                {t.badge}
              </span>
            </div>

            <div className="mt-4 text-sm font-semibold text-white">
              Open tool →
            </div>
          </Link>
        ))}
      </div>

      {/* SEO text block */}
      <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/20 p-6">
        <h2 className="text-xl font-semibold">What you can do with YTToolsPro</h2>
        <p className="mt-3 text-slate-300">
          YTToolsPro is a collection of simple, fast YouTube utilities made for creators,
          editors, and bloggers. You can grab YouTube thumbnail images in multiple sizes,
          generate privacy-friendly embed codes, create timestamp links, and generate
          optimized hashtags for YouTube Shorts and videos.
        </p>
      </section>
    </main>
  );
}
