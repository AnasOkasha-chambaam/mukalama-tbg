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
    // Create a timeline for smooth animation sequence
    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSection("saudiMan");
      },
    });

    // Get the elements from the DOM directly since they're now in the page component
    const wavesElement = document.getElementById("waves");
    const saudiManElement = document.getElementById("saudi-man");

    // First animation - Heading & Paragraph fade out while waves scale up
    tl.to(
      heroHeadingRef.current,
      {
        y: "-15.85%", // Using percentage change instead of fixed values
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      0
    );

    tl.to(
      heroParagraphRef.current,
      {
        y: "-11.36%", // Using percentage change instead of fixed values
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      0
    );

    tl.to(
      wavesElement,
      {
        scale: 1.28,
        duration: 0.5,
        ease: "power2.out",
      },
      0
    );

    // Second animation - Waves continue scaling while Saudi Man fades in and scales up
    tl.to(wavesElement, {
      scale: 1.44,
      duration: 0.7,
      ease: "power2.out",
    });

    tl.to(
      saudiManElement,
      {
        scale: 0.75,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.7"
    ); // Start this animation at the same time as the previous one
  };

  useEffect(() => {
    // Set initial states
    if (heroHeadingRef.current && heroParagraphRef.current) {
      gsap.set(heroHeadingRef.current, { y: 0, opacity: 1 });
      gsap.set(heroParagraphRef.current, { y: 0, opacity: 1 });
    }

    // Set up listeners to handle back navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Backspace") {
        // If we're not on the hero section, allow going back
        if (currentSection !== "hero") {
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
