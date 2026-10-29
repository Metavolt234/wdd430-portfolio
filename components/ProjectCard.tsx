export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 inline-flex w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">
        Featured Project
      </div>

      <h3 className="mb-3 text-2xl font-bold text-slate-900">{title}</h3>
      <p className="mb-4 flex-1 text-base leading-7 text-slate-600">{description}</p>

      <p className="mb-4 text-sm leading-6 text-slate-600">
        <span className="font-semibold text-slate-800">Technologies:</span> {technologies.join(", ")}
      </p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-fit items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
        >
          View Project
        </a>
      )}
    </article>
  );
}
