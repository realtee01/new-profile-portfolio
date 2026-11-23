import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WelcomeNameModal from "./components/Welcome/WelcomeNameModal";
import Home from "./components/Home/Home";
import { ThemeProvider } from "./context/ThemeContext";

const BookingModal = lazy(() => import("./components/Booking/BookingModal"));

const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const ProjectCaseStudy = lazy(() => import("./components/Projects/ProjectCaseStudy"));
const Blog = lazy(() => import("./components/Blog/Blog"));
const BlogPost = lazy(() => import("./components/Blog/BlogPost"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const ThankYou = lazy(() => import("./components/Contact/ThankYou"));

function PageLoadingFallback() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <div className="w-9 h-9 rounded-full border-2 border-[var(--border-hairline)] border-t-[var(--accent)] animate-spin" />
      <span className="mt-4 font-mono text-xs tracking-widest text-[var(--ink-muted)] uppercase">
        Loading
      </span>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="paper-grain min-h-screen flex flex-col bg-[var(--bg-paper)] text-[var(--ink)]" id="top">
          <Navbar />
          <ScrollToTop />
          <WelcomeNameModal />
          <Suspense fallback={null}>
            <BookingModal />
          </Suspense>
          <main className="flex-grow">
            <Suspense fallback={<PageLoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/thank-you" element={<ThankYou />} />
                {/* Clean redirects for retired legacy routes */}
                <Route path="/services" element={<Navigate to="/about#capabilities" replace />} />
                <Route path="/resume" element={<Navigate to="/about" replace />} />
                <Route path="/experience" element={<Navigate to="/about" replace />} />
                <Route path="/testimonials" element={<Navigate to="/projects" replace />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
