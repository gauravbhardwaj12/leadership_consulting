import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle, ShieldCheck, Globe, Building } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import SEO from "../components/SEO";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    areaOfInterest: "Executive Leadership & Senior Team Effectiveness",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const offices = [
    {
      city: "London",
      status: "Global Headquarters",
      address: "25 Bank Street, Canary Wharf",
      postal: "London E14 5JP, United Kingdom",
      phone: "+44 (0) 20 7946 0920",
      email: "london@nexora-leadership.com"
    },
    {
      city: "New York",
      status: "Americas Hub",
      address: "375 Park Avenue, 28th Floor",
      postal: "New York, NY 10152, United States",
      phone: "+1 (212) 555-0188",
      email: "newyork@nexora-leadership.com"
    },
    {
      city: "Singapore",
      status: "Asia-Pacific Practice",
      address: "Marina Bay Financial Centre, Tower 2",
      postal: "Singapore 018983",
      phone: "+65 6789 0122",
      email: "singapore@nexora-leadership.com"
    },
    {
      city: "Zurich",
      status: "European Advisory",
      address: "Bleicherweg 10, Paradeplatz",
      postal: "8002 Zurich, Switzerland",
      phone: "+41 44 210 3340",
      email: "zurich@nexora-leadership.com"
    }
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Corporate work email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid work email address";
    }
    if (!formData.company.trim()) errs.company = "Organization / Company name is required";
    if (!formData.jobTitle.trim()) errs.jobTitle = "Executive title or role is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen pt-28 pb-24 bg-canvas">
      <SEO
        title="Contact Nexora | Executive Consultation & Global Offices"
        description="Let's talk about what's next. Connect with our senior advisory partners across London, New York, Singapore, and Zurich."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Breadcrumbs items={[{ label: "Contact & Advisory Inquiries" }]} />

        {/* HERO */}
        <section className="py-16 border-b border-hairline">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
              Initiate an Executive Dialogue
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-obsidian-900 mt-4 leading-tight">
              Let’s talk about what’s next.
            </h1>
            <p className="text-base sm:text-lg text-obsidian-600 mt-4 leading-relaxed max-w-3xl">
              Whether you’re navigating growth, transformation or a leadership challenge, our team would welcome the opportunity to understand your priorities.
            </p>
          </div>
        </section>

        {/* SPLIT LAYOUT: CONTACT DETAILS & INQUIRY FORM */}
        <section className="py-20 border-b border-hairline">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Office Information */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <span className="text-xs uppercase tracking-widest text-cognac-600 font-bold">
                  Direct Inquiries
                </span>
                <h3 className="text-2xl font-serif text-obsidian-900 mt-2 mb-4">
                  Partner Advisory Desk
                </h3>
                <p className="text-xs sm:text-sm text-obsidian-600 leading-relaxed">
                  All communications are handled in the strictest confidence. For immediate board-level or media inquiries:
                </p>

                <div className="mt-6 space-y-3 text-xs sm:text-sm text-obsidian-800">
                  <div className="flex items-center space-x-3 p-3 bg-white border border-hairline">
                    <Mail className="w-4 h-4 text-cognac-600 flex-shrink-0" />
                    <span>advisory@nexora-leadership.com</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white border border-hairline">
                    <Phone className="w-4 h-4 text-cognac-600 flex-shrink-0" />
                    <span>+44 (0) 20 7946 0920 (Executive Desk)</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white border border-hairline">
                    <Globe className="w-4 h-4 text-cognac-600 flex-shrink-0" />
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-cognac-700 underline underline-offset-4"
                    >
                      Connect via LinkedIn Executive Network
                    </a>
                  </div>
                </div>
              </div>

              {/* Global Offices */}
              <div>
                <span className="text-xs uppercase tracking-widest text-cognac-600 font-bold">
                  Global Locations
                </span>
                <h3 className="text-xl font-serif text-obsidian-900 mt-1 mb-6">
                  Executive Practice Hubs
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {offices.map((office) => (
                    <div key={office.city} className="bg-white border border-hairline p-5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-lg font-bold text-obsidian-900">
                          {office.city}
                        </span>
                        <span className="text-[9px] uppercase tracking-wider text-cognac-700 bg-cognac-50 px-2 py-0.5 border border-cognac-200">
                          {office.status}
                        </span>
                      </div>
                      <div className="text-xs text-obsidian-600 leading-snug">
                        {office.address}
                        <br />
                        {office.postal}
                      </div>
                      <div className="pt-2 text-[11px] text-obsidian-500 font-medium">
                        {office.phone}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Form */}
            <div className="lg:col-span-7 bg-white border border-hairline p-8 sm:p-12 shadow-sm">
              {isSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-cognac-50 text-cognac-600 rounded-full flex items-center justify-center mx-auto border border-cognac-200">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-obsidian-900">
                    Thank you, {formData.fullName}.
                  </h3>
                  <p className="text-xs sm:text-sm text-obsidian-600 max-w-md mx-auto leading-relaxed">
                    Your executive consultation request regarding{" "}
                    <span className="font-semibold text-obsidian-900">{formData.areaOfInterest}</span> has been logged directly with our Senior Managing Partners. We will respond confidentially within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        company: "",
                        jobTitle: "",
                        phone: "",
                        areaOfInterest: "Executive Leadership & Senior Team Effectiveness",
                        message: ""
                      });
                    }}
                    className="mt-6 inline-flex items-center text-xs uppercase tracking-widest px-8 py-3.5 bg-obsidian-900 text-white font-medium hover:bg-cognac-600 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-bold">
                      Confidential Advisory Form
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif text-obsidian-900 mt-1">
                      Start a Conversation
                    </h2>
                    <p className="text-xs text-obsidian-500 mt-1">
                      Fields marked with an asterisk (*) are required for executive assignment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-obsidian-700 font-medium mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-3 bg-subtle/40 border text-xs text-obsidian-900 focus:outline-none focus:border-cognac-600 focus:bg-white transition-all ${
                          errors.fullName ? "border-red-500" : "border-hairline"
                        }`}
                        placeholder="e.g. Julian Montgomery"
                      />
                      {errors.fullName && <p className="text-red-500 text-[11px] mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-obsidian-700 font-medium mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 bg-subtle/40 border text-xs text-obsidian-900 focus:outline-none focus:border-cognac-600 focus:bg-white transition-all ${
                          errors.email ? "border-red-500" : "border-hairline"
                        }`}
                        placeholder="e.g. j.montgomery@enterprise.com"
                      />
                      {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-obsidian-700 font-medium mb-1.5">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={`w-full px-4 py-3 bg-subtle/40 border text-xs text-obsidian-900 focus:outline-none focus:border-cognac-600 focus:bg-white transition-all ${
                          errors.company ? "border-red-500" : "border-hairline"
                        }`}
                        placeholder="e.g. Global Industrial Corp"
                      />
                      {errors.company && <p className="text-red-500 text-[11px] mt-1">{errors.company}</p>}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-obsidian-700 font-medium mb-1.5">
                        Job Title *
                      </label>
                      <input
                        type="text"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        className={`w-full px-4 py-3 bg-subtle/40 border text-xs text-obsidian-900 focus:outline-none focus:border-cognac-600 focus:bg-white transition-all ${
                          errors.jobTitle ? "border-red-500" : "border-hairline"
                        }`}
                        placeholder="e.g. Managing Director / CEO"
                      />
                      {errors.jobTitle && <p className="text-red-500 text-[11px] mt-1">{errors.jobTitle}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-obsidian-700 font-medium mb-1.5">
                        Direct Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-subtle/40 border border-hairline text-xs text-obsidian-900 focus:outline-none focus:border-cognac-600 focus:bg-white transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-obsidian-700 font-medium mb-1.5">
                        Area of Interest
                      </label>
                      <select
                        value={formData.areaOfInterest}
                        onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                        className="w-full px-4 py-3 bg-subtle/40 border border-hairline text-xs text-obsidian-900 focus:outline-none focus:border-cognac-600 focus:bg-white transition-all"
                      >
                        <option value="Executive Leadership & Senior Team Effectiveness">
                          Executive Leadership & Senior Team Effectiveness
                        </option>
                        <option value="Organizational Transformation & Operating Models">
                          Organizational Transformation & Operating Models
                        </option>
                        <option value="Strategy & Growth Horizons">Strategy & Growth Horizons</option>
                        <option value="Culture & High-Performance Behavioral Systems">
                          Culture & High-Performance Behavioral Systems
                        </option>
                        <option value="C-Suite Succession & Pipeline Architecture">
                          C-Suite Succession & Pipeline Architecture
                        </option>
                        <option value="Board Governance & Evaluation">
                          Board Governance & Evaluation
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-obsidian-700 font-medium mb-1.5">
                      Brief Message or Context
                    </label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-subtle/40 border border-hairline text-xs text-obsidian-900 focus:outline-none focus:border-cognac-600 focus:bg-white transition-all resize-none"
                      placeholder="Please outline the strategic context, key stakeholders, or anticipated timeframe for engagement..."
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center text-xs text-obsidian-500">
                      <ShieldCheck className="w-4 h-4 text-cognac-600 mr-2 flex-shrink-0" />
                      <span>All inquiries are bound by our corporate non-disclosure protocols.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center text-xs uppercase tracking-widest px-8 py-4 bg-obsidian-900 text-white font-medium hover:bg-cognac-600 transition-colors shadow-md disabled:opacity-70 whitespace-nowrap"
                    >
                      {isSubmitting ? "Submitting Inquiry..." : "Start a Conversation"}
                      <ArrowRight className="w-3.5 h-3.5 ml-2" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
