"use client";

import { InnovationVisuals } from "@/components/InnovationVisuals";
import { RadioWavesAnimation } from "@/components/slides/RadioWaves";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <header
        className="fixed top-0 inset-x-0 z-50 flex justify-between items-center rtl mx-14 mt-7 2xl:mx-20 2xl:mt-10"
        dir="rtl"
      >
        <Image
          src="/logo.svg"
          alt="Mukalama"
          width={141.56}
          height={40}
          className="w-[70px] lg:w-[80px] 2xl:w-[141.56px]"
        />
        <div className="flex gap-[50px] items-center">
          <div className="header-item flex gap-[25px] items-center">
            <Image
              src="/assets/icons/email.icon.svg"
              alt="Email"
              width={20}
              height={20}
              className="w-auto h-[15px] 2xl:h-[20px]"
            />
            <Image
              src="/assets/icons/instagram.icon.svg"
              alt="Instagram"
              width={20}
              height={20}
              className="w-auto h-[15px] 2xl:h-[20px]"
            />
            <Image
              src="/assets/icons/phone.icon.svg"
              alt="Phone"
              width={20}
              height={20}
              className="w-auto h-[15px] 2xl:h-[20px]"
            />
          </div>
          <Button size={"icon"} variant="ghost" className="flex-col scale-75">
            <span className="w-7 h-[3px] bg-foreground" />
            <span className="w-7 h-[3px] bg-primary" />
          </Button>
        </div>
      </header>

      <Image
        aria-hidden="true"
        src="/assets/icons/waves.svg"
        alt="Waves"
        width={951}
        height={951}
        className="fixed top-1/2 left-1/2 pointer-events-none opacity-50 -translate-x-1/2 -translate-y-1/2 h-[90vh] w-auto aspect-square"
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
      <section className="relative min-h-screen flex flex-col items-center justify-center text-sidebar-accent-foreground">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center">
          <Image
            aria-hidden="true"
            src="/assets/images/saudi-man.svg"
            alt="Waves"
            width={192}
            height={584}
            className="scale-[250%] px-5"
          />
        </div>
      </section>
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
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
        <Image
          src="/assets/images/DZRT-bg.svg"
          alt="Background"
          width={951}
          height={1426}
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[500%]"
        />
        <div className="absolute top-[50%] right-[47%] translate-x-1/2 -translate-y-1/12 flex flex-col items-end">
          <div className="-mb-12 relative">
            <p className="font-semibold text-[70px] 2xl:text-[130px]">
              مكــــــالمة
            </p>{" "}
            <div className="absolute top-1/2 left-0 -translate-x-[150%] -translate-y-[55%] scale-[75%]">
              <Image
                src="/assets/images/radio.svg"
                alt="Radio"
                width={484}
                height={464}
              />
              <RadioWavesAnimation />
            </div>
          </div>
          <p className="font-semibold text-[130px] 2xl:text-[200px]">
            ملهمــــــــــــــــة
          </p>
          <div className="text-primary font-semibold text-[65px] 2xl:text-[105px] flex flex-row-reverse gap-6 w-full justify-end -mt-12">
            <p>تُقدِّم محتوى</p>
            <p>مبتكر</p>
            <p>ومتنوع</p>
          </div>
        </div>
      </section>
    </div>
  );
}
