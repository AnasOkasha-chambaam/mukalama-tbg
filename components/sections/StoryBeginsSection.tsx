"use client";

import Image from "next/image";

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
          width={298}
          height={431}
          className="scale-[75%] -translate-y-1/5 rotate-[10.48deg]"
        />
        <p className="absolute top-1/2 left-1/2 translate-y-[170%] z-10 -translate-x-1/2 text-3xl lg:text-5xl font-bold rtl text-center w-max">
          حيث تبدأ الحكاية
        </p>
        <p className="absolute top-1/2 left-1/2 -translate-y-1/6 -translate-x-1/2 text-[100px] lg:text-[140px] font-semibold rtl text-center text-primary w-max">
          بمكالمة قصيرة
        </p>
      </div>
    </section>
  );
};
