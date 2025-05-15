"use client";

import { Button } from "@/components/ui/button";
import { useScaler } from "@/hooks";
import Image from "next/image";

export default function Home() {
  const { scale, scaleStyle } = useScaler({});
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header */}
      <header
        className="flex justify-between items-center rtl"
        dir="rtl"
        style={{
          margin: `${scaleStyle.margin("40px").margin} ${
            scaleStyle.margin("80px").margin
          } 0 ${scaleStyle.margin("80px").margin}`,
        }}
      >
        <Image
          src="/logo.png"
          alt="Mukalama"
          width={141.56}
          height={40}
          style={{
            transform: `scale(${scale})`,
          }}
        />
        <div
          className="flex items-center"
          style={{
            gap: `${scaleStyle.gap("50px").gap}`,
          }}
        >
          <div
            className="header-item flex items-center"
            style={{
              ...scaleStyle.gap("25px"),
            }}
          >
            <Image
              src="/assets/icons/email.icon.png"
              alt="Email"
              className="w-auto"
              width={20}
              height={20}
              style={{
                ...scaleStyle.height("20px"),
              }}
            />
            <Image
              src="/assets/icons/instagram.icon.png"
              alt="Instagram"
              className="w-auto"
              width={20}
              height={20}
              style={{
                ...scaleStyle.height("20px"),
              }}
            />
            <Image
              src="/assets/icons/phone.icon.png"
              alt="Phone"
              className="w-auto"
              width={20}
              height={20}
              style={{
                ...scaleStyle.height("20px"),
              }}
            />
          </div>
          <Button
            className="flex-col"
            size={"icon"}
            variant="ghost"
            style={{
              transform: `scale(${scale})`,
            }}
          >
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
          style={{
            transform: `scale(${scale})`,
          }}
        />

        {/* Title and subtitle */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center justify-center"
          style={{
            ...scaleStyle.gap("32px"),
          }}
        >
          <h2
            className="font-semibold rtl text-center"
            dir="rtl"
            style={{
              ...scaleStyle.fontSize("70px"),
            }}
          >
            أهلاً بك في <span className="text-primary">مُكالَمة،</span>
          </h2>
          <p
            className="text-[24.65px] font-medium rtl text-center"
            dir="rtl"
            style={{
              ...scaleStyle.fontSize("22px"),
            }}
          >
            منصتك لاكتشاف أفكار مبتكرة <br /> تلهم التغيير الإيجابي.
          </p>
        </div>
      </main>
    </div>
  );
}
