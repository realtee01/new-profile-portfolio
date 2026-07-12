import { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";
import Particle from "./components/Particle";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Resume = lazy(() => import("./components/Resume/Resume"));
const Blog = lazy(() => import("./components/Blog/Blog"));
const BlogPost = lazy(() => import("./components/Blog/BlogPost"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const ThankYou = lazy(() => import("./components/Contact/ThankYou"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Testimonials = lazy(() => import("./components/Testimonials/Testimonials"));

function SuspenseFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
      <div className="w-12 h-12 border-4 border-[#00e5ff] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id="top">
        <Particle />
        <div id={load ? "no-scroll" : "scroll"} className="relative z-10">
          <Navbar />
          <ScrollToTop />
          <Suspense fallback={<SuspenseFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
