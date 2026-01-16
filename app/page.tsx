import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free YouTube Tools for Creators – Thumbnail, Embed, Timestamp | YTToolsPro",
  description:
    "YTToolsPro offers free YouTube tools for creators: download YouTube thumbnails in HD/4K, generate embed codes, and create timestamp links. Fast, simple, no login.",
};

const TOOLS = [
  {
    title: "YouTube Thumbnail Downloader",
    desc:
      "Get thumbnails in default, HQ, HD, and 4K quality from any public video or Shorts link.",
    href: "/tools/youtube-thumbnail",
    tag: "Most used",
  },
  {
    title: "YouTube Embed Code Generator",
    desc:
      "Generate responsive, privacy-friendly YouTube embed codes with optional start time.",
    href: "/tools/youtube-embed",
    tag: "For bloggers",
  },
  {
    title: "YouTube Timestamp Link Generator",
    desc:
      "Create shareable timestamp links (mm:ss) to highlight exact moments in a video.",
    href: "/tools/youtube-timestamp",
    tag: "For chapters",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/30 p-6 backdrop-blur sm:p-10">
        {/* background glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

        {/* top badges */}
        <div className="flex flex-wrap items-center gap-2">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs text-slate-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Fast • Free • No login
          </p>

          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs text-slate-200">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Works for Shorts + Videos
          </p>

          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs text-slate-200">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
            Creator-friendly UI
          </p>
        </div>

        {/* headline */}
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
          <span className="bg-gradient-to-r from-fuchsia-200 via-white to-cyan-200 bg-clip-text text-transparent">
            YouTube Tools
          </span>{" "}
          <span className="text-slate-100">that save you time</span>
        </h1>

        {/* sub text */}
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
          YTToolsPro helps YouTubers, editors, and bloggers with simple, fast, and free tools.
          Download thumbnails, generate embed codes, and create timestamp links — without login.
        </p>

        {/* CTA */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/tools"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-fuchsia-500/10 hover:opacity-95"
          >
            Explore All Tools →
          </Link>

          <Link
            href="/tools/youtube-thumbnail"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-slate-950/25 px-6 py-3 text-sm font-semibold text-slate-100 hover:bg-slate-950/35"
          >
            Try Thumbnail Downloader
          </Link>

          <Link
            href="/tools/youtube-timestamp"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-slate-950/25 px-6 py-3 text-sm font-semibold text-slate-100 hover:bg-slate-950/35"
          >
            Try Timestamp Tool
          </Link>
        </div>

        {/* trust / stats */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            { k: "HD/4K", v: "Thumbnail quality" },
            { k: "1-Click", v: "Copy & use output" },
            { k: "No Signup", v: "Instant access" },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-white/10 bg-slate-950/20 p-4"
            >
              <div className="text-lg font-extrabold text-slate-100">{s.k}</div>
              <div className="mt-1 text-sm text-slate-300">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-14 grid gap-6 md:grid-cols-3">
        {TOOLS.map((t) => (
          <div
            key={t.href}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur"
          >
            {/* hover glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-fuchsia-500/15 blur-2xl" />
              <div className="absolute -bottom-24 right-0 h-48 w-48 rounded-full bg-cyan-500/10 blur-2xl" />
            </div>

            <div className="relative flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold text-slate-100">{t.title}</h2>
              <span className="rounded-full border border-white/10 bg-slate-950/30 px-2.5 py-1 text-[11px] text-slate-200">
                {t.tag}
              </span>
            </div>

            <p className="relative mt-2 text-sm leading-relaxed text-slate-300">{t.desc}</p>

            <Link
              href={t.href}
              className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-100 hover:text-white"
            >
              Use tool <span aria-hidden>→</span>
            </Link>
          </div>
        ))}
      </section>

      {/* SEO TEXT BLOCK */}
      <section className="mt-16 rounded-3xl border border-white/10 bg-slate-900/30 p-8 backdrop-blur">
        <h2 className="text-2xl font-semibold text-slate-100">Why use YTToolsPro?</h2>

        <p className="mt-3 leading-relaxed text-slate-300">
          YTToolsPro is built for creators who want fast, reliable YouTube tools without unnecessary
          complexity. Our tools work with standard YouTube watch links, Shorts links, and youtu.be
          URLs. Whether you need a thumbnail image for design work, an embed code for your blog, or a
          timestamp link for sharing, YTToolsPro makes the process simple and efficient.
        </p>

        <ul className="mt-5 grid gap-2 text-slate-300 sm:grid-cols-2">
          {[
            "No account or login required",
            "Works on desktop and mobile",
            "Clean UI, no misleading downloads",
            "Optimized for creators and bloggers",
          ].map((x) => (
            <li key={x} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {x}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
