"use client";

import { useSectionTransition } from "@/hooks/section-transitions";

interface HeroSectionProps {
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

export const HeroSection = ({
  currentSection,
  setCurrentSection,
  isVisible,
}: HeroSectionProps) => {
  const { transitionToSaudiMan, heroHeadingRef, heroParagraphRef } =
    useSectionTransition({
      currentSection,
      setCurrentSection,
    });

  return (
    <section
      className={`fixed top-0 left-0 w-full h-screen ${
        isVisible ? "z-10" : "z-0 pointer-events-none"
      }`}
      onClick={transitionToSaudiMan}
    >
      <main className="relative min-h-screen flex flex-col items-center justify-center text-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center">
          <h2
            ref={heroHeadingRef}
            className="text-2xl lg:text-3xl 2xl:text-5xl font-semibold rtl text-center"
            dir="rtl"
          >
            أهلاً بك في <span className="text-primary">مُكالَمة،</span>
          </h2>
          <p
            ref={heroParagraphRef}
            className="text-xs lg:text-sm 2xl:text-[24.65px] font-medium rtl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[30px] z-10 w-max"
            dir="rtl"
          >
            منصتك لاكتشاف أفكار مبتكرة <br /> تلهم التغيير الإيجابي.
          </p>
        </div>
      </main>
    </section>
  );
};
