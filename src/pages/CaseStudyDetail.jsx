import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Quote, Clock, MapPin, Building, ArrowLeft } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import SEO from "../components/SEO";
import { caseStudiesData } from "../data/caseStudiesData";
import { useAdvisorModal } from "../context/AdvisorModalContext";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const { openAdvisorModal } = useAdvisorModal();

  const study = caseStudiesData.find((s) => s.slug === slug);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  // Find next case study for easy navigation
  const currentIndex = caseStudiesData.findIndex((s) => s.slug === slug);
  const nextStudy = caseStudiesData[(currentIndex + 1) % caseStudiesData.length];

  return (
    <div className="min-h-screen pt-28 pb-24 bg-canvas">
      <SEO
        title={`${study.title} | Case Study`}
        description={study.summary}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Case Studies", href: "/case-studies" },
            { label: study.title }
          ]}
        />

        {/* HEADER */}
        <header className="py-12 border-b border-hairline space-y-6">
          <div className="flex items-center space-x-3 text-xs">
            <span className="uppercase tracking-widest-plus text-cognac-600 font-bold">
              {study.industry}
            </span>
            <span className="text-obsidian-300">·</span>
            <span className="text-obsidian-500 font-medium flex items-center">
              <MapPin className="w-3 h-3 mr-1" /> {study.location}
            </span>
            <span className="text-obsidian-300">·</span>
            <span className="text-obsidian-500 flex items-center">
              <Clock className="w-3 h-3 mr-1" /> {study.duration}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-obsidian-900 leading-tight">
            {study.title}
          </h1>

          <p className="text-base sm:text-lg text-obsidian-600 leading-relaxed font-serif italic">
            {study.summary}
          </p>

          <div className="pt-2 text-xs text-obsidian-500 font-medium">
            Client Profile: <span className="text-obsidian-900 font-semibold">{study.client}</span>
          </div>
        </header>

        {/* HERO IMAGE */}
        <div className="my-10 border border-hairline shadow-md overflow-hidden">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-80 sm:h-[440px] object-cover"
          />
        </div>

        {/* OUTCOMES STRIP */}
        <div className="bg-white border border-hairline p-8 sm:p-10 my-10 shadow-sm">
          <h3 className="text-xs uppercase tracking-widest text-cognac-700 font-bold mb-6">
            Measurable Commercial Impact
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {study.outcomes.map((outcome, idx) => (
              <div key={idx} className="border-l-2 border-cognac-600 pl-5">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-obsidian-900">
                  {outcome.metric}
                </div>
                <div className="text-xs uppercase tracking-wider text-obsidian-500 mt-1 font-medium">
                  {outcome.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* THE CHALLENGE */}
        <section className="py-10 space-y-4">
          <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
            01 — Diagnostic Context
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-obsidian-900">
            The Strategic Challenge
          </h2>
          <p className="text-sm sm:text-base text-obsidian-600 leading-relaxed">
            {study.challenge}
          </p>
        </section>

        {/* OUR APPROACH */}
        <section className="py-10 space-y-6 border-t border-hairline">
          <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
            02 — The Intervention
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-obsidian-900">
            Strategic Methodology & Phasing
          </h2>

          <div className="space-y-4 pt-2">
            {study.approach.map((step, idx) => (
              <div key={idx} className="bg-white border border-hairline p-6 space-y-2">
                <h3 className="text-base font-serif font-bold text-obsidian-900">
                  {step.phase}
                </h3>
                <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* EXECUTIVE TESTIMONIAL */}
        <div className="my-12 bg-obsidian-900 text-white p-8 sm:p-12 relative overflow-hidden">
          <Quote className="w-10 h-10 text-cognac-500 mb-4 opacity-50" />
          <blockquote className="font-serif text-lg sm:text-xl italic leading-relaxed text-obsidian-100">
            "{study.testimonial.quote}"
          </blockquote>
          <div className="mt-6 pt-4 border-t border-obsidian-800">
            <div className="font-serif text-base font-bold text-white">
              {study.testimonial.author}
            </div>
            <div className="text-xs text-cognac-400">
              {study.testimonial.title}, {study.client}
            </div>
          </div>
        </div>

        {/* STRATEGIC TAKEAWAY */}
        <div className="p-6 bg-white border border-hairline border-l-4 border-cognac-600 space-y-2 my-10">
          <div className="text-xs uppercase tracking-widest text-cognac-700 font-bold">
            Executive Leadership Principle
          </div>
          <p className="text-xs sm:text-sm text-obsidian-800 italic leading-relaxed">
            "{study.keyTakeaway}"
          </p>
        </div>

        {/* NEXT CASE STUDY & CTA */}
        <div className="mt-16 pt-10 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to={`/case-studies/${nextStudy.slug}`}
            className="group flex items-center space-x-3 text-left w-full sm:w-auto"
          >
            <div className="w-10 h-10 border border-hairline flex items-center justify-center text-obsidian-400 group-hover:bg-cognac-600 group-hover:text-white group-hover:border-cognac-600 transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-obsidian-400 block">
                Next Case Study
              </span>
              <span className="text-sm font-serif font-bold text-obsidian-900 group-hover:text-cognac-700 transition-colors line-clamp-1">
                {nextStudy.title}
              </span>
            </div>
          </Link>

          <button
            onClick={() => openAdvisorModal()}
            className="w-full sm:w-auto inline-flex items-center justify-center text-xs uppercase tracking-widest px-8 py-4 bg-obsidian-900 text-white font-medium hover:bg-cognac-600 transition-colors shadow-sm whitespace-nowrap"
          >
            <span>Request Executive Case Briefing</span>
          </button>
        </div>
      </div>
    </div>
  );
}
