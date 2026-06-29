import Link from "next/link";
import { categories } from "@/data/categories";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl">🤖</span>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI Tools Hub
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 overflow-x-auto">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors whitespace-nowrap"
              >
                {cat.icon} {cat.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/blog"
              className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/compare"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-md shadow-purple-200"
            >
              Compare Tools
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
