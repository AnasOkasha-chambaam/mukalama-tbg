"use client";

import { InnovationVisuals } from "@/components/InnovationVisuals";

export const MessageImpactSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/6 z-10 flex flex-col items-center justify-center">
        <div className="guy-and-accessories absolute z-50 top-1/2 left-1/2 -translate-y-[58%] -translate-x-[90%] scale-75">
          <InnovationVisuals />
        </div>
        <div className="text-3xl lg:text-5xl font-medium rtl text-center w-max !text-[130px] flex flex-col gap-2 items-center justify-center">
          <p className="text-primary -translate-x-[45px] relative z-20">
            تحمل رســـــــــــــالة
          </p>
          <div className="relative h-fit">
            <p className="relative z-20">طويــــــــــــــــلة الأثر</p>
            {/* wave on white COMPRESSED */}
            <div className="absolute top-1/2 -translate-y-[45%] -translate-x-[27%] bg-background overflow-hidden scale-[60%]">
              <video
                src={"/assets/videos/waves.mp4"}
                className="w-[574px] h-[323px] mix-blend-multiply"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
