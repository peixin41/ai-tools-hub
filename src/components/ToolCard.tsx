import Link from "next/link";
import type { Tool } from "@/data/tools";

const pricingColors: Record<string, string> = {
  Free: "bg-green-100 text-green-800",
  Freemium: "bg-blue-100 text-blue-800",
  Paid: "bg-purple-100 text-purple-800",
  "Free Trial": "bg-yellow-100 text-yellow-800",
};

const categoryIcons: Record<string, string> = {
  "ai-writing": "✍️",
  "ai-image": "🎨",
  "ai-video": "🎬",
  "ai-coding": "💻",
  "ai-marketing": "📈",
  "ai-productivity": "⚡",
  "ai-audio": "🎵",
  "ai-chatbot": "🤖",
};

export default function ToolCard({ tool }: { tool: Tool }) {
  const stars = "★".repeat(Math.floor(tool.rating)) + (tool.rating % 1 >= 0.5 ? "½" : "");

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group block bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{categoryIcons[tool.category] || "🔧"}</span>
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                {tool.name}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">{tool.tagline}</p>
            </div>
          </div>
          <span
            className={`shrink-0 px-2.5 py-0.5 rounded-full text-xs font-medium ${pricingColors[tool.pricing] || "bg-gray-100 text-gray-800"}`}
          >
            {tool.pricing}
          </span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{tool.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            <span>{stars}</span>
            <span className="text-gray-400 text-xs ml-1">{tool.rating}</span>
          </div>
          <span className="text-xs text-purple-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            View details →
          </span>
        </div>
      </div>
    </Link>
  );
}
