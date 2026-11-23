import * as React from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { optimizeImageUrl, optimizeVideoUrl } from "./LazyMedia";

/*
 * Polaroid Line Carousel — instant prints pegged to a sagging craft string.
 * Drag the line (or use arrows / keyboard) and prints glide along the curve,
 * swinging naturally on wooden pegs with velocity & gravity physics, plus a
 * gentle idle sway. Tailored to BuildWithTobi's tactile editorial paper aesthetic.
 */

export type LandPalette = "dawn" | "alpine" | "dusk" | "mist";

export type Slide = {
  id?: string | number;
  image?: string;
  video?: string;
  title?: string;
  caption?: string;
  meta?: string;
  badge?: string;
  alt?: string;
  palette?: LandPalette;
  seed?: number;
};

export type PolaroidLineCarouselProps = {
  slides?: Slide[];
  /** Any CSS length. */
  height?: number | string;
  /** Width of a print in px (shrinks cleanly on narrow screens). */
  cardWidth?: number;
  /** How far the string sags in the middle, px. */
  sag?: number;
  /** How much the prints swing; 0 holds them still. */
  swing?: number;
  /** ms per print; 0 turns autoplay off. Waits while interacting. */
  autoplay?: number;
  /** Colour of the string. */
  string?: string;
  background?: string;
  ink?: string;
  reduceMotion?: boolean;
  actionLabel?: string;
  onChange?: (index: number) => void;
  onSelectSlide?: (index: number) => void;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
};

export function wrap(i: number, n: number): number {
  return n ? ((i % n) + n) % n : 0;
}

export function clamp(v: number, a: number, b: number): number {
  return Math.min(b, Math.max(a, v));
}

/** Height of a string sagging by `sag` between (0, y0) and (w, y0), at x. */
export function stringY(x: number, w: number, y0: number, sag: number): number {
  const t = clamp(x / w, 0, 1);
  return y0 + 4 * sag * t * (1 - t);
}

/** One step of a critically damped spring toward target. */
export function springStep(
  x: number,
  v: number,
  target: number,
  dt: number,
  k = 70
): [number, number] {
  const c = 2 * Math.sqrt(k);
  const nv = v + (k * (target - x) - c * v) * dt;
  return [x + nv * dt, nv];
}

/** One step of a print's pendulum swing driven by line velocity + gravity + damping. */
export function swingStep(
  a: number,
  w: number,
  lineVel: number,
  dt: number,
  gain: number
): [number, number] {
  const nw = w + (-38 * a - 4.2 * w + lineVel * 0.0034 * gain) * dt;
  return [clamp(a + nw * dt, -0.55, 0.55), nw];
}

/** Index of the print nearest the centre for a line offset. */
export function nearestAt(off: number, spacing: number, n: number): number {
  return clamp(Math.round(off / spacing), 0, Math.max(0, n - 1));
}

export function pad2(n: number): string {
  return n < 10 ? "0" + n : String(n);
}

const PALETTES = {
  dawn: {
    top: "#e7b7a5",
    bottom: "#f8e8d6",
    sun: "#fff4df",
    far: "#d2b2bb",
    near: "#3a2a3b",
    mist: "255,240,232",
  },
  alpine: {
    top: "#7ea5c8",
    bottom: "#e3ecf2",
    sun: "#ffffff",
    far: "#a9bfd0",
    near: "#1c3044",
    mist: "236,244,250",
  },
  dusk: {
    top: "#2a2450",
    bottom: "#ef8d60",
    sun: "#ffd9a6",
    far: "#93607c",
    near: "#18121f",
    mist: "255,196,160",
  },
  mist: {
    top: "#c4d0cb",
    bottom: "#eef1ec",
    sun: "#ffffff",
    far: "#aebcb5",
    near: "#2c3a33",
    mist: "246,248,245",
  },
};

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hexRgb(h: string): [number, number, number] {
  const v = parseInt(h.replace("#", ""), 16);
  return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
}

function mixRgb(a: string, b: string, t: number): string {
  const A = hexRgb(a);
  const B = hexRgb(b);
  return (
    "rgb(" + A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(",") + ")"
  );
}

function paintLandscape(
  seed: number,
  palette: LandPalette,
  w = 720,
  h = 540
): string {
  if (typeof document === "undefined") return "";
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const g = c.getContext("2d");
  if (!g) return "";
  const P = PALETTES[palette] ?? PALETTES.dusk;
  const r = mulberry32(seed * 104729 + 7);

  const sky = g.createLinearGradient(0, 0, 0, h * 0.72);
  sky.addColorStop(0, P.top);
  sky.addColorStop(1, P.bottom);
  g.fillStyle = sky;
  g.fillRect(0, 0, w, h);

  const sx = w * (0.22 + r() * 0.56);
  const sy = h * (0.26 + r() * 0.16);
  const halo = g.createRadialGradient(sx, sy, 0, sx, sy, w * 0.45);
  halo.addColorStop(0, "rgba(" + hexRgb(P.sun).join(",") + ",.85)");
  halo.addColorStop(0.08, "rgba(" + hexRgb(P.sun).join(",") + ",.55)");
  halo.addColorStop(1, "rgba(" + hexRgb(P.sun).join(",") + ",0)");
  g.fillStyle = halo;
  g.fillRect(0, 0, w, h);

  g.fillStyle = P.sun;
  g.beginPath();
  g.arc(sx, sy, h * 0.045, 0, Math.PI * 2);
  g.fill();

  const layers = 5;
  for (let L = 0; L < layers; L++) {
    const k = L / (layers - 1);
    const base = h * (0.42 + k * 0.4);
    const amp = h * (0.07 + k * 0.1);
    const ph = [r(), r(), r(), r()].map((v) => v * Math.PI * 2);
    const fr = [1.3 + r(), 3.1 + r() * 2, 7 + r() * 4, 17 + r() * 8];
    const ridge = (x: number) => {
      const u = x / w;
      return (
        base -
        amp *
          (0.55 * Math.sin(u * fr[0] + ph[0]) +
            0.28 * Math.sin(u * fr[1] + ph[1]) +
            0.12 * Math.abs(Math.sin(u * fr[2] + ph[2])) +
            0.05 * Math.sin(u * fr[3] + ph[3]))
      );
    };
    const body = g.createLinearGradient(0, base - amp, 0, h);
    body.addColorStop(0, mixRgb(P.far, P.near, Math.pow(k, 1.3)));
    body.addColorStop(
      1,
      mixRgb(P.far, P.near, Math.min(1, Math.pow(k, 1.3) + 0.18))
    );
    g.fillStyle = body;
    g.beginPath();
    g.moveTo(0, h);
    for (let x = 0; x <= w; x += 6) g.lineTo(x, ridge(x));
    g.lineTo(w, h);
    g.closePath();
    g.fill();
  }

  return c.toDataURL("image/jpeg", 0.85);
}

const DEFAULT_SLIDES: Slide[] = [
  {
    title: "First Light",
    caption: "Haze lifting off the eastern ridges.",
    palette: "dawn",
    seed: 3,
  },
  {
    title: "High Pass",
    caption: "Cold air, clear to the far range.",
    palette: "alpine",
    seed: 8,
  },
  {
    title: "Ember Hour",
    caption: "The last of the sun on the valley floor.",
    palette: "dusk",
    seed: 14,
  },
];

function useSlideImages(slides: Slide[]): string[] {
  const key = slides
    .map((s) => s.image || (s.palette || "dusk") + ":" + (s.seed ?? 1))
    .join("|");
  const [painted, setPainted] = React.useState<string[]>(() =>
    slides.map(() => "")
  );

  React.useEffect(() => {
    setPainted(
      slides.map((s, i) =>
        s.image ? "" : paintLandscape(s.seed ?? i + 1, s.palette || "dusk")
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return slides.map((s, i) =>
    s.image ? optimizeImageUrl(s.image, 560) : painted[i] || ""
  );
}

const PL_CSS = [
  ".pl-root{position:relative;width:100%;display:flex;flex-direction:column;background:var(--pl-bg);color:var(--pl-ink);user-select:none;-webkit-user-select:none;outline:none}",
  ".pl-root:focus-visible{box-shadow:inset 0 0 0 2px var(--cutout-black-letter, #e89be8);border-radius:12px}",
  ".pl-stage{position:relative;width:100%;overflow:hidden;touch-action:pan-y;cursor:grab;min-height:372px}",
  "@media (min-width:640px){.pl-stage{min-height:420px}}",
  ".pl-root[data-drag='1'] .pl-stage{cursor:grabbing}",
  ".pl-string{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;overflow:visible}",
  ".pl-card{position:absolute;left:0;top:0;width:var(--pl-cw);transform-origin:50% 0;cursor:pointer}",
  ".pl-root[data-drag='1'] .pl-card,.pl-card[data-on='1']{will-change:transform}",
  ".pl-root[data-drag='1'] .pl-card{cursor:grabbing}",
  ".pl-print{margin-top:11px;background:#faf7f2;padding:10px 10px 0;border-radius:6px;box-shadow:0 2px 4px rgba(0,0,0,.22),0 22px 36px -14px rgba(0,0,0,.58);border:1px solid rgba(255,255,255,.85);transition:transform .45s cubic-bezier(.2,.7,.2,1),opacity .4s ease,box-shadow .4s ease}",
  ".pl-card[data-on='1'] .pl-print{opacity:1;box-shadow:0 4px 10px rgba(0,0,0,.28),0 28px 46px -14px rgba(0,0,0,.68),0 0 0 1.5px rgba(232,155,232,.45)}",
  ".pl-card[data-on='0'] .pl-print{transform:scale(.9);opacity:.78}",
  ".pl-card[data-on='0']:hover .pl-print{opacity:.94}",
  ".pl-shot{position:relative;aspect-ratio:1/1;overflow:hidden;border-radius:3px;background:#191520}",
  ".pl-shot img,.pl-shot video{position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:cover;display:block;pointer-events:none}",
  ".pl-note{height:48px;display:flex;align-items:center;justify-content:space-between;gap:8px;padding:0 4px;color:#1a131b}",
  ".pl-note-title{font-family:var(--font-hand,'Caveat',cursive);font-size:21px;font-weight:700;line-height:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
  ".pl-note-idx{font-family:var(--font-mono,ui-monospace,monospace);font-size:10px;font-weight:600;letter-spacing:.12em;color:#7f7382;flex-shrink:0}",
  ".pl-peg{position:absolute;left:50%;top:0;width:11px;height:28px;margin-left:-5.5px;border-radius:2.5px;background:linear-gradient(90deg,#c9a67a,#e6cea8 45%,#b28b59);box-shadow:0 3px 6px rgba(0,0,0,.42)}",
  ".pl-peg::after{content:'';position:absolute;left:4.5px;top:9px;width:2px;height:8px;background:rgba(70,48,22,.48);border-radius:1px}",
  ".pl-bar{position:relative;z-index:20;margin-top:28px;padding-top:20px;border-top:1px dashed rgba(255,255,255,.12);display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:18px;cursor:default}",
  "@media (min-width:640px){.pl-bar{margin-top:20px;padding-top:16px;gap:16px}}",
  ".pl-cap{flex:1 1 260px;min-width:0;overflow:hidden;padding-bottom:.15em}",
  ".pl-cap>*{display:block;animation:pl-in .48s cubic-bezier(.2,.8,.2,1) both}",
  "@keyframes pl-in{from{transform:translateY(42%);opacity:0}to{transform:none;opacity:1}}",
  ".pl-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}",
  "@media (prefers-reduced-motion:reduce){.pl-cap>*{animation:none}.pl-print{transition:none}}",
].join("\n");

export default function PolaroidLineCarousel({
  slides = DEFAULT_SLIDES,
  height = "auto",
  cardWidth = 286,
  sag = 42,
  swing = 1,
  autoplay = 5200,
  string = "#d8c7b2",
  background = "transparent",
  ink = "#f6f4f6",
  reduceMotion = false,
  actionLabel = "Inspect case study",
  onChange,
  onSelectSlide,
  className,
  style,
  ariaLabel = "Portfolio polaroid carousel",
}: PolaroidLineCarouselProps) {
  const n = slides.length;
  const srcs = useSlideImages(slides);
  const [active, setActive] = React.useState(0);
  const [dragging, setDragging] = React.useState(false);
  const [inView, setInView] = React.useState(false);
  const [size, setSize] = React.useState({ w: 1100, h: 420, cw: cardWidth });

  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const stageRef = React.useRef<HTMLDivElement | null>(null);
  const pathRef = React.useRef<SVGPathElement | null>(null);
  const cards = React.useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);
  const sim = React.useRef({
    off: 0,
    vel: 0,
    target: 0,
    a: [] as number[],
    w: [] as number[],
  });
  const drag = React.useRef<null | {
    x: number;
    off: number;
    lx: number;
    lt: number;
    v: number;
    moved: boolean;
  }>(null);
  const lastTouch = React.useRef(0);
  const activeRef = React.useRef(0);
  const opts = React.useRef({ sag, swing, reduceMotion });
  opts.current = { sag, swing, reduceMotion };

  const saveData =
    typeof navigator !== "undefined" &&
    Boolean(
      (navigator as Navigator & { connection?: { saveData?: boolean } })
        .connection?.saveData
    );

  const spacing = size.cw * 1.12;

  const goTo = React.useCallback(
    (i: number) => {
      sim.current.target = clamp(i, 0, Math.max(0, n - 1)) * spacing;
    },
    [n, spacing]
  );

  React.useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const ro = new ResizeObserver(() => {
      const r = stage.getBoundingClientRect();
      const isMobile = r.width < 640;
      const cw = Math.round(
        Math.max(
          184,
          Math.min(
            isMobile ? 228 : cardWidth,
            r.width * (isMobile ? 0.6 : 0.42),
            r.height - (isMobile ? 132 : 124)
          )
        )
      );
      setSize({ w: r.width, h: r.height, cw });
    });
    ro.observe(stage);
    return () => ro.disconnect();
  }, [cardWidth]);

  React.useEffect(() => {
    sim.current.target = activeRef.current * spacing;
    sim.current.off = activeRef.current * spacing;
  }, [spacing]);

  React.useEffect(() => {
    onChange?.(active);
  }, [active, onChange]);

  // Play/pause embedded Polaroid video based on visibility & active state
  React.useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (inView && !reduceMotion && !saveData && Math.abs(i - active) <= 1) {
        vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    });
  }, [inView, active, reduceMotion, saveData]);

  // Recompute SVG twine curve only when viewport dimensions or sag change (never 60x/sec)
  React.useEffect(() => {
    const { w, h } = size;
    const isMobile = w < 640;
    const y0 = isMobile ? 20 : Math.max(24, Math.min(44, h * 0.08));
    const activeSag = isMobile ? Math.min(sag, 26) : sag;
    pathRef.current?.setAttribute(
      "d",
      "M0 " + y0 + " Q" + w / 2 + " " + (y0 + 2 * activeSag) + " " + w + " " + y0
    );
  }, [size.w, size.h, sag]);

  // Physics loop (only runs while visible in viewport)
  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const osReduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let visible = true;
    let raf = 0;
    let prev = performance.now();
    const S = sim.current;

    const frame = (now: number) => {
      raf = 0;
      if (!visible) return;
      const dt = Math.min(0.033, (now - prev) / 1000);
      prev = now;
      const { w, h, cw } = size;
      const isMobile = w < 640;
      const y0 = isMobile ? 20 : Math.max(24, Math.min(44, h * 0.08));
      const d = drag.current;

      let lineVel: number;
      if (d && d.moved) {
        lineVel = d.v * 1000;
      } else {
        const before = S.off;
        [S.off, S.vel] = springStep(S.off, S.vel, S.target, dt);
        lineVel = -(S.off - before) / Math.max(dt, 1e-3);
      }

      const o = opts.current;
      const activeSag = isMobile ? Math.min(o.sag, 26) : o.sag;
      const g = osReduce || o.reduceMotion ? 0 : o.swing;
      const near = nearestAt(S.off, spacing, n);

      for (let i = 0; i < n; i++) {
        const el = cards.current[i];
        if (!el) continue;
        const x = w / 2 + i * spacing - S.off;
        if (x < -cw * 1.5 || x > w + cw * 1.5) {
          if (el.style.visibility !== "hidden") {
            el.style.visibility = "hidden";
          }
          continue;
        }
        if (el.style.visibility !== "visible") {
          el.style.visibility = "visible";
        }
        let a = S.a[i] || 0;
        let av = S.w[i] || 0;
        [a, av] = swingStep(a, av, lineVel, dt, g);
        if (g) a += Math.sin(now / 1300 + i * 1.7) * 0.0009 * g;
        S.a[i] = a;
        S.w[i] = av;
        const y = stringY(x, w, y0, activeSag) - 6;
        el.style.transform =
          "translate3d(" +
          (x - cw / 2).toFixed(1) +
          "px," +
          y.toFixed(1) +
          "px,0) rotate(" +
          a.toFixed(4) +
          "rad)";
        const nextZ = String(i === near ? n + 1 : n - Math.abs(i - near));
        if (el.style.zIndex !== nextZ) {
          el.style.zIndex = nextZ;
        }
      }

      if (near !== activeRef.current) {
        activeRef.current = near;
        setActive(near);
      }
      raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        setInView(visible);
        if (visible && !raf) {
          prev = performance.now();
          raf = requestAnimationFrame(frame);
        }
      },
      { rootMargin: "120px 0px" }
    );

    io.observe(root);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [size, spacing, n]);

  // Autoplay while visible & idle
  React.useEffect(() => {
    if (!autoplay || n < 2 || reduceMotion) return;
    const t = window.setInterval(() => {
      if (
        document.hidden ||
        !inView ||
        drag.current ||
        performance.now() - lastTouch.current < autoplay
      ) {
        return;
      }
      goTo(activeRef.current >= n - 1 ? 0 : activeRef.current + 1);
    }, autoplay);
    return () => window.clearInterval(t);
  }, [autoplay, n, goTo, inView, reduceMotion]);

  const onDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest(".pl-bar")) return;
    lastTouch.current = performance.now();
    drag.current = {
      x: e.clientX,
      off: sim.current.off,
      lx: e.clientX,
      lt: e.timeStamp,
      v: 0,
      moved: false,
    };
  };

  const onMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    if (!d.moved && Math.abs(dx) > 6) {
      d.moved = true;
      setDragging(true);
      try {
        stageRef.current?.setPointerCapture(e.pointerId);
      } catch {
        // Ignore capture failure on synthetic pointers
      }
    }
    if (!d.moved) return;
    const dt = Math.max(1, e.timeStamp - d.lt);
    d.v = 0.7 * ((e.clientX - d.lx) / dt) + 0.3 * d.v;
    d.lx = e.clientX;
    d.lt = e.timeStamp;
    const max = (n - 1) * spacing;
    let off = d.off - dx;
    if (off < 0) off *= 0.35;
    if (off > max) off = max + (off - max) * 0.35;
    sim.current.off = off;
  };

  const onUp = (e: React.PointerEvent) => {
    const d = drag.current;
    drag.current = null;
    lastTouch.current = performance.now();
    if (!d) return;
    if (d.moved) {
      setDragging(false);
      sim.current.vel = -d.v * 1000;
      goTo(nearestAt(sim.current.off - d.v * 180, spacing, n));
      return;
    }
    const card = (e.target as HTMLElement).closest("[data-i]");
    if (card) {
      const idx = Number(card.getAttribute("data-i"));
      if (idx === activeRef.current) {
        onSelectSlide?.(idx);
      } else {
        goTo(idx);
      }
    }
  };

  const step = (dir: number) => {
    lastTouch.current = performance.now();
    goTo(clamp(activeRef.current + dir, 0, n - 1));
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      step(1);
      e.preventDefault();
    } else if (e.key === "ArrowLeft") {
      step(-1);
      e.preventDefault();
    } else if (e.key === "Enter") {
      onSelectSlide?.(activeRef.current);
      e.preventDefault();
    }
  };

  const currentSlide = slides[active] || {};

  return (
    <div
      ref={rootRef}
      className={["pl-root", className].filter(Boolean).join(" ")}
      style={{
        height,
        ["--pl-bg" as string]: background,
        ["--pl-ink" as string]: ink,
        ["--pl-cw" as string]: size.cw + "px",
        ...style,
      }}
      data-drag={dragging ? "1" : "0"}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={onKey}
    >
      <style>{PL_CSS}</style>

      {/* Dedicated Hanging Stage: Sagging Twine + Swinging Pegged Polaroid Prints */}
      <div
        ref={stageRef}
        className="pl-stage"
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
      >
        <svg className="pl-string" aria-hidden="true">
          <path
            ref={pathRef}
            fill="none"
            stroke={string}
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeDasharray="1 0"
            opacity="0.72"
          />
        </svg>

        {slides.map((sl, i) => {
          const isCurrent = i === active;
          const showVideo = Boolean(sl.video) && !reduceMotion && !saveData;
          return (
            <div
              key={sl.id || i}
              className="pl-card"
              data-i={i}
              data-on={isCurrent ? "1" : "0"}
              ref={(el) => {
                cards.current[i] = el;
              }}
              aria-hidden={isCurrent ? undefined : true}
              title={
                isCurrent
                  ? `Inspect ${sl.title || "project"} case study`
                  : `Center ${sl.title || "print"}`
              }
            >
              <div className="pl-print">
                <div className="pl-shot">
                  {showVideo && sl.video ? (
                    <video
                      ref={(el) => {
                        videoRefs.current[i] = el;
                      }}
                      src={inView ? optimizeVideoUrl(sl.video, 520) : undefined}
                      poster={srcs[i] || undefined}
                      muted
                      playsInline
                      loop
                      preload="metadata"
                      onTimeUpdate={(ev) => {
                        if (ev.currentTarget.currentTime >= 5.5) {
                          ev.currentTarget.currentTime = 0;
                        }
                      }}
                    />
                  ) : srcs[i] ? (
                    <img
                      src={srcs[i]}
                      alt={sl.alt || sl.title || ""}
                      loading="lazy"
                      decoding="async"
                      fetchPriority={isCurrent && inView ? "high" : "low"}
                      referrerPolicy="no-referrer"
                      draggable={false}
                    />
                  ) : null}

                  {/* Subtle top badge for Live Reel or Category */}
                  {sl.badge && (
                    <span className="absolute top-2.5 left-2.5 z-10 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#151218]/80 border border-white/15 text-[10px] font-mono font-semibold text-[#00e5ff] pointer-events-none">
                      {sl.video && <Play size={9} fill="currentColor" />}
                      <span>{sl.badge}</span>
                    </span>
                  )}
                </div>

                {/* Handwritten Polaroid Chin Note */}
                <div className="pl-note">
                  <span className="pl-note-title">{sl.title || ""}</span>
                  <span className="pl-note-idx">{pad2(i + 1)}</span>
                </div>
              </div>

              {/* Wooden Clothespin Peg */}
              <div className="pl-peg" />
            </div>
          );
        })}
      </div>

      {/* Editorial Bottom Caption, Inspect CTA & Animated Controls (cleanly separated below stage) */}
      <div className="pl-bar">
        <div className="pl-cap" key={active}>
          {currentSlide.meta && (
            <span className="font-mono text-[11px] font-semibold text-[var(--cutout-black-letter)] tracking-wide mb-1 truncate">
              {currentSlide.meta}
            </span>
          )}
          {currentSlide.title && (
            <span className="font-editorial font-black text-2xl sm:text-[28px] text-[#f6f4f6] leading-tight truncate">
              {currentSlide.title}
            </span>
          )}
          {currentSlide.caption && (
            <span className="mt-1 text-xs sm:text-[13px] text-white/70 leading-relaxed line-clamp-2 max-w-xl">
              {currentSlide.caption}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {onSelectSlide && (
            <button
              type="button"
              onClick={() => onSelectSlide(active)}
              className="group btn-anim-aesthetic-dark inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-white/30 bg-white/[0.06] text-white text-xs font-semibold cursor-pointer whitespace-nowrap"
            >
              <span className="relative z-10">{actionLabel}</span>
              <ArrowUpRight
                size={14}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          )}

          <span
            className="font-mono text-xs tracking-[0.14em] text-white/55 tabular-nums hidden sm:inline"
            aria-hidden="true"
          >
            <b className="text-white font-semibold">{pad2(active + 1)}</b> /{" "}
            {pad2(n)}
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous project print"
              className="group btn-anim-aesthetic-dark w-10 h-10 rounded-full border border-white/35 bg-white/[0.04] text-white flex items-center justify-center cursor-pointer"
            >
              <ArrowLeft
                size={15}
                className="relative z-10 transition-transform duration-300 group-hover:-translate-x-0.5"
              />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next project print"
              className="group btn-anim-aesthetic-dark w-10 h-10 rounded-full border border-white/35 bg-white/[0.04] text-white flex items-center justify-center cursor-pointer"
            >
              <ArrowRight
                size={15}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="pl-sr" aria-live="polite">
        {"Project " +
          (active + 1) +
          " of " +
          n +
          (currentSlide.title ? ": " + currentSlide.title : "")}
      </div>
    </div>
  );
}
