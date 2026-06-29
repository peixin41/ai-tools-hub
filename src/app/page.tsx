import Link from "next/link";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import ToolCard from "@/components/ToolCard";

export default function HomePage() {
  const featuredTools = tools.filter((t) => t.rating >= 4.6).slice(0, 6);
  const recentTools = tools.slice(0, 9);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2NjY2NjYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Discover the Best{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI Tools
              </span>{" "}
              in 2026
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
              Expert reviews, honest comparisons, and up-to-date rankings for
              100+ AI tools. Find the perfect tool for writing, coding, design,
              and more.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/compare"
                className="w-full sm:w-auto px-8 py-3.5 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg shadow-purple-200"
              >
                Compare AI Tools
              </Link>
              <Link
                href="#categories"
                className="w-full sm:w-auto px-8 py-3.5 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:border-purple-300 hover:text-purple-600 transition-all"
              >
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Space - Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-gray-100 border border-dashed border-gray-300 rounded-xl h-24 flex items-center justify-center text-sm text-gray-400">
          Ad Space - Banner (728×90)
        </div>
      </div>

      {/* Featured Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Featured Tools</h2>
            <p className="text-gray-500 mt-1">Top-rated AI tools handpicked by our editors</p>
          </div>
          <Link
            href="/compare"
            className="text-sm font-medium text-purple-600 hover:text-purple-700"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      {/* Ad Space - Mid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-gray-100 border border-dashed border-gray-300 rounded-xl h-24 flex items-center justify-center text-sm text-gray-400">
          Ad Space - Leaderboard (970×90)
        </div>
      </div>

      {/* Categories */}
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Browse by Category</h2>
          <p className="text-gray-500 mt-1">Find the right AI tool for your specific needs</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all"
            >
              <span className="text-3xl block mb-3">{cat.icon}</span>
              <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                {cat.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">All AI Tools</h2>
            <p className="text-gray-500 mt-1">Complete directory of AI tools reviewed by our team</p>
          </div>
          <Link
            href="/compare"
            className="text-sm font-medium text-purple-600 hover:text-purple-700"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-12">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-10 sm:p-14 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Can&apos;t decide between two tools?
          </h2>
          <p className="text-lg text-purple-100 mb-8 max-w-xl mx-auto">
            Use our side-by-side comparison tool to see features, pricing, and
            ratings at a glance.
          </p>
          <Link
            href="/compare"
            className="inline-flex px-8 py-3.5 text-base font-medium text-purple-700 bg-white rounded-xl hover:bg-purple-50 transition-all shadow-lg"
          >
            Start Comparing →
          </Link>
        </div>
      </section>
    </>
  );
}
