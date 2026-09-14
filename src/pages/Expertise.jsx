import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, CheckCircle2, Award } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import SEO from "../components/SEO";
import { servicesData, expertiseMatrix } from "../data/servicesData";
import { useAdvisorModal } from "../context/AdvisorModalContext";

export default function Expertise() {
  const { openAdvisorModal } = useAdvisorModal();

  return (
    <div className="min-h-screen pt-28 pb-20 bg-canvas">
      <SEO 
        title="Consulting Practices & Expertise | Nexora Leadership Advisory"
        description="Comprehensive leadership advisory disciplines: Executive Leadership, Organizational Transformation, Strategy & Growth, Culture & Performance, and Succession."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Breadcrumbs items={[{ label: "Practices & Expertise" }]} />

        {/* HERO */}
        <section className="py-16 lg:py-24 border-b border-hairline">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
              Consulting Practices
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-obsidian-900 mt-4 leading-tight">
              Where Leadership Meets Business Impact
            </h1>
            <p className="text-base sm:text-lg text-obsidian-600 mt-6 leading-relaxed">
              We operate where high-stakes commercial strategy converges with human leadership dynamics. Our five core practice disciplines help enterprise leaders turn daunting complexity into decisive, measurable momentum.
            </p>
          </div>
        </section>

        {/* 5 CORE PRACTICES CARDS */}
        <section className="py-20 border-b border-hairline">
          <div className="space-y-16">
            {servicesData.map((service, idx) => (
              <div
                key={service.id}
                className="bg-white border border-hairline overflow-hidden hover:border-cognac-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-5 relative img-zoom-hover">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-72 sm:h-96 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-obsidian-900/90 text-white text-xs uppercase tracking-widest px-3 py-1 font-semibold">
                      Practice {service.id}
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-cognac-600 font-semibold">
                        Core Advisory Practice
                      </span>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-obsidian-900 mt-1">
                        {service.title}
                      </h2>
                      <p className="text-sm font-serif italic text-obsidian-600 mt-2">
                        {service.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-obsidian-600 mt-4 leading-relaxed">
                        {service.overview}
                      </p>

                      <div className="mt-6 pt-6 border-t border-hairline">
                        <span className="text-[11px] uppercase tracking-wider text-obsidian-400 font-semibold block mb-3">
                          Critical Challenges Addressed:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-obsidian-700">
                          {service.keyChallenges.slice(0, 4).map((ch, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-cognac-600 mr-2 font-bold">•</span>
                              <span>{ch}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center space-x-6">
                        {service.expectedOutcomes.slice(0, 2).map((oc, i) => (
                          <div key={i}>
                            <div className="text-lg font-serif font-bold text-cognac-700">
                              {oc.metric}
                            </div>
                            <div className="text-[10px] uppercase tracking-wider text-obsidian-500">
                              {oc.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <Link
                        to={`/expertise/${service.slug}`}
                        className="inline-flex items-center text-xs uppercase tracking-widest px-6 py-3 bg-obsidian-900 text-white font-medium hover:bg-cognac-600 transition-colors shadow-sm"
                      >
                        <span>Explore Practice</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERTISE MATRIX */}
        <section className="py-24 border-b border-hairline" id="matrix">
          <div className="max-w-3xl mb-14">
            <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
              Full Spectrum
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-obsidian-900 mt-2">
              Cross-Disciplinary Engagement Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseMatrix.map((item, idx) => (
              <div key={idx} className="bg-white border border-hairline p-6 hover:border-cognac-500 transition-colors">
                <div className="text-[10px] uppercase tracking-widest text-cognac-600 font-bold mb-2">
                  {item.count}
                </div>
                <h3 className="text-base font-serif text-obsidian-900 mb-2">{item.name}</h3>
                <p className="text-xs text-obsidian-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 bg-white border border-hairline p-10 text-center my-16">
          <h3 className="text-2xl sm:text-3xl font-serif text-obsidian-900 mb-2">
            Need tailored advisory for your executive committee?
          </h3>
          <p className="text-xs sm:text-sm text-obsidian-600 max-w-lg mx-auto mb-6">
            Schedule a confidential consultation to explore customized engagement models.
          </p>
          <button
            onClick={() => openAdvisorModal()}
            className="inline-flex items-center text-xs uppercase tracking-widest px-8 py-3.5 bg-obsidian-900 text-white font-medium hover:bg-cognac-600 transition-colors shadow-sm"
          >
            <span>Consult with a Senior Partner</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </button>
        </section>
      </div>
    </div>
  );
}
