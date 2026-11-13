import { Suspense } from "react";
import { connection } from "next/server";
import ProjectList from "@/components/ProjectList";
import ProjectSkeleton from "@/components/ProjectSkeleton";
import { getProjects } from "@/lib/projects-db";

async function OpenSourceProjects() {
  await connection();
  const projects = await getProjects("opensource");
  return <ProjectList projects={projects} />;
}

export default function OpenSourceProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section>
        <h1 className="mb-6 text-3xl font-bold text-slate-900">Open-Source Projects</h1>
        <Suspense fallback={<ProjectSkeleton />}>
          <OpenSourceProjects />
        </Suspense>
      </section>
    </main>
  );
}
