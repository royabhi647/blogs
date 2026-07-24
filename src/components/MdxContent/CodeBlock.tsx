"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import styles from "./CodeBlock.module.css";

interface CodeBlockProps {
  children: React.ReactNode;
}

export default function CodeBlock({ children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // Extract code text and language from children
  let codeText = "";
  let language = "code";

  // Check if children is a <code> element
  if (React.isValidElement(children) && children.type === "code") {
    const codeProps = children.props as { className?: string; children?: React.ReactNode };
    codeText = String(codeProps.children || "").trim();
    
    // Parse language from className, e.g., 'language-javascript'
    const className = codeProps.className || "";
    const match = className.match(/language-(\w+)/);
    if (match) {
      language = match[1];
    }
  } else {
    codeText = String(children || "").trim();
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>{language}</span>
        <button onClick={handleCopy} className={styles.copyButton} aria-label="Copy code">
          {copied ? (
            <>
              <Check size={14} style={{ color: "var(--success)" }} />
              <span style={{ color: "var(--success)" }}>Copied</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className={styles.pre}>
        {children}
      </pre>
    </div>
  );
}
