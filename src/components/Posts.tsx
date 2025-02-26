/* eslint-disable @next/next/no-img-element */
import {getAllPosts, Post} from "@/lib/posts";
import Link from "next/link";

export default function Posts({ categories }: { categories: string | undefined }) {
  const posts = getAllPosts(categories);
  if (posts.length === 0) {
    return <p>No posts found!</p>;
  }

  const getTags = (tags: string[]) => {
    if (tags == undefined) {
      return "";
    }
    if (tags != undefined && tags.length == 0) {
      return "";
    }
    return "- #" + tags.join(" #");
  }

  const getImage = (post: Post) => {
    if (post.heading_image) {
      return <figure>
        <img src={post.heading_image} alt={post.title} className="aspect-video object-cover" />
      </figure>
    }
  }

  const getDivider = (idx: number, maxIdx: number) => {
    if (idx != maxIdx) {
      return <div className="divider"></div>
    }
  }

  const getCategories = (categories: unknown) => {
    if (categories == undefined) {
      return "";
    }
    return (categories as unknown as string[]).join(", ")
  }

  return (
    <ul>
      {""}
      {posts.map((post) => (
        <li key={post.slug}>
          <Link className="card bg-base-300 w-auto shadow-xl" href={"/posts/" + post.slug}>
            {getImage(post)}
            <div className="card-body">
              <h1 className="text-3xl font-semibold card-title">{post.title}</h1>
              <p>{getCategories(post.categories)} | {post.date} - {post.author} {getTags(post.tags as unknown as string[])}</p>
            </div>
          </Link>
          {getDivider(posts.indexOf(post), posts.length - 1)}
        </li>
      ))}
    </ul>
  );
}