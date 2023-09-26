type About = { title: string; description: string };

function About({ title, description }: About) {
  return (
    <section>
      <h2 className="mb-2">{title}</h2>
      <p className="text-neutral-400">{description}</p>
    </section>
  );
}

export default About;
