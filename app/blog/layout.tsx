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
    <div className="overflow-y-auto" data-blog>
      {children}
    </div>
  );
}
