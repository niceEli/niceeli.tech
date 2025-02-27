import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eli Cardoso's Portfolio",
  description: "Portfolio Made By Eli Cardoso, \"niceEli\" on GitHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen h-screen flex flex-col subpixel-antialiased overflow-x-hidden">
        <a rel="me" href="https://mastodon.gamedev.place/@niceEli" className="hidden">Mastodon</a>
        <header className="sticky z-10 top-0 bg-base-200 flex p-1.5 items-center w-full justify-normal space-x-2">
          <div>
            <ul className="menu menu-horizontal text-right">
              <li>
                <details>
                  <summary>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-5 w-5 stroke-current">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                  </summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li><Link href={"/posts"}>All Posts</Link></li>
                    <li><Link href={"/category/Main"}>Blog</Link></li>
                    <li>
                      <details>
                        <summary>Portfolio</summary>
                        <ul className="bg-base-100 rounded-t-none p-2">
                          <li><Link href={"/category/Personal Work"}>Personal Work</Link></li>
                          <li><Link href={"/category/Curated Collection"}>Curated Collection</Link></li>
                          <li><Link href={"/category/Integrated Pieces"}>Integrated Pieces</Link></li>
                          <li><Link href={"/category/Community Involvement"}>Community Involvement</Link></li>
                        </ul>
                      </details>
                    </li>
                    <li><Link href={"/posts/ca"}>Creator’s Anthology</Link></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>

          <Link className={"justify-start font-semibold text-3xl hover:underline"} href={"/"}>niceEli.tech</Link>
        </header>
        <div className="h-full w-full overflow-auto">
          {children}
        </div>
        <footer className="footer bg-base-200">
        </footer>
      </body>
    </html>
  );
}
