"use client";

import { useMemo, useState } from "react";

function getVideoId(input: string) {
  try {
    const s = input.trim();
    if (!s) return null;

    const u = new URL(/^https?:\/\//i.test(s) ? s : `https://${s}`);

    if (u.hostname.includes("youtu.be")) return u.pathname.replace("/", "") || null;

    const v = u.searchParams.get("v");
    if (v) return v;

    const parts = u.pathname.split("/").filter(Boolean);
    const shortsIndex = parts.indexOf("shorts");
    if (shortsIndex >= 0 && parts[shortsIndex + 1]) return parts[shortsIndex + 1];

    return null;
  } catch {
    return null;
  }
}

export default function YouTubeEmbedClient() {
  const [url, setUrl] = useState("");
  const [start, setStart] = useState("");

  const videoId = useMemo(() => getVideoId(url), [url]);

  const startSeconds = useMemo(() => {
    if (!start) return 0;
    const parts = start.split(":").map(Number);
    if (parts.some(isNaN)) return 0;
    return parts.length === 2 ? parts[0] * 60 + parts[1] : parts[0];
  }, [start]);

  const embedCode = videoId
    ? `<iframe width="560" height="315"
src="https://www.youtube-nocookie.com/embed/${videoId}${startSeconds ? `?start=${startSeconds}` : ""}"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>`
    : "";

  async function copy() {
    await navigator.clipboard.writeText(embedCode);
    alert("Embed code copied!");
  }

  return (
    <>
      <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-5 grid gap-4 md:grid-cols-2">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste YouTube video URL"
          className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-slate-100"
        />

        <input
          value={start}
          onChange={(e) => setStart(e.target.value)}
          placeholder="Start time (mm:ss) optional"
          className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-slate-100"
        />
      </div>

      {videoId && (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/30 p-4">
            <div className="font-semibold mb-2">Embed Preview</div>
            <div className="aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${videoId}${startSeconds ? `?start=${startSeconds}` : ""}`}
                allowFullScreen
                title="YouTube embed preview"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/30 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold">Embed Code</div>
              <button
                onClick={copy}
                className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-950"
              >
                Copy Code
              </button>
            </div>

            <textarea
              readOnly
              value={embedCode}
              className="w-full h-48 rounded-2xl border border-slate-800 bg-slate-950/40 p-3 text-xs text-slate-200"
            />
          </div>
        </div>
      )}
    </>
  );
}
