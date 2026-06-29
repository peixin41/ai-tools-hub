import Link from "next/link";
import type { Metadata } from "next";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Compare AI Tools Side-by-Side - Find the Best Tool for You",
  description:
    "Compare AI tools side-by-side. See features, pricing, ratings, pros and cons at a glance. Make informed decisions about which AI tool to choose.",
};

export default function ComparePage() {
  const allTools = tools.slice(0, 12);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Compare AI Tools</h1>
        <p className="text-lg text-gray-600 mt-2">
          Select two tools to see a detailed side-by-side comparison
        </p>
      </div>

      {/* Ad Space */}
      <div className="bg-gray-100 border border-dashed border-gray-300 rounded-xl h-24 flex items-center justify-center text-sm text-gray-400 mb-10">
        Ad Space - Leaderboard (970×90)
      </div>

      {/* Quick Compare Grid */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl border border-gray-200">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left p-4 font-semibold text-gray-700 w-48">Tool</th>
              {allTools.map((tool) => (
                <th key={tool.slug} className="text-center p-4 min-w-[160px]">
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="font-semibold text-gray-900 hover:text-purple-600 transition-colors"
                  >
                    {tool.name}
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-4 text-sm font-medium text-gray-600">Category</td>
              {allTools.map((tool) => {
                const cat = categories.find((c) => c.slug === tool.category);
                return (
                  <td key={tool.slug} className="text-center p-4 text-sm text-gray-500">
                    {cat?.icon} {cat?.name}
                  </td>
                );
              })}
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-4 text-sm font-medium text-gray-600">Pricing</td>
              {allTools.map((tool) => (
                <td key={tool.slug} className="text-center p-4">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      tool.pricing === "Free"
                        ? "bg-green-100 text-green-800"
                        : tool.pricing === "Freemium"
                          ? "bg-blue-100 text-blue-800"
                          : tool.pricing === "Paid"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {tool.pricing}
                  </span>
                </td>
              ))}
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-4 text-sm font-medium text-gray-600">Rating</td>
              {allTools.map((tool) => (
                <td key={tool.slug} className="text-center p-4">
                  <span className="text-yellow-500 text-sm">
                    {"★".repeat(Math.floor(tool.rating))}
                    {tool.rating % 1 >= 0.5 ? "½" : ""}
                  </span>
                  <span className="text-gray-600 text-sm ml-1">{tool.rating}</span>
                </td>
              ))}
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-4 text-sm font-medium text-gray-600">Best For</td>
              {allTools.map((tool) => (
                <td key={tool.slug} className="text-center p-4">
                  <div className="flex flex-wrap justify-center gap-1">
                    {tool.bestFor.slice(0, 2).map((bf, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-0.5 bg-purple-50 text-purple-700 rounded"
                      >
                        {bf}
                      </span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 text-sm font-medium text-gray-600">Link</td>
              {allTools.map((tool) => (
                <td key={tool.slug} className="text-center p-4">
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                  >
                    View Details →
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <p className="text-gray-500 mb-4">
          Want a deeper comparison? Click on any tool to see its full review page.
        </p>
        <Link
          href="/"
          className="inline-flex px-6 py-3 text-sm font-medium text-purple-600 bg-purple-50 rounded-xl hover:bg-purple-100 transition-all"
        >
          Back to All Tools
        </Link>
      </div>
    </div>
  );
}
