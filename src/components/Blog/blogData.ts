export interface BlogPostItem {
  id: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string[];
}

export const blogData: BlogPostItem[] = [
  {
    id: "optimizing-react-performance-nigerian-networks",
    title: "Optimizing React Web Applications for Variable Bandwidth Networks in Nigeria: Practical Strategies",
    date: "February 20, 2026",
    readTime: "6 min read",
    tags: ["Performance", "React", "Web Development Nigeria", "Core Web Vitals"],
    excerpt: "Discover practical frontend techniques to ensure your React applications load in under 1.5 seconds on 3G/4G cellular networks across Lagos and beyond.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    author: {
      name: "Tobiloba Akala",
      role: "Web Developer & Frontend Specialist",
      avatar: "https://res.cloudinary.com/dw8jtwbka/image/upload/v1780309581/refined_profile_picture_keiybp.png"
    },
    content: [
      "When building web applications in Nigeria, developer laptops connected to high-speed fiber rarely represent the real conditions of end users. The average visitor in Lagos, Abuja, or Ibadan accesses the web via mobile devices on fluctuating 3G or 4G connections. If an e-commerce platform or SaaS app takes 6 seconds to become interactive, bounce rates skyrocket above 60%.",
      "The first pillar of optimizing for variable networks is ruthless bundle splitting. By taking advantage of React's dynamic imports (React.lazy and Suspense) paired with modern bundlers like Vite, we can isolate route-specific vendor code. Instead of serving a massive 400KB monolithic bundle upfront, our initial JavaScript payload stays below 65KB, allowing the browser to parse and execute code in milliseconds.",
      "The second pillar is intelligent asset budgeting and progressive decoding. High-resolution uncompressed hero images can easily consume 4MB of user cellular data. By converting assets to modern AVIF/WebP formats, applying srcset responsive sizing, and utilizing CSS aspect-ratio skeletons, we prevent Cumulative Layout Shift (CLS) while minimizing network requests.",
      "Finally, client-side caching strategies and optimistic UI updates make user interactions feel instantaneous. When a user adds an item to a cart or triggers a search query, debounce timers and LocalStorage fallbacks ensure that the UI responds instantly at 60fps without waiting for high-latency network roundtrips.",
      "Building high-performance applications isn't just about scoring 95+ on Google Lighthouse—it's about creating accessible, respectful user experiences that convert visitors into loyal customers regardless of their connection speed."
    ]
  },
  {
    id: "react-vs-wordpress-nigeria",
    title: "React vs WordPress for Growing Businesses in Nigeria: Choosing the Right Architecture",
    date: "January 14, 2026",
    readTime: "7 min read",
    tags: ["Architecture", "WordPress", "React", "Business Strategy"],
    excerpt: "An objective comparison of custom React web applications vs WordPress templates for Nigerian startups, SMEs, and digital businesses looking to scale.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    author: {
      name: "Tobiloba Akala",
      role: "Web Developer & Frontend Specialist",
      avatar: "https://res.cloudinary.com/dw8jtwbka/image/upload/v1780309581/refined_profile_picture_keiybp.png"
    },
    content: [
      "One of the most frequent questions business owners and founders in Nigeria ask is: 'Should we build our business website on WordPress or invest in a custom React application?' The truth is that both tools have their place, but selecting the wrong one can lead to expensive rebuilds and missed revenue.",
      "WordPress remains a popular choice for simple blogs, news portals, and companies with non-technical teams who need to publish daily articles with zero developer intervention. However, as Nigerian businesses add plugins for bookings, live chat, multi-currency payment gateways (like Paystack/Flutterwave), and security guards, WordPress often degrades into a slow, fragile codebase vulnerable to plugin conflicts and database bottlenecks.",
      "Custom React development (powered by Vite, Next.js, or headless CMS backends) shines when your business requires custom workflows, interactive calculators, bespoke booking flows, or sub-second mobile page loads. A custom frontend gives you complete control over brand aesthetics, security, Core Web Vitals, and API integrations without recurring plugin bloat.",
      "For early-stage startups and established brands looking to build authoritative digital assets, a hybrid approach is often optimal: a bespoke, razor-fast React frontend paired with a headless backend or Supabase database. This delivers unmatched speed and security while retaining intuitive content management."
    ]
  },
  {
    id: "figma-to-production-code",
    title: "From Figma to Production: My High-Performance Frontend Workflow",
    date: "December 05, 2025",
    readTime: "5 min read",
    tags: ["UI/UX", "Tailwind CSS", "Frontend Engineering", "Workflow"],
    excerpt: "Step-by-step breakdown of transforming complex UI/UX design mockups into pixel-perfect, accessible, and responsive code.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1000&auto=format&fit=crop",
    author: {
      name: "Tobiloba Akala",
      role: "Web Developer & Frontend Specialist",
      avatar: "https://res.cloudinary.com/dw8jtwbka/image/upload/v1780309581/refined_profile_picture_keiybp.png"
    },
    content: [
      "There is often a significant disconnect between a static Figma artboard and a living, responsive web application. A design file shows the ideal desktop screen at 1440px, but production code must gracefully scale across 360px budget phones, 768px tablets, and 4K ultra-wide monitors.",
      "My frontend engineering process begins with architectural tokenization. Before writing component markup, I extract design tokens: typography scales (fluid clamp formulas), spacing increments (mathematical 4px/8px rhythm), color palettes, and surface elevations into Tailwind utility presets.",
      "Next, I structure component trees around semantic HTML landmarks (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`). This guarantees out-of-the-box keyboard accessibility (WCAG AA standards) and establishes clean document structures that search engine crawlers and screen readers navigate effortlessly.",
      "Finally, micro-interactions and transition easing are added. Using Framer Motion or lightweight CSS GPU transforms, buttons gain responsive active states and scroll-driven entry reveals without causing layout thrashing or battery drain on mobile devices."
    ]
  },
  {
    id: "conversion-centered-frontend",
    title: "Why Most Business Websites Fail to Convert: A Frontend Engineer's Perspective",
    date: "November 18, 2025",
    readTime: "6 min read",
    tags: ["Conversion Rate", "UX Design", "Business Growth"],
    excerpt: "Analyzing the most common UX pitfalls that kill website conversions and how intentional engineering turns passive visitors into paying clients.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    author: {
      name: "Tobiloba Akala",
      role: "Web Developer & Frontend Specialist",
      avatar: "https://res.cloudinary.com/dw8jtwbka/image/upload/v1780309581/refined_profile_picture_keiybp.png"
    },
    content: [
      "A stunning visual design means nothing if prospective clients cannot figure out what you do within five seconds of landing on your page. Many business websites suffer from high bounce rates not because their services are inadequate, but because their frontend architecture introduces cognitive friction.",
      "Common culprits include: ambiguous hero headlines packed with vague marketing buzzwords, sluggish load times exceeding three seconds, overwhelming form fields demanding unnecessary personal information, and buried call-to-action buttons that disappear on mobile screens.",
      "Conversion-centered frontend engineering solves this by implementing visual hierarchy math. The primary value proposition and immediate action trigger (e.g. 'Get a Quote', 'Book an Appointment', 'Explore Case Studies') must always sit within the initial viewport with high contrast and zero visual ambiguity.",
      "Furthermore, incorporating real client proof, verified project metrics, and frictionless WhatsApp or calendar booking flows directly inside service modules creates psychological safety for prospective clients to take action immediately."
    ]
  },
  {
    id: "building-reliable-booking-systems",
    title: "Architecting Scalable Appointment & Booking Systems: Lessons from Real-World Deployments",
    date: "October 22, 2025",
    readTime: "6 min read",
    tags: ["Full-Stack", "Supabase", "React", "Case Study"],
    excerpt: "Key architectural takeaways from developing customized online appointment platforms for clinics, salons, and professional service providers.",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1000&auto=format&fit=crop",
    author: {
      name: "Tobiloba Akala",
      role: "Web Developer & Frontend Specialist",
      avatar: "https://res.cloudinary.com/dw8jtwbka/image/upload/v1780309581/refined_profile_picture_keiybp.png"
    },
    content: [
      "Scheduling and appointment management is the lifeblood of service-based businesses. When building custom booking solutions (like the Make-Up Booking Platform and Dental Care systems), the core challenge lies in synchronizing real-time availability while maintaining a dead-simple booking flow for clients.",
      "Handling appointment slots requires strict concurrency control. By utilizing PostgreSQL Row-Level Security and transactional availability locks in Supabase, we prevent conflicting bookings even when multiple users attempt to reserve the same time slot simultaneously.",
      "On the client side, multi-step date and service pickers must provide immediate visual feedback, dynamic pricing tallies, and instant automated summaries. When clients can book in under 45 seconds without calling or waiting for manual confirmation, booking completion rates increase dramatically."
    ]
  },
  {
    id: "future-of-react",
    title: "The Future of React: What to Expect in React 19 & Modern Web Architecture",
    date: "September 15, 2025",
    readTime: "5 min read",
    tags: ["React 19", "JavaScript", "Frontend Trends"],
    excerpt: "Explore key features in modern React, including the React Compiler, Actions, and how modern full-stack workflows empower developers.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
    author: {
      name: "Tobiloba Akala",
      role: "Web Developer & Frontend Specialist",
      avatar: "https://res.cloudinary.com/dw8jtwbka/image/upload/v1780309581/refined_profile_picture_keiybp.png"
    },
    content: [
      "React continues to advance at a rapid pace. With the introduction of the React Compiler, developers gain out-of-the-box performance optimizations without manual `useMemo` or `useCallback` boilerplate.",
      "Modern React also standardizes data mutations and form actions, reducing reliance on bloated external state libraries for everyday form handling and submission feedback states.",
      "By staying closely aligned with modern ECMAScript standards and Vite-powered toolchains, developers can build applications that are both faster to write and significantly faster for users to run."
    ]
  }
];
