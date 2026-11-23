import { useId, useState } from "react";
import { LazyImage } from "./LazyMedia";

/**
 * Curated portrait & transparent background-removed cutout collection for Tobiloba Akala.
 * Uses ultra-lightweight WebP assets (32KB–76KB) and width-capped Cloudinary f_auto transforms
 * for instant mobile loading and silky 60fps scrolling.
 */
export const TOBI_PHOTOS = {
  // 76KB Retina WebP studio remastered crimson native attire + fila cutout — centerpiece for Home Hero
  heroCutout: "/assets/tobi-hero-hq.webp",
  // Width-capped transparent WebP/auto cutout — editorial cover for Work page
  workCutout:
    "https://res.cloudinary.com/dw8jtwbka/image/upload/e_trim,w_560,c_limit,f_auto,q_auto:good/v1795377503/photo_2026-11-22_20-17-48__2_-removebg-preview_v3a08d.png",
  // Width-capped transparent WebP/auto cutout — senior authority cover for About "What I do"
  aboutCutout:
    "https://res.cloudinary.com/dw8jtwbka/image/upload/e_trim,w_560,c_limit,f_auto,q_auto:good/v1795377503/photo_2026-11-22_20-17-51-removebg-preview_gvb1xf.png",
  // 32KB Retina WebP studio transparent cutout of Tobi's charcoal suit portrait — cover for Footer CTA
  footerCutout: "/assets/tobi-footer-hq.webp",
  // Lightweight 280px balcony portrait — ideal for framed avatars & quick-nav thumbnails
  balcony:
    "https://res.cloudinary.com/dw8jtwbka/image/upload/f_auto,q_auto:good,w_280,c_limit/v1795377539/photo_2026-11-22_20-17-48_huii8y.jpg",
};

export const TOBI_PORTRAIT_URL = TOBI_PHOTOS.heroCutout;
export const TOBI_AVATAR_URL = TOBI_PHOTOS.balcony;
export const RESUME_PDF_URL =
  "/assets/aistudio/Tobiloba_Akala_Frontend_Developer_Resume_dc77cbd2.pdf";

/**
 * Tobiloba Akala's preserved signature geometric TA monogram logo
 * retaining the #c770f0 violet -> #00e5ff cyan brand gradient,
 * framed with generous breathing room so the full mark reads crisply.
 */
export function TALogo({ className = "w-9 h-9" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const gradId = `ta-brand-grad-${uid}`;
  const clipId = `ta-circle-clip-${uid}`;
  const maskId = `ta-logo-mask-${uid}`;
  const sheenId = `ta-sheen-${uid}`;

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-label="TA Brand Logo"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c770f0" />
          <stop offset="55%" stopColor="#8b9cf8" />
          <stop offset="100%" stopColor="#00e5ff" />
        </linearGradient>
        <linearGradient id={sheenId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a2130" />
          <stop offset="100%" stopColor="#120e15" />
        </linearGradient>
        <clipPath id={clipId}>
          <circle cx="50" cy="50" r="50" />
        </clipPath>
        <mask id={maskId}>
          <rect x="0" y="0" width="100" height="100" fill="black" />
          <circle cx="50" cy="50" r="50" fill="white" />
          <circle cx="50" cy="50" r="32" fill="black" />
          <rect x="0" y="0" width="71" height="100" fill="black" />
          <rect x="53" y="0" width="18" height="100" fill="white" />
          <rect x="71" y="42" width="29" height="16" fill="white" />
          <rect x="29" y="30" width="18" height="70" fill="white" />
          <rect x="0" y="0" width="47" height="30" fill="white" />
        </mask>
      </defs>
      {/* Classy obsidian medallion with delicate hairline brand rim */}
      <circle cx="50" cy="50" r="48.5" fill={`url(#${sheenId})`} />
      <circle
        cx="50"
        cy="50"
        r="47.5"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="2"
        strokeOpacity="0.45"
      />
      {/* Full TA monogram scaled and optically centered with generous padding */}
      <g transform="translate(15, 15) scale(0.7)">
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          fill={`url(#${gradId})`}
          clipPath={`url(#${clipId})`}
          mask={`url(#${maskId})`}
        />
      </g>
    </svg>
  );
}

/**
 * Editorial 4-point diamond sparkle used beside section kickers
 */
export function SparkleMark({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 0.5C8.5 4.8 11.2 7.5 15.5 8C11.2 8.5 8.5 11.2 8 15.5C7.5 11.2 4.8 8.5 0.5 8C4.8 7.5 7.5 4.8 8 0.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Jagged organic torn-paper horizontal edge between paper canvas and tinted band.
 */
export function TornEdge({
  fill = "var(--bg-band)",
  flip = false,
  className = "",
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 28"
        preserveAspectRatio="none"
        className={`block w-full h-[18px] sm:h-[24px] ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,28 L0,14 L24,10 L48,17 L76,9 L106,15 L138,7 L170,16 L204,11 L236,18 L272,8 L305,15 L338,10 L372,17 L408,9 L442,16 L478,8 L512,15 L548,11 L584,18 L620,9 L654,16 L690,7 L728,15 L762,10 L798,17 L834,9 L870,16 L904,8 L942,16 L978,10 L1014,18 L1050,9 L1086,15 L1122,8 L1158,16 L1194,11 L1230,17 L1266,9 L1302,16 L1338,8 L1374,15 L1408,10 L1440,15 L1440,28 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

/**
 * True silhouette die-cut paper sticker portrait for transparent PNG cutouts.
 * - "classic": thick warm-white die-cut paper contour hugging the body silhouette + soft paper lift.
 * - "duo-outline": inner white die-cut contour + vibrant violet ring + electric cyan outer contour (matching Work hero reference).
 */
export function StickerPortrait({
  src = TOBI_PHOTOS.heroCutout,
  alt = "Tobiloba Akala",
  className = "",
  imgClassName = "w-full h-full object-contain object-bottom",
  variant = "classic",
  tilt = "0deg",
  priority = false,
}: {
  src?: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  variant?: "classic" | "duo-outline";
  tilt?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`relative inline-flex flex-col items-center justify-center rounded-[2rem] bg-[#1A131B] border-[5px] border-[#FAF7F0] p-6 text-center shadow-xl ${className}`}
        style={{ transform: `rotate(${tilt})` }}
      >
        <TALogo className="w-16 h-16 mb-3" />
        <span className="font-editorial text-xl text-white">Tobiloba Akala</span>
        <span className="text-xs text-white/70 mt-1">Web Developer · Lagos</span>
      </div>
    );
  }

  return (
    <div
      className={`relative inline-flex items-end justify-center select-none p-3.5 ${className}`}
      style={{ transform: `rotate(${tilt})` }}
    >
      {variant === "duo-outline" ? (
        <div className="w-full h-full flex items-end justify-center sticker-outline-cyan">
          <div className="w-full h-full flex items-end justify-center sticker-outline-violet">
            <LazyImage
              src={src}
              alt={alt}
              priority={priority}
              maxWidth={560}
              wrapperClassName="w-full h-full flex items-end justify-center"
              placeholderClassName="bg-transparent"
              onError={() => setFailed(true)}
              className={`block sticker-outline-white ${imgClassName}`}
            />
          </div>
        </div>
      ) : (
        <LazyImage
          src={src}
          alt={alt}
          priority={priority}
          maxWidth={660}
          wrapperClassName="w-full h-full flex items-end justify-center"
          placeholderClassName="bg-transparent"
          onError={() => setFailed(true)}
          className={`block sticker-outline-white ${imgClassName}`}
        />
      )}
    </div>
  );
}

/**
 * Hand-drawn curved arrow for margin annotations
 */
export function CurvedArrow({
  direction = "right",
  className = "w-12 h-6",
}: {
  direction?: "right" | "left" | "down-right";
  className?: string;
}) {
  if (direction === "left") {
    return (
      <svg viewBox="0 0 64 26" fill="none" className={className} aria-hidden="true">
        <path
          d="M61 10C46 5 24 8 6 15M6 15L14 9M6 15L15 20"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (direction === "down-right") {
    return (
      <svg viewBox="0 0 64 38" fill="none" className={className} aria-hidden="true">
        <path
          d="M4 6C24 4 42 13 55 31M55 31L45 28M55 31L55 20"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 26" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 14C19 7 40 7 58 14M58 14L49 8M58 14L50 19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
