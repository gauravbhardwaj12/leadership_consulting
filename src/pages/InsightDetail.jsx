import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Share2, Check, Clock, Calendar, Bookmark, Quote } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import SEO from "../components/SEO";
import { insightsData } from "../data/insightsData";

export default function InsightDetail() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const relatedArticles = insightsData
    .filter((a) => a.slug !== slug)
    .slice(0, 2);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-28 pb-24 bg-canvas">
      <SEO
        title={`${article.title} | Insights`}
        description={article.excerpt}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Insights", href: "/insights" },
            { label: article.title }
          ]}
        />

        {/* ARTICLE HEADER */}
        <header className="py-12 border-b border-hairline space-y-6">
          <div className="flex items-center space-x-3 text-xs">
            <span className="uppercase tracking-widest-plus text-cognac-600 font-bold">
              {article.category}
            </span>
            <span className="text-obsidian-300">·</span>
            <span className="text-obsidian-500 font-medium flex items-center">
              <Clock className="w-3 h-3 mr-1" /> {article.readTime}
            </span>
            <span className="text-obsidian-300">·</span>
            <span className="text-obsidian-500 flex items-center">
              <Calendar className="w-3 h-3 mr-1" /> {article.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-obsidian-900 leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-obsidian-600 font-serif italic leading-relaxed">
            {article.excerpt}
          </p>

          {/* Author & Share Bar */}
          <div className="pt-4 border-t border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover border border-hairline"
              />
              <div>
                <div className="text-sm font-serif font-bold text-obsidian-900">
                  {article.author.name}
                </div>
                <div className="text-xs text-obsidian-500">
                  {article.author.title}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center text-xs uppercase tracking-wider px-3.5 py-2 bg-white border border-hairline text-obsidian-700 hover:text-cognac-600 transition-colors shadow-sm"
              >
                {copied ? (
                  <span className="flex items-center text-green-700">
                    <Check className="w-3.5 h-3.5 mr-1" /> Link Copied
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Share2 className="w-3.5 h-3.5 mr-1" /> Share Insight
                  </span>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* FEATURED HERO IMAGE */}
        <div className="my-10 border border-hairline shadow-md overflow-hidden">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-[380px] sm:h-[460px] object-cover"
          />
          <div className="p-3 bg-white text-[11px] text-obsidian-500 italic text-right border-t border-hairline">
            Nexora Leadership Advisory · Executive Memorandum Series
          </div>
        </div>

        {/* KEY TAKEAWAYS EXECUTIVE CALLOUT */}
        {article.keyTakeaways && (
          <div className="bg-white border-l-4 border-cognac-600 border border-hairline p-6 sm:p-8 my-10 shadow-sm">
            <h3 className="text-xs uppercase tracking-widest text-cognac-700 font-bold mb-4">
              Executive Summary & Key Takeaways
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-obsidian-700">
              {article.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-cognac-600 font-bold mr-2.5">―</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ARTICLE BODY */}
        <div className="prose prose-lg max-w-none text-obsidian-800 space-y-8 font-sans leading-relaxed text-sm sm:text-base">
          <p className="font-serif text-base sm:text-lg text-obsidian-700 leading-relaxed">
            {article.intro}
          </p>

          {article.sections &&
            article.sections.map((sec, idx) => (
              <div key={idx} className="space-y-4 pt-4">
                <h2 className="text-xl sm:text-2xl font-serif text-obsidian-900 border-b border-hairline/70 pb-2">
                  {sec.heading}
                </h2>
                <p className="text-obsidian-600 leading-relaxed text-sm sm:text-base">
                  {sec.content}
                </p>
              </div>
            ))}

          {/* EDITORIAL PULL QUOTE */}
          {article.pullQuote && (
            <div className="my-12 py-8 border-y-2 border-cognac-600 px-4 text-center">
              <Quote className="w-8 h-8 text-cognac-500 mx-auto mb-3 opacity-60" />
              <blockquote className="font-serif text-xl sm:text-2xl text-obsidian-900 italic max-w-2xl mx-auto leading-relaxed">
                “{article.pullQuote}”
              </blockquote>
            </div>
          )}

          <p className="text-obsidian-600 leading-relaxed text-sm sm:text-base">
            As business environments become more volatile and capital costs stay demanding, organizations cannot rely on passive leadership momentum. Boards that actively foster intellectual candor, clarify decision mandates, and build systematic bench strength will maintain decisive strategic agility.
          </p>
        </div>

        {/* AUTHOR PROFILE FOOTER */}
        <div className="mt-16 pt-8 border-t border-hairline bg-white p-8 border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-16 h-16 rounded-full object-cover border border-hairline"
            />
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-cognac-600 font-bold">
                About the Author
              </span>
              <h4 className="text-lg font-serif text-obsidian-900">{article.author.name}</h4>
              <p className="text-xs text-obsidian-600 leading-relaxed">
                {article.author.name} is {article.author.title} at Nexora Leadership Advisory, counseling global boards and chief executives on corporate governance and strategic alignment.
              </p>
            </div>
          </div>
        </div>

        {/* RELATED INSIGHTS */}
        <div className="mt-20 pt-12 border-t border-hairline">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-serif text-obsidian-900">
              Related Executive Perspectives
            </h3>
            <Link
              to="/insights"
              className="text-xs uppercase tracking-widest text-cognac-600 hover:text-obsidian-900 font-semibold flex items-center"
            >
              <span>All Insights</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                to={`/insights/${rel.slug}`}
                className="bg-white border border-hairline p-6 hover:shadow-lg transition-all group block"
              >
                <div className="text-[10px] uppercase tracking-widest text-cognac-600 font-bold mb-2">
                  {rel.category} · {rel.readTime}
                </div>
                <h4 className="text-base font-serif text-obsidian-900 group-hover:text-cognac-700 transition-colors leading-snug">
                  {rel.title}
                </h4>
                <p className="text-xs text-obsidian-500 mt-2 line-clamp-2">
                  {rel.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
