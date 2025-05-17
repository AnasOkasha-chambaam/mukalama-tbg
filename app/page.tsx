"use client";

import { Header } from "@/components/layout";
import {
  HeroSection,
  SaudiManSection,
  StoryBeginsSection,
  MessageImpactSection,
  InspiringConversationSection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      <HeroSection />
      <SaudiManSection />
      <StoryBeginsSection />
      <MessageImpactSection />
      <InspiringConversationSection />
    </div>
  );
}
