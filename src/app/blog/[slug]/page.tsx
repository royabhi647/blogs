import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import MdxContent from "@/components/MdxContent/MdxContent";
import NewsletterForm from "@/components/NewsletterForm/NewsletterForm";
import AdSlot from "@/components/AdSlot/AdSlot";
import { siteConfig } from "@/config/site";
import styles from "./post.module.css";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for static site generation
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamic SEO Metadata
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      authors: [siteConfig.author.name],
      images: [
        {
          url: `${siteConfig.url}/og-image.jpg`, // Default fallback OG image
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
    },
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Format date nicely (e.g. July 24, 2026)
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    "headline": post.title,
    "description": post.summary,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": siteConfig.author.name,
      "url": `${siteConfig.url}/about`,
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/logo.png`,
      },
    },
  };

  return (
    <article className={styles.container}>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back to Home Link */}
      <Link href="/" className={styles.backLink}>
        <ArrowLeft size={16} />
        <span>Back to articles</span>
      </Link>

      {/* Post Header */}
      <header className={styles.header}>
        <span className={styles.category}>{post.category}</span>
        <h1 className={styles.title}>{post.title}</h1>
        
        <div className={styles.meta}>
          <div className={styles.author}>
            <div className={styles.avatar}>{siteConfig.author.avatar}</div>
            <div>
              <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>
                {siteConfig.author.name}
              </span>
              <span style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                {siteConfig.author.role}
              </span>
            </div>
          </div>

          <div className={styles.metaItem}>
            <Calendar size={16} />
            <span>{formatDate(post.date)}</span>
          </div>

          <div className={styles.metaItem}>
            <Clock size={16} />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </header>

      {/* Top Banner Ad */}
      <AdSlot id="post-top-ad" type="horizontal" />

      {/* Post Body (MDX Content) */}
      <div className={styles.body}>
        <MdxContent source={post.content} />
      </div>

      {/* Inline Native Ad */}
      <AdSlot id="post-bottom-ad" type="inline" />

      {/* Newsletter Signup (Engagement) */}
      <NewsletterForm />
    </article>
  );
}
