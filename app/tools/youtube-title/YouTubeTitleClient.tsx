"use client";

import { useMemo, useState } from "react";

type Lang = "en" | "hi";
type Style = "viral" | "seo" | "emotional" | "question" | "list";

function cleanTopic(s: string) {
  return s.trim().replace(/\s+/g, " ");
}

function makeTitles(topic: string, lang: Lang, style: Style) {
  const t = cleanTopic(topic);
  if (!t) return [];

  const en = {
    viral: [
      `This ${t} Trick Went VIRAL 🔥`,
      `I Tried ${t} for 7 Days… Here’s What Happened`,
      `${t} in 60 Seconds (Must Watch!)`,
      `Nobody Tells You This About ${t}`,
      `Stop Doing ${t} Like This ❌ Do This Instead ✅`,
      `${t} Challenge: Can You Do It?`,
      `The Fastest Way to Learn ${t}`,
      `${t} Mistakes You MUST Avoid`,
      `Top Secret ${t} Hacks (Real)`,
      `The Truth About ${t} (Shocking)`,
    ],
    seo: [
      `${t} Explained (Step-by-Step)`,
      `How to Do ${t} (Beginner to Pro)`,
      `${t} Tutorial for Beginners`,
      `${t} Guide: Tips, Steps & Examples`,
      `Best Way to ${t} (2026)`,
      `${t} Complete Tutorial (Easy)`,
      `How I Improved ${t} (Real Method)`,
      `${t} Tips & Tricks You Can Use Today`,
      `Learn ${t} Fast (Simple Steps)`,
      `${t} Full Guide (No Confusion)`,
    ],
    emotional: [
      `I Wish I Knew This About ${t} Earlier…`,
      `${t} Changed My Life (Real Story)`,
      `If You’re Struggling With ${t}, Watch This`,
      `The Most Honest Video About ${t}`,
      `Don’t Give Up on ${t} — Do This`,
      `My Biggest Lesson From ${t}`,
      `I Failed at ${t}… Then This Worked`,
      `The Hard Truth About ${t}`,
      `You’re Not Alone: ${t} Journey`,
      `This ${t} Advice Is Gold`,
    ],
    question: [
      `Can You Really Do ${t}?`,
      `Is ${t} Worth It? (Honest Answer)`,
      `What Happens If You Try ${t}?`,
      `Why Is ${t} So Hard?`,
      `How Long Does ${t} Take?`,
      `What Is the Best Way to ${t}?`,
      `Should You Learn ${t} in 2026?`,
      `Is ${t} Actually Easy?`,
      `Do You Need ${t} to Succeed?`,
      `What Nobody Answers About ${t}`,
    ],
    list: [
      `7 ${t} Tips That Actually Work`,
      `Top 10 ${t} Mistakes (Avoid These!)`,
      `5 Best Tools for ${t}`,
      `10 Easy Steps to ${t}`,
      `7 Ways to Improve ${t} Today`,
      `Top 5 ${t} Secrets (Beginner Friendly)`,
      `8 ${t} Ideas You Can Copy`,
      `Best ${t} Examples (Real)`,
      `6 Simple ${t} Hacks`,
      `Top ${t} Tips for Beginners`,
    ],
  } as const;

  const hi = {
    viral: [
      `${t} का ये Trick VIRAL हो गया 🔥`,
      `मैंने 7 दिन ${t} किया… क्या हुआ देखो`,
      `${t} सिर्फ 60 सेकंड में (Must Watch)`,
      `${t} के बारे में ये बात कोई नहीं बताता`,
      `${t} ऐसे मत करो ❌ ऐसे करो ✅`,
      `${t} Challenge: कर पाओगे?`,
      `${t} सीखने का सबसे तेज तरीका`,
      `${t} की बड़ी गलतियां (Avoid)`,
      `${t} के Secret Hacks (Real)`,
      `${t} का सच (Shocking)`,
    ],
    seo: [
      `${t} Step-by-Step (आसान तरीका)`,
      `${t} कैसे करें (Beginner to Pro)`,
      `${t} Tutorial for Beginners`,
      `${t} Guide: Tips, Steps & Examples`,
      `${t} करने का Best तरीका (2026)`,
      `${t} Complete Tutorial (Easy)`,
      `मैंने ${t} कैसे improve किया (Real)`,
      `${t} Tips & Tricks (आज से use करो)`,
      `${t} जल्दी सीखो (Simple Steps)`,
      `${t} Full Guide (No Confusion)`,
    ],
    emotional: [
      `काश मुझे ${t} की ये बात पहले पता होती…`,
      `${t} ने मेरी सोच बदल दी (Real)`,
      `अगर ${t} में फंस रहे हो तो ये देखो`,
      `${t} पर सबसे honest वीडियो`,
      `${t} छोड़ो मत — ये करो`,
      `${t} से मिली सबसे बड़ी सीख`,
      `मैं ${t} में fail हुआ… फिर ये काम आया`,
      `${t} की hard truth`,
      `तुम अकेले नहीं हो: ${t} journey`,
      `${t} की ये बात दिल छू जाएगी`,
    ],
    question: [
      `क्या तुम सच में ${t} कर सकते हो?`,
      `${t} worth it है? (Honest Answer)`,
      `${t} करोगे तो क्या होगा?`,
      `${t} इतना मुश्किल क्यों लगता है?`,
      `${t} सीखने में कितना समय लगता है?`,
      `${t} करने का best तरीका क्या है?`,
      `2026 में ${t} सीखना चाहिए?`,
      `${t} सच में आसान है क्या?`,
      `${t} के बिना success possible है?`,
      `${t} पर कोई ये सवाल जवाब नहीं देता`,
    ],
    list: [
      `${t} के 7 Tips जो सच में काम करते हैं`,
      `${t} की Top 10 गलतियां (Avoid)`,
      `${t} के लिए 5 Best Tools`,
      `${t} करने के 10 आसान steps`,
      `आज से ${t} improve करने के 7 तरीके`,
      `${t} के Top 5 secrets (Beginner Friendly)`,
      `${t} के 8 ideas जो copy कर सकते हो`,
      `${t} के Best examples (Real)`,
      `${t} के 6 simple hacks`,
      `${t} tips for beginners`,
    ],
  } as const;

  const list = lang === "hi" ? hi[style] : en[style];
  return Array.from(new Set(list)).slice(0, 10);
}

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function YouTubeTitleClient() {
  const [topic, setTopic] = useState("");
  const [lang, setLang] = useState<Lang>("hi");
  const [style, setStyle] = useState<Style>("viral");

  const [toast, setToast] = useState<string>("");
  const [copiedKey, setCopiedKey] = useState<string>("");
  const [copyAllState, setCopyAllState] = useState<"idle" | "copying" | "done">("idle");

  const titles = useMemo(() => makeTitles(topic, lang, style), [topic, lang, style]);

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
    if (titles.length === 0) return;
    setCopyAllState("copying");
    try {
      await navigator.clipboard.writeText(titles.join("\n"));
      setCopyAllState("done");
      showToast(`Copied ${titles.length} titles ✅`);
      window.setTimeout(() => setCopyAllState("idle"), 900);
    } catch {
      setCopyAllState("idle");
      showToast("Copy failed ❌");
    }
  }

  const inputBase =
    "mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-slate-600 focus:ring-2 focus:ring-slate-500/30";
  const labelBase = "text-sm font-semibold text-slate-200";
  const helperBase = "mt-2 text-xs text-slate-400";

  return (
    <section className="relative mt-6 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/30 p-5 sm:p-6">
      {/* soft glow */}
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
        <div className="text-sm font-semibold text-slate-100">Generate Better Titles</div>
        <div className="text-sm text-slate-400">
          Topic डालो → language + style चुनो → 1-click copy.
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {/* Topic */}
        <div className="md:col-span-1">
          <div className={labelBase}>Topic</div>
          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder='Example: "Fitness tips", "Motivation", "हनुमान चालीसा"'
            className={inputBase}
          />
          <div className={helperBase}>Tip: 2–5 words best. (Short topic = better titles)</div>
        </div>

        {/* Language */}
        <div>
          <div className={labelBase}>Language</div>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className={inputBase}
          >
            <option value="hi">Hindi</option>
            <option value="en">English</option>
          </select>
          <div className={helperBase}>Hindi + English supported.</div>
        </div>

        {/* Style */}
        <div>
          <div className={labelBase}>Style</div>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value as Style)}
            className={inputBase}
          >
            <option value="viral">Viral</option>
            <option value="seo">SEO</option>
            <option value="emotional">Emotional</option>
            <option value="question">Question</option>
            <option value="list">List</option>
          </select>
          <div className={helperBase}>Viral for clicks, SEO for search.</div>
        </div>
      </div>

      {/* Results */}
      <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-950/25 p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-slate-200">Generated Titles</div>
            <div className="text-xs text-slate-400">Click any card to copy instantly.</div>
          </div>

          <button
            onClick={copyAll}
            disabled={titles.length === 0 || copyAllState === "copying"}
            className={cx(
              "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition",
              "border border-slate-700/60 bg-gradient-to-b from-slate-200/15 to-slate-950/30 text-slate-100",
              "hover:from-slate-200/20 hover:to-slate-950/40 hover:border-slate-500/60",
              "focus:outline-none focus:ring-2 focus:ring-slate-500/30",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            {copyAllState === "idle" && "Copy All"}
            {copyAllState === "copying" && "Copying…"}
            {copyAllState === "done" && "Copied ✅"}
          </button>
        </div>

        {titles.length === 0 ? (
          <div className="mt-4 rounded-2xl border border-dashed border-slate-800 bg-slate-950/20 p-4 text-sm text-slate-400">
            Enter a topic to generate titles.
          </div>
        ) : (
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {titles.map((t) => {
              const isCopied = copiedKey === t;
              return (
                <button
                  key={t}
                  onClick={() => copy(t, t)}
                  className={cx(
                    "group relative overflow-hidden rounded-3xl border bg-slate-950/20 px-4 py-3 text-left transition",
                    "border-slate-800 hover:border-slate-600/80 hover:bg-slate-950/30",
                    "focus:outline-none focus:ring-2 focus:ring-slate-500/25"
                  )}
                  title="Click to copy"
                >
                  <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-slate-300/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />

                  <div className="flex items-start justify-between gap-3">
                    <div className="text-sm font-medium text-slate-100">{t}</div>
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

                  <div className="mt-1 text-xs text-slate-400">
                    {isCopied ? "Copied to clipboard ✅" : "Tap to copy (1 click)"}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Tiny footer hint */}
      <div className="mt-4 text-xs text-slate-500">
        Pro tip: SEO style titles ke साथ description + hashtags भी match रखें.
      </div>
    </section>
  );
}
