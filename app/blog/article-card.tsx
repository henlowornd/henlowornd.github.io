import type { Post } from "@/lib/blog";
import Link from "next/link";
import { Markdown } from "@/components/markdown";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

export function ArticleCard(post: Post) {
  return (
    <div className="border-b-2 border-b-[var(--separator)] border-muted last:border-none pt-3 pb-5 flex flex-col gap-2">
      <div className="flex justify-between items-center max-sm:block">
        <Button
          className="text-xl text-foreground font-semibold p-0 max-sm:inline-block max-sm:whitespace-normal max-sm:break-words"
          variant="link"
          asChild>
          <Link href={"/blog/"+ post.slug}>
            {post.title}
          </Link>
        </Button>
        <div className="space-x-2 [&>*]:text-sm [&>*]:text-nowrap max-sm:float-right">
          <span>{post.wordCount >= 1000 ? (Math.round(post.wordCount / 100) / 10 +"k") : post.wordCount} 字</span>
          <span>{post.readingTime} mins</span>
        </div>
      </div>
      <div className="*:text-secondary-foreground *:text-[11pt] *:max-sm:whitespace-normal *:max-sm:break-words">
        <Markdown>{post.excerpt as string}</Markdown>
      </div>
      <div className="flex justify-between">
        <div className="space-x-2 [&>*]:text-sm [&>*]:text-muted-foreground">
          {post.tags.map((tag, i) => (
            <Link
              href={`/blog/tag/${tag}`}
              key={i}>
              {"#"+ tag}
            </Link>
          ))}
        </div>
        <span className="text-secondary-foreground text-sm text-nowrap max-sm:float-right">
          {formatDate(post.date)}
        </span>
      </div>
    </div>
  );
}
