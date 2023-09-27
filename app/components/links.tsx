import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

import Link from "./ui/link";

import type { LinksType } from "~/lib/types";

const serviceToIconMapping = {
  LinkedIn: LinkedInLogoIcon,
  GitHub: GitHubLogoIcon,
  Twitter: TwitterLogoIcon,
};

function Links({ title, links }: LinksType) {
  return (
    <footer>
      <h2 className="mb-2">{title}</h2>

      <div className="flex justify-between items-center flex-wrap gap-1">
        {links.map((link) => {
          const Icon = serviceToIconMapping[link.service];

          return (
            <Link key={link.service} href={link.link}>
              <Icon /> {link.service}
            </Link>
          );
        })}

        <p className="text-neutral-400">@abhaykumarvats</p>
      </div>
    </footer>
  );
}

export default Links;
