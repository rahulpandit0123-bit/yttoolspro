import type { Metadata } from "next";
import Link from "next/link";
import YouTubeEmbedClient from "./YouTubeEmbedClient";

export const metadata: Metadata = {
  title: "YouTube Embed Code Generator (Responsive, No-Cookie) – YTToolsPro",
  description:
    "Generate responsive, privacy-friendly YouTube embed code (nocookie) with optional start time. Free embed generator for creators & bloggers.",
};

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

      {/* ✅ Internal links (Google ko help hota hai) */}
      <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/30 p-5">
        <div className="text-sm text-slate-300">Try other tools:</div>
        <div className="mt-2 flex flex-wrap gap-3 text-sm">
          <Link className="underline hover:text-slate-200" href="/tools/youtube-thumbnail">
            Thumbnail Downloader
          </Link>
          <Link className="underline hover:text-slate-200" href="/tools/youtube-timestamp">
            Timestamp Generator
          </Link>
          <Link className="underline hover:text-slate-200" href="/tools/youtube-hashtag">
            Hashtag Generator
          </Link>
          <Link className="underline hover:text-slate-200" href="/tools/youtube-title">
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
