import gsap from "gsap";
import React, { RefObject, useEffect } from "react";

export const useInnovationAnimation = ({
  lightbulbRef,
}: {
  lightbulbRef: RefObject<SVGPathElement | null>;
}) => {
  useEffect(() => {
    if (!lightbulbRef.current) return;

    const tl = gsap.timeline({ repeat: -1 });

    tl.fromTo(
      lightbulbRef.current,
      {
        opacity: "1",
        delay: 0.001,
        duration: 0.1,
        ease: "cubic-bezier(0, 0, 0.58, 1)",
      },
      {
        opacity: "0",
        duration: 0.6,
        delay: 1.4,
        ease: "cubic-bezier(0, 0, 0.58, 1)",
      }
    );

    return () => {
      tl.kill();
    };
  }, [lightbulbRef]);
};
