"use client";

import { useMemo, useState } from "react";

function cleanWord(s: string) {
  return s
    .trim()
    .replace(/[#]+/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function toTags(input: string) {
  const base = cleanWord(input);
  if (!base) return [];

  // split by commas / newlines / pipes
  const parts = base
    .split(/[,|\n]/g)
    .map((x) => cleanWord(x))
    .filter(Boolean);

  const unique = Array.from(new Set(parts));

  // turn phrases into hashtags: "galwan song" => #galwansong, keep Hindi intact
  const compact = unique.map((p) => `#${p.replace(/\s+/g, "")}`);

  return compact.slice(0, 30); // keep it clean
}

export default function YouTubeHashtagClient() {
  const [topic, setTopic] = useState("");
  const [extra, setExtra] = useState("shorts, trending, viral");

  const tags = useMemo(() => {
    const primary = toTags(topic);
    const extras = toTags(extra);

    // combine & dedupe
    const merged = Array.from(new Set([...primary, ...extras]));
    return merged.slice(0, 30);
  }, [topic, extra]);

  const asLine = useMemo(() => tags.join(" "), [tags]);

  async function copy(text: string) {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    alert("Copied hashtags!");
  }

  return (
    <section className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/30 p-5">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <div className="text-sm font-semibold text-slate-200">Topic / Keyword</div>
          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder='Example: "Battle of Galwan song" / "हनुमान चालीसा"'
            className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:border-slate-600"
          />
          <div className="mt-2 text-xs text-slate-400">
            Tip: add 1–3 keywords, separated by comma.
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-200">Extra hashtags (optional)</div>
          <input
            value={extra}
            onChange={(e) => setExtra(e.target.value)}
            placeholder="shorts, trending, viral"
            className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:border-slate-600"
          />
          <div className="mt-2 text-xs text-slate-400">
            Keep extras generic, but not too many.
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/30 p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm text-slate-400">Generated hashtags</div>
            <div className="mt-1 break-words font-semibold">{asLine || "—"}</div>
            <div className="mt-1 text-xs text-slate-500">Count: {tags.length}</div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => copy(asLine)}
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950"
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      {tags.length > 0 && (
        <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => copy(t)}
              className="rounded-2xl border border-slate-800 bg-slate-950/20 px-4 py-3 text-left text-sm hover:border-slate-600"
              title="Click to copy this hashtag"
            >
              {t}
              <div className="mt-1 text-xs text-slate-500">Click to copy</div>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
