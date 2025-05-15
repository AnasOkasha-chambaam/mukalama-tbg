"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  const waveContainerRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize GSAP animations
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Create wave animation
    const waves = waveContainerRef.current?.querySelectorAll(".wave");

    if (waves) {
      tl.fromTo(
        waves,
        {
          opacity: 0,
          scale: 0.85,
        },
        {
          opacity: 0.5,
          scale: 1,
          stagger: 0.05,
          duration: 1.2,
        }
      );
    }

    // Animate header elements
    const headerItems = headerRef.current?.querySelectorAll(".header-item");
    if (headerItems) {
      tl.fromTo(
        headerItems,
        { opacity: 0 },
        { opacity: 1, stagger: 0.1, duration: 0.8 },
        0.2
      );
    }

    // Animate title and subtitle
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      0.5
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.8
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6 },
        1
      );

    // Continuous subtle pulsing animation for waves
    if (waves) {
      gsap.to(waves, {
        scale: 1.05,
        opacity: 0.55,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.2,
          from: "center",
        },
      });
    }

    return () => {
      // Cleanup animations
      tl.kill();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header */}
      <header
        ref={headerRef}
        className="flex justify-between items-center mx-20 mt-10 rtl"
        dir="rtl"
      >
        <Image src="/logo.png" alt="Mukalama" width={141.56} height={40} />
        <div className="flex gap-[50px] items-center">
          <div className="header-item flex gap-[25px] items-center">
            <Image
              src="/assets/icons/email.icon.png"
              alt="Email"
              className="w-auto h-[20px]"
              width={20}
              height={20}
            />
            <Image
              src="/assets/icons/instagram.icon.png"
              alt="Instagram"
              className="w-auto h-[20px]"
              width={20}
              height={20}
            />
            <Image
              src="/assets/icons/phone.icon.png"
              alt="Phone"
              className="w-auto h-[20px]"
              width={20}
              height={20}
            />
          </div>
          <Button className="flex-col" size={"icon"} variant="ghost">
            <span className="w-7 h-[3px] bg-foreground" />
            <span className="w-7 h-[3px] bg-primary" />
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center text-center">
        {/* Circular sound waves */}
        <Image
          ref={waveContainerRef}
          aria-hidden="true"
          src="/assets/icons/waves.svg"
          alt="Waves"
          width={951}
          height={951}
          className="absolute top-1/2 left-1/2 pointer-events-none w-[951px] h-[951px] opacity-50 -translate-x-1/2 -translate-y-1/2"
        />

        {/* Title and subtitle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center justify-center gap-8">
          <h2
            ref={titleRef}
            className="text-[70px] font-semibold rtl text-center"
            dir="rtl"
          >
            أهلاً بك في <span className="text-primary">مُكالَمة،</span>
          </h2>
          <p
            ref={subtitleRef}
            className="text-[24.65px] font-medium rtl text-center"
            dir="rtl"
          >
            منصتك لاكتشاف أفكار مبتكرة <br /> تلهم التغيير الإيجابي.
          </p>
        </div>
      </main>
    </div>
  );
}
