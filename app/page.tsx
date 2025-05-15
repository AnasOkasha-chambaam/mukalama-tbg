"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header */}
      <header
        className="flex justify-between items-center mx-20 mt-10 rtl"
        dir="rtl"
      >
        <Image src="/logo.png" alt="Mukalama" width={141.56} height={40} />
        <div className="flex gap-[50px] items-center">
          <div className="header-item flex gap-[25px] items-center">
            <Image
              src="/assets/icons/email.icon.png"
              alt="Email"
              className="w-auto h-[20px]"
              width={20}
              height={20}
            />
            <Image
              src="/assets/icons/instagram.icon.png"
              alt="Instagram"
              className="w-auto h-[20px]"
              width={20}
              height={20}
            />
            <Image
              src="/assets/icons/phone.icon.png"
              alt="Phone"
              className="w-auto h-[20px]"
              width={20}
              height={20}
            />
          </div>
          <Button className="flex-col" size={"icon"} variant="ghost">
            <span className="w-7 h-[3px] bg-foreground" />
            <span className="w-7 h-[3px] bg-primary" />
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center text-center">
        {/* Circular sound waves */}
        <Image
          aria-hidden="true"
          src="/assets/icons/waves.svg"
          alt="Waves"
          width={951}
          height={951}
          className="absolute top-1/2 left-1/2 pointer-events-none w-[951px] h-[951px] opacity-50 -translate-x-1/2 -translate-y-1/2"
        />

        {/* Title and subtitle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center justify-center gap-8">
          <h2 className="text-[70px] font-semibold rtl text-center" dir="rtl">
            أهلاً بك في <span className="text-primary">مُكالَمة،</span>
          </h2>
          <p className="text-[24.65px] font-medium rtl text-center" dir="rtl">
            منصتك لاكتشاف أفكار مبتكرة <br /> تلهم التغيير الإيجابي.
          </p>
        </div>
      </main>
    </div>
  );
}
