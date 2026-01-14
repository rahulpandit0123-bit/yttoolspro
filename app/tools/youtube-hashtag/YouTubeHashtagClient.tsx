"use client";

import { useMemo, useState } from "react";

type PresetKey =
  | "shorts"
  | "trending"
  | "gaming"
  | "motivation"
  | "finance"
  | "bollywood"
  | "bhakti";

const PRESETS: Record<PresetKey, string[]> = {
  shorts: ["shorts", "ytshorts", "shortsvideo", "shortsfeed", "viralshorts"],
  trending: ["trending", "viral", "newvideo", "youtubetrending", "explore"],
  gaming: ["gaming", "gamer", "gameplay", "live", "gamingcommunity"],
  motivation: ["motivation", "inspiration", "success", "mindset", "quotes"],
  finance: ["finance", "business", "investing", "stockmarket", "money"],
  bollywood: ["bollywood", "song", "music", "hindisong", "newrelease"],
  bhakti: ["bhakti", "devotional", "bhajan", "hanuman", "shiv"],
};

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

  const parts = base
    .split(/[,|\n]/g)
    .map((x) => cleanWord(x))
    .filter(Boolean);

  const unique = Array.from(new Set(parts));
  const compact = unique.map((p) => `#${p.replace(/\s+/g, "")}`);
  return compact;
}

function formatTags(tags: string[], mode: "space" | "comma" | "newline") {
  if (mode === "comma") return tags.join(", ");
  if (mode === "newline") return tags.join("\n");
  return tags.join(" ");
}

export default function YouTubeHashtagClient() {
  const [topic, setTopic] = useState("");
  const [preset, setPreset] = useState<PresetKey>("shorts");
  const [countMode, setCountMode] = useState<10 | 20 | 30>(20);
  const [formatMode, setFormatMode] = useState<"space" | "comma" | "newline">("space");

  const tags = useMemo(() => {
    const primary = toTags(topic);

    // Preset tags
    const presetTags = PRESETS[preset].map((x) => `#${x.replace(/\s+/g, "")}`);

    // Combine + dedupe
    const merged = Array.from(new Set([...primary, ...presetTags]));

    // Keep it clean
    return merged.slice(0, countMode);
  }, [topic, preset, countMode]);

  const output = useMemo(() => formatTags(tags, formatMode), [tags, formatMode]);
  const chars = useMemo(() => output.length, [output]);

  async function copy(text: string) {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    alert("Copied!");
  }

  const warn =
    chars > 350
      ? "Too long: try fewer hashtags or shorter keywords."
      : chars > 250
      ? "Long: consider using fewer hashtags for cleaner descriptions."
      : "";

  return (
    <section className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/30 p-5">
      {/* Controls */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <div className="text-sm font-semibold text-slate-200">Topic / Keywords</div>
          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder='Example: "Battle of Galwan song", "हनुमान चालीसा"'
            className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:border-slate-600"
          />
          <div className="mt-2 text-xs text-slate-400">
            Tip: comma-separated keywords give better results.
          </div>
        </div>

        <div className="grid gap-3">
          <div>
            <div className="text-sm font-semibold text-slate-200">Category preset</div>
            <select
              value={preset}
              onChange={(e) => setPreset(e.target.value as PresetKey)}
              className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-slate-100 outline-none focus:border-slate-600"
            >
              <option value="shorts">Shorts</option>
              <option value="trending">Trending</option>
              <option value="gaming">Gaming</option>
              <option value="motivation">Motivation</option>
              <option value="finance">Finance</option>
              <option value="bollywood">Bollywood</option>
              <option value="bhakti">Bhakti</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-sm font-semibold text-slate-200">Hashtag count</div>
              <select
                value={countMode}
                onChange={(e) => setCountMode(Number(e.target.value) as 10 | 20 | 30)}
                className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-slate-100 outline-none focus:border-slate-600"
              >
                <option value={10}>Short (10)</option>
                <option value={20}>Medium (20)</option>
                <option value={30}>Max (30)</option>
              </select>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-200">Copy format</div>
              <select
                value={formatMode}
                onChange={(e) => setFormatMode(e.target.value as any)}
                className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-slate-100 outline-none focus:border-slate-600"
              >
                <option value="space">Space separated</option>
                <option value="comma">Comma separated</option>
                <option value="newline">New lines</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Output */}
      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/30 p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <div className="text-sm text-slate-400">Generated hashtags</div>
            <pre className="mt-1 whitespace-pre-wrap break-words font-semibold">
              {output || "—"}
            </pre>
            <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-500">
              <span>Count: {tags.length}</span>
              <span>Characters: {chars}</span>
              {warn && <span className="text-amber-300">{warn}</span>}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => copy(output)}
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950"
            >
              Copy All
            </button>
            <button
              onClick={() => copy(formatTags(tags.slice(0, 3), formatMode))}
              className="rounded-xl border border-slate-700 px-4 py-2 text-sm"
            >
              Copy Top 3
            </button>
          </div>
        </div>
      </div>

      {/* Individual tags */}
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
