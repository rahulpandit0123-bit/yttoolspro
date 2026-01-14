import type { Metadata } from "next";
import Link from "next/link";
import YouTubeTitleClient from "./YouTubeTitleClient";

export const metadata: Metadata = {
  title: "YouTube Title Generator (Hindi + English) – YTToolsPro",
  description:
    "Generate catchy YouTube titles for videos and Shorts. Choose style (viral/SEO/emotional) and get titles instantly. Free YouTube title generator in Hindi + English.",
};

export default function YouTubeTitlePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <Link href="/tools" className="text-sm text-slate-400 hover:text-slate-200">
        ← Tools
      </Link>

      <h1 className="mt-4 text-3xl font-bold">YouTube Title Generator</h1>
      <p className="mt-2 max-w-2xl text-slate-300">
        Enter your topic and generate YouTube titles in Hindi or English. Pick a style
        like Viral, SEO, Emotional, Question, or List.
      </p>

      <YouTubeTitleClient />
    </main>
  );
}
