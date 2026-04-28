import React, { useState, useEffect } from 'react';
import { Loader } from './portfolio/Loader';
import { Navigation } from './portfolio/Navigation';
import { Hero } from './portfolio/Hero';
import { About } from './portfolio/About';
import { Experience } from './portfolio/Experience';
import { TechStack } from './portfolio/TechStack';
import { FeaturedProjects } from './portfolio/FeaturedProjects';
import { AllProjects } from './portfolio/AllProjects';
import { Testimonials } from './portfolio/Testimonials';
import { Contact } from './portfolio/Contact';
import { Footer } from './portfolio/Footer';
import { Analytics } from "@vercel/analytics/react"

const AppLayout: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <FeaturedProjects />
      <AllProjects />
      <Testimonials />
      <Contact />
      <Footer />
      <Analytics />   
    </div>
  );
};

export default AppLayout;