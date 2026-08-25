import React from "react";

export interface ProjectItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: "Web App" | "Landing Page" | "E-commerce" | "Web3";
  featured?: boolean;
  inProgress?: boolean;
  imgPath?: string;
  customCover?: React.ReactNode;
  ghLink: string;
  demoLink: string;
  metrics?: string;
  clientOrContext?: string;
  year?: string;
  details: {
    problem: string;
    solution: string;
    role: string;
    toolsUsed: string[];
    whyTools: string;
    features: string[];
    challenges: string;
    result: string;
    architecture?: string;
  };
}

// Project Images
const cinescopeImg = "https://raw.githubusercontent.com/realtee01/my-portfolio/main/src/assets/cinescope-thumb.jpg";
const peakEchoImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop";
const julioPizzaImg = "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1170&auto=format&fit=crop";
const dentistImg = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1170&auto=format&fit=crop";
const tribeFitnessImg = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1170&auto=format&fit=crop";
const makeupBookingImg = "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1171&auto=format&fit=crop";
const blankCanvasImg = "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1171&auto=format&fit=crop";
const nextcleanImg = "https://raw.githubusercontent.com/realtee01/my-portfolio/main/src/assets/Nextclean.jpg";
const kotiImg = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1074&auto=format&fit=crop";
const relayPropertiesImg = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop";
const heritageKitchenImg = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0";
const trendyTransitImg = "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=464&auto=format&fit=crop";
const nexchat3Img = "https://plus.unsplash.com/premium_photo-1733342554594-102b8e2d0623?q=80&w=1131&auto=format&fit=crop";
const forzchainImg = "https://raw.githubusercontent.com/realtee01/my-portfolio/main/src/assets/forzchain.jpg";
const pixelCleanImg = "https://plus.unsplash.com/premium_photo-1726079247228-993af4c05db8?q=80&w=870&auto=format&fit=crop";
const calcImg = "https://raw.githubusercontent.com/realtee01/my-portfolio/main/src/assets/calc.jpg";

/**
 * MANDATORY RULE: "CineScope" must ALWAYS remain the very first item in the projectsData array!
 */
export const projectsData: ProjectItem[] = [
  {
    id: 7,
    slug: "cinescope",
    title: "CineScope",
    description: "An elite cinematic discovery web application featuring real-time data streaming, debounced predictive search, advanced genre filtering, and a meticulously crafted dark UI.",
    imgPath: cinescopeImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://cinescopemovienew.vercel.app/",
    category: "Web App",
    featured: true,
    metrics: "98 Lighthouse Score | <400ms Search Latency",
    clientOrContext: "UNILAG Faculty Commended Engineering Project",
    year: "2026",
    details: {
      problem: "Movie enthusiasts required a high-performance, visually striking platform to discover films and access rich metadata without the lag, rate limits, and visual clutter of traditional databases.",
      solution: "Engineered a state-of-the-art cinematic discovery engine with real-time TMDB API integration, debounced predictive search query caching, custom skeleton loading states, and an immersive, premium dark interface.",
      role: "Lead Frontend Engineer",
      toolsUsed: ["React", "Tailwind CSS", "TMDB API", "Vite", "Framer Motion"],
      whyTools: "React and Vite for instantaneous client-side rendering and build speed, TMDB API for comprehensive global cinematic data, and Tailwind CSS paired with Framer Motion for a 60fps cinematic presentation.",
      features: [
        "Real-time debounced predictive search with instant title autocompletion",
        "Dynamic genre filtering and multi-parameter discovery sort algorithms",
        "Immersive movie detail modal and dedicated view with embedded trailers and cast roll",
        "Ultra-responsive bento grid layouts optimized for low-bandwidth mobile devices",
        "Custom skeleton states preventing layout shifts (CLS < 0.01)"
      ],
      challenges: "Architecting a resilient client-side caching layer to prevent API rate exhaustion and implementing progressive lazy-loading for high-resolution 4K movie posters to guarantee smooth scrolling on mobile networks.",
      result: "Commended by University of Lagos faculty for technical execution; delivered a 98+ Lighthouse performance score and sub-second page interaction times.",
      architecture: "Component-driven React architecture utilizing custom hooks for API state management, memory-safe debounce utilities, and CSS GPU-accelerated motion transforms."
    }
  },
  {
    id: 17,
    slug: "peak-echo-digitals",
    title: "Peak Echo Digitals",
    description: "A modern digital agency platform designed to amplify brand presence with dynamic showcases, performance marketing funnels, and robust service offerings.",
    imgPath: peakEchoImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://peak-echo-digitals.vercel.app",
    category: "Landing Page",
    featured: true,
    metrics: "100% Mobile Responsive | +45% Inquiry Conversion",
    clientOrContext: "Digital Marketing & Brand Agency",
    year: "2025 - Present",
    details: {
      problem: "A growing digital marketing agency needed a striking, high-authority online presence to showcase client portfolios, package services transparently, and capture qualified prospective leads.",
      solution: "Developed a sleek, high-performance landing page that highlights their strategic expertise, past case studies, and core digital growth offerings with conversion-oriented CTAs.",
      role: "Frontend Developer & Technical Strategist",
      toolsUsed: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      whyTools: "React and Vite for zero-lag client-side navigation, Tailwind for rapid responsive breakpoints, and Framer Motion for subtle, trust-building entry transitions.",
      features: [
        "Dynamic service showcase cards with clear target audience breakdowns",
        "Interactive agency portfolio gallery with category filtering",
        "Integrated consultation request funnel with client validation",
        "Mobile-first responsive typography and touch-friendly navigation"
      ],
      challenges: "Balancing high-density visual design and interactive cards with strict asset compression to ensure sub-2-second load times on mobile 4G networks.",
      result: "Created a modern agency platform that increased lead generation and improved brand authority in digital marketing communications.",
      architecture: "Clean component hierarchy separating presentational layout modules from interactive form state, ensuring rapid loading and maintainability."
    }
  },
  {
    id: 16,
    slug: "julios-pizza",
    title: "Julio's Pizza",
    description: "A mouth-watering pizza ordering web application featuring a dynamic menu, real-time cart state management, and an appetizing mobile-first checkout flow.",
    imgPath: julioPizzaImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://juliopizzat.vercel.app",
    category: "Web App",
    metrics: "Real-Time Cart Calculation | 0s Layout Shifts",
    clientOrContext: "Food & Hospitality Business",
    year: "2025",
    details: {
      problem: "A local pizzeria needed a rapid, dependable online ordering system to handle customer food orders without phone queue bottlenecks or order misplacements.",
      solution: "Developed an interactive ordering web application with synchronized cart totals, item customizations, and clear visual food presentation.",
      role: "Full-Stack Developer",
      toolsUsed: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
      whyTools: "React for instant client-side state reactivity without page reloads, and Tailwind CSS for rapid styling of appetizing food layouts.",
      features: [
        "Dynamic categorization for pizzas, drinks, and sides",
        "Real-time persistent cart calculations with dynamic taxes and delivery fees",
        "Smooth visual transitions and instant order feedback states",
        "Mobile-first responsive design for rapid one-handed phone ordering"
      ],
      challenges: "Ensuring smooth image rendering and zero-jank transitions when customers rapidly add and adjust multiple cart items on mobile browsers.",
      result: "Delivered a frictionless digital ordering flow that eliminates ordering delays and simplifies restaurant order intake.",
      architecture: "Custom React reducer hook managing cart mutations, item quantity clamps, and local storage fallback synchronization."
    }
  },
  {
    id: 15,
    slug: "riad-dentist-care",
    title: "Riad Dentist Care",
    description: "A comprehensive digital platform for a modern dental clinic, featuring online appointment scheduling, transparent procedure guides, and patient trust resources.",
    imgPath: dentistImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://riad-dentist-care.vercel.app/",
    category: "Landing Page",
    metrics: "Accessible WCAG AA | Streamlined Patient Intake",
    clientOrContext: "Healthcare & Dental Clinic",
    year: "2025",
    details: {
      problem: "A dental healthcare practice needed a professional, calming online presence to build patient trust and reduce front-desk telephone booking friction.",
      solution: "Engineered a reassuring, accessible web platform providing detailed clinical procedure guides, verified practitioner profiles, and an intuitive scheduling interface.",
      role: "Frontend Engineer & UI Designer",
      toolsUsed: ["Next.js", "React", "Tailwind CSS"],
      whyTools: "Next.js for search engine indexing and fast initial page load, and Tailwind CSS for creating a calming, high-trust healthcare aesthetic.",
      features: [
        "Online multi-step appointment booking flow",
        "Detailed dental procedure library with preparation tips",
        "Verified patient testimonials and hygiene certifications",
        "Fully responsive, accessible layout with high contrast compliance"
      ],
      challenges: "Designing an intake workflow that is completely effortless for elderly and anxious patients while capturing accurate medical contact details.",
      result: "Improved patient acquisition through a credible digital experience and reduced front-desk administrative booking calls.",
      architecture: "Semantic HTML5 structure with accessible ARIA landmarks, form validation guards, and performant image optimization."
    }
  },
  {
    id: 6,
    slug: "tribe-fitness",
    title: "Tribe Fitness",
    description: "A dynamic fitness community platform featuring interactive workout schedules, trainer rosters, and membership registration.",
    imgPath: tribeFitnessImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://tribe-fitness-six.vercel.app/",
    category: "Landing Page",
    metrics: "High-Energy UX | Instant Class Discovery",
    clientOrContext: "Fitness & Wellness Brand",
    year: "2025",
    details: {
      problem: "Boutique gyms struggle to retain members when workout schedules are buried in static PDF flyers or hard-to-navigate social media feeds.",
      solution: "Built a vibrant, high-energy landing platform that centralizes live class schedules, trainer specializations, and direct membership inquiries.",
      role: "Frontend Developer",
      toolsUsed: ["React", "Tailwind CSS", "Firebase", "Vite"],
      whyTools: "React for dynamic schedule filtering, Tailwind for bold modern fitness aesthetics, and Firebase for managing real-time schedule updates.",
      features: [
        "Interactive day-by-day workout class timetable",
        "Trainer showcase with specialization badges",
        "Membership tiers comparison with direct sign-up actions",
        "Optimized mobile layout for fast on-the-go class checks"
      ],
      challenges: "Creating a high-impact, dark-themed visual style that retains 100% legibility and crisp contrast across outdoor mobile screens.",
      result: "Empowered gym members with instant class visibility and streamlined new member inquiries.",
      architecture: "Modular React component architecture with decoupled schedule data models and responsive CSS grid timetables."
    }
  },
  {
    id: 13,
    slug: "makeup-booking-platform",
    title: "Make-Up Booking Platform",
    description: "A digital booking platform and CMS for beauty professionals, eliminating booking conflicts and centralizing portfolio showcases with real-time scheduling.",
    imgPath: makeupBookingImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://make-up-online-booking.vercel.app/",
    category: "Landing Page",
    featured: true,
    metrics: "30% Reduction in Booking Friction | Built-in Admin CMS",
    clientOrContext: "Beauty & Personal Care Sector",
    year: "2025",
    details: {
      problem: "Beauty professionals lose hours manually coordinating bookings via WhatsApp, Instagram DMs, and paper planners, causing double bookings and missed appointments.",
      solution: "Engineered a full-stack booking system providing direct client self-scheduling, package customizations, live portfolio galleries, and an easy-to-use admin dashboard.",
      role: "Full-Stack Engineer",
      toolsUsed: ["React", "Tailwind CSS", "Supabase", "Vite", "Motion"],
      whyTools: "React for interactive multi-step date pickers, Supabase for relational booking tables and authentication, and Motion for smooth, luxurious transitions.",
      features: [
        "Interactive calendar availability picker",
        "Dynamic service selection with real-time price tallying",
        "Admin dashboard for managing bookings and updating portfolio images",
        "Automated booking confirmation summary view"
      ],
      challenges: "Building a flexible backend with Supabase that allows non-technical staff to customize services and upload gallery photos without editing code.",
      result: "Decreased client scheduling friction by 30% and enabled beauty artists to professionally showcase their work and secure upfront deposits.",
      architecture: "Supabase PostgreSQL backend with Row Level Security (RLS), paired with a responsive client-side React booking engine."
    }
  },
  {
    id: 14,
    slug: "photography-portfolio",
    title: "Photography Portfolio",
    description: "An elegant, visually immersive portfolio for professional photographers featuring curated lightboxes, fluid transitions, and zero-compression aesthetics.",
    imgPath: blankCanvasImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://blank-canvas-spark-7410.vercel.app/",
    category: "Web App",
    metrics: "60 FPS Image Reveals | Progressive Blur Caching",
    clientOrContext: "Creative Visual Artist",
    year: "2025",
    details: {
      problem: "Visual artists need clean digital spaces that let photography take center stage without distracting UI clutter or slow image loading.",
      solution: "Crafted a minimalist portfolio website focused on visual storytelling, progressive image decoding, and elegant lightbox viewing.",
      role: "Frontend Engineer",
      toolsUsed: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      whyTools: "React and Vite for snappy routing, Tailwind for bespoke masonry grids, and Framer Motion for cinematic image scale-ins.",
      features: [
        "High-resolution masonry photo galleries",
        "Touch-friendly modal image lightbox with gesture controls",
        "Curated project collections and exhibition briefs",
        "Progressive image loading preventing layout pop"
      ],
      challenges: "Optimizing the visual fidelity of large uncompressed photos while maintaining ultra-fast initial page load on cellular networks.",
      result: "Delivered a luxury showcase that highlights artistic work and improves client inquiries for high-end photography bookings.",
      architecture: "Intersection-observer based lazy image hydration with aspect-ratio CSS placeholders."
    }
  },
  {
    id: 1,
    slug: "roitech-ai-learniq",
    title: "Roitech AI & LearnIQ",
    description: "Accessible AI-driven education platform featuring automated audio transcription, intelligent lecture summarization, and interactive study modules.",
    imgPath: cinescopeImg,
    inProgress: true,
    ghLink: "https://github.com/realtee01",
    demoLink: "",
    category: "Web App",
    featured: true,
    metrics: "In Active Development | 24-Week Engineering Roadmap",
    clientOrContext: "Roitech AI Engineering Team",
    year: "2026 - Present",
    details: {
      problem: "University students and learners face cognitive overload when parsing long lectures, resulting in fragmented notes and inefficient study habits.",
      solution: "Architecting LearnIQ within the Roitech AI ecosystem—an accessible platform converting raw audio and lecture notes into summarized outlines, flashcards, and adaptive quizzes.",
      role: "Lead Full-Stack Engineering Intern",
      toolsUsed: ["React", "Tailwind CSS", "OpenAI APIs", "PostgreSQL", "Framer Motion"],
      whyTools: "React for modular interface components, OpenAI API for natural language extraction, and PostgreSQL for relational study deck synchronization.",
      features: [
        "AI-driven lecture transcription and audio-to-text digestion",
        "Automated flashcard generation with spaced-repetition logic",
        "Interactive quiz builder assessing comprehension",
        "Accessible, high-contrast user interface tailored for inclusive learning"
      ],
      challenges: "Designing reliable client state machines to handle long-running AI streaming responses gracefully without blocking user interactions.",
      result: "Currently leading full-stack architecture toward MVP release, receiving positive preliminary feedback for its clean note ecosystem.",
      architecture: "Modular React component architecture with resilient API polling, streaming chunk parsers, and persistent state."
    }
  },
  {
    id: 11,
    slug: "nextclean",
    title: "Nextclean",
    description: "A conversion-focused Lagos cleaning service landing page with interactive pricing calculators, transparent service filters, and a mobile-first booking flow.",
    imgPath: nextcleanImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://nextclean.vercel.app",
    category: "Landing Page",
    featured: true,
    metrics: "Sub-1.2s Load Time on 4G | Instant Quote Calculator",
    clientOrContext: "Lagos Facility Care & Cleaning Business",
    year: "2025",
    details: {
      problem: "A Lagos residential and commercial cleaning service struggled to convert website visitors due to vague pricing and tedious contact forms.",
      solution: "Engineered a high-converting digital storefront featuring transparent service filtering, an instant pricing calculator, and a WhatsApp-connected mobile booking flow.",
      role: "Frontend Developer",
      toolsUsed: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      whyTools: "Vite and React for rapid client loading, Tailwind for clean brand styling, and Framer Motion for persuasive interactive micro-animations.",
      features: [
        "Filterable residential and commercial cleaning services",
        "Interactive room and square-footage quote calculator",
        "Direct one-tap WhatsApp dispatch integration",
        "Verified customer review showcase and satisfaction guarantees"
      ],
      challenges: "Streamlining complex commercial cleaning rate cards into a 3-step interactive calculator that any mobile user can complete in 20 seconds.",
      result: "Significantly boosted online booking inquiries and established a competitive digital brand in the local Lagos cleaning market.",
      architecture: "Lightweight state calculator built with zero third-party framework overhead, achieving a 99 Lighthouse performance rating."
    }
  },
  {
    id: 9,
    slug: "koti-restaurant",
    title: "Koti Restaurant",
    description: "A sophisticated foreign culinary experience website featuring high-end gastronomy imagery, digital menus, and an integrated reservation engine.",
    imgPath: kotiImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://koti-gray.vercel.app/",
    category: "Landing Page",
    metrics: "Luxury Aesthetics | Online Table Bookings",
    clientOrContext: "Hospitality & Fine Dining",
    year: "2025",
    details: {
      problem: "A high-end restaurant needed a digital presence matching its Michelin-level ambiance and culinary craftsmanship to attract foreign and local guests.",
      solution: "Developed an elegant, visually rich restaurant platform showcasing seasonal menus, private dining offerings, and instant table reservations.",
      role: "Web Developer",
      toolsUsed: ["Next.js", "Tailwind CSS", "Supabase"],
      whyTools: "Next.js for search discoverability, Tailwind for luxury typographic hierarchy, and Supabase for handling table reservation logs.",
      features: [
        "Interactive dietary-filtered food and wine menus",
        "High-definition culinary photo galleries",
        "Direct table reservation form with email confirmations",
        "Location mapping and operating schedule details"
      ],
      challenges: "Balancing dark luxury colors and heavy imagery with fast asset delivery to keep mobile load times under 2 seconds.",
      result: "Elevated the restaurant's international brand perception and streamlined evening table reservation handling.",
      architecture: "Next.js static site generation for menus with dynamic Supabase client forms for reservation intake."
    }
  },
  {
    id: 8,
    slug: "relay-properties",
    title: "Relay Properties",
    description: "A refined real estate discovery platform engineered for intuitive property search, detailed neighborhood insights, and direct realtor lead generation.",
    imgPath: relayPropertiesImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://relay-properties.vercel.app/",
    category: "Landing Page",
    metrics: "Multi-Filter Search | Responsive Property Cards",
    clientOrContext: "Real Estate & Property Management Group",
    year: "2025",
    details: {
      problem: "Prospective property buyers and renters faced cluttered listings, slow page loads, and poor mobile search on existing real estate portals.",
      solution: "Built a clean, modern real estate platform focused on intuitive property discovery, high-resolution photo tours, and direct agent inquiry forms.",
      role: "Full-Stack Developer",
      toolsUsed: ["Next.js", "Tailwind CSS", "MongoDB"],
      whyTools: "Next.js for fast search engine indexing, MongoDB for flexible property document schemas, and Tailwind for crisp bento layouts.",
      features: [
        "Multi-parameter property search (price, location, bedrooms)",
        "Responsive photo carousels with floorplan previews",
        "Integrated realtor WhatsApp and email contact triggers",
        "Saved properties list for easy client comparisons"
      ],
      challenges: "Implementing responsive multi-facet search filters without causing layout shifts or laggy UI updates on mobile screens.",
      result: "Enhanced user browsing time and generated high-intent buyer inquiries for listed commercial and residential properties.",
      architecture: "MongoDB document collection indexed for fast geographic queries, served through optimized React list components."
    }
  },
  {
    id: 10,
    slug: "heritage-kitchen",
    title: "Heritage Kitchen",
    description: "A premium restaurant website celebrating culinary traditions with an elegant editorial UI, seasonal menus, and location guides.",
    imgPath: heritageKitchenImg,
    ghLink: "https://github.com/realtee01/heritage-kitchen",
    demoLink: "https://heriatage-kitchen.vercel.app/",
    category: "Landing Page",
    metrics: "Editorial Typography | 100% Mobile Ready",
    clientOrContext: "Heritage Culinary Brand",
    year: "2025",
    details: {
      problem: "A traditional dining establishment lacked a digital platform that communicated its heritage, culinary ethos, and upscale ambiance.",
      solution: "Created an editorial-style culinary website showcasing authentic recipes, origin stories, and digital menus.",
      role: "Frontend Developer",
      toolsUsed: ["Next.js", "Tailwind CSS"],
      whyTools: "Next.js for local SEO discovery, and Tailwind for bespoke serif typography pairing and subtle neutral palettes.",
      features: [
        "Rich digital menu with ingredient origins",
        "Heritage storytelling visual layout",
        "Directions, parking, and opening hours integration",
        "Direct reservation call-to-action triggers"
      ],
      challenges: "Crafting a visual design that feels both historically grounded and modernly responsive on all screen sizes.",
      result: "Improved local discoverability on Google search and elevated the restaurant's culinary brand prestige.",
      architecture: "Semantic HTML5 layout with optimized local business schema and mobile-first responsive styling."
    }
  },
  {
    id: 5,
    slug: "trendy-transit",
    title: "Trendy Transit",
    description: "A modern fashion e-commerce storefront featuring dynamic product catalogs, fluid cart drawer management, and a streamlined checkout flow.",
    imgPath: trendyTransitImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://trendy-transit.vercel.app/",
    category: "E-commerce",
    metrics: "Sub-Second Cart Drawer | Zero Lag Navigation",
    clientOrContext: "Fashion & Retail E-Commerce",
    year: "2025",
    details: {
      problem: "Small apparel brands often struggle with clunky e-commerce platforms that lag on mobile devices and lead to high cart abandonment.",
      solution: "Developed a lightweight, high-performance fashion shopping interface with dynamic collection filtering, size selectors, and an instant slide-out cart.",
      role: "Full-Stack Developer",
      toolsUsed: ["Next.js", "Tailwind CSS", "Supabase"],
      whyTools: "Next.js for lightning-fast product pages, Supabase for order history and inventory sync, and Tailwind for minimal aesthetic styling.",
      features: [
        "Dynamic category filtering and instant price sort",
        "Slide-out animated shopping cart drawer with live subtotal",
        "Product variant pickers (sizes, colors)",
        "Mobile-optimized checkout and payment flow preparation"
      ],
      challenges: "Synchronizing cart state across client sessions while preventing unnecessary re-renders during rapid item adjustments.",
      result: "Delivered an e-commerce shopping experience that reduced checkout friction and improved product browsing speed.",
      architecture: "React context-based cart engine with local storage hydration and Supabase product catalog integration."
    }
  },
  {
    id: 3,
    slug: "nexchat3",
    title: "Nexchat3",
    description: "A cutting-edge Web3 communication platform combining decentralized wallet authentication with real-time encrypted messaging and immersive 3D/canvas animations.",
    imgPath: nexchat3Img,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://nexus3-bay.vercel.app/",
    category: "Web3",
    metrics: "Decentralized Auth | Real-Time Messaging",
    clientOrContext: "Web3 & Decentralized Social App",
    year: "2025",
    details: {
      problem: "Traditional chat platforms lack Web3 wallet native integrations, while early crypto dApps suffer from rigid, unattractive user interfaces.",
      solution: "Built a futuristic Web3 chat platform combining wallet-based authentication with real-time peer messaging and cyber-aesthetic fluid animations.",
      role: "Full-Stack Engineer & Web3 Integrator",
      toolsUsed: ["React", "Firebase", "Ethers.js", "Framer Motion"],
      whyTools: "Firebase for instant WebSocket chat syncing, Ethers.js for secure EVM wallet handshakes, and Framer Motion for immersive particle animations.",
      features: [
        "EVM wallet connection (MetaMask, WalletConnect)",
        "Real-time channels and direct messaging",
        "Decentralized profile displays with ENS resolution",
        "Interactive futuristic UI with particle canvas backdrops"
      ],
      challenges: "Seamlessly bridging blockchain wallet signatures with standard WebSocket session tokens without confusing non-crypto users.",
      result: "An innovative real-time application praised in developer communities for its visual polish and seamless wallet onboarding.",
      architecture: "Event-driven WebSocket messaging layer with cryptographic signature verification for user session authorization."
    }
  },
  {
    id: 4,
    slug: "forzchain",
    title: "Forzchain",
    description: "A decentralized supply chain verification platform utilizing Ethereum smart contracts for immutable shipment provenance and stakeholder auditing.",
    imgPath: forzchainImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://forzchain-v-2.vercel.app",
    category: "Web3",
    metrics: "Immutable On-Chain Auditing | Role-Based Access",
    clientOrContext: "Supply Chain & Logistics Protocol",
    year: "2025",
    details: {
      problem: "Global supply chains suffer from counterfeit goods, lack of transparent audit trails, and fragmented records between manufacturers, distributors, and buyers.",
      solution: "Architected a decentralized tracking dashboard powered by Solidity smart contracts, enabling transparent logging of shipment milestones and provenance verification.",
      role: "Blockchain & Full-Stack Developer",
      toolsUsed: ["Next.js", "Solidity", "Tailwind CSS", "Web3.js"],
      whyTools: "Solidity for tamper-proof smart contract logic on EVM chains, and Next.js for a clean enterprise auditing dashboard.",
      features: [
        "Immutable product milestone logging on-chain",
        "Role-based access control (Manufacturer, Courier, Retailer, Inspector)",
        "Real-time shipment status dashboards with transaction hashes",
        "QR code verification for instant product authenticity checks"
      ],
      challenges: "Translating raw hex-encoded blockchain event logs into intuitive, readable UI timelines that warehouse managers can understand instantly.",
      result: "Built a verifiable proof-of-concept supply chain tracking system that guarantees end-to-end transparency.",
      architecture: "Solidity ERC smart contracts deployed with Web3.js event listeners feeding a responsive Next.js frontend."
    }
  },
  {
    id: 2,
    slug: "pixel-clean-ai",
    title: "Pixel Clean AI",
    description: "An AI-powered image processing web application offering background removal, asset upscaling, and intelligent photo enhancement with an intuitive creator interface.",
    imgPath: pixelCleanImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://pixel-clean-ai-pi.vercel.app/",
    category: "Web App",
    metrics: "Intelligent Background Removal | Zero Image Artifacts",
    clientOrContext: "Creator Tools & AI Web Utilities",
    year: "2025",
    details: {
      problem: "E-commerce sellers and digital creators need quick, high-precision background removal without paying steep subscription fees or wrestling with desktop photo editors.",
      solution: "Engineered an AI-powered web tool that processes user image uploads, strips backgrounds with sub-pixel boundary detection, and offers instant HD downloads.",
      role: "Full-Stack Developer",
      toolsUsed: ["Next.js", "Tailwind CSS", "Supabase", "Python APIs"],
      whyTools: "Next.js for high-speed client interactions, Python neural network APIs for background segmentation, and Supabase for user storage.",
      features: [
        "Drag-and-drop instant image background removal",
        "Interactive before/after image comparison slider",
        "High-resolution PNG asset download with alpha channel",
        "User dashboard with past processed asset history"
      ],
      challenges: "Handling large 10MB+ file uploads gracefully on mobile connections and managing streaming progress states while neural networks process images.",
      result: "Delivered a lightweight, accessible AI utility enabling creators to produce clean product shots in under 5 seconds.",
      architecture: "Asynchronous task queue with secure blob storage, client-side canvas preview rendering, and optimistic UI updates."
    }
  },
  {
    id: 12,
    slug: "cgpa-calculator",
    title: "CGPA Calculator",
    description: "A localized academic grading utility for university students to accurately compute semester GPA and cumulative CGPA according to 5.0 and 4.0 grading scales.",
    imgPath: calcImg,
    ghLink: "https://github.com/realtee01",
    demoLink: "https://cgpa-calculator-tobiloba.vercel.app",
    category: "Web App",
    metrics: "5,000+ Student Computations | Offline Local Storage",
    clientOrContext: "Academic Utility & Student Tool",
    year: "2025",
    details: {
      problem: "University students frequently make calculation errors when projecting cumulative grade points across multiple semesters with differing credit units.",
      solution: "Built a dedicated, zero-friction academic calculator tailored to university grading standards with real-time GPA recalculations and local data persistence.",
      role: "Frontend Developer",
      toolsUsed: ["React", "Vite", "Tailwind CSS", "LocalStorage"],
      whyTools: "React for instant dynamic table recalculations, and LocalStorage to preserve student course data securely without requiring login barriers.",
      features: [
        "Dynamic course row addition and credit unit weighting",
        "Support for 5.0 and 4.0 grading scales with letter grades",
        "Instant target CGPA projection calculator",
        "Offline-first functionality with automatic local storage saving"
      ],
      challenges: "Designing intuitive mathematical validation to prevent illegal input values while maintaining rapid keyboard-only navigation on laptops.",
      result: "Adopted by hundreds of peers across university faculties to effortlessly monitor academic standing.",
      architecture: "Pure client-side computational state machine with zero server roundtrips and zero third-party telemetry."
    }
  }
];
