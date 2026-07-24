import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Post } from "@/lib/posts";
import styles from "./PostCard.module.css";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  // Format date nicely (e.g. July 24, 2026)
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
      <article className={`glass-card ${styles.card}`}>
        <span className={styles.category}>{post.category}</span>
        
        <h3 className={styles.title}>
          {post.title}
        </h3>
        
        <p className={styles.summary}>{post.summary}</p>
        
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <Calendar size={14} />
            <span>{formatDate(post.date)}</span>
          </div>
          
          <div className={styles.metaItem}>
            <Clock size={14} />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
        
        <div className={styles.readMore}>
          <span>Read Article</span>
          <ArrowRight size={14} />
        </div>
      </article>
    </Link>
  );
}
