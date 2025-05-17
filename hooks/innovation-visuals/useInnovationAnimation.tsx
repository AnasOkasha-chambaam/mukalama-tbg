import gsap from "gsap";
import React, { RefObject, useEffect } from "react";

export const useInnovationAnimation = ({
  lightbulbRef,
}: {
  lightbulbRef: RefObject<SVGPathElement | null>;
}) => {
  useEffect(() => {
    if (!lightbulbRef.current) return;

    // Set up the animation timeline
    const tl = gsap.timeline({ repeat: -1 });

    // First animation: from fill-2 to fill-1 (URL to #FFD503)
    tl.fromTo(
      lightbulbRef.current,
      {
        opacity: "1",
        delay: 0.001,
        duration: 0.1, // Slow curve approximation
        ease: "cubic-bezier(0, 0, 0.58, 1)",
      },
      {
        opacity: "0",
        duration: 0.6, // Slow curve approximation
        delay: 1.4,
        ease: "cubic-bezier(0, 0, 0.58, 1)",
      }
    );

    // Clean up animation when component unmounts
    return () => {
      tl.kill();
    };
  }, [lightbulbRef]);
};
