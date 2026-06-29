import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return { title: "Tool Not Found" };

  return {
    title: `${tool.name} Review - Features, Pricing & Alternatives`,
    description: `In-depth ${tool.name} review: ${tool.tagline}. Compare features, pricing, pros & cons, and find the best alternatives.`,
  };
}

export default async function ToolDetailPage({ params }: Props) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);

  if (!tool) notFound();

  const category = categories.find((c) => c.slug === tool.category);
  const relatedTools = tools
    .filter((t) => t.category === tool.category && t.slug !== tool.slug)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-purple-600">Home</Link>
        <span>/</span>
        <Link href={`/categories/${tool.category}`} className="hover:text-purple-600">
          {category?.name || tool.category}
        </Link>
        <span>/</span>
        <span className="text-gray-900">{tool.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🤖</span>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{tool.name}</h1>
                <p className="text-lg text-gray-600 mt-1">{tool.tagline}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                tool.pricing === "Free" ? "bg-green-100 text-green-800" :
                tool.pricing === "Freemium" ? "bg-blue-100 text-blue-800" :
                tool.pricing === "Paid" ? "bg-purple-100 text-purple-800" :
                "bg-yellow-100 text-yellow-800"
              }`}>
                {tool.pricing}
              </span>
              <span className="flex items-center gap-1 text-yellow-500">
                {"★".repeat(Math.floor(tool.rating))}
                {tool.rating % 1 >= 0.5 ? "½" : ""}
                <span className="text-gray-600 ml-1">{tool.rating}/5</span>
              </span>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                Visit {tool.name} →
              </a>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">{tool.description}</p>
          </div>

          {/* Ad Space - In Content */}
          <div className="bg-gray-100 border border-dashed border-gray-300 rounded-xl h-24 flex items-center justify-center text-sm text-gray-400">
            Ad Space - Rectangle (300×250)
          </div>

          {/* Features */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tool.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="text-purple-500 mt-0.5 shrink-0">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Pros & Cons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl border border-green-200 p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Pros</h3>
              <ul className="space-y-2">
                {tool.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 text-green-800 text-sm">
                    <span className="text-green-500 mt-0.5">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">Cons</h3>
              <ul className="space-y-2">
                {tool.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2 text-red-800 text-sm">
                    <span className="text-red-500 mt-0.5">−</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Best For */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Best For</h2>
            <div className="flex flex-wrap gap-2">
              {tool.bestFor.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Ad Space - Sidebar */}
          <div className="bg-gray-100 border border-dashed border-gray-300 rounded-xl h-64 flex items-center justify-center text-sm text-gray-400 sticky top-24">
            Ad Space - Sidebar (300×600)
          </div>

          {/* Alternatives */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Alternatives</h3>
            <div className="space-y-3">
              {tool.alternatives.map((alt) => (
                <Link
                  key={alt.slug}
                  href={`/tools/${alt.slug}`}
                  className="block p-3 rounded-lg border border-gray-100 hover:border-purple-200 hover:bg-purple-50 transition-all"
                >
                  <span className="text-sm font-medium text-gray-900">{alt.name}</span>
                  <span className="text-xs text-purple-600 ml-2">→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Tools */}
          {relatedTools.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                More {category?.name || "AI"} Tools
              </h3>
              <div className="space-y-3">
                {relatedTools.map((rt) => (
                  <Link
                    key={rt.slug}
                    href={`/tools/${rt.slug}`}
                    className="block p-3 rounded-lg border border-gray-100 hover:border-purple-200 hover:bg-purple-50 transition-all"
                  >
                    <div className="text-sm font-medium text-gray-900">{rt.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{rt.pricing}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
