import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertCircle, FileText, ChevronRight, BarChart3 } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import SEO from "../components/SEO";
import { servicesData } from "../data/servicesData";
import { insightsData } from "../data/insightsData";
import { useAdvisorModal } from "../context/AdvisorModalContext";

export default function ServiceDetail() {
  const { slug } = useParams();
  const { openAdvisorModal } = useAdvisorModal();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/expertise" replace />;
  }

  const relatedInsight = insightsData.find((i) => i.slug === service.relatedInsightSlug) || insightsData[0];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-canvas">
      <SEO 
        title={`${service.title} | Practices`}
        description={service.shortDescription}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Breadcrumbs
          items={[
            { label: "Practices", href: "/expertise" },
            { label: service.title }
          ]}
        />

        {/* HERO SECTION */}
        <section className="py-16 border-b border-hairline">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
                  Practice {service.id}
                </span>
                <span className="text-obsidian-300">·</span>
                <span className="text-xs uppercase tracking-widest text-obsidian-500 font-semibold">
                  Executive Advisory
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-obsidian-900 leading-tight">
                {service.title}
              </h1>

              <p className="text-lg font-serif italic text-obsidian-700">
                {service.tagline}
              </p>

              <p className="text-sm sm:text-base text-obsidian-600 leading-relaxed">
                {service.overview}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => openAdvisorModal(service.title)}
                  className="inline-flex items-center text-xs uppercase tracking-widest px-8 py-4 bg-obsidian-900 text-white font-medium hover:bg-cognac-600 transition-colors shadow-sm"
                >
                  <span>Talk to a Practice Advisor</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-xs uppercase tracking-widest px-8 py-4 bg-white text-obsidian-900 border border-hairline font-medium hover:bg-subtle transition-colors"
                >
                  Request Proposal
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-hairline shadow-2xl img-zoom-hover">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-80 sm:h-96 lg:h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* METRICS STRIP */}
        <section className="py-12 border-b border-hairline bg-white -mx-6 lg:-mx-12 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            {service.expectedOutcomes.map((item, idx) => (
              <div key={idx} className="border-l-0 sm:border-l-2 sm:border-cognac-600 sm:pl-6">
                <div className="font-serif text-4xl sm:text-5xl font-bold text-obsidian-900">
                  {item.metric}
                </div>
                <div className="text-xs uppercase tracking-wider text-obsidian-500 mt-1 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* KEY CHALLENGES & APPROACH */}
        <section className="py-20 border-b border-hairline">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Challenges */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
                  Diagnostic Context
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-obsidian-900 mt-1">
                  Critical Challenges We Address
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed">
                Senior leadership failure is rarely due to functional incompetence; it is almost always catalyzed by these complex friction points:
              </p>

              <div className="space-y-3 pt-2">
                {service.keyChallenges.map((challenge, i) => (
                  <div key={i} className="p-4 bg-white border border-hairline flex items-start space-x-3">
                    <AlertCircle className="w-4 h-4 text-cognac-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-obsidian-700 leading-relaxed font-medium">
                      {challenge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 4-Step Approach */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
                  Rigorous Delivery
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-obsidian-900 mt-1">
                  Our Strategic Approach
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed">
                Every advisory engagement is tailored to the organization's governance lifecycle, using a four-phase methodology:
              </p>

              <div className="space-y-4 pt-2">
                {service.approachSteps.map((step) => (
                  <div key={step.step} className="p-6 bg-white border border-hairline flex items-start space-x-5 hover:border-cognac-400 transition-colors">
                    <span className="font-serif text-2xl font-bold text-cognac-600 flex-shrink-0">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="text-base font-serif text-obsidian-900 font-semibold mb-1">
                        {step.name}
                      </h4>
                      <p className="text-xs text-obsidian-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERABLES & WHAT CLIENTS RECEIVE */}
        <section className="py-20 border-b border-hairline">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
              Accountability & Artifacts
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-obsidian-900 mt-1">
              What Clients Can Expect
            </h2>
            <p className="text-xs sm:text-sm text-obsidian-600 mt-2">
              Tangible, board-level strategic assets and governance frameworks delivered throughout the engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="bg-white border border-hairline p-6 space-y-3">
                <div className="w-8 h-8 bg-cognac-50 text-cognac-600 flex items-center justify-center border border-cognac-200">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-serif font-semibold text-obsidian-900">
                  {item}
                </h4>
                <p className="text-[11px] text-obsidian-500 leading-relaxed">
                  Engineered for board review, executive governance, and operational rollout.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* RELATED INSIGHT */}
        {relatedInsight && (
          <section className="py-20 border-b border-hairline">
            <div className="bg-white border border-hairline p-8 sm:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="text-xs uppercase tracking-widest text-cognac-600 font-bold">
                    Related Thought Leadership
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-obsidian-900">
                    {relatedInsight.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed max-w-2xl">
                    {relatedInsight.excerpt}
                  </p>
                  <div className="pt-2">
                    <Link
                      to={`/insights/${relatedInsight.slug}`}
                      className="inline-flex items-center text-xs uppercase tracking-widest text-cognac-700 font-semibold hover:text-obsidian-900 transition-colors"
                    >
                      <span>Read Full Insight</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <img
                    src={relatedInsight.heroImage}
                    alt={relatedInsight.title}
                    className="w-full h-44 object-cover border border-hairline"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* BOTTOM CTA */}
        <section className="py-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-serif text-obsidian-900 mb-3">
            Discuss {service.title} for Your Leadership Team
          </h3>
          <p className="text-xs sm:text-sm text-obsidian-600 max-w-md mx-auto mb-6">
            Connect directly with our practice leadership to evaluate current organizational dynamics.
          </p>
          <button
            onClick={() => openAdvisorModal(service.title)}
            className="inline-flex items-center text-xs uppercase tracking-widest px-8 py-3.5 bg-obsidian-900 text-white font-medium hover:bg-cognac-600 transition-colors shadow-sm"
          >
            <span>Talk to an Advisor</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </button>
        </section>
      </div>
    </div>
  );
}
