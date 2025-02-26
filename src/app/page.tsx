import Link from "next/link";

export default function Page() {
  return <>
    <main className="h-full">
      <div className="hero h-full">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Eli Cardoso</h1>
            <p className="py-6">
              Hello I Am Eli Cardoso, I like to code, do art, and make games!
            </p>
            <div className="space-x-2">
              <Link href={"/posts"} className="btn btn-primary">Posts</Link>
              <Link href={"https://mastodon.gamedev.place/@niceEli"} className="btn btn-secondary">Mastodon</Link>
              <Link href={"https://x.com/niceEli1"} className="btn btn-accent">X</Link>
              <Link href={"https://github.com/niceEli/"} className="btn btn-neutral">Github</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
}