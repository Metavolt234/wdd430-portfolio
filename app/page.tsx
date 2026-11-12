import { Suspense } from "react";
import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/projects-db";

async function DatabaseProjects() {
  const projects = await getProjects();
  return <ProjectList projects={projects} />;
}

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="mb-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-blue-800 px-6 py-12 text-white shadow-xl sm:px-10">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Portfolio</p>
        <h1 className="max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
          Building modern web experiences with clarity and purpose.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
          I am a developer focused on accessible interfaces, efficient problem solving, and applications
          that blend technical quality with strong user experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-6 text-3xl font-bold text-slate-900">Featured Projects</h2>
        <Suspense fallback={<p>Loading projects...</p>}>
          <DatabaseProjects />
        </Suspense>
      </section>
    </main>
  );
}
