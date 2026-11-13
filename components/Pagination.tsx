"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
}

export default function Pagination({ totalPages }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const requestedPage = Number(searchParams.get("page") ?? "1");
  const parsedPage =
    Number.isSafeInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  const currentPage = Math.min(parsedPage, totalPages);

  function createPageURL(pageNumber: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(pageNumber));
    return `${pathname}?${params.toString()}`;
  }

  const linkClass =
    "rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-700 aria-disabled:pointer-events-none aria-disabled:opacity-40";

  return (
    <nav aria-label="Project pagination" className="mt-8 flex items-center justify-center gap-4">
      <Link
        href={createPageURL(Math.max(1, currentPage - 1))}
        aria-disabled={currentPage <= 1}
        tabIndex={currentPage <= 1 ? -1 : undefined}
        className={linkClass}
      >
        Previous
      </Link>
      <span className="text-sm font-medium text-slate-600">
        Page {currentPage} of {totalPages}
      </span>
      <Link
        href={createPageURL(Math.min(totalPages, currentPage + 1))}
        aria-disabled={currentPage >= totalPages}
        tabIndex={currentPage >= totalPages ? -1 : undefined}
        className={linkClass}
      >
        Next
      </Link>
    </nav>
  );
}
