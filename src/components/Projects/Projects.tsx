import ProjectCard from "./ProjectCards";
import { motion, Variants, AnimatePresence } from "motion/react";
import { Marquee } from "../ui/marquee";
import { Lock } from "lucide-react";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiSupabase, SiFirebase, SiJavascript, SiNodedotjs } from "react-icons/si";
import ProjectModal, { ProjectDetailsData } from "./ProjectModal";
import { useLanguage } from "../../context/LanguageContext";

// Real images for projects from user's github
const forzchainImg = "https://raw.githubusercontent.com/realtee01/my-portfolio/main/src/assets/forzchain.jpg";
const cinescopeImg = "https://raw.githubusercontent.com/realtee01/my-portfolio/main/src/assets/cinescope-thumb.jpg";
const calcImg = "https://raw.githubusercontent.com/realtee01/my-portfolio/main/src/assets/calc.jpg";
const nextcleanImg = "https://raw.githubusercontent.com/realtee01/my-portfolio/main/src/assets/Nextclean.jpg";
const heritageKitchenImg = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const trendyTransitImg = "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const relayPropertiesImg = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop";
const nexchat3Img = "https://plus.unsplash.com/premium_photo-1733342554594-102b8e2d0623?q=80&w=1131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const kotiImg = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1074&auto=format&fit=crop";
const pixelCleanImg = "https://plus.unsplash.com/premium_photo-1726079247228-993af4c05db8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const tribeFitnessImg = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1170&auto=format&fit=crop";
const blankCanvasImg = "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1171&auto=format&fit=crop";
const makeupBookingImg = "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1171&auto=format&fit=crop";
const dentistImg = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1170&auto=format&fit=crop";

import NotesCover from "./NotesCover";
import React, { useState } from "react";

const RoitechDescription = () => {
  const [showTechStack, setShowTechStack] = useState(false);

  return (
    <div className="flex flex-col gap-2 max-h-[160px] overflow-y-auto custom-scrollbar pr-2 text-xs sm:text-sm">
      <p>
        <strong className="text-[#00e5ff]">Status:</strong> In Development (2026 - Present)
      </p>
      <p className="leading-relaxed">
        Collaborating with backend engineers, product managers, and the Roitech AI team to architect and build scalable web and mobile applications from the ground up. My primary focus is ensuring a premium user experience through modern full-stack patterns and fluid UI transitions.
      </p>
      <p className="leading-relaxed">
        Additionally, leading the full-stack architecture for LearnIQ, an accessible learning platform featuring AI-driven summarization and audio transcription to bridge educational gaps.
      </p>
      {showTechStack ? (
        <div className="mt-1 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="text-[#c770f0]">
            <strong>Tech Stack:</strong> React (Vite), Tailwind CSS, Framer Motion, Vercel
          </p>
          <button 
            onClick={() => setShowTechStack(false)}
            className="self-start text-[#00e5ff] hover:text-white transition-colors text-xs font-semibold"
          >
            Hide Tech Stack
          </button>
        </div>
      ) : (
        <button 
          onClick={() => setShowTechStack(true)}
          className="self-start mt-1 bg-transparent border border-[#00e5ff]/30 text-[#00e5ff] hover:bg-[#00e5ff]/10 px-3 py-1 rounded transition-colors text-xs font-semibold"
        >
          View Tech Stack
        </button>
      )}
    </div>
  );
};

// IMPORTANT: "CineScope" must ALWAYS remain the first item in this array.
// Do not move it down when adding new projects.
const projectsData = [
  {
    id: 7,
    title: "CineScope",
    description: "An elite cinematic discovery web application featuring real-time data streaming, advanced filtering, and a meticulously crafted UI.",
    imgPath: cinescopeImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://cinescopemovienew.vercel.app/",
    category: "Web App",
    featured: true,
    details: {
      problem: "Movie enthusiasts required a high-performance, visually striking platform to discover films and access rich metadata without the clutter of traditional databases.",
      solution: "Engineered a state-of-the-art cinematic discovery engine with seamless real-time API integrations and an immersive, premium interface.",
      role: "Lead Full-Stack Engineer",
      toolsUsed: ["React", "Tailwind CSS", "TMDB API", "Vite", "Framer Motion"],
      whyTools: "React and Vite for instantaneous rendering and developer velocity, TMDB API for expansive cinematic data, and Tailwind paired with Framer Motion for a fluid, cinematic UI.",
      features: ["Real-time predictive search", "Dynamic categorizations & filtering", "Immersive movie detail views with embedded trailers", "Ultra-responsive bento grid layouts"],
      challenges: "Architecting a performant caching layer for API rate limits and implementing lazy-loading for high-resolution 4K posters to guarantee 60fps scrolling.",
      result: "Delivered a highly performant, award-worthy movie browsing experience that drastically increased user retention and session duration."
    }
  },
  {
    id: 15,
    title: "Riad Dentist Care",
    description: "A comprehensive digital platform for a modern dental clinic, featuring online booking, service showcases, and patient resources.",
    imgPath: dentistImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://riad-dentist-care.vercel.app/",
    category: "Landing Page",
    details: {
      problem: "A modern dental clinic needed a professional online presence to attract patients and streamline the appointment booking process.",
      solution: "A responsive website that provides clear information about dental services, staff profiles, and an integrated booking system.",
      role: "Full-stack Developer",
      toolsUsed: ["Next.js", "Tailwind CSS"],
      whyTools: "Next.js for performance and SEO, and Tailwind CSS for creating a reassuring, clean, and professional visual aesthetic.",
      features: ["Online appointment booking", "Detailed service descriptions", "Patient testimonials", "Responsive design"],
      challenges: "Creating a completely seamless booking flow that accommodates different types of dental procedures without confusing the user.",
      result: "Improved patient acquisition through a trustworthy online experience and reduced administrative load with automated bookings."
    }
  },
  {
    id: 6,
    title: "Tribe Fitness",
    description: "A dynamic and engaging fitness platform featuring comprehensive workout plans, class schedules, and a vibrant community interface.",
    imgPath: tribeFitnessImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://tribe-fitness-six.vercel.app/",
    category: "Landing Page",
    details: {
      problem: "Local gyms struggle to maintain an engaging online presence where users can easily view schedules and book classes.",
      solution: "A vibrant landing page and platform that centralizes class schedules, workout plans, and community interaction.",
      role: "Full-stack Developer",
      toolsUsed: ["React", "Tailwind CSS", "Firebase"],
      whyTools: "React for component-based UI, Tailwind for rapid styling to match the energetic brand vibe, Firebase for storing dynamic class schedules.",
      features: ["Dynamic class scheduling", "Member dashboard", "Community forum", "Responsive design"],
      challenges: "Designing an interface that is highly energetic but doesn't overwhelm the user with too much information at once.",
      result: "Improved class attendance and user engagement through a much more accessible and mobile-friendly scheduling interface."
    }
  },
  {
    id: 13,
    title: "Make-Up Booking Platform",
    description: "A seamless online booking system designed for makeup artists to manage appointments, showcase portfolios, and offer a smooth scheduling experience for clients.",
    imgPath: makeupBookingImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://make-up-online-booking.vercel.app/",
    category: "Landing Page",
    details: {
      problem: "Makeup professionals often struggle to manage appointments manually across different apps (WhatsApp, Instagram, Notebooks), leading to double bookings and lost clients.",
      solution: "A full-stack digital booking platform acting as a centralized hub. It handles schedule availability, portfolio display, and direct client bookings from a single link, while providing a robust CMS for staff to manage the site.",
      role: "Full-Stack Engineer",
      toolsUsed: ["React", "Tailwind CSS", "Supabase", "Vite", "Motion"],
      whyTools: "React allows for rapid creation of interactive forms. Tailwind CSS accelerates styling with utility classes keeping the user interface cohesive, while Motion provides polished transitions. Supabase was integrated to power the backend and provide seamless data management.",
      features: ["Interactive Calendar Integration", "Dynamic Service Selection", "Real-time cost estimation", "Admin Dashboard & Calendar View", "CMS for easy editing of services, pictures, and website content by staff"],
      challenges: "Creating an intuitive user flow that wasn't overwhelming despite having multiple step-by-step selections, and simultaneously building a backend using Supabase to allow admins and staff to easily edit services, pictures, and almost everything on the website without coding.",
      result: "A professional, fast, and accessible scheduling solution providing a 30% reduction in booking friction and enabling artists to securely showcase their portfolio while driving conversions."
    }
  },
  {
    id: 14,
    title: "Photography Portfolio",
    description: "An elegant and visually immersive portfolio showcasing professional photography with smooth animations and minimal design.",
    imgPath: blankCanvasImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://blank-canvas-spark-7410.vercel.app/",
    category: "Web App",
    details: {
      problem: "Photographers need a minimalist digital space that highlights high-resolution images without distracting UI elements.",
      solution: "A beautifully crafted portfolio website focused on visual storytelling, utilizing large imagery and fluid transitions.",
      role: "Full-stack Developer",
      toolsUsed: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      whyTools: "React and Vite for fast performance, Tailwind for quick and custom responsive layouts, Framer Motion for elegant image reveal animations.",
      features: ["High-res image gallery", "Image lightbox", "Smooth page transitions", "Responsive grid layouts"],
      challenges: "Optimizing the loading speed and performance of high-resolution images without compromising on quality.",
      result: "A sleek, professional portfolio that effectively showcases the photographer's work and improves client engagement."
    }
  },
  {
    id: 1,
    title: "Roitech AI & LearnIQ",
    description: <RoitechDescription />,
    customCover: <NotesCover />,
    inProgress: true,
    ghLink: "",
    demoLink: "",
    category: "Web App",
    details: {
      problem: "Students struggle to extract key points from long lectures and organize them into actionable study materials effectively.",
      solution: "An AI-driven educational tool that automatically generates notes, flashcards, and quizzes from raw input.",
      role: "Full-Stack Developer",
      toolsUsed: ["Next.js", "Tailwind CSS", "OpenAI API", "PostgreSQL"],
      whyTools: "Next.js for SSR and fast routing, OpenAI for intelligent text parsing, PostgreSQL for robust relational data modeling and syncing studying materials.",
      features: ["Automatic note generation", "AI-powered flashcards", "Adaptive quizzes", "Progress tracking"],
      challenges: "Managing state for complex AI responses and ensuring the generated study materials are accurately formatted and saved to the database without delay.",
      result: "Increased student engagement by providing instant, high-quality study resources, saving hours of manual note-taking."
    }
  },
  {
    id: 11,
    title: "Nextclean",
    description: "A Lagos-based cleaning service landing page built to convert. Sharp copy, filterable services, and a mobile-first layout.",
    imgPath: nextcleanImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://nextclean.vercel.app",
    category: "Landing Page",
    details: {
      problem: "A local cleaning service needed a digital storefront to convert visitors into booked appointments efficiently.",
      solution: "A conversion-focused landing page with transparent service filters, sharp copy, and an easy booking flow.",
      role: "Full-stack Developer",
      toolsUsed: ["Next.js", "Tailwind CSS", "Framer Motion"],
      whyTools: "Next.js for SEO optimization to rank high locally, Tailwind for quick custom styling, and Framer Motion for subtle trust-building micro-interactions.",
      features: ["Filterable service list", "Pricing calculator", "Mobile-optimized booking form", "Client testimonials"],
      challenges: "Ensuring the mobile experience was completely frictionless, as the majority of users would be booking from their phones.",
      result: "A significant increase in online booking inquiries and a stronger brand presence in the local market."
    }
  },
  {
    id: 9,
    title: "Koti Restaurant",
    description: "A sophisticated website for a premium foreign restaurant, showcasing an exotic culinary experience with an elegant design and seamless reservation system.",
    imgPath: kotiImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://koti-gray.vercel.app/",
    category: "Landing Page",
    details: {
      problem: "A high-end restaurant needed a digital presence that matched their premium dining experience and allowed for easy reservations.",
      solution: "An elegant, sophisticated website showcasing high-quality culinary imagery and integrating a seamless reservation system.",
      role: "Web Developer",
      toolsUsed: ["Next.js", "Tailwind CSS", "Supabase"],
      whyTools: "Next.js for a smooth SPA experience and SEO, Tailwind for precise, elegant styling, and Supabase to handle reservation data.",
      features: ["Interactive menu", "Image gallery", "Real-time reservation booking", "Contact management"],
      challenges: "Balancing high-resolution imagery with fast load times to ensure the premium feel wasn't compromised by performance issues.",
      result: "Elevated the restaurant's digital brand and streamlined their table booking process."
    }
  },
  {
    id: 8,
    title: "Relay Properties",
    description: "A refined real estate platform designed for seamless property discovery and management, featuring an intuitive interface and responsive design elements.",
    imgPath: relayPropertiesImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://relay-properties.vercel.app/",
    category: "Landing Page",
    details: {
      problem: "Finding and managing properties was cumbersome due to cluttered interfaces and lack of mobile optimization on existing platforms.",
      solution: "A refined real estate platform focused on intuitive property discovery and clean presentation.",
      role: "Full-Stack Developer",
      toolsUsed: ["Next.js", "Tailwind CSS", "MongoDB"],
      whyTools: "Next.js for fast page loads and SEO, MongoDB for a flexible, robust backend document database to manage property listings and user authentication.",
      features: ["Advanced property search and filtering", "Image carousels", "Agent contact forms", "Save favorite properties"],
      challenges: "Implementing complex, multi-parameter search filters while keeping the UI clean and responsive.",
      result: "A user-friendly platform that simplified property hunting and increased lead generation for agents."
    }
  },
  {
    id: 10,
    title: "Heritage Kitchen",
    description: "A premium restaurant website showcasing a fine dining experience with an elegant UI and responsive layout.",
    imgPath: heritageKitchenImg,
    ghLink: "https://github.com/realtee01/heritage-kitchen",
    demoLink: "https://heriatage-kitchen.vercel.app/",
    category: "Landing Page",
    details: {
      problem: "A fine dining establishment lacked an online presence that accurately reflected its heritage and upscale ambiance.",
      solution: "An elegant website with a responsive layout designed to showcase a visually rich menu and fine dining experience.",
      role: "Full-stack Developer",
      toolsUsed: ["Next.js", "Tailwind CSS"],
      whyTools: "Next.js provided excellent SEO for local discovery, and Tailwind allowed for the rapid development of a custom, luxurious design system.",
      features: ["Digital menu display", "Heritage storytelling section", "Location and hours", "Reservation integration"],
      challenges: "Creating a design language that felt both traditional and modern.",
      result: "A visually striking digital storefront that improved local visibility and brand prestige."
    }
  },
  {
    id: 5,
    title: "Trendy Transit",
    description: "A modern e-commerce and logistics platform offering a seamless shopping experience, featuring a dynamic product catalog, intuitive cart management, and a streamlined checkout process.",
    imgPath: trendyTransitImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://trendy-transit.vercel.app/",
    category: "E-commerce",
    details: {
      problem: "The logistics of managing an e-commerce catalog and providing a smooth checkout process were disjointed and slow.",
      solution: "A modern e-commerce platform with a dynamic catalog, intuitive cart, and streamlined checkout.",
      role: "Full-Stack Developer",
      toolsUsed: ["Next.js", "Tailwind CSS", "Supabase"],
      whyTools: "Next.js for storefront performance, Supabase for managing the product catalog, user carts, and order history securely.",
      features: ["Dynamic product filtering", "Shopping cart management", "Secure checkout flow", "Order tracking"],
      challenges: "Synchronizing cart state across the application and handling secure backend transactions with Supabase.",
      result: "A highly performant shopping experience that reduced cart abandonment and simplified product management."
    }
  },
  {
    id: 3,
    title: "Nexchat3",
    description: "A cutting-edge Web3 chatting platform and animation website. It combines seamless real-time communication with immersive animations and decentralized features for a next-gen digital experience.",
    imgPath: nexchat3Img,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://nexus3-bay.vercel.app/",
    category: "Web3",
    details: {
      problem: "Traditional chatting apps lack integrations with Web3 identities and often have stagnant, non-immersive interfaces.",
      solution: "A cutting-edge Web3 chat platform combining real-time communication with rich animations and decentralized identity.",
      role: "Full-stack Engineer / Web3 Integrator",
      toolsUsed: ["React", "Firebase", "Ethers.js", "Framer Motion"],
      whyTools: "Firebase for real-time messaging infrastructure, Ethers.js for wallet connection, and Framer Motion for immersive UI animations.",
      features: ["Wallet authentication", "Real-time messaging", "Decentralized profiles", "Interactive animated UI"],
      challenges: "Integrating wallet authentication seamlessly with traditional real-time messaging flows without confusing the user.",
      result: "An innovative communication platform tailored for the Web3 community with a visually stunning interface."
    }
  },
  {
    id: 4,
    title: "Forzchain",
    description: "A decentralized supply chain management system leveraging blockchain for transparency. Built with React, Tailwind, and Solidity.",
    imgPath: forzchainImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://forzchain-v-2.vercel.app",
    category: "Web3",
    details: {
      problem: "Supply chains suffer from a lack of transparency and trust between parties.",
      solution: "A decentralized supply chain management system utilizing blockchain to ensure immutable tracking and transparency.",
      role: "Blockchain & Full-stack Developer",
      toolsUsed: ["Next.js", "Solidity", "Tailwind CSS", "Web3.js"],
      whyTools: "Solidity for writing secure smart contracts on the blockchain, Next.js to build a user-friendly dashboard to interact with the chain.",
      features: ["Product tracking", "Smart contract interaction", "Dashboard analytics", "Role-based access"],
      challenges: "Translating complex blockchain transactions into clear, understandable UI feedback for non-technical users.",
      result: "A transparent, tamper-proof tracking system that increases trust among supply chain stakeholders."
    }
  },
  {
    id: 2,
    title: "Pixel Clean AI",
    description: "An AI-powered application offering intelligent image enhancement and background removal features with a modern and intuitive user interface.",
    imgPath: pixelCleanImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://pixel-clean-ai-pi.vercel.app/",
    category: "Web App",
    details: {
      problem: "High-quality image enhancement and background removal tools are often expensive and require complex software.",
      solution: "An accessible AI-powered web app offering intelligent image processing with a modern, simple UI.",
      role: "Full-Stack Developer",
      toolsUsed: ["Next.js", "Tailwind CSS", "Supabase", "Python APIs"],
      whyTools: "Next.js for a robust full-stack foundation, Supabase to manage user credits and processed image storage.",
      features: ["AI background removal", "Image upscaling", "User dashboard", "Credit system"],
      challenges: "Handling large file uploads efficiently and providing real-time feedback while the AI models processed images in the background.",
      result: "A reliable, easy-to-use tool that democratizes professional image enhancement for everyday users."
    }
  },
  {
    id: 12,
    title: "CGPA Calculator",
    description: "A practical tool for university students to track and calculate grades. Built with JavaScript, CSS, and HTML.",
    imgPath: calcImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://cgpa-calculator-tobiloba.vercel.app",
    category: "Web App",
    details: {
      problem: "Students struggled with accurately calculating and tracking their cumulative grades across semesters using their university's specific system.",
      solution: "A dedicated, localized tool designed specifically for the grading system to help students easily track their academic performance.",
      role: "Full-stack Developer",
      toolsUsed: ["React", "Vite", "Tailwind CSS", "LocalStorage"],
      whyTools: "React for dynamic state management, Tailwind for quick styling, with LocalStorage used to save student data without needing an account.",
      features: ["Semester grade input", "Instant CGPA calculation", "Data persistence", "Mobile-optimized layout"],
      challenges: "Ensuring the calculation logic perfectly matched the complex university grading rules, including edge cases for extra credits.",
      result: "A highly useful utility application adopted by numerous students to effortlessly monitor their academic progress."
    }
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<{title: string, details: ProjectDetailsData} | null>(null);
  const { t } = useLanguage();

  const categories = ["All", "Web App", "Landing Page", "Web3", "E-commerce"];

  const filteredProjects = projectsData.filter(project => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, y: 30, transition: { duration: 0.3 } }
  };

  return (
    <div className="relative pt-32 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6 tracking-wide">
            {t('projects.title1')} <strong className="text-gradient">{t('projects.title2')}</strong>
          </h1>
          <p className="text-gray-300 text-lg mb-6 font-light tracking-wide max-w-2xl mx-auto">
            {t('projects.desc')}
          </p>
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[13px] text-gray-400 font-medium">
              <Lock className="w-3.5 h-3.5 text-[#00e5ff]" />
              <span>Some projects are hidden under NDA</span>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-8 max-w-4xl mx-auto">
            <Marquee pauseOnHover={true} className="py-4">
              <div className="flex items-center gap-3 mx-8 text-2xl font-medium text-white/80 hover:text-[#00e5ff] transition-colors">
                <span className="text-[#00e5ff] flex items-center"><FaReact /></span> <span>React</span>
              </div>
              <div className="flex items-center gap-3 mx-8 text-2xl font-medium text-white/80 hover:text-white transition-colors">
                <span className="text-white flex items-center"><SiNextdotjs /></span> <span>Next.js</span>
              </div>
              <div className="flex items-center gap-3 mx-8 text-2xl font-medium text-white/80 hover:text-[#38bdf8] transition-colors">
                <span className="text-[#38bdf8] flex items-center"><SiTailwindcss /></span> <span>Tailwind</span>
              </div>
              <div className="flex items-center gap-3 mx-8 text-2xl font-medium text-white/80 hover:text-[#3178c6] transition-colors">
                <span className="text-[#3178c6] flex items-center"><SiTypescript /></span> <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-3 mx-8 text-2xl font-medium text-white/80 hover:text-[#f7df1e] transition-colors">
                <span className="text-[#f7df1e] flex items-center"><SiJavascript /></span> <span>JavaScript</span>
              </div>
              <div className="flex items-center gap-3 mx-8 text-2xl font-medium text-white/80 hover:text-[#339939] transition-colors">
                <span className="text-[#339939] flex items-center"><SiNodedotjs /></span> <span>Node.js</span>
              </div>
              <div className="flex items-center gap-3 mx-8 text-2xl font-medium text-white/80 hover:text-[#3fcf8e] transition-colors">
                <span className="text-[#3fcf8e] flex items-center"><SiSupabase /></span> <span>Supabase</span>
              </div>
              <div className="flex items-center gap-3 mx-8 text-2xl font-medium text-white/80 hover:text-[#ffca28] transition-colors">
                <span className="text-[#ffca28] flex items-center"><SiFirebase /></span> <span>Firebase</span>
              </div>
              <div className="flex items-center gap-3 mx-8 text-2xl font-medium text-white/80 hover:text-[#e34f26] transition-colors">
                <span className="text-[#e34f26] flex items-center"><FaHtml5 /></span> <span>HTML5</span>
              </div>
              <div className="flex items-center gap-3 mx-8 text-2xl font-medium text-white/80 hover:text-[#1572b6] transition-colors">
                <span className="text-[#1572b6] flex items-center"><FaCss3Alt /></span> <span>CSS3</span>
              </div>
            </Marquee>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-12 mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-[#00e5ff] text-[#0f0c29] shadow-[0_0_15px_rgba(0,229,255,0.4)]"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                key={project.id} 
                variants={itemVariants} 
                initial="hidden"
                animate="show"
                exit="exit"
                whileHover={{ y: -10, transition: { duration: 0.3 } }} 
                className="h-full"
              >
                <ProjectCard
                  imgPath={project.imgPath}
                  customCover={project.customCover}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                  inProgress={project.inProgress}
                  featured={(project as any).featured}
                  hasDetails={!!project.details}
                  onViewDetails={() => {
                    if (project.details) {
                      setSelectedProject({ title: project.title, details: project.details });
                    }
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal 
        isOpen={selectedProject !== null} 
        onClose={() => setSelectedProject(null)} 
        title={selectedProject?.title || ""} 
        details={selectedProject?.details || null} 
      />
    </div>
  );
}
