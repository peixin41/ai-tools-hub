import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";
import ToolCard from "@/components/ToolCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return { title: "Category Not Found" };

  return {
    title: `Best ${category.name} Tools in 2026 - Reviews & Comparisons`,
    description: `Discover the best ${category.name.toLowerCase()} tools. ${category.description}. Compare features, pricing, and find the right AI tool for your needs.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) notFound();

  const categoryTools = tools.filter((t) => t.category === slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-purple-600">Home</Link>
        <span>/</span>
        <span className="text-gray-900">{category.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl">{category.icon}</span>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Best {category.name} Tools in 2026</h1>
            <p className="text-lg text-gray-600 mt-1">{category.description}</p>
          </div>
        </div>
        <p className="text-gray-500">
          Showing {categoryTools.length} tools in {category.name}
        </p>
      </div>

      {/* Ad Space - Top */}
      <div className="bg-gray-100 border border-dashed border-gray-300 rounded-xl h-24 flex items-center justify-center text-sm text-gray-400 mb-10">
        Ad Space - Banner (728×90)
      </div>

      {/* Tools Grid */}
      {categoryTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No tools found in this category yet.</p>
          <Link href="/" className="text-purple-600 hover:text-purple-700 mt-2 inline-block">
            Browse all tools →
          </Link>
        </div>
      )}

      {/* Other Categories */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Explore Other Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories
            .filter((c) => c.slug !== slug)
            .map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-sm transition-all"
              >
                <span className="text-2xl block mb-2">{cat.icon}</span>
                <h3 className="text-sm font-semibold text-gray-900">{cat.name}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-1">{cat.description}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
