import Link from "next/link";

export default function ToolsIndex() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <Link href="/" className="text-sm text-slate-400 hover:text-slate-200">
        ← Home
      </Link>

      <h1 className="mt-4 text-3xl font-bold">All Tools</h1>
      <p className="mt-2 max-w-2xl text-slate-300">
        Free, fast, and creator-friendly tools for YouTube. (No downloads, policy-safe)
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Link
          href="/tools/youtube-thumbnail"
          className="rounded-3xl border border-slate-800 bg-slate-900/30 p-5 hover:border-slate-600"
        >
          <div className="font-semibold">YouTube Thumbnail Viewer</div>
          <div className="mt-1 text-sm text-slate-400">All sizes + Copy URLs</div>
        </Link>

        <Link
          href="/tools/youtube-embed"
          className="rounded-3xl border border-slate-800 bg-slate-900/30 p-5 hover:border-slate-600"
        >
          <div className="font-semibold">YouTube Embed Code Generator</div>
          <div className="mt-1 text-sm text-slate-400">Privacy embed + Start time</div>
        </Link>

        <Link
          href="/tools/youtube-timestamp"
          className="rounded-3xl border border-slate-800 bg-slate-900/30 p-5 hover:border-slate-600"
        >
          <div className="font-semibold">YouTube Timestamp Link Generator</div>
          <div className="mt-1 text-sm text-slate-400">mm:ss → Share link</div>
        </Link>
      </div>
    </main>
  );
}
