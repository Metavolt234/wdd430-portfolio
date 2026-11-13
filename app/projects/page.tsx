import { Suspense } from "react";
import Pagination from "@/components/Pagination";
import ProjectList from "@/components/ProjectList";
import ProjectSearch from "@/components/ProjectSearch";
import ProjectSkeleton from "@/components/ProjectSkeleton";
import { fetchFilteredProjects, fetchProjectsPages } from "@/lib/projects-db";

type SearchParams = Record<string, string | string[] | undefined>;

interface ProjectsPageProps {
  searchParams: Promise<SearchParams>;
}

function firstParam(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

async function ProjectResults({ searchParams }: ProjectsPageProps) {
  const params = await searchParams;
  const query = firstParam(params.query).trim();
  const requestedPage = Number(firstParam(params.page));
  const page =
    Number.isSafeInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;

  const [projects, totalPages] = await Promise.all([
    fetchFilteredProjects(query, page),
    fetchProjectsPages(query),
  ]);
  const currentPage = Math.min(page, Math.max(totalPages, 1));
  const visibleProjects =
    currentPage === page ? projects : await fetchFilteredProjects(query, currentPage);

  return (
    <>
      {visibleProjects.length > 0 ? (
        <ProjectList projects={visibleProjects} />
      ) : (
        <p className="rounded-xl border border-slate-200 bg-white p-6 text-slate-600">
          No projects match your search.
        </p>
      )}
      {totalPages > 1 && <Pagination totalPages={totalPages} />}
    </>
  );
}

export default function ProjectsPage({ searchParams }: ProjectsPageProps) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          Portfolio
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">Projects</h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-600">
          Browse and search projects by title, description, or technology.
        </p>
      </section>

      <div className="mb-8">
        <Suspense fallback={<p className="text-slate-500">Loading search...</p>}>
          <ProjectSearch />
        </Suspense>
      </div>

      <Suspense fallback={<ProjectSkeleton />}>
        <ProjectResults searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
