import Post from "@/components/Post";
import { doesPostExist, getPost } from "@/lib/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const realParams = await params;
  const { slug } = realParams;

  if (doesPostExist(slug)) {
    return {
      title: getPost(slug)!.title ?? "Post",
      description: "By " + (getPost(slug)!.author ?? "Someone"),
    }
  }

  return {
    title: "Post not found",
    description: "The post you are looking for does not exist",
  }
}

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
  const realParams = await params;
  const { slug } = realParams;
  if (!doesPostExist(slug)) {
    return notFound();
  }

  const post = getPost(slug);
  if (!post) {
    return <></>
  }

  return (
    <div className={""}>
      <main className={"max-w-2xl mx-auto p-5"}>
        <div>
          <div className="flex items-end w-full space-x-1">
            <h1 className={"text-5xl font-bold justify-start"}>{post.title}</h1>
            <h2 className={"text-2xl font-semibold justify-end text-right"}>By {post.author}</h2>
          </div>
          <p>{post.date}</p>
        </div>
        <Post slug={slug}></Post>
      </main>
    </div>
  );
}