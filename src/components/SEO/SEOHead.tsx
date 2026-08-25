import { useEffect } from "react";

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  ogType?: "website" | "article" | "profile";
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
}

const BASE_URL = "https://www.buildwithtobi.online";
const DEFAULT_IMAGE = "https://res.cloudinary.com/dw8jtwbka/image/upload/v1780309581/refined_profile_picture_keiybp.png";

export default function SEOHead({
  title,
  description,
  canonicalPath = "",
  keywords,
  ogType = "website",
  ogImage = DEFAULT_IMAGE,
  publishedTime,
  modifiedTime,
  author = "Tobiloba Akala",
  jsonLd,
}: SEOHeadProps) {
  useEffect(() => {
    // Format full canonical URL
    const cleanPath = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
    const fullCanonicalUrl = `${BASE_URL}${cleanPath === "/" ? "" : cleanPath}`;

    // 1. Update Document Title
    const formattedTitle = title.includes("Tobiloba Akala") || title.includes("BuildWithTobi") 
      ? title 
      : `${title} | Tobiloba Akala (BuildWithTobi)`;
    document.title = formattedTitle;

    // Helper to safely set or create meta tags
    const setMetaTag = (attrName: "name" | "property", attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper to safely set or create link tags
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // 2. Standard Metadata
    setMetaTag("name", "description", description);
    if (keywords) {
      setMetaTag("name", "keywords", keywords);
    }
    setMetaTag("name", "author", author);
    setMetaTag("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setLinkTag("canonical", fullCanonicalUrl);

    // 3. Open Graph Metadata
    setMetaTag("property", "og:title", formattedTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", fullCanonicalUrl);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:site_name", "BuildWithTobi");
    setMetaTag("property", "og:locale", "en_US");

    if (publishedTime) {
      setMetaTag("property", "article:published_time", publishedTime);
    }
    if (modifiedTime) {
      setMetaTag("property", "article:modified_time", modifiedTime);
    }
    if (ogType === "article" && author) {
      setMetaTag("property", "article:author", author);
    }

    // 4. Twitter / X Metadata
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:site", "@realtee1111101");
    setMetaTag("name", "twitter:creator", "@realtee1111101");
    setMetaTag("name", "twitter:title", formattedTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);
    setMetaTag("name", "twitter:url", fullCanonicalUrl);

    // 5. Dynamic JSON-LD Injection
    const SCRIPT_ID = "route-json-ld-schema";
    const existingScript = document.getElementById(SCRIPT_ID);
    if (existingScript) {
      existingScript.remove();
    }

    if (jsonLd) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(
        Array.isArray(jsonLd)
          ? { "@context": "https://schema.org", "@graph": jsonLd }
          : { "@context": "https://schema.org", ...jsonLd }
      );
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup route script on unmount
      const s = document.getElementById(SCRIPT_ID);
      if (s) s.remove();
    };
  }, [title, description, canonicalPath, keywords, ogType, ogImage, publishedTime, modifiedTime, author, jsonLd]);

  return null;
}
