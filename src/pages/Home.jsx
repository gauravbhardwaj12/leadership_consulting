import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, TrendingUp, Users, Building, Award, Shield, CheckCircle } from "lucide-react";
import { servicesData, expertiseMatrix } from "../data/servicesData";
import { caseStudiesData } from "../data/caseStudiesData";
import { insightsData } from "../data/insightsData";
import { teamData } from "../data/teamData";
import { useAdvisorModal } from "../context/AdvisorModalContext";
import SEO from "../components/SEO";

export default function Home() {
  const { openAdvisorModal } = useAdvisorModal();
  const featuredInsight = insightsData.find((i) => i.isFeatured) || insightsData[0];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Nexora Leadership Advisory | Global Executive & Management Consulting"
        description="We help leaders navigate complexity, strengthen organizational performance, and build the capabilities required for sustainable growth."
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 bg-canvas overflow-hidden border-b border-hairline">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest-plus text-cognac-600 font-semibold border-l-2 border-cognac-600 pl-3">
                <span>Executive & Board Advisory</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-obsidian-900 leading-[1.12] tracking-tight">
                Leadership that moves organizations forward.
              </h1>

              <p className="text-base sm:text-lg text-obsidian-600 font-normal leading-relaxed max-w-2xl">
                We help leaders navigate complexity, strengthen organizational performance and build the capabilities required for sustainable growth.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/expertise"
                  className="inline-flex items-center justify-center text-xs uppercase tracking-widest px-8 py-4 bg-obsidian-900 text-white font-medium hover:bg-cognac-600 transition-all duration-200 group shadow-md"
                >
                  <span>Explore Our Expertise</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={() => openAdvisorModal()}
                  className="inline-flex items-center justify-center text-xs uppercase tracking-widest px-8 py-4 bg-transparent text-obsidian-900 font-medium hover:bg-obsidian-900 hover:text-white transition-all duration-200 border border-obsidian-300"
                >
                  Talk to an Advisor
                </button>
              </div>

              {/* Trust Sub-text */}
              <div className="pt-6 border-t border-hairline/80 grid grid-cols-3 gap-4 text-obsidian-500 text-xs">
                <div>
                  <span className="font-semibold text-obsidian-800 block text-sm">Fortune 500</span>
                  C-Suite Advisory
                </div>
                <div>
                  <span className="font-semibold text-obsidian-800 block text-sm">Private Equity</span>
                  Portfolio Leadership
                </div>
                <div>
                  <span className="font-semibold text-obsidian-800 block text-sm">Global Scope</span>
                  Cross-Border Impact
                </div>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative border border-hairline shadow-2xl img-zoom-hover">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=85"
                  alt="Senior leadership team strategy boardroom conference"
                  className="w-full h-[460px] sm:h-[540px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-sm border border-hairline shadow-md">
                  <div className="text-[10px] uppercase tracking-widest text-cognac-600 font-bold mb-1">
                    Client Engagement Paradigm
                  </div>
                  <div className="text-xs text-obsidian-800 font-medium leading-tight">
                    Independent strategic counsel for chief executives facing pivotal inflection points.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / INTRODUCTION SECTION */}
      <section className="py-24 bg-white border-b border-hairline">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold mb-4">
            LEADERSHIP. STRATEGY. IMPACT.
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-obsidian-900 leading-tight">
                The right leadership can transform the trajectory of an organization.
              </h2>
            </div>

            <div className="lg:col-span-5 space-y-6 text-sm text-obsidian-600 leading-relaxed">
              <p>
                We work directly with CEOs, founders, senior executives and leadership teams to address high-stakes strategic and organizational challenges. In an environment marked by technological acceleration, shifting geopolitical currents and changing workforce expectations, leadership is the definitive competitive moat.
              </p>
              <p>
                Our partners blend senior operational track records with deep behavioral science to produce measurable, enduring enterprise value. We do not offer generic templates—we build institutional capabilities tailored to the unique realities of each boardroom.
              </p>
            </div>
          </div>

          {/* Metric Area */}
          <div className="mt-16 pt-12 border-t border-hairline grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="border-l-2 border-cognac-600 pl-6 py-2">
              <div className="font-serif text-4xl sm:text-5xl text-obsidian-900 font-bold tracking-tight">
                25+
              </div>
              <div className="text-xs uppercase tracking-widest text-obsidian-500 mt-2 font-medium">
                Years of collective experience
              </div>
            </div>

            <div className="border-l-2 border-cognac-600 pl-6 py-2">
              <div className="font-serif text-4xl sm:text-5xl text-obsidian-900 font-bold tracking-tight">
                150+
              </div>
              <div className="text-xs uppercase tracking-widest text-obsidian-500 mt-2 font-medium">
                Leadership engagements
              </div>
            </div>

            <div className="border-l-2 border-cognac-600 pl-6 py-2">
              <div className="font-serif text-4xl sm:text-5xl text-obsidian-900 font-bold tracking-tight">
                30+
              </div>
              <div className="text-xs uppercase tracking-widest text-obsidian-500 mt-2 font-medium">
                Industries supported
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO (5 Core Services) */}
      <section className="py-24 bg-canvas border-b border-hairline">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
                Consulting Practices
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-obsidian-900 mt-2">
                What We Do
              </h2>
            </div>
            <p className="text-sm sm:text-base text-obsidian-600 max-w-md">
              Helping leaders turn complex challenges into decisive action through five disciplined advisory disciplines.
            </p>
          </div>

          {/* 5 Service Rows / Cards */}
          <div className="divide-y divide-hairline border-y border-hairline">
            {servicesData.map((service) => (
              <Link
                key={service.id}
                to={`/expertise/${service.slug}`}
                className="group block py-10 px-4 sm:px-6 hover:bg-white transition-all duration-300 relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-2 flex items-center space-x-4">
                    <span className="font-serif text-2xl sm:text-3xl text-cognac-600 font-medium">
                      {service.id}
                    </span>
                    <span className="h-px w-8 bg-hairline hidden lg:block"></span>
                  </div>

                  <div className="lg:col-span-4">
                    <h3 className="text-xl sm:text-2xl font-serif text-obsidian-900 group-hover:text-cognac-700 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="lg:col-span-5">
                    <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed font-normal">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="lg:col-span-1 flex justify-end">
                    <div className="w-10 h-10 rounded-full border border-hairline flex items-center justify-center text-obsidian-400 group-hover:text-white group-hover:bg-cognac-600 group-hover:border-cognac-600 transition-all">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/expertise"
              className="inline-flex items-center text-xs uppercase tracking-widest text-obsidian-900 hover:text-cognac-700 font-semibold transition-colors"
            >
              <span>View Comprehensive Practice Directory</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FEATURED INSIGHT */}
      <section className="py-24 bg-white border-b border-hairline">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="border border-hairline bg-canvas p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
                    FEATURED INSIGHT
                  </span>
                  <span className="text-obsidian-300">·</span>
                  <span className="text-xs text-obsidian-500 font-medium">
                    {featuredInsight.readTime}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-obsidian-900 leading-tight">
                  {featuredInsight.title}
                </h3>

                <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed">
                  {featuredInsight.excerpt}
                </p>

                <div className="pt-2 flex items-center space-x-4">
                  <Link
                    to={`/insights/${featuredInsight.slug}`}
                    className="inline-flex items-center text-xs uppercase tracking-widest px-6 py-3.5 bg-obsidian-900 text-white font-medium hover:bg-cognac-600 transition-colors group"
                  >
                    <span>Read the Insight</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="text-xs text-obsidian-500 hidden sm:block">
                    By {featuredInsight.author.name}, {featuredInsight.author.title}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="border border-hairline img-zoom-hover shadow-lg">
                  <img
                    src={featuredInsight.heroImage}
                    alt={featuredInsight.title}
                    className="w-full h-72 sm:h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXPERTISE SECTION (Grid) */}
      <section className="py-24 bg-canvas border-b border-hairline" id="matrix">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
              Domain Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-obsidian-900 mt-2">
              Where Leadership Meets Business Impact
            </h2>
            <p className="text-sm text-obsidian-600 mt-4 leading-relaxed">
              We operate at the critical intersection of strategy, executive governance, and behavioral dynamics across major enterprise disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseMatrix.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-hairline p-8 hover:border-cognac-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-cognac-600 font-bold mb-3">
                    {item.count}
                  </div>
                  <h3 className="text-lg font-serif text-obsidian-900 mb-2 group-hover:text-cognac-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-obsidian-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-hairline/60 flex items-center justify-between text-xs text-obsidian-400 group-hover:text-cognac-600">
                  <span className="text-[11px] uppercase tracking-wider font-medium">Explore Practice</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CASE STUDIES SECTION */}
      <section className="py-24 bg-white border-b border-hairline">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
                Proven Client Outcomes
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-obsidian-900 mt-2">
                Leadership in Action
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="inline-flex items-center text-xs uppercase tracking-widest text-obsidian-900 hover:text-cognac-700 font-semibold"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudiesData.map((study) => (
              <div
                key={study.id}
                className="border border-hairline bg-canvas flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="img-zoom-hover border-b border-hairline relative">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-obsidian-900/90 text-white text-[10px] uppercase tracking-widest px-3 py-1 font-medium backdrop-blur-sm">
                      {study.industry}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="text-[11px] uppercase tracking-wider text-obsidian-400 font-semibold">
                      Case Study {study.id}
                    </div>
                    <h3 className="text-xl font-serif text-obsidian-900 leading-snug group-hover:text-cognac-700 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-xs text-obsidian-600 line-clamp-3 leading-relaxed">
                      {study.summary}
                    </p>

                    <div className="pt-4 border-t border-hairline grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-base font-serif font-bold text-cognac-700">
                          {study.outcomes[0].metric}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-obsidian-500">
                          {study.outcomes[0].label}
                        </div>
                      </div>
                      <div>
                        <div className="text-base font-serif font-bold text-cognac-700">
                          {study.outcomes[1].metric}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-obsidian-500">
                          {study.outcomes[1].label}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <Link
                    to={`/case-studies/${study.slug}`}
                    className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-obsidian-900 group-hover:text-cognac-600 transition-colors pt-4 border-t border-hairline/80 w-full justify-between"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LEADERSHIP TEAM PREVIEW */}
      <section className="py-24 bg-canvas border-b border-hairline" id="team">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
              Partners & Practice Leaders
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-obsidian-900 mt-2">
              Meet the people behind the work
            </h2>
            <p className="text-sm text-obsidian-600 mt-4 leading-relaxed">
              Our partners combine top-tier strategy pedigree, operational executive accountability, and deep behavioral expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((person) => (
              <div
                key={person.id}
                className="bg-white border border-hairline group hover:shadow-xl transition-all duration-300"
              >
                <div className="img-zoom-hover border-b border-hairline">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-80 object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <div className="text-[10px] uppercase tracking-widest text-cognac-600 font-bold">
                    {person.role}
                  </div>
                  <h3 className="text-xl font-serif text-obsidian-900">
                    {person.name}
                  </h3>
                  <p className="text-xs text-obsidian-500 font-medium">
                    {person.practice}
                  </p>
                  <p className="text-xs text-obsidian-600 pt-2 line-clamp-3 leading-relaxed border-t border-hairline/60">
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY NEXORA (4 Principles) */}
      <section className="py-24 bg-white border-b border-hairline">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
              Our Methodology & Creed
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-obsidian-900 mt-2">
              What makes our approach different
            </h2>
            <p className="text-sm text-obsidian-600 mt-4 leading-relaxed">
              We reject transactional consulting models. We operate as rigorous intellectual sounding boards and strategic execution partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t-2 border-cognac-600 pt-6 space-y-3">
              <div className="text-xs uppercase tracking-widest text-obsidian-400 font-semibold">
                Principle 01
              </div>
              <h3 className="text-2xl font-serif text-obsidian-900">
                Perspective
              </h3>
              <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed">
                We connect leadership decisions with broader business realities, macroeconomic pressures, and shareholder governance expectations.
              </p>
            </div>

            <div className="border-t-2 border-cognac-600 pt-6 space-y-3">
              <div className="text-xs uppercase tracking-widest text-obsidian-400 font-semibold">
                Principle 02
              </div>
              <h3 className="text-2xl font-serif text-obsidian-900">
                Partnership
              </h3>
              <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed">
                We work alongside leadership teams in the trenches rather than simply delivering ivory-tower recommendations and walking away.
              </p>
            </div>

            <div className="border-t-2 border-cognac-600 pt-6 space-y-3">
              <div className="text-xs uppercase tracking-widest text-obsidian-400 font-semibold">
                Principle 03
              </div>
              <h3 className="text-2xl font-serif text-obsidian-900">
                Practicality
              </h3>
              <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed">
                Our work is designed to move rapidly from strategic insight into measurable, observable, day-to-day organizational action.
              </p>
            </div>

            <div className="border-t-2 border-cognac-600 pt-6 space-y-3">
              <div className="text-xs uppercase tracking-widest text-obsidian-400 font-semibold">
                Principle 04
              </div>
              <h3 className="text-2xl font-serif text-obsidian-900">
                Lasting Impact
              </h3>
              <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed">
                We build institutional capabilities, leadership benches, and behavioral systems that remain robust long after the engagement ends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LARGE QUOTE / STATEMENT SECTION */}
      <section className="py-24 bg-obsidian-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center space-y-8 relative z-10">
          <div className="w-12 h-1 bg-cognac-500 mx-auto"></div>
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl italic leading-relaxed text-white">
            “The strongest organizations are built when leaders create clarity, alignment and confidence at every level.”
          </blockquote>
          <div className="text-xs uppercase tracking-widest text-cognac-400 font-semibold">
            Managing Partner, Nexora Leadership Advisory
          </div>
        </div>
      </section>

      {/* 10. BOTTOM ADVISORY CONVERSION BANNER */}
      <section className="py-20 bg-canvas border-t border-hairline">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-white border border-hairline p-10 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
                Senior Executive Engagement
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-obsidian-900">
                Let’s talk about what’s next for your leadership team.
              </h2>
              <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed">
                Schedule a confidential introductory conversation with a Nexora Senior Managing Partner in London, New York, or Singapore.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button
                onClick={() => openAdvisorModal()}
                className="inline-flex items-center justify-center text-xs uppercase tracking-widest px-8 py-4 bg-obsidian-900 text-white font-medium hover:bg-cognac-600 transition-colors shadow-md"
              >
                Talk to an Advisor
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center text-xs uppercase tracking-widest px-8 py-4 bg-transparent text-obsidian-900 border border-obsidian-300 font-medium hover:bg-obsidian-100 transition-colors"
              >
                View Global Offices
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
