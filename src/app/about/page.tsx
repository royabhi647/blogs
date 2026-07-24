import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Me",
  description: `Learn more about ${siteConfig.author.name}, a ${siteConfig.author.role} writing about React, Next.js, and modern frontend technologies.`,
};

export default function AboutPage() {
  const skills = [
    { title: "React.js", desc: "Hooks, reconciliation, state architecture, optimization" },
    { title: "Next.js", desc: "App Router, Server Components, SSR/SSG, SEO API" },
    { title: "TypeScript", desc: "Strong typing, interface definitions, generics" },
    { title: "JavaScript (ES6+)", desc: "Async/await, event loops, functional programming" },
    { title: "CSS & Design", desc: "Vanilla CSS, responsive layout, CSS variables, modular styling" },
    { title: "AI Tooling", desc: "Agentic coding integrations, productivity workflows" },
  ];

  return (
    <div className={styles.container}>
      {/* Profile Section */}
      <section className={styles.profileSection}>
        <div className={styles.avatarWrapper}>
          <div className={styles.avatar}>{siteConfig.author.avatar}</div>
        </div>
        <div className={styles.profileContent}>
          <h1 className={styles.title}>{siteConfig.author.name}</h1>
          <p className={styles.role}>{siteConfig.author.role} & Tech Blogger</p>
          <div className={styles.bio}>
            <p>
              Hi, I'm {siteConfig.author.name}. I am a frontend developer and software engineer
              with a passion for crafting fast, beautiful, and accessible web experiences.
            </p>
            <p>
              I started **{siteConfig.name}** as a way to share my knowledge with other developers.
              My goal is to demystify complex frontend concepts—from React rendering cycles to
              Next.js SEO best practices—through practical, hands-on tutorials.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Why I Write</h2>
        <div className={styles.bio}>
          <p>
            Building website projects is easy; building fast, production-ready systems is the
            real challenge. In my articles, I focus on the "why" behind design decisions.
            I write because teaching is the best way to consolidate my own learning, and helping the
            developer community grow is highly rewarding.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Core Tech Skillset</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill.title} className={`glass-card ${styles.skillCard}`}>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.section} style={{ textAlign: "center", marginTop: "5rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>Have a Project in Mind?</h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
          I am currently open for full-time frontend roles, contract opportunities, and consulting.
        </p>
        <Link href="/contact" className="btn btn-primary">
          <span>Get in touch</span>
          <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
