import type { Metadata } from "next";
import Link from "next/link";
import YouTubeTitleClient from "./YouTubeTitleClient";

const TITLE = "YouTube Title Generator (FREE) ⚡ Viral + SEO Titles – YTToolsPro";
const DESC =
  "Generate catchy YouTube titles in Hindi + English with Viral and SEO styles. Free YouTube title generator for creators and Shorts.";

const URL = "https://yttoolspro.vercel.app/tools/youtube-title";

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
    "youtube title generator",
    "viral youtube titles",
    "youtube seo title",
    "youtube shorts title",
    "hindi english youtube titles",
    "best title for youtube video",
    "catchy youtube title",
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

export default function YouTubeTitlePage() {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "YouTube Title Generator",
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    url: URL,
    description:
      "Free YouTube Title Generator to create viral and SEO optimized titles in Hindi and English.",
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
    name: "How to generate YouTube titles using YTToolsPro",
    description:
      "Step-by-step guide to generate viral and SEO-friendly YouTube titles in Hindi or English.",
    totalTime: "PT1M",
    supply: [],
    tool: [
      {
        "@type": "HowToTool",
        name: "YTToolsPro YouTube Title Generator",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Enter your topic",
        text: "Paste your video topic or keyword into the input box.",
      },
      {
        "@type": "HowToStep",
        name: "Choose a style",
        text: "Select Viral, SEO, Emotional, Question, or List style.",
      },
      {
        "@type": "HowToStep",
        name: "Generate titles",
        text: "Click generate to get multiple title ideas instantly.",
      },
      {
        "@type": "HowToStep",
        name: "Copy and use",
        text: "Copy your favorite title and paste it into YouTube.",
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
        name: "YouTube Title Generator",
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
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* ✅ Breadcrumb */}
      <nav className="text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-200">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-slate-200">
          Tools
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">YouTube Title Generator</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold text-slate-100">
        YouTube Title Generator
      </h1>

      <p className="mt-2 max-w-2xl text-slate-300">
        Enter your topic and instantly generate YouTube titles in Hindi or English.
        Choose Viral, SEO, Emotional, Question or List style to boost clicks and ranking.
      </p>

      <YouTubeTitleClient />

      {/* ✅ Internal Linking Block */}
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
            href="/tools/youtube-timestamp"
            className="rounded-2xl border border-slate-800 bg-slate-950/20 p-4 text-slate-100 hover:border-slate-600"
          >
            YouTube Timestamp Generator →
          </Link>

          <Link
            href="/tools/youtube-hashtag"
            className="rounded-2xl border border-slate-800 bg-slate-950/20 p-4 text-slate-100 hover:border-slate-600"
          >
            YouTube Hashtag Generator →
          </Link>
        </div>
      </section>

      {/* ✅ ADVANCED SCHEMA (WebApplication + HowTo + Breadcrumb + FAQ) */}
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
