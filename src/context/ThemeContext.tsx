import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type PortfolioMood = "violet" | "cyan" | "mono";

interface ThemeContextValue {
  mood: PortfolioMood;
  setMood: (mood: PortfolioMood) => void;
  reduceMotion: boolean;
  setReduceMotion: (val: boolean) => void;
  toggleReduceMotion: () => void;
  isBookingOpen: boolean;
  openBooking: (initialTopic?: string) => void;
  closeBooking: () => void;
  bookingTopic: string;
  visitorName: string;
  showWelcomeModal: boolean;
  saveVisitorName: (name: string) => void;
  skipWelcome: () => void;
  reopenWelcome: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const MOOD_STORAGE_KEY = "buildwithtobi_mood";
const MOTION_STORAGE_KEY = "buildwithtobi_reduce_motion";
const VISITOR_NAME_KEY = "buildwithtobi_visitor_name";
const VISITOR_SEEN_KEY = "buildwithtobi_visitor_seen";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mood, setMoodState] = useState<PortfolioMood>(() => {
    try {
      const saved = localStorage.getItem(MOOD_STORAGE_KEY) as PortfolioMood | null;
      if (saved === "violet" || saved === "cyan" || saved === "mono") return saved;
    } catch {
      // Ignore storage access errors
    }
    return "violet";
  });

  const [reduceMotion, setReduceMotionState] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(MOTION_STORAGE_KEY);
      if (saved !== null) return saved === "true";
      return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    } catch {
      return false;
    }
  });

  const [visitorName, setVisitorName] = useState<string>(() => {
    try {
      return localStorage.getItem(VISITOR_NAME_KEY) || "";
    } catch {
      return "";
    }
  });

  const [showWelcomeModal, setShowWelcomeModal] = useState<boolean>(() => {
    try {
      return localStorage.getItem(VISITOR_SEEN_KEY) !== "true";
    } catch {
      return false;
    }
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTopic, setBookingTopic] = useState("Web App / MVP");

  useEffect(() => {
    document.documentElement.setAttribute("data-mood", mood);
    try {
      localStorage.setItem(MOOD_STORAGE_KEY, mood);
    } catch {
      // Ignore
    }
  }, [mood]);

  useEffect(() => {
    if (reduceMotion) {
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.classList.remove("reduce-motion");
    }
    try {
      localStorage.setItem(MOTION_STORAGE_KEY, String(reduceMotion));
    } catch {
      // Ignore
    }
  }, [reduceMotion]);

  const setMood = useCallback((nextMood: PortfolioMood) => setMoodState(nextMood), []);
  const setReduceMotion = useCallback((val: boolean) => setReduceMotionState(val), []);
  const toggleReduceMotion = useCallback(
    () => setReduceMotionState((prev) => !prev),
    []
  );

  const openBooking = useCallback((initialTopic?: string) => {
    if (initialTopic) setBookingTopic(initialTopic);
    setIsBookingOpen(true);
  }, []);

  const closeBooking = useCallback(() => setIsBookingOpen(false), []);

  const saveVisitorName = useCallback((rawName: string) => {
    const cleaned = rawName.trim().slice(0, 32);
    const formatted = cleaned
      ? cleaned.charAt(0).toUpperCase() + cleaned.slice(1)
      : "";
    setVisitorName(formatted);
    setShowWelcomeModal(false);
    try {
      localStorage.setItem(VISITOR_SEEN_KEY, "true");
      if (formatted) {
        localStorage.setItem(VISITOR_NAME_KEY, formatted);
      } else {
        localStorage.removeItem(VISITOR_NAME_KEY);
      }
    } catch {
      // Ignore
    }
  }, []);

  const skipWelcome = useCallback(() => {
    setShowWelcomeModal(false);
    try {
      localStorage.setItem(VISITOR_SEEN_KEY, "true");
    } catch {
      // Ignore
    }
  }, []);

  const reopenWelcome = useCallback(() => {
    setShowWelcomeModal(true);
  }, []);

  const contextValue = useMemo<ThemeContextValue>(
    () => ({
      mood,
      setMood,
      reduceMotion,
      setReduceMotion,
      toggleReduceMotion,
      isBookingOpen,
      openBooking,
      closeBooking,
      bookingTopic,
      visitorName,
      showWelcomeModal,
      saveVisitorName,
      skipWelcome,
      reopenWelcome,
    }),
    [
      mood,
      setMood,
      reduceMotion,
      setReduceMotion,
      toggleReduceMotion,
      isBookingOpen,
      openBooking,
      closeBooking,
      bookingTopic,
      visitorName,
      showWelcomeModal,
      saveVisitorName,
      skipWelcome,
      reopenWelcome,
    ]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
