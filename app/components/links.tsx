import Link from "./ui/link";

type Socials = {
  title: string;
  links: {
    service: string;
    username: string;
    link: string;
  }[];
};

function Links({ title, links }: Socials) {
  return (
    <footer>
      <h2>{title}</h2>

      <table className="mt-2">
        <tbody>
          {links.map((link) => (
            <tr key={link.service}>
              <td>
                <h3 className="text-neutral-400">{link.service}</h3>
              </td>

              <td className="pl-8">
                <Link href={link.link}>{link.username}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </footer>
  );
}

export default Links;
