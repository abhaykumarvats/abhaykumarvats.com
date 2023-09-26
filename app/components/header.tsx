import Link from "./ui/link";

type Header = {
  title: string;
  subtitle: string;
  email: string;
};

function Header({ title, subtitle, email }: Header) {
  return (
    <header className="flex gap-4 items-center flex-wrap">
      <img
        className="w-16 aspect-square rounded-full"
        src="https://avatars.githubusercontent.com/u/19573579"
        alt="avatar"
      />

      <div>
        <h1>
          {title} <span className="text-neutral-400 italic">— {subtitle}</span>
        </h1>

        <Link className="text-neutral-500" href={`mailto:${email}`} icon={null}>
          {email}
        </Link>
      </div>
    </header>
  );
}

export default Header;
