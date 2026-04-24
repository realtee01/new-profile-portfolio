import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";

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
        <div id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
