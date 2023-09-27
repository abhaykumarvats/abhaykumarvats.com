export type LinksType = {
  title: string;
  links: {
    service: "LinkedIn" | "GitHub" | "Twitter";
    username: string;
    link: string;
  }[];
};
