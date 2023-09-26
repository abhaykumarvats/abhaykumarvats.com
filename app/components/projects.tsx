import Link from "./ui/link";

type Projects = {
  title: string;
  projects: {
    title: string;
    year: string;
    link: string;
    description: string;
    tech: string[];
  }[];
};

function Projects({ title, projects }: Projects) {
  return (
    <section>
      <h2>{title}</h2>

      {projects.map((project) => (
        <article key={project.title} className="mt-2">
          <header className="flex justify-between items-center">
            <h3>
              <Link href={project.link}>{project.title}</Link>
            </h3>
            <p className="text-neutral-500">{project.year}</p>
          </header>
          <p className="text-neutral-400">{project.description}</p>
          <p className="text-neutral-500">{project.tech.join(" • ")}</p>
        </article>
      ))}
    </section>
  );
}

export default Projects;
