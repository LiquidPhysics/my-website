import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const postPath = path.join(process.cwd(), "personal-website/src/posts", `${slug}.md`);

  if (!fs.existsSync(postPath)) {
    return (
      <main className="max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link href="/blog" className="text-blue-600 hover:underline">← Back to Blog</Link>
      </main>
    );
  }

  const fileContents = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2">{data.title || slug}</h1>
      {data.date && <p className="text-gray-500 mb-6">{data.date}</p>}
      <article className="prose prose-neutral dark:prose-invert" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      <Link href="/blog" className="text-blue-600 hover:underline mt-8 block">← Back to Blog</Link>
    </main>
  );
} 