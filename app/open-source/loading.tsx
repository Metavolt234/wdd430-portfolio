import ProjectSkeleton from "@/components/ProjectSkeleton";

export default function Loading() {
  return (
    <main
      className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8"
      aria-busy="true"
      aria-label="Loading open-source projects"
    >
      <p className="sr-only" role="status">
        Loading open-source projects
      </p>
      <section>
        <div className="mb-6 h-9 w-72 animate-pulse rounded bg-slate-200" />
        <ProjectSkeleton />
      </section>
    </main>
  );
}
