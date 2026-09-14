import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AdvisorModal from "./components/AdvisorModal";
import { AdvisorModalProvider } from "./context/AdvisorModalContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Expertise from "./pages/Expertise";
import ServiceDetail from "./pages/ServiceDetail";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Insights from "./pages/Insights";
import InsightDetail from "./pages/InsightDetail";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <AdvisorModalProvider>
        <div className="flex flex-col min-h-screen bg-canvas text-obsidian-900 font-sans selection:bg-cognac-200 selection:text-obsidian-900">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              
              {/* Practices / Expertise */}
              <Route path="/expertise" element={<Expertise />} />
              <Route path="/expertise/:slug" element={<ServiceDetail />} />
              
              {/* Case Studies */}
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
              
              {/* Insights & Thought Leadership */}
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<InsightDetail />} />
              
              {/* Contact & Consultation */}
              <Route path="/contact" element={<Contact />} />
              
              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
          <AdvisorModal />
          <ScrollToTop />
        </div>
      </AdvisorModalProvider>
    </Router>
  );
}
