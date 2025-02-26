"use client";

import { useState, useEffect, ReactNode } from "react";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { evaluate, EvaluateOptions } from "@mdx-js/mdx";
import { MDXProps } from "mdx/types";
import remarkGfm from "remark-gfm";

type ReactMDXContent = (props: MDXProps) => ReactNode;
type Runtime = Pick<EvaluateOptions, "jsx" | "jsxs" | "Fragment">;

const runtime = { jsx, jsxs, Fragment } as Runtime;

export default function PostClientRenderer({ source }: { source: string }) {
  const [MdxContent, setMdxContent] = useState<ReactMDXContent>(() => () => null);

  useEffect(() => {
    evaluate(source, {
      ...runtime,

      remarkPlugins: [remarkGfm], 
    }).then((result) => {
      setMdxContent(() => result.default);
    });
  }, [source]);

  if (!MdxContent) return <></>;

  return <div className="markdown">
    <MdxContent />
  </div>;
}