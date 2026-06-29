import Link from "next/link";
import { categories } from "@/data/categories";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl">🤖</span>
              <span className="text-lg font-bold text-white">AI Tools Hub</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Your go-to directory for discovering, comparing, and reviewing the
              best AI tools in 2026.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.slice(0, 4).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">More</h3>
            <ul className="space-y-2">
              {categories.slice(4).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Site</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-sm hover:text-white transition-colors">
                  Compare Tools
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="text-sm hover:text-white transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} AI Tools Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
