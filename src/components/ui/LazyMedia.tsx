import { useEffect, useRef, useState } from "react";

/**
 * Rewrites Cloudinary and Unsplash URLs to serve mobile-friendly widths and
 * modern compressed formats (WebP/AVIF via f_auto,q_auto) without breaking
 * already-transformed URLs or local assets.
 */
export function optimizeImageUrl(src: string, maxWidth = 720): string {
  if (!src) return src;

  // Optimize Cloudinary delivery URLs
  if (src.includes("res.cloudinary.com") && src.includes("/image/upload/")) {
    const [prefix, rest] = src.split("/image/upload/");
    if (!rest) return src;
    // Skip if already width-constrained
    if (/(^|[,/])w_\d+/.test(rest)) return src;
    const firstSegment = rest.split("/")[0] || "";
    const hasTransforms =
      !firstSegment.startsWith("v") &&
      (firstSegment.includes("_") || firstSegment.includes(","));

    if (hasTransforms) {
      const remaining = rest.slice(firstSegment.length);
      return `${prefix}/image/upload/${firstSegment},w_${maxWidth},c_limit,f_auto,q_auto:good${remaining}`;
    }
    return `${prefix}/image/upload/f_auto,q_auto:good,w_${maxWidth},c_limit/${rest}`;
  }

  // Optimize Unsplash delivery URLs
  if (src.includes("images.unsplash.com") || src.includes("plus.unsplash.com")) {
    try {
      const url = new URL(src);
      const currentW = Number(url.searchParams.get("w") || "0");
      if (!currentW || currentW > maxWidth) {
        url.searchParams.set("w", String(maxWidth));
      }
      url.searchParams.set("q", "75");
      url.searchParams.set("auto", "format");
      return url.toString();
    } catch {
      return src;
    }
  }

  return src;
}

interface LazyImageProps {
  src?: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
  maxWidth?: number;
  rootMargin?: string;
  placeholderClassName?: string;
  fallback?: React.ReactNode;
  onError?: () => void;
}

/**
 * React IntersectionObserver-backed lazy image component.
 * - Defers network requests for below-the-fold images until within `rootMargin`.
 * - Uses `decoding="async"` so image decoding never blocks scroll frames on mobile.
 * - Renders a clean zero-CLS placeholder and smooth GPU-composited opacity fade-in.
 */
export function LazyImage({
  src,
  alt,
  className = "w-full h-full object-cover",
  wrapperClassName = "relative w-full h-full",
  priority = false,
  maxWidth = 720,
  rootMargin = "280px 0px",
  placeholderClassName = "bg-[var(--ink)]/[0.06]",
  fallback = null,
  onError,
}: LazyImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const optimizedSrc = src ? optimizeImageUrl(src, maxWidth) : "";
  const prevSrcRef = useRef(optimizedSrc);

  const [inView, setInView] = useState(priority);
  const [loaded, setLoaded] = useState(priority);
  const [failed, setFailed] = useState(false);

  // Only reset error/loaded state when src genuinely changes after initial mount
  useEffect(() => {
    if (prevSrcRef.current !== optimizedSrc) {
      prevSrcRef.current = optimizedSrc;
      setFailed(false);
      setLoaded(priority);
    }
  }, [optimizedSrc, priority]);

  // Immediately reveal images that were already decoded from browser cache / preload
  useEffect(() => {
    if (!inView || loaded) return;
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [inView, loaded, optimizedSrc]);

  useEffect(() => {
    if (priority || inView) return;
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [priority, inView, rootMargin]);

  if (!optimizedSrc || failed) {
    return fallback ? <>{fallback}</> : null;
  }

  return (
    <div ref={containerRef} className={wrapperClassName}>
      {!priority && !loaded && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 transition-opacity duration-300 ${placeholderClassName}`}
        />
      )}
      {inView && (
        <img
          ref={imgRef}
          src={optimizedSrc}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={() => {
            setFailed(true);
            onError?.();
          }}
          className={
            priority
              ? className
              : `${className} transition-opacity duration-300 ${
                  loaded ? "opacity-100" : "opacity-0"
                }`
          }
        />
      )}
    </div>
  );
}

/**
 * Rewrites Cloudinary video URLs to serve compressed, width-capped modern codecs
 * (f_auto, q_auto:eco, vc_auto) cutting mobile video bandwidth by ~70-85%.
 */
export function optimizeVideoUrl(src: string, maxWidth = 540): string {
  if (!src) return src;
  if (src.includes("res.cloudinary.com") && src.includes("/video/upload/")) {
    const [prefix, rest] = src.split("/video/upload/");
    if (!rest || /(^|[,/])w_\d+/.test(rest)) return src;
    return `${prefix}/video/upload/f_auto,q_auto:eco,vc_auto,w_${maxWidth},c_limit/${rest}`;
  }
  return src;
}

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  eager?: boolean;
  reduceMotion?: boolean;
  loopEndSeconds?: number;
  maxWidth?: number;
  onError?: () => void;
}

/**
 * Viewport-aware LazyVideo component:
 * - Only attaches video `src` when near the viewport (`IntersectionObserver`).
 * - Automatically compresses Cloudinary video URLs and respects Data Saver mode.
 * - Automatically pauses off-screen videos and resumes when visible to protect mobile scroll FPS & battery.
 */
export function LazyVideo({
  src,
  poster,
  className = "w-full h-full object-cover",
  eager = false,
  reduceMotion = false,
  loopEndSeconds = 5.5,
  maxWidth = 540,
  onError,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const saveData =
    typeof navigator !== "undefined" &&
    Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);
  const optimizedVideoSrc = optimizeVideoUrl(src, maxWidth);

  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(eager);

  useEffect(() => {
    if (saveData || !eager) return;
    const ric = (
      window as Window & {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
        cancelIdleCallback?: (id: number) => void;
      }
    ).requestIdleCallback;
    if (typeof ric === "function") {
      const id = ric(() => setShouldLoad(true), { timeout: 650 });
      return () =>
        (
          window as Window & { cancelIdleCallback?: (handle: number) => void }
        ).cancelIdleCallback?.(id);
    }
    const timer = window.setTimeout(() => setShouldLoad(true), 350);
    return () => window.clearTimeout(timer);
  }, [eager, saveData]);

  useEffect(() => {
    if (saveData) return;
    const el = videoRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      setIsVisible(true);
      return;
    }

    const loadObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          loadObserver.disconnect();
        }
      },
      { rootMargin: "220px 0px" }
    );

    const playObserver = new IntersectionObserver(
      (entries) => {
        setIsVisible(Boolean(entries[0]?.isIntersecting));
      },
      { threshold: 0.15 }
    );

    if (!eager) loadObserver.observe(el);
    playObserver.observe(el);

    return () => {
      loadObserver.disconnect();
      playObserver.disconnect();
    };
  }, [eager, saveData]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !shouldLoad || saveData) return;

    if (reduceMotion || !isVisible) {
      el.pause();
    } else {
      el.play().catch(() => {});
    }
  }, [reduceMotion, isVisible, shouldLoad, saveData]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad && !saveData ? optimizedVideoSrc : undefined}
      poster={poster ? optimizeImageUrl(poster, 480) : undefined}
      autoPlay={shouldLoad && isVisible && !reduceMotion && !saveData}
      muted
      playsInline
      loop
      preload={eager && !saveData ? "metadata" : "none"}
      onTimeUpdate={(e) => {
        if (loopEndSeconds > 0 && e.currentTarget.currentTime >= loopEndSeconds) {
          e.currentTarget.currentTime = 0;
          if (!reduceMotion && isVisible) {
            e.currentTarget.play().catch(() => {});
          }
        }
      }}
      onError={onError}
      className={className}
    />
  );
}
