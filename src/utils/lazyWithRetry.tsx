import { Component, ComponentType, lazy, ReactNode } from "react";

type ModuleImport<T extends ComponentType<any>> = () => Promise<{ default: T }>;

const RELOAD_STORAGE_PREFIX = "bwt_chunk_reload_";

/**
 * Wraps React.lazy with automatic retry for transient network/HMR hiccups
 * and a safe one-time page reload fallback if a stale deployment chunk hash
 * fails to fetch. Eliminates uncaught "Failed to fetch dynamically imported module" errors.
 */
export function lazyWithRetry<T extends ComponentType<any>>(
  importer: ModuleImport<T>,
  chunkKey: string
) {
  return lazy(async () => {
    const maxRetries = 2;
    let lastError: unknown;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const mod = await importer();
        try {
          sessionStorage.removeItem(`${RELOAD_STORAGE_PREFIX}${chunkKey}`);
        } catch {
          // Ignore storage restrictions
        }
        return mod;
      } catch (err) {
        lastError = err;
        if (attempt < maxRetries) {
          await new Promise((resolve) =>
            setTimeout(resolve, 250 * (attempt + 1))
          );
        }
      }
    }

    // Attempt a single guarded reload to recover from stale chunk URLs after deploy/restart
    try {
      const storageKey = `${RELOAD_STORAGE_PREFIX}${chunkKey}`;
      const hasReloaded = sessionStorage.getItem(storageKey);
      if (!hasReloaded) {
        sessionStorage.setItem(storageKey, "1");
        window.location.reload();
        // Keep suspense pending while the browser reloads
        return new Promise<{ default: T }>(() => {});
      }
    } catch {
      // Fall through to ErrorBoundary if sessionStorage is unavailable
    }

    throw lastError;
  });
}

// Route importer registry for zero-latency hover/touch prefetching
export const routeImporters = {
  about: () => import("../components/About/About"),
  projects: () => import("../components/Projects/Projects"),
  projectCaseStudy: () => import("../components/Projects/ProjectCaseStudy"),
  blog: () => import("../components/Blog/Blog"),
  blogPost: () => import("../components/Blog/BlogPost"),
  contact: () => import("../components/Contact/Contact"),
  thankYou: () => import("../components/Contact/ThankYou"),
  bookingModal: () => import("../components/Booking/BookingModal"),
  welcomeModal: () => import("../components/Welcome/WelcomeNameModal"),
};

const prefetchedRoutes = new Set<string>();

/**
 * Prefetches a lazy route chunk on link hover/touch so page transitions feel instant.
 */
export function prefetchRoute(path: string) {
  if (typeof window === "undefined") return;
  const normalized = path.split("#")[0].split("?")[0];
  if (prefetchedRoutes.has(normalized)) return;

  let importer: (() => Promise<unknown>) | undefined;
  if (normalized === "/projects") importer = routeImporters.projects;
  else if (normalized.startsWith("/projects/")) importer = routeImporters.projectCaseStudy;
  else if (normalized === "/about") importer = routeImporters.about;
  else if (normalized === "/blog") importer = routeImporters.blog;
  else if (normalized.startsWith("/blog/")) importer = routeImporters.blogPost;
  else if (normalized === "/contact") importer = routeImporters.contact;

  if (!importer) return;
  prefetchedRoutes.add(normalized);
  importer().catch(() => {
    prefetchedRoutes.delete(normalized);
  });
}

interface BoundaryProps {
  children: ReactNode;
}

interface BoundaryState {
  hasError: boolean;
}

/**
 * Editorial ErrorBoundary that catches lazy module or render failures gracefully
 * and lets the user recover in one click without a white screen.
 */
export class RouteErrorBoundary extends Component<BoundaryProps, BoundaryState> {
  state: BoundaryState = { hasError: false };

  static getDerivedStateFromError(): BoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("Route render/module error caught by boundary:", error);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
          <div className="max-w-md rounded-3xl bg-[var(--surface-card)] border border-[var(--border-hairline)] p-8 shadow-[var(--shadow-paper)]">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)] mb-3">
              Connection hiccup
            </p>
            <h2 className="font-editorial font-black text-2xl sm:text-3xl text-[var(--ink)] mb-3">
              Couldn&apos;t load this page cleanly.
            </h2>
            <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-6">
              A page module failed to load—usually after a fresh update or brief
              network drop. Tap below to refresh cleanly.
            </p>
            <button
              type="button"
              onClick={this.handleReload}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[var(--ink)] text-white text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
            >
              Reload page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
