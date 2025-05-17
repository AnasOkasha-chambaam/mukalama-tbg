"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Header } from "@/components/layout";
import {
  HeroSection,
  SaudiManSection,
  StoryBeginsSection,
  MessageImpactSection,
  InspiringConversationSection,
} from "@/components/sections";

type Section =
  | "hero"
  | "saudiMan"
  | "storyBegins"
  | "messageImpact"
  | "inspiringConversation";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<Section>("hero");
  const wavesRef = useRef<HTMLImageElement>(null);
  const saudiManRef = useRef<HTMLImageElement>(null);

  // Animation controller for handling transitions
  useEffect(() => {
    // Set up the initial states
    if (wavesRef.current) {
      gsap.set(wavesRef.current, { scale: 1 });
    }
    if (saudiManRef.current) {
      gsap.set(saudiManRef.current, { scale: 0.125, opacity: 0 });
    }

    // Handle section transitions
    switch (currentSection) {
      case "hero":
        // Reset everything to initial state
        gsap.to(wavesRef.current, { scale: 1, duration: 0.5 });
        gsap.to(saudiManRef.current, {
          scale: 0.125,
          opacity: 0,
          duration: 0.5,
        });
        break;

      case "saudiMan":
        // Show the Saudi Man
        gsap.to(wavesRef.current, { scale: 1.44, duration: 0.5 });
        gsap.to(saudiManRef.current, {
          scale: 0.75,
          opacity: 1,
          duration: 0.5,
        });
        break;

      case "storyBegins":
        // Hide the Saudi Man and reset waves
        gsap.to(wavesRef.current, { scale: 1, opacity: 0.5, duration: 0.5 });
        gsap.to(saudiManRef.current, {
          scale: 0.125,
          opacity: 0,
          duration: 0.5,
        });
        break;

      // Add more cases for other sections if needed
    }
  }, [currentSection]);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Header />

      {/* Shared elements that will be animated */}
      <Image
        aria-hidden="true"
        src="/assets/icons/waves.svg"
        alt="Waves"
        width={951}
        height={951}
        id="waves"
        ref={wavesRef}
        className="fixed top-1/2 left-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2 h-[90vh] w-auto aspect-square z-[5]"
      />

      <Image
        aria-hidden="true"
        src="/assets/images/saudi-man.svg"
        alt="Saudi Man"
        id="saudi-man"
        ref={saudiManRef}
        width={640}
        height={567}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 z-[6] opacity-0"
      />

      {/* All sections are rendered, but only the current one is visible/interactive */}
      <HeroSection
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        isVisible={currentSection === "hero"}
      />

      <SaudiManSection
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        isVisible={currentSection === "saudiMan"}
      />
      <div className="hidden">
        <StoryBeginsSection
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          isVisible={currentSection === "storyBegins"}
        />

        <MessageImpactSection
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          isVisible={currentSection === "messageImpact"}
        />

        <InspiringConversationSection
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          isVisible={currentSection === "inspiringConversation"}
        />
      </div>

      {/* Debug overlay to show current section - can be removed in production */}
      <div className="fixed bottom-4 right-4 bg-black/70 text-white px-4 py-2 text-sm rounded z-50">
        Current: {currentSection}
      </div>
    </div>
  );
}
