import Link from "next/link";
import * as ogLayout from './layout';
import { Metadata } from "next";
import Error404 from "@/components/Error404";

export const metadata: Metadata = {
  ...ogLayout.metadata,
  title: "404 - Page not found",
  description: "The page you are looking for does not exist",
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-5">
      <Error404/>
      <h2 className="text-2xl font-semibold">Page not found</h2>
      <Link href="/" className="btn btn-warning hover:btn-error">Go back home</Link>
    </div>
  );
}