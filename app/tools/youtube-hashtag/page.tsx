import type { Metadata } from "next";
import Link from "next/link";
import YouTubeHashtagClient from "./YouTubeHashtagClient";

export const metadata: Metadata = {
  title: "YouTube Hashtag Generator (Shorts + Videos) – YTToolsPro",
  description:
    "Generate YouTube hashtags for Shorts and videos instantly. Paste a topic/keyword and get optimized hashtags. Free tool for creators in Hindi + English.",
};

export default function YouTubeHashtagPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <Link href="/tools" className="text-sm text-slate-400 hover:text-slate-200">
        ← Tools
      </Link>

      <h1 className="mt-4 text-3xl font-bold">YouTube Hashtag Generator</h1>
      <p className="mt-2 max-w-2xl text-slate-300">
        Type your topic (Hindi/English) and generate optimized hashtags for YouTube
        Shorts and videos. One-click copy.
      </p>

      <YouTubeHashtagClient />

      {/* ✅ FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is this YouTube Hashtag Generator free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, this tool is completely free to use.",
                },
              },
              {
                "@type": "Question",
                name: "How many hashtags should I use on YouTube?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use a small set of relevant hashtags. Many creators use 3–15 focused hashtags depending on the content.",
                },
              },
              {
                "@type": "Question",
                name: "Does this work for YouTube Shorts?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The generated hashtags can be used for Shorts and normal videos.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
