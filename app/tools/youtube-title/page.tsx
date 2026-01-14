import type { Metadata } from "next";
import Link from "next/link";
import YouTubeTitleClient from "./YouTubeTitleClient";

export const metadata: Metadata = {
  title: "YouTube Title Generator (Viral + SEO) – YTToolsPro",
  description:
    "Generate catchy YouTube titles in Hindi + English with Viral/SEO styles. Free YouTube title generator for creators and Shorts.",
};

export default function YouTubeTitlePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <Link href="/tools" className="text-sm text-slate-400 hover:text-slate-200">
        ← Tools
      </Link>

      <h1 className="mt-4 text-3xl font-bold">YouTube Title Generator</h1>
      <p className="mt-2 max-w-2xl text-slate-300">
        Enter your topic and generate YouTube titles in Hindi or English. Pick a style
        like Viral, SEO, Emotional, Question, or List.
      </p>

      <YouTubeTitleClient />

      {/* ✅ FAQ Schema for SEO (Google Rich Results) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is this YouTube Title Generator free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, this YouTube Title Generator is completely free to use.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use these titles for YouTube Shorts?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The generated titles work for both YouTube Shorts and normal videos.",
                },
              },
              {
                "@type": "Question",
                name: "Which languages are supported?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can generate titles in Hindi and English.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
