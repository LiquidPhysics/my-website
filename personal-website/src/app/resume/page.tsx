import Link from "next/link";

export default function Resume() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Resume</h1>
      <p className="mb-4">Resume content coming soon!</p>
      <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
    </main>
  );
} 