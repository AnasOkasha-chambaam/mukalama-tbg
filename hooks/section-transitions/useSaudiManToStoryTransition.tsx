"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

type Section =
  | "hero"
  | "saudiMan"
  | "storyBegins"
  | "messageImpact"
  | "inspiringConversation";

interface SaudiManToStoryTransitionProps {
  currentSection: Section;
  setCurrentSection: (section: Section) => void;
}

export const useSaudiManToStoryTransition = ({
  currentSection,
  setCurrentSection,
}: SaudiManToStoryTransitionProps) => {
  const transitionToStoryBegins = () => {
    // Create a timeline for text animations
    const tl = gsap.timeline({
      onComplete: () => {
        // Signal to the parent component to start the next phase of animation
        setCurrentSection("storyBegins");
      },
    });

    // Get the saudi-man element from the DOM
    const saudiManElement = document.getElementById("saudi-man");
    const storyBeginsTextElement = document.getElementById("story-begins-p");
    const storyBeginsText2ContainerElement = document.getElementById(
      "story-begins-p-2-container"
    );
    const wavesElement = document.getElementById("waves");
    const mobileElement = document.getElementById("mobile-1");

    // First phase - animate the saudi-man
    tl.to(
      saudiManElement,
      {
        scale: 0.55,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      },
      0
    );

    tl.to(
      storyBeginsTextElement,
      {
        opacity: 0,
        y: "50%",
        duration: 0.5,
        ease: "none",
      },
      0
    );

    tl.to(
      storyBeginsTextElement,
      {
        opacity: 1,
        y: "0%",
        duration: 0.7,
        ease: "none",
      },
      0.5
    );

    tl.to(
      storyBeginsText2ContainerElement,
      {
        // y: "-50%",
        opacity: 0,
        duration: 0.7,
        ease: "power2.inOut",
      },
      0.5
    );

    tl.to(
      storyBeginsTextElement,
      {
        opacity: 1,
        y: "170%",
        duration: 0.9,
        delay: 0.8,
        ease: "power2.inOut",
      },
      1.2
    );
    tl.to(
      wavesElement,
      {
        rotate: "-45deg",
        opacity: 0.5,
        duration: 0.9,
        delay: 0.8,
        ease: "power2.inOut",
      },
      1.2
    );

    // Get the reveal lines
    const leftRevealLine = document.getElementById("left-reveal-line");
    const rightRevealLine = document.getElementById("right-reveal-line");

    // Set initial positions (covering the text)
    // gsap.set(leftRevealLine, { left: "50%" });
    // gsap.set(rightRevealLine, { right: "50%" });

    // Animate lines moving outward to reveal text
    tl.to(
      leftRevealLine,
      {
        left: "-50%", // Move off-screen to the left
        duration: 0.9,
        delay: 0.8,
        ease: "power2.inOut",
      },
      1.2
    );

    tl.to(
      rightRevealLine,
      {
        right: "-50%", // Move off-screen to the right
        duration: 0.9,
        delay: 0.8,
        ease: "power2.inOut",
      },
      1.2 // Same time as left line for symmetrical reveal
    );
    tl.to(
      storyBeginsText2ContainerElement,
      {
        y: "-16.67%",
        opacity: 1,
        duration: 0.9,
        delay: 0.8,
        ease: "power2.inOut",
      },
      1.2
    );

    const mobile1Element = document.getElementById("mobile-1");
    tl.to(
      mobile1Element,
      {
        x: "10%",
        duration: 0.5,
        ease: "power2.inOut",
      },
      0.5
    );
    tl.to(
      mobile1Element,
      {
        y: "-20%",
        x: "10%",
        scale: 0.75,
        opacity: 1,
        rotate: "10.48deg",
        duration: 0.9,
        delay: 0.8,
        ease: "power2.inOut",
      },
      1.2
    );
  };

  return {
    transitionToStoryBegins,
  };
};
