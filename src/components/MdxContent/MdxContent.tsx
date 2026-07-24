import { MDXRemote } from "next-mdx-remote/rsc";
import CodeBlock from "./CodeBlock";
import styles from "./MdxContent.module.css";

// Map custom markdown components
const mdxComponents = {
  pre: CodeBlock,
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} loading="lazy" decoding="async" alt={props.alt || "DevScale article image"} />
  ),
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
