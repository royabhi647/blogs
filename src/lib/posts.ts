import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIRECTORY = path.join(process.cwd(), "content/posts");

export interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
  category: string;
  coverImage?: string;
  readingTime: number;
  content: string;
  featured?: boolean;
}

// Estimate reading time in minutes
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Ensure the directory exists
function ensureDirectoryExists() {
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    fs.mkdirSync(POSTS_DIRECTORY, { recursive: true });
  }
}

export function getAllPosts(): Post[] {
  ensureDirectoryExists();
  
  const fileNames = fs.readdirSync(POSTS_DIRECTORY);
  
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(POSTS_DIRECTORY, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      
      const { data, content } = matter(fileContents);
      const readingTime = calculateReadingTime(content);
      
      return {
        slug,
        title: data.title || "Untitled",
        date: data.date || new Date().toISOString().split("T")[0],
        summary: data.summary || "",
        category: data.category || "General",
        coverImage: data.coverImage || "",
        featured: data.featured || false,
        readingTime,
        content,
      } as Post;
    });
  
  // Sort posts by date descending
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  ensureDirectoryExists();
  
  const mdxPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);
  const mdPath = path.join(POSTS_DIRECTORY, `${slug}.md`);
  let fullPath = "";
  
  if (fs.existsSync(mdxPath)) {
    fullPath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    fullPath = mdPath;
  } else {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const readingTime = calculateReadingTime(content);
  
  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || new Date().toISOString().split("T")[0],
    summary: data.summary || "",
    category: data.category || "General",
    coverImage: data.coverImage || "",
    featured: data.featured || false,
    readingTime,
    content,
  };
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = posts.map((post) => post.category);
  return Array.from(new Set(categories));
}
