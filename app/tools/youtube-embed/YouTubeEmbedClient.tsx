"use client";

import { useEffect, useMemo, useState } from "react";

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

function Toast({
  show,
  message,
  onClose,
}: {
  show: boolean;
  message: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(onClose, 1400);
    return () => clearTimeout(t);
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 shadow-lg">
        {message}
      </div>
    </div>
  );
}

export default function YouTubeEmbedClient() {
  const [url, setUrl] = useState("");
  const [start, setStart] = useState("");
  const [toast, setToast] = useState<{ show: boolean; msg: string }>({
    show: false,
    msg: "",
  });

  const videoId = useMemo(() => getVideoId(url), [url]);

  const startSeconds = useMemo(() => {
    if (!start) return 0;
    const parts = start.split(":").map(Number);
    if (parts.some((n) => Number.isNaN(n))) return 0;
    return parts.length === 2 ? parts[0] * 60 + parts[1] : parts[0];
  }, [start]);

  const embedSrc = useMemo(() => {
    if (!videoId) return "";
    return `https://www.youtube-nocookie.com/embed/${videoId}${
      startSeconds ? `?start=${startSeconds}` : ""
    }`;
  }, [videoId, startSeconds]);

  const embedCode = useMemo(() => {
    if (!videoId) return "";
    return `<iframe width="560" height="315"
src="${embedSrc}"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>`;
  }, [videoId, embedSrc]);

  async function copy() {
    await navigator.clipboard.writeText(embedCode);
    setToast({ show: true, msg: "Copied embed code ✅" });
  }

  return (
    <>
      <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-5 grid gap-4 md:grid-cols-2">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste YouTube video URL"
          className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:border-slate-600"
        />

        <input
          value={start}
          onChange={(e) => setStart(e.target.value)}
          placeholder="Start time (mm:ss) optional"
          className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:border-slate-600"
        />
      </div>

      {!videoId && url.trim().length > 0 && (
        <div className="mt-3 text-sm text-rose-300">
          Invalid YouTube URL. Please paste a valid link.
        </div>
      )}

      {videoId && (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/30 p-4">
            <div className="font-semibold mb-2">Embed Preview</div>
            <div className="aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-black">
              <iframe className="h-full w-full" src={embedSrc} allowFullScreen title="YouTube embed preview" />
            </div>
            <div className="mt-2 break-all text-xs text-slate-400">{embedSrc}</div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/30 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold">Embed Code</div>
              <button
                onClick={copy}
                className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-950 active:scale-[0.98]"
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

      <Toast
        show={toast.show}
        message={toast.msg}
        onClose={() => setToast({ show: false, msg: "" })}
      />
    </>
  );
}
