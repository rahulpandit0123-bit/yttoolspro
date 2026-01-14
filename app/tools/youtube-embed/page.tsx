import type { Metadata } from "next";
import Link from "next/link";
import YouTubeEmbedClient from "./YouTubeEmbedClient";

export const metadata: Metadata = {
  title: "YouTube Embed Code Generator (Responsive, No-Cookie) – YTToolsPro",
  description:
    "Generate responsive and privacy-friendly YouTube embed code (youtube-nocookie) with optional start time. Free tool for creators & bloggers.",
};

export default function YouTubeEmbedPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <Link href="/tools" className="text-sm text-slate-400 hover:text-slate-200">
        ← Tools
      </Link>

      <h1 className="mt-4 text-3xl font-bold">YouTube Embed Code Generator</h1>
      <p className="mt-2 max-w-2xl text-slate-300">
        Generate responsive, privacy-friendly YouTube embed code with optional start time.
      </p>

      <YouTubeEmbedClient />
    </main>
  );
}
