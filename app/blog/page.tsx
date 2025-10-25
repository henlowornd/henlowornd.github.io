import { posts } from "@/lib/blog";
import { ArticleCard } from "./article-card";

export default function BlogOverview() {
  return (
    <div className="flex flex-col gap-10 z-10">
      <div className="page-padding">
        {posts.map((post, i) => <ArticleCard {...post} key={i}/>)}
      </div>
    </div>
  );
}
