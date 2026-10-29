import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white shadow-lg shadow-slate-200/40">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold tracking-tight text-blue-200 transition hover:text-white">
          Tumwesige Nelson
        </Link>

        <ul className="flex items-center gap-6 text-sm font-medium uppercase tracking-[0.12em] text-slate-200">
          <li>
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="transition hover:text-white">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
