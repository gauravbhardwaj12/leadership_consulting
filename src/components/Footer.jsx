import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Mail, Globe, Shield } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 2000);
    }
  };

  return (
    <footer className="bg-obsidian-900 text-obsidian-400 border-t border-obsidian-800">
      {/* Top Advisory Strip */}
      <div className="border-b border-obsidian-800/80 py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-cognac-500 text-xs uppercase tracking-widest font-semibold mb-1">
              <span>Executive Briefings</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-white">
              The Nexora Quarterly Memorandum
            </h3>
            <p className="text-obsidian-400 text-xs sm:text-sm max-w-xl mt-1">
              Curated strategic briefings on C-suite governance, boardroom dynamics, and organizational resilience delivered directly to senior executives.
            </p>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your corporate email..."
              className="px-4 py-3 bg-obsidian-800 text-white text-xs border border-obsidian-700 focus:outline-none focus:border-cognac-500 w-full sm:w-72"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-cognac-600 hover:bg-cognac-700 text-white text-xs uppercase tracking-widest font-medium transition-colors flex items-center justify-center"
            >
              {subscribed ? (
                <span className="flex items-center">
                  <Check className="w-4 h-4 mr-1" /> Subscribed
                </span>
              ) : (
                <span className="flex items-center">
                  Subscribe <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </span>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {/* Brand & Purpose Column */}
        <div className="col-span-2 lg:col-span-1">
          <Link to="/" className="inline-block mb-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-white">
              NEXORA
            </span>
            <span className="block text-[9px] tracking-widest-plus uppercase text-cognac-500 font-medium">
              Leadership Advisory
            </span>
          </Link>
          <p className="text-xs text-obsidian-400 leading-relaxed mb-6">
            Building leaders. Strengthening organizations. Creating lasting impact across global enterprises.
          </p>
          <div className="text-[11px] text-obsidian-500 space-y-1">
            <div className="flex items-center">
              <Globe className="w-3.5 h-3.5 mr-2 text-obsidian-400" />
              <span>London · New York · Singapore · Zurich</span>
            </div>
            <div className="flex items-center pt-1">
              <Mail className="w-3.5 h-3.5 mr-2 text-obsidian-400" />
              <span>advisory@nexora-leadership.com</span>
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">
            Expertise
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <Link to="/expertise/executive-leadership" className="hover:text-white transition-colors">
                Executive Leadership
              </Link>
            </li>
            <li>
              <Link to="/expertise/organizational-transformation" className="hover:text-white transition-colors">
                Transformation
              </Link>
            </li>
            <li>
              <Link to="/expertise/strategy-and-growth" className="hover:text-white transition-colors">
                Strategy & Growth
              </Link>
            </li>
            <li>
              <Link to="/expertise/culture-and-performance" className="hover:text-white transition-colors">
                Culture & Performance
              </Link>
            </li>
            <li>
              <Link to="/expertise/succession-and-capability" className="hover:text-white transition-colors">
                Succession & Capability
              </Link>
            </li>
          </ul>
        </div>

        {/* Insights */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">
            Insights
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <Link to="/insights" className="hover:text-white transition-colors">
                All Publications
              </Link>
            </li>
            <li>
              <Link to="/insights?cat=Leadership" className="hover:text-white transition-colors">
                C-Suite Leadership
              </Link>
            </li>
            <li>
              <Link to="/insights?cat=Strategy" className="hover:text-white transition-colors">
                Corporate Strategy
              </Link>
            </li>
            <li>
              <Link to="/insights?cat=Culture" className="hover:text-white transition-colors">
                Culture Systems
              </Link>
            </li>
            <li>
              <Link to="/insights?cat=Transformation" className="hover:text-white transition-colors">
                Enterprise Shift
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">
            Company
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                About Nexora
              </Link>
            </li>
            <li>
              <Link to="/about#team" className="hover:text-white transition-colors">
                Our Partners
              </Link>
            </li>
            <li>
              <Link to="/case-studies" className="hover:text-white transition-colors">
                Case Studies
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact & Offices
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">
                Careers at Nexora
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect & Legal */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">
            Connect
          </h4>
          <ul className="space-y-2.5 text-xs mb-6">
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn Executive Community
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">
                Request Briefing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">
                Media & Press Inquiries
              </Link>
            </li>
          </ul>

          <div className="pt-2 text-[11px] text-obsidian-500 border-t border-obsidian-800">
            <div className="flex items-center text-obsidian-400 mb-1">
              <Shield className="w-3 h-3 mr-1 text-cognac-500" />
              <span>Independent Advisory</span>
            </div>
            <span>London · New York · Singapore</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-obsidian-800/80 py-8 px-6 lg:px-12 text-[11px] text-obsidian-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 Nexora Leadership Advisory Ltd. All rights reserved. Fictional consulting demonstration.
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:text-obsidian-300 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-obsidian-300 transition-colors cursor-pointer">
              Terms of Use
            </span>
            <span className="hover:text-obsidian-300 transition-colors cursor-pointer">
              Regulatory Disclosures
            </span>
            <span className="hover:text-obsidian-300 transition-colors cursor-pointer">
              Cookie Preferences
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
