"use client";

import Image from "next/image";
import { useSaudiManToStoryTransition } from "@/hooks/section-transitions";

interface StoryBeginsSectionProps {
  currentSection?:
    | "hero"
    | "saudiMan"
    | "storyBegins"
    | "messageImpact"
    | "inspiringConversation";
  setCurrentSection?: (
    section:
      | "hero"
      | "saudiMan"
      | "storyBegins"
      | "messageImpact"
      | "inspiringConversation"
  ) => void;
  isVisible?: boolean;
}

export const StoryBeginsSection = ({
  currentSection,
  setCurrentSection,
  isVisible,
}: StoryBeginsSectionProps) => {
  const handleNextSection = () => {
    if (setCurrentSection) {
      setCurrentSection("messageImpact");
    }
  };

  return (
    <section
      className={`fixed top-0 left-0 w-full h-screen ${
        isVisible ? "z-10" : "z-0 pointer-events-none"
      }`}
      onClick={handleNextSection}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center">
        <Image
          aria-hidden="true"
          src="/assets/images/mobile-1.png"
          alt="Mobile"
          id="mobile-1"
          width={298}
          height={431}
          className="scale-[65%] opacity-0"
        />
        <p
          className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 text-3xl lg:text-5xl font-bold rtl text-center w-max opacity-0"
          id="story-begins-p"
        >
          حيث تبدأ الحكاية
        </p>
        <div
          id="story-begins-p-2-container"
          className="transition-[width] overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 h-[160px] lg:h-[200px] flex items-center justify-center"
        >
          <div
            id="left-reveal-line"
            className="absolute inset-y-0 left-0 w-1/2 bg-background z-10 h-full"
          ></div>
          <div
            id="right-reveal-line"
            className="absolute inset-y-0 right-0 w-1/2 bg-background z-10 h-full"
          ></div>
          {/* <p
            className="absolute inset-0 text-[100px] lg:text-[140px] font-semibold rtl text-center opacity-25 w-max"
            id="story-begins-p-2"
          >
            بمكالمة قصيرة
          </p> */}
          <p
            className="text-[100px] lg:text-[140px] font-semibold rtl text-center text-primary w-max"
            id="story-begins-p-2"
          >
            بمكالمة قصيرة
          </p>
        </div>
      </div>
    </section>
  );
};
