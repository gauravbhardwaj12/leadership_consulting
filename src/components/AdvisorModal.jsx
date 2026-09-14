import { useState, useEffect } from "react";
import { X, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { useAdvisorModal } from "../context/AdvisorModalContext";

export default function AdvisorModal() {
  const { isOpen, closeAdvisorModal, defaultPractice } = useAdvisorModal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    practice: defaultPractice || "Executive Leadership",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (defaultPractice) {
      setFormData(prev => ({ ...prev, practice: defaultPractice }));
    }
  }, [defaultPractice]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        closeAdvisorModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeAdvisorModal]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Work email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please provide a valid work email";
    }
    if (!formData.company.trim()) errs.company = "Company / Organization is required";
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
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      title: "",
      practice: "Executive Leadership",
      message: ""
    });
    closeAdvisorModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-900/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white border border-hairline shadow-2xl p-8 sm:p-10 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeAdvisorModal}
          className="absolute top-6 right-6 text-obsidian-400 hover:text-obsidian-900 transition-colors p-2"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 bg-cognac-50 text-cognac-600 rounded-full flex items-center justify-center mx-auto mb-6 border border-cognac-200">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-obsidian-900 mb-3">
              Inquiry Received
            </h3>
            <p className="text-obsidian-600 text-sm max-w-md mx-auto mb-8 leading-relaxed">
              Thank you, <span className="font-semibold text-obsidian-800">{formData.name}</span>. A Senior Partner from our 
              <span className="font-semibold text-obsidian-800"> {formData.practice}</span> advisory practice will review your requirements and reach out within 24 business hours under strict non-disclosure.
            </p>
            <button
              onClick={handleReset}
              className="inline-flex items-center text-xs uppercase tracking-widest px-8 py-3.5 bg-obsidian-900 text-white font-medium hover:bg-cognac-600 transition-colors"
            >
              Return to Site
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 border-b border-hairline pb-4">
              <span className="text-xs uppercase tracking-widest-plus text-cognac-600 font-semibold">
                Direct C-Suite Advisory
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-obsidian-900 mt-1">
                Schedule an Executive Consultation
              </h2>
              <p className="text-xs sm:text-sm text-obsidian-500 mt-1">
                Confidential strategic discussion with a Nexora Senior Managing Partner.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-obsidian-700 font-medium mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-3.5 py-2.5 bg-subtle/50 border text-sm text-obsidian-900 focus:outline-none focus:border-cognac-600 focus:bg-white transition-all ${
                      errors.name ? "border-red-500" : "border-hairline"
                    }`}
                    placeholder="e.g. Eleanor Vance"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-obsidian-700 font-medium mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 py-2.5 bg-subtle/50 border text-sm text-obsidian-900 focus:outline-none focus:border-cognac-600 focus:bg-white transition-all ${
                      errors.email ? "border-red-500" : "border-hairline"
                    }`}
                    placeholder="e.g. e.vance@enterprise.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-obsidian-700 font-medium mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className={`w-full px-3.5 py-2.5 bg-subtle/50 border text-sm text-obsidian-900 focus:outline-none focus:border-cognac-600 focus:bg-white transition-all ${
                      errors.company ? "border-red-500" : "border-hairline"
                    }`}
                    placeholder="e.g. Global Holdings plc"
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-obsidian-700 font-medium mb-1">
                    Title / Role
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-subtle/50 border border-hairline text-sm text-obsidian-900 focus:outline-none focus:border-cognac-600 focus:bg-white transition-all"
                    placeholder="e.g. Chief Executive Officer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-obsidian-700 font-medium mb-1">
                  Primary Area of Advisory
                </label>
                <select
                  value={formData.practice}
                  onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-subtle/50 border border-hairline text-sm text-obsidian-900 focus:outline-none focus:border-cognac-600 focus:bg-white transition-all"
                >
                  <option value="Executive Leadership">Executive Leadership & Senior Team Effectiveness</option>
                  <option value="Organizational Transformation">Organizational Transformation & Operating Models</option>
                  <option value="Strategy & Growth">Strategy & Growth Horizons</option>
                  <option value="Culture & Performance">Culture & High-Performance Behavioral Systems</option>
                  <option value="Succession & Capability">C-Suite Succession & Capability Architecture</option>
                  <option value="Governance & Board Advisory">Board Advisory & Governance</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-obsidian-700 font-medium mb-1">
                  Brief Context / Challenge (Optional)
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 bg-subtle/50 border border-hairline text-sm text-obsidian-900 focus:outline-none focus:border-cognac-600 focus:bg-white transition-all resize-none"
                  placeholder="Share high-level priorities or time horizon for your engagement..."
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center text-xs text-obsidian-500">
                  <ShieldCheck className="w-4 h-4 text-cognac-600 mr-1.5 flex-shrink-0" />
                  <span>Strict NDA & confidentiality observed.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center text-xs uppercase tracking-widest px-6 py-3 bg-obsidian-900 text-white font-medium hover:bg-cognac-600 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? "Connecting..." : "Request Consultation"}
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
