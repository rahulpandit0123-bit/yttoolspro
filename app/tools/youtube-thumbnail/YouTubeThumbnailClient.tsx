"use client";

import { useMemo, useState } from "react";

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

export default function YouTubeThumbnailClient() {
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
    <>
      <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-5">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste YouTube video URL"
          className="w-full rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-300 outline-none focus:border-slate-600"
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
                    className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-100"
                  >
                    Copy URL
                  </button>
                  <a
                    href={t.src}
                    target="_blank"
                    rel="noreferrer"
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
              <div className="mt-2 break-all text-xs text-slate-400">{t.src}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
