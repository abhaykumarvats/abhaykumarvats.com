import Link from "./ui/link";

type Work = {
  title: string;
  jobs: {
    tenure: string;
    type: string;
    title: string;
    link: string;
    description: string;
    skills: string[];
  }[];
};

function Work({ title, jobs }: Work) {
  return (
    <section>
      <h2 className="mb-2">{title}</h2>

      <div className="flex flex-col gap-4">
        {jobs.map((job) => (
          <article key={job.title}>
            <header className="text-neutral-500 flex justify-between items-center">
              <p>{job.tenure}</p>
              <p className="text-xs uppercase tracking-widest">{job.type}</p>
            </header>

            <h3>
              <Link href={job.link}>{job.title}</Link>
            </h3>

            <p className="text-neutral-400">{job.description}</p>

            <p className="text-neutral-500">{job.skills.join(" • ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Work;
