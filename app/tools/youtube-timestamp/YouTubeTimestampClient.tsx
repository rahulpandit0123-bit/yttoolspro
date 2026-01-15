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

function toSeconds(mmss: string) {
  const s = mmss.trim();
  if (!s) return 0;

  const p = s.split(":").map((x) => Number(x));
  if (p.some((n) => Number.isNaN(n))) return 0;

  if (p.length === 1) return Math.max(0, p[0]);
  if (p.length === 2) return Math.max(0, p[0] * 60 + p[1]);
  if (p.length === 3) return Math.max(0, p[0] * 3600 + p[1] * 60 + p[2]);
  return 0;
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

export default function YouTubeTimestampClient() {
  const [url, setUrl] = useState("");
  const [time, setTime] = useState("1:00");
  const [toast, setToast] = useState<{ show: boolean; msg: string }>({
    show: false,
    msg: "",
  });

  const videoId = useMemo(() => getVideoId(url), [url]);
  const seconds = useMemo(() => toSeconds(time), [time]);

  const shareLink = useMemo(() => {
    if (!videoId) return "";
    return `https://youtu.be/${videoId}?t=${seconds}`;
  }, [videoId, seconds]);

  async function copy(text: string) {
    await navigator.clipboard.writeText(text);
    setToast({ show: true, msg: "Copied timestamp link ✅" });
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
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Time (mm:ss) e.g. 2:35"
          className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:border-slate-600"
        />
      </div>

      {!videoId && url.trim().length > 0 && (
        <div className="mt-3 text-sm text-rose-300">
          Invalid YouTube URL. Please paste a valid link.
        </div>
      )}

      {videoId && (
        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/30 p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm text-slate-400">Your link</div>
              <div className="break-all font-semibold">{shareLink}</div>
              <div className="mt-1 text-xs text-slate-500">Seconds: {seconds}</div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => copy(shareLink)}
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 active:scale-[0.98]"
              >
                Copy Link
              </button>
              <a
                href={shareLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-700 px-4 py-2 text-sm hover:border-slate-500"
              >
                Open
              </a>
            </div>
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
