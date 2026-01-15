"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Tool = {
  title: string;
  desc: string;
  href: string;
  badge?: string;
};

export default function ToolsClient({ tools }: { tools: Tool[] }) {
  const [q, setQ] = useState("");
  const [badgeFilter, setBadgeFilter] = useState<string>("All");

  const badges = useMemo(() => {
    const set = new Set<string>();
    tools.forEach((t) => t.badge && set.add(t.badge));
    return ["All", ...Array.from(set)];
  }, [tools]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return tools.filter((t) => {
      const matchBadge = badgeFilter === "All" ? true : t.badge === badgeFilter;
      const matchQuery =
        !query ||
        t.title.toLowerCase().includes(query) ||
        t.desc.toLowerCase().includes(query);
      return matchBadge && matchQuery;
    });
  }, [tools, q, badgeFilter]);

  const featured = tools[0];

  return (
    <>
      {/* Hero */}
      <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/30 p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Free YouTube Tools for Creators
            </h1>
            <p className="mt-2 max-w-2xl text-slate-300">
              Fast, simple tools (Hindi + English). No login. One-click copy.
            </p>

            {/* Search */}
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search tools… (thumbnail / title / hashtag)"
                className="w-full rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:border-slate-600"
              />
              <Link
                href={featured?.href || "/tools"}
                className="rounded-2xl bg-white px-5 py-3 text-center font-semibold text-slate-950"
              >
                Start now →
              </Link>
            </div>
          </div>

          {/* Small stats */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/30 px-4 py-3">
              <div className="text-sm text-slate-400">Tools</div>
              <div className="text-xl font-bold">{tools.length}</div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/30 px-4 py-3">
              <div className="text-sm text-slate-400">Languages</div>
              <div className="text-xl font-bold">2</div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/30 px-4 py-3">
              <div className="text-sm text-slate-400">Cost</div>
              <div className="text-xl font-bold">Free</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-5 flex flex-wrap gap-2">
          {badges.map((b) => {
            const active = badgeFilter === b;
            return (
              <button
                key={b}
                onClick={() => setBadgeFilter(b)}
                className={
                  "rounded-full border px-4 py-2 text-sm transition " +
                  (active
                    ? "border-slate-500 bg-slate-950/60 text-white"
                    : "border-slate-800 bg-slate-950/20 text-slate-300 hover:border-slate-600")
                }
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured */}
      {featured && (
        <div className="mt-6 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/50 to-slate-950/30 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm text-slate-400">Featured</div>
              <div className="mt-1 text-2xl font-bold">{featured.title}</div>
              <div className="mt-2 max-w-2xl text-slate-300">{featured.desc}</div>
            </div>
            <Link
              href={featured.href}
              className="rounded-2xl bg-white px-5 py-3 text-center font-semibold text-slate-950"
            >
              Open featured →
            </Link>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filtered.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group block rounded-3xl border border-slate-800 bg-slate-900/30 p-6 transition hover:border-slate-600 hover:bg-slate-900/40"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xl font-semibold">{t.title}</div>
                <div className="mt-2 text-sm text-slate-300">{t.desc}</div>
              </div>

              {t.badge ? (
                <span className="shrink-0 rounded-full border border-slate-700 bg-slate-950/40 px-3 py-1 text-xs text-slate-200">
                  {t.badge}
                </span>
              ) : null}
            </div>

            <div className="mt-5 text-sm font-semibold text-white">
              Open tool <span className="inline-block transition group-hover:translate-x-1">→</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/20 p-6 text-slate-300">
          No tools found. Try a different search word.
        </div>
      )}
    </>
  );
}
