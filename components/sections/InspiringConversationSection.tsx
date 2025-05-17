"use client";

import Image from "next/image";
import { RadioWavesAnimation } from "@/components/slides/RadioWaves";

interface InspiringConversationSectionProps {
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

export const InspiringConversationSection = ({
  currentSection,
  setCurrentSection,
  isVisible,
}: InspiringConversationSectionProps) => {
  const handleRestart = () => {
    if (setCurrentSection) {
      setCurrentSection("hero");
    }
  };

  return (
    <section
      className={`fixed top-0 left-0 w-full h-screen ${
        isVisible ? "z-10" : "z-0 pointer-events-none"
      }`}
      onClick={handleRestart}
    >
      <Image
        src="/assets/images/DZRT-bg.svg"
        alt="Background"
        width={951}
        height={1426}
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[500%]"
      />
      <div className="absolute top-[50%] right-[47%] translate-x-1/2 -translate-y-1/12 flex flex-col items-end">
        <div className="-mb-12 relative">
          <p className="font-semibold text-[70px] 2xl:text-[130px]">
            مكــــــالمة
          </p>{" "}
          <div className="absolute top-1/2 left-0 -translate-x-[150%] -translate-y-[55%] scale-[75%]">
            <Image
              src="/assets/images/radio.svg"
              alt="Radio"
              width={484}
              height={464}
            />
            <RadioWavesAnimation />
          </div>
        </div>
        <p className="font-semibold text-[130px] 2xl:text-[200px]">
          ملهمــــــــــــــــة
        </p>
        <div className="text-primary font-semibold text-[65px] 2xl:text-[105px] flex flex-row-reverse gap-6 w-full justify-end -mt-12">
          <p>تُقدِّم محتوى</p>
          <p>مبتكر</p>
          <p>ومتنوع</p>
        </div>
      </div>
    </section>
  );
};
