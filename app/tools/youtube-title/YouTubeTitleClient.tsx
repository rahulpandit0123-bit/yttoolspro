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

export default function YouTubeTitleClient() {
  const [topic, setTopic] = useState("");
  const [lang, setLang] = useState<Lang>("hi");
  const [style, setStyle] = useState<Style>("viral");

  const titles = useMemo(() => makeTitles(topic, lang, style), [topic, lang, style]);

  async function copy(text: string) {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    alert("Copied!");
  }

  return (
    <section className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/30 p-5">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="text-sm font-semibold text-slate-200">Topic</div>
          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder='Example: "Galwan song", "हनुमान चालीसा", "Fitness tips"'
            className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:border-slate-600"
          />
          <div className="mt-2 text-xs text-slate-400">Tip: 2–5 words best.</div>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-200">Language</div>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-slate-100 outline-none focus:border-slate-600"
          >
            <option value="hi">Hindi</option>
            <option value="en">English</option>
          </select>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-200">Style</div>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value as Style)}
            className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-slate-100 outline-none focus:border-slate-600"
          >
            <option value="viral">Viral</option>
            <option value="seo">SEO</option>
            <option value="emotional">Emotional</option>
            <option value="question">Question</option>
            <option value="list">List</option>
          </select>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/30 p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-sm text-slate-400">Generated titles (click any to copy)</div>
          <button
            onClick={() => copy(titles.join("\n"))}
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950"
            disabled={titles.length === 0}
          >
            Copy All
          </button>
        </div>

        {titles.length === 0 ? (
          <div className="mt-4 text-sm text-slate-400">Enter a topic to generate titles.</div>
        ) : (
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {titles.map((t) => (
              <button
                key={t}
                onClick={() => copy(t)}
                className="rounded-2xl border border-slate-800 bg-slate-950/20 px-4 py-3 text-left text-sm hover:border-slate-600"
                title="Click to copy"
              >
                {t}
                <div className="mt-1 text-xs text-slate-500">Click to copy</div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
