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
  // Refs for elements in HeroSection
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  const heroParagraphRef = useRef<HTMLParagraphElement>(null);

  const transitionToSaudiMan = () => {
    const wavesImage = document.querySelector("#waves");
    const saudiManImage = document.querySelector("#saudi-man");

    // Create a timeline for text animations only
    const tl = gsap.timeline({
      onComplete: () => {
        // Signal to the parent component to start the next phase of animation
        setCurrentSection("saudiMan");
      },
    });

    // Only animate the text elements here
    tl.to(
      heroHeadingRef.current,
      {
        y: "-100%", // Using percentage change instead of fixed values
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      0
    );

    tl.to(
      heroParagraphRef.current,
      {
        y: "-50%", // Using percentage change instead of fixed values
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
    // Set up listeners to handle back navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Backspace") {
        const wavesImage = document.querySelector("#waves");
        const saudiManImage = document.querySelector("#saudi-man");
        // If we're not on the hero section, allow going back
        if (currentSection !== "hero") {
          // Set initial states
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

  // Helper function to get the previous section for navigation
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
