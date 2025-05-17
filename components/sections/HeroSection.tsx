"use client";

import Image from "next/image";

export const HeroSection = () => {
  return (
    <>
      <Image
        aria-hidden="true"
        src="/assets/icons/waves.svg"
        alt="Waves"
        width={951}
        height={951}
        id="waves"
        className="fixed top-1/2 left-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2 h-[90vh] w-auto aspect-square"
      />
      <main className="relative min-h-screen flex flex-col items-center justify-center text-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center">
          <h2
            className="text-2xl lg:text-3xl 2xl:text-5xl font-semibold rtl text-center"
            dir="rtl"
          >
            أهلاً بك في <span className="text-primary">مُكالَمة،</span>
          </h2>
          <p
            className="text-xs lg:text-sm 2xl:text-[24.65px] font-medium rtl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[30px] z-10 w-max"
            dir="rtl"
          >
            منصتك لاكتشاف أفكار مبتكرة <br /> تلهم التغيير الإيجابي.
          </p>
        </div>
      </main>
    </>
  );
};
