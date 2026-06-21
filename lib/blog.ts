import fs from "fs";
import path from "path";
import { loadFront } from "yaml-front-matter";

export interface Post {
  slug: string
  wordCount: number
  readingTime: number
  title: string
  author: string
  date: Date
  categories?: string[]
  tags: string[]
  photo?: string
  excerpt?: string
  hasAI?: boolean
}

export type Article = Post & { __content: string };

const postsDirectory = path.resolve(process.cwd(), "data/posts");

// ---------------------------------------------------------------------------
// Defensive helpers
// ---------------------------------------------------------------------------

/** Strip UTF-8 BOM so yaml-front-matter can find the --- delimiter. */
function stripBOM(content: string): string {
  return content.codePointAt(0) === 0xfeff ? content.slice(1) : content;
}

/**
 * Coerce a front-matter `date` value into a valid Date.
 * yaml-front-matter normally returns a Date for YYYY-MM-DD, but can
 * fall back to a string (or undefined) when the format is unrecognised
 * or the whole front-matter block failed to parse (e.g. BOM present).
 */
function safeDate(raw: unknown): Date | null {
  if (raw instanceof Date && !isNaN(raw.getTime())) return raw;
  if (typeof raw === "string") {
    const d = new Date(raw);
    if (!isNaN(d.getTime())) return d;
  }
  return null;
}

function warn(fileName: string, reason: string): void {
  if (process.env.NODE_ENV !== "production") {
    console.warn(`[blog] Skipping "${fileName}": ${reason}`);
  }
}

// ---------------------------------------------------------------------------
// Core
// ---------------------------------------------------------------------------

export function getAllArticles<T extends boolean = false>(
  containContent: T
): T extends true ? Article[] : Post[] {
  const list: (Post | Article)[] = [];
  const files = fs.readdirSync(postsDirectory);

  for (const fileName of files) {
    const filePath = path.join(postsDirectory, fileName);
    const raw = fs.readFileSync(filePath, "utf-8");
    const cleaned = stripBOM(raw);

    let front: Record<string, unknown> & { __content?: string };
    try {
      front = loadFront(cleaned);
    } catch {
      warn(fileName, "YAML parse error");
      continue;
    }

    const date = safeDate(front.date);
    if (!date) {
      warn(fileName, `invalid or missing date (got ${JSON.stringify(front.date)})`);
      continue;
    }

    const wordCount = (front.__content ?? "").length;
    const readingTime = Math.max(1, Math.round(wordCount / 300));

    if (!containContent) {
      const { __content, ...info } = front;
      (list as Post[]).push({
        ...info,
        slug: fileName.replace(/\.md$/, ""),
        date,
        wordCount,
        readingTime,
      } as Post);
    } else {
      list.push({
        ...front,
        slug: fileName.replace(/\.md$/, ""),
        date,
        wordCount,
        readingTime,
      } as Article);
    }
  }

  list.sort((a, b) => b.date.getTime() - a.date.getTime());
  return list as T extends true ? Article[] : Post[];
}

const posts: Post[] = getAllArticles(false);
export { posts };

export function getArticle(slug: string): Article | null {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const cleaned = stripBOM(raw);

  let front: Record<string, unknown> & { __content: string };
  try {
    front = loadFront(cleaned) as Article;
  } catch {
    return null;
  }

  const date = safeDate(front.date);
  if (!date) return null;

  const wordCount = front.__content.length;
  const readingTime = Math.max(1, Math.round(wordCount / 300));

  return {
    ...front,
    slug,
    date,
    wordCount,
    readingTime,
  } as Article;
}

export function getPostByTitle(title: string): Post | null {
  return posts.find(p => p.title === title) ?? null;
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter(
    p => p.categories?.includes(category) &&
      !posts.some(q => q.title === p.title && q.slug !== p.slug)
  );
}

export function getPostsByTag(tag: string): Post[] {
  return posts.filter(p => p.tags.includes(tag));
}

export function getTags(): { tag: string; amount: number }[] {
  const map = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.tags) {
      map.set(tag, (map.get(tag) ?? 0) + 1);
    }
  }
  return Array.from(map, ([tag, amount]) => ({ tag, amount }));
}