import { Feed } from "feed";
import { blogName, blogDescription } from "./global";
import { getAllArticles } from "./blog";

const feed = new Feed({
  title: blogName,
  description: blogDescription,
  id: "https://henlo.cc/blog",
  link: "https://henlo.cc/blog",
  language: "zh-cn",
  favicon: "https://henlo.cc/static/icon.png",
  copyright: `Copyright (c) Deed9189 ${new Date().getFullYear()}`,
  feedLinks: {
    atom: "https://henlo.cc/rss/feed.xml",
    json: "https://henlo.cc/rss/feed.json",
  },
  author: { name: "Deed9189", link: "https://henlo.cc" }
});

getAllArticles(true).forEach(article => {
  feed.addItem({
    title: article.title,
    id: `https://henlo.cc/blog/${article.slug}`,
    link: `https://henlo.cc/blog/${article.slug}`,
    description: article.excerpt,
    content: article.__content,
    author: [{ name: article.author }],
    date: article.date,
    image: article.photo,
  });
});

// export const atom = feed.atom1();
export const json = feed.json1();
