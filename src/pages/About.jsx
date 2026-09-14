import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Shield, Eye, Compass, HeartHandshake, Zap } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import SEO from "../components/SEO";
import { teamData } from "../data/teamData";
import { useAdvisorModal } from "../context/AdvisorModalContext";

export default function About() {
  const { openAdvisorModal } = useAdvisorModal();

  const processSteps = [
    {
      stage: "01",
      name: "Listen",
      subtitle: "Unvarnished Reality",
      desc: "We begin without predetermined hypotheses. We conduct confidential C-suite diagnostics, board member interviews, and organizational network analyses to hear what remains unspoken in executive corridors."
    },
    {
      stage: "02",
      name: "Diagnose",
      subtitle: "Systemic Root Causes",
      desc: "We separate surface symptoms from underlying structural and psychological friction. We pinpoint the exact decision bottlenecks, misaligned incentives, and behavioral patterns impairing velocity."
    },
    {
      stage: "03",
      name: "Align",
      subtitle: "Unified Executive Conviction",
      desc: "We facilitate high-stakes executive alignment interventions. Through structured intellectual debate, we forge absolute C-suite clarity regarding strategic trade-offs, decision ownership, and resource allocation."
    },
    {
      stage: "04",
      name: "Act",
      subtitle: "Disciplined Execution",
      desc: "We embed directly alongside leadership teams to orchestrate change roadmaps. We institute high-velocity operating cadences, frontline coaching, and behavioral reinforcement mechanisms."
    },
    {
      stage: "05",
      name: "Sustain",
      subtitle: "Institutional Bench Strength",
      desc: "We institutionalize the new capabilities within your culture. Through succession architecture, leadership playbooks, and continuous feedback governance, impact endures beyond our advisory tenure."
    }
  ];

  const values = [
    {
      title: "Integrity",
      icon: Shield,
      desc: "We tell clients what they need to hear, not what is politically comfortable. Complete intellectual honesty is our foundational standard."
    },
    {
      title: "Curiosity",
      icon: Eye,
      desc: "We reject superficial dogma. We relentlessly examine emerging macroeconomic shifts, organizational psychology, and cross-industry patterns."
    },
    {
      title: "Courage",
      icon: Compass,
      desc: "We step into tense boardrooms, navigate high-stakes founder transitions, and address deep relational dysfunction with calm, resolute composure."
    },
    {
      title: "Collaboration",
      icon: HeartHandshake,
      desc: "We do not parachute in with pre-baked answers. We build mutual respect and partner shoulder-to-shoulder with our client executives."
    },
    {
      title: "Impact",
      icon: Zap,
      desc: "We hold ourselves strictly accountable to observable behavioral transformation and verifiable enterprise value creation."
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-canvas">
      <SEO 
        title="About Nexora | Global Leadership & Management Advisory"
        description="To help leaders and organizations make better decisions, build stronger capabilities, and create lasting impact."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Breadcrumbs items={[{ label: "About Nexora" }]} />

        {/* HERO / PURPOSE */}
        <section className="py-16 lg:py-24 border-b border-hairline">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
              Our Purpose & Heritage
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-serif text-obsidian-900 mt-4 leading-tight">
              To help leaders and organizations make better decisions, build stronger capabilities and create lasting impact.
            </h1>
            <p className="text-base sm:text-lg text-obsidian-600 mt-6 leading-relaxed">
              Founded by former top-tier strategy firm leaders and enterprise chief executives, Nexora Leadership Advisory was established on a singular premise: the greatest constraint on organizational potential is never lack of capital or technology—it is the quality, alignment, and emotional resilience of its leadership.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border border-hairline bg-white p-8">
              <h3 className="text-xl font-serif text-obsidian-900 mb-3">Independent C-Suite Counsel</h3>
              <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed">
                Unlike transactional consultancies driven by massive billable junior armies, Nexora is intentionally partner-led. Every engagement is personally guided by seasoned advisors who have sat in boardroom chairs, navigated multi-billion dollar turnarounds, and mediated profound executive crises.
              </p>
            </div>
            <div className="border border-hairline bg-white p-8">
              <h3 className="text-xl font-serif text-obsidian-900 mb-3">Behavioral Science Meets Business Strategy</h3>
              <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed">
                Strategy and culture cannot be separated. We bridge analytical rigor with advanced organizational psychology, ensuring that high-stakes commercial directives are supported by the behavioral habits, psychological safety, and incentive structures required to execute.
              </p>
            </div>
          </div>
        </section>

        {/* OUR APPROACH: LISTEN -> DIAGNOSE -> ALIGN -> ACT -> SUSTAIN */}
        <section className="py-24 border-b border-hairline">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
              The Nexora Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-obsidian-900 mt-2">
              Our Five-Stage Strategic Framework
            </h2>
            <p className="text-sm text-obsidian-600 mt-4 leading-relaxed">
              A systematic, human-centered framework developed across hundreds of C-suite and board engagements.
            </p>
          </div>

          {/* Visual Timeline */}
          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-hairline -translate-y-6"></div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              {processSteps.map((step, idx) => (
                <div
                  key={step.stage}
                  className="bg-white border border-hairline p-6 sm:p-7 flex flex-col justify-between hover:border-cognac-500 hover:shadow-xl transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-3xl font-bold text-cognac-600">
                        {step.stage}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-obsidian-400 font-semibold">
                        Stage {idx + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif text-obsidian-900 group-hover:text-cognac-700 transition-colors">
                      {step.name}
                    </h3>
                    <div className="text-[11px] uppercase tracking-wider text-cognac-600 font-medium mb-3">
                      {step.subtitle}
                    </div>
                    <p className="text-xs text-obsidian-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-24 border-b border-hairline">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-obsidian-900 mt-2">
              Our Values
            </h2>
            <p className="text-sm text-obsidian-600 mt-4 leading-relaxed">
              The foundational ethical standards that govern how we interact with clients, evaluate leadership, and build our firm.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((val) => {
              const IconComp = val.icon;
              return (
                <div key={val.title} className="bg-white border border-hairline p-6 space-y-3">
                  <div className="w-10 h-10 bg-cognac-50 text-cognac-600 flex items-center justify-center border border-cognac-200">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif text-obsidian-900">{val.title}</h3>
                  <p className="text-xs text-obsidian-600 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* EXPERIENCE / STATISTICS SECTION */}
        <section className="py-24 border-b border-hairline bg-white -mx-6 lg:-mx-12 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16">
              <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
                Measurable Pedigree
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-obsidian-900 mt-2">
                Proven Track Record at Enterprise Scale
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="border-t-2 border-cognac-600 pt-6">
                <div className="font-serif text-4xl lg:text-5xl font-bold text-obsidian-900">
                  $40B+
                </div>
                <div className="text-xs uppercase tracking-wider text-obsidian-500 mt-2 font-medium">
                  Client Enterprise Value Impacted
                </div>
              </div>

              <div className="border-t-2 border-cognac-600 pt-6">
                <div className="font-serif text-4xl lg:text-5xl font-bold text-obsidian-900">
                  94%
                </div>
                <div className="text-xs uppercase tracking-wider text-obsidian-500 mt-2 font-medium">
                  Client Executive Retention Rate
                </div>
              </div>

              <div className="border-t-2 border-cognac-600 pt-6">
                <div className="font-serif text-4xl lg:text-5xl font-bold text-obsidian-900">
                  180+
                </div>
                <div className="text-xs uppercase tracking-wider text-obsidian-500 mt-2 font-medium">
                  CEOs & Board Chairs Coached
                </div>
              </div>

              <div className="border-t-2 border-cognac-600 pt-6">
                <div className="font-serif text-4xl lg:text-5xl font-bold text-obsidian-900">
                  4 Continents
                </div>
                <div className="text-xs uppercase tracking-wider text-obsidian-500 mt-2 font-medium">
                  Global Advisory Footprint
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP TEAM */}
        <section className="py-24" id="team">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
              Practice Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-obsidian-900 mt-2">
              Partners & Senior Advisors
            </h2>
            <p className="text-sm text-obsidian-600 mt-4 leading-relaxed">
              Our senior team is actively involved in every strategic engagement from start to completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamData.map((person) => (
              <div key={person.id} className="bg-white border border-hairline p-8 flex flex-col sm:flex-row gap-6 items-start">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full sm:w-44 h-52 object-cover object-top border border-hairline flex-shrink-0 filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="space-y-2">
                  <div className="text-[10px] uppercase tracking-widest text-cognac-600 font-bold">
                    {person.role}
                  </div>
                  <h3 className="text-2xl font-serif text-obsidian-900">{person.name}</h3>
                  <div className="text-xs text-obsidian-500 font-medium">{person.credentials}</div>
                  <p className="text-xs text-obsidian-600 pt-2 leading-relaxed">{person.bio}</p>
                  
                  <div className="pt-3 border-t border-hairline">
                    <span className="text-[10px] uppercase tracking-wider text-obsidian-400 block mb-1">Focus Areas:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {person.specialties.map((s, i) => (
                        <span key={i} className="text-[10px] bg-subtle px-2 py-0.5 text-obsidian-700">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white border border-hairline p-10 lg:p-14 text-center mb-16">
          <h3 className="text-2xl sm:text-3xl font-serif text-obsidian-900 mb-3">
            Interested in partnering with Nexora?
          </h3>
          <p className="text-xs sm:text-sm text-obsidian-600 max-w-xl mx-auto mb-6">
            We welcome preliminary confidential inquiries from chief executives and board nomination committees.
          </p>
          <button
            onClick={() => openAdvisorModal()}
            className="inline-flex items-center text-xs uppercase tracking-widest px-8 py-3.5 bg-obsidian-900 text-white font-medium hover:bg-cognac-600 transition-colors shadow-sm"
          >
            <span>Initiate an Executive Dialogue</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </button>
        </section>
      </div>
    </div>
  );
}
