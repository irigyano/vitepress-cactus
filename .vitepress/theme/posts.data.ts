import { createContentLoader } from "vitepress";
import { formatDate } from "../utils";

export interface Post {
  title: string;
  url: string;
  date: {
    time: number;
    string: string;
  };
  excerpt: string | undefined;
}

declare const data: Post[];
export { data };

export default createContentLoader("posts/*.md", {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url: url,
        excerpt,
        date: formatDate(frontmatter.date),
      }))
      .sort((a, b) => b.date.time - a.date.time);
  },
});
