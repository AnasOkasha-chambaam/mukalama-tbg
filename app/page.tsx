"use client";

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
          <div className="guy-and-accessories absolute z-50 top-1/2 left-1/2 -translate-y-[58%] -translate-x-[140%] scale-75">
            <Image
              src="/assets/images/guy-standing.png"
              alt="Guy Standing"
              width={174}
              height={584}
              className="relative z-20"
            />
            <div className="bulb-container absolute top-1/2 right-0 -translate-y-[140%] z-40 translate-x-[50%]">
              <div className="bulb relative z-20">
                <Image
                  src="/assets/images/bulb.svg"
                  alt="Bulb"
                  width={92}
                  height={137}
                  className="absolute opacity-85"
                />
                <Image
                  src="/assets/images/bulb (variant).svg"
                  alt="Bulb"
                  width={92}
                  height={137}
                />
              </div>
              <Image
                src="/assets/images/scribbles-star.svg"
                alt="Scribbles"
                width={123}
                height={132}
                className="absolute top-0 left-0 translate-x-[45%] -translate-y-[22%] z-10 scale-125"
              />
            </div>
            <Image
              src="/assets/images/rocket.svg"
              alt="Rocket"
              width={102}
              height={118}
              className="rocket-container absolute top-0 left-0 -translate-x-[25%] translate-y-[60%] z-10"
            />

            <Image
              src="/assets/images/spark.svg"
              alt="Spark"
              width={31}
              height={49}
              className="absolute top-0 right-0 -translate-y-[50%] -translate-x-[50%]"
            />

            <Image
              src="/assets/images/ellipse.svg"
              alt="Ellipse"
              width={9}
              height={9}
              className="absolute top-[39%] left-0 -translate-y-1/2 z-10"
            />
          </div>
          <div className="text-3xl lg:text-5xl font-medium rtl text-center w-max !text-[130px] flex flex-col gap-2 items-center justify-center">
            <p className="text-primary -translate-x-[45px]">
              تحمل رســـــــــــــالة
            </p>
            <p>طويــــــــــــــــلة الأثر</p>
          </div>
        </div>
      </section>
    </div>
  );
}
