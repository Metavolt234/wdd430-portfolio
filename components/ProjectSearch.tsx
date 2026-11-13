"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ProjectSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const query = searchParams.get("query") ?? "";
  const [term, setTerm] = useState(query);
  const searchParamsRef = useRef(searchParams);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    searchParamsRef.current = searchParams;
  }, [searchParams]);

  useEffect(() => {
    setTerm(query);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [query]);

  useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    },
    [],
  );

  function handleSearch(value: string) {
    setTerm(value);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParamsRef.current.toString());
      const normalizedQuery = value.trim();

      params.set("page", "1");
      if (normalizedQuery) {
        params.set("query", normalizedQuery);
      } else {
        params.delete("query");
      }

      const queryString = params.toString();
      router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
        scroll: false,
      });
      timeoutRef.current = null;
    }, 300);
  }

  return (
    <div className="w-full max-w-xl">
      <label htmlFor="project-search" className="mb-2 block text-sm font-semibold text-slate-700">
        Search projects
      </label>
      <input
        id="project-search"
        type="search"
        value={term}
        onChange={(event) => handleSearch(event.target.value)}
        placeholder="Search title, description, or technology..."
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
}
