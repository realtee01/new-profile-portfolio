import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Particle from "./components/Particle";
import Home from "./components/Home/Home";

// Route-level code-splitting with React.lazy
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const ProjectCaseStudy = lazy(() => import("./components/Projects/ProjectCaseStudy"));
const Services = lazy(() => import("./components/Services/Services"));
const WebDeveloperNigeria = lazy(() => import("./components/Authority/WebDeveloperNigeria"));
const Resume = lazy(() => import("./components/Resume/Resume"));
const Blog = lazy(() => import("./components/Blog/Blog"));
const BlogPost = lazy(() => import("./components/Blog/BlogPost"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const ThankYou = lazy(() => import("./components/Contact/ThankYou"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Testimonials = lazy(() => import("./components/Testimonials/Testimonials"));

function PageLoadingFallback() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center relative z-10">
      <div className="w-10 h-10 rounded-full border-2 border-white/10 border-t-[#00e5ff] animate-spin" />
      <span className="mt-4 text-xs font-mono tracking-widest text-gray-400 uppercase">Loading...</span>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="App" id="top">
        <Particle />
        <div id="scroll" className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <ScrollToTop />
          <main className="flex-grow">
            <Suspense fallback={<PageLoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/web-developer-nigeria" element={<WebDeveloperNigeria />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
