import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { BlogPost } from "../data/blog";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

type Props = {
  post: BlogPost;
  onBack: () => void;
};

export function BlogPostPage({ post, onBack }: Props) {
  const [md, setMd] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        setError(null);
        setMd("");

        // post.file 예: "/blog/251222_FACS-net.md"
        const normalized = post.file.replace(/^\//, ""); // "/blog/a.md" -> "blog/a.md"
        const url = `${import.meta.env.BASE_URL}${normalized}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to load markdown: ${res.status} ${res.statusText}`);
        const text = await res.text();

        if (!cancelled) setMd(text);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? "Unknown error");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [post.file]);

  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <button
          onClick={onBack}
          className="mb-8 text-blue-300 hover:text-blue-200 transition-colors"
        >
          ← Back to Blog
        </button>

        <h1 className="text-white text-3xl font-bold mb-3">{post.title}</h1>
        <p className="text-gray-400 mb-10">{post.date}</p>

        {error && (
          <div className="text-red-300 bg-red-900/20 border border-red-700/40 rounded-xl p-4">
            {error}
            <div className="text-gray-300 mt-2">
              파일 경로가 <code className="text-gray-200">{post.file}</code> 인지,
              실제로 <code className="text-gray-200">public/blog/...</code> 아래에 있는지 확인하세요.
            </div>
          </div>
        )}

        {!error && md === "" && (
          <p className="text-gray-400">Loading...</p>
        )}

        {!error && md !== "" && (
          <article className="markdown">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeSanitize]}
            >
              {md}
            </ReactMarkdown>
          </article>
        )}
      </div>
    </div>
  );
}
