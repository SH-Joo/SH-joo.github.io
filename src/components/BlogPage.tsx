// BlogPage.tsx
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { blogPosts } from "../data/blog";
import type { BlogPost } from "../data/blog";

type Props = {
  onSelectPost: (post: BlogPost) => void;
};

export function BlogPage({ onSelectPost }: Props) {
  const posts = blogPosts;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block h-1.5 w-20 bg-gradient-to-r from-[#003876] via-blue-500 to-blue-400 rounded-full mb-6"></div>
          <h1
            className="text-white mb-6 text-5xl font-bold"
            style={{ fontFamily: "'Georgia', 'Nanum Myeongjo', serif" }}
          >
            Blog
          </h1>
          <p className="text-gray-300 max-w-3xl text-lg">
            Sharing my research ideas here.
          </p>
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">Coming soon...</p>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              role="button"
              tabIndex={0}
              onClick={() => onSelectPost(post)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onSelectPost(post);
              }}
              className="group cursor-pointer bg-gradient-to-br from-gray-800/50 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl hover:shadow-2xl hover:border-[#003876]/70 hover:from-gray-800/70 hover:to-gray-900/60 transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="h-52 bg-gray-900/30 flex items-center justify-center relative overflow-hidden">
                {post.logo ? (
                  <img
                    src={post.logo}
                    alt={`${post.title} cover`}
                    className="w-full h-full object-contain p-4"
                    loading="lazy"
                  />
                ) : (
                  <div className="relative z-10 text-6xl font-bold text-white/30">
                    {post.title.charAt(0)}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                {/* Date */}
                <div className="flex items-center gap-2.5 text-gray-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {formatDate(post.date)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white mb-4 group-hover:text-blue-300 transition-colors text-xl font-semibold leading-snug">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-5 flex-1 leading-relaxed">
                  {post.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {post.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-blue-300 border-blue-400/40 hover:bg-blue-400/10 transition-colors px-3 py-1"
                    >
                      <Tag className="w-3 h-3 mr-1.5" />
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Read More */}
                <div className="flex items-center gap-2.5 text-blue-300 group-hover:text-blue-200 group-hover:gap-4 transition-all font-medium">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
