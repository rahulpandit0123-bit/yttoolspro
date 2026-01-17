import type { Metadata } from "next";
import Link from "next/link";
import YouTubeEmbedClient from "./YouTubeEmbedClient";

const TITLE = "YouTube Embed Code Generator (Responsive, No-Cookie) – YTToolsPro";
const DESC =
  "Generate responsive, privacy-friendly YouTube embed code (nocookie) with optional start time. Free embed generator for creators & bloggers.";

const URL = "https://yttoolspro.vercel.app/tools/youtube-embed";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  keywords: [
    "youtube embed code generator",
    "youtube nocookie embed",
    "privacy friendly youtube embed",
    "responsive youtube iframe",
    "youtube embed start time",
    "youtube iframe generator",
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

const pillLink =
  "rounded-full border border-slate-800 bg-slate-950/40 px-3 py-2 text-sm text-slate-200 " +
  "hover:bg-slate-900/60 hover:text-white transition " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60";

export default function YouTubeEmbedPage() {
  /* ---------------- Advanced schemas ---------------- */

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "YouTube Embed Code Generator",
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    url: URL,
    description:
      "Free YouTube Embed Code Generator to create responsive, privacy-friendly nocookie iframe embeds with optional start time.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
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
    name: "How to generate a YouTube embed code (nocookie, responsive)",
    description:
      "Step-by-step guide to create a responsive YouTube nocookie embed code with optional start time using YTToolsPro.",
    totalTime: "PT1M",
    tool: [{ "@type": "HowToTool", name: "YTToolsPro YouTube Embed Generator" }],
    step: [
      {
        "@type": "HowToStep",
        name: "Paste video link",
        text: "Paste your YouTube video URL (watch link, Shorts link, or youtu.be).",
      },
      {
        "@type": "HowToStep",
        name: "Optional start time",
        text: "Add an optional start time in mm:ss if you want the embedded video to start later.",
      },
      {
        "@type": "HowToStep",
        name: "Generate embed code",
        text: "Click generate to create a responsive iframe embed code using YouTube nocookie domain.",
      },
      {
        "@type": "HowToStep",
        name: "Copy and paste",
        text: "Copy the embed code and paste it into your website or blog HTML.",
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
        name: "YouTube Embed Code Generator",
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

      {/* ✅ ADVANCED SCHEMA (WebApp + HowTo + Breadcrumb + FAQ) */}
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
