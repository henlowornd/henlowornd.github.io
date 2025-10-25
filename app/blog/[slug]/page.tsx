import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock, FileClock, FileText, Info, UserPen } from "lucide-react";
import { blogName, siteKeywords } from "@/lib/global";
import { getArticle } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { Markdown } from "@/components/markdown";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if(!article) return {};

  return {
    title: `${blogName} - ${article?.title}`,
    description: article?.excerpt,
    keywords: [...siteKeywords, ...article.tags],
  };
}

export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if(!article) {
    /** @todo */
    return <div></div>;
  }

  return (
    <div className="page-padding flex flex-col gap-6">
      <div className="mt-6 flex flex-col gap-4">
        <h1 className="text-4xl">{article.title}</h1>
        <div className="flex items-center gap-2">
          <UserPen size={20}/>
          <span>Author {article.author}</span>
        </div>
        <div className="flex gap-4 flex-wrap [&>*]:whitespace-nowrap [&>*]:inline-flex [&>*]:items-center [&>*]:gap-2">
          <div>
            <FileText size={20}/>
            <span>{article.wordCount >= 1000 ? (Math.round(article.wordCount / 100) / 10 +"k") : article.wordCount} 字</span>
          </div>
          <div>
            <FileClock size={20}/>
            <span>{article.readingTime} mins</span>
          </div>
          <div>
            <CalendarClock size={20}/>
            <span>{formatDate(article.date)}</span>
          </div>
          <div>
            {article.tags.map((tag, i) => (
              <Link
                href={`/blog/tag/${tag}`}
                key={i}>
                {"#"+ tag}
              </Link>
            ))}
          </div>
        </div>
        {article.hasAI && (
          <Alert className="rounded-md border-none">
            <Info />
            <AlertTitle>本文包含AI生成内容</AlertTitle>
            <AlertDescription>
              本文内容中有部分内容由AI生成，请仔细甄别
            </AlertDescription>
          </Alert>
        )}
      </div>
      <Markdown wrapper>
        {article.__content}
      </Markdown>
    </div>
  );
}
