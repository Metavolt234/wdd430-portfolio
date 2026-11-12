import ProjectCard, { type ProjectCardProps } from "./ProjectCard";
import type { Project } from "@/lib/projects-db";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      {projects.map(({ id, title, description, technologies, link }) => {
        const card: ProjectCardProps = {
          title,
          description,
          technologies,
          link: link ?? undefined,
        };
        return <ProjectCard key={id} {...card} />;
      })}
    </section>
  );
}
