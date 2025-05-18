"use client";

import gsap from "gsap";

type Section =
  | "hero"
  | "saudiMan"
  | "storyBegins"
  | "messageImpact"
  | "inspiringConversation";

interface StoryToMessageTransitionProps {
  currentSection: Section;
  setCurrentSection: (section: Section) => void;
}

export const useStoryToMessageTransition = ({
  currentSection,
  setCurrentSection,
}: StoryToMessageTransitionProps) => {
  const transitionToMessageImpact = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSection("messageImpact");
      },
    });

    const storyBeginsTextElement = document.getElementById("story-begins-p");
    const storyBeginsText2Container = document.getElementById(
      "story-begins-p-2-container"
    );
    const wavesElement = document.getElementById("waves");
    const mobileElement = document.getElementById("mobile-1");
    const messageImpactElement = document.getElementById(
      "message-impact-container"
    );

    tl.to(
      mobileElement,
      {
        y: "-110%",
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      0
    );

    tl.to(
      storyBeginsText2Container,
      {
        y: "-90%",
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      0
    );

    tl.to(
      storyBeginsTextElement,
      {
        y: "-400%",
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      0
    );

    tl.to(
      wavesElement,
      {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      0
    );

    tl.to(
      messageImpactElement,
      {
        opacity: 1,
        y: "-16.67%",
        duration: 1,
        ease: "power2.inOut",
      },
      0
    );
  };

  return {
    transitionToMessageImpact,
  };
};
