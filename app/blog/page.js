import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <h1>blog</h1>
      <p>
        <Link href="/blog/post-1">게시글 1</Link>
        <Link href="/blog/post-2">게시글 2</Link>
      </p>
    </main>
  );
}
