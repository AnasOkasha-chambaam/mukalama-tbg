"use client";

import Image from "next/image";

export const StoryBeginsSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center">
        <Image
          aria-hidden="true"
          src="/assets/images/mobile-1.png"
          alt="Mobile"
          width={298}
          height={431}
          className="scale-[75%] -translate-y-1/5 rotate-[10.48deg]"
        />
        <p className="absolute top-1/2 left-1/2 translate-y-[170%] z-10 -translate-x-1/2 text-3xl lg:text-5xl font-bold rtl text-center w-max">
          حيث تبدأ الحكاية
        </p>
        <p className="absolute top-1/2 left-1/2 -translate-y-1/6 -translate-x-1/2 text-[100px] lg:text-[140px] font-semibold rtl text-center text-primary w-max">
          بمكالمة قصيرة
        </p>
      </div>
    </section>
  );
};
