import { ArrowTopRightIcon } from "@radix-ui/react-icons";

type Link = {
  className?: string;
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

function Link({
  href,
  className = "",
  icon: Icon = <ArrowTopRightIcon />,
  children,
}: Link) {
  return (
    <a
      className={"hover:underline flex gap-1 items-center " + className}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children} {Icon}
    </a>
  );
}

export default Link;
