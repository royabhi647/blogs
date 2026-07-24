import { MDXRemote } from "next-mdx-remote/rsc";
import CodeBlock from "./CodeBlock";
import styles from "./MdxContent.module.css";

// Map custom markdown components
const mdxComponents = {
  pre: CodeBlock,
};

interface MdxContentProps {
  source: string;
}

export default function MdxContent({ source }: MdxContentProps) {
  return (
    <div className={styles.mdxContent}>
      <MDXRemote source={source} components={mdxComponents} />
    </div>
  );
}
