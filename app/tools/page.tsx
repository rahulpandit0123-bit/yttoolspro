import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YouTube Tools (Free) – Thumbnail, Embed, Timestamp | YTToolsPro",
  description:
    "Free YouTube creator tools (Hindi + English): download thumbnails, generate embed codes, create timestamp links, hashtags and titles. Fast, clean UI, no login.",
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
] as const;

function Badge({ text }: { text: string }) {
  const cls =
    text === "Most searched"
      ? "bg-fuchsia-500/15 text-fuchsia-200 ring-fuchsia-500/20"
      : text === "Bloggers"
        ? "bg-cyan-500/15 text-cyan-200 ring-cyan-500/20"
        : text === "Creators"
          ? "bg-indigo-500/15 text-indigo-200 ring-indigo-500/20"
          : "bg-emerald-500/15 text-emerald-200 ring-emerald-500/20";

  return (
    <span
      className={
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 " +
        cls
      }
    >
      {text}
    </span>
  );
}

export default function ToolsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10">
      {/* breadcrumb */}
      <nav className="text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-200">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">Tools</span>
      </nav>

      {/* hero */}
      <section className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              <span className="bg-gradient-to-r from-fuchsia-200 via-indigo-200 to-cyan-200 bg-clip-text text-transparent">
                Free YouTube Tools
              </span>{" "}
              <span className="text-slate-100">for Creators</span>
            </h1>
            <p className="mt-3 text-slate-300">
              Fast, simple tools (Hindi + English). No login. One-click copy.
              Clean & SEO-friendly output.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800/60 px-3 py-1 text-xs text-slate-200 ring-1 ring-slate-700">
                {tools.length} tools
              </span>
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-200 ring-1 ring-indigo-500/20">
                Hindi + English
              </span>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200 ring-1 ring-emerald-500/20">
                100% free
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={tools[0].href}
              className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-100"
            >
              Start with Thumbnail →
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-900/40"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* cards */}
      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {tools.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/30 p-6 shadow-[0_0_0_1px_rgba(148,163,184,0.06)] backdrop-blur transition hover:border-slate-700 hover:bg-slate-900/45"
          >
            {/* hover glow */}
            <div className="pointer-events-none absolute -inset-20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100">
              <div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-fuchsia-500/15" />
              <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-cyan-500/10" />
            </div>

            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold leading-snug text-slate-100">
                  {t.title}
                </h2>
                {t.badge ? <Badge text={t.badge} /> : null}
              </div>

              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {t.desc}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-200">
                Open tool
                <span className="transition group-hover:translate-x-1">→</span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* trust */}
      <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/20 p-6 text-sm text-slate-300 backdrop-blur">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>
            Built for creators: fast tools, clean UI, no misleading downloads, and
            privacy-friendly output.
          </p>
          <p className="text-slate-400">
            Tip: Add this page to bookmarks — all tools are here.
          </p>
        </div>
      </section>
    </main>
  );
}
