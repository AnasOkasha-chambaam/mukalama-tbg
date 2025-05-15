"use client";
import React, { useEffect, useState, useRef } from "react";

type CSSValue = number | string;

type ScaleMode = "fit" | "fill" | "width" | "height";

interface ScalerOptions {
  designWidth?: number;
  designHeight?: number;
  mode?: ScaleMode;
  containerRef?: React.RefObject<HTMLElement>;
  maxScale?: number;
  minScale?: number;
}

export const useScaler = ({
  designWidth = 1728,
  designHeight = 1065,
  mode = "fit",
  containerRef,
  maxScale = Infinity,
  minScale = 0.5,
}: ScalerOptions) => {
  const [scale, setScale] = useState(1);
  const defaultContainerRef = useRef<HTMLElement | null>(null);

  const getContainerDimensions = () => {
    const container = containerRef?.current || defaultContainerRef.current;
    if (container) {
      return {
        width: container.clientWidth,
        height: container.clientHeight,
      };
    }
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const calculateScale = () => {
    const { width: containerWidth, height: containerHeight } =
      getContainerDimensions();

    const widthScale = containerWidth / designWidth;
    const heightScale = containerHeight / designHeight;

    let newScale = 1;
    switch (mode) {
      case "fill":
        // Scale to fill the container (some content might be cropped)
        newScale = Math.max(widthScale, heightScale);
        break;
      case "width":
        // Scale based on width only
        newScale = widthScale;
        break;
      case "height":
        // Scale based on height only
        newScale = heightScale;
        break;
      case "fit":
      default:
        // Scale to fit (default behavior - no cropping)
        newScale = Math.min(widthScale, heightScale);
        break;
    }

    // Apply scale constraints
    newScale = Math.min(Math.max(newScale, minScale), maxScale);

    return Number(newScale.toFixed(3)); // Round to 3 decimal places for better performance
  };

  const updateScale = () => {
    setScale(calculateScale());
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initial calculation
    updateScale();

    // Handle resize
    const resizeObserver = new ResizeObserver(() => {
      updateScale();
    });

    // Observe container if provided, otherwise observe window
    const container = containerRef?.current || defaultContainerRef.current;
    if (container) {
      resizeObserver.observe(container);
    }

    window.addEventListener("resize", updateScale);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, [designWidth, designHeight, mode, containerRef, maxScale, minScale]);

  const scaleValue = (value: CSSValue): string => {
    if (typeof value === "number") {
      return `${Math.round(value * scale)}px`;
    }

    // Handle pixel values
    if (typeof value === "string" && value.endsWith("px")) {
      const numValue = parseFloat(value);
      return `${Math.round(numValue * scale)}px`;
    }

    return value.toString();
  };

  const scaleProp = (propValue: CSSValue) => scaleValue(propValue);

  const scaleStyle = {
    margin: (value: CSSValue) => ({ margin: scaleProp(value) }),
    padding: (value: CSSValue) => ({ padding: scaleProp(value) }),
    fontSize: (value: CSSValue) => ({ fontSize: scaleProp(value) }),
    width: (value: CSSValue) => ({ width: scaleProp(value) }),
    height: (value: CSSValue) => ({ height: scaleProp(value) }),
    top: (value: CSSValue) => ({ top: scaleProp(value) }),
    left: (value: CSSValue) => ({ left: scaleProp(value) }),
    right: (value: CSSValue) => ({ right: scaleProp(value) }),
    bottom: (value: CSSValue) => ({ bottom: scaleProp(value) }),
    gap: (value: CSSValue) => ({ gap: scaleProp(value) }),
  } as const;

  console.log("scale", scale);
  return {
    scale,
    scaleStyle,
    scaleValue,
    containerRef: defaultContainerRef,
  };
};
