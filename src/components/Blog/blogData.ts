import { TOBI_AVATAR_URL } from "../ui/EditorialPrimitives";

const TOBI_PHOTO = TOBI_AVATAR_URL;

export interface BlogPostItem {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category?: "AI & Context" | "Supabase" | "Automation" | "Frontend & Web";
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
    id: "context-engineering-vs-prompt-engineering",
    title: "Context Engineering Is the New Prompt Engineering: Designing Reliable AI Systems",
    date: "November 14, 2026",
    readTime: "8 min read",
    category: "AI & Context",
    tags: ["Context Engineering", "Prompt Engineering", "AI Systems", "LLMs"],
    excerpt: "Why clever phrasing alone breaks in production—and how assembling the right state, retrieval chunks, tool schemas, and token budgets makes AI features actually dependable.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    author: {
      name: "Tobiloba Akala",
      role: "Web Developer & Frontend Specialist",
      avatar: TOBI_PHOTO
    },
    content: [
      "Early on in the LLM wave, everyone treated AI reliability like a copywriting puzzle. If a model hallucinated or missed an edge case, the instinct was to tack another ALL-CAPS sentence onto the system prompt. In real production apps, that breaks down fast. Most AI failures aren't wording bugs—they are context bugs.",
      "Context engineering is the discipline of dynamically assembling everything the model sees at inference time: concise system instructions, relevant user history, freshly retrieved database records, strictly typed tool definitions, and clear output schemas. Instead of asking a model to guess from a vague paragraph, you engineer a clean, deterministic working memory for every single request.",
      "One of the biggest mistakes teams make is context stuffing—dumping 40 pages of raw JSON, redundant chat turns, and stale docs into the window just because a model supports 200k+ tokens. Long, noisy context degrades reasoning accuracy, spikes latency, and quietly burns API budgets. High-signal, trimmed context consistently outperforms massive uncurated dumps.",
      "In practice, I structure context pipelines in four layers: (1) stable role & guardrail rules, (2) compact session summary rather than raw transcript sprawl, (3) top-k verified records fetched just-in-time from Postgres or APIs, and (4) explicit refusal instructions for when required facts are missing. When the model is allowed to say 'I don't have enough data to verify that,' hallucination rates plummet.",
      "Treat your context window like RAM in a traditional application. Decide deliberately what gets loaded in, what gets compressed, and what gets evicted—and suddenly your AI features behave like predictable software rather than a slot machine."
    ]
  },
  {
    id: "supabase-production-rls-edge-functions",
    title: "Mastering Supabase in Production: Row-Level Security, Edge Functions & Realtime at Scale",
    date: "October 26, 2026",
    readTime: "7 min read",
    category: "Supabase",
    tags: ["Supabase", "PostgreSQL", "Row-Level Security", "Backend"],
    excerpt: "Battle-tested Postgres patterns for shipping secure multi-user web apps on Supabase—from fast indexed RLS policies to webhook-safe Edge Functions.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
    author: {
      name: "Tobiloba Akala",
      role: "Web Developer & Frontend Specialist",
      avatar: TOBI_PHOTO
    },
    content: [
      "Supabase makes it effortless to go from idea to a working Postgres database with Auth and Realtime in an afternoon. The trap is treating prototype shortcuts as production architecture—like leaving Row-Level Security (RLS) disabled or writing policies that silently trigger full table scans on every query.",
      "Rule number one in production Supabase: enable RLS on every public table and index every column referenced inside your policies. Wrapping `auth.uid()` inside `(select auth.uid())` allows Postgres to evaluate the user ID once per statement instead of once per row, turning sluggish 800ms dashboard queries into sub-15ms responses.",
      "For sensitive operations—verifying Paystack or Stripe webhooks, issuing signed URLs, or calling third-party AI APIs—move execution out of the client and into Supabase Edge Functions. Keep your service role key strictly server-side, validate incoming webhook signatures first, and write idempotent upsert logic so retried webhook deliveries never create duplicate orders or bookings.",
      "When using Supabase Realtime for live booking calendars or collaborative dashboards, subscribe narrowly with column filters instead of listening to whole tables. Pair that with optimistic React UI updates and you get an app that feels instantaneously live while keeping database connection pools calm and predictable."
    ]
  },
  {
    id: "resilient-ai-automation-workflows",
    title: "Building Resilient AI Automation Workflows That Don't Break at 2 AM",
    date: "September 29, 2026",
    readTime: "7 min read",
    category: "Automation",
    tags: ["AI Automation", "Workflows", "Full-Stack", "Reliability"],
    excerpt: "How to pair deterministic code—queues, schema validation, and idempotency keys—with LLM reasoning steps to automate client ops safely.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    author: {
      name: "Tobiloba Akala",
      role: "Web Developer & Frontend Specialist",
      avatar: TOBI_PHOTO
    },
    content: [
      "Demo-day AI automations always look magical: an email arrives, an agent reads it, updates a CRM, drafts a quote, and schedules a calendar invite. Then you deploy it for a real business and a single malformed JSON response or rate-limit hiccup breaks the entire chain silently.",
      "The secret to reliable AI automation is knowing where to use deterministic code and where to use an LLM. Never ask an LLM to compute invoice totals, check slot collisions, or format database keys—let TypeScript and SQL handle deterministic rules. Reserve the model strictly for fuzzy human tasks: classifying intent, extracting structured fields from messy WhatsApp or email messages, and drafting tailored replies.",
      "Every LLM boundary in an automation pipeline should sit behind a strict runtime validator like Zod. If the model's output misses a required field or falls outside an allowed enum, trigger a targeted retry with the validation error fed back—or route the job to a human-in-the-loop review queue rather than corrupting downstream tables.",
      "Finally, bake in idempotency keys and dead-letter logging from day one. When a webhook fires twice or an upstream API times out at 2 AM, an idempotent workflow recovers cleanly without double-emailing a client or charging a card twice."
    ]
  },
  {
    id: "structured-prompt-engineering-for-developers",
    title: "Structured Prompt Engineering for Developers: Typed Schemas, Few-Shot Evals & Guardrails",
    date: "August 21, 2026",
    readTime: "6 min read",
    category: "AI & Context",
    tags: ["Prompt Engineering", "TypeScript", "AI Engineering", "Evals"],
    excerpt: "Stop tweaking prompts by gut feel. Learn how to treat prompts like versioned API contracts backed by JSON schemas and lightweight regression evals.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    author: {
      name: "Tobiloba Akala",
      role: "Web Developer & Frontend Specialist",
      avatar: TOBI_PHOTO
    },
    content: [
      "Most developers write TypeScript with strict null checks and automated tests—then toss an unversioned, freeform prompt string into an API call and hope for the best. Good prompt engineering for software engineers looks a lot more like interface design than creative writing.",
      "Start by separating concerns inside every prompt: (1) Role and domain boundaries, (2) Explicit constraints and edge-case rules, (3) Two to four high-leverage few-shot examples covering tricky inputs—not just happy paths—and (4) Enforced structured output via native JSON Schema / response schemas so your React frontend always receives predictable keys.",
      "Whenever you fix a weird edge case in a prompt, save that exact failing input into a tiny JSON eval file in your repo. Even a 25-case regression suite run in CI catches 90% of accidental regressions when you refactor instructions or upgrade to a newer model checkpoint.",
      "Clean, modular prompts paired with strict output schemas turn messy natural language into composable UI building blocks—letting you render smart filters, summaries, and inline suggestions without fragile regex parsing."
    ]
  },
  {
    id: "hybrid-search-supabase-pgvector-context",
    title: "Hybrid Search with Supabase pgvector: Feeding Cleaner Context to AI Agents",
    date: "July 11, 2026",
    readTime: "8 min read",
    category: "Supabase",
    tags: ["Supabase", "pgvector", "Context Engineering", "RAG"],
    excerpt: "Why pure vector similarity misses exact product codes and names—and how combining Postgres Full-Text Search with pgvector + RRF inside one RPC fixes retrieval.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
    author: {
      name: "Tobiloba Akala",
      role: "Web Developer & Frontend Specialist",
      avatar: TOBI_PHOTO
    },
    content: [
      "Semantic vector search feels like magic when a user searches for 'fast movie discovery app' and finds 'CineScope' even without matching keywords. Yet pure vector search has a well-known blind spot: exact identifiers like error codes, SKUs, invoice numbers, and brand names often rank poorly because embeddings smooth over literal spelling.",
      "Because Supabase runs on full PostgreSQL, you don't need a separate third-party vector database to solve this. You can store `pgvector` embeddings alongside a generated `tsvector` full-text search column in the exact same table—keeping permissions, joins, and RLS policies unified.",
      "Using a single Postgres SQL function (RPC), you run both a keyword search (`websearch_to_tsquery`) and a cosine-distance vector query (`<=>`) in parallel, then merge their top candidates with Reciprocal Rank Fusion (RRF). RRF rewards documents that score well semantically AND contain exact keyword hits, without fragile score-normalization math.",
      "Add metadata pre-filtering (like `tenant_id`, `category`, or `updated_at`) before scoring, and you get sub-50ms retrieval that hands your AI agent crisp, grounded citations every time—all from the same Supabase project already powering your app."
    ]
  },
  {
    id: "shipping-faster-with-ai-coding-agents",
    title: "Shipping 3x Faster with AI Coding Agents Without Accumulating Technical Debt",
    date: "May 30, 2026",
    readTime: "6 min read",
    category: "Automation",
    tags: ["Tech", "AI Automation", "Developer Workflow", "TypeScript"],
    excerpt: "Practical engineering habits—architecture briefs, repo context files, strict linting, and tight diffs—that keep AI-assisted codebases fast and maintainable.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1000&auto=format&fit=crop",
    author: {
      name: "Tobiloba Akala",
      role: "Web Developer & Frontend Specialist",
      avatar: TOBI_PHOTO
    },
    content: [
      "AI coding assistants have permanently changed how fast a solo engineer or small product team can ship. Scaffolding API routes, writing Tailwind layouts, and generating migration scripts now take minutes instead of hours. The catch? Without strong engineering guardrails, you can also generate three times as much bloated, inconsistent code.",
      "The highest-leverage habit I've adopted is context-first delegation: before generating code, I maintain a crisp repository instruction file documenting naming conventions, folder boundaries, design tokens, and non-negotiable rules (like routing conventions and state boundaries). Giving the assistant clear architectural context immediately eliminates repetitive cleanup.",
      "Second, work in small, verifiable slices. Instead of asking an agent to 'build the entire dashboard and auth flow,' break the work into schema definition, typed data layer, and composable UI primitives. Run `tsc --noEmit` and automated checks after every slice so type errors never compound across files.",
      "AI amplifies the clarity of the engineer steering it. When you bring sharp product intuition, performance discipline, and strict code review standards to the table, AI agents become a genuine force multiplier for shipping polished software."
    ]
  },
  {
    id: "optimizing-react-performance-nigerian-networks",
    title: "Optimizing React Web Applications for Variable Bandwidth Networks in Nigeria: Practical Strategies",
    date: "February 20, 2026",
    readTime: "6 min read",
    category: "Frontend & Web",
    tags: ["Performance", "React", "Web Development Nigeria", "Core Web Vitals"],
    excerpt: "Discover practical frontend techniques to ensure your React applications load in under 1.5 seconds on 3G/4G cellular networks across Lagos and beyond.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    author: {
      name: "Tobiloba Akala",
      role: "Web Developer & Frontend Specialist",
      avatar: TOBI_PHOTO
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
      avatar: TOBI_PHOTO
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
      avatar: TOBI_PHOTO
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
      avatar: TOBI_PHOTO
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
      avatar: TOBI_PHOTO
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
      avatar: TOBI_PHOTO
    },
    content: [
      "React continues to advance at a rapid pace. With the introduction of the React Compiler, developers gain out-of-the-box performance optimizations without manual `useMemo` or `useCallback` boilerplate.",
      "Modern React also standardizes data mutations and form actions, reducing reliance on bloated external state libraries for everyday form handling and submission feedback states.",
      "By staying closely aligned with modern ECMAScript standards and Vite-powered toolchains, developers can build applications that are both faster to write and significantly faster for users to run."
    ]
  }
];
