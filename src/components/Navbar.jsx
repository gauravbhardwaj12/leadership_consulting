import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { useAdvisorModal } from "../context/AdvisorModalContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { openAdvisorModal } = useAdvisorModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  const navLinks = [
    { label: "What We Do", href: "/expertise" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ];

  const quickServices = [
    { name: "Executive Leadership", slug: "executive-leadership" },
    { name: "Organizational Transformation", slug: "organizational-transformation" },
    { name: "Strategy & Growth", slug: "strategy-and-growth" },
    { name: "Culture & Performance", slug: "culture-and-performance" },
    { name: "Succession & Capability", slug: "succession-and-capability" }
  ];

  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-canvas/95 backdrop-blur-md py-3.5 border-b border-hairline shadow-sm"
          : "bg-canvas/90 backdrop-blur-sm py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Left: Brand */}
        <Link to="/" className="group flex items-baseline space-x-2.5">
          <span className="font-serif text-2xl lg:text-3xl font-bold tracking-tight text-obsidian-900 group-hover:text-cognac-700 transition-colors">
            NEXORA
          </span>
          <span className="text-[10px] tracking-widest-plus uppercase text-obsidian-500 font-medium hidden sm:inline-block border-l border-obsidian-300 pl-2.5">
            Leadership Advisory
          </span>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-widest font-medium text-obsidian-700">
          {/* Dropdown for Services */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <Link
              to="/expertise"
              className={`flex items-center space-x-1 py-2 hover:text-cognac-600 transition-colors ${
                isActive("/expertise") ? "text-cognac-700 font-semibold" : ""
              }`}
            >
              <span>What We Do</span>
              <ChevronDown className="w-3 h-3 text-obsidian-400 group-hover:rotate-180 transition-transform" />
            </Link>

            {servicesDropdown && (
              <div className="absolute top-full left-0 w-72 bg-white border border-hairline shadow-xl py-3 z-50 animate-fadeIn">
                <div className="px-4 py-1.5 text-[10px] uppercase tracking-widest text-cognac-600 font-bold border-b border-hairline mb-2">
                  Advisory Practices
                </div>
                {quickServices.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/expertise/${service.slug}`}
                    className="block px-4 py-2.5 text-xs text-obsidian-800 hover:bg-subtle hover:text-cognac-600 transition-colors normal-case tracking-normal font-normal"
                  >
                    {service.name}
                  </Link>
                ))}
                <div className="border-t border-hairline mt-2 pt-2 px-4">
                  <Link
                    to="/expertise"
                    className="text-[11px] text-cognac-600 hover:text-cognac-800 font-medium flex items-center"
                  >
                    <span>All Practices & Matrix</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/case-studies"
            className={`py-2 hover:text-cognac-600 transition-colors ${
              isActive("/case-studies") ? "text-cognac-700 font-semibold" : ""
            }`}
          >
            Case Studies
          </Link>

          <Link
            to="/insights"
            className={`py-2 hover:text-cognac-600 transition-colors ${
              isActive("/insights") ? "text-cognac-700 font-semibold" : ""
            }`}
          >
            Insights
          </Link>

          <Link
            to="/about"
            className={`py-2 hover:text-cognac-600 transition-colors ${
              isActive("/about") ? "text-cognac-700 font-semibold" : ""
            }`}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`py-2 hover:text-cognac-600 transition-colors ${
              isActive("/contact") ? "text-cognac-700 font-semibold" : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center space-x-4">
          <button
            onClick={() => openAdvisorModal()}
            className="group inline-flex items-center text-xs uppercase tracking-widest px-5 py-2.5 bg-obsidian-900 text-white font-medium hover:bg-cognac-600 transition-all duration-200 border border-transparent shadow-sm"
          >
            <span>Talk to an Advisor</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center space-x-3">
          <button
            onClick={() => openAdvisorModal()}
            className="text-[11px] uppercase tracking-wider px-3 py-1.5 bg-obsidian-900 text-white font-medium"
          >
            Consult
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-obsidian-800 hover:text-obsidian-950 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-hairline shadow-2xl p-6 transition-all duration-300 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-4">
            <div className="text-xs uppercase tracking-widest text-cognac-600 font-bold mb-1">
              Navigation
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-base font-serif py-1.5 border-b border-hairline/60 ${
                  isActive(link.href) ? "text-cognac-700 font-semibold" : "text-obsidian-800"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2 text-xs uppercase tracking-widest text-obsidian-400 font-semibold">
              Practices
            </div>
            <div className="grid grid-cols-1 gap-2 pl-2 border-l border-cognac-200">
              {quickServices.map((service) => (
                <Link
                  key={service.slug}
                  to={`/expertise/${service.slug}`}
                  className="text-sm text-obsidian-700 hover:text-cognac-600 py-1"
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-hairline flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAdvisorModal();
                }}
                className="w-full text-center py-3 bg-obsidian-900 text-white text-xs uppercase tracking-widest font-medium"
              >
                Talk to an Advisor →
              </button>
              <div className="text-center text-xs text-obsidian-500">
                London · New York · Singapore · Zurich
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
