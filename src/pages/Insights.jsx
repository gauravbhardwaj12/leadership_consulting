import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Search, Clock, Calendar, ChevronRight } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import SEO from "../components/SEO";
import { insightsData, insightCategories } from "../data/insightsData";

export default function Insights() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("cat") || "All";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === "All") {
      searchParams.delete("cat");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ cat });
    }
  };

  const filteredInsights = useMemo(() => {
    return insightsData.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = insightsData.find((a) => a.isFeatured) || insightsData[0];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-canvas">
      <SEO
        title="Executive Insights & Research | Nexora Leadership Advisory"
        description="Thought leadership, research briefings, and strategic publications on C-suite governance, organizational transformation, and leadership excellence."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Breadcrumbs items={[{ label: "Insights & Publications" }]} />

        {/* HERO / PUBLICATION HEADER */}
        <section className="py-16 border-b border-hairline">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
                Nexora Thought Leadership
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-obsidian-900 mt-4 leading-tight">
                Insights for the Modern Boardroom
              </h1>
              <p className="text-base sm:text-lg text-obsidian-600 mt-4 leading-relaxed">
                Rigorous perspectives on executive governance, organizational culture, and strategic capability from our senior partners.
              </p>
            </div>

            {/* Search Input */}
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search perspectives..."
                className="w-full px-4 py-3 pl-10 bg-white border border-hairline text-xs text-obsidian-900 focus:outline-none focus:border-cognac-600 shadow-sm"
              />
              <Search className="w-4 h-4 text-obsidian-400 absolute left-3.5 top-3.5" />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pt-10 pb-2 scrollbar-none">
            {insightCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all ${
                  selectedCategory.toLowerCase() === cat.toLowerCase()
                    ? "bg-obsidian-900 text-white"
                    : "bg-white text-obsidian-600 border border-hairline hover:border-obsidian-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* FEATURED INSIGHT SPOTLIGHT (if All or Strategy) */}
        {selectedCategory === "All" && !searchQuery && (
          <section className="py-16 border-b border-hairline">
            <div className="bg-white border border-hairline p-8 sm:p-12 lg:p-14 hover:shadow-xl transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center space-x-3 text-xs">
                    <span className="uppercase tracking-widest text-cognac-600 font-bold">
                      {featuredArticle.category}
                    </span>
                    <span className="text-obsidian-300">·</span>
                    <span className="text-obsidian-500 font-medium">{featuredArticle.readTime}</span>
                    <span className="text-obsidian-300">·</span>
                    <span className="text-obsidian-500">{featuredArticle.date}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-obsidian-900 leading-tight">
                    <Link
                      to={`/insights/${featuredArticle.slug}`}
                      className="hover:text-cognac-700 transition-colors"
                    >
                      {featuredArticle.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <Link
                      to={`/insights/${featuredArticle.slug}`}
                      className="inline-flex items-center text-xs uppercase tracking-widest px-6 py-3 bg-obsidian-900 text-white font-medium hover:bg-cognac-600 transition-colors"
                    >
                      <span>Read Full Analysis</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-2" />
                    </Link>

                    <span className="text-xs text-obsidian-500 font-medium">
                      By {featuredArticle.author.name}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="img-zoom-hover border border-hairline">
                    <img
                      src={featuredArticle.heroImage}
                      alt={featuredArticle.title}
                      className="w-full h-72 sm:h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ARTICLES GRID */}
        <section className="py-16">
          {filteredInsights.length === 0 ? (
            <div className="text-center py-20 bg-white border border-hairline">
              <p className="text-obsidian-600 text-sm">
                No perspectives found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-xs uppercase tracking-widest text-cognac-600 font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInsights.map((article) => (
                <article
                  key={article.id}
                  className="bg-white border border-hairline flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
                >
                  <div>
                    <div className="img-zoom-hover border-b border-hairline relative">
                      <img
                        src={article.heroImage}
                        alt={article.title}
                        className="w-full h-52 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-obsidian-900/90 text-white text-[10px] uppercase tracking-widest px-2.5 py-1 font-semibold backdrop-blur-sm">
                        {article.category}
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 space-y-3">
                      <div className="flex items-center space-x-2 text-[11px] text-obsidian-500">
                        <span>{article.date}</span>
                        <span>·</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3 className="text-xl font-serif text-obsidian-900 leading-snug group-hover:text-cognac-700 transition-colors">
                        <Link to={`/insights/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-obsidian-600 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0 border-t border-hairline/60 flex items-center justify-between mt-4">
                    <span className="text-xs text-obsidian-500 font-medium">
                      {article.author.name}
                    </span>

                    <Link
                      to={`/insights/${article.slug}`}
                      className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-obsidian-900 group-hover:text-cognac-600 transition-colors"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
