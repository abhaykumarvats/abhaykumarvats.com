import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import Header from "~/components/header";
import About from "~/components/about";
import Work from "~/components/work";
import Projects from "~/components/projects";
import Links from "~/components/links";
import type { LinksType } from "~/lib/types";

export const meta: MetaFunction = () => {
  return [
    { title: "Abhay Kumar — The UI Guy" },
    { name: "description", content: "Homepage of Abhay Kumar's UI portfolio" },
  ];
};

export function loader() {
  const header = {
    title: "Abhay Kumar",
    subtitle: "The UI Guy",
    email: "namaste@abhaykumarvats.com",
  };

  const about = {
    title: "About",
    description:
      "Namaste, I'm Abhay. A Frontend Engineer with 4+ years of industry experience. Proficient in React and its ecosystem. Committed to crafting clean and intuitive user interfaces. Let's connect!",
  };

  const work = {
    title: "Work",
    jobs: [
      {
        tenure: "May'23 —  Aug'23",
        type: "contract",
        title: "Senior Software Engineer — MiddlewareHQ",
        link: "https://www.middlewarehq.com",
        description:
          "Worked closely with the CPO to create an advanced web dashboard for engineering managers.",
        skills: ["React", "Next.js", "TypeScript", "CSS"],
      },
      {
        tenure: "Jan'22 — Apr'23",
        type: "full-time",
        title: "Software Engineer — Credgenics",
        link: "https://www.credgenics.com",
        description:
          "Led frontend of Calling vertical, establishing a reliable system serving 1.5k monthly active users doing 1 crore monthly calls.",
        skills: ["React", "Redux", "JavaScript", "CSS"],
      },
      {
        tenure: "Dec'20 — Jan'22",
        type: "full-time",
        title: "Frontend Engineer — Avizva",
        link: "https://www.avizva.com",
        description:
          "Built an alerts functionality from scratch using WebSocket, praised by teammates for excellent implementation.",
        skills: ["React", "Redux", "JavaScript", "CSS"],
      },
      {
        tenure: "Aug'19 — Dec'20",
        type: "full-time",
        title: "Test Engineer — Altran",
        link: "https://www.linkedin.com/company/altran",
        description:
          "Consistently identified and reported critical bugs to ensure the robustness of GoPro MAX and Hero8 Black.",
        skills: ["Testrail", "Jira"],
      },
      {
        tenure: "Jun'18 — Aug'18",
        type: "internship",
        title: "Full Stack Developer — GTM Catalyst",
        link: "https://www.linkedin.com/company/gtm-catalyst",
        description:
          "Created a dashboard using Node.js and SQL Server from the ground up, completing it within a tight deadline of two months.",
        skills: ["jQuery", "Kendo UI", "Express.js", "SQL Server"],
      },
    ],
  };

  const projects = {
    title: "Projects",
    projects: [
      {
        title: "fifo",
        year: "2023",
        link: "https://github.com/abhaykumarvats/fifo",
        description:
          "A simple and easy rotating queues management web app. Built to keep track of players' turns in street cricket.",
        tech: ["SvelteKit", "TypeScript", "TailwindCSS"],
      },
    ],
  };

  const links: LinksType = {
    title: "Links",
    links: [
      {
        service: "LinkedIn",
        username: "@abhaykumarvats",
        link: "https://www.linkedin.com/in/abhaykumarvats",
      },
      {
        service: "GitHub",
        username: "@abhaykumarvats",
        link: "https://github.com/abhaykumarvats",
      },
      {
        service: "Twitter",
        username: "@abhaykumarvats",
        link: "https://twitter.com/abhaykumarvats",
      },
    ],
  };

  return json({ header, about, work, projects, links });
}

export default function Index() {
  const { header, about, work, projects, links } =
    useLoaderData<typeof loader>();

  return (
    <main className="container px-4 py-8 sm:w-2/3 md:w-1/3 sm:mx-auto flex flex-col gap-8">
      <Header {...header} />
      <About {...about} />
      <Work {...work} />
      <Projects {...projects} />
      <Links {...links} />
    </main>
  );
}
