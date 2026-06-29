import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tools Blog - Guides, Tutorials & News",
  description:
    "Stay updated with the latest AI tool guides, tutorials, comparisons, and industry news. Expert insights to help you choose and use the best AI tools.",
};

const blogPosts = [
  {
    slug: "chatgpt-vs-claude-2026",
    title: "ChatGPT vs Claude in 2026: Which AI Assistant Is Right for You?",
    excerpt:
      "A detailed comparison of the two leading AI chatbots. We compare writing quality, coding ability, pricing, and real-world use cases to help you decide.",
    date: "2026-06-25",
    category: "Comparison",
    readTime: "8 min read",
  },
  {
    slug: "best-ai-image-generators",
    title: "Top 5 AI Image Generators in 2026: Midjourney vs DALL-E vs Stable Diffusion",
    excerpt:
      "Which AI image generator produces the best results? We tested Midjourney V6, DALL-E 3, and Stable Diffusion SDXL across 50 prompts to find out.",
    date: "2026-06-20",
    category: "Comparison",
    readTime: "10 min read",
  },
  {
    slug: "ai-coding-tools-guide",
    title: "The Ultimate Guide to AI Coding Assistants: Copilot vs Cursor vs Claude Code",
    excerpt:
      "AI coding tools are transforming software development. Learn which AI pair programmer fits your workflow—from VS Code integration to autonomous agents.",
    date: "2026-06-18",
    category: "Guide",
    readTime: "12 min read",
  },
  {
    slug: "ai-video-generation-tools",
    title: "AI Video Generation in 2026: Runway vs Pika vs Sora - Full Comparison",
    excerpt:
      "Text-to-video AI has come a long way. We break down the leading platforms, their strengths, pricing, and which one delivers the best results for creators.",
    date: "2026-06-15",
    category: "Review",
    readTime: "9 min read",
  },
  {
    slug: "how-to-choose-ai-writing-tool",
    title: "How to Choose the Right AI Writing Tool for Your Needs",
    excerpt:
      "With dozens of AI writing tools available, picking the right one can be overwhelming. This guide walks you through the key factors to consider.",
    date: "2026-06-12",
    category: "Guide",
    readTime: "7 min read",
  },
  {
    slug: "ai-tools-small-business",
    title: "10 AI Tools Every Small Business Should Use in 2026",
    excerpt:
      "From marketing automation to customer support, these 10 AI tools can help small businesses save time, reduce costs, and compete with larger companies.",
    date: "2026-06-10",
    category: "Listicle",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">AI Tools Blog</h1>
        <p className="text-lg text-gray-600 mt-2">
          Guides, comparisons, and insights to help you navigate the AI tools landscape
        </p>
      </div>

      {/* Ad Space */}
      <div className="bg-gray-100 border border-dashed border-gray-300 rounded-xl h-24 flex items-center justify-center text-sm text-gray-400 mb-10">
        Ad Space - Banner (728×90)
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all overflow-hidden"
          >
            <div className="h-40 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
              <span className="text-4xl">📝</span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <span className="px-2 py-0.5 bg-purple-50 text-purple-700 rounded-full font-medium">
                  {post.category}
                </span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
