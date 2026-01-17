import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="YTToolsPro"
            width={36}
            height={36}
            priority
            className="rounded-lg"
          />
          <span className="text-lg font-bold tracking-tight text-white">
            YTToolsPro
          </span>
        </Link>

        <nav className="flex items-center gap-5 text-sm text-slate-300">
          <Link href="/tools" className="hover:text-white transition">
            Tools
          </Link>
          <Link href="/tools/youtube-thumbnail" className="hidden sm:block hover:text-white transition">
            Thumbnail
          </Link>
          <Link href="/tools/youtube-title" className="hidden sm:block hover:text-white transition">
            Title
          </Link>
          <Link href="/tools/youtube-timestamp" className="hidden sm:block hover:text-white transition">
            Timestamp
          </Link>
        </nav>
      </div>
    </header>
  );
}
