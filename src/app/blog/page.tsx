import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Blog() {
  // Read all markdown files from posts directory
  const postsDirectory = path.join(process.cwd(), "personal-website/src/posts");
  const filenames = fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));

  // Parse frontmatter from each file
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title || filename,
      date: data.date || null,
    };
  });

  // Sort posts by date (newest first)
  posts.sort((a, b) => (b.date || "") > (a.date || "") ? 1 : -1);

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      {posts.length === 0 ? (
        <p className="mb-4">No blog posts yet!</p>
      ) : (
        <ul className="mb-8">
          {posts.map((post) => (
            <li key={post.slug} className="mb-4">
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline text-xl">
                {post.title}
              </Link>
              {post.date && (
                <span className="ml-2 text-gray-500 text-sm">({post.date})</span>
              )}
            </li>
          ))}
        </ul>
      )}
      <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
    </main>
  );
} 