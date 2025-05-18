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
    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSection("storyBegins");
      },
    });

    const saudiManElement = document.getElementById("saudi-man");
    const storyBeginsTextElement = document.getElementById("story-begins-p");
    const storyBeginsText2ContainerElement = document.getElementById(
      "story-begins-p-2-container"
    );
    const wavesElement = document.getElementById("waves");

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

    const leftRevealLine = document.getElementById("left-reveal-line");
    const rightRevealLine = document.getElementById("right-reveal-line");

    tl.to(
      leftRevealLine,
      {
        left: "-50%",
        duration: 0.9,
        delay: 0.8,
        ease: "power2.inOut",
      },
      1.2
    );

    tl.to(
      rightRevealLine,
      {
        right: "-50%",
        duration: 0.9,
        delay: 0.8,
        ease: "power2.inOut",
      },
      1.2
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
