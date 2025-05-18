"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

type Section =
  | "hero"
  | "saudiMan"
  | "storyBegins"
  | "messageImpact"
  | "inspiringConversation";

interface SectionTransitionProps {
  currentSection: Section;
  setCurrentSection: (section: Section) => void;
}

export const useSectionTransition = ({
  currentSection,
  setCurrentSection,
}: SectionTransitionProps) => {
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  const heroParagraphRef = useRef<HTMLParagraphElement>(null);

  const transitionToSaudiMan = () => {
    const wavesImage = document.querySelector("#waves");
    const saudiManImage = document.querySelector("#saudi-man");

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSection("saudiMan");
      },
    });

    tl.to(
      heroHeadingRef.current,
      {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      0
    );

    tl.to(
      heroParagraphRef.current,
      {
        y: "-50%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      0
    );

    tl.to(
      wavesImage,
      {
        scale: 1.44,
        duration: 1,
        ease: "power2.out",
      },
      0
    );

    tl.to(
      saudiManImage,
      {
        scale: 0.55,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      },
      0
    );

    tl.to(
      saudiManImage,
      {
        scale: 0.75,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      0.4
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Backspace") {
        const wavesImage = document.querySelector("#waves");
        const saudiManImage = document.querySelector("#saudi-man");

        if (currentSection !== "hero") {
          if (heroHeadingRef.current && heroParagraphRef.current) {
            gsap.set(heroHeadingRef.current, { y: 0, opacity: 1 });
            gsap.set(heroParagraphRef.current, { y: 0, opacity: 1 });
            gsap.set(wavesImage, { scale: 1, opacity: 1 });
            gsap.set(saudiManImage, { scale: 0.55, opacity: 0 });
          }
          const prevSection = getPreviousSection(currentSection);
          setCurrentSection(prevSection);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSection, setCurrentSection]);

  const getPreviousSection = (section: Section): Section => {
    switch (section) {
      case "saudiMan":
        return "hero";
      case "storyBegins":
        return "saudiMan";
      case "messageImpact":
        return "storyBegins";
      case "inspiringConversation":
        return "messageImpact";
      default:
        return "hero";
    }
  };

  return {
    transitionToSaudiMan,
    heroHeadingRef,
    heroParagraphRef,
  };
};
