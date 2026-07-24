"use client";

import { useState } from "react";
import styles from "./NewsletterForm.module.css";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    
    // Mock API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1200);
  };

  return (
    <div className={styles.newsletterCard}>
      <h3>Join the Newsletter</h3>
      <p>
        Get notified when new articles on React, Next.js, and modern software
        engineering roadmaps are published. No spam, unsubscribe anytime.
      </p>

      {status === "success" ? (
        <div className={styles.success}>
          <span>✓ Thank you for subscribing! Check your inbox soon.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className={styles.input}
            disabled={status === "loading"}
            required
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn btn-primary"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )}
    </div>
  );
}
