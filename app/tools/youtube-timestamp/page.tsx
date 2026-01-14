import type { Metadata } from "next";
import Link from "next/link";
import YouTubeTimestampClient from "./YouTubeTimestampClient";

export const metadata: Metadata = {
  title: "YouTube Timestamp Link Generator (mm:ss) – YTToolsPro",
  description:
    "Create YouTube timestamp links in seconds. Convert mm:ss into shareable YouTube time links. Free tool for creators and editors.",
};

export default function YouTubeTimestampPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <Link href="/tools" className="text-sm text-slate-400 hover:text-slate-200">
        ← Tools
      </Link>

      <h1 className="mt-4 text-3xl font-bold">YouTube Timestamp Link Generator</h1>
      <p className="mt-2 max-w-2xl text-slate-300">
        Paste a YouTube link and enter time (mm:ss). Get a shareable timestamp link instantly.
      </p>

      <YouTubeTimestampClient />
    </main>
  );
}
