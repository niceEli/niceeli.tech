import Posts from "@/components/Posts";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const parem = await params;

  const slug = decodeURIComponent(parem.slug);

  return <>
    <main className={"max-w-2xl mx-auto p-5"}>
      <Posts categories={slug}/>
    </main>
  </>
}