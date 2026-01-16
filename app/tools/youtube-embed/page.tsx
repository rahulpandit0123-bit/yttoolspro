import type { Metadata } from "next";
import Link from "next/link";
import YouTubeEmbedClient from "./YouTubeEmbedClient";

export const metadata: Metadata = {
  title: "YouTube Embed Code Generator (Responsive, No-Cookie) – YTToolsPro",
  description:
    "Generate responsive, privacy-friendly YouTube embed code (nocookie) with optional start time. Free embed generator for creators & bloggers.",
};

const pillLink =
  "rounded-full border border-slate-800 bg-slate-950/40 px-3 py-2 text-sm text-slate-200 " +
  "hover:bg-slate-900/60 hover:text-white transition " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60";

export default function YouTubeEmbedPage() {
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
        <span className="text-slate-200">YouTube Embed Code Generator</span>
      </nav>

      {/* ✅ Main Tool UI */}
      <div className="mt-6">
        <YouTubeEmbedClient />
      </div>

      {/* ✅ Internal links (SEO) */}
      <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/30 p-5">
        <div className="text-sm font-medium text-slate-300">Try more tools</div>

        <div className="mt-3 flex flex-wrap gap-2">
          <Link className={pillLink} href="/tools/youtube-thumbnail">
            Thumbnail Downloader
          </Link>
          <Link className={pillLink} href="/tools/youtube-timestamp">
            Timestamp Generator
          </Link>
          <Link className={pillLink} href="/tools/youtube-hashtag">
            Hashtag Generator
          </Link>
          <Link className={pillLink} href="/tools/youtube-title">
            Title Generator
          </Link>
        </div>
      </div>

      {/* ✅ FAQ Schema (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is this YouTube embed code generator free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, this YouTube embed code generator is completely free to use.",
                },
              },
              {
                "@type": "Question",
                name: "Does it create privacy-friendly embeds?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. It generates YouTube nocookie (privacy-enhanced) embed code.",
                },
              },
              {
                "@type": "Question",
                name: "Can I start the video at a specific time?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. You can add an optional start time (mm:ss) and the embed will start from that timestamp.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
