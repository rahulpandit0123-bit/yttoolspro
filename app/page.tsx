"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

export default function Home() {
  const [lang, setLang] = useState<"hi" | "en">("hi");

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400" />
          <div>
            <div className="text-lg font-bold">{SITE.name}</div>
            <div className="text-xs text-slate-400">{lang === "hi" ? "Hindi" : "English"}</div>
          </div>
        </div>

        <button
          className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-950"
          onClick={() => setLang(lang === "hi" ? "en" : "hi")}
        >
          {lang === "hi" ? "EN" : "HI"}
        </button>
      </div>

      <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <h1 className="text-3xl font-bold">
          {lang === "hi" ? "Creators ke liye YouTube Tools" : "YouTube Tools for Creators"}
        </h1>
        <p className="mt-2 text-slate-300">
          {lang === "hi"
            ? "Hum aapke liye safe aur fast tools banayenge: Thumbnail, Embed, Timestamp, Description."
            : "We will build safe and fast tools: Thumbnail, Embed, Timestamp, Description."}
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
            <div className="font-semibold">{lang === "hi" ? "Thumbnail Tool" : "Thumbnail Tool"}</div>
            <div className="text-sm text-slate-400 mt-1">
              {lang === "hi" ? "All sizes + copy links" : "All sizes + copy links"}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
            <div className="font-semibold">{lang === "hi" ? "Embed Tool" : "Embed Tool"}</div>
            <div className="text-sm text-slate-400 mt-1">
              {lang === "hi" ? "Responsive embed generator" : "Responsive embed generator"}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
            <div className="font-semibold">{lang === "hi" ? "Timestamp Tool" : "Timestamp Tool"}</div>
            <div className="text-sm text-slate-400 mt-1">
              {lang === "hi" ? "mm:ss → share link" : "mm:ss → share link"}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
