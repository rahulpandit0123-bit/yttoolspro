import type { Metadata } from "next";
import Link from "next/link";
import YouTubeHashtagClient from "./YouTubeHashtagClient";

const TITLE = "YouTube Hashtag Generator (Shorts + Videos) – YTToolsPro";
const DESC =
  "Generate YouTube hashtags for Shorts and videos instantly. Paste a topic/keyword and get optimized hashtags. Free tool for creators in Hindi + English.";

const URL = "https://yttoolspro.vercel.app/tools/youtube-hashtag";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: {
    canonical: URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "youtube hashtag generator",
    "hashtags for youtube shorts",
    "youtube shorts hashtags",
    "best hashtags for youtube",
    "youtube tags generator",
    "viral hashtags youtube",
    "hindi english hashtags",
  ],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    siteName: "YTToolsPro",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESC,
  },
};

export default function YouTubeHashtagPage() {
  /* ---------------- FAQ (keep) ---------------- */
  const faqSchema = {
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
  };

  /* ------------- Advanced schemas ------------- */
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "YouTube Hashtag Generator",
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    url: URL,
    description:
      "Free YouTube Hashtag Generator for Shorts and videos. Create optimized hashtags in Hindi and English.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: {
      "@type": "Organization",
      name: "YTToolsPro",
      url: "https://yttoolspro.vercel.app",
      logo: "https://yttoolspro.vercel.app/logo.png",
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to generate YouTube hashtags for Shorts and videos",
    description:
      "Step-by-step guide to generate YouTube hashtags using YTToolsPro in Hindi or English.",
    totalTime: "PT1M",
    tool: [
      {
        "@type": "HowToTool",
        name: "YTToolsPro YouTube Hashtag Generator",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Enter your topic",
        text: "Type your video topic/keyword (Hindi or English) in the input box.",
      },
      {
        "@type": "HowToStep",
        name: "Generate hashtags",
        text: "Click generate to get optimized hashtags for YouTube Shorts and videos.",
      },
      {
        "@type": "HowToStep",
        name: "Copy hashtags",
        text: "Copy all hashtags with one click and paste into YouTube title/description.",
      },
      {
        "@type": "HowToStep",
        name: "Use best set",
        text: "Use 3–15 relevant hashtags for best results and avoid spammy tags.",
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://yttoolspro.vercel.app/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: "https://yttoolspro.vercel.app/tools",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "YouTube Hashtag Generator",
        item: URL,
      },
    ],
  };

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
        <span className="text-slate-200">YouTube Hashtag Generator</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold">YouTube Hashtag Generator</h1>
      <p className="mt-2 max-w-2xl text-slate-300">
        Type your topic (Hindi/English) and generate optimized hashtags for YouTube Shorts and videos. One-click copy.
      </p>

      <YouTubeHashtagClient />

      {/* ✅ Try More Tools (Internal Links for SEO + Traffic) */}
      <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/30 p-5">
        <h2 className="text-lg font-semibold">Try More Tools</h2>

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
            href="/tools/youtube-title"
            className="rounded-2xl border border-slate-800 bg-slate-950/20 p-4 hover:border-slate-600"
          >
            YouTube Title Generator →
          </Link>
        </div>
      </section>

      {/* ✅ ADVANCED SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
