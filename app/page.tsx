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
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center">
          <Image
            aria-hidden="true"
            src="/assets/images/saudi-man.svg"
            alt="Waves"
            width={192}
            height={584}
            className="scale-200 px-5"
          />
        </div>
      </section>
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center">
          <Image
            aria-hidden="true"
            src="/assets/images/mobile-1.png"
            alt="Waves"
            width={298}
            height={431}
          />
          <p className="text-3xl lg:text-5xl font-bold rtl text-center w-max">
            حيث تبدأ الحكاية
          </p>
          <p className="text-[100px] lg:text-[170px] font-bold rtl text-center text-primary w-max">
            بمكالمة قصيرة
          </p>
        </div>
      </section>
    </div>
  );
}
