"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

function getVideoId(input: string) {
  try {
    const s = input.trim();
    if (!s) return null;

    const u = new URL(/^https?:\/\//i.test(s) ? s : `https://${s}`);

    if (u.hostname.includes("youtu.be")) {
      return u.pathname.replace("/", "") || null;
    }

    const v = u.searchParams.get("v");
    if (v) return v;

    const parts = u.pathname.split("/").filter(Boolean);
    const shortsIndex = parts.indexOf("shorts");
    if (shortsIndex >= 0 && parts[shortsIndex + 1]) {
      return parts[shortsIndex + 1];
    }

    return null;
  } catch {
    return null;
  }
}

export default function YouTubeThumbnailTool() {
  const [url, setUrl] = useState("");

  const videoId = useMemo(() => getVideoId(url), [url]);

  const thumbnails = videoId
    ? [
        { label: "Default", src: `https://i.ytimg.com/vi/${videoId}/default.jpg` },
        { label: "Medium Quality", src: `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg` },
        { label: "High Quality", src: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` },
        { label: "SD Quality", src: `https://i.ytimg.com/vi/${videoId}/sddefault.jpg` },
        { label: "Max Resolution", src: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg` },
      ]
    : [];

  async function copy(text: string) {
    await navigator.clipboard.writeText(text);
    alert("Thumbnail URL copied!");
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <Link href="/" className="text-sm text-slate-400 hover:text-slate-200">
        ← Home
      </Link>

      <h1 className="mt-4 text-3xl font-bold">YouTube Thumbnail Viewer</h1>
      <p className="mt-2 max-w-2xl text-slate-300">
        Paste any YouTube video link and get all thumbnail sizes instantly.
      </p>

      <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-5">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste YouTube video URL"
          className="w-full rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:border-slate-600"
        />

        {!videoId && url.trim().length > 0 && (
          <div className="mt-3 text-sm text-rose-300">
            Invalid YouTube URL. Please paste a valid link.
          </div>
        )}
      </div>

      {videoId && (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {thumbnails.map((t) => (
            <div
              key={t.label}
              className="rounded-3xl border border-slate-800 bg-slate-900/30 p-4"
            >
              <div className="flex items-center justify-between">
                <div className="font-semibold">{t.label}</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => copy(t.src)}
                    className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-950"
                  >
                    Copy URL
                  </button>
                  <a
                    href={t.src}
                    target="_blank"
                    className="rounded-xl border border-slate-700 px-3 py-2 text-sm"
                  >
                    Open
                  </a>
                </div>
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.src}
                alt={t.label}
                className="mt-3 w-full rounded-2xl border border-slate-800"
              />
              <div className="mt-2 break-all text-xs text-slate-400">
                {t.src}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ✅ FAQ Schema for SEO (Google Rich Results) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is this YouTube Thumbnail Viewer free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Yes, this YouTube Thumbnail Viewer is completely free to use for all public YouTube videos."
                }
              },
              {
                "@type": "Question",
                "name": "Can I download YouTube videos using this tool?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "No. This tool does not download YouTube videos. It only shows publicly available thumbnail image URLs."
                }
              },
              {
                "@type": "Question",
                "name": "Which YouTube links are supported?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "YouTube watch links, Shorts links, and youtu.be short links are supported."
                }
              }
            ]
          })
        }}
      />

    </main>
  );
}
