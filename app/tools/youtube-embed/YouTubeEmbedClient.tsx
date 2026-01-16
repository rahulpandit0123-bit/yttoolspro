"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

function getYouTubeId(input: string): string | null {
  try {
    const url = new URL(input.trim());

    // youtu.be/VIDEO_ID
    if (url.hostname.includes("youtu.be")) {
      const id = url.pathname.replace("/", "").trim();
      return id || null;
    }

    // youtube.com/watch?v=VIDEO_ID
    const v = url.searchParams.get("v");
    if (v) return v;

    // youtube.com/shorts/VIDEO_ID
    const shortsMatch = url.pathname.match(/\/shorts\/([^/?]+)/);
    if (shortsMatch?.[1]) return shortsMatch[1];

    // youtube.com/embed/VIDEO_ID
    const embedMatch = url.pathname.match(/\/embed\/([^/?]+)/);
    if (embedMatch?.[1]) return embedMatch[1];

    return null;
  } catch {
    // If user pastes just an ID
    const raw = input.trim();
    if (/^[a-zA-Z0-9_-]{6,}$/.test(raw)) return raw;
    return null;
  }
}

function parseStartToSeconds(s: string): number | null {
  const raw = s.trim();
  if (!raw) return null;

  // pure seconds: "90"
  if (/^\d+$/.test(raw)) return Math.max(0, parseInt(raw, 10));

  // mm:ss or hh:mm:ss
  const parts = raw.split(":").map((p) => p.trim());
  if (parts.some((p) => !/^\d+$/.test(p))) return null;

  const nums = parts.map((p) => parseInt(p, 10));
  if (nums.length === 2) {
    const [mm, ss] = nums;
    return Math.max(0, mm * 60 + ss);
  }
  if (nums.length === 3) {
    const [hh, mm, ss] = nums;
    return Math.max(0, hh * 3600 + mm * 60 + ss);
  }
  return null;
}

export default function YouTubeEmbedClient() {
  const [url, setUrl] = useState("");
  const [start, setStart] = useState("");
  const [useNoCookie, setUseNoCookie] = useState(true);

  const videoId = useMemo(() => getYouTubeId(url), [url]);
  const startSeconds = useMemo(() => parseStartToSeconds(start), [start]);

  const embedSrc = useMemo(() => {
    if (!videoId) return "";
    const host = useNoCookie ? "www.youtube-nocookie.com" : "www.youtube.com";
    const base = `https://${host}/embed/${videoId}`;
    if (startSeconds && startSeconds > 0) return `${base}?start=${startSeconds}`;
    return base;
  }, [videoId, useNoCookie, startSeconds]);

  const embedCode = useMemo(() => {
    if (!embedSrc) return "";
    return `<div style="position:relative;padding-top:56.25%;width:100%;">
  <iframe
    src="${embedSrc}"
    title="YouTube video player"
    style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>`;
  }, [embedSrc]);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied!");
    } catch {
      alert("Copy failed. Please copy manually.");
    }
  };

  // NOTE: TOOL_LINKS kept if you need it later (not rendered now)
  const TOOL_LINKS = [
    { href: "/tools/youtube-thumbnail", label: "Thumbnail Downloader" },
    { href: "/tools/youtube-timestamp", label: "Timestamp Link" },
    { href: "/tools/youtube-hashtag", label: "Hashtag Generator" },
    { href: "/tools/youtube-title", label: "Title Generator" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-8">
      {/* Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          <span className="bg-gradient-to-r from-fuchsia-200 via-slate-50 to-cyan-200 bg-clip-text text-transparent">
            YouTube Embed Code Generator
          </span>
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-300 md:text-base">
          Generate a clean, responsive YouTube embed code (privacy-friendly optional) with optional start time.
        </p>
      </div>

      {/* Main grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left: Inputs */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/25 p-5 shadow-[0_0_0_1px_rgba(15,23,42,0.2)] backdrop-blur">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-200">YouTube URL</label>
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste YouTube video / Shorts URL"
                className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/30"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-200">Start time (optional)</label>
              <input
                value={start}
                onChange={(e) => setStart(e.target.value)}
                placeholder="mm:ss (example 1:23) or seconds (90)"
                className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/30"
              />
              <p className="mt-2 text-xs text-slate-400">Tip: “1:23” means 1 minute 23 seconds.</p>
            </div>

            <label className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/30 px-4 py-3 text-sm text-slate-200">
              <input
                type="checkbox"
                checked={useNoCookie}
                onChange={(e) => setUseNoCookie(e.target.checked)}
                className="h-4 w-4 accent-cyan-400"
              />
              Use privacy-friendly domain (youtube-nocookie)
            </label>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => copy(embedCode)}
                disabled={!embedCode}
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Copy embed code
              </button>

              <button
                onClick={() => copy(embedSrc)}
                disabled={!embedSrc}
                className="rounded-2xl border border-slate-700 bg-slate-950/30 px-5 py-3 text-sm font-semibold text-slate-100 hover:bg-slate-900/40 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Copy embed URL
              </button>
            </div>

            {!url.trim() ? (
              <div className="rounded-2xl border border-slate-800 bg-slate-950/20 p-4 text-sm text-slate-300">
                Paste a YouTube link above. We’ll auto-detect the video ID.
              </div>
            ) : !videoId ? (
              <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-200">
                This doesn’t look like a valid YouTube URL / ID. Please paste a correct link.
              </div>
            ) : null}
          </div>
        </div>

        {/* Right: Preview + Code */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/25 p-5 backdrop-blur">
          <div>
            <div className="mb-2 text-sm font-semibold text-slate-200">Preview</div>
            <div className="aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/40">
              {embedSrc ? (
                <iframe
                  className="h-full w-full"
                  src={embedSrc}
                  title="YouTube Preview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-slate-400">
                  Paste a valid YouTube URL to see preview
                </div>
              )}
            </div>
          </div>

          <div className="mt-5">
            <div className="mb-2 text-sm font-semibold text-slate-200">Embed code</div>
            <textarea
              value={embedCode}
              readOnly
              placeholder="Your embed code will appear here…"
              className="h-40 w-full resize-none rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 font-mono text-xs text-slate-100 placeholder:text-slate-500 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
