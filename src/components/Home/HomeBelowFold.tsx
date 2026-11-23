import type { ProjectItem } from "../../data/projectsData";
import {
  BrandStickerMarquee,
  BrandsAndContactSection,
  ByTheNumbersShowcase,
  DarkPortfolioCarousel,
  ReferencesSection,
} from "../Editorial/EditorialSections";

export default function HomeBelowFold({
  onSelectProject,
}: {
  onSelectProject: (project: ProjectItem) => void;
}) {
  return (
    <>
      {/* Dark Torn-Paper Horizontal Portfolio Carousel ("The portfolio") */}
      <DarkPortfolioCarousel onSelectProject={onSelectProject} />

      {/* Dark Full-Bleed Client & Project Sticker Ribbon Marquee */}
      <BrandStickerMarquee />

      {/* "Production, By The Numbers" Overlapping Device Mockups + 2x2 Metrics */}
      <ByTheNumbersShowcase />

      {/* "References — What they say" Stacked Editorial Quote Cards */}
      <ReferencesSection layout="stacked" showHeading />

      {/* "Brands and Contact — Let's talk" Floating Sticker Cloud + Oversized Email */}
      <BrandsAndContactSection />
    </>
  );
}
