"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export const RadioWavesAnimation = () => {
  const waveRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    gsap.killTweensOf(waveRefs.current);

    waveRefs.current.forEach((wave) => {
      if (wave) {
        gsap.set(wave, { autoAlpha: 0 });
      }
    });

    const tl = gsap.timeline({ repeat: -1 });

    waveRefs.current.forEach((wave, index) => {
      if (wave) {
        tl.to(
          wave,
          {
            autoAlpha: 1,
            duration: 0.5,
            delay: 0.001,
          },
          index * 0.6
        );

        tl.to(
          wave,
          {
            autoAlpha: 0,
            duration: 0.5,
            delay: 0.001,
          },
          index * 0.6 + 0.5
        );
      }
    });

    return () => {
      gsap.killTweensOf(waveRefs.current);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 translate-x-[105%] -translate-y-[65%] rotate-[6.31deg]">
      <Image
        ref={(el) => {
          waveRefs.current[0] = el;
        }}
        src="/assets/images/radio-waves.svg"
        alt="Radio Waves"
        width={310}
        height={310}
        className="opacity"
      />
      <Image
        ref={(el) => {
          waveRefs.current[0] = el;
        }}
        src="/assets/images/radio-waves (variant 2).svg"
        alt="Radio Waves"
        width={310}
        height={310}
        className="absolute top-0 left-0"
      />
      <Image
        ref={(el) => {
          waveRefs.current[1] = el;
        }}
        src="/assets/images/radio-waves (variant 3).svg"
        alt="Radio Waves"
        width={310}
        height={310}
        className="absolute top-0 left-0"
      />
      <Image
        ref={(el) => {
          waveRefs.current[2] = el;
        }}
        src="/assets/images/radio-waves (variant 4).svg"
        alt="Radio Waves"
        width={310}
        height={310}
        className="absolute top-0 left-0"
      />
      <Image
        ref={(el) => {
          waveRefs.current[3] = el;
        }}
        src="/assets/images/radio-waves.svg"
        alt="Radio Waves"
        width={310}
        height={310}
        className="absolute top-0 left-0"
      />
    </div>
  );
};
