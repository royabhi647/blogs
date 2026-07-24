import { getAllPosts, getAllCategories } from "@/lib/posts";
import SearchFilter from "@/components/SearchFilter/SearchFilter";
import PostCard from "@/components/PostCard/PostCard";
import AdSlot from "@/components/AdSlot/AdSlot";
import { siteConfig } from "@/config/site";
import styles from "./page.module.css";

export default function Home() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  
  // Find featured posts
  const featuredPosts = posts.filter((post) => post.featured).slice(0, 2);

  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "description": siteConfig.description,
    "author": {
      "@type": "Person",
      "name": siteConfig.author.name,
    },
  };

  return (
    <div className={styles.main}>
      {/* Website JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.badge}>Master Software Engineering</span>
          <h1 className={styles.title}>
            Welcome to <span className="gradient-text">{siteConfig.name}</span>
          </h1>
          <p className={styles.subtitle}>
            {siteConfig.description}
          </p>
        </div>
      </section>

      {/* Ad Banner Slot */}
      <div className="container" style={{ marginBottom: "2rem" }}>
        <AdSlot id="home-top-ad" type="horizontal" />
      </div>

      {/* Featured Posts (Only if they exist) */}
      {featuredPosts.length > 0 && (
        <section className={`${styles.featuredSection} container`}>
          <h2 className={styles.sectionTitle}>Featured Articles</h2>
          <div className={styles.featuredGrid}>
            {featuredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* All Posts Search and Filter */}
      <section className="container">
        <h2 className={styles.sectionTitle}>All Articles</h2>
        <SearchFilter posts={posts} categories={categories} />
      </section>
    </div>
  );
}
