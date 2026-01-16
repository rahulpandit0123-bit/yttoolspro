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

function toSeconds(ts: string) {
  const s = ts.trim();
  if (!s) return 0;

  const p = s.split(":").map((x) => Number(x));
  if (p.some((n) => Number.isNaN(n))) return 0;

  if (p.length === 1) return Math.max(0, p[0]);
  if (p.length === 2) return Math.max(0, p[0] * 60 + p[1]);
  if (p.length === 3) return Math.max(0, p[0] * 3600 + p[1] * 60 + p[2]);
  return 0;
}

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function formatTimestamp(totalSeconds: number) {
  const s = Math.max(0, Math.floor(totalSeconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;

  if (h > 0) return `${h}:${pad2(m)}:${pad2(sec)}`;
  return `${m}:${pad2(sec)}`;
}

type Row = {
  seconds: number;
  label: string;
  ts: string;
  link: string;
};

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

function parseLines(raw: string) {
  const lines = raw
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  // supports:
  // 1) 1:23 Title
  // 2) 1:23 - Title
  // 3) 01:23 | Title
  // 4) 1:23 (Title)
  const out: Array<{ seconds: number; label: string }> = [];

  for (const line of lines) {
    // find first timestamp token like 1:23 or 01:02:03
    const m = line.match(/(\d{1,2}:\d{2}(?::\d{2})?)/);
    if (!m) continue;

    const ts = m[1];
    const secs = toSeconds(ts);

    // remove ts from line and cleanup separators
    const rest = line
      .replace(ts, "")
      .replace(/^[-–—|•\s]+/, "")
      .replace(/\s+[-–—|•]\s+/g, " ")
      .trim();

    out.push({ seconds: secs, label: rest || "Chapter" });
  }

  // sort by time
  out.sort((a, b) => a.seconds - b.seconds);

  // if duplicates times, keep first
  const uniq: Array<{ seconds: number; label: string }> = [];
  const seen = new Set<number>();
  for (const r of out) {
    if (seen.has(r.seconds)) continue;
    seen.add(r.seconds);
    uniq.push(r);
  }
  return uniq;
}

export default function YouTubeTimestampClient() {
  const [url, setUrl] = useState("");
  const [rawLines, setRawLines] = useState(
    "0:00 Intro\n0:35 Setup\n1:20 Tips\n2:10 Final Result"
  );

  const [toast, setToast] = useState("");
  const [copiedKey, setCopiedKey] = useState("");
  const [copyAllState, setCopyAllState] = useState<"idle" | "copying" | "done">("idle");

  const videoId = useMemo(() => getVideoId(url), [url]);

  const rows: Row[] = useMemo(() => {
    if (!videoId) return [];
    const parsed = parseLines(rawLines);
    return parsed.map((r) => {
      const ts = formatTimestamp(r.seconds);
      const link = `https://youtu.be/${videoId}?t=${r.seconds}`;
      return { ...r, ts, link };
    });
  }, [rawLines, videoId]);

  function showToast(msg: string) {
    setToast(msg);
    window.clearTimeout((showToast as any)._t);
    (showToast as any)._t = window.setTimeout(() => setToast(""), 1600);
  }

  async function copy(text: string, key?: string) {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      if (key) {
        setCopiedKey(key);
        window.setTimeout(() => setCopiedKey(""), 900);
      }
      showToast("Copied ✅");
    } catch {
      showToast("Copy failed ❌");
    }
  }

  async function copyAll() {
    if (!videoId || rows.length === 0) return;

    setCopyAllState("copying");
    try {
      // YouTube chapters format: 0:00 Intro
      const text = rows.map((r) => `${r.ts} ${r.label}`).join("\n");
      await navigator.clipboard.writeText(text);
      setCopyAllState("done");
      showToast(`Copied ${rows.length} lines ✅`);
      window.setTimeout(() => setCopyAllState("idle"), 900);
    } catch {
      setCopyAllState("idle");
      showToast("Copy failed ❌");
    }
  }

  const inputBase =
    "mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-slate-600 focus:ring-2 focus:ring-slate-500/30";

  return (
    <section className="relative mt-6 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/30 p-5 sm:p-6">
      {/* glow */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-slate-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      {/* toast */}
      <div
        className={cx(
          "pointer-events-none absolute right-4 top-4 z-10 rounded-2xl border border-slate-800 bg-slate-950/70 px-3 py-2 text-xs text-slate-200 shadow-lg backdrop-blur transition",
          toast ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
        )}
        aria-live="polite"
      >
        {toast}
      </div>

      <div className="flex flex-col gap-1">
        <div className="text-sm font-semibold text-slate-100">YouTube Timestamp Generator</div>
        <div className="text-sm text-slate-400">
          Paste URL + chapters lines → timeline preview + 1-click copy.
        </div>
      </div>

      {/* inputs */}
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <div className="text-sm font-semibold text-slate-200">YouTube URL</div>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste YouTube video URL (watch / youtu.be / shorts)"
            className={inputBase}
          />
          {!videoId && url.trim().length > 0 && (
            <div className="mt-2 text-xs text-rose-300">
              Invalid YouTube URL. Please paste a valid link.
            </div>
          )}
          <div className="mt-2 text-xs text-slate-400">
            Tip: URL me playlist extra ho to bhi चलेगा.
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-200">Chapters (one per line)</div>
          <textarea
            value={rawLines}
            onChange={(e) => setRawLines(e.target.value)}
            rows={6}
            placeholder={"0:00 Intro\n0:35 Setup\n1:20 Tips\n2:10 Final Result"}
            className={cx(inputBase, "min-h-[148px] resize-y")}
          />
          <div className="mt-2 text-xs text-slate-400">
            Formats: <span className="text-slate-200">1:23 Title</span> or{" "}
            <span className="text-slate-200">1:23 - Title</span>. Auto-sort by time.
          </div>
        </div>
      </div>

      {/* preview */}
      <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-950/25 p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-slate-200">Timeline Preview</div>
            <div className="text-xs text-slate-400">
              Click a card to copy link. Copy All = YouTube chapters format.
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <button
              onClick={copyAll}
              disabled={!videoId || rows.length === 0 || copyAllState === "copying"}
              className={cx(
                "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition",
                "border border-slate-700/60 bg-gradient-to-b from-slate-200/15 to-slate-950/30 text-slate-100",
                "hover:from-slate-200/20 hover:to-slate-950/40 hover:border-slate-500/60",
                "focus:outline-none focus:ring-2 focus:ring-slate-500/30",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            >
              {copyAllState === "idle" && "Copy All Chapters"}
              {copyAllState === "copying" && "Copying…"}
              {copyAllState === "done" && "Copied ✅"}
            </button>

            {videoId && rows.length > 0 && (
              <a
                href={`https://youtu.be/${videoId}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-slate-500/70 hover:bg-slate-950/20"
              >
                Open Video
              </a>
            )}
          </div>
        </div>

        {!videoId ? (
          <div className="mt-4 rounded-2xl border border-dashed border-slate-800 bg-slate-950/20 p-4 text-sm text-slate-400">
            Paste a valid YouTube URL to enable timeline links.
          </div>
        ) : rows.length === 0 ? (
          <div className="mt-4 rounded-2xl border border-dashed border-slate-800 bg-slate-950/20 p-4 text-sm text-slate-400">
            Add chapters lines to generate timeline.
          </div>
        ) : (
          <div className="mt-5">
            {/* vertical line */}
            <div className="relative pl-4">
              <div className="pointer-events-none absolute left-[7px] top-0 h-full w-px bg-slate-800" />

              <div className="grid gap-3">
                {rows.map((r) => {
                  const key = `${r.seconds}-${r.label}`;
                  const isCopied = copiedKey === key;

                  return (
                    <div key={key} className="relative">
                      {/* dot */}
                      <div className="pointer-events-none absolute left-[2px] top-4 h-3 w-3 rounded-full border border-slate-700 bg-slate-950" />

                      <button
                        onClick={() => copy(r.link, key)}
                        className={cx(
                          "group w-full overflow-hidden rounded-3xl border bg-slate-950/20 px-4 py-3 text-left transition",
                          "border-slate-800 hover:border-slate-600/80 hover:bg-slate-950/30",
                          "focus:outline-none focus:ring-2 focus:ring-slate-500/25"
                        )}
                        title="Click to copy timestamp link"
                      >
                        <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-slate-300/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />

                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="rounded-xl border border-slate-800 bg-slate-950/30 px-2 py-1 text-xs font-semibold text-slate-200">
                                {r.ts}
                              </span>
                              <span className="text-sm font-semibold text-slate-100">{r.label}</span>
                            </div>
                            <div className="mt-1 break-all text-xs text-slate-400">{r.link}</div>
                          </div>

                          <div
                            className={cx(
                              "shrink-0 rounded-xl border px-2 py-1 text-[11px] transition",
                              isCopied
                                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                                : "border-slate-800 bg-slate-950/30 text-slate-400 group-hover:text-slate-300"
                            )}
                          >
                            {isCopied ? "Copied" : "Copy"}
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* small note */}
            <div className="mt-4 text-xs text-slate-500">
              Note: “Copy All Chapters” output YouTube description/chapters format (best for SEO).
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
