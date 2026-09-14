import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building, Award, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import SEO from "../components/SEO";
import { caseStudiesData } from "../data/caseStudiesData";
import { useAdvisorModal } from "../context/AdvisorModalContext";

export default function CaseStudies() {
  const { openAdvisorModal } = useAdvisorModal();
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const industries = ["All", "Professional Services", "Technology", "Manufacturing"];

  const filteredStudies = caseStudiesData.filter(
    (study) => selectedIndustry === "All" || study.industry === selectedIndustry
  );

  return (
    <div className="min-h-screen pt-28 pb-20 bg-canvas">
      <SEO
        title="Leadership in Action | Client Case Studies | Nexora Leadership Advisory"
        description="Explore how Nexora partners with global enterprises to drive executive alignment, operational transformation, and future-proof succession pipelines."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Breadcrumbs items={[{ label: "Case Studies" }]} />

        {/* HERO */}
        <section className="py-16 border-b border-hairline">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
              Proven Outcomes
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-obsidian-900 mt-4 leading-tight">
              Leadership in Action
            </h1>
            <p className="text-base sm:text-lg text-obsidian-600 mt-4 leading-relaxed">
              Real-world transformations, measurable business performance, and enduring C-suite capabilities. Discover how we partner with global enterprises across industries.
            </p>
          </div>

          {/* Industry Filter Tabs */}
          <div className="flex items-center space-x-2 pt-10 overflow-x-auto">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all whitespace-nowrap ${
                  selectedIndustry === ind
                    ? "bg-obsidian-900 text-white"
                    : "bg-white text-obsidian-600 border border-hairline hover:border-obsidian-400"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </section>

        {/* CASE STUDIES LIST */}
        <section className="py-20">
          <div className="space-y-16">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white border border-hairline overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-5 relative img-zoom-hover border-b lg:border-b-0 lg:border-r border-hairline">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-72 sm:h-96 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-obsidian-900/90 text-white text-[10px] uppercase tracking-widest px-3 py-1 font-semibold backdrop-blur-sm">
                      {study.industry}
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center space-x-3 text-xs text-obsidian-500 mb-2">
                        <span className="uppercase tracking-widest text-cognac-600 font-bold">
                          Case Study {study.id}
                        </span>
                        <span>·</span>
                        <span>{study.location}</span>
                        <span>·</span>
                        <span>{study.duration}</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-serif text-obsidian-900 leading-snug group-hover:text-cognac-700 transition-colors">
                        {study.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-obsidian-600 mt-3 leading-relaxed">
                        {study.summary}
                      </p>

                      <div className="mt-6 pt-6 border-t border-hairline">
                        <div className="text-[11px] uppercase tracking-wider text-obsidian-400 font-semibold mb-2">
                          The Core Challenge:
                        </div>
                        <p className="text-xs text-obsidian-700 leading-relaxed italic">
                          "{study.challenge}"
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                      <div className="grid grid-cols-2 gap-6">
                        {study.outcomes.slice(0, 2).map((outcome, idx) => (
                          <div key={idx}>
                            <div className="text-xl sm:text-2xl font-serif font-bold text-cognac-700">
                              {outcome.metric}
                            </div>
                            <div className="text-[10px] uppercase tracking-wider text-obsidian-500 font-medium">
                              {outcome.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <Link
                        to={`/case-studies/${study.slug}`}
                        className="inline-flex items-center text-xs uppercase tracking-widest px-6 py-3.5 bg-obsidian-900 text-white font-medium hover:bg-cognac-600 transition-colors shadow-sm whitespace-nowrap"
                      >
                        <span>View Full Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM ADVISORY BANNER */}
        <section className="py-16 bg-white border border-hairline p-10 text-center mb-16">
          <h3 className="text-2xl sm:text-3xl font-serif text-obsidian-900 mb-2">
            Facing a similar organizational inflection point?
          </h3>
          <p className="text-xs sm:text-sm text-obsidian-600 max-w-lg mx-auto mb-6">
            Our Senior Managing Partners conduct confidential scenario planning and executive diagnostics.
          </p>
          <button
            onClick={() => openAdvisorModal()}
            className="inline-flex items-center text-xs uppercase tracking-widest px-8 py-3.5 bg-obsidian-900 text-white font-medium hover:bg-cognac-600 transition-colors shadow-sm"
          >
            <span>Speak with an Advisor</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </button>
        </section>
      </div>
    </div>
  );
}
