import SkillCard, { type Typeface } from "@/components/SkillCard";

const skills: Typeface[] = [
  {
    name: "Front-End Development",
    description:
      "I design responsive user experiences with modern interfaces, accessible interaction patterns, and a strong emphasis on usability.",
    accent: "UI",
  },
  {
    name: "Full-Stack Problem Solving",
    description:
      "I enjoy building data-driven features from the database layer to the browser, ensuring each piece of the app works together cleanly.",
    accent: "Build",
  },
  {
    name: "Continuous Learning",
    description:
      "My approach centers on practical growth, learning modern tools, and refining the quality of each project through iteration.",
    accent: "Growth",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="mb-12 rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-8 text-white shadow-lg">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">About me</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">I build thoughtful digital experiences.</h1>
        <p className="max-w-2xl text-lg leading-8 text-blue-50">
          I am a full-stack developer with a passion for creating clean interfaces, solving real-world
          problems, and turning ideas into reliable web applications.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.name} typeface={skill} />
        ))}
      </section>
    </main>
  );
}
