import { doesPostExist, getPost } from "@/lib/posts";
import { notFound } from "next/navigation";
import PostClientRenderer from "@/components/PostClientRenderer";


export default function Post({slug}: {slug: string}) {
  if (!doesPostExist(slug)) {
    return notFound();
  }

  const post = getPost(slug);
  if (!post) {
    return <></>
  }

  const getMastodonLink = () => {
    console.log(post);
    if (!post.mastodon) {
      return;
    }
    return <meta name="fediverse:creator" content={post.mastodon}></meta>
  }

  return <>
    {
    /**
     * <div className="markdown">
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}
        components={
          {
            hr() {
              return <div className="divider"/>
            }
          }
        }
      >
        {post.content}
      </Markdown>
    </div>
     */}
    {getMastodonLink()}
    <PostClientRenderer source={post.content}/>
  </>;
}