import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "WDD430 Portfolio",
    description:
      "A responsive portfolio application built with Next.js and Tailwind CSS to showcase projects, skills, and professional experience.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://metavolt234.github.io/wdd330/Class-Project/index.html",
  },
  {
    title: "Next.js Learning Lab",
    description:
      "A project focused on learning modern frontend practices, component reusability, and production-ready UI architecture.",
    technologies: ["Next.js", "JavaScript", "CSS Modules", "Responsive Design"],
    link: "https://metavolt234.github.io/metavolt-tech/Uzuri%20site/index.html",
  },
];

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
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
