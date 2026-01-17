import type { Metadata } from "next";
import Link from "next/link";
import YouTubeTimestampClient from "./YouTubeTimestampClient";

const TITLE = "YouTube Timestamp Generator (FREE) ⏱ Create Chapters – YTToolsPro";
const DESC =
  "Create YouTube timestamp links and chapters easily. Convert mm:ss into shareable YouTube time links. Free tool for creators and editors.";

const URL = "https://yttoolspro.vercel.app/tools/youtube-timestamp";

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
    "youtube timestamp generator",
    "youtube chapters generator",
    "youtube timestamp link",
    "youtube time link",
    "timestamp url youtube",
    "youtube share link with time",
    "youtu.be t link",
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

export default function YouTubeTimestampPage() {
  /* ---------- SCHEMAS ---------- */

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "YouTube Timestamp Generator",
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    url: URL,
    description:
      "Free YouTube Timestamp Generator to create clickable timestamp links and video chapters.",
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
    name: "How to create YouTube timestamps and chapters",
    description:
      "Step-by-step guide to generate YouTube timestamp links and chapters using YTToolsPro.",
    totalTime: "PT1M",
    tool: [
      {
        "@type": "HowToTool",
        name: "YTToolsPro YouTube Timestamp Generator",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Paste video link",
        text: "Paste your YouTube video URL into the input box.",
      },
      {
        "@type": "HowToStep",
        name: "Add timestamps",
        text: "Enter timestamps in mm:ss format like 0:00 Intro, 1:25 Tips.",
      },
      {
        "@type": "HowToStep",
        name: "Generate output",
        text: "Click generate to create shareable timestamp links and chapter format.",
      },
      {
        "@type": "HowToStep",
        name: "Copy and use",
        text: "Copy the result and paste it into YouTube description or share it.",
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
        name: "YouTube Timestamp Generator",
        item: URL,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this YouTube Timestamp Generator free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, this YouTube Timestamp Generator is completely free to use.",
        },
      },
      {
        "@type": "Question",
        name: "How do I create YouTube chapters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Paste your YouTube link, add timestamps like 0:00 Intro and copy the generated chapter format.",
        },
      },
      {
        "@type": "Question",
        name: "Does this tool support Shorts and youtu.be links?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. It supports YouTube watch URLs, Shorts links, and youtu.be short links.",
        },
      },
    ],
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* ✅ Breadcrumb UI */}
      <nav className="text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-200">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-slate-200">
          Tools
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">YouTube Timestamp Generator</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold text-slate-100">
        YouTube Timestamp Generator
      </h1>

      <p className="mt-2 max-w-2xl text-slate-300">
        Paste your YouTube link and add timestamps (mm:ss) to generate clickable
        time links and video chapters instantly.
      </p>

      {/* TOOL UI */}
      <YouTubeTimestampClient />

      {/* ✅ Internal Linking */}
      <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/30 p-5">
        <h2 className="text-lg font-semibold text-slate-100">
          Try More YouTube Tools
        </h2>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Link
            href="/tools/youtube-thumbnail"
            className="rounded-2xl border border-slate-800 bg-slate-950/20 p-4 text-slate-100 hover:border-slate-600"
          >
            YouTube Thumbnail Downloader →
          </Link>

          <Link
            href="/tools/youtube-embed"
            className="rounded-2xl border border-slate-800 bg-slate-950/20 p-4 text-slate-100 hover:border-slate-600"
          >
            YouTube Embed Code Generator →
          </Link>

          <Link
            href="/tools/youtube-hashtag"
            className="rounded-2xl border border-slate-800 bg-slate-950/20 p-4 text-slate-100 hover:border-slate-600"
          >
            YouTube Hashtag Generator →
          </Link>

          <Link
            href="/tools/youtube-title"
            className="rounded-2xl border border-slate-800 bg-slate-950/20 p-4 text-slate-100 hover:border-slate-600"
          >
            YouTube Title Generator →
          </Link>
        </div>
      </section>

      {/* ✅ ADVANCED SEO SCHEMA */}
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
