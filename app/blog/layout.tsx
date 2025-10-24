import type { Metadata } from "next";

import { blogName, blogDescription } from "@/lib/global";

import "katex/dist/katex.min.css";
import "./github-dark.css";
import "./github-light.css";
import "./blog.css";

export const metadata: Metadata = {
  title: blogName,
  description: blogDescription
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col gap-10 overflow-y-auto" data-blog>
      <header className="w-full min-h-80 flex flex-col justify-center items-center gap-4 z-0 *:text-white">
        <h1 className="text-4xl font-semibold font-mono">{blogName}</h1>
        <p className="text-lg">{blogDescription}</p>
      </header>

      {children}
    </div>
  );
}
