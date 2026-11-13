import { Suspense } from "react";
import ProjectList from "@/components/ProjectList";
import ProjectSkeleton from "@/components/ProjectSkeleton";
import { getProjects } from "@/lib/projects-db";

async function SchoolProjectList() {
  const projects = await getProjects("school");
  return <ProjectList projects={projects} />;
}

export default function SchoolProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-8 text-white shadow-lg">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
          Academic work
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">School Projects</h1>
        <p className="max-w-2xl text-lg leading-8 text-blue-50">
          Projects built through coursework and hands-on learning.
        </p>
      </section>

      <section>
        <h2 className="mb-6 text-3xl font-bold text-slate-900">Selected Projects</h2>
        <Suspense fallback={<ProjectSkeleton />}>
          <SchoolProjectList />
        </Suspense>
      </section>
    </main>
  );
}
