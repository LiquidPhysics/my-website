import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm [Your Name]</h1>
      <p className="mb-8 text-lg text-center max-w-xl">Welcome to my personal website! Here you'll find my blog and my resume. Feel free to explore.</p>
      <nav className="flex gap-6">
        <a href="/blog" className="text-blue-600 hover:underline text-xl">Blog</a>
        <a href="/resume" className="text-blue-600 hover:underline text-xl">Resume</a>
      </nav>
    </main>
  );
}
