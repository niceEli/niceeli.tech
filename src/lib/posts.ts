import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "src/posts");

export type Post = {
  slug: string;
  content: string;
  [key: string]: string;
};

export function getAllPosts(filter?: string): Post[] {
  const fileNames = fs.readdirSync(postsDir);
  const allData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { content, data } = matter(fileContents);

    if (data.published == false || data.published == "false") {
      return;
    }

    if (filter == null || filter == "") {
      return {
        slug,
        content,
        ...data,
      };
    }

    if (data.categories == undefined) {
      return;
    }

    if ((data.categories as string[]).includes(filter)) {
      return {
        slug,
        content,
        ...data,
      };
    }
  });

  const filteredPosts = allData.filter((data) => data != undefined);

  return filteredPosts.sort((a: Post, b: Post) => {
    if (!a.date) return 1;
    if (!b.date) return -1;

    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

export function doesPostExist(postName: string): boolean {
  const fullPath = path.join(postsDir, `${postName}.mdx`);
  return fs.existsSync(fullPath);
}

export function getPost(postName: string): Post | undefined {
  if (!doesPostExist(postName)) return;

  const fullPath = path.join(postsDir, `${postName}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { content, data } = matter(fileContents);

  return {
    slug: postName,
    content,

    ...data,
  };
}
