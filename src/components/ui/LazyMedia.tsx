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
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
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
 * - Uses `decoding="sync"` for priority LCP images and `decoding="async"` for lazy images.
 * - Supports responsive `srcSet`/`sizes` and explicit `width`/`height` for zero CLS.
 */
export function LazyImage({
  src,
  srcSet,
  sizes,
  width,
  height,
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
    <div ref={containerRef} className={`relative ${wrapperClassName}`}>
      {!priority && !loaded && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${placeholderClassName}`}
        />
      )}
      {inView && (
        <img
          ref={imgRef}
          src={optimizedSrc}
          srcSet={srcSet}
          sizes={sizes}
          width={width}
          height={height}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
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
  const [isVisible, setIsVisible] = useState(false);

  // Only allow eager desktop playback AFTER window load + idle; mobile stays strictly viewport-lazy
  useEffect(() => {
    if (saveData || !eager || typeof window === "undefined") return;
    if (window.innerWidth < 1024) return;

    let cancelled = false;
    let idleId: number | undefined;
    let timerId: number | undefined;

    const scheduleLoad = () => {
      if (cancelled) return;
      const ric = (
        window as Window & {
          requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
        }
      ).requestIdleCallback;
      if (typeof ric === "function") {
        idleId = ric(() => {
          if (!cancelled) setShouldLoad(true);
        }, { timeout: 1600 });
      } else {
        timerId = window.setTimeout(() => {
          if (!cancelled) setShouldLoad(true);
        }, 900);
      }
    };

    if (document.readyState === "complete") {
      scheduleLoad();
    } else {
      window.addEventListener("load", scheduleLoad, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", scheduleLoad);
      if (idleId !== undefined) {
        (
          window as Window & { cancelIdleCallback?: (handle: number) => void }
        ).cancelIdleCallback?.(idleId);
      }
      if (timerId !== undefined) window.clearTimeout(timerId);
    };
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
      { rootMargin: "120px 0px" }
    );

    const playObserver = new IntersectionObserver(
      (entries) => {
        setIsVisible(Boolean(entries[0]?.isIntersecting));
      },
      { threshold: 0.2 }
    );

    // Observe on mobile even if eager=true (card sits below the fold on mobile)
    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
    if (!eager || !isDesktop) loadObserver.observe(el);
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
      poster={poster ? optimizeImageUrl(poster, 360) : undefined}
      autoPlay={shouldLoad && isVisible && !reduceMotion && !saveData}
      muted
      playsInline
      loop
      preload={shouldLoad && !saveData ? "metadata" : "none"}
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
