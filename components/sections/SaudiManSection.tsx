"use client";

import { useSaudiManToStoryTransition } from "@/hooks/section-transitions";

interface SaudiManSectionProps {
  currentSection:
    | "hero"
    | "saudiMan"
    | "storyBegins"
    | "messageImpact"
    | "inspiringConversation";
  setCurrentSection: (
    section:
      | "hero"
      | "saudiMan"
      | "storyBegins"
      | "messageImpact"
      | "inspiringConversation"
  ) => void;
  isVisible: boolean;
}

export const SaudiManSection = ({
  currentSection,
  setCurrentSection,
  isVisible,
}: SaudiManSectionProps) => {
  const { transitionToStoryBegins } = useSaudiManToStoryTransition({
    currentSection,
    setCurrentSection,
  });

  return (
    <section
      className={`fixed top-0 left-0 w-full h-screen ${
        isVisible ? "z-10" : "z-0 pointer-events-none"
      }`}
      onClick={transitionToStoryBegins}
    >
      {/* This section is empty because the saudi-man image is in the page.tsx component */}
    </section>
  );
};
