import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";
import Particle from "./components/Particle";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Blog from "./components/Blog/Blog";
import BlogPost from "./components/Blog/BlogPost";
import Contact from "./components/Contact/Contact";
import ThankYou from "./components/Contact/ThankYou";
import Experience from "./components/Experience/Experience";
import Testimonials from "./components/Testimonials/Testimonials";

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
          <Footer />
        </div>
      </div>
    </Router>
  );
}
