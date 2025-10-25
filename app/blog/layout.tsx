import type { Metadata } from "next";
import { blogName, blogDescription } from "@/lib/global";
import Banner from "@/assets/images/blog-banner.svg";
import Barcodes2 from "@/assets/images/barcodes-2.svg";

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
      <header className="w-full min-h-80 flex flex-col justify-center items-center gap-4 z-0 *:text-white overflow-hidden relative">
        <Banner width="100%" height="450" className="absolute top-0 left-0 -z-10"/>
        <Barcodes2 width="210"/>
      </header>

      {children}
    </div>
  );
}
