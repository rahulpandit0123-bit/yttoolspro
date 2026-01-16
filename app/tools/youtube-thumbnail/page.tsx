import type { Metadata } from "next";
import Link from "next/link";
import YouTubeThumbnailClient from "./YouTubeThumbnailClient";

const TITLE = "YouTube Thumbnail Downloader (HD/4K) 📸 Free Tool – YTToolsPro";
const DESC =
  "Download YouTube thumbnails in HD, HQ & 4K quality. Free YouTube thumbnail downloader tool for creators (Videos + Shorts).";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: {
    canonical: "https://yttoolspro.vercel.app/tools/youtube-thumbnail",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "youtube thumbnail downloader",
    "youtube thumbnail download",
    "download youtube thumbnail",
    "youtube thumbnail hd",
    "youtube thumbnail 4k",
    "yt thumbnail downloader",
    "youtube shorts thumbnail",
  ],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: "https://yttoolspro.vercel.app/tools/youtube-thumbnail",
    siteName: "YTToolsPro",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESC,
  },
};

export default function Page() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this YouTube Thumbnail Downloader free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, this YouTube Thumbnail Downloader is completely free to use for public YouTube videos and Shorts.",
        },
      },
      {
        "@type": "Question",
        name: "Which thumbnail qualities can I download?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can get Default, MQ, HQ, SD, and Max Resolution (HD/4K) thumbnails depending on availability.",
        },
      },
      {
        "@type": "Question",
        name: "Does this tool download YouTube videos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. This tool only provides publicly available thumbnail image URLs. It does not download videos.",
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
        <span className="text-slate-200">YouTube Thumbnail Downloader</span>
      </nav>

      {/* ✅ SEO H1 */}
      <h1 className="mt-4 text-3xl font-bold text-slate-100">
        YouTube Thumbnail Downloader (HD, HQ, 4K)
      </h1>

      {/* ✅ SEO description */}
      <p className="mt-2 max-w-2xl text-slate-300">
        Download YouTube thumbnails in Default, HQ, HD &amp; 4K quality — fast and
        free. Paste any YouTube video/Shorts link to get all thumbnail sizes.
      </p>

      {/* ✅ Quick benefits */}
      <ul className="mt-4 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
        <li>✅ Supports YouTube watch links, Shorts, youtu.be</li>
        <li>✅ One-click copy thumbnail URL</li>
        <li>✅ Works on mobile + desktop</li>
        <li>✅ No login required</li>
      </ul>

      <div className="mt-8">
        <YouTubeThumbnailClient />
      </div>

      {/* ✅ Internal links */}
      <div className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/30 p-6">
        <h2 className="text-xl font-bold text-slate-100">Try More Tools</h2>
        <p className="mt-2 text-slate-300">More free YouTube tools for creators:</p>

        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/tools/youtube-embed"
            className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-100 hover:border-slate-500"
          >
            YouTube Embed Generator
          </Link>
          <Link
            href="/tools/youtube-timestamp"
            className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-100 hover:border-slate-500"
          >
            YouTube Timestamp Generator
          </Link>
          <Link
            href="/tools/youtube-hashtag"
            className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-100 hover:border-slate-500"
          >
            YouTube Hashtag Generator
          </Link>
          <Link
            href="/tools/youtube-title"
            className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-100 hover:border-slate-500"
          >
            YouTube Title Generator
          </Link>
        </div>
      </div>

      {/* ✅ Visible FAQ */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-slate-100">FAQ</h2>
        <div className="mt-4 space-y-4 text-slate-300">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-4">
            <div className="font-semibold">Is this free?</div>
            <p className="mt-1 text-sm">
              Yes, it’s completely free for public YouTube videos and Shorts.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-4">
            <div className="font-semibold">Which qualities are available?</div>
            <p className="mt-1 text-sm">
              Default, MQ, HQ, SD, and Max Resolution (HD/4K) — based on the video.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-4">
            <div className="font-semibold">Does it download videos?</div>
            <p className="mt-1 text-sm">
              No. It only shows thumbnail image URLs (publicly available).
            </p>
          </div>
        </div>
      </section>

      {/* ✅ SOFTWARE TOOL SCHEMA (MAIN SEO BOOST) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "YouTube Thumbnail Downloader",
            applicationCategory: "WebApplication",
            operatingSystem: "All",
            url: "https://yttoolspro.vercel.app/tools/youtube-thumbnail",
            description:
              "Free YouTube Thumbnail Downloader to get HD/4K thumbnail image URLs for videos and Shorts.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />

      {/* ✅ FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </main>
  );
}
