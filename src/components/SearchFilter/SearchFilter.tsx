"use client";

import { useState, useTransition } from "react";
import { Search } from "lucide-react";
import { Post } from "@/lib/posts";
import PostCard from "../PostCard/PostCard";
import styles from "./SearchFilter.module.css";

interface SearchFilterProps {
  posts: Post[];
  categories: string[];
}

export default function SearchFilter({ posts, categories }: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [, startTransition] = useTransition();

  // Combine categories with "All" option
  const allCategories = ["All", ...categories];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    startTransition(() => {
      setSearchQuery(value);
    });
  };

  const handleCategorySelect = (category: string) => {
    startTransition(() => {
      setSelectedCategory(category);
    });
  };

  // Filter posts based on query and category
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.container}>
      {/* Search Input */}
      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
        <Search className={styles.searchIcon} size={20} />
      </div>

      {/* Category Pills */}
      <ul className={styles.categoriesList}>
        {allCategories.map((category) => (
          <li key={category}>
            <button
              onClick={() => handleCategorySelect(category)}
              className={`${styles.categoryBtn} ${
                selectedCategory === category ? styles.categoryActive : ""
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className={styles.grid}>
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className={styles.noResults}>
          <h4>No posts found</h4>
          <p>We couldn't find any articles matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}
